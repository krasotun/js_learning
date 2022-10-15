const pug = require('pug');
const path = require('path');
const file = path.join(__dirname, 'template.pug')
const template = pug.renderFile(file, {
	name: 'Krasotun'
})

// const template = fn();

console.log(template);