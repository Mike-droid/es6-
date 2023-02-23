const users = {
	mike: {
		country: 'MX'
	},
	xi: {
		country: 'US'
	}
}

console.log(users.mike.country); //MX
console.log(users.mike.age); //undefined

console.log(users.adrian?.country); //undefined

