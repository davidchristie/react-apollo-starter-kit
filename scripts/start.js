import chalk from 'chalk'

import server from '../server'

console.log(chalk.blue.bold('Starting development server...'))
console.log('\n')

const PORT = 3000

server.listen(PORT, () => {
  console.log(chalk.bold(`http://localhost:${PORT}`))
  console.log('\n')
})
