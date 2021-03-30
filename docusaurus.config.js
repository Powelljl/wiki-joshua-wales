/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Josh\'s Wiki ',
  tagline: 'Some day, I\'ll look back and this will be useful.',
  url: 'https://wiki.joshua.wales',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'powelljl100', // Usually your GitHub org/user name.
  projectName: 'wiki-joshua-wales', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Josh\'s Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/powelljl100/wiki-joshua-wales',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Personal',
          items: [
            {
              label: 'Portfolio Website',
              href: 'https://joshua.wales',
            },
            {
              label: 'Home',
              href: 'https://home.joshua.wales',
            },
            {
              label: 'Blog',
              href: 'https://blog.joshua.wales',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/joshpowell100',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/powelljl100',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Josh\'s Blog. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
