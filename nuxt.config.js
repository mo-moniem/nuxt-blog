export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Home',
    titleTemplate: 'nuxt-blog | %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  loading:{
    failedColor:"#f44",
    color:"#44b4ff",
    height:"3px"
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~/plugins/hello.js",mode:""}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:"https://jsonplaceholder.typicode.com"
  },

  // Router Property
  router:{
    extendRoutes(routes,resolve){
      routes.push()
    }
  },
  // Server Middleware
  serverMiddleware:[
    {path:'blogs',handler:'~/server-middleware/logger.js'},
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
