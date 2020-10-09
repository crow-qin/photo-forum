module.exports = {
  devServer: {
    // 热更新
    hotOnly: true,  
    proxy: {

      '/story': {
        target: "https://daily.zhihu.com",
        changeOrigin: true
      },
      '/api': {
        // http://zhihuapi.herokuapp.com/api/4/news/
        target: "http://zhihuapi.herokuapp.com",
        changeOrigin: true,
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // 换算的基数(设计图750的根字体为32)
            rootValue: 32,
            // 要忽略的选择器并保留为px。
            selectorBlackList: [],
            //可以从px更改为rem的属性。
            propList: ['*'],
            // 设置要替换的最小像素值。
            minPixelValue: 2
          })
        ]
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
