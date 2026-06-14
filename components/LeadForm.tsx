"use client";

import Link from "next/link";
import { ArrowRight, Check, Phone, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CONSENT_TEXT_PRIVACY =
  "Acepto la Política de Privacidad y el uso de mis datos para gestionar mi solicitud.";
const CONSENT_TEXT_COMMERCIAL =
  "Acepto recibir comunicaciones comerciales de Baratio.";

const NAME_REGEX = /^[\p{L}]{2,}(?:[-\s]+[\p{L}]{2,})+$/u;

export interface LeadFormProps {
  modo?: "lead" | "consentimiento";
  nombreInicial?: string;
  telefonoInicial?: string;
}

function isValidName(value: string): boolean {
  return NAME_REGEX.test(value.trim());
}

function normalizePhone(value: string): string {
  return value.replace(/[\s\-().]/g, "").replace(/^(\+34|0034|34)/, "");
}

function isValidPhone(value: string): boolean {
  return /^[6-9]\d{8}$/.test(normalizePhone(value));
}

export default function LeadForm({
  modo = "lead",
  nombreInicial = "",
  telefonoInicial = "",
}: LeadFormProps) {
  const isConsentimiento = modo === "consentimiento";
  const primerNombre = nombreInicial?.split(" ")[0] || "";

  const [fullName, setFullName] = useState(
    isConsentimiento ? nombreInicial : "",
  );
  const [phone, setPhone] = useState(
    isConsentimiento ? telefonoInicial : "",
  );
  const [privacyAccepted, setPrivacyAccepted] = useState(isConsentimiento);
  const [commercialAccepted, setCommercialAccepted] = useState(isConsentimiento);
  const [confirmed, setConfirmed] = useState(false);

  const [nombreTocado, setNombreTocado] = useState(false);
  const [telefonoTocado, setTelefonoTocado] = useState(false);
  const [mensajeBoton, setMensajeBoton] = useState(false);
  const mensajeBotonTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const nameValid = isValidName(fullName);
  const phoneValid = isValidPhone(phone);
  const canSubmit = nameValid && phoneValid && privacyAccepted;

  const showNameError =
    !isConsentimiento && nombreTocado && fullName.trim() !== "" && !nameValid;
  const showPhoneError =
    !isConsentimiento && telefonoTocado && phone.trim() !== "" && !phoneValid;

  const mensajeBotonTexto =
    nameValid && phoneValid && !privacyAccepted
      ? "Acepta la política de privacidad para continuar"
      : "Completa los campos y acepta la política de privacidad";

  function clearMensajeBoton() {
    if (mensajeBotonTimeoutRef.current) {
      clearTimeout(mensajeBotonTimeoutRef.current);
      mensajeBotonTimeoutRef.current = null;
    }
    setMensajeBoton(false);
  }

  useEffect(() => {
    if (canSubmit) {
      clearMensajeBoton();
    }
  }, [canSubmit]);

  function showMensajeBoton() {
    if (mensajeBotonTimeoutRef.current) {
      clearTimeout(mensajeBotonTimeoutRef.current);
    }

    setMensajeBoton(true);
    mensajeBotonTimeoutRef.current = setTimeout(() => {
      setMensajeBoton(false);
      mensajeBotonTimeoutRef.current = null;
    }, 3000);
  }

  function handleConsentSign() {
    // TODO: llamar a la API del CRM (app.baratio.es/api/consentimientos/firmar)
    // pasando el token de la URL para registrar IP, fecha, hora y user agent
    // y actualizar el estado del consentimiento a "firmado"
    setConfirmed(true);
  }

  function handleLeadSubmit() {
    if (!canSubmit) {
      showMensajeBoton();
      return;
    }

    const payload = {
      fullName: fullName.trim().replace(/\s+/g, " "),
      phone: normalizePhone(phone),
      privacyAccepted: true,
      commercialCommunicationsAccepted: commercialAccepted,
      sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      consentTextPrivacy: CONSENT_TEXT_PRIVACY,
      consentTextCommercial: CONSENT_TEXT_COMMERCIAL,
      submittedAt: new Date().toISOString(),
    };

    // TODO: Enviar lead al CRM — integración pendiente (app.baratio.es).
    void payload;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isConsentimiento) {
      handleConsentSign();
      return;
    }
    handleLeadSubmit();
  }

  const inputBase =
    "w-full rounded-xl border bg-white/[0.05] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,175,239,0.18)]";
  const inputReadOnly =
    "cursor-default border-white/[0.08] bg-white/[0.03] text-white/75 focus:border-white/[0.08] focus:shadow-none";

  if (isConsentimiento && confirmed) {
    return (
      <div className="glass-panel p-6">
        <div className="relative z-10 py-4 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <Check
              size={28}
              strokeWidth={2.5}
              className="text-accent"
              aria-hidden
            />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            ¡Gracias, {nombreInicial || fullName.trim()}!
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Tu autorización ha quedado registrada correctamente.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            En breve nos pondremos en contacto contigo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-6">
      <div className="relative z-10">
        <header className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {isConsentimiento
              ? `Hola, ${primerNombre}`
              : "¿Revisamos tu caso?"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {isConsentimiento
              ? "Tu asesor necesita tu autorización para gestionar tu solicitud."
              : "Déjanos tus datos y un asesor contactará contigo."}
          </p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <div className="relative">
              <User
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
              />
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                onBlur={() => setNombreTocado(true)}
                placeholder="Nombre y apellidos"
                aria-label="Nombre y apellidos"
                aria-invalid={showNameError}
                autoComplete="name"
                disabled={isConsentimiento}
                readOnly={isConsentimiento}
                className={`${inputBase} border-white/[0.12] ${isConsentimiento ? inputReadOnly : ""}`}
              />
            </div>
            {showNameError && (
              <p className="ml-1 mt-1 text-xs text-red-400/70">
                Introduce tu nombre y apellidos
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Phone
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
              />
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                onBlur={() => setTelefonoTocado(true)}
                placeholder="Teléfono"
                aria-label="Teléfono"
                aria-invalid={showPhoneError}
                autoComplete="tel"
                disabled={isConsentimiento}
                readOnly={isConsentimiento}
                className={`${inputBase} border-white/[0.12] ${isConsentimiento ? inputReadOnly : ""}`}
              />
            </div>
            {showPhoneError && (
              <p className="ml-1 mt-1 text-xs text-red-400/70">
                Introduce un teléfono español válido
              </p>
            )}
          </div>

          <fieldset className="space-y-2.5 border-0 p-0">
            <legend className="sr-only">Consentimientos</legend>

            <label className="flex cursor-pointer items-start gap-2.5 text-left">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-white/30 bg-white/10 accent-accent"
              />
              <span className="text-[11px] leading-relaxed text-white/70">
                Acepto la{" "}
                {/* TODO: Página /privacidad pendiente de crear. */}
                <Link
                  href="/privacidad"
                  className="font-medium text-accent underline decoration-accent/50 underline-offset-2 transition hover:decoration-accent"
                >
                  Política de Privacidad
                </Link>{" "}
                y el uso de mis datos para gestionar mi solicitud.*
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-2.5 text-left">
              <input
                type="checkbox"
                name="commercialAccepted"
                checked={commercialAccepted}
                onChange={(event) =>
                  setCommercialAccepted(event.target.checked)
                }
                className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-white/30 bg-white/10 accent-accent"
              />
              <span className="text-[11px] leading-relaxed text-white/70">
                Acepto recibir comunicaciones comerciales de Baratio.
              </span>
            </label>
          </fieldset>

          <button
            type="submit"
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:brightness-110 active:scale-[0.98] ${
              isConsentimiento || canSubmit ? "btn-ready" : "bg-[#1A5A9E]"
            }`}
          >
            {isConsentimiento ? "ACEPTO Y FIRMO" : "Solicitar llamada"}
            {!isConsentimiento && <ArrowRight size={16} strokeWidth={2.4} />}
          </button>

          {!isConsentimiento && mensajeBoton && (
            <p className="mt-2 text-center text-xs text-red-400/70">
              {mensajeBotonTexto}
            </p>
          )}
        </form>

        <p className="mt-4 text-center text-xs leading-relaxed text-white/55">
          {isConsentimiento
            ? "Al confirmar, quedará registrada tu autorización con fecha, hora y dirección IP."
            : "Recibirás una atención clara, personalizada y sin compromiso."}
        </p>
      </div>
    </div>
  );
}
