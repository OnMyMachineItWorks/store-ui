const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devtool: 'source-map',
  devServer: {
    proxy: 'https://localhost:8080/',
    }
})
