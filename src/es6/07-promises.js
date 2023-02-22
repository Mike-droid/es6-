const myFunction = () => {
	return new Promise((resolve, reject) => {
		if(false) {
			resolve('resolved!')
		} else {
			reject('reject! :(')
		}
	})
}

myFunction()
.then(response => console.log(response))
.catch(err => console.error(err))

