// webpack.config.js
module.exports = {
    // ...your other config here
    resolve: {
        fallback: {
            https: require.resolve("https-browserify"),
            http: require.resolve("stream-http"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            querystring: require.resolve("querystring-es3"),
            url: require.resolve("url/"),
            path: require.resolve("path-browserify"),
            fs: false // you can set it to false if you're sure you don't need it
        }
    }
}
