import locations from './locations';

const generateLocationPairs = () => {
  const highWeightLocationsFrom = locations.filter(location => location.weight > 1);

  const highWeightPairs = highWeightLocationsFrom.map(fromLocation => [fromLocation]);

  return [...highWeightPairs];
};


const locationPairs = generateLocationPairs();

const generateRoutes = () => {
  return locationPairs.map(([fromLocation]) => `/service/${fromLocation.name}`);
};

// 在 extendRoutes 中使用 locationPairs

export default {
  target: 'static',
  router: {
    extendRoutes(routes, resolve) {
      const newRoutes = locationPairs.map(([fromLocation]) => ({
        name: `${fromLocation.name}`,
        path: `/${fromLocation.name}`,
        component: resolve(__dirname, 'pages/_from/_to.vue'),
      }));
      routes.push(...newRoutes);
    },    
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'taiwantourcar',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-PFG5ZFP6K3',
        async: true,
      },
      // Google Analytics
      {
        hid: 'gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PFG5ZFP6K3');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
      // Google Tag Manager
      {
        hid: 'gtm',
        innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KKS367C');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.taiwantourcar.com/wp-content/uploads/2019/03/cropped-logo-3-192x192.png' },
      { rel: 'stylesheet', href: 'https://www.taiwantourcar.com/assets/main.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css' },
  
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  env: {
    basePath: 'https://www.taiwantourcar.com/service/',
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.taiwantourcar.com', // 替换为你的网站域名
    gzip: true,
    routes: generateRoutes(),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://www.taiwantourcar.com/service/_nuxt/',
  },
  render: {
    injectScripts: true,
  }
}
