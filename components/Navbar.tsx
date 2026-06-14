import { Phone } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Inicio", href: "#top", active: true },
  { label: "Empresas", href: "#servicios" },
  { label: "Pymes", href: "#como-funciona" },
  { label: "Colaboradores", href: "#quienes-somos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <nav className="relative flex min-h-[56px] shrink-0 items-center justify-between gap-4 px-4 sm:px-5 lg:hero-notch-h lg:pl-5 lg:pr-10">
      <a href="#top" className="flex shrink-0 items-center lg:pr-10">
        <Logo size="md" priority className="max-h-[56px] lg:max-h-[68px]" />
      </a>

      <div className="hidden flex-1 items-center justify-center gap-7 lg:flex lg:translate-y-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative text-[16px] font-medium leading-none transition-colors hover:text-white ${
              link.active ? "text-white" : "text-white/65"
            }`}
          >
            {link.label}
            {link.active && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent" />
            )}
          </a>
        ))}
      </div>

      <a
        href="#contacto"
        className="inline-flex shrink-0 translate-y-1 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-[16px] font-semibold leading-none text-white shadow-[0_8px_24px_-6px_rgba(0,175,239,0.5)] transition-all hover:brightness-110 active:scale-[0.97]"
      >
        <Phone size={16} strokeWidth={2.2} />
        Revisar factura
      </a>
    </nav>
  );
}
