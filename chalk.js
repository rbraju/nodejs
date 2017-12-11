
// Using Chalk library
const chalk = require('chalk');
const red = chalk.bold.redBright;
const orange = chalk.keyword('orange');

console.log(chalk.blue('Blue') + ' and ' + chalk.red('Red') + ' text');
console.log(red('Bright Red text'));
console.log(orange('Orange text'));
debugger;

console.log(chalk.redBright.bgWhite("Bright red text in White background."));
console.log(chalk.bgCyanBright.bold.redBright("Bright Cyan background with bold and bright red text"));
debugger;
