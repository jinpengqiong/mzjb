// const withLess = require('@zeit/next-less')
// const compose = require('next-compose')
// const DefinePlugin = require('webpack/lib/DefinePlugin')
// const UglifyJSPlugin = require('webpack/lib/optimize/UglifyJSPlugin')
// const lessConfig = {
//         cssModules: true,
//         cssLoaderOptions: {
//           localIdentName: '[local]___[hash:base64:5]'
//         }
//       }


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
        }
    );
    return config;
  }
}

// module.exports = compose([
//   [withLess, lessConfig],
//   {
//     exportPathMap: () => {
//     return {
//       '/': { page: '/' },
//       '/login': { page: '/login' },
//       '/order': { page: '/order' },
//       '/userList': { page: '/userList' },
//       '/products': { page: '/products' },
//       '/settings': { page: '/settings' },
//       }
//     },
//     webpack: (config, dev) => {
//       config.module.rules.push(
//           {
//             test: /\.(css|less)/,
//             loader: `emit-file-loader`,
//             options: {
//               name: `dist/[path][name].[ext]`
//             }
//           }
//           ,
//           {
//             test: /\.css$/,
//             loader: `style-loader!css-loader`
//           }
//           ,
//           {
//             test: /\.less/,
//             loader: `babel-loader!raw-loader!postcss-loader!less-loader`
//           }
//       );
//       return config;
//     }
//   }
// ])
