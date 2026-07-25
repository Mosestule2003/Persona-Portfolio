"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Full-bleed dark divider banner between major sections, pitch-deck style, with a parallaxed ghost numeral. */
export default function SectionBanner({ n, title, note }: { n: string; title: string; note: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.18, 0.08]);

  return (
    <motion.div
      ref={ref}
      className="bg-ink text-white overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-[1fr_auto] gap-6 items-start">
        <div>
          <span className="inline-flex text-[11px] uppercase tracking-wide bg-white/10 px-3 py-1.5 rounded-full mb-6">
            Section {n}
          </span>
          <h3 className="text-[40px] md:text-[64px] font-bold leading-[1.02] tracking-tight">{title}</h3>
        </div>
        <div className="flex flex-col items-start md:items-end justify-between gap-6 h-full">
          <motion.span
            style={{ y, opacity }}
            className="text-[72px] md:text-[110px] font-bold text-white leading-none"
          >
            {n}
          </motion.span>
          <p className="text-[13px] text-neutral-400 max-w-[220px] text-left md:text-right">{note}</p>
        </div>
      </div>
    </motion.div>
  );
}
