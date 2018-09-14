
module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/order': { page: '/order' },
      '/userList': { page: '/userList' },
      '/products': { page: '/products' },
      '/settings': { page: '/settings' },
      '/suppliers': { page: '/suppliers' },
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
          test: /\.(png|jpg)$/,
          use: ['file-loader']
        }
        ,
        {
          test: /\.less/,
          loader: `babel-loader!raw-loader!postcss-loader!less-loader`
        }
    );
    return config;
  }
}

