import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Lightbox from "@/components/Lightbox";

const work = [
  {
    name: "Rezlv",
    tag: "in stealth",
    desc: "Ecommerce operations platform. Owning end to end technical and business decisions, from product direction to go to market.",
    dates: "2025–Now",
    href: "#contact",
  },
  {
    name: "Proofly",
    tag: "Founder & CEO",
    desc: "Tech enabled property evaluation platform. Raised $13,000 in pre-seed funding and completed the Venture Kamloops accelerator.",
    dates: "May–Oct 2025",
    href: "#contact",
  },
];

const research = [
  {
    title: "Detecting KillAura, Flight & X-Ray Cheats in Minecraft Java Edition",
    meta: "Machine Learning · 2026",
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
    title: "AI Mosaic: Faces of Emotion",
    meta: "Applied AI · COMP 3710",
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
  { title: "Professional Ethics", meta: "Ethics", href: "/docs/professional-ethics.pdf" },
  { title: "Computer Ethics Paper", meta: "Ethics · Computing", href: "/docs/computer-ethics-paper.pdf" },
  { title: "The Black Lives Matter Movement", meta: "Philosophy 2010", href: "/docs/blm-research-paper.pdf" },
  { title: "Ethics Paper Series", meta: "Ethics", href: "/docs/ethics-paper-1.pdf" },
];

const experience = [
  { role: "Founder", org: "Rezlv (in stealth)", dates: "2025 – today" },
  { role: "Founder & CEO", org: "Proofly", dates: "May 2025 – Oct 2025" },
];

const skills = [
  "Applied Machine Learning",
  "LightGBM & PyTorch",
  "AI-Assisted Research & Workflows",
  "Founder-Level Execution",
  "Figma UI/UX Design",
  "Python",
];

const memories = [
  { src: "/img/memory1.jpg", alt: "Memory 1" },
  { src: "/img/memory2.jpg", alt: "Memory 2" },
  { src: "/img/memory3.jpg", alt: "Memory 3" },
  { src: "/img/memory4.jpg", alt: "Memory 4" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[15px] font-bold uppercase tracking-wide text-ink mb-8">{children}</h2>;
}

export default function Home() {
  return (
    <main>
      {/* Hero band */}
      <div className="bg-sage">
        <nav>
          <div className="max-w-[820px] mx-auto px-6 h-24 flex items-center justify-between">
            <Link href="#top" className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center font-bold text-sm">
              M
            </Link>
            <ul className="flex gap-7 text-sm font-medium text-ink">
              <li><a href="#work" className="hover:opacity-60">Work</a></li>
              <li><a href="#research" className="hover:opacity-60">Research</a></li>
              <li><a href="#about" className="hover:opacity-60">About</a></li>
              <li><a href="#contact" className="hover:opacity-60">Contact</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="https://github.com/Mosestule2003" target="_blank" rel="noopener" aria-label="GitHub" className="text-ink hover:opacity-60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54v-2.1c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.95 0 0 .95-.3 3.11 1.15a10.8 10.8 0 015.66 0c2.16-1.46 3.11-1.15 3.11-1.15.61 1.53.22 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54 4.44-1.48 7.64-5.67 7.64-10.6C23.02 5.24 18.27.5 12 .5z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/moses-tule-146671162" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-ink hover:opacity-60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM3.56 20.45h3.56V9H3.56v11.45z"/></svg>
              </a>
            </div>
          </div>
        </nav>

        <header id="top" className="max-w-[820px] mx-auto px-6 pt-8 pb-24">
          <h1 className="text-[44px] md:text-[64px] leading-[1.05] font-bold text-ink tracking-tight">
            Moses Tule
            <br />
            Founder &amp; AI/ML builder
          </h1>
        </header>
      </div>

      <div className="max-w-[820px] mx-auto px-6">
        {/* Bio intro */}
        <Reveal className="py-14">
          <p className="text-[19px] leading-relaxed text-faint">
            Computing Science student and two time startup founder with 10 founding pilot brands onboarded, $13K in
            pre-seed capital raised, and a 1,000+ follower audience built from zero. Available for remote-friendly
            work and collaborations.
          </p>
          <p className="text-[19px] leading-relaxed text-faint mt-5">
            Currently building{" "}
            <a href="#contact" className="underline text-body">
              Rezlv
            </a>{" "}
            in stealth. Previously founded{" "}
            <a href="#contact" className="underline text-body">
              Proofly
            </a>
            , a tech enabled property evaluation platform.
          </p>
        </Reveal>

        <hr className="border-line" />

        {/* Work */}
        <section id="work" className="py-14">
          <SectionLabel>Work</SectionLabel>
          <div>
            {work.map((w, i) => (
              <Reveal key={w.name} delay={i * 60}>
                <a
                  href={w.href}
                  className="group flex items-center justify-between gap-6 py-6 border-b border-line"
                >
                  <div>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xl font-bold text-ink">{w.name}</span>
                      <span className="text-[13px] text-faint">{w.tag}</span>
                    </div>
                    <p className="text-[15px] text-faint mt-1.5 max-w-[520px]">{w.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[13px] text-faint whitespace-nowrap hidden sm:inline">{w.dates}</span>
                    <span className="text-xl text-ink transition-transform group-hover:translate-x-1">&#8594;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <hr className="border-line" />

        {/* Research */}
        <section id="research" className="py-14">
          <SectionLabel>Research</SectionLabel>
          <div>
            {research.map((r, i) => (
              <Reveal key={r.title} delay={i * 70} className="py-6 border-b border-line">
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <span className="text-lg font-bold text-ink">{r.title}</span>
                </div>
                <div className="text-[13px] text-faint mb-2.5">{r.meta}</div>
                <p className="text-[15px] text-body leading-relaxed max-w-[600px] mb-3">{r.summary}</p>
                <Accordion
                  triggerClassName="flex items-center gap-2 text-[14px] font-semibold text-ink cursor-pointer"
                  trigger={<span className="underline">Read the technical breakdown</span>}
                >
                  <ul className="pt-4 pl-5 list-disc space-y-2 max-w-[620px]">
                    {r.points.map((pt) => (
                      <li key={pt} className="text-[14px] text-body leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href={r.href} target="_blank" rel="noopener" className="inline-flex mt-3 text-[14px] font-semibold underline text-ink">
                    Download full paper &#8594;
                  </a>
                </Accordion>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-4">
            <Accordion
              triggerClassName="flex items-center gap-2 text-[14px] font-semibold text-ink cursor-pointer py-3"
              trigger={<span className="underline">Other academic work &middot; ethics &amp; philosophy papers</span>}
            >
              <div className="pt-2 pb-2">
                {otherResearch.map((o) => (
                  <div key={o.title} className="flex items-center justify-between gap-4 py-3 border-b border-line last:border-b-0">
                    <div>
                      <div className="text-[15px] font-semibold text-ink">{o.title}</div>
                      <div className="text-[12.5px] text-faint">{o.meta}</div>
                    </div>
                    <a href={o.href} target="_blank" rel="noopener" className="text-[13px] font-semibold underline text-ink whitespace-nowrap">
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </Accordion>
          </Reveal>
        </section>

        <hr className="border-line" />

        {/* About */}
        <section id="about" className="py-14">
          <SectionLabel>About</SectionLabel>
          <Reveal>
            <p className="text-[17px] leading-relaxed text-body max-w-[620px]">
              I&apos;m Moses — a Computing Science student and two time founder who uses AI daily and deliberately,
              not as a novelty, to research faster, decide faster, and hold myself accountable when no one else is
              checking.
            </p>
            <p className="text-[17px] leading-relaxed text-body max-w-[620px] mt-5">
              I&apos;m currently building Rezlv in stealth, an ecommerce operations platform, having onboarded 10
              founding pilot brands from a standing start and grown a 1,000+ follower audience through original,
              data-cited content ahead of launch.
            </p>
            <p className="text-[17px] leading-relaxed text-body max-w-[620px] mt-5">
              Before that I founded and ran Proofly, a tech enabled property evaluation platform, where I raised
              $13,000 in pre-seed funding, pitched and defended the business case directly to investors, and
              completed the Venture Kamloops accelerator.
            </p>
            <p className="text-[17px] leading-relaxed text-body max-w-[620px] mt-5">
              Outside of founder work, I&apos;ve spent time on independent machine learning research — behavioral
              biometrics for game-cheat detection, conditional GANs for image generation — and I design complete
              UI/UX flows in Figma for the products I ship.
            </p>
          </Reveal>
        </section>

        <hr className="border-line" />

        {/* Experience */}
        <section id="experience" className="py-14">
          <SectionLabel>Experience</SectionLabel>
          <div>
            {experience.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 60} className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                <div>
                  <span className="text-[16px] font-bold text-ink">{e.role}</span>
                  <span className="text-[16px] text-faint"> &middot; {e.org}</span>
                </div>
                <span className="text-[13px] text-faint whitespace-nowrap">{e.dates}</span>
              </Reveal>
            ))}
          </div>
          <a href="/docs/resume.pdf" target="_blank" rel="noopener" className="inline-flex mt-6 text-[14px] font-semibold underline text-ink">
            See full resume &#8594;
          </a>
        </section>

        <hr className="border-line" />

        {/* Skills */}
        <section id="skills" className="py-14">
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {skills.map((s) => (
              <span key={s} className="text-[16px] text-body">
                {s}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-line" />

        {/* Memories */}
        <section id="memories" className="py-14">
          <SectionLabel>Memories</SectionLabel>
          <Reveal>
            <Lightbox images={memories} />
          </Reveal>
        </section>

        <hr className="border-line" />

        {/* Contact */}
        <section id="contact" className="py-14">
          <SectionLabel>Get in touch</SectionLabel>
          <Reveal>
            <p className="text-[17px] leading-relaxed text-body max-w-[600px]">
              Have a project, role, or idea in mind? Send me an email at{" "}
              <a href="mailto:officialtule02@gmail.com" className="underline font-semibold text-ink">
                officialtule02@gmail.com
              </a>
              .
            </p>
            <p className="text-[17px] leading-relaxed text-body max-w-[600px] mt-4">
              I can help with applied machine learning work, founder-level product execution, or Figma UI/UX design.
              Based in Vancouver, BC — open to remote work worldwide.
            </p>
            <div className="flex gap-6 mt-7 text-[14px] font-semibold">
              <a href="https://github.com/Mosestule2003" target="_blank" rel="noopener" className="underline text-ink">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/moses-tule-146671162" target="_blank" rel="noopener" className="underline text-ink">
                LinkedIn
              </a>
              <a href="mailto:officialtule02@gmail.com" className="underline text-ink">
                Email
              </a>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="border-t border-line py-8">
        <div className="max-w-[820px] mx-auto px-6 text-[13px] text-faint text-center">
          &copy; 2026 Moses Tule. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
