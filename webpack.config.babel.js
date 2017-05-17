import webpack from 'webpack'

const entry = `${__dirname}/src/index.js`

module.exports = {
  entry: {
    'index.browser': entry,
    'index.browser.min': entry
  },
  output: {
    path: `${__dirname}/dist/src`,
    filename: '[name].js',
    library: 'nullPropagation',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/
    })
  ]
}
