"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  Repeat,
  Building2,
  TrendingDown,
  Bell,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Comparativa personalizada",
    description:
      "Analizamos tu consumo real y comparamos las mejores tarifas del mercado adaptadas a tu perfil.",
    Icon: BarChart2,
  },
  {
    title: "Cambio de compañía",
    description:
      "Gestionamos todo el proceso de cambio para que no tengas que preocuparte de trámites ni cortes.",
    Icon: Repeat,
  },
  {
    title: "Asesoría hogares y empresas",
    description:
      "Soluciones energéticas tanto para particulares como para pymes y autónomos en Madrid.",
    Icon: Building2,
  },
  {
    title: "Análisis de ahorro",
    description:
      "Calculamos cuánto puedes ahorrar al año con una tarifa más ajustada a tu consumo.",
    Icon: TrendingDown,
  },
  {
    title: "Seguimiento de tarifas",
    description:
      "Monitorizamos el mercado y te avisamos cuando aparece una opción mejor para ti.",
    Icon: Bell,
  },
  {
    title: "Atención personalizada",
    description:
      "Un asesor dedicado que responde tus dudas y te acompaña en cada paso del proceso.",
    Icon: UserCheck,
  },
];

const cardVariants = {
  hidden: { y: 32, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#13233b] sm:text-5xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-[#5a6b85]">
            Todo lo que necesitas para pagar menos en tu factura de luz y gas,
            con un equipo que trabaja exclusivamente por tu interés.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-2xl border border-[#e7ecf3] bg-white p-7 shadow-[0_10px_30px_-18px_rgba(20,40,80,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_18px_40px_-18px_rgba(0,120,200,0.35)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <service.Icon size={24} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-[#13233b]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5a6b85]">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
