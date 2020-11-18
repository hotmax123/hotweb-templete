const TimeStamp = new Date().getTime()

const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/',
  devServer: {
    hot: true,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/var.scss";'
      }
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      //   config.plugins.push(
      //     new CompressionWebpackPlugin({
      //       // 正在匹配需要压缩的文件后缀
      //       test: /\.(js|css|svg|woff|ttf|json|html)$/,
      //       // 大于10kb的会压缩
      //       threshold: 10240,
      //       deleteOriginalAssets: true
      //     })
      //   )
      // 开启分离js
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
    }
    return {
      resolve: {
        alias: {
          'hotweb-ui': 'hotweb-ui',
          assets: '@/assets'
        }
      },
      externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        'hotweb-ui': 'ELEMENT'
      },
      output: {
        // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
        filename: `js/[name].${TimeStamp}.js`,
        chunkFilename: `js/[name].${TimeStamp}.js`
      }
    }
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      //   config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    config.resolve.symlinks(true)
  },

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false
}
