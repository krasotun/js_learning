import { jsTemplate } from './template.js';
import { compile, render } from 'pug';
const template = render(jsTemplate, {
	name: 'Krasotun'
})
console.log(template);