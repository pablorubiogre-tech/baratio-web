"use client";

import { useState } from "react";
import Logo from "./Logo";

const CONSENT_TEXT = `En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de que Baratio Asesores SL tratará sus datos personales con la finalidad de gestionar su solicitud de ahorro energético, incluyendo el análisis de su consumo, la comparativa de tarifas y, en su caso, la gestión del cambio de compañía comercializadora.

La base legal del tratamiento es su consentimiento expreso. Sus datos no serán cedidos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio solicitado (por ejemplo, comunicación con comercializadoras energéticas).

Podrá ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad dirigiéndose a info@baratio.es. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).

Conservaremos sus datos mientras sea necesario para la finalidad indicada y durante los plazos legalmente exigibles.`;

type ConsentFormProps = {
  nombre: string;
};

export default function ConsentForm({ nombre }: ConsentFormProps) {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-md text-center">
          <Logo size="lg" className="mb-8 block" />
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              ✓
            </div>
            <h1 className="text-xl font-bold text-text">
              Consentimiento registrado
            </h1>
            <p className="mt-3 text-text/70">
              Gracias, {nombre}. Hemos recibido tu autorización correctamente.
              Nuestro equipo comenzará a gestionar tu solicitud de ahorro
              energético.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-12">
      <div className="mx-auto w-full max-w-lg">
        <div className="mb-10 text-center">
          <Logo size="lg" className="inline-block" />
        </div>

        <p className="mb-8 text-center text-lg leading-relaxed text-text">
          Hola <span className="font-semibold text-primary">{nombre}</span>,
          necesitamos tu autorización para gestionar tu solicitud de ahorro
          energético
        </p>

        <div className="mb-8 max-h-64 overflow-y-auto rounded-xl border border-gray-200 bg-white p-5 text-sm leading-relaxed text-text/80 shadow-sm">
          {CONSENT_TEXT}
        </div>

        <button
          type="button"
          onClick={() => setAccepted(true)}
          className="w-full rounded-xl bg-primary py-4 text-base font-bold tracking-wide text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          ACEPTO Y FIRMO
        </button>
      </div>
    </div>
  );
}
