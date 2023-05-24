/* Array */

/*
 * 1 declaración
 * 2 acceder a elemento  []
 * 3 agregar elementos .push() - [0] = ...
 * 4 que "tipo" es Array.isArray(miArray) - miArray instanceof Array
 */

/*1 declaración de array
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


// 2 acceder a un elemento con notación array[0] para acceder se usa la notación del índice
// o posición (primer elemento está en el índice (posición) 0, segundo elemento índice 1)
console.log(miOtroArray[0]);

for (let i = 0; i < miOtroArray.length; i++) {
    const e = miOtroArray[i];
    console.log(e);
}


// 3 agregar elementos al arreglo

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


// 4 que "tipo" es
console.log(typeof miArray);

console.log(Array.isArray(miOtroArray));

console.log(miOtroArray instanceof Array);


