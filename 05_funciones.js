/*  Funciones  */

/*
 * 1 Declaración y Ejecución. Argumentos. Hoisting
 * 2 Return
 * 3 Funciones de tipo Expresión o Anónimas
 * 4 Self Invoking  ()();
 * 5 Función como objeto
 * 6 Función flecha (Arrow Function)
 * 7 Parámetros y Argumentos    Valores por defecto
 * 8 Pase por Valor y Referencia    Tipos primitivos
 * 9 Parámetros REST
 * 
*/


// 1 Declaración

// Hoisting  (significa que se mueve la declaración de función al principio automaticamente)
// La función se ejecuta igualmente y sucede antes que cualquier otra ejecución
miFuncion(22,5)


function miFuncion(a, b){
    console.log("La suma de " + a + " con " + b + " es: " + (a + b));
} //  no es necesario que lleve ; porque no es una línea ejecutable, sólo se declara

// Ejecución. Se llama a la función con los argumentos que van a tomar las variables internas
miFuncion(3,4);
// Las funciones siempre devuelven algo, aunque sea undefined
console.log(miFuncion(3,4));
console.log(typeof miFuncion);


// 2 Return     El return está implísito siempre, por eso devuelve undefind si la func es vacía

function suma(a,b){
    return "La suma es: " + (a + b);
}

const sumados = suma(5,12);

console.log(sumados);



// 3 Funciones de tipo Expresión o Anónimas: Pasamos auna variable la referencia a la función
const func = function (a,b){
    return a + b;
};  // Después de cerrar las laves si lleva ; este caso porque es una línea ejecutable


console.log(typeof func);
console.log(typeof resultado);

resultado = func(2,6);
console.log(resultado);

//  Tanto este tipo de funciones como las flecha no tienen las características del hoisting,
//  si se quiere ejecutar antes de haberla declarado va a lanzar error



// 4 Self Invoking (function) ();

/*  Las funciones que se llaman a sí mismas (self invoking tienen la particularidad de que
    al no estar guardadas en una variable ni declaradas, no se pueden ejecutar en otro 
    momento que en el que se las crea). Tampoco son comunes de usar */

(function (a, b){ console.log("Hola mundo " + (a + b)); })(2,1);



// 5 Función como objeto
/*  Las funciones en js se pueden tomar como objetos ya que tambien tienen sus propiedades
    y métodos */

// Con el método .toString() podemos ver cómo está escrita la función internamente
const verFuncion = miFuncion.toString();
console.log(verFuncion);


// Tambien podemos usar la propiedad arguments para saber cuántos argumentos lleva la función
function otraFuncion(a,b,c) {
    console.log(arguments.length);
    return  "la cantidad de argumentos es de: " + arguments.length + " Suma=> " + a + " sumado a " + b + " sumado a " + c + " es: " + (a + b + c);
}
console.log(otraFuncion(10,8,1.3));


// O para utilizar una cantidad indeterminada de argumentos, aunque en el punto 9 (Parámetros REST) vemos una forma
// más moderna y que admite su utilización en las arrow functions
function argumentFunction (a,b,c,d) {
    let sumaParametrosTotales = a;
    console.log(typeof arguments);
    for (const key in arguments) {          // Utilizamos un for in ya que arguments es un objeto
        if (Object.hasOwnProperty.call(arguments, key)) {
            const e = arguments[key];
            console.log(e);
            sumaParametrosTotales += e; 
        }
    }
    console.log(arguments.length);
    return sumaParametrosTotales
};

console.log(argumentFunction(54,468, 10, 10, 100));


// 6 Función flecha (Arrow Function)

// La función flecha es como una función anónima, en cuanto a la sintaxis, difiere en que
//  no lleva la palabra "function", y si es de una línea no necesita llaves ni "return". Además si tiene un 
// solo parámetro no necesita paréntesis.
const sumaConFuncionFlecha = (a, b) => a + b;
console.log(sumaConFuncionFlecha(5,5));

const sumarFlecha = (a,b,c) => {
    let sumaAB = a + b;
    console.log(sumaAB);
    return a + b + c;
}
console.log(sumarFlecha(1,65,4));

const nombreFlecha = nombre => `Hola ${nombre}`;
console.log(nombreFlecha("Daria"));


// 7 Parámetros y Argumentos
// Los parámetros son las "variables" que creamos en la declaración de la función, los
//  argumentos son los valores que les pasamos a esos parámetros

// Podemos ponerle valores por defecto a los parametros, aunque si luego le pasamos un
//  argumento a ese parámetro, reemplazará el valor por defecto
const paramArgum = function (a, b, c = 5, d = 1.45) {// a y b son los parámetros de la función
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    return a + b;
};

paramArgum(4,7,6)
console.log(paramArgum());
console.log(paramArgum(4));
console.log(paramArgum(4,2));   // 4 y 2 son los argumentos que pasamos a la función
console.log(paramArgum(4,2,7));


// 8 Pase por Valor y Referencia

// Tipo de dato primitivo: que no tiene métodos ni propiedades (ej: number, boolean)
let x = 10;

// Paso por Valor
console.log(x);
cambiarValor(x);
console.log(x);
// console.log(a);  a existe solo dentro de la función

/* No se puede cambiar el valor ya que la variable es pasada por valor
 *  es decir que crea una copia en la variable interna de la función (a)
*/

function cambiarValor (a) {
    a = 20;
}


// Paso por Referencia

// Los objetos no son valores primitivos ya que tienen sus métodos y propiedades
const persona = {
    nombre: "Juan",
    apellido: "Perez"
};

// CambiarValorObjeto puede verse como un "método" del objeto persona. La función recibe como
//  argumento el objeto que se desea cambiar, pero lo que recibe es la dirección en memoria,
//  la referencia de donde está ese objeto, por eso puede acceder y cambiar sus valores
function cambiarValorObjeto(objeto){
    objeto.nombre = "Carlos";
    objeto.apellido = "Baldosa"
}

console.log(persona);

cambiarValorObjeto(persona);    // Ejecuto el método para cambiar valores

console.log(persona);   // Cambia valores



// 9 Parámetros REST

const paramRest = (a, b, ...c) => {
    let suma = a + b;
    c.forEach( (e) => {
        suma += e
    })
    return suma;
};

console.log(paramRest(5,6,54,100));

