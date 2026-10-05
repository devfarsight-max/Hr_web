"use client";
import { animate, stagger } from "framer-motion";
import { useEffect } from "react";
export default function PageMotion() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      "main section, main article, main img",
    );
    animate(
      targets,
      { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0px)"] },
      { duration: 0.55, delay: stagger(0.05), ease: [0.22, 1, 0.36, 1] },
    );
  }, []);
  return null;
}
