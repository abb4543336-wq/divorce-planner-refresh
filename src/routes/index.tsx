import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";
import analysisImg from "@/assets/analysis.jpg";
import couplePlanning from "@/assets/couple-planning.jpg";
import mediationImg from "@/assets/mediation.jpg";
import mark from "@/assets/adp-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Austin Divorce Planners | CDFA & CFP Divorce Financial Planning" },
      {
        name: "description",
        content:
          "Pre and post divorce financial planning in Austin, TX. Certified Divorce Financial Analyst and CFP with 30+ years of experience. $100 initial consultation.",
      },
      {
        property: "og:title",
        content: "Austin Divorce Planners | Divorce Financial Planning in Texas",
      },
      {
        property: "og:description",
        content:
          "Protect your financial future with a Certified Divorce Financial Analyst. Asset division, settlement analysis and post-divorce planning across Texas.",
      },
    ],
  }),
  component: Home,
});

const PHONE = "tel:5129636883";
const PHONE_LABEL = "(512) 963-6883";

const slides = [
  {
    eyebrow: "Texas Certified Divorce Financial Analyst",
    title: "Customized divorce finance solutions for your fresh start",
    body: "Pre and post divorce financial planning, customized to you, for long-term stability and peace of mind.",
  },
  {
    eyebrow: "Expert Insight, Not Guesswork",
    title: "Make empowered divorce financial decisions",
    body: "Equip yourself with the expert insights to protect your financial future.",
  },
  {
    eyebrow: "Your Fresh Start Deserves A Fair Split",
    title: "Calculate your post-divorce needs with confidence",
    body: "Avoid mistakes and uncover the full potential of your assets to help secure a fair division.",
  },
];

const pillars = [
  {
    title: "Expert Financial Advice",
    body: "For 30+ years, Austin Divorce Planners has been helping people like you control their financial changes in the Austin, Texas area. We have seen it all.",
    image: analysisImg,
    alt: "Asset division worksheets, brass scales and a model house on an advisor's desk",
  },
  {
    title: "Detailed Calculations & Assistance",
    body: "Get sound planning advice from an expert in divorce. Keith Powell is a Certified Divorce Financial Analyst™ (CDFA™) and Certified Financial Planner® (CFP®).",
    image: mediationImg,
    alt: "A financial advisor reviewing settlement documents with two clients in an Austin office",
  },
  {
    title: "Collaborative Approach",
    body: "We can work in tandem with or independent from your attorney for cohesive, comprehensive advocacy. Working with a CDFA can save you money in your divorce.",
    image: couplePlanning,
    alt: "A couple reviewing financial paperwork with their divorce financial planner",
  },
];

const whyUs = [
  {
    title: "Specialized divorce planning expertise",
    body: "We are one of the few financial advising firms that focus solely on divorce planning, especially for women.",
  },
  {
    title: "Comprehensive support",
    body: "From asset division to budgeting for your new life, we provide tailored advice to protect your financial well-being.",
  },
  {
    title: "Collaborative approach",
    body: "We work alongside your attorney to ensure your financial interests are represented accurately and effectively.",
  },
];

const services = [
  {
    title: "Divorce financial analysis",
    body: "Detailed assessment of marital assets, liabilities, and potential settlement scenarios.",
  },
  {
    title: "Post-divorce financial planning",
    body: "Strategies to rebuild your financial stability and grow your wealth over time.",
  },
  {
    title: "Retirement & investment management",
    body: "Expert advice to secure your long-term financial future.",
  },
];

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "Understanding your unique situation, priorities and the timeline you are working with.",
  },
  {
    n: "02",
    title: "Financial Analysis",
    body: "Assessing assets, liabilities and division strategies with software-modelled settlement scenarios.",
  },
  {
    n: "03",
    title: "Tailored Solutions",
    body: "Crafting fair and equitable settlements — then planning the years that follow.",
  },
];

const reviews = [
  {
    name: "Adrienne Ryholt",
    when: "October 2025",
    text: "Hiring Keith Powell was one of the best decisions I made during my divorce. While my attorney focused on the legal aspects, Keith focused on the financial picture. His clear explanations, detailed projections and calm professionalism brought structure and confidence to an otherwise chaotic process.",
  },
  {
    name: "Jake Blaustein",
    when: "June 2026",
    text: "10 of 10 recommend. Keith was tremendously helpful, and the first person among a dozen we'd spoken to that exhibited his level of personal tact and professional acumen. Hire this man if you seek attention to detail with a personal touch.",
  },
  {
    name: "Dan Schaeffer",
    when: "March 2026",
    text: "If you are navigating a divorce there is nobody better to guide you through the financial decision making than Keith Powell. His experience makes him an ideal partner when faced with these trade-off decisions.",
  },
  {
    name: "Josh Tollett",
    when: "March 2026",
    text: "Keith has a wonderful way of simplifying the divorce process and helping both sides achieve their goals. He should be a first call when contemplating divorce.",
  },
  {
    name: "Antonieta Graham",
    when: "July 2026",
    text: "Keith Powell is wonderful at helping divorcing couples efficiently separate assets and helps minimize extra attorney expenses for both parties.",
  },
  {
    name: "Erika Spies",
    when: "July 2026",
    text: "If you're thinking about a divorce, Keith is the man to contact. He is the one I refer my friends to.",
  },
];

const navLinks = [
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#consultation", label: "Consultation" },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-brass">
          <path d="M10 1.6l2.6 5.3 5.8.85-4.2 4.1 1 5.8L10 14.9l-5.2 2.75 1-5.8L1.6 7.75l5.8-.85z" />
        </svg>
      ))}
    </div>
  );
}

function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[active] ?? slides[0]!;

  return (
    <div className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={mark} alt="Austin Divorce Planners" width={40} height={40} className="h-9 w-9" />
            <span className="font-display text-sm leading-tight font-semibold tracking-tight">
              Austin Divorce
              <br />
              Planners
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-brass"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE} className="hidden text-sm font-semibold text-ink sm:block">
              {PHONE_LABEL}
            </a>
            <a href="#consultation" className="btn-base btn-ink px-5 py-2.5 text-sm">
              Schedule Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative ink-panel pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 hairline-grid opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p key={`e-${active}`} className="eyebrow animate-in fade-in duration-700">
              {slide.eyebrow}
            </p>
            <h1
              key={`t-${active}`}
              className="mt-6 animate-in fade-in slide-in-from-bottom-3 text-[2.6rem] leading-[1.05] font-semibold duration-700 sm:text-6xl lg:text-[4.1rem]"
            >
              {slide.title}
            </h1>
            <p
              key={`b-${active}`}
              className="mt-6 max-w-xl animate-in fade-in text-lg text-white/70 duration-1000"
            >
              {slide.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#consultation" className="btn-base btn-brass">
                Schedule Consultation
              </a>
              <a href={PHONE} className="btn-base btn-outline-light">
                Call ADP Now
              </a>
            </div>
            <div className="mt-12 flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? "w-12 bg-brass" : "w-6 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["30+", "Years of experience"],
                ["CDFA™", "Certified analyst"],
                ["CFP®", "Certified planner"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl font-semibold text-brass">{k}</dt>
                  <dd className="mt-1 text-xs text-white/60">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={heroPortrait}
                alt="A woman standing confidently in an Austin office after divorce financial planning"
                width={1408}
                height={1760}
                className="h-[32rem] w-full object-cover object-top lg:h-[38rem]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-10 rounded-2xl bg-background p-5 shadow-lift">
              <p className="eyebrow">Initial consultation</p>
              <p className="mt-2 font-display text-2xl font-semibold text-ink">
                $100 with a seasoned expert
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Serving Austin and all of Texas — for women, men and couples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="approach" className="mx-auto max-w-7xl px-6 pt-28 pb-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why work with a CDFA</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Divorce is a legal process. It is also the biggest financial decision of your life.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article className="surface-card h-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1200}
                  height={840}
                  className="h-52 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose + services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Why choose Austin Divorce Planners?</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              More than a legal process — a life transition that deserves a financial plan
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              At Austin Divorce Planners, we understand that divorce requires careful financial
              planning and emotional support. Our team in Austin, TX is dedicated to guiding you
              through every step of your financial journey during and after your divorce.
            </p>
            <ul className="mt-10 space-y-8">
              {whyUs.map((w) => (
                <li key={w.title} className="border-l-2 border-brass pl-5">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-muted-foreground">{w.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="ink-panel h-full rounded-[1.75rem] p-9">
              <p className="eyebrow">Our divorce planning services include</p>
              <div className="mt-8 space-y-8">
                {services.map((s, i) => (
                  <div key={s.title} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                    <span className="font-display text-sm text-brass">0{i + 1}</span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-white/65">{s.body}</p>
                  </div>
                ))}
              </div>
              <a href="#consultation" className="btn-base btn-brass mt-10 w-full">
                Schedule Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-border bg-secondary/50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Smooth divorce resolution</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Effortless divorce finance planning
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="h-full bg-background p-9">
                  <span className="font-display text-5xl font-semibold text-brass-soft">{s.n}</span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored planning */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-card">
              <img
                src={couplePlanning}
                alt="A man and a woman reviewing divorce finance documents with their planner"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Comprehensive divorce planning</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Tailored divorce planning for men, women and couples in Austin, TX
            </h2>
            <h3 className="mt-6 text-lg font-semibold text-ink-soft">
              An equitable financial future for all
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our expertise extends to specialized divorce planning for both men and women. For men
              navigating a system that may favor their spouse, our services provide expert guidance
              to level the playing field. For women, we offer knowledgeable consultations and
              dedicated assistance focused on the financial aspects of this transition. Our balanced
              approach also facilitates collaborative planning for couples, encouraging fair
              settlements and addressing children's needs.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our planning covers marital and rental homes, retirement accounts, pensions and other
              key financial areas — and continues past the decree with college and retirement
              planning, aiming for a stable future beyond the proceedings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#consultation" className="btn-base btn-ink">
                Schedule Consultation
              </a>
              <a href={PHONE} className="btn-base btn-outline-ink">
                Call {PHONE_LABEL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="ink-panel py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Our reviews</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Client testimonials</h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-sm text-white/70">5.0 average from verified Google reviews</span>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 110}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.07]">
                  <Stars />
                  <blockquote className="mt-5 flex-1 text-[0.975rem] leading-relaxed text-white/80">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4">
                    <span className="font-display font-semibold text-white">{r.name}</span>
                    <span className="ml-2 text-xs text-white/50">{r.when}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restore security */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="eyebrow">Professional & streamlined solutions</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Secure your future now with expert divorce financial planning
            </h2>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border shadow-card">
              <img
                src={mediationImg}
                alt="Three people discussing settlement documents in an Austin office"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:pt-16">
            <p className="eyebrow">Financial services</p>
            <h3 className="mt-4 text-3xl font-semibold">Restore financial security</h3>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                During divorce, overwhelming transitions affect self-perception, family and your
                financial future. Austin Divorce Planners assists in restoring financial security
                amid life changes.
              </p>
              <p>
                With 30+ years of expertise and accreditation as CDFA™ and CFP®, we offer full-scale
                financial services in Austin, TX. We engage in divorce mediations, consult with
                financial professionals, and specialize in tailored assistance for women, men and
                couples.
              </p>
              <p>
                Count on our meticulous guidance — completing assigned financial tasks, asset
                identification, recommendations for asset division and software analysis of proposed
                settlements. Post-divorce, we ensure seamless account transitions, manage liquid
                assets and evaluate pensions.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#consultation" className="btn-base btn-ink">
                Schedule Consultation
              </a>
              <a href={PHONE} className="btn-base btn-outline-ink">
                Call ADP Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offer */}
      <section id="consultation" className="px-6 pb-28">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-brass px-8 py-16 text-accent-foreground sm:px-16">
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/70">
                Limited availability
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Special $100 divorce finance consultation
              </h2>
              <p className="mt-4 text-xl font-semibold">
                Take control of tomorrow, starting today.
              </p>
              <p className="mt-4 leading-relaxed text-accent-foreground/85">
                To better assist you, we offer an exclusive consultation with our financial
                professionals for only $100. This consult is a valuable opportunity to introduce
                your situation, explore preliminary options and gain insights tailored to your
                needs. If you have any questions about our services or this initial offer, please
                don't hesitate to reach out. Act fast to secure your spot.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={PHONE} className="btn-base btn-ink">
                  Call Keith at ADP — {PHONE_LABEL}
                </a>
                <a
                  href={PHONE}
                  className="btn-base border border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                >
                  Reach out to schedule
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

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
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-brass">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={PHONE} className="transition-colors hover:text-brass">
                  {PHONE_LABEL}
                </a>
              </li>
              <li>Austin, Texas — serving all of Texas</li>
              <li>Initial consultation: $100</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} Austin Divorce Planners. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
