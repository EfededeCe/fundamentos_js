/*  Prototipos  */

/**
 * 1 Generalidades
 * 
 * 
 * 
 */



//  1 Generalidades
/* Los prototipos es la forma que tiene JS para "crear" clases. Es decir que es un lenguaje basado en prototipos
 * y no en clases como otros lenguajes Un prototipo tiene las mismas propiedades que un objeto
 * (atributos y métodos), y a su vez puede heredar sus propiedades a un objeto hijo de éste, o a otro prototipo. 
 * Existe un prototipo primigenio en JS que es el prototipo Object, a partir de el se desprenden todos los demas que 
 * hay o se vayan creando.
 * 
 */



// Creación de objetos clásica

const perro = {
    nombre: "Rubí",
    raza: "Francés",
    accion(){           // Notar que esta declaración de métodos no es válida en una función constructora
        console.log("Corre");
    }
}

const gato = {
    nombre: "Lombardo",
    raza: "Gatito",
    accion(){
        console.log("Corre");
    }
}

console.log(perro);
console.log(gato);

// Función constructora estandar
/** Crea un prototipo */

// function Animal(nombre, raza){
//     // Atributos
//     this.nombre = nombre;
//     this.raza = raza;
//     // Métodos
//     this.accion = function (){
//         console.log("Correr");
//     }
// };

// Función constructora sacando los métodos de la propia función y pasándolos al prototipo
function Animal(nombre, raza){
    // Atributos
    this.nombre = nombre;
    this.raza = raza;
}

// Métodos
Animal.prototype.accion = function (){
    console.log("Corre");
};

Animal.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre}`);
}



const cristal = new Animal("Cristal", "Gatita");
const aruba = new Animal("Aruba", "Salchicha");


console.log(cristal);
console.log(aruba);

cristal.accion();
aruba.accion();
cristal.saludar();
aruba.saludar();


// Herencia de prototipos (con "super" hacemos referencia al prototipo superior, en este caso decimos que el proto superior a Perro va a ser Animal)
// Función constructora de perro
function Perro(nombre, raza, tamanio){
    this.super = Animal;            // Indicamos con super que Animal es el proto padre 
    this.super(nombre, raza);       // Indicamos que los parámetros de nombre y raza van a funcionar igual que en Animal
    this.tamanio = tamanio;         // Agregamos la propiedad tamanio sólo a los prototipos Perro
}

Perro.prototype = new Animal(); // Declaramos a Perro como una "instancia" (objeto) de Animal
Perro.prototype.constructor = Perro // Declaramos el constructor de Perro (asignandole la función constructora Perro)


Perro.prototype.accion = function(){
    console.log("Reescribimos (en hijo) la acción que ya estaba en el prototipo padre");
}

Perro.prototype.ladrar = function () {
    console.log("Guau!");
}

const shine = new Perro("Shine", "Manto Negro", "Mediano");

console.log(shine);


