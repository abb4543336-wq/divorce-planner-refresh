import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import mark from "@/assets/adp-mark.png";

export const PHONE_HREF = "tel:5129636883";
export const PHONE_LABEL = "(512) 963-6883";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={mark} alt="Austin Divorce Planners" width={40} height={40} className="h-9 w-9" />
          <span className="font-display text-sm leading-tight font-semibold">
            Austin Divorce
            <br />
            Planners
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brass"
              activeProps={{ className: "text-brass" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="hidden text-sm font-semibold text-ink sm:block lg:hidden xl:block">
            {PHONE_LABEL}
          </a>
          <Link to="/contact" className="btn-base btn-ink hidden px-5 py-2.5 text-sm sm:inline-flex">
            Schedule Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3 font-medium text-ink-soft last:border-0"
                activeProps={{ className: "text-brass" }}
              >
                {item.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="mt-4 flex items-center gap-2 font-semibold text-ink">
              <Phone className="h-4 w-4 text-brass" /> {PHONE_LABEL}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ink-panel border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={mark} alt="" width={40} height={40} loading="lazy" className="h-9 w-9" />
            <span className="font-display text-sm leading-tight font-semibold">
              Austin Divorce
              <br />
              Planners
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-white/60">
            Divorce financial planning by a Certified Divorce Financial Analyst™ and Certified
            Financial Planner® — serving Austin and all of Texas.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><a href={PHONE_HREF} className="transition-colors hover:text-brass">{PHONE_LABEL}</a></li>
            <li>11824 Jollyville Rd., Suite 500, Austin, TX 78759</li>
            <li>Monday–Friday, 9:00 AM–7:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Austin Divorce Planners. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden ink-panel pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 hairline-grid opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[2.65rem] leading-[1.05] font-semibold sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{body}</p>
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

export function ConsultationBand() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brass px-8 py-14 text-accent-foreground sm:px-14">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/70">Your first step</p>
        <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Start with a $100 consultation</h2>
            <p className="mt-4 leading-relaxed text-accent-foreground/80">
              Bring your questions and your financial concerns. We’ll help you understand the path ahead and identify practical next steps.
            </p>
          </div>
          <Link to="/contact" className="btn-base btn-ink shrink-0">Schedule Consultation</Link>
        </div>
      </div>
    </section>
  );
}