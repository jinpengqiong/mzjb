const withLess = require('@zeit/next-less')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const UglifyJSPlugin = require('webpack/lib/optimize/UglifyJSPlugin')

module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/order': { page: '/order' },
      '/userList': { page: '/userList' },
      '/products': { page: '/products' },
      '/settings': { page: '/settings' },
    }
  },
  webpack: (config, dev) => {
    config.module.rules.push(
        {
          test: /\.(css|less)/,
          loader: `emit-file-loader`,
          options: {
            name: `dist/[path][name].[ext]`
          }
        }
        ,
        {
          test: /\.css$/,
          loader: `style-loader!css-loader`
        }
        ,
        {
          test: /\.less/,
          loader: `babel-loader!raw-loader!postcss-loader!less-loader`
        },
        {
          test: /\.es6$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
    );
    config.plugins.push(
        new DefinePlugin({
          'process.env.NODE_ENV': !dev ? "production" : "development",
        }),
        new UglifyJSPlugin({
          compress:{
            warnings:false,
            drop_console:false
          }
        })
    )
    return config;
  }
}
