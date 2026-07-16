export const siteConfig = {
  name: "Brisa Estética Integrativa",
  shortName: "Brisa",
  founder: "Karina Gazetta",
  founderRole: "Esteticista com especialização em saúde mental",
  tagline: "Estética que ouve antes de tocar",
  description:
    "Estética integrativa em Duque de Caxias. Atendimento privativo, escuta terapêutica e cuidado com o tempo que você precisa. Com 10 anos de experiência.",

  whatsapp: {
    number: "5521991093995",
    display: "(21) 99109-3995",
    defaultMessage:
      "Oi Karina! Vim pelo site da Brisa e queria saber mais sobre um atendimento.",
  },

  instagram: {
    handle: "brisa.esteticaintegrativa",
    url: "https://www.instagram.com/brisa.esteticaintegrativa/",
  },

  location: {
    neighborhood: "Doutor Laureano",
    city: "Duque de Caxias",
    state: "RJ",
  },

  hours: [
    { day: "Quarta", open: "08h", close: "17h" },
    { day: "Quinta", open: "14h", close: "20h" },
    { day: "Sexta", open: "09h", close: "19h" },
    { day: "Sábado", open: "08h", close: "15h" },
  ],

  email: "karinagazettadeoliveira@hotmail.com",

  domain: "brisaesteticaintegrativa.com.br",
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp.number}`;
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  return `${base}?text=${encodeURIComponent(text)}`;
}
