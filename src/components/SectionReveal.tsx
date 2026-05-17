"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

type RevealStyle = "circle" | "diamond" | "inset" | "wipe-left" | "wipe-up" | "polygon";

interface SectionRevealProps {
  children: ReactNode;
  style?: RevealStyle;
}

const clipPaths: Record<RevealStyle, [string, string]> = {
  circle: [
    "circle(0% at 50% 50%)",
    "circle(150% at 50% 50%)",
  ],
  diamond: [
    "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
  ],
  inset: [
    "inset(25% 25% 25% 25% round 16px)",
    "inset(0% 0% 0% 0% round 0px)",
  ],
  "wipe-left": [
    "polygon(0 0, 0 0, 0 100%, 0 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ],
  "wipe-up": [
    "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ],
  polygon: [
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ],
};

export default function SectionReveal({
  children,
  style = "circle",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.15"],
  });

  const [from, to] = clipPaths[style];
  const clipPath = useTransform(scrollYProgress, [0, 1], [from, to]);

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ clipPath }}>
        {children}
      </motion.div>
    </div>
  );
}
