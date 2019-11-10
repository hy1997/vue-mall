
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('vendor',resolve('src/assets/vendor'))
            .set('scss',resolve('src/assets/scss'))
            .set('js',resolve('src/assets/js'))
            .set('img',resolve('src/assets/image'))
            .set('fonts',resolve('src/assets/fonts'))
    }
}
