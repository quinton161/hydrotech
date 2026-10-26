/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CommonJS verification harness. */
// Exercise the actual endpoint with provider fetches mocked; never sends email.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const modules = new Map();
function load(file) {
  if (modules.has(file)) return modules.get(file);
  const loaded = { exports: {} };
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  new Function('require', 'module', 'exports', source)((id) => id.startsWith('@/') ? load(path.join(root, id.slice(2) + '.ts')) : require(id), loaded, loaded.exports);
  modules.set(file, loaded.exports);
  return loaded.exports;
}
const saved = { ...process.env };
const realFetch = global.fetch;
const valid = {name:'Local verification',phone:'+263717000000',email:'verification@example.com',location:'Harare',projectType:'Borehole Drilling',propertyType:'Residential',message:'Local automated check; no email sent.',website:''};
const { POST } = load(path.join(root, 'app/api/contact/route.ts'));
const call = (payload, headers={}) => POST(new Request('http://localhost:3000/api/contact', {method:'POST',headers:{'Content-Type':'application/json',...headers},body:typeof payload==='string'?payload:JSON.stringify(payload)}));
(async()=>{
  delete process.env.CONTACT_WEBHOOK_URL; delete process.env.RESEND_API_KEY; delete process.env.CONTACT_FROM_EMAIL;
  assert.equal((await call(valid)).status,503);
  assert.equal((await call({...valid,location:''})).status,400);
  assert.equal((await call({...valid,email:'invalid'})).status,400);
  assert.equal((await call({...valid,phone:'abcdefg'})).status,400);
  assert.equal((await call({...valid,projectType:'Unknown'})).status,400);
  assert.equal((await call({...valid,website:'spam'})).status,400);
  assert.equal((await call('null')).status,400);
  assert.equal((await call('{bad json')).status,400);
  assert.equal((await call(valid,{origin:'https://foreign.example'})).status,403);
  assert.equal((await call(valid,{origin:'http://127.0.0.1:3000',host:'127.0.0.1:3000'})).status,503);
  process.env.RESEND_API_KEY='local-mock';process.env.CONTACT_FROM_EMAIL='Website <website@hydrotechdrilling.co.zw>';
  global.fetch=async()=>new Response('{}',{status:500});
  assert.equal((await call(valid)).status,502);
  global.fetch=async()=>new Response('{}',{status:200});
  assert.equal((await call(valid)).status,502);
  global.fetch=async(url,options)=>{assert.equal(url,'https://api.resend.com/emails');const body=JSON.parse(options.body);assert.deepEqual(body.to,['sales@hydrotechdrilling.co.zw']);assert.ok(body.text.includes('Harare'));assert.ok(body.text.includes('Residential'));return Response.json({id:'mock-receipt'});};
  const success=await call(valid);assert.equal(success.status,200);assert.deepEqual(await success.json(),{ok:true});
  process.env.CONTACT_WEBHOOK_URL='https://provider.example/enquiries';
  global.fetch=async(url,options)=>{assert.equal(url,process.env.CONTACT_WEBHOOK_URL);assert.equal(JSON.parse(options.body).location,'Harare');return new Response(null,{status:202});};
  assert.equal((await call(valid)).status,200);
  global.fetch=async()=>{throw new Error('timeout');};assert.equal((await call(valid)).status,502);
  console.log('15 contact endpoint checks passed; no emails sent.');
})().finally(()=>{global.fetch=realFetch;for(const key of Object.keys(process.env))if(!(key in saved))delete process.env[key];Object.assign(process.env,saved);}).catch(error=>{console.error(error);process.exitCode=1;});
