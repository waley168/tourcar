import locations from './locations';

const generateLocationPairs = () => {
  const highWeightLocations = locations.filter(location => location.weight >= 7);
  const lowWeightLocations = locations.filter(location => location.weight < 7);

  const highWeightPairs = [];
  highWeightLocations.forEach(fromLocation => {
    highWeightLocations
      .filter(toLocation => fromLocation.id !== toLocation.id)
      .forEach(toLocation => {
        highWeightPairs.push([fromLocation, toLocation]);
      });
  });

  const randomPairs = [];
  lowWeightLocations.forEach(fromLocation => {
    const randomToLocations = lowWeightLocations
      .filter(location => location.id !== fromLocation.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    randomToLocations.forEach(toLocation => {
      randomPairs.push([fromLocation, toLocation]);
    });
  });

  return [...highWeightPairs, ...randomPairs];
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
    title: 'tourcar',
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
        src: 'https://taiwantourcar.com/route/js/custom.js',
        async: true, // 如果需要异步加载
        defer: true, // 如果需要延迟加载
      },
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
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.taiwantourcar.com/wp-content/uploads/2019/03/logo-3.png' },
      { rel: 'stylesheet', href: 'https://taiwantourcar.com/route/styles/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://taiwantourcar.com/route/styles/main_styles.css' },
      { rel: 'stylesheet', href: 'https://taiwantourcar.com/route/styles/responsive.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css' },
      { rel: 'preload', as: 'script', src: 'https://taiwantourcar.com/route/js/custom.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  env: {
    basePath: 'https://www.taiwantourcar.com/route/',
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
  },
  render: {
    injectScripts: false,
  }
}
