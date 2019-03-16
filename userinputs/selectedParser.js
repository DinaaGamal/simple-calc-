const selectedParser = require('./');

if ((userSelectedParser = 'simple')) {
	return;
} else if ((userSelectedParser = 'flag')) {
} else {
	console.log(`you can specify the parser using: 
        --parser=parserName where parserName [flag | simple]`);
}
