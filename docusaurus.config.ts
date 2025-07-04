import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Guia - Alfabetização e incentivo à leitura',
  tagline: 'Participou do WORKSHOP A Importância do Nome na Alfabetização?',
  url: 'https://criatividade.digital',
  baseUrl: '/alfabetizar/',
  //trailingSlash: true, //tentei usar isso para resolver o problema de indexação do google, mas não funcionou. A página funcionava local mas não dentro do github pages
  //onBrokenLinks: 'warn', //com a inclusão do trailingSlash para funcionar a indexação do google ele passa a dar erro nos links
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'APRENDER.digital', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  themeConfig: {
    navbar: {
      title: 'ALFABETIZAÇÃO',
      logo: {
        alt: 'Logo Livros Personalizados',
        src: 'img/curso-icone.png',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Facebook',
          items: [
            {
              label: 'CRIATIVIDADE.digital',
              href: 'https://www.facebook.com/ACriatividadeDigital',
            },
            {
              label: 'APRENDER.digital',
              href: 'https://www.facebook.com/pagina.aprender.digital',
            },
          ],
        },
        {
          title: 'Instagram',
          items: [
            {
              label: 'CRIATIVIDADE.digital',
              href: 'https://www.instagram.com/acriatividade.digital/',
            },
            {
              label: 'APRENDER.digital',
              href: 'https://www.instagram.com/aprender.digital/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PowerBook - Alfabetizar - APRENDER.digital.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-WQG5CDQL',
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
