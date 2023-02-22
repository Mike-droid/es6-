const string = 'Hello'

//* regresa un string de X cantidad de elementos, rellenando el espacio inicial con el string indicado
console.log(string.padStart(7, 'hi')) // hiHello
console.log(string.padStart(15, 'wow'))

//* lo mismo pero los inserta al final
console.log(string.padEnd(22, 'TECH-'))
