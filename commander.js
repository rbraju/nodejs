
var program = require('commander');

program.version('0.1.0')
        .option('-c, --cheese', 'Add cheese')
        .option('-p, --peppers', 'Add peppers')
        .option('-j, --jalapeno', 'Add jalapeno')
        .parse(process.argv)

console.log('Your order includes ')
if (program.peppers)
    console.log(' peppers')
if (program.cheese)
    console.log(' cheese')
if (program.jalapeno)
    console.log(' jalapeno')
