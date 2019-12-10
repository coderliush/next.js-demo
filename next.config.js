// const withLess = require('@zeit/next-less')  // 如果配置 css module，需要修改 webpack 配置对 antd 的影响 
const antdLessLoader = require("next-antd-aza-less")  // 同时配置 antd 和 css 模块化
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

// module.exports = withLess({
//   // cssModules: true,
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//   },
//   webpack(config) {
//     console.log("config", config)
//   }
// })

module.exports = withCss(withSass(antdLessLoader({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    // modifyVars: modifyVars
  }
})))
