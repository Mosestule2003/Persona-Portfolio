"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WorkRow({
  name,
  tag,
  desc,
  dates,
}: {
  name: string;
  tag: string;
  desc: string;
  dates: string;
}) {
  return (
    <motion.div
      whileHover="hover"
      className="grid md:grid-cols-[220px_1fr_auto] gap-4 md:gap-8 items-baseline py-7 border-b border-line cursor-default"
    >
      <span className="text-2xl font-bold text-ink">{name}</span>
      <div>
        <span className="text-[13px] text-faint">{tag}</span>
        <p className="text-[16px] text-body mt-1.5 max-w-[560px]">{desc}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0 justify-self-start md:justify-self-end">
        <span className="text-[13px] text-faint whitespace-nowrap">{dates}</span>
        <motion.span variants={{ hover: { x: 4, y: -4 } }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <ArrowUpRight className="w-5 h-5 text-ink" />
        </motion.span>
      </div>
    </motion.div>
  );
}
