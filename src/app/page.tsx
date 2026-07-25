import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Lightbox from "@/components/Lightbox";

const services = [
  {
    title: "Applied Machine Learning",
    dark: true,
    body: "Behavioral biometrics, classifiers, and generative models, built and evaluated end to end in Python. LightGBM classifiers on keystroke and mouse dynamics, conditional GANs for image generation, feature engineering, and model evaluation with cross-validation.",
  },
  {
    title: "AI Assisted Research & Workflows",
    body: "Daily, deliberate use of AI tools to research faster, decide faster, and document reasoning as it evolves. Not novelty use, a real part of how I build, write, and validate work before shipping it.",
  },
  {
    title: "Founder Execution",
    body: "End to end ownership of product, go to market, and fundraising, with no team to hand work off to. Raised pre-seed capital and onboarded pilot customers from a standing start.",
  },
  {
    title: "Figma UI/UX Design",
    body: "Complete interface flows and interactive prototypes for mobile and web products, from concept to shippable design.",
  },
];

const timeline = [
  {
    role: "Founder, Rezlv (in stealth)",
    desc: "Owning end to end technical and business decisions for an early stage ecommerce platform. Onboarded 10 founding pilot brands and grew a 1,000+ follower audience pre launch.",
    dates: "2025 to Now",
  },
  {
    role: "Founder & CEO, Proofly",
    desc: "Directed a tech enabled property evaluation platform end to end. Raised $13,000 in pre seed funding and completed the Venture Kamloops accelerator.",
    dates: "May 2025 to Oct 2025",
  },
];

const aiProjects = [
  {
    badge: "Machine Learning · 2026",
    title: "Detecting KillAura, Flight & X-Ray Cheats in Minecraft Java Edition",
    summary:
      "Behavioral biometrics with LightGBM classifiers trained on keystroke and mouse dynamics, detecting three cheat types from real gameplay data.",
    points: [
      "Collected raw keystroke and mouse event data with an external Python logger, bypassing game-engine filtering.",
      "Engineered timing features (dwell time, flight time, event density) and movement features (path length, straightness ratio, jerk, heading stability).",
      "Trained separate LightGBM classifiers for keyboard and mouse features, averaging probability outputs per 5-second window.",
      "Reached ~83–85% cross-validation accuracy on keyboard dynamics, outperforming Random Forest and SVM baselines.",
    ],
    href: "/docs/minecraft-cheat-detection.pdf",
  },
  {
    badge: "Applied AI · COMP 3710",
    title: "AI Mosaic: Faces of Emotion",
    summary:
      "A lightweight conditional GAN generating abstract mosaic imagery conditioned on emotion labels, evaluated with a locally trained CNN classifier.",
    points: [
      "Built a DCGAN-style generator with label conditioning, merging an embedded emotion label with a noise vector to produce 64x64 mosaic images.",
      "Trained on a curated AffectNet subset of 20 to 50 images per emotion class, for 50 epochs with checkpointing.",
      "Evaluated outputs with a locally trained three-layer CNN classifier across 90 generated images, 30 per emotion.",
      "Happy emotion images were classified at 100% accuracy, showing the model learned distinct, recognizable visual patterns per class.",
    ],
    href: "/docs/ai-mosaic-faces-of-emotion.pdf",
  },
];

const otherResearch = [
  {
    badge: "Ethics",
    title: "Professional Ethics",
    desc: "Ethical frameworks applied to real world decision making scenarios.",
    href: "/docs/professional-ethics.pdf",
  },
  {
    badge: "Ethics · Computing",
    title: "Computer Ethics Paper",
    desc: "Ethical considerations in computing practice, data handling, and responsible design.",
    href: "/docs/computer-ethics-paper.pdf",
  },
  {
    badge: "Philosophy 2010",
    title: "The Black Lives Matter Movement",
    desc: "Historical foundations, milestones, and the justice related issues the movement confronts.",
    href: "/docs/blm-research-paper.pdf",
  },
  {
    badge: "Ethics",
    title: "Ethics Paper Series",
    desc: "Applied ethics coursework examining argument structure and case based reasoning.",
    href: "/docs/ethics-paper-1.pdf",
  },
];

const memories = [
  { src: "/img/memory1.jpg", alt: "Memory 1" },
  { src: "/img/memory2.jpg", alt: "Memory 2" },
  { src: "/img/memory3.jpg", alt: "Memory 3" },
  { src: "/img/memory4.jpg", alt: "Memory 4" },
];

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="max-w-[1160px] mx-auto px-6 h-22 flex items-center justify-between">
          <Link href="#top" className="font-bold text-[17px]">
            Moses Tule
          </Link>
          <ul className="hidden md:flex gap-8 text-sm text-muted">
            <li><a href="#about" className="hover:text-ink">About</a></li>
            <li><a href="#work" className="hover:text-ink">Work</a></li>
            <li><a href="#research" className="hover:text-ink">Research</a></li>
            <li><a href="#memories" className="hover:text-ink">Memories</a></li>
            <li><a href="#contact" className="hover:text-ink">Contact</a></li>
          </ul>
          <a
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-ink text-white rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Resume
          </a>
        </div>
      </nav>

      <header id="top" className="pt-10 pb-16">
        <div className="max-w-[1160px] mx-auto px-6">
          <span className="inline-flex items-center border border-line rounded-full px-3.5 py-1.5 text-[13px] text-muted mb-6">
            Applied AI &middot; Machine Learning &middot; Founder
          </span>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 items-end">
            <h1 className="text-[56px] md:text-[108px] leading-[0.98] font-extrabold tracking-tight text-ink">
              Building with
              <br />
              AI, <span className="text-accent">on purpose.</span>
            </h1>
            <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden">
              <Image src="/img/profile.png" alt="Moses Tule" fill sizes="220px" className="object-cover" priority />
            </div>
          </div>
          <div className="flex justify-start md:justify-end mt-4">
            <p className="max-w-[280px] text-sm text-muted">
              Hi, I&apos;m Moses. A Computing Science student who trains models, builds products, and runs companies,
              using AI daily as a research and execution multiplier, not a novelty.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1160px] mx-auto px-6">
        {/* About */}
        <section id="about" className="py-18">
          <span className="inline-flex border border-line rounded-full px-3.5 py-1.5 text-[13px] text-muted mb-4.5">About Me</span>
          <div className="grid md:grid-cols-[1.4fr_0.9fr] gap-10 items-start">
            <h2 className="text-[34px] leading-tight font-bold text-ink tracking-tight">
              Building has always been more than a job for me, it&apos;s how I think.
            </h2>
            <p className="text-muted text-[15px] pt-1.5">
              I use AI daily and deliberately, not as a novelty, to research faster, decide faster, and hold myself
              accountable when no one else is checking.
            </p>
          </div>
          <div className="grid md:grid-cols-[1fr_280px] gap-6 items-center mt-8">
            <Reveal className="relative aspect-[16/10.5] rounded-[28px] overflow-hidden">
              <Image src="/img/memory1.jpg" alt="Moses working" fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" />
            </Reveal>
            <Reveal className="flex flex-col gap-7" delay={100}>
              <div>
                <div className="text-[40px] font-extrabold text-ink leading-none">$13K</div>
                <div className="text-[13px] text-muted mt-1.5 max-w-[220px]">
                  Pre-seed raised as a first time founder, pitched and defended directly to investors.
                </div>
              </div>
              <div>
                <div className="text-[40px] font-extrabold text-ink leading-none">1,000+</div>
                <div className="text-[13px] text-muted mt-1.5 max-w-[220px]">
                  LinkedIn followers grown from zero through original, data-cited content.
                </div>
              </div>
              <div>
                <div className="text-[40px] font-extrabold text-ink leading-none">10</div>
                <div className="text-[13px] text-muted mt-1.5 max-w-[220px]">
                  Founding pilot brands onboarded from a standing start.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-18">
          <span className="inline-flex border border-line rounded-full px-3.5 py-1.5 text-[13px] text-muted mb-4.5">What I Do</span>
          <div className="grid md:grid-cols-[1.4fr_0.9fr] gap-10 items-start">
            <h2 className="text-[34px] leading-tight font-bold text-ink tracking-tight">
              A comprehensive look at how I work and what I bring to the table.
            </h2>
            <p className="text-muted text-[15px] pt-1.5">
              Founder level ownership, applied research, and product design, all in one person.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div
                  className={`card-hover border rounded-[18px] px-6.5 pb-6.5 ${
                    s.dark ? "bg-ink text-white border-ink" : "bg-white border-line"
                  }`}
                >
                  <Accordion
                    triggerClassName="w-full flex items-center justify-between gap-3 pt-4.5 text-left cursor-pointer"
                    bodyClassName="text-sm leading-relaxed"
                    trigger={<h3 className="text-lg font-extrabold">{s.title}</h3>}
                  >
                    <p className={`pt-3 pb-1 text-sm leading-relaxed ${s.dark ? "text-neutral-300" : "text-muted"}`}>
                      {s.body}
                    </p>
                  </Accordion>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-18">
          <span className="inline-flex border border-line rounded-full px-3.5 py-1.5 text-[13px] text-muted mb-4.5">Experience</span>
          <div className="grid md:grid-cols-[1.4fr_0.9fr] gap-10 items-start">
            <h2 className="text-[34px] leading-tight font-bold text-ink tracking-tight">
              A snapshot of what I&apos;ve built and when.
            </h2>
            <p className="text-muted text-[15px] pt-1.5">Two ventures, run with full ownership from day one.</p>
          </div>
          <div className="mt-6 border-t border-line">
            {timeline.map((t, i) => (
              <Reveal key={t.role} delay={i * 70}>
                <div className="grid md:grid-cols-[1fr_auto] gap-6 py-6.5 border-b border-line items-center hover:bg-canvas transition-colors">
                  <div>
                    <p className="text-[17px] font-bold text-ink mb-1">{t.role}</p>
                    <p className="text-sm text-muted max-w-[560px]">{t.desc}</p>
                  </div>
                  <div className="text-lg md:text-[22px] font-bold text-ink whitespace-nowrap">{t.dates}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Research */}
        <section id="research" className="py-18">
          <span className="inline-flex border border-line rounded-full px-3.5 py-1.5 text-[13px] text-muted mb-4.5">Research</span>
          <div className="grid md:grid-cols-[1.4fr_0.9fr] gap-10 items-start">
            <h2 className="text-[34px] leading-tight font-bold text-ink tracking-tight">
              Machine learning research, front and center.
            </h2>
            <p className="text-muted text-[15px] pt-1.5">
              Two applied AI projects, expanded below. Academic ethics coursework is available further down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {aiProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="card-hover border border-line rounded-[28px] p-7.5">
                  <span className="inline-flex text-[11px] uppercase tracking-wide bg-chip text-body px-3 py-1.5 rounded-full mb-3.5">
                    {p.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-ink leading-snug mb-2.5">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.summary}</p>
                  <Accordion
                    triggerClassName="w-full mt-5 bg-chip hover:bg-neutral-200 rounded-full px-4.5 py-3 flex items-center justify-between gap-3 text-[13px] font-bold text-ink cursor-pointer transition-colors"
                    trigger={<span>Read the technical breakdown</span>}
                  >
                    <ul className="pt-4.5 pl-4.5 list-disc space-y-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="text-[13.5px] text-body leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex mt-1 mb-1 bg-ink text-white rounded-full px-4.5 py-2.5 text-[13px] font-bold"
                    >
                      Download full paper
                    </a>
                  </Accordion>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} className="mt-8 border border-line rounded-[28px] overflow-hidden">
            <Accordion
              triggerClassName="w-full bg-canvas px-7 py-5.5 flex items-center justify-between gap-4 text-[15px] font-bold text-ink cursor-pointer"
              trigger={<span>Other academic work &middot; ethics &amp; philosophy papers</span>}
            >
              <div className="grid md:grid-cols-2 gap-4.5 p-7">
                {otherResearch.map((o) => (
                  <div key={o.title} className="border border-line rounded-[18px] p-5">
                    <span className="inline-flex text-[10.5px] uppercase tracking-wide text-muted border border-line px-2.5 py-0.5 rounded-full mb-2.5">
                      {o.badge}
                    </span>
                    <h4 className="text-[15px] font-bold text-ink mb-1.5">{o.title}</h4>
                    <p className="text-[13px] text-muted mb-3 leading-relaxed">{o.desc}</p>
                    <a href={o.href} target="_blank" rel="noopener" className="text-[13px] font-bold text-ink hover:text-accent">
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </Accordion>
          </Reveal>
        </section>

        {/* Memories */}
        <section id="memories" className="py-18">
          <span className="inline-flex border border-line rounded-full px-3.5 py-1.5 text-[13px] text-muted mb-4.5">Memories</span>
          <h2 className="text-[34px] leading-tight font-bold text-ink tracking-tight mb-8">Life outside the work.</h2>
          <Reveal>
            <Lightbox images={memories} />
          </Reveal>
        </section>

        {/* Pull quote */}
        <Reveal className="border-t border-line py-18 text-center">
          <div className="text-[64px] text-line leading-none mb-2">&#8220;</div>
          <p className="text-[22px] leading-relaxed font-medium text-ink max-w-[720px] mx-auto mb-7">
            Own the whole problem, don&apos;t wait for a team that doesn&apos;t exist yet. Use AI as a research and
            execution multiplier, not a novelty. Document reasoning so decisions stay traceable as things evolve.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-10.5 h-10.5 rounded-full overflow-hidden">
              <Image src="/img/profile.png" alt="Moses Tule" fill sizes="42px" className="object-cover" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-ink">Moses Tule</div>
              <div className="text-[13px] text-muted">Founder, Rezlv</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-[1160px] mx-auto px-6">
        <section id="contact" className="py-18">
          <Reveal className="bg-ink text-white rounded-[28px] p-10 md:p-16 flex flex-wrap justify-between items-end gap-6">
            <h2 className="text-[34px] md:text-[52px] font-extrabold leading-tight tracking-tight">
              Let&apos;s
              <br />
              Connect
            </h2>
            <div className="flex gap-3 flex-wrap">
              <a href="mailto:officialtule02@gmail.com" className="inline-flex items-center gap-2 bg-white text-ink rounded-full px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-transform">
                Email Me &#8599;
              </a>
              <a
                href="https://www.linkedin.com/in/moses-tule-146671162"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-neutral-700 text-white rounded-full px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              >
                LinkedIn &#8599;
              </a>
              <a
                href="https://github.com/Mosestule2003"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-neutral-700 text-white rounded-full px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              >
                GitHub &#8599;
              </a>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="border-t border-line py-12">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-6">
            <div>
              <div className="font-bold text-base mb-2.5">Moses Tule</div>
              <p className="text-[13px] text-muted max-w-[260px] leading-relaxed">
                Computing Science student and two time startup founder building products, research, and companies.
              </p>
            </div>
            <div>
              <h5 className="text-[12px] uppercase tracking-wide text-faint mb-3">Site</h5>
              <a href="#about" className="block text-sm text-body mb-2">About</a>
              <a href="#work" className="block text-sm text-body mb-2">Work</a>
              <a href="#research" className="block text-sm text-body mb-2">Research</a>
              <a href="#memories" className="block text-sm text-body mb-2">Memories</a>
            </div>
            <div>
              <h5 className="text-[12px] uppercase tracking-wide text-faint mb-3">Contact</h5>
              <span className="block text-sm text-body mb-2">officialtule02@gmail.com</span>
              <span className="block text-sm text-body mb-2">Vancouver, BC, Canada</span>
            </div>
            <div>
              <h5 className="text-[12px] uppercase tracking-wide text-faint mb-3">Elsewhere</h5>
              <a href="https://github.com/Mosestule2003" target="_blank" rel="noopener" className="block text-sm text-body mb-2">GitHub</a>
              <a href="https://www.linkedin.com/in/moses-tule-146671162" target="_blank" rel="noopener" className="block text-sm text-body mb-2">LinkedIn</a>
            </div>
          </div>
          <div className="mt-10 pt-5 border-t border-line text-[13px] text-faint text-center">
            All rights reserved, Moses Tule 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
