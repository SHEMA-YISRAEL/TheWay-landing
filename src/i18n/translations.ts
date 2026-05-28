export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    features: string;
    scripture: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1: [string, string];
    subtitle: string;
    waitlist: { placeholder: string; cta: string; success: string };
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
  donate: {
    eyebrow: string;
    h2: [string, string];
    subtitle: string;
    amounts: { label: string; value: string; stripeUrl: string }[];
    stripeUrl: string;
    stripeBtn: string;
    note: string;
    verseCard: { quote: string; ref: string };
  };
  faq: {
    eyebrow: string;
    h2: [string, string];
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: [string, string];
    links: {
      app: { title: string; features: string; download: string; faq: string };
      legal: { title: string; privacy: string; terms: string };
    };
    copyright: string;
    verseFooter: string;
  };
}

export const es: Translations = {
  meta: {
    title: "BibleShep — Tu Camino a través de la Escritura",
    description:
      "BibleShep está en beta. Únete para probar planes de lectura guiados, versículos diarios y devocionales diseñados para profundizar tu caminar con Dios.",
  },
  navbar: {
    features: "Características",
    scripture: "Escritura",
    cta: "Próximamente",
  },
  hero: {
    badge: "Beta privada · iOS & Android",
    h1: ["Encuentra tu camino", "a través de la Escritura"],
    subtitle:
      "Planes de lectura guiados, devocionales diarios y caminos curados a través de la Palabra — diseñado para creyentes que quieren ir más profundo.",
    waitlist: {
      placeholder: "Tu correo electrónico",
      cta: "Únete a la beta",
      success: "¡Listo! Te avisamos cuando lancemos.",
    },
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
    eyebrow: "Por qué BibleShep",
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
      "BibleShep nació de este versículo — la convicción de que la Escritura no es solo un libro, sino una guía viva para cada paso del camino.",
  },
  download: {
    eyebrow: "Próximamente",
    h2: ["BibleShep llega", "a iOS & Android"],
    subtitle:
      "Estamos preparando el lanzamiento. Únete a la lista para ser el primero en acceder.",
    appStore: { label: "Próximamente en", platform: "App Store" },
    googlePlay: { label: "Próximamente en", platform: "Google Play" },
    note: "",
    verseCard: {
      quote: "«Yo soy el camino, la verdad y la vida.»",
      ref: "Juan 14:6",
    },
  },
  donate: {
    eyebrow: "Apoya la misión",
    h2: ["Ayúdanos a llevar", "la Palabra más lejos"],
    subtitle:
      "BibleShep es un ministerio cristiano sin fines de lucro. Cada donación nos ayuda a mantener la app gratuita y a alcanzar más creyentes con la Palabra de Dios.",
    amounts: [
      {
        label: "$5",
        value: "5",
        stripeUrl: "https://donate.stripe.com/8x2fZagkq9iG0GZarxeZ200",
      },
      {
        label: "$10",
        value: "10",
        stripeUrl: "https://donate.stripe.com/aFa6oA1pwbqOblDdDJeZ201",
      },
      {
        label: "$25",
        value: "25",
        stripeUrl: "https://donate.stripe.com/9B6fZafgm3YmfBTbvBeZ202",
      },
      {
        label: "$50",
        value: "50",
        stripeUrl: "https://donate.stripe.com/5kQaEQ9W20MacpH6bheZ203",
      },
    ],
    stripeUrl: "https://donate.stripe.com/5kQaEQ9W20MacpH6bheZ203",
    stripeBtn: "Donar con Stripe",
    note: "Tu donación es segura y va directamente al desarrollo y mantenimiento de la app.",
    verseCard: {
      quote:
        "«Cada uno dé según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría.»",
      ref: "2 Corintios 9:7",
    },
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    h2: ["Todo lo que quieres", "saber sobre BibleShep"],
    items: [
      {
        q: "¿Cuándo estará disponible la app?",
        a: "Estamos en beta privada y preparando el lanzamiento para iOS y Android. Únete a la lista de espera para ser de los primeros en acceder.",
      },
      {
        q: "¿La app es gratuita?",
        a: "Sí. BibleShep es y seguirá siendo gratuita. Es un ministerio cristiano sostenido por donaciones voluntarias.",
      },
      {
        q: "¿Funciona sin conexión a internet?",
        a: "Sí. Todo el contenido bíblico está almacenado en tu dispositivo. Solo necesitas conexión para recibir notificaciones push opcionales.",
      },
      {
        q: "¿En qué idiomas está disponible?",
        a: "Actualmente en español e inglés, con múltiples traducciones de la Biblia disponibles en cada idioma.",
      },
      {
        q: "¿Guarda mis datos en la nube?",
        a: "No. Tu progreso y notas se guardan únicamente en tu dispositivo. No recopilamos información personal ni requerimos crear una cuenta.",
      },
    ],
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
        faq: "Preguntas frecuentes",
      },
      legal: {
        title: "Legal",
        privacy: "Privacidad",
        terms: "Términos de Uso",
      },
    },
    copyright: "© {year} BibleShep. Todos los derechos reservados.",
    verseFooter:
      "«La hierba se seca y la flor se marchita, pero la palabra de nuestro Dios permanece para siempre.» — Isaías 40:8",
  },
};

export const en: Translations = {
  meta: {
    title: "BibleShep — Your Path Through Scripture",
    description:
      "BibleShep is in beta. Join to try guided reading journeys, daily verses, and rich devotionals designed to deepen your walk with God.",
  },
  navbar: {
    features: "Features",
    scripture: "Scripture",
    cta: "Coming soon",
  },
  hero: {
    badge: "Private beta · iOS & Android",
    h1: ["Find your path", "through Scripture"],
    subtitle:
      "Guided reading journeys, daily devotionals, and curated paths through God’s Word — designed for believers who want to go deeper.",
    waitlist: {
      placeholder: "Your email address",
      cta: "Join the beta",
      success: "You’re in! We’ll notify you at launch.",
    },
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
    eyebrow: "Why BibleShep",
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
      "BibleShep was built on this verse — the belief that Scripture is not just a book, but a living guide for every step of the journey.",
  },
  download: {
    eyebrow: "Coming soon",
    h2: ["BibleShep is coming", "to iOS & Android"],
    subtitle:
      "We’re preparing the launch. Join the waitlist to be first in line.",
    appStore: { label: "Coming soon on", platform: "App Store" },
    googlePlay: { label: "Coming soon on", platform: "Google Play" },
    note: "",
    verseCard: {
      quote: '"I am the way, the truth, and the life."',
      ref: "John 14:6",
    },
  },
  donate: {
    eyebrow: "Support the mission",
    h2: ["Help us bring", "the Word further"],
    subtitle:
      "BibleShep is a non-profit Christian ministry. Every donation helps us keep the app free and reach more believers with God's Word.",
    amounts: [
      {
        label: "$5",
        value: "5",
        stripeUrl: "https://donate.stripe.com/8x2fZagkq9iG0GZarxeZ200",
      },
      {
        label: "$10",
        value: "10",
        stripeUrl: "https://donate.stripe.com/aFa6oA1pwbqOblDdDJeZ201",
      },
      {
        label: "$25",
        value: "25",
        stripeUrl: "https://donate.stripe.com/9B6fZafgm3YmfBTbvBeZ202",
      },
      {
        label: "$50",
        value: "50",
        stripeUrl: "https://donate.stripe.com/5kQaEQ9W20MacpH6bheZ203",
      },
    ],
    stripeUrl: "https://donate.stripe.com/5kQaEQ9W20MacpH6bheZ203",
    stripeBtn: "Donate with Stripe",
    note: "Your donation is secure and goes directly to app development and maintenance.",
    verseCard: {
      quote:
        '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."',
      ref: "2 Corinthians 9:7",
    },
  },
  faq: {
    eyebrow: "FAQ",
    h2: ["Everything you want", "to know about BibleShep"],
    items: [
      {
        q: "When will the app be available?",
        a: "We're in private beta and preparing the launch for iOS and Android. Join the waitlist to be among the first to access it.",
      },
      {
        q: "Is the app free?",
        a: "Yes. BibleShep is and will remain free. It's a Christian ministry sustained by voluntary donations.",
      },
      {
        q: "Does it work offline?",
        a: "Yes. All Bible content is stored on your device. You only need an internet connection for optional push notifications.",
      },
      {
        q: "What languages are available?",
        a: "Currently Spanish and English, with multiple Bible translations available in each language.",
      },
      {
        q: "Does it store my data in the cloud?",
        a: "No. Your progress and notes are saved only on your device. We don't collect personal information or require you to create an account.",
      },
    ],
  },
  footer: {
    tagline: ["Walking with believers", "through every page of Scripture."],
    links: {
      app: {
        title: "App",
        features: "Features",
        download: "Coming soon",
        faq: "FAQ",
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
      },
    },
    copyright: "© {year} BibleShep. All rights reserved.",
    verseFooter:
      '"The grass withers, the flower fades, but the word of our God stands forever." — Isaiah 40:8',
  },
};
