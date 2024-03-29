// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'CreatorJS',
    tagline: 'Automate writing boilerplate code',
    url: 'https://creatorjs.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'creatorjs', // Usually your GitHub org/user name.
    projectName: 'creator-js', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/creator-js/creator-web/blob/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'CreatorJS',
                logo: {
                    alt: '💡',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'introduction',
                        position: 'left',
                        label: 'Docs',
                    },
                    // {to: '/templates', label: 'Templates', position: 'left'},
                    {
                        href: 'https://github.com/creator-js/creator-cli',
                        label: 'GitHub',
                        position: 'right',
                    },
                ]
            },
            footer: {
                style: 'dark',
                // links: [
                //   {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'More',
                //     items: [
                //       {
                //         label: 'Templates',
                //         to: '/templates',
                //       },
                //       {
                //         label: 'GitHub',
                //         href: 'https://github.com/creator-js/creator-cli',
                //       },
                //     ],
                //   },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} CreatorJS. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true
            },
        }),
};

module.exports = config;
