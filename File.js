const argv = require('yargs').array(["add", "multiply", "subtract", "mod", "divide"]).argv;
const operations = require('./Operations/Index');
const validator = require('./validator');


if (argv.add) {
	argv.add.map(el => validator(el))
	const add = operations.add(...argv.add);
	debugger;
}
if (argv.multiply) {
	argv.multiply.map(el => validator(el))
	const multiply = operations.multiply(...argv.multiply);
	debugger;
}
if (argv.subtract) {
	argv.subtract.map(el => validator(el))
	const subtract = operations.subtract(...argv.subtract);
	debugger;
}
if (argv.divide) {
	argv.divide.map(el => validator(el));
	const divide = operations.divide(...argv.divide);
	debugger;
}
if (argv.mod) {
	argv.mod.map(el => validator(el));
	const mod = operations.mod(...argv.mod);
	debugger;
}







// const validator=require('./validator');

//const operations=require('./Operations/Index');
// const params=process.argv.slice(2);

// const currentOperationIndex=params.findIndex((element)=>element.startsWith('--'));

// const [currentOperation]=params.splice(currentOperationIndex,1).map(e=>e.substring(2));

// console.log(currentOperation);

// const numbers=params.map(validator)

// let operation =operations[currentOperation];

// console.log(operation(...numbers));