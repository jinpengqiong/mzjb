module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/ad': { page: '/ad' },
      '/login': { page: '/login' },
      '/order': { page: '/order' },
      '/shops': { page: '/shops' },
      '/userList': { page: '/userList' },
      '/resources': { page: '/resources' },
      '/products': { page: '/products', query: { id: 'shopId' } },
      '/vouchers': { page: '/vouchers', query: { id: 'shopId' } },
    }
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        use: ['babel-loader', 'raw-loader', 'less-loader']
      }
    );
    return config;
  },
};

