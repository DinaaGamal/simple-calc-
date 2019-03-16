#!/usr/bin/env node
const parsers = require('./parsers');
const operations = require('./operations');

isSelected = (input) => {
	const params = input.slice(2);
	if (process.argv[2] === '--help') {
		console.log(`you can specify the parser using:
	    --parser=parserName where parserName [flag | simple]`);
	} else if (params.find((e) => e.startsWith('--'))) {
		return 'flag';
	} else {
		return 'simple';
	}

	//////
	// if ((userSelectedParser = 'simple')) {
	// 	isSelected();
	// } else if ((userSelectedParser = 'flag')) {
	// 	isSelected();
};

const parser = parsers[isSelected(process.argv)];

const { operation, operands } = parser(process.argv);

const mathematicOperation = operations[operation];

const result = mathematicOperation(...operands);
console.log(result);
