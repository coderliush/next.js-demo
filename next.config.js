const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
//         config.resolve.alias['@components'] = "components"
//         console.log('***', config)
//         return config
//     }
// }


module.exports = withLess(withCSS())
