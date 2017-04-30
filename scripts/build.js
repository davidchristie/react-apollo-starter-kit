import chalk from 'chalk'
import webpack from 'webpack'

import production from '../webpack/production'

console.log(chalk.blue.bold('Building production client...'))
console.log('\n')

const compiler = webpack(production)

compiler.run((error, stats) => {
  if (error) {
    console.log(error)
  }
  console.log(stats.toString({
    colors: true
  }))
})
