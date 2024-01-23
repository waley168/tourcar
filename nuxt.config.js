import locations from './locations';

const generateLocationPairs = () => {
  const highWeightLocationsFrom = locations.filter(location => location.id >= 121 && location.id <= 122);
  const highWeightLocationsTo = locations.filter(location => location.weight > 1);

  const highWeightPairs = [];
  highWeightLocationsFrom.forEach(fromLocation => {
    highWeightLocationsTo
      .filter(toLocation => fromLocation.id !== toLocation.id)
      .forEach(toLocation => {
        highWeightPairs.push([fromLocation, toLocation]);
      });
  });
  return [...highWeightPairs];
};

const locationPairs = generateLocationPairs();

const generateRoutes = () => {
  return locationPairs.map(([fromLocation, toLocation]) => `/route/${fromLocation.name}/${toLocation.name}`);
};

// 在 extendRoutes 中使用 locationPairs

export default {
  router: {
    extendRoutes(routes, resolve) {
      const newRoutes = locationPairs.map(([fromLocation, toLocation]) => ({
        name: `${fromLocation.name}-to-${toLocation.name}`,
        path: `/${fromLocation.name}/${toLocation.name}`,
        component: resolve(__dirname, 'pages/_from/_to.vue'),
      }));
      routes.push(...newRoutes);
    },    
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wanma',
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
        src: 'https://www.googletagmanager.com/gtag/js?id=G-Z691T4Q3Q7',
        async: true,
      },
      // Google Analytics
      {
        hid: 'gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z691T4Q3Q7');
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
          })(window,document,'script','dataLayer','GTM-5HHQ359');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://wanma.tw/wp-content/uploads/2023/06/whole_alphard_logo.png' },
      { rel: 'stylesheet', href: 'https://wanma.tw/assets/main.css' },
      { rel: 'javascript', href: 'https://wanma.tw/assets/main.js' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css' },
  
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  env: {
    basePath: 'https://wanma.tw/route/',
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
    hostname: 'https://wanma.tw', // 替换为你的网站域名
    gzip: true,
    routes: generateRoutes(),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://wanma.tw/route/_nuxt/',
  },
  render: {
    injectScripts: true,
  }
}
