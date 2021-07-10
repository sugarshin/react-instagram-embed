import baseConfig from './webpack.config';

const devServer = {
  contentBase: './example',
  hot: true,
  publicPath: '/',
  host: '0.0.0.0',
  port: Number(process.env.PORT || '8080'),
};

const config = {
  ...baseConfig,
  devServer,
}

export default config;
