module.exports = {
  title: 'Brokerage Engine',
  tagline: 'Modern back office software for real estate brokerages 🚀',
  url: 'https://learn.brokerageengine.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'dhabedank', // Usually your GitHub org/user name.
  projectName: 'brokerage-engine-documentation', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '5bd911786d9cf6e6c2fb6f61b3ddd915',
      indexName: 'brokerageengine_learn',
    },
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
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/listings/overview',
          activeBasePath: '/docs/listings',
          label: 'Listings',
          position: 'left',
        },
        {
          to: 'docs/marketing/overview',
          activeBasePath: '/docs/marketing',
          label: 'Marketing',
          position: 'left',
        },
        {
          to: 'docs/documents/overview',
          activeBasePath: '/docs/documents',
          label: 'Documents',
          position: 'left',
        },
        {
          to: 'docs/transactions/overview',
          activeBasePath: '/docs/transactions',
          label: 'Transactions',
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
            'https://github.com/dhabedank/brokerage-engine-documentation/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
