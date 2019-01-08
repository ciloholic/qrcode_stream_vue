const pkg = require('./package')
const ghPagesOnly =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/qrcode_stream_vue/'
        }
      }
    : {}

module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/vue-qrcode-reader', ssr: false }
  ],
  modules: ['@nuxtjs/axios', 'nuxt-basic-auth-module'],
  basic: {
    name: 'admin',
    pass: 'asdf1234'
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...ghPagesOnly
}
