"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** next/image with a subtle vertical parallax drift tied to its own scroll progress. */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  wrapperClassName = "",
  strength = 24,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  wrapperClassName?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${wrapperClassName}`}>
      <motion.div style={{ y }} className="absolute inset-[-6%]">
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${className}`} priority={priority} />
      </motion.div>
    </div>
  );
}
