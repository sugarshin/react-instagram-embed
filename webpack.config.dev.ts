import { Configuration } from 'webpack-dev-server';
import baseConfig from './webpack.config';

const devServer: Configuration = {
  contentBase: './example',
  hot: true,
  publicPath: '/',
  host: '0.0.0.0',
  port: Number(process.env.PORT || '8080'),
  before(app) {
    app.get('/favicon.ico', (_, res) => res.status(200).send());
  },
};

const config = {
  ...baseConfig,
  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...baseConfig.resolve?.alias,
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer,
};

export default config;
