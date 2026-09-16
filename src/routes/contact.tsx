import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/Reveal";
import { PageHero, PHONE_HREF, PHONE_LABEL, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Austin Divorce Planners | Consultation" },
      { name: "description", content: "Schedule a $100 divorce financial planning consultation with Keith Powell. Serving Austin and clients across Texas." },
      { property: "og:title", content: "Contact Austin Divorce Planners" },
      { property: "og:description", content: "Take the first step toward financial clarity with a $100 consultation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [ready, setReady] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello, I'm ${String(data.get("firstName") ?? "")} ${String(data.get("lastName") ?? "")}. ${String(data.get("message") ?? "I'd like to schedule a consultation.")} My phone is ${String(data.get("phone") ?? "")}.`;
    setReady(true);
    window.location.href = `sms:5129636883?body=${encodeURIComponent(message)}`;
  }

  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Contact Austin Divorce Planners" title="A clearer financial future starts with one conversation" body="Tell us what you’re facing. Your initial $100 consultation is a focused opportunity to ask questions, understand your options and identify the next practical step.">
          <a href={PHONE_HREF} className="btn-base btn-brass">Call {PHONE_LABEL}</a>
        </PageHero>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Reach out directly</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">We serve clients throughout Texas</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Meet by phone, virtually or at our Austin office. We work with clients across Austin, DFW, Houston, San Antonio, Round Rock, Georgetown and surrounding communities.</p>
            <div className="mt-10 space-y-7">
              <div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-brass" /><div><h3 className="font-semibold">Phone</h3><a href={PHONE_HREF} className="mt-1 block text-muted-foreground hover:text-brass">{PHONE_LABEL}</a></div></div>
              <div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" /><div><h3 className="font-semibold">Austin office</h3><p className="mt-1 text-muted-foreground">11824 Jollyville Rd., Suite 500<br />Austin, TX 78759</p><p className="mt-2 text-sm text-muted-foreground">Building 5, ground floor; shared office with Barnett & Leuty, PC.</p></div></div>
              <div className="flex gap-4"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-brass" /><div><h3 className="font-semibold">Office hours</h3><p className="mt-1 text-muted-foreground">Monday–Friday, 9:00 AM–7:00 PM</p></div></div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-border bg-card p-7 shadow-card sm:p-10">
              <p className="eyebrow">Start your inquiry</p>
              <h2 className="mt-3 text-2xl font-semibold">Share a few details</h2>
              <p className="mt-3 text-sm text-muted-foreground">Submitting opens a pre-filled text message to our office. Your information stays on your device until you send it.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">First name<input required name="firstName" autoComplete="given-name" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-normal outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20" /></label>
                <label className="text-sm font-semibold">Last name<input required name="lastName" autoComplete="family-name" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-normal outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20" /></label>
                <label className="text-sm font-semibold">Email<input required name="email" type="email" autoComplete="email" minLength={5} maxLength={50} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-normal outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20" /></label>
                <label className="text-sm font-semibold">Phone<input required name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10}" autoComplete="tel" placeholder="10 digits" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-normal outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20" /></label>
                <label className="text-sm font-semibold sm:col-span-2">How can we help?<textarea required name="message" rows={5} placeholder="Briefly, what can we do for you?" className="mt-2 w-full resize-y rounded-md border border-input bg-background px-4 py-3 font-normal outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/20" /></label>
              </div>
              <button type="submit" className="btn-base btn-ink mt-7 w-full sm:w-auto">Prepare Text Message</button>
              {ready && <p className="mt-4 text-sm text-muted-foreground" role="status">Your message is ready in your texting app. Review it, then tap send.</p>}
            </form>
          </Reveal>
        </section>

        <section className="border-y border-border bg-secondary/45 py-20">
          <Reveal className="mx-auto max-w-4xl px-6 text-center">
            <p className="eyebrow">Initial consultation</p>
            <h2 className="mt-4 text-4xl font-semibold">Focused guidance for $100</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Use this conversation to introduce your situation, explore preliminary options and understand where focused financial analysis can help.</p>
            <a href={PHONE_HREF} className="btn-base btn-ink mt-8">Call to Schedule</a>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
