"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="trabaja" className="px-6 py-24">
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-16 text-center sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #1A5A9E 0%, #0d3a6b 50%, #00AFEF 140%)",
        }}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

        <h2 className="relative font-display text-3xl font-extrabold text-white sm:text-5xl">
          ¿Listo para pagar menos?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/80">
          Empieza hoy a ahorrar en tu factura de luz y gas. Sin compromiso y sin
          coste para ti.
        </p>
        <a
          href="#contacto"
          className="relative mt-8 inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Empezar a ahorrar
        </a>
      </motion.div>
    </section>
  );
}
