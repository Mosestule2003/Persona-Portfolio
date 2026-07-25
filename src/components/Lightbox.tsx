"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export default function Lightbox({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <StaggerItem key={img.src}>
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="relative aspect-[3/4] rounded-[18px] overflow-hidden border border-line cursor-pointer w-full"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {mounted &&
        createPortal(
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-10"
              onClick={() => setActive(null)}
            >
              <button
                type="button"
                className="absolute top-6 right-8 text-white text-3xl"
                onClick={() => setActive(null)}
              >
                &times;
              </button>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl aspect-[4/3]"
                onClick={(e) => e.stopPropagation()}
              >
                {active !== null && (
                  <Image
                    src={images[active].src}
                    alt={images[active].alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
