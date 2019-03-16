module.exports = (argv) => {
	const params = argv.slice(2);
	const operationWithoutDash = params.find((e) => !e.startsWith('--'));
	// if (operationWithoutDash) throw new Error('you must specify operation');
	const operation = operationWithoutDash;

	const operands = params.filter((e) => !e.startsWith(operation)).map(Number);

	return {
		operation,
		operands
	};
};
debugger;
