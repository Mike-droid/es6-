function solution(json1 = {name: "Mr. Michi", food: "Pescado"}, json2 = {age: 12, color: "Blanco"}) {
	let json3 = {...json1, ...json2}
	return json3;
}

console.log(solution({name: 'Bigotes', food: 'Pollito'}));
