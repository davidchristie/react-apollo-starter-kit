import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import development from '../webpack/development'

const compiler = webpack(development)

const server = new WebpackDevServer(compiler, {
  contentBase: 'build/',
  hot: true,
  publicPath: '/',
  stats: {
    colors: true
  }
})

server.use('*', (request, response) => {
  fs.readFile(path.resolve('public', 'index.html'), (error, file) => {
    if (error) {
      response.sendStatus(404)
    } else {
      response.send(file.toString())
    }
  })
})

export default server
