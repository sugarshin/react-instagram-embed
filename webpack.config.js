const path = require('path')
const webpack = require('webpack')
const Stylish = require('webpack-stylish')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('./package.json')

const { PORT = 8080, NODE_ENV = 'development' } = process.env
const prod = NODE_ENV === 'production'

const htmlWebpackPluginConfig = {
  title: `${pkg.name} | ${pkg.description}`,
  minify: { collapseWhitespace: true },
  favicon: 'build/favicon.ico',
}

const entry = [
  '@babel/polyfill',
  './example/index.js',
]

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new HtmlWebpackPlugin(prod ? htmlWebpackPluginConfig : undefined),
  new Stylish(),
]

if (prod) {
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        output: { ascii_only: true, beautify: false, indent_level: 2 },
      },
    })
  )
} else {
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { plugins: ['react-hot-loader/babel'] }, // TODO: if write to .babelrc then become test fails
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { minimize: true } }],
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
