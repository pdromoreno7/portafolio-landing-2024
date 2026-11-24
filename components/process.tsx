"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { processData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 60 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index },
  }),
};

export default function Process() {
  const { ref } = useSectionInView("Cómo trabajo", 0.5);

  return (
    <section
      id="process"
      ref={ref}
      className="mb-28 w-full max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Cómo trabajo</SectionHeading>
      <ol className="flex flex-wrap justify-center gap-3">
        {processData.map((step, index) => (
          <motion.li
            key={step.title}
            className="flex w-full flex-col gap-2 p-6 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)] text-left bg-gray-100 border rounded-lg border-black/5 dark:bg-white/10 dark:text-white"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span className="text-sm font-medium text-gray-500 dark:text-white/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="leading-relaxed text-gray-700 dark:text-white/70">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
