module.exports = {
    pages: {
        default: {
            // page 的入口
            entry: 'src/pages/default/default.js',
            // 模板来源
            template: 'public/index.html',
            filename: 'default.html',
            title: "Whoops!",
            chunks: ['chunk-vendors', 'chunk-common', 'default']
        }
    },
    css: {
        extract: false,
    },
    configureWebpack: {
        optimization: {
            splitChunks: false // makes there only be 1 js file - leftover from earlier attempts but doesn't hurt
        }
    }
}