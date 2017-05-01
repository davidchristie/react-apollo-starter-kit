import chalk from 'chalk'

import server from '../server'

process.env.NODE_ENV = 'production'

console.log(chalk.blue.bold('Starting development server...'))
console.log('\n')

const PORT = 3000

server.listen(PORT, () => {
  console.log(chalk.bold(`http://localhost:${PORT}`))
  console.log('\n')
})
