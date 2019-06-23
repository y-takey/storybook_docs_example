const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.[tj]sx?$/,
    use: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { injectParameters: true },
      },
    ],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  }, {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
    include: [path.resolve(__dirname, '../src')],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
