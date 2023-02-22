// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a,b);


// Object destructuring

let user = {username: 'Miguel', age: 24}
let {username, age} = user;
console.log(username, age);

// spread operator

let person = {name: 'Oscar', age: 30}
let country = 'MX'

let data = {...person, country}
console.log(data)

// rest

function sum(num, ...values) {
	console.log(values)
	console.log(num + values[0])
	return num + values[0]
}
console.log(sum(1, 1, 2, 3))
