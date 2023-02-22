const myFunction = () => {
        return new Promise((resolve, reject) => {
		true === true ? resolve('resolved!') : reject('oh no :(')
        })
}

myFunction()
.then(response => console.log(response))
.catch(err => console.error(err))
.finally(()=> console.log('Finally'))

