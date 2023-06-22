/*  Regex  */
/*  Expresiones Regulares  */


const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut quam nisi. Morbi eget dictum orci, quis facilisis lorem. Fusce eu turpis augue. Suspendisse potenti. Aliquam erat volutpat. Proin nec sagittis elit, non sagittis justo. Vivamus bibendum orci dolor, vel ullamcorper neque egestas eget. Praesent sit amet tellus erat. Fusce eleifend dapibus urna id blandit. Mauris sit amet velit vitae dolor euismod accumsan. Curabitur imperdiet neque elementum aliquam ullamcorper."


// Hay dos manerasde crear una regex, una es mediante su objeto constructor y otra directa:

// Constructor
let regExp1 = new RegExp("Lorem", "g");
let regExp2 = new RegExp("lorem", "ig");


console.log(regExp1.test(texto));
console.log(regExp2.test(texto));
console.log(regExp1.exec(texto));
console.log(regExp2.exec(texto));


// Directa
let regex1 = /lorem/;
let regex2 = /lorem/ig;
let regex3 = /[0-9]/ig;
let regex4 = /lorem{1,3}/ig;


console.log(regex1.test(texto));
console.log(regex1.exec(texto));

console.log(regex2.test(texto));
console.log(regex2.exec(texto));

console.log(regex3.exec(texto));
console.log(regex3.exec(texto));

console.log(regex4.exec(texto));
console.log(regex4.exec(texto));

