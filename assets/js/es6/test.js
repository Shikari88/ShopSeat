'use strict';
const sentences = [
	{ subject: 'JS', verb: 'is', object: 'great'},
	{ subject: 'Eph', verb: 'are', object: 'large'},
];
function say ( {subject, verb, object}) {
	console.log(`${subject} ${verb} ${object}`);
}
for(let s of sentences) {
	say(s);
}