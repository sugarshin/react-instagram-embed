import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DotenvWebpack from 'dotenv-webpack';
import pkgjson from './package.json';

const { NODE_ENV = 'development' } = process.env;
const prod = NODE_ENV === 'production';

const htmlWebpackPluginConfig = {
  title: `${pkgjson.name} | ${pkgjson.description}`,
  minify: { collapseWhitespace: true },
  favicon: 'build/favicon.ico',
};

const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin(prod ? htmlWebpackPluginConfig : undefined)];

if (prod) {
  plugins.push(new webpack.EnvironmentPlugin(['INSTAGRAM_ACCESS_TOKEN']));
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin(), new DotenvWebpack());
}

function mode(): Configuration['mode'] {
  if (NODE_ENV === 'development' || NODE_ENV === 'production') {
    return NODE_ENV;
  }
  return 'none';
}

const config: Configuration = {
  mode: mode(),
  plugins,
  entry: './example/index.tsx',
  cache: true,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
    alias: {
      [pkgjson.name]: path.resolve(__dirname, 'src/index.tsx'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader' }],
      },
    ],
  },
  ...(prod
    ? {
        optimization: {
          splitChunks: {
            maxSize: 244000,
            cacheGroups: {
              vendor: {
                test: /node_modules/,
                name: 'vendor',
                chunks: 'initial',
                enforce: true,
              },
            },
          },
        },
      }
    : {}),
};

export default config;
