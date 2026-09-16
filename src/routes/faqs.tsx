import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ConsultationBand, PageHero, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Divorce Financial Planning FAQs | Austin, TX" },
      { name: "description", content: "Answers about Texas property division, debt, retirement accounts, QDROs, alimony, housing and working with a CDFA." },
      { property: "og:title", content: "Divorce Financial Planning FAQs | Austin Divorce Planners" },
      { property: "og:description", content: "Clear answers to common financial questions before, during and after divorce in Texas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faqs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: FaqPage,
});

const faqs: Array<[string, string]> = [
  ["When am I responsible for my spouse’s debts when I had nothing to do with the charges?", "Debts from before marriage are generally a person’s separate debt. Debt incurred during the marriage to provide necessities such as clothing and food may be treated as community debt."],
  ["Is my IRA community property since it is in my name only?", "Property acquired during the marriage is typically marital property regardless of whose name appears on it. Retirement funds may also carry early-withdrawal penalties and tax liabilities, so those costs should be part of any long-range settlement analysis."],
  ["Will I be able to receive maintenance payments in Austin, TX?", "Court-ordered support is limited in Texas, but contractual alimony beyond state guidelines may be negotiated. A projected post-divorce budget can document financial needs and support an informed discussion."],
  ["If I have custody of the children, should I keep the house?", "The answer depends on the full financial picture. Maintenance, utilities and mortgage payments must be compared with alternative housing and with assets that may produce income or appreciate over time."],
  ["What is a Qualified Domestic Relations Order, and is it necessary?", "A Qualified Domestic Relations Order, or QDRO, is the legal document used to divide a pension or 401(k) in divorce. The divorce decree alone does not divide these accounts, and specialist guidance may be needed."],
  ["Should you buy a house before the divorce is final?", "Texas generally treats property purchased during marriage as community property. Buying during divorce can complicate ownership, require a spouse’s permission and conflict with temporary orders limiting discretionary spending."],
  ["Do we have to go to court?", "If no settlement is reached, both spouses may need to attend court with their attorneys. When an agreement is reached, typically only the spouse who filed must attend the final hearing."],
  ["Should we divide everything 50/50?", "Texas calls for a just and equitable division, which may consider differences in need and earning power. An equal split is not automatically the most appropriate or sustainable result."],
  ["Do I need an attorney in Austin, TX?", "An attorney may serve as an hourly consultant rather than manage every aspect. Some couples work with a CDFA and mediator to reach an agreement, then use an attorney to prepare the legal documents."],
  ["What is a collaborative divorce attorney and when should I use one?", "Collaborative divorce uses joint meetings among the spouses, attorneys and financial or mental-health professionals to negotiate without litigation. It depends on open disclosure; if the process fails, the participating professionals must withdraw."],
  ["How do I know which assets are best to keep?", "Assets are not financially equal. Retirement accounts can grow, while homes and cars require ongoing spending. Taxes, liquidity, maintenance and future appreciation all deserve consideration."],
  ["I have never worked. Can I still get Social Security?", "Under federal rules, someone married for at least 10 years may qualify for a benefit based on a former spouse’s record without reducing that former spouse’s benefit. Individual eligibility should be confirmed."],
  ["When should I employ the services of a Certified Divorce Financial Analyst?", "Ideally, involve a CDFA when you first consider divorce. A CDFA can still add value any time before settlement is final by testing whether a proposed agreement is financially sustainable."],
  ["Are there different ways to get divorced in Texas?", "Common paths include an informal agreement, early mediation, collaborative divorce and litigation. The right process depends on complexity, communication, children, property and whether both spouses can reach an agreement."],
];

function FaqPage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Frequently asked questions"
          title="Clear answers for complex financial decisions"
          body="Every divorce is different, but the right questions can reveal risks, trade-offs and opportunities before a settlement becomes permanent."
        >
          <Link to="/contact" className="btn-base btn-brass">Ask About Your Situation</Link>
          <a href={PHONE_HREF} className="btn-base btn-outline-light">Call ADP Now</a>
        </PageHero>

        <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Financial questions, explained</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What clients ask us most often</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">These answers provide general information, not legal advice. Your assets, family needs and goals should be evaluated as part of your individual plan.</p>
          </Reveal>
          <div className="mt-12 border-t border-border">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={(index % 3) * 50}>
                <details className="group border-b border-border py-1">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-display text-lg font-semibold marker:content-none">
                    <span className="flex gap-4">
                      <span className="mt-1 text-xs text-brass">{String(index + 1).padStart(2, "0")}</span>
                      {question}
                    </span>
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-brass transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pb-7 pl-10 leading-relaxed text-muted-foreground">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
        <ConsultationBand />
      </main>
      <SiteFooter />
    </div>
  );
}
