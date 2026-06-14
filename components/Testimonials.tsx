"use client";

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  profile: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Luis M.",
    profile: "Particular · Madrid",
    text: "Llevaba años pagando de más sin saberlo. Baratio me encontró una tarifa que me ahorra más de 300 € al año. El cambio fue rapidísimo y sin ningún problema.",
  },
  {
    name: "Rosa G.",
    profile: "Particular · Vallecas",
    text: "Me explicaron la factura como nadie lo había hecho antes. Por fin entiendo qué pago y por qué. Muy profesionales y sin presión para contratar nada.",
  },
  {
    name: "Javier F.",
    profile: "Pyme · Hostelería",
    text: "Para mi negocio era clave reducir costes fijos. Baratio analizó nuestro consumo y negoció una tarifa mucho mejor. Recomendable al 100 %.",
  },
  {
    name: "José Luis A.",
    profile: "Autónomo",
    text: "Lo que más valoro es que no intentan venderte lo suyo. Te dicen la verdad y te buscan lo mejor. Así da gusto trabajar con una asesoría.",
  },
];

const cardVariants = {
  hidden: { y: 28, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Testimonials() {
  return (
    <section id="quienes-somos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#13233b] sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-[#5a6b85]">
            Asesoría independiente con sede en Madrid. No vendemos energía:
            buscamos la mejor tarifa para cada cliente.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden rounded-2xl border border-[#e7ecf3] bg-white p-8 shadow-[0_10px_30px_-18px_rgba(20,40,80,0.25)]"
            >
              <span
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-9xl font-extrabold leading-none text-accent/15"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              <blockquote className="relative leading-relaxed text-[#3a4866]">
                {t.text}
              </blockquote>
              <figcaption className="relative mt-6">
                <p className="font-display font-bold text-primary">{t.name}</p>
                <p className="text-sm text-[#7a89a3]">{t.profile}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
