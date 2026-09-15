import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import mediationImg from "@/assets/mediation.jpg";
import { Reveal } from "@/components/Reveal";
import { ConsultationBand, PageHero, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Austin Divorce Planners | Keith Powell" },
      { name: "description", content: "Meet Keith Powell, CFP® and CDFA®, and the team bringing 30+ years of financial experience to divorce planning across Texas." },
      { property: "og:title", content: "About Austin Divorce Planners" },
      { property: "og:description", content: "A relationship-centered team helping Texans navigate divorce with financial clarity and confidence." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const credentials = [
  { icon: Award, value: "CFP® & CDFA®", label: "Dual professional credentials" },
  { icon: BriefcaseBusiness, value: "30+ years", label: "Financial planning experience" },
  { icon: GraduationCap, value: "Texas A&M", label: "Economics, psychology minor" },
  { icon: Users, value: "Since 2012", label: "Firm founded in Austin" },
];

const team = [
  { name: "Kristen Fuhrman", role: "Wealth Manager", body: "Kristen provides relationship-centered wealth planning for families and individuals navigating major life transitions and generational planning." },
  { name: "Stacey Stoker", role: "VP of Operations", body: "Stacey leads firm operations, growth and the client experience, bringing long-term partnership and consistency to every engagement." },
];

function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <main>
        <PageHero eyebrow="About Austin Divorce Planners" title="Financial expertise with a human understanding of transition" body="We combine rigorous analysis with steady, personal guidance—helping you make decisions that support both today’s settlement and tomorrow’s life.">
          <Link to="/contact" className="btn-base btn-brass">Meet With Our Team</Link>
          <a href={PHONE_HREF} className="btn-base btn-outline-light">Call ADP Now</a>
        </PageHero>

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal><img src={heroPortrait} alt="Confident client in an Austin office" width={1408} height={1760} className="max-h-[42rem] w-full rounded-[1.75rem] border border-border object-cover object-top shadow-card" /></Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Keith Powell, CFP®, CDFA®</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A financial roadmap for one of life’s most difficult transitions</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>Keith Powell founded Austin Divorce Planners in 2012 to bridge sound financial analysis with the emotional realities of divorce. His approach draws on both economics and psychology to help clients see their options clearly and move forward with confidence.</p>
              <p>With more than 30 years of experience, Keith has served in leadership roles at Charles Schwab, TD Ameritrade and United Capital. He earned a B.S. in Economics with a minor in Psychology from Texas A&M University in 1991.</p>
              <p>As both a Certified Financial Planner® and Certified Divorce Financial Analyst®, Keith focuses on the decisions that can shape a client’s financial life long after the decree is signed.</p>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-border bg-secondary/45 py-20">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, index) => {
              const Icon = item.icon;
              return <Reveal key={item.label} delay={index * 80}><div className="h-full bg-background p-7"><Icon className="h-5 w-5 text-brass" /><p className="mt-5 font-display text-xl font-semibold">{item.value}</p><p className="mt-1 text-sm text-muted-foreground">{item.label}</p></div></Reveal>;
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our team</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Experience you can lean on</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="surface-card h-full p-8 sm:p-10"><p className="eyebrow">{member.role}</p><h3 className="mt-4 text-2xl font-semibold">{member.name}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{member.body}</p></article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="ink-panel py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Our philosophy</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">The numbers matter. So does the life behind them.</h2>
              <p className="mt-6 leading-relaxed text-white/70">Our work centers on women in transition, individuals and divorcing couples. We help clients understand the financial consequences of each choice while keeping the larger goal in view: a fair resolution and a stable fresh start.</p>
              <p className="mt-5 text-sm leading-relaxed text-white/55">Professional affiliations include FPA, ADFP, the Institute for Divorce Financial Analysts and Collaborative Divorce Texas.</p>
            </Reveal>
            <Reveal delay={100}><img src={mediationImg} alt="Collaborative financial planning meeting in Austin" width={1408} height={1008} loading="lazy" className="w-full rounded-[1.75rem] border border-white/10 object-cover" /></Reveal>
          </div>
        </section>
        <ConsultationBand />
      </main>
      <SiteFooter />
    </div>
  );
}
