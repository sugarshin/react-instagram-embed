const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('./package.json')

const PORT = process.env.PORT || 8080
const docs = process.env.NODE_ENV === 'production'

const htmlWebpackPluginConfig = {
  title: `${pkg.name} | ${pkg.description}`,
  minify: { collapseWhitespace: true },
  favicon: 'build/favicon.ico',
}

const entry = [
  'babel-polyfill',
  './example/index.js',
]

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new HtmlWebpackPlugin(docs ? htmlWebpackPluginConfig : undefined),
]

if (docs) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, screw_ie8: true } })
  )
} else {
  entry.unshift(
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = {
  plugins,
  entry,
  cache: true,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?minimize'],
      },
    ],
  },
  devServer: {
    contentBase: './example',
    hot: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: PORT,
  },
}
