import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da Brisa Estética Integrativa: limpeza de pele, drenagem linfática, auriculoterapia e massagem com pedras quentes em Duque de Caxias.",
};

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
          Serviços
        </div>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-[color:var(--color-brisa-turquoise-dark)] leading-tight">
          Cuidados que atravessam corpo e mente.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
          Cada procedimento aqui é conduzido com escuta antes, tempo durante e presença o tempo todo.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/servicos/${s.slug}`}
            className="group rounded-2xl border border-[color:var(--color-brisa-line)] bg-white/60 p-8 hover:bg-white transition-colors"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-[color:var(--color-brisa-turquoise-dark)] group-hover:text-[color:var(--color-brisa-leaf-dark)] transition-colors">
              {s.name}
            </h2>
            <p className="mt-4 text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
              {s.headline}
            </p>
            {s.duration && (
              <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
                {s.duration}
              </div>
            )}
            <div className="mt-6 text-sm text-[color:var(--color-brisa-turquoise-dark)] font-medium">
              Conhecer o procedimento →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
