import webpack from 'webpack'

import production from '../webpack/production'

const compiler = webpack(production)

compiler.run((error, stats) => {
  if (error) {
    console.log(error)
  }
  console.log(stats.toString({
    colors: true
  }))
})
