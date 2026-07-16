export type Service = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  benefits: string[];
  duration?: string;
  featured?: boolean;
  contraindications?: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "limpeza-de-pele",
    name: "Limpeza de pele",
    shortName: "Limpeza de pele",
    headline:
      "Remove impurezas, hidrata e devolve luminosidade pra pele. Com o cuidado de quem faz há 10 anos.",
    summary:
      "Procedimento carro-chefe da Brisa. Feito com tempo estendido, materiais esterilizados individualmente e conversa inicial pra entender o que sua pele está pedindo naquele momento.",
    benefits: [
      "Remove comedões, milium e impurezas",
      "Hidrata em profundidade",
      "Retarda o envelhecimento precoce",
      "Melhora a textura e o brilho da pele",
    ],
    duration: "60 a 90 minutos",
    featured: true,
    faq: [
      {
        q: "Quantas sessões de limpeza de pele são recomendadas?",
        a: "A frequência ideal é a cada 30 a 45 dias, mas variar conforme o tipo de pele. Na primeira sessão a Karina avalia e sugere o ritmo pra você.",
      },
      {
        q: "A limpeza de pele dói?",
        a: "Extração de comedões incomoda de leve em algumas áreas, principalmente no nariz e no queixo. A Karina trabalha com técnica cuidadosa e conversa contigo durante o procedimento pra você se sentir segura.",
      },
      {
        q: "Posso fazer limpeza de pele grávida?",
        a: "Sim, com adaptações. A Karina avalia no primeiro contato quais ativos e técnicas usar de forma segura durante a gestação.",
      },
    ],
  },
  {
    slug: "drenagem-linfatica",
    name: "Drenagem linfática",
    shortName: "Drenagem",
    headline:
      "Reduz inchaço, elimina toxinas e devolve leveza ao corpo. Facial, corporal, pré e pós-operatório.",
    summary:
      "Massagem manual que estimula o sistema linfático a trabalhar melhor. Alivia retenção de líquido, melhora circulação e ajuda o corpo a se recuperar mais rápido.",
    benefits: [
      "Reduz inchaço e retenção de líquido",
      "Melhora a circulação sanguínea",
      "Auxilia na recuperação pós-operatória",
      "Diminui a celulite e a sensação de peso",
    ],
    duration: "60 minutos",
    featured: true,
    faq: [
      {
        q: "Quantas sessões de drenagem preciso pra ver resultado?",
        a: "Resultado imediato aparece na mesma sessão, com sensação de leveza. Pra efeito sustentado, o ideal é uma sequência de 10 a 15 sessões, com frequência semanal.",
      },
      {
        q: "Drenagem linfática emagrece?",
        a: "Diretamente não. Ela reduz inchaço e melhora a silhueta, o que pode diminuir alguns centímetros. Emagrecer é resultado de outros fatores como alimentação e movimento.",
      },
      {
        q: "Posso fazer drenagem grávida?",
        a: "Sim, com técnica adaptada. A Karina tem experiência com drenagem pré-natal e ajusta a intensidade pra cada fase da gestação.",
      },
    ],
  },
  {
    slug: "auriculoterapia",
    name: "Auriculoterapia",
    shortName: "Auriculoterapia",
    headline:
      "Técnica milenar da medicina chinesa. Ajuda no sono, ansiedade, dores físicas e no equilíbrio do corpo.",
    summary:
      "Sementes aplicadas em pontos específicos da orelha estimulam a resposta do corpo pra questões que vão de dor lombar a ansiedade. Sessão indolor, resultado que dura dias.",
    benefits: [
      "Reduz ansiedade e melhora o sono",
      "Alivia dores físicas crônicas",
      "Auxilia no controle de vícios e compulsões",
      "Ajuda no processo de emagrecimento saudável",
    ],
    duration: "40 minutos",
    featured: true,
    faq: [
      {
        q: "Auriculoterapia funciona mesmo?",
        a: "Tem base em milênios de prática da medicina tradicional chinesa e crescente reconhecimento científico. Funciona quando bem indicada. A Karina conversa contigo pra entender o que você quer trabalhar antes de escolher os pontos.",
      },
      {
        q: "Quanto tempo as sementes ficam na orelha?",
        a: "Em média de 5 a 7 dias. Você recebe orientação pra pressionar as sementes ao longo do dia, o que potencializa o efeito.",
      },
      {
        q: "Auriculoterapia dói?",
        a: "Não. As sementes são fixadas com micropore, sem furo, sem sangue. Sensação é apenas de leve pressão no local.",
      },
    ],
  },
  {
    slug: "massagem-com-pedras",
    name: "Massagem com pedras quentes",
    shortName: "Pedras quentes",
    headline:
      "Alívio profundo de tensão muscular usando pedras vulcânicas aquecidas. Relaxamento que dura dias.",
    summary:
      "Combinação de massagem manual com pedras aquecidas que se moldam ao corpo. Ideal pra quem carrega tensão nos ombros, pescoço e costas por causa da rotina.",
    benefits: [
      "Alivia tensão muscular acumulada",
      "Promove relaxamento profundo",
      "Melhora a qualidade do sono",
      "Reduz o estresse e a ansiedade",
    ],
    duration: "60 a 75 minutos",
    featured: true,
    faq: [
      {
        q: "As pedras queimam a pele?",
        a: "Não. As pedras são aquecidas em temperatura controlada e testadas no antebraço antes de encostar em você. A sensação é de calor agradável.",
      },
      {
        q: "Quanto tempo dura o efeito?",
        a: "O relaxamento imediato dura de 2 a 4 dias, dependendo do teu nível de estresse acumulado. Sessões regulares aumentam esse tempo.",
      },
      {
        q: "Posso fazer se tiver pressão alta?",
        a: "Requer avaliação. Fala com a Karina antes que ela conversa contigo e adapta o atendimento pra ficar seguro.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const featuredServices = services.filter((s) => s.featured);
