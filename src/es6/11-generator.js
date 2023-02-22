function* iterate(array) {
	for(let value of array) {
		yield value;
	}
}

const it = iterate(['mike', 'david', 'ximena', 'oscar']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //undefined
