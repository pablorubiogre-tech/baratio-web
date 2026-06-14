"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-[#e7ecf3] bg-white p-8 shadow-[0_30px_70px_-30px_rgba(20,40,80,0.3)] sm:p-10"
        >
          <h2 className="text-center font-display text-2xl font-bold text-[#13233b] sm:text-3xl">
            ¿Quieres que te llamemos?
          </h2>
          <p className="mt-3 text-center text-sm text-[#5a6b85]">
            Déjanos tus datos y un asesor te llamará para estudiar tu caso sin
            compromiso.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-[#13233b]"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-[#e1e7f0] bg-[#f6f8fc] px-4 py-3 text-[#13233b] placeholder:text-[#9aa6bd] outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label
                htmlFor="telefono"
                className="mb-2 block text-sm font-medium text-[#13233b]"
              >
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="600 000 000"
                className="w-full rounded-xl border border-[#e1e7f0] bg-[#f6f8fc] px-4 py-3 text-[#13233b] placeholder:text-[#9aa6bd] outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label
                htmlFor="suministro"
                className="mb-2 block text-sm font-medium text-[#13233b]"
              >
                Tipo de suministro
              </label>
              <select
                id="suministro"
                name="suministro"
                defaultValue="luz-gas"
                className="w-full rounded-xl border border-[#e1e7f0] bg-[#f6f8fc] px-4 py-3 text-[#13233b] outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              >
                <option value="luz">Luz</option>
                <option value="gas">Gas</option>
                <option value="luz-gas">Luz y Gas</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-primary to-accent py-4 font-semibold text-white shadow-[0_14px_34px_-12px_rgba(0,175,239,0.6)] transition-all hover:brightness-110 active:scale-[0.99]"
            >
              Solicitar llamada gratuita
            </button>
          </form>

          <p className="mt-5 text-center text-xs leading-relaxed text-[#7a89a3]">
            Al enviar aceptas nuestra{" "}
            <a href="#" className="text-accent underline-offset-2 hover:underline">
              política de privacidad
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
