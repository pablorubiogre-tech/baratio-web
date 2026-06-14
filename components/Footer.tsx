import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#e7ecf3] bg-[#f6f8fc] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5a6b85]">
              Baratio Asesores SL. Asesoría energética independiente al servicio
              de tu ahorro.
            </p>
          </div>

          <div className="space-y-3 text-sm text-[#5a6b85]">
            <p className="font-display font-semibold text-[#13233b]">Contacto</p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              Avda. Palomeras 111, Madrid
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-accent" />
              <a
                href="tel:+34644911352"
                className="transition hover:text-[#13233b]"
              >
                644 911 352
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-accent" />
              <a
                href="mailto:info@baratio.es"
                className="transition hover:text-[#13233b]"
              >
                info@baratio.es
              </a>
            </p>
          </div>

          <div className="space-y-3 text-sm text-[#5a6b85]">
            <p className="font-display font-semibold text-[#13233b]">Síguenos</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#13233b]"
            >
              <InstagramIcon size={16} className="text-accent" />
              Instagram
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <a href="#" className="transition hover:text-[#13233b]">
                Aviso legal
              </a>
              <a href="#" className="transition hover:text-[#13233b]">
                Política de privacidad
              </a>
              <a href="#" className="transition hover:text-[#13233b]">
                Política de cookies
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#e7ecf3] pt-6 text-center text-xs text-[#7a89a3]">
          © {new Date().getFullYear()} Baratio Asesores SL. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
