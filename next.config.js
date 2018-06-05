
module.exports = {
    exportPathMap: () => {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' },
            '/order': { page: '/order' },
            '/userList': { page: '/userList' },
            '/resources': { page: '/resources' },
            '/products': { page: '/products' },
            '/settings': { page: '/settings' },
        }
    },
    webpack: (config, { dev }) => {
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
                loader: `babel-loader!raw-loader`
            }
            ,
            {
                test: /\.less/,
                loader: `babel-loader!raw-loader!postcss-loader!less-loader`
            },
        );
        return config;
    },
};