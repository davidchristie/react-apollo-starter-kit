import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
  devtool: 'source-map',
  entry: {
    client: path.resolve('client')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve('build'),
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        copyUnmodified: true,
        from: 'public'
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}
