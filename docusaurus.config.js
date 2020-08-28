module.exports = {
  title: 'Brokerage Engine',
  tagline: 'Modern back office software for real estate brokerages 🚀',
  url: 'https://learn.brokerageengine.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'dhabedank', // Usually your GitHub org/user name.
  projectName: 'brokerage-engine-docs', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-162629636-2',
    },
    navbar: {
      title: 'Brokerage Engine Docs',
      logo: {
        alt: 'Brokerage Engine Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/brokerageengine',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC7BlYZStyg91WEi9fmeHgtw',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/brokerageengine/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/BrokerageEngine',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/brokerageengine',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Feature Requests',
              to: 'https://brokerageengine.kampsite.co/',
            },
            {
              label: 'Support',
              href: 'https://help.brokerageengine.com',
            },
            {
              label: 'Company Website',
              href: 'https://brokerageengine.com',
            },
          ],
        },
        {
          title: 'Quick links',
          items: [
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brokerage Engine, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
