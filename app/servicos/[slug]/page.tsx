import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} em ${siteConfig.location.city}`,
    description: service.headline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const message = `Oi Karina! Vim pelo site e queria saber mais sobre ${service.name.toLowerCase()}.`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Link
          href="/servicos"
          className="text-sm text-[color:var(--color-brisa-ink-muted)] hover:text-[color:var(--color-brisa-turquoise-dark)]"
        >
          ← Todos os serviços
        </Link>

        <header className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
            Serviço
          </div>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-[color:var(--color-brisa-turquoise-dark)] leading-tight">
            {service.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[color:var(--color-brisa-ink-muted)] leading-relaxed max-w-2xl">
            {service.headline}
          </p>
          {service.duration && (
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--color-brisa-turquoise-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brisa-turquoise)]" />
              Duração média: {service.duration}
            </div>
          )}
        </header>

        <section className="mt-12 rounded-3xl border border-[color:var(--color-brisa-line)] bg-white/60 p-8 md:p-10">
          <h2 className="font-serif text-2xl text-[color:var(--color-brisa-turquoise-dark)]">
            Como funciona na Brisa
          </h2>
          <p className="mt-4 text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
            {service.summary}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl text-[color:var(--color-brisa-turquoise-dark)]">
            Benefícios
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-[color:var(--color-brisa-line)] bg-white/40 p-4 text-[color:var(--color-brisa-ink)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--color-brisa-leaf)]" />
                <span className="text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {service.faq.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl text-[color:var(--color-brisa-turquoise-dark)]">
              Dúvidas frequentes
            </h2>
            <div className="mt-6 space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-[color:var(--color-brisa-line)] bg-white/60 p-6 open:bg-white transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-medium text-[color:var(--color-brisa-ink)]">
                    <span>{item.q}</span>
                    <span className="text-[color:var(--color-brisa-turquoise)] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 rounded-3xl bg-[color:var(--color-brisa-turquoise-dark)] text-white p-10 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            Fala com a Karina sobre {service.name.toLowerCase()}.
          </h2>
          <p className="mt-4 text-[color:var(--color-brisa-turquoise-light)] max-w-lg mx-auto">
            Primeiro contato pelo WhatsApp. Sem compromisso.
          </p>
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--color-brisa-leaf)] px-8 py-4 text-white font-medium hover:bg-[color:var(--color-brisa-leaf-dark)] transition-colors"
          >
            Chamar no WhatsApp
          </a>
        </section>
      </article>
    </>
  );
}
