const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('../src/config')

const compiler = webpack({
  entry: path.join(process.cwd(), 'src', 'js', 'app.js'),
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
    path: path.join(process.cwd(), 'build'),
    publicPath: '/'
  }
})

const app = new WebpackDevServer(compiler, {
  contentBase: 'src/',
  hot: true,
  proxy: {
    '/graphql': config.scapholdUrl
  },
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
