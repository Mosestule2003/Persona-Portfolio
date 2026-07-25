import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Lightbox from "@/components/Lightbox";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import SectionBanner from "@/components/SectionBanner";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import AnimatedStat from "@/components/AnimatedStat";
import MotionButton from "@/components/MotionButton";
import ParallaxImage from "@/components/ParallaxImage";
import WorkRow from "@/components/WorkRow";

const work = [
  {
    name: "Rezlv",
    tag: "in stealth",
    desc: "Ecommerce operations platform. Owning end to end technical and business decisions, from product direction to go to market.",
    dates: "2025–Now",
  },
  {
    name: "Proofly",
    tag: "Founder & CEO",
    desc: "Tech enabled property evaluation platform. Raised $13,000 in pre-seed funding and completed the Venture Kamloops accelerator.",
    dates: "May–Oct 2025",
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
    meta: "Applied AI · Generative Models",
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
  { title: "The Black Lives Matter Movement", meta: "Social Justice", href: "/docs/blm-research-paper.pdf" },
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

const aiGallery = [
  { label: "Happy", gradient: "from-amber-200 via-orange-300 to-rose-300" },
  { label: "Sad", gradient: "from-slate-400 via-blue-400 to-indigo-500" },
  { label: "Angry", gradient: "from-red-600 via-rose-700 to-neutral-900" },
  { label: "Latent walk", gradient: "from-fuchsia-300 via-violet-400 to-indigo-400" },
];

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-[13px] font-mono text-faint">{n}</span>
      <h2 className="text-[15px] font-bold uppercase tracking-wide text-ink">{children}</h2>
    </div>
  );
}


export default function Home() {
  return (
    <main>
      {/* Hero band */}
      <div className="bg-sage">
        <nav>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
            <Link href="#top" className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center font-bold text-sm">
              M
            </Link>
            <ul className="hidden sm:flex gap-7 text-sm font-medium text-ink">
              <li><a href="#work" className="hover:opacity-60">Work</a></li>
              <li><a href="#research" className="hover:opacity-60">Research</a></li>
              <li><a href="#about" className="hover:opacity-60">About</a></li>
              <li><a href="#contact" className="hover:opacity-60">Contact</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="https://github.com/Mosestule2003" target="_blank" rel="noopener" aria-label="GitHub" className="text-ink hover:opacity-60">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/moses-tule-146671162" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-ink hover:opacity-60">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>

        <header id="top" className="max-w-[1280px] mx-auto px-6 md:px-10 pt-6 pb-20 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <h1 className="text-[48px] md:text-[92px] leading-[1.0] font-bold text-ink tracking-tight">
            Moses Tule
            <br />
            Founder &amp; AI/ML builder
          </h1>
          <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-3xl overflow-hidden shrink-0 border-2 border-ink/10">
            <Image src="/img/profile.png" alt="Moses Tule" fill sizes="160px" className="object-cover" priority />
          </div>
        </header>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Bio intro */}
        <Reveal className="py-14 grid md:grid-cols-[220px_1fr] gap-8">
          <span className="text-[13px] font-bold uppercase tracking-wide text-faint">Intro</span>
          <div>
            <p className="text-[22px] md:text-[26px] leading-snug font-medium text-ink max-w-[780px]">
              AI enthusiast and two time startup founder with 10 founding pilot brands onboarded, $13K in pre-seed
              capital raised, and a 1,000+ follower audience built from zero.
            </p>
            <p className="text-[17px] leading-relaxed text-faint mt-6 max-w-[680px]">
              Currently building{" "}
              <a href="#work" className="underline text-body font-medium">
                Rezlv
              </a>{" "}
              in stealth. Previously founded{" "}
              <a href="#work" className="underline text-body font-medium">
                Proofly
              </a>
              , a tech enabled property evaluation platform. Available for remote-friendly work and collaborations.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionBanner n="01" title="Work" note="Two ventures, run with full ownership from day one." />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Work */}
        <section id="work" className="py-14">
          <StaggerGroup>
            {work.map((w) => (
              <StaggerItem key={w.name}>
                <WorkRow name={w.name} tag={w.tag} desc={w.desc} dates={w.dates} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>

      <SectionBanner n="02" title="Research" note="Applied AI and machine learning, expanded below." />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Research */}
        <section id="research" className="py-14">
          <StaggerGroup className="grid md:grid-cols-2 gap-8">
            {research.map((r) => (
              <StaggerItem key={r.title} className="py-2">
                <span className="text-[12px] font-bold uppercase tracking-wide text-faint">{r.meta}</span>
                <h3 className="text-2xl font-bold text-ink leading-snug mt-2 mb-3">{r.title}</h3>
                <p className="text-[16px] text-body leading-relaxed max-w-[520px] mb-4">{r.summary}</p>
                <Accordion
                  bare
                  triggerClassName="flex items-center gap-2 text-[14px] font-semibold text-ink cursor-pointer"
                  trigger={<span className="underline">Read the technical breakdown</span>}
                >
                  <ul className="pt-4 pl-5 list-disc space-y-2 max-w-[540px]">
                    {r.points.map((pt) => (
                      <li key={pt} className="text-[14px] text-body leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href={r.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-3 text-[14px] font-semibold underline text-ink">
                    Download full paper <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Accordion>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={140} className="mt-10 pt-8 border-t border-line">
            <Accordion
              bare
              triggerClassName="flex items-center gap-2 text-[14px] font-semibold text-ink cursor-pointer"
              trigger={<span className="underline">Additional writing &middot; ethics &amp; philosophy</span>}
            >
              <div className="grid md:grid-cols-2 gap-x-8 pt-4">
                {otherResearch.map((o) => (
                  <div key={o.title} className="flex items-center justify-between gap-4 py-3 border-b border-line">
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
      </div>

      <SectionBanner n="03" title="About" note="Ownership, AI, and the reasoning behind every decision." />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* About: mixed stat / photo grid */}
        <section id="about" className="py-14">
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal className="bg-ink text-white rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
              <span className="text-[13px] uppercase tracking-wide text-neutral-400">Raised</span>
              <AnimatedStat value={13} prefix="$" suffix="K" className="text-5xl font-bold" />
              <p className="text-[13px] text-neutral-400 max-w-[260px]">
                Pre-seed capital, pitched and defended directly to investors as a first time founder.
              </p>
            </Reveal>
            <ParallaxImage
              src="/img/memory1.jpg"
              alt="Moses working"
              sizes="(max-width: 768px) 100vw, 620px"
              wrapperClassName="rounded-3xl min-h-[220px]"
            />
            <ParallaxImage
              src="/img/memory2.jpg"
              alt="Moses building"
              sizes="(max-width: 768px) 100vw, 620px"
              wrapperClassName="rounded-3xl min-h-[220px]"
            />
            <Reveal delay={60} className="bg-chip rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
              <span className="text-[13px] uppercase tracking-wide text-faint">Audience</span>
              <AnimatedStat value={1000} suffix="+" className="text-5xl font-bold text-ink" />
              <p className="text-[13px] text-faint max-w-[260px]">
                LinkedIn followers grown from zero through original, data-cited content.
              </p>
            </Reveal>
          </div>

          <Reveal delay={220} className="mt-12 grid md:grid-cols-[220px_1fr] gap-8">
            <span className="text-[13px] font-bold uppercase tracking-wide text-faint">Story</span>
            <div className="space-y-5 max-w-[680px]">
              <p className="text-[17px] leading-relaxed text-body">
                I&apos;m Moses — an AI enthusiast and two time founder who uses AI daily and deliberately, not as a
                novelty, to research faster, decide faster, and hold myself accountable when no one else is
                checking.
              </p>
              <p className="text-[17px] leading-relaxed text-body">
                I&apos;m currently building Rezlv in stealth, an ecommerce operations platform, having onboarded 10
                founding pilot brands from a standing start ahead of launch.
              </p>
              <p className="text-[17px] leading-relaxed text-body">
                Before that I founded and ran Proofly, where I raised $13,000 in pre-seed funding and completed the
                Venture Kamloops accelerator. Outside of founder work, I&apos;ve spent time on independent machine
                learning research and design complete UI/UX flows in Figma for the products I ship.
              </p>
            </div>
          </Reveal>
        </section>

        <hr className="border-line" />

        {/* Experience */}
        <section id="experience" className="py-14 grid md:grid-cols-[220px_1fr] gap-8">
          <span className="text-[13px] font-bold uppercase tracking-wide text-faint">Experience</span>
          <div>
            {experience.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 60} className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                <div>
                  <span className="text-[17px] font-bold text-ink">{e.role}</span>
                  <span className="text-[17px] text-faint"> &middot; {e.org}</span>
                </div>
                <span className="text-[13px] text-faint whitespace-nowrap">{e.dates}</span>
              </Reveal>
            ))}
            <a href="/docs/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-6 text-[14px] font-semibold underline text-ink">
              See full resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <hr className="border-line" />

        {/* Skills */}
        <section id="skills" className="py-14 grid md:grid-cols-[220px_1fr] gap-8">
          <span className="text-[13px] font-bold uppercase tracking-wide text-faint">Skills</span>
          <StaggerGroup className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <StaggerItem key={s}>
                <Badge variant="outline" className="text-[14px] font-medium text-body px-3.5 py-1.5 rounded-full border-line hover:-translate-y-0.5 hover:shadow-sm transition-transform">
                  {s}
                </Badge>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <hr className="border-line" />

        {/* Memories */}
        <section id="memories" className="py-14 grid md:grid-cols-[220px_1fr] gap-8">
          <span className="text-[13px] font-bold uppercase tracking-wide text-faint">Memories</span>
          <Reveal>
            <Lightbox images={memories} />
          </Reveal>
        </section>

        <hr className="border-line" />

        {/* AI gallery — low priority extra */}
        <section id="ai-gallery" className="py-14 grid md:grid-cols-[220px_1fr] gap-8">
          <span className="text-[13px] font-bold uppercase tracking-wide text-faint">AI Experiments</span>
          <div>
            <p className="text-[15px] text-faint max-w-[560px] mb-6">
              Illustrative palettes from the AI Mosaic conditional GAN project — abstract emotion-conditioned
              generations, color-coded by class.
            </p>
            <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aiGallery.map((g) => (
                <StaggerItem
                  key={g.label}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${g.gradient} flex items-end p-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl`}
                >
                  <span className="text-[13px] font-semibold text-white/90">{g.label}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <hr className="border-line" />

        {/* Contact */}
        <section id="contact" className="py-16 grid md:grid-cols-[220px_1fr] gap-8">
          <span className="text-[13px] font-bold uppercase tracking-wide text-faint">Contact</span>
          <Reveal>
            <h3 className="text-[36px] md:text-[52px] font-bold text-ink tracking-tight leading-[1.05] mb-6">
              Let&apos;s build something.
            </h3>
            <p className="text-[17px] leading-relaxed text-body max-w-[560px]">
              Have a project, role, or idea in mind? I can help with applied machine learning work, founder-level
              product execution, or Figma UI/UX design. Based in Vancouver, BC — open to remote work worldwide.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <MotionButton
                href="mailto:officialtule02@gmail.com"
                className="inline-flex items-center gap-2 bg-ink text-white rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <Mail className="w-4 h-4" /> Email me
              </MotionButton>
              <MotionButton
                href="https://github.com/Mosestule2003"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-line rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </MotionButton>
              <MotionButton
                href="https://www.linkedin.com/in/moses-tule-146671162"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-line rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </MotionButton>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="border-t border-line py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-faint">
          <span>&copy; 2026 Moses Tule. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with intent <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </footer>
    </main>
  );
}
