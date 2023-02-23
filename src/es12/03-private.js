class User {

        constructor(userName, userAge) {
                this.userName = userName;
                this.userAge = userAge;
        }

	#greeting() {
                return `Hello ${this.userName}!`;
        }

        get #userAge() {
                return this.userAge;
        }

        set #userAge(age) {
                this.userAge = age;
        }
}

// no se pueden usar fuera de la clase porque ahora son privadas por el '#'

const pepito = new User('Pepito', 20);
console.log(pepito.#greeting());
console.log(pepito.#userAge);
console.log(pepito.#userAge = 16);

const mike = new User('Mike', 24);
console.log(mike.#greeting());
console.log(mike.#userAge);
console.log(mike.#userAge = 33);

