/* Array */

/*
 * 1 Declaración
 * 2 Acceder a elemento  []
 * 3 Agregar elementos .push() - [0] = ...
 * 4 Que "tipo" es Array.isArray(miArray) - miArray instanceof Array
 * 5 Destructuring con arrays
 */

/*1 Declaración de array
 *   Los arrays en js son de tipo object, por lo tanto se pueden inicializar desde la 
 *  clase con const arr = new Array(); (Son una instancia de la clase Array)
 *   Lo que guarda es la referencia al lugar de memoria, por lo tanto se maneja
 *  como un puntero. (Que loco no?)
*/

const miArray = new Array("Este ","es ", "mi ", "Array "); // esta notación ya no se usa
console.log(miArray);
const miOtroArray = ["La ", "que ", "va "]; // Esta es la notación que si se usa
console.log(miOtroArray);

console.log(typeof miOtroArray);

// 2 Acceder a un elemento con notación array[0] para acceder se usa la notación del índice
// o posición (primer elemento está en el índice (posición) 0, segundo elemento índice 1)
console.log(miOtroArray[0]);

for (let i = 0; i < miOtroArray.length; i++) {
    const e = miOtroArray[i];
    console.log(e);
}


// 3 Agregar elementos al arreglo

miOtroArray.push("si si ");  //agrego mediante la función push
console.log(miOtroArray);
console.log(miOtroArray.length);

miOtroArray[miOtroArray.length] = "También así... "; // uso .length para ir al índice que le 
//  sigue al último elemento
console.log(miOtroArray);


// También puedo agregar elementos en cualquier posición mayor que la última, pero
//  quedan lugares basíos y no se recomienda
miOtroArray[8] = "re lejos ";
console.log(miOtroArray);


// 4 Que "tipo" es
console.log(typeof miArray);

console.log(Array.isArray(miOtroArray));

console.log(miOtroArray instanceof Array);


// 5 Destructuring con arrays
// Se crea una variable para cada elemento del array y se asignan los valores en orden
const [palabra1, palabra2, palabra3]= miOtroArray;

console.log(palabra1, palabra2, palabra3);


// 6 Spread Operator ("...")    de propagación.
// El Spread Opertor devuelve cada uno de los elementos del array, esto nos permite "clonar" un array (pasar los valores
// en otro array diferente, que tendrá una referencia diferente), por lo tanto si se modifica no modificamos el original.
// También nos permite sumar dos arreglos y guardarlos en uno nuevo como uno sólo
const arrParaExpandir = [5 , 48, "más", true];
const nuevoArrayConElAnterior = [...arrParaExpandir]

// Como usamos Spread Operator, se generó una nueva "dirección en memoria" con los mismos valores
console.log(arrParaExpandir == nuevoArrayConElAnterior);

console.log(nuevoArrayConElAnterior);
console.log(arrParaExpandir);
nuevoArrayConElAnterior.push("uĺtimo");

console.log(nuevoArrayConElAnterior);
console.log(arrParaExpandir);

const arrIgualado = arrParaExpandir
console.log(arrParaExpandir);
console.log(arrIgualado);
arrIgualado.push("se modifican ambos array, ya que es una referencia al mismo array lo que fue copiado")

console.log(arrParaExpandir);
console.log(arrIgualado);
// Al igualarlos dan true por tener guardada exactamente la misma "dirección en memoria" a la que se irá a buscar el arrreglo
console.log(arrParaExpandir === arrIgualado);

const arrASumar = ["otro más", 23, null];
const arrSumados = [...arrParaExpandir, ...arrASumar]
console.log(arrSumados);
