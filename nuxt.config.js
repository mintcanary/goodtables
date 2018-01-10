const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Goodtables',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    //'~assets/css/main.css',
    // SCSS file in the project
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],

  router: {
    base: '/goodtables/'
  },

  plugins: [
    { src: '~/plugins/jquery.finderSelect.js', ssr: false },
    { src: '~/plugins/parts-selector', ssr: false },
    { src: '~/plugins/vuebar' }
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1595BC' },
  /*
  ** Build configuration
  */
  build: {

    vendor: ['jquery', 'bootstrap-sass'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],

    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
