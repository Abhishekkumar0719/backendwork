
const chalk = require('chalk');
const validation = require("validator");
// console.log(chalk.blue("Hello Eveyone"))

// const error = chalk.bold.red;
// console.log(error("Abhishek"));
// const warning = chalk.keyword('orange');
// console.log(warning("Kumar"))
// console.log(chalk.green.underline.inverse("True"));

const res= validation.isEmail("tvf@hhh.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))
