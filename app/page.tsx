import Link from "next/link";
import Image from "next/image";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { featuredServices } from "@/lib/services";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-24 md:pb-32 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-12 items-center">
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden border border-[color:var(--color-brisa-line)] shadow-xl shadow-[color:var(--color-brisa-turquoise-dark)]/10">
            <Image
              src="/karina-hero.jpg"
              alt="Karina Gazetta, fundadora da Brisa Estética Integrativa"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority
            />
          </div>

          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brisa-line)] bg-white/60 px-3 py-1 text-xs uppercase tracking-widest text-[color:var(--color-brisa-turquoise-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brisa-turquoise)]" />
              Duque de Caxias · RJ
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-[color:var(--color-brisa-turquoise-dark)]">
              Estética que <em className="not-italic text-[color:var(--color-brisa-leaf-dark)]">ouve</em>.
            </h1>
            <p className="mt-6 text-lg text-[color:var(--color-brisa-ink-muted)] max-w-lg leading-relaxed">
              Na Brisa você é atendida em sala privativa, sem fila, com tempo pra respirar e ser ouvida. Estética integrativa com 10 anos de experiência da Karina Gazetta.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brisa-turquoise)] px-6 py-3.5 text-white font-medium hover:bg-[color:var(--color-brisa-turquoise-dark)] transition-colors shadow-lg shadow-[color:var(--color-brisa-turquoise)]/20"
              >
                Agendar pelo WhatsApp
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-brisa-turquoise)] px-6 py-3.5 text-[color:var(--color-brisa-turquoise-dark)] font-medium hover:bg-[color:var(--color-brisa-turquoise-light)]/30 transition-colors"
              >
                Ver os serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="border-t border-[color:var(--color-brisa-line)] bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
                O que a Brisa oferece
              </div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[color:var(--color-brisa-turquoise-dark)]">
                Cuidado com tempo, escuta e método.
              </h2>
            </div>
            <Link
              href="/servicos"
              className="text-sm text-[color:var(--color-brisa-turquoise-dark)] hover:underline"
            >
              Ver todos os serviços →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group rounded-2xl border border-[color:var(--color-brisa-line)] bg-white/60 p-6 hover:bg-white transition-colors"
              >
                <h3 className="font-serif text-2xl text-[color:var(--color-brisa-turquoise-dark)] group-hover:text-[color:var(--color-brisa-leaf-dark)] transition-colors">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
                  {s.headline}
                </p>
                <div className="mt-4 text-xs text-[color:var(--color-brisa-turquoise-dark)] font-medium">
                  Conhecer →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A KARINA */}
      <section className="border-t border-[color:var(--color-brisa-line)]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-3xl bg-gradient-to-br from-[color:var(--color-brisa-cream-dark)] via-[color:var(--color-brisa-cream)] to-[color:var(--color-brisa-turquoise-light)]/30 flex items-center justify-center border border-[color:var(--color-brisa-line)]">
            <span className="text-sm text-[color:var(--color-brisa-ink-muted)] px-6 text-center">
              [ foto da Karina ]
            </span>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
              Quem cuida de você
            </div>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[color:var(--color-brisa-turquoise-dark)]">
              Karina Gazetta.
            </h2>
            <div className="mt-6 space-y-4 text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
              <p>
                10 anos de experiência atendendo mulheres em transição, mães sobrecarregadas, profissionais no limite. E uma especialização em saúde mental que muda o jeito de conduzir cada sessão.
              </p>
              <p>
                Antes de qualquer procedimento, Karina conversa contigo. Entende se aquela dor nas costas vem da postura, do estresse acumulado ou de outra coisa. A partir daí o atendimento faz sentido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O ESPAÇO */}
      <section className="border-t border-[color:var(--color-brisa-line)] bg-[color:var(--color-brisa-cream-dark)]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brisa-ink-muted)]">
              O espaço
            </div>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[color:var(--color-brisa-turquoise-dark)] max-w-2xl">
              O detalhe que muda a experiência inteira.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sala privativa",
                desc: "Você e a Karina, sem fila, sem espera, sem outras pessoas na sala. Você escolhe se quer conversar, dormir ou só respirar.",
              },
              {
                title: "Higiene rigorosa",
                desc: "Lençóis antialérgicos trocados a cada cliente. Materiais esterilizados. Creme nunca reaproveitado.",
              },
              {
                title: "Tempo estendido",
                desc: "Sessão mais completa do que estética comum. Sem correria pra fechar horário no cronômetro.",
              },
              {
                title: "Estacionamento livre",
                desc: "Ponto de referência fácil, rua tranquila. Você não paga pra estacionar.",
              },
              {
                title: "Café e chocolate",
                desc: "Café fresquinho e biscoito goiabinha esperando. O cuidado começa antes da maca.",
              },
              {
                title: "Sem julgamento",
                desc: "Sem comparação, sem fofoca, sem modismo. Você é acolhida como é, hoje.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[color:var(--color-brisa-line)] bg-white/60 p-6"
              >
                <h3 className="font-serif text-xl text-[color:var(--color-brisa-turquoise-dark)]">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-brisa-ink-muted)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-[color:var(--color-brisa-line)]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[color:var(--color-brisa-turquoise-dark)] leading-tight">
            Uma hora só sua começa com uma mensagem.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-brisa-ink-muted)] max-w-xl mx-auto leading-relaxed">
            Karina responde pessoalmente e agenda contigo pelo WhatsApp.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[color:var(--color-brisa-turquoise)] px-8 py-4 text-white text-lg font-medium hover:bg-[color:var(--color-brisa-turquoise-dark)] transition-colors shadow-xl shadow-[color:var(--color-brisa-turquoise)]/20"
          >
            Falar com a Karina no WhatsApp
          </a>
          <div className="mt-4 text-sm text-[color:var(--color-brisa-ink-muted)]">
            {siteConfig.whatsapp.display}
          </div>
        </div>
      </section>
    </>
  );
}
