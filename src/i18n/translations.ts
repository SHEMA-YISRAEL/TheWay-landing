export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    features: string;
    scripture: string;
    download: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1: [string, string];
    subtitle: string;
    appStore: { label: string; platform: string };
    googlePlay: { label: string; platform: string };
    socialProof: string;
    phone: {
      dayLabel: string;
      chapter: string;
      verse: string;
      verseRef: string;
      progressLabel: string;
      continueBtn: string;
      tabs: { home: string; read: string; saved: string };
    };
  };
  features: {
    eyebrow: string;
    h2: [string, string];
    subtitle: string;
    items: {
      icon: string;
      bg: string;
      color: string;
      title: string;
      description: string;
    }[];
  };
  scripture: {
    quote: [string, string];
    ref: string;
    tagline: string;
  };
  download: {
    eyebrow: string;
    h2: [string, string];
    subtitle: string;
    appStore: { label: string; platform: string };
    googlePlay: { label: string; platform: string };
    note: string;
    verseCard: { quote: string; ref: string };
  };
  footer: {
    tagline: [string, string];
    links: {
      app: { title: string; features: string; download: string; plans: string };
      company: { title: string; about: string; blog: string; contact: string };
      legal: { title: string; privacy: string; terms: string };
    };
    copyright: string;
    verseFooter: string;
  };
}

export const es: Translations = {
  meta: {
    title: "The Way — Tu Camino a través de la Escritura",
    description:
      "The Way está en beta. Únete para probar planes de lectura guiados, versículos diarios y devocionales diseñados para profundizar tu caminar con Dios.",
  },
  navbar: {
    features: "Características",
    scripture: "Escritura",
    download: "Próximamente",
    cta: "Próximamente",
  },
  hero: {
    badge: "Beta privada · iOS & Android",
    h1: ["Encuentra tu camino", "a través de la Escritura"],
    subtitle:
      "The Way está en beta. Únete para probar planes de lectura guiados, devocionales diarios y caminos curados a través de la Palabra de Dios — diseñado para creyentes que quieren ir más profundo.",
    appStore: { label: "Próximamente en", platform: "App Store" },
    googlePlay: { label: "Próximamente en", platform: "Google Play" },
    socialProof: "Cupos limitados en la beta",
    phone: {
      dayLabel: "Camino de Hoy · Día 24",
      chapter: "Juan 3 · NVI",
      verse:
        "«Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna.»",
      verseRef: "v. 16",
      progressLabel: "Plan de Lectura",
      continueBtn: "Continuar Leyendo →",
      tabs: { home: "Inicio", read: "Leer", saved: "Guardados" },
    },
  },
  features: {
    eyebrow: "Por qué The Way",
    h2: ["Todo lo que necesitas para", "caminar más cerca de Dios"],
    subtitle:
      "Herramientas simples. Impacto profundo. Diseñado para creyentes en cada etapa del camino.",
    items: [
      {
        icon: "compass",
        bg: "#f4eede",
        color: "#b28436",
        title: "Caminos Guiados",
        description:
          "Jornadas de lectura curadas por cada libro de la Biblia. Desde planes de 30 días en los Salmos hasta recorridos completos en un año.",
      },
      {
        icon: "sun",
        bg: "#efe5e1",
        color: "#b28436",
        title: "Devocionales Diarios",
        description:
          "Comienza cada mañana anclado en la Palabra. Reflexiones breves y significativas con oración para fundamentar tu día.",
      },
      {
        icon: "globe",
        bg: "#e8eeea",
        color: "#4a7c60",
        title: "La Biblia en múltiples Traducciones",
        description:
          "Lee en español o inglés. Cambia de traducción al instante para profundizar tu comprensión.",
      },
      {
        icon: "bookmark",
        bg: "#f4eede",
        color: "#b28436",
        title: "Destacados y Notas",
        description:
          "Marca los versículos que te hablan, agrega reflexiones personales y construye tu propio tesoro de la Escritura.",
      },
    ],
  },
  scripture: {
    quote: [
      "Tu palabra es una lámpara a mis pies",
      "y una lumbrera a mi camino.",
    ],
    ref: "Salmo 119:105",
    tagline:
      "The Way nació de este versículo — la convicción de que la Escritura no es solo un libro, sino una guía viva para cada paso del camino.",
  },
  download: {
    eyebrow: "Próximamente",
    h2: ["The Way llega", "muy pronto"],
    subtitle:
      "Aún no está en las tiendas. Estamos preparando el lanzamiento para iOS y Android.",
    appStore: { label: "Próximamente en", platform: "App Store" },
    googlePlay: { label: "Próximamente en", platform: "Google Play" },
    note: "Lanzamiento pronto.",
    verseCard: {
      quote: "«Yo soy el camino, la verdad y la vida.»",
      ref: "Juan 14:6",
    },
  },
  footer: {
    tagline: [
      "Caminando con creyentes",
      "a través de cada página de la Escritura.",
    ],
    links: {
      app: {
        title: "App",
        features: "Características",
        download: "Próximamente",
        plans: "Planes de Lectura",
      },
      company: {
        title: "Nosotros",
        about: "Acerca de",
        blog: "Blog",
        contact: "Contacto",
      },
      legal: {
        title: "Legal",
        privacy: "Privacidad",
        terms: "Términos de Uso",
      },
    },
    copyright: "© {year} The Way. Todos los derechos reservados.",
    verseFooter:
      "«La hierba se seca y la flor se marchita, pero la palabra de nuestro Dios permanece para siempre.» — Isaías 40:8",
  },
};

export const en: Translations = {
  meta: {
    title: "The Way — Your Path Through Scripture",
    description:
      "The Way is in beta. Join to try guided reading journeys, daily verses, and rich devotionals designed to deepen your walk with God.",
  },
  navbar: {
    features: "Features",
    scripture: "Scripture",
    download: "Coming soon",
    cta: "Coming soon",
  },
  hero: {
    badge: "Private beta · iOS & Android",
    h1: ["Find your path", "through Scripture"],
    subtitle:
      "The Way is in beta. Join to try guided reading journeys, daily devotionals, and curated paths through God’s Word — designed for believers who want to go deeper.",
    appStore: { label: "Coming soon on", platform: "App Store" },
    googlePlay: { label: "Coming soon on", platform: "Google Play" },
    socialProof: "Limited beta spots available",
    phone: {
      dayLabel: "Today's Path · Day 24",
      chapter: "John 3 · NIV",
      verse:
        '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."',
      verseRef: "v. 16",
      progressLabel: "Reading Plan",
      continueBtn: "Continue Reading →",
      tabs: { home: "Home", read: "Read", saved: "Saved" },
    },
  },
  features: {
    eyebrow: "Why The Way",
    h2: ["Everything you need to", "walk deeper with God"],
    subtitle:
      "Simple tools. Profound impact. Designed for believers at every stage of the journey.",
    items: [
      {
        icon: "compass",
        bg: "#f4eede",
        color: "#b28436",
        title: "Guided Paths",
        description:
          "Curated reading journeys through every book of the Bible. From 30-day Psalms plans to year-long Scripture walks.",
      },
      {
        icon: "sun",
        bg: "#efe5e1",
        color: "#b28436",
        title: "Daily Devotionals",
        description:
          "Start every morning anchored in the Word. Short, meaningful reflections paired with prayer to ground your day.",
      },
      {
        icon: "globe",
        bg: "#e8eeea",
        color: "#4a7c60",
        title: "Multiple Translations",
        description:
          "Read in KJV, NIV, ESV, NVI, RVR1960 and more. Switch translations instantly to deepen your understanding.",
      },
      {
        icon: "bookmark",
        bg: "#f4eede",
        color: "#b28436",
        title: "Highlights & Notes",
        description:
          "Mark verses that speak to you, add personal reflections, and build your own treasury of Scripture over time.",
      },
    ],
  },
  scripture: {
    quote: ["Your word is a lamp to my feet", "and a light to my path."],
    ref: "Psalm 119:105",
    tagline:
      "The Way was built on this verse — the belief that Scripture is not just a book, but a living guide for every step of the journey.",
  },
  download: {
    eyebrow: "Coming soon",
    h2: ["Coming soon to", "iOS & Android"],
    subtitle:
      "Not in the stores yet. We’re preparing the launch for iOS and Android.",
    appStore: { label: "Coming soon on", platform: "App Store" },
    googlePlay: { label: "Coming soon on", platform: "Google Play" },
    note: "Launching soon.",
    verseCard: {
      quote: '"I am the way, the truth, and the life."',
      ref: "John 14:6",
    },
  },
  footer: {
    tagline: ["Walking with believers", "through every page of Scripture."],
    links: {
      app: {
        title: "App",
        features: "Features",
        download: "Coming soon",
        plans: "Reading Plans",
      },
      company: {
        title: "Company",
        about: "About",
        blog: "Blog",
        contact: "Contact",
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
      },
    },
    copyright: "© {year} The Way. All rights reserved.",
    verseFooter:
      '"The grass withers, the flower fades, but the word of our God stands forever." — Isaiah 40:8',
  },
};
