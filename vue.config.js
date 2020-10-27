// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// gzip压缩
const CompressionPlugin = require('compression-webpack-plugin')

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
 console.log(process.env.NODE_ENV)
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
  },
  productionSourceMap : false,

  configureWebpack: config=> {

    if(isProduction) {
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          ugifyOptions: {
            // 生产环境自动删除console
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
              pure_func: ['console.log']
            }
          },
        sourceMap: false,
        parallel: true
        })
      )
    }

    // gzip压缩
    const productionGzipExtensions = ['html', 'js', 'css']
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path],gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.('+ productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        // 大小大于该值的资源会被处理
        minRatio: 0.8,
        // 压缩率小于该值得资源会被处理
        deleteOriginalAssets: false,
        // 删除原文件 
      })
    )

    // 公共代码抽离
    // config.optimization = {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         chunks: 'all',
    //         test: /node_module/,
    //         name: 'vendor',
    //         minChunks: 1,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 100
    //       }
    //     },
    //     runtimeChunk: {
    //       name: 'manifest'
    //     }
    //   }
    // }
  }
}
