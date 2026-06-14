"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, CheckCircle2, type LucideIcon } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Nos cuentas tu situación",
    description:
      "Nos envías tu factura actual y nos explicas tus necesidades. Sin compromiso.",
    Icon: MessageSquare,
  },
  {
    number: "2",
    title: "Analizamos y comparamos",
    description:
      "Estudiamos tu consumo y comparamos todas las tarifas disponibles del mercado.",
    Icon: Search,
  },
  {
    number: "3",
    title: "Tú decides y nosotros gestionamos",
    description:
      "Te presentamos la mejor opción y, si te convence, gestionamos todo el cambio.",
    Icon: CheckCircle2,
  },
];

const stepVariants = {
  hidden: { y: 28, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.18,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#13233b] sm:text-5xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-[#5a6b85]">
            Ahorrar en tu factura es más fácil de lo que crees. Solo tres pasos.
          </p>
        </div>

        <div className="relative mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative text-center"
            >
              <span
                className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 select-none font-display text-[7rem] font-extrabold leading-none text-accent/15"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-[#e7ecf3] bg-white text-accent shadow-[0_12px_30px_-14px_rgba(0,120,200,0.35)]">
                <step.Icon size={36} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-[#13233b]">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#5a6b85]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
