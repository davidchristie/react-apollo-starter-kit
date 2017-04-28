const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const compiler = webpack({
  entry: path.resolve('client'),
  module: {
    loaders: [
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
})

const app = new WebpackDevServer(compiler, {
  contentBase: 'build/',
  hot: true,
  publicPath: '/',
  stats: {
    colors: true
  }
})

app.use('*', (req, res) => {
  fs.readFile(path.resolve('public', 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(file.toString())
    }
  })
})

export default app
