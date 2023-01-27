export const SITE = {
  title: 'Normadera',
  description:
    'Manual técnico de formación para la caracterización de madera de uso estructural',
  defaultLanguage: 'es',
} as const;

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'tknika',
};

export const KNOWN_LANGUAGES = {
  Castellano: 'es',
  English: 'en',
  Euskara: 'eu',
  Français: 'fr',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  es: {
    Contenidos: [
      { text: '0. Introducción al proyecto', link: 'es/0-introduccion' },
      { text: '1. La gestión forestal', link: 'es/1-la-gestion-forestal' },
      {
        text: '2. Identificación y fichas técnicas de la madera',
        link: 'es/2-identificacion-fichas-tecnicas-madera',
      },
      {
        text: '3. Procesado de la madera',
        link: 'es/3-procesado-de-la-madera',
      },
      {
        text: '4. Marcado CE y clasificación visual del abeto Douglas',
        link: 'es/4-marcado-ce-clasificacion-douglas',
      },
      {
        text: '5. Clasificación y proceso de caracterización de la madera estructural',
        link: 'es/5-clasificacion-caracterizacion-madera-estructural',
      },
      {
        text: '6. Diseño de estructuras de madera',
        link: 'es/6-diseño de estructuras de madera',
      },
    ],
    Información: [
      { text: 'Fichas de especies', link: 'es/fichas-de-especies' },
      { text: 'Videos', link: 'es/videos' },
      { text: 'Clave dicotómica', link: 'es/clave-dicotomica' },
      { text: 'Créditos', link: 'es/creditos' },
    ],
  },
  en: {
    'Section Header': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' },
    ],
    'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
  },
};
