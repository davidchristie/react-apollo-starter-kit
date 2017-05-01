import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import development from '../webpack/development'

const compiler = webpack(development)

const server = new WebpackDevServer(compiler, {
  contentBase: 'build/',
  historyApiFallback: true,
  hot: true,
  publicPath: '/',
  stats: {
    colors: true
  }
})

export default server
