const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Tomato, Kiwi, Orange, etc, etc, etc';

for(const match of fruit.matchAll(regex)) {
	console.table(match)
}

