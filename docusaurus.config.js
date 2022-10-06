// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mini Course on Stacks by Sahil Aujla',
  tagline: 'Learn Stacks from the ground up!',
  url: 'https://sahilaujla.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/stacks.png',
  organizationName: 'SahilAujla',
  projectName: 'Mini Course on Stacks by Sahil Aujla', 
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sahilaujla/stacks-course/blob/master/',
          sidebarCollapsed: false
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sahilaujla/stacks-course/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Stacks',
        logo: {
          alt: 'Stacks Logo',
          src: 'img/stacks.png',
        },
        items: [
          {
            href: 'https://github.com/sahilaujla/stacks-course',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Track',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rJFR4DEYZc',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SahilAujla15',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SahilAujla',
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

