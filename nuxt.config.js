export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [{ path: '~/components', pathPrefix: false }],

  /*
   ** Loading progress bar
   ** See https://nuxtjs.org/api/configuration-loading
   */
  loading: false,

  /*
   ** Rooter config
   ** See https://nuxtjs.org/api/configuration-router
   */
  router: {
    linkExactActiveClass: 'active',
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'DraftMan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'theme-color',
        content: '#cd6e57',
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        // iOS
        name: 'apple-mobile-web-app-title',
        content: 'DraftMan',
      },
      {
        // iOS
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        // iOS
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
      {
        // Windows
        name: 'msapplication-navbutton-color',
        content: '#cd6e57',
      },
      {
        // Windows
        name: 'msapplication-TileColor',
        content: '#cd6e57',
      },
      {
        // Windows
        name: 'msapplication-TileImage',
        content: process.env.BASE_URL + '/icons/ms-icon-144x144.png',
      },
      {
        name: 'msapplication-square70x70logo',
        content: process.env.BASE_URL + '/icons/ms-icon-70x70.png',
      },
      {
        name: 'msapplication-square150x150logo',
        content: process.env.BASE_URL + '/icons/ms-icon-150x150.png',
      },
      {
        name: 'msapplication-wide310x150logo',
        content: process.env.BASE_URL + '/icons/mstile-310x150.png',
      },
      {
        name: 'msapplication-square310x310logo',
        content: process.env.BASE_URL + '/icons/ms-icon-310x310.png',
      },
      {
        // Pinned Sites
        name: 'application-name',
        content: 'DraftMan',
      },
      {
        // Pinned Sites
        name: 'msapplication-tooltip',
        content:
          'DraftBot est un bot Discord multifonction et personnalisable qui emploi des réactions pour simplifier son utilisation, afin de gérer le serveur et ses membres.',
      },
      {
        // Pinned Sites
        name: 'msapplication-starturl',
        content: '/',
      },
      {
        // Tap highlighting
        name: 'msapplication-tap-highlight',
        content: 'no',
      },
      {
        // UC Mobile Browser
        name: 'full-screen',
        content: 'Yes',
      },
      {
        // UC Mobile Browser
        name: 'browsermode',
        content: 'application',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      // iOS
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: process.env.BASE_URL + '/icons/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: process.env.BASE_URL + '/icons/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: process.env.BASE_URL + '/icons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: process.env.BASE_URL + '/icons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: process.env.BASE_URL + '/icons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: process.env.BASE_URL + '/icons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: process.env.BASE_URL + '/icons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: process.env.BASE_URL + '/icons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: process.env.BASE_URL + '/icons/apple-icon-180x180.png',
      },
      // Pinned Tab
      {
        href: process.env.BASE_URL + '/icons/safari-pinned-tab.svg',
        rel: 'mask-icon',
        size: 'any',
        color: '#cd6e57',
      },
      // Android
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: process.env.BASE_URL + '/icons/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: process.env.BASE_URL + '/icons/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: process.env.BASE_URL + '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: process.env.BASE_URL + '/icons/favicon-16x16.png',
      },
    ],
  },

  /*
   ** Global CSS
   ** See https://nuxtjs.org/api/configuration-css
   */
  css: ['~/assets/css/normalize.css'],

  /*
   ** Style Ressources configuration
   ** See https://axios.nuxtjs.org/options
   */
  styleResources: {
    scss: ['./assets/css/_variables.scss'],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['./plugins/vue-typed.js'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',

    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',

    // Doc: https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module',

    // Doc: https://github.com/nuxt-community/nuxt-i18n
    'nuxt-i18n',
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  i18n: {
    locales: [
      {
        code: 'nl',
        domain: 'www.draftman.nl',
        iso: 'nl-NL',
        name: 'Nederlands',
      },
      {
        code: 'fr',
        domain: 'www.draftman.fr',
        iso: 'fr-FR',
        name: 'Français',
      },
    ],
    baseUrl: 'https://www.draftman.fr',
    strategy: 'prefix_except_default',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'fr',
    },
    detectBrowserLanguage: false,
    seo: false,
    differentDomains: process.env.NODE_ENV === 'production',
  },

  /*
   ** Auth module configuration
   ** See https://github.com/nuxt-community/redirect-module#usage
   */
  redirect: [
    {
      from: '^/twitter',
      to: 'https://twitter.com/DraftMan_Dev',
    },
    {
      from: '^/github',
      to: 'https://github.com/DraftProducts',
    },
    {
      from: '^/gitlab',
      to: 'https://gitlab.com/DraftMan',
    },
    {
      from: '^/facebook',
      to: 'https://www.facebook.com/nicovanaarsen',
    },
    {
      from: '^/paypal',
      to: 'https://www.paypal.me/draftproducts',
    },
    {
      from: '^/patreon',
      to: 'https://www.patreon.com/draftman_dev',
    },
    {
      from: '^/discord',
      to: 'https://discordapp.com/invite/DrzKVU3',
    },
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        stage: 2,
        autoprefixer: {
          flexbox: true,
        },
      },
    },
  },
}
