import path from 'path'

export default {
  entry: path.resolve('client'),
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
    filename: 'app.js',
    path: path.resolve('build'),
    publicPath: '/'
  }
}
