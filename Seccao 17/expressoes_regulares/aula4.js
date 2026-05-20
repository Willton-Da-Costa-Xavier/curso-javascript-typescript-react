const { html } = require('./base');

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g));
console.log(html.match(/<.+?>.+?<\/.+?>/g));
