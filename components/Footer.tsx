import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-brisa-line)] bg-[color:var(--color-brisa-cream-dark)]/40 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl text-[color:var(--color-brisa-turquoise-dark)]">
              {siteConfig.name}
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-brisa-ink-muted)] max-w-md">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)] mb-3">
              Contato
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--color-brisa-ink)]">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-brisa-turquoise-dark)]"
                >
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-brisa-turquoise-dark)]"
                >
                  @{siteConfig.instagram.handle}
                </a>
              </li>
              <li className="text-[color:var(--color-brisa-ink-muted)]">
                {siteConfig.location.neighborhood}, {siteConfig.location.city}
                {" · "}
                {siteConfig.location.state}
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)] mb-3">
              Horário
            </div>
            <ul className="space-y-1.5 text-sm text-[color:var(--color-brisa-ink)]">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-2">
                  <span>{h.day}</span>
                  <span className="text-[color:var(--color-brisa-ink-muted)]">
                    {h.open} às {h.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--color-brisa-line)] flex flex-wrap items-center justify-between gap-4 text-xs text-[color:var(--color-brisa-ink-muted)]">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <Link href="/blog" className="hover:text-[color:var(--color-brisa-turquoise-dark)]">
            Blog da Brisa
          </Link>
        </div>
      </div>
    </footer>
  );
}
