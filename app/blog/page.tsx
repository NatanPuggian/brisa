import type { Metadata } from "next";
import Link from "next/link";
import { whatsappUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textos sobre estética integrativa, cuidado com o corpo e escuta. Assinados pela Karina Gazetta.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
          Blog
        </div>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-[color:var(--color-brisa-turquoise-dark)] leading-tight">
          Reflexões sobre estética que cuida por inteiro.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
          Textos assinados pela Karina sobre corpo, escuta e o que a estética integrativa realmente significa.
        </p>
      </div>

      <div className="mt-16 rounded-3xl border border-dashed border-[color:var(--color-brisa-line)] bg-white/40 p-10 text-center">
        <h2 className="font-serif text-2xl text-[color:var(--color-brisa-turquoise-dark)]">
          Primeiros textos em breve
        </h2>
        <p className="mt-4 text-[color:var(--color-brisa-ink-muted)] max-w-md mx-auto leading-relaxed">
          Enquanto os primeiros textos não chegam, você pode conversar diretamente com a Karina pra tirar qualquer dúvida.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[color:var(--color-brisa-turquoise)] px-5 py-2.5 text-white text-sm font-medium hover:bg-[color:var(--color-brisa-turquoise-dark)] transition-colors"
          >
            Falar com a Karina
          </a>
          <Link
            href="/servicos"
            className="inline-flex items-center rounded-full border border-[color:var(--color-brisa-turquoise)] px-5 py-2.5 text-[color:var(--color-brisa-turquoise-dark)] text-sm font-medium hover:bg-[color:var(--color-brisa-turquoise-light)]/30 transition-colors"
          >
            Conhecer os serviços
          </Link>
        </div>
      </div>
    </div>
  );
}
