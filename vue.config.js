module.exports = {

    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'assets': '@/assets',
                'views': '@/views',
                'vendor': '@/assets/views/vendor',
            }
        }
    }
}
