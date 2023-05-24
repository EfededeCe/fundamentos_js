/*  Tipos de datos  */
/*
 * 1) String
 * 2) Number
 * 3) Boolean
 * 4) Undefined
 * 5) Function
 * 6) Object
 * 7) Symbol
 */

// String

const nombre = "nombre";

        // Tambien se puede asignar "" => [empty string], valor de tipo String igualmente
        const bacia = "";
        console.log(bacia); 
        console.log(typeof bacia); 

// Char (parece que no existe, solo String)

const character = "d";
    console.log(typeof character);

// Number

const numero = 231;

// Symbol

const simbolo = Symbol("Mi simbolo")

// Boolean

const verdadero = false;

// Vector o Array (parece que no existe, solo Object)

const vector = [ "esto", "es", "un", "vector", true, 123, {si: "si"} ]
let arr = new Array;
    arr = [1, 2];

    // la funcion está definida después, pero puedo llamarla antes (parece...)
    console.log(funcionTypeOf(arr));

// Objeto

const objeto = {
    clave: "valor",
    otraClave: "otro valor",
    claveNumerica: 123,
    claveVector: ["casa", 266, "auto", false, null, "etc" ]
}

// Function (al parecer es un tipo de dato también)

function funcionTypeOf ( varOconst ) {
    return `La variable seleccionada es de tipo: ${typeof varOconst}`;
};

// Clase (tambien es una function)

class Persona {
    constructor(nombre, apelido){
        this.nombre = "Juan Carlos";
        this.apellido= "Pelotudo";
    }
};

// Undefined 

let indefinido;

// Null (object)

var nulo = null;

/**  parece ser un objeto  **/
const queTipoEs = typeof nulo; 
console.log(queTipoEs);
/*****/

console.log(funcionTypeOf(Persona));

console.log(funcionTypeOf(nulo));



/*
 * En conclución parece que sólo hay 7 tipos de datos en JavaScipt:
 
 * 1) String
 * 2) Number
 * 3) Boolean
 * 4) Undefine
 * 5) Function
 * 6) Object
 * 7) Symbol
 
 */


// Concatenación de cadenas:

/*
 * En JavaScript no se definen las variables con un tipo de dato, por esto es que al leer la variable
 * tiene que primero interpretarla para saber que tipo de dato es. Esto lo hace empezando a leer
 * de izquierda a derecha, si el primer dato es un string, todo lo que se concatene después va a ser
 * tratado como String. Si el primer dato es un Number, se toma como tal aunque si luego hay un String
 * todo pasa a ser string. 
 */

let otroNombre = "Lana";
let otroApellido = "Lanita";

let nombreCompleto = otroNombre + otroApellido;
console.log(nombreCompleto);

nombreCompleto = otroNombre + " " + otroApellido;
console.log(nombreCompleto);

nombreCompleto = otroNombre , " otra cosa en el medio ", otroApellido;  // concatenar con "," no sirve
console.log(nombreCompleto);

nombreCompleto = otroNombre + " " + 654;
console.log(nombreCompleto);

nombreCompleto = otroNombre + " " + 6 + 5 + 4;  // Lee el dato de derecha a izquierda, por eso interpreta todo String
console.log(nombreCompleto);

nombreCompleto = otroNombre + " " + (6 + 5 + 4);  // Los parentesis dan prioridad a operar, luego al leer si es String
console.log(nombreCompleto);

nombreCompleto = 6 + 5 + 4 + " " + otroNombre; // Al estar primero Number evalua como tal y al encontrar String, lo convierte
console.log(nombreCompleto);



/*
    Tipos de variables:     var, let y const
 * Pueden inicializar vacias (exepto const) y luego asignarles valor, juntas o separadas.
 * JS es caseSensitive y no pueden comenzar con nrs
 */


let num1, num2, num3;
console.log(num1, num2, num3);

num1 = 1, num2 = 2, num3 = 3;
console.log(num1, num2, num3);

let _variable;
let $variable;
// let 4var => no lo acepta







