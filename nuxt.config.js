module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '//code.jquery.com/jquery-3.1.1.slim.min.js' },
      { src: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Raleway:400,400i,600,700' }
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
    base: '/goodtables-ui/'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
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
