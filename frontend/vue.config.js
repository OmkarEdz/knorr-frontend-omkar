// vue.config.js
module.exports = {
  runtimeCompiler: true,
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.yahoo.com',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // Change build paths to make them Maven compatible
  // see https://cli.vuejs.org/config/
  outputDir: 'public',
  assetsDir: 'static',
  configureWebpack: {
    output: {
      filename: "static/js/[name].js",
      chunkFilename: "static/js/chunk-vendors.js"
    }
  },
}
