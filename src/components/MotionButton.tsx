"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Thin motion wrapper adding hover-lift + tap-press micro-interaction to any inline link. */
export default function MotionButton({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"a">) {
  return (
    <motion.a
      className={className}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
