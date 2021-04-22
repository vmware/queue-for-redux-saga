/* eslint-disable sort-keys */
// site configuration options.

module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  title: 'Queue for Redux-Saga',
  tagline:
    'Run Redux-Sagas without a "rootSaga". Kill boilerplate. Split code.',

  url: 'https://vmware.github.io',
  baseUrl: '/queue-for-redux-saga/',
  favicon: 'img/favicon.ico',

  // Usually your GitHub org/user name.
  organizationName: 'vmware',
  // Usually your repo name.
  projectName: 'queue-for-redux-saga',

  themeConfig: {
    // Added
    prism: {
      theme: require('./src/js/monokaiTheme.js'),
    },

    navbar: {
      title: 'Queue for Redux-Saga',
      // logo: {
      //   alt: 'Queue for Redux-Saga Logo',
      //   src: 'img/queue-for-redux-saga-dark-logo.svg',
      // },
      items: [
        {
          to: 'docs/introduction/quick-start',
          label: 'Quick Start',
          position: 'right',
        },
        { to: 'docs/api/configureSagaStore', label: 'API', position: 'right' },
        {
          href: 'https://github.com/vmware/queue-for-redux-saga',
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
              label: 'Quick Start',
              to: 'docs/introduction/quick-start',
            },
            {
              label: 'API Reference',
              to: 'docs/api/configureSagaStore',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href:
                'http://stackoverflow.com/questions/tagged/queue-for-redux-saga',
            },
            {
              label: 'Redux-Saga',
              href: 'https://redux-saga.js.org/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vmware/queue-for-redux-saga',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VMware, Inc. and other contributors.`,
    },
  },
};
