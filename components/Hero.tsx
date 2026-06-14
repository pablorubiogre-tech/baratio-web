"use client";

import Image from "next/image";
import {
  FileSearch,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Navbar from "./Navbar";
import LeadForm, { type LeadFormProps } from "./LeadForm";

const features: { Icon: LucideIcon; label: string }[] = [
  { Icon: FileSearch, label: "Estudio gratuito" },
  { Icon: ShieldCheck, label: "Sin compromiso" },
  { Icon: UserRound, label: "Atención personalizada" },
];

type HeroProps = Pick<
  LeadFormProps,
  | "modo"
  | "nombreInicial"
  | "telefonoInicial"
  | "consentToken"
  | "consentInitialState"
>;

export default function Hero({
  modo = "lead",
  nombreInicial,
  telefonoInicial,
  consentToken,
  consentInitialState,
}: HeroProps = {}) {
  return (
    <section id="top" className="bg-white px-4 pb-8 pt-4">
      <div className="mx-auto max-w-[1460px]">
        <div className="relative min-h-[90vh]">
          <div className="hero-mask absolute inset-0">
            <Image
              src="/hero-building.png"
              alt="Edificio de oficinas iluminado de noche"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="hero-overlay-dark" />
            <div className="hero-overlay-gradient" />
          </div>

          <div className="relative z-10 flex min-h-[90vh] flex-col px-7 pb-9 pt-6 sm:px-10 lg:px-0 lg:pb-14 lg:pt-0">
            <Navbar />

            <div className="flex flex-1 items-center px-7 py-8 sm:px-10 lg:px-10 lg:py-10">
              <div className="flex w-full flex-col gap-10 md:grid md:grid-cols-1 md:items-center lg:grid-cols-12 lg:gap-8">
                <div className="order-2 flex max-w-xl flex-col md:order-none lg:col-span-7">
                  <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Asesoría energética para empresas
                  </span>

                  <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="text-ink">Menos coste energético.</span>
                    <br />
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Más margen para tu empresa.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
                    Analizamos luz y gas para pymes, oficinas, locales y
                    negocios. Comparamos opciones y te ayudamos a pagar mejor,
                    sin complicaciones.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                    {features.map(({ Icon, label }) => (
                      <div key={label} className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-accent">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        <span className="max-w-[7rem] text-sm font-medium leading-tight text-ink/85">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 md:order-none lg:col-span-5">
                  <LeadForm
                    modo={modo}
                    nombreInicial={nombreInicial}
                    telefonoInicial={telefonoInicial}
                    consentToken={consentToken}
                    consentInitialState={consentInitialState}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
