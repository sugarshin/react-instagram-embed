const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const pkg = require('./package.json');

const { PORT = 8080, NODE_ENV = 'development' } = process.env;
const prod = NODE_ENV === 'production';

const htmlWebpackPluginConfig = {
  title: `${pkg.name} | ${pkg.description}`,
  minify: { collapseWhitespace: true },
  favicon: 'build/favicon.ico',
};

const entry = [
  '@babel/polyfill',
  './example/index.tsx',
];

const plugins = [
  new HtmlWebpackPlugin(prod ? htmlWebpackPluginConfig : undefined),
];

if (prod) {
  plugins.push(
    new webpack.EnvironmentPlugin(['INSTAGRAM_ACCESS_TOKEN']),
  );
} else {
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DotenvWebpack()
  );
}

module.exports = {
  mode: NODE_ENV,
  plugins,
  entry,
  cache: true,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
    alias: {
      [pkg.name]: path.resolve(__dirname, 'src/index.tsx'),
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
            options: { plugins: ['react-hot-loader/babel'] }, // TODO: if write to .babelrc then become test fails
          },
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: 'tsconfig.demo.json' },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader' }],
      },
    ],
  },
  ...(prod ? {
    optimization: {
      minimizer: [new UglifyJsPlugin()],
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
  } : {}),
  devServer: {
    contentBase: './example',
    hot: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: PORT,
  },
};
