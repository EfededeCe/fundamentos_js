/*  Operadores  */

/*
 * 1 operadores aritméticos     (+, -, *, /, **, %, ++, --)
 * 2 operadores de asignación   (=, +=, -=, *=, /=, **=, %=)
 * 3 operadores de comparación  (==, ===, !=, !==, <, <=, >, >=)
 * 4 operadores lógicos         (AND (&&), OR (||))
 * 5 operador ternario (if)     (... ? ... : ...)
 * 6 Number(), isNaN()          ()
 * 7 Switch
 */

// 1- Tiene (  8  ) operadores aritméticos diferentes:
let r, a = 4, b = 3;

// + suma
r = a + b;
console.log(r);

// - resta
r = b - a;
console.log(r);

// * producto
r = b * a;
console.log(r);

// / división
r = a / b;
console.log(r);

// ** potenciación
r = a ** b;
console.log(r);

// % mod (resto de la divición)
r = a % b;
console.log(r);

// ++ incremento (+1) *** caso especial ***

console.log(a);
console.log(b);
console.log(r);
r = undefined
console.log(r);

console.log(a);
r = ++a     /* pre-incremento
"r" va a valer el resultado 1 + a y "a" se ve incrementado en 1
incrementa "a" en 1, despues se inserta ese valor en "r" (ambos valen lo mismo) */

console.log(a);
console.log(r);

console.log(a);
r = a++     // post-incremento
// "r" va a ser a (sin incrementarse), luego "a" se ve incrementada (tienen distinto valor)
console.log(a);
console.log(r);


// -- decremento (-1) *** caso especial ***


// Aca también hay pre y post decremento y funciona como en el incremento

r = undefined
console.log(r);

console.log(a);
r = --a
console.log(a);
console.log(r);

console.log(a);
r = a--
console.log(a);
console.log(r);





// 2- Operadores de asignación

let num1 = 1; // asignación

num1 += 3; // asignación compuesta
console.log(num1);

num1 -= 5; // asignación compuesta
console.log(num1);

num1 *= 5; // asignación compuesta
console.log(num1);

num1 **= 5; // asignación compuesta
console.log(num1);

num1 /= 5; // asignación compuesta
console.log(num1);

num1 %= 5; // asignación compuesta
console.log(num1);



// 3- Operadores de comparación


let log1 = 4, comp2 = 3, comp3 = "3", z;

// de igualdad
z = comp2 == comp3;  // compara valor, sin importar tipo
console.log(z);

// de igualdad estricto
z = comp2 === comp3;  // compara valor y tipo
console.log(z);

// de diferencia
z = comp2 != comp3;  // compara valor, sin importar tipo
console.log(z);

// de diferencia estricto
z = comp2 !== comp3;  // compara valor y tipo
console.log(z);


// menor que
z = comp2 < comp3;  // compara valor y tipo
console.log(z);

// menor o igual que
z = comp2 <= comp3;  // compara valor y tipo
console.log(z);

// mayor que
z = comp2 > comp3;  // compara valor y tipo
console.log(z);

// mayor o igual que
z = comp2 >= comp3;  // compara valor y tipo
console.log(z);



// 4- Operadoores lógicos

// && ( AND )
let logMenor = 0, logMayor = 10, logNumero = 11 ; 
if (logNumero >= logMenor && logNumero <= logMayor) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango");
};

// || ( or )
if (logNumero >= logMenor || logNumero <= logMayor) {
    console.log("Dentro del rango... siempre");
} else {
    console.log("Fuera del rango");
};


// 5 Operador ternario ( if )


// condición ? expressión_1 : expresión_2
// si la condición es verdadera, ejecuta expressión_1, si no, ejecuta expresión_2

let pruebaTernario = 3 > 2, parImpar = 3243232;


pruebaTernario ? console.log("Verdadero") : console.log("Falso");

parImpar % 2 ? console.log("Impar") : console.log("Par");

resultadoTernario = parImpar % 2 == 0 ? "Número par" : "Número impar"

resultadoTernario


// 6 convertir a Number(), verificar isNaN() y Number.isNaN()
/** Number() convierte una cadena a número, si esa cadena tiene carácteres que no son Number
    tras pasarla por la func Number(str), fuerza a ser número y el resultado es la literal NaN
    pero el type cambia a Number ( typeof NaN = Number ) */

console.log(typeof NaN);

console.log(isNaN("NaN"));
console.log(Number.isNaN("NaN"));

console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));


let edadStr = "23";
let edadNumber = Number(edadStr);

edadStr
console.log(typeof edadStr);
edadNumber
console.log(typeof edadNumber);
console.log(typeof NaN);


if (isNaN(edadNumber)){
    console.log("el valor ingresado no es un número válido");
} else {
    if(edadNumber < 18) {
        console.log("no puede votar");
    } else {
        console.log("puede votar");
    }
};

if (isNaN(edadStr)){
    console.log(typeof edadStr);
    console.log("el valor ingresado no es un número válido");
} else { // ternario dentro del if
    edadNumber < 18 ? console.log("no puede votar") : console.log("si puede votar")
}

let resultadoTernario2 = (edadNumber < 18) ? "no puede votar" : "si puede votar";

console.log(resultadoTernario2);




// 7 Switch (es comparación estricta ===)

let sw1 = 1;

switch (sw1) {
    case 1: case 2: case 3:
        console.log("Verano");
        break;
    case 4: case 5: case 6:
        console.log("Otoño");
        break;
    case 7: case 8: case 9:
        console.log("Invierno");
        break;
    case 10: case 11: case 12:
        console.log("Primavera");
        break;
    default:
        console.log("Ni idea en que mes estamos...");
}
