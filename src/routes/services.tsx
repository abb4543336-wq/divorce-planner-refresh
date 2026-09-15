import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, HeartHandshake, House, Landmark, Scale, WalletCards } from "lucide-react";

import analysisImg from "@/assets/analysis.jpg";
import couplePlanning from "@/assets/couple-planning.jpg";
import { Reveal } from "@/components/Reveal";
import { ConsultationBand, PageHero, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Divorce Financial Planning Services | Austin, TX" },
      { name: "description", content: "Divorce financial analysis, asset division, retirement planning, mediation support and post-divorce planning across Texas." },
      { property: "og:title", content: "Divorce Financial Planning Services | Austin Divorce Planners" },
      { property: "og:description", content: "Practical financial analysis and planning for a fair settlement and a secure next chapter." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Scale, title: "Divorce financial analysis", body: "Understand the short- and long-term impact of settlement options through detailed analysis of assets, liabilities, taxes and cash flow." },
  { icon: WalletCards, title: "Asset division strategy", body: "Compare what each asset is truly worth after taxes, costs and future growth—not simply what appears on a statement today." },
  { icon: Landmark, title: "Retirement & pension analysis", body: "Evaluate IRAs, 401(k)s, pensions and the financial considerations surrounding Qualified Domestic Relations Orders." },
  { icon: House, title: "Home & real estate decisions", body: "Model the cost of keeping the marital home against alternative housing and the value of other income-producing assets." },
  { icon: Calculator, title: "Budget & support planning", body: "Build a realistic post-divorce budget and document financial needs for conversations about contractual alimony and support." },
  { icon: HeartHandshake, title: "Post-divorce financial planning", body: "Transition accounts, manage liquid assets and create a practical roadmap for retirement, education and long-term stability." },
];

const pathways = [
  ["Individuals", "Focused guidance for women and men who need an advocate for the financial side of divorce."],
  ["Couples", "Neutral financial support designed to clarify options and help both parties work toward an equitable agreement."],
  ["Collaborative teams", "Financial expertise coordinated with attorneys, mediators and other professionals to keep the process informed and efficient."],
];

function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Financial clarity through every stage" title="Divorce planning built around the life you want next" body="From early questions to settlement analysis and post-divorce wealth planning, we turn complex financial choices into a clear, workable plan.">
          <Link to="/contact" className="btn-base btn-brass">Schedule Consultation</Link>
          <a href={PHONE_HREF} className="btn-base btn-outline-light">Call ADP Now</a>
        </PageHero>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our services</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">See the complete financial picture before you agree</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">A settlement that looks equal today may not work equally over time. We evaluate the details that affect your future so you can negotiate with confidence.</p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={(index % 3) * 90}>
                  <article className="h-full bg-background p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-brass"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{service.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-secondary/45 py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <Reveal><img src={couplePlanning} alt="A couple reviewing divorce financial documents with an advisor" width={1408} height={1008} className="w-full rounded-[1.75rem] border border-border object-cover shadow-card" /></Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Support that fits your process</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Individual, neutral and collaborative planning</h2>
              <div className="mt-8 space-y-7">
                {pathways.map(([title, body], index) => (
                  <div key={title} className="flex gap-5 border-b border-border pb-7 last:border-0 last:pb-0">
                    <span className="font-display text-sm font-semibold text-brass">0{index + 1}</span>
                    <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-muted-foreground">{body}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
            <Reveal>
              <p className="eyebrow">How we help</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Useful analysis, not more confusion</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">We gather the financial data, identify assets, model proposed settlements and explain the trade-offs in plain language. The result is a financial roadmap you can use with your attorney, mediator or spouse.</p>
              <Link to="/faqs" className="mt-8 inline-flex items-center gap-2 font-semibold text-ink transition-colors hover:text-brass">Explore common questions <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
            <Reveal delay={100}><img src={analysisImg} alt="Financial documents and tools used for asset division analysis" width={1200} height={840} loading="lazy" className="w-full rounded-[1.75rem] border border-border object-cover shadow-card" /></Reveal>
          </div>
        </section>
        <ConsultationBand />
      </main>
      <SiteFooter />
    </div>
  );
}
