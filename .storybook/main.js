const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const SRC = `${ROOT}/src`;

module.exports = {
    stories: ['../stories/**/*.story.*'],
    addons: [
        "@storybook/addon-essentials",
        '@storybook/addon-storysource',
        '@storybook/addon-docs'
    ],
    webpackFinal: async (config) => {

        config.module.rules.push(
            {
                test: /\.tsx?$/,
                loader: require.resolve('babel-loader'),
            }
        );

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules.push(SRC, 'node_modules');

        return config;
    },
};
