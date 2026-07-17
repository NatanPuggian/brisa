"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-brisa-line)] bg-[color:var(--color-brisa-cream)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/logo-brisa.png"
            alt={siteConfig.name}
            width={90}
            height={72}
            className="h-14 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[color:var(--color-brisa-ink-muted)]">
          <Link
            href="/servicos"
            className="hover:text-[color:var(--color-brisa-turquoise-dark)] transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="/blog"
            className="hover:text-[color:var(--color-brisa-turquoise-dark)] transition-colors"
          >
            Blog
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-[color:var(--color-brisa-turquoise)] px-4 py-2 text-white font-medium hover:bg-[color:var(--color-brisa-turquoise-dark)] transition-colors"
          >
            Falar com a Karina
          </a>
        </nav>
      </div>
    </header>
  );
}
