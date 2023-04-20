import locations from './locations';

export default {
  router: {
    extendRoutes(routes, resolve) {
      for (const fromLocation of locations) {
        for (const toLocation of locations) {
          // 檢查出發地和目的地是否不同
          if (fromLocation.id !== toLocation.id) {
            routes.push({
              name: `${fromLocation.name}-to-${toLocation.name}`,
              path: `/${fromLocation.name}/${toLocation.name}`,
              component: resolve(__dirname, 'pages/_from/_to.vue'),
            });
          }
        }
      }
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tourcar',
    htmlAttrs: {
      lang: 'en'
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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.taiwantourcar.com/wp-content/uploads/2019/03/logo-3.png' },
      { rel: 'stylesheet', href: 'https://taiwantourcar.com/route/styles/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://taiwantourcar.com/route/styles/main_styles.css' },
      { rel: 'stylesheet', href: 'https://taiwantourcar.com/route/styles/responsive.css' },
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
  modules: [
    // https://go.nuxtjs.dev/buefy
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
