"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import {
  ArrowRight,
  Close,
  Menu,
} from "@/components/icons";
import { navUtility, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <div className="container">
        <div className="nav-shell">
          <Logo />

          <nav className="nav-menu" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link href="/request-a-quote" className="btn btn-primary nav-cta">
              <span>Get a Quote</span>
              <ArrowRight className="btn-arrow" />
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <div className="container">
          <nav className="mobile-nav" aria-label="Mobile">
            {site.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-link${isActive(item.href) ? " is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-link-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
                <ArrowRight />
              </Link>
            ))}
          </nav>
          <div className="mobile-utility">
            <Link href="/request-a-quote" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
            {navUtility.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mobile-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
