require('dotenv-safe').config()
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DB_URL': JSON.stringify(process.env.DB_URL),
      'process.env.DB_USER': JSON.stringify(process.env.DB_USER),
      'process.env.DB_PASS': JSON.stringify(process.env.DB_PASS)
    })
  ]
}
