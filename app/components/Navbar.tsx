"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import SocialIcons from "./SocialIcons";

const navItems = [
  { href: "/biografia", label: "Biografía" },
  { href: "/musica", label: "Música" },
  { href: "/videoclips", label: "Videoclips" },
  { href: "/merch", label: "Merch" },
  { href: "/contacto", label: "Suscríbete / Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Icon */}
          <Link 
            href="/" 
            className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
            aria-label="Inicio"
          >
            <Image
              src="/icon/primary_1_no_bg.png"
              alt="Arantxa - Inicio"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:block">
            <SocialIcons />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary-2 transition-colors"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 pb-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <SocialIcons className="justify-center" />
          </div>
        </div>
      </nav>
    </header>
  );
}

