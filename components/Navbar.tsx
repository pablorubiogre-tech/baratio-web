"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const desktopNavLinks = [
  { label: "Inicio", href: "#top", active: true },
  { label: "Empresas", href: "#servicios" },
  { label: "Pymes", href: "#como-funciona" },
  { label: "Colaboradores", href: "#quienes-somos" },
  { label: "Contacto", href: "#contacto" },
];

const mobileNavLinks = desktopNavLinks.filter((link) => link.label !== "Inicio");

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="relative flex min-h-[56px] shrink-0 items-center justify-between gap-4 px-4 sm:px-5 lg:hero-notch-h lg:pl-5 lg:pr-10">
      <a href="#top" className="flex shrink-0 items-center lg:pr-10">
        <Logo size="md" priority className="max-h-[56px] lg:max-h-[68px]" />
      </a>

      <div className="hidden flex-1 items-center justify-center gap-7 lg:flex lg:translate-y-1">
        {desktopNavLinks.map((link) => (
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

      <div className="relative md:hidden" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1A5A9E] transition hover:bg-white/10 active:scale-[0.97]"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? (
            <X size={26} strokeWidth={2.2} aria-hidden />
          ) : (
            <Menu size={26} strokeWidth={2.2} aria-hidden />
          )}
        </button>

        {menuOpen ? (
          <div
            id="mobile-nav-menu"
            className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-white/10 bg-[rgba(8,16,32,0.92)] py-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-[15px] font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <a
        href="#contacto"
        className="hidden shrink-0 translate-y-1 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-[16px] font-semibold leading-none text-white shadow-[0_8px_24px_-6px_rgba(0,175,239,0.5)] transition-all hover:brightness-110 active:scale-[0.97] md:inline-flex"
      >
        <Phone size={16} strokeWidth={2.2} />
        Revisar factura
      </a>
    </nav>
  );
}
