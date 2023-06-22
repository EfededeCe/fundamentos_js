/*  Objetos  */

/*
 * 1 Creación, Propiedades y Métodos
 * 2 Creación con new Object()
 * 3 Acceder con notación [] y for in
 * 4 Delete (elimina propiedad y su valor)
 * 5 Acceder con Object.values(), Object.keys(), JSON.stringify()
 * 6 Get
 * 7 Set
 * 8 Función constructora de objetos
 * 9 Prototype
 * 10 Call
 * 11 Aplly
 * 12 Destructuring con objetos
 * 13 Objetos literales
 */





// 1 Creación, Propiedades y Métodos
/*
 * Los objetos son una "referencia" a una dirección en memoria (puntero), y dentro se le
 * pueden crear propiedades (variables de cualquier tipo) y métodos (funciónes que le dan
 * un comportamiento a ese objeto en particular). Para que un objeto acceda a sus propios
 * valores se usa la palabra this. entes de una de sus propiedades o métodos.
 */

let persona = {
    nombre: "Juan",     //propiedad nombre
    apellido: "Lena",   //propiedad apellido
    edad: 25,            //propiedad edad
    nombreCompleto: function(){     //método nombreCompleto
        return this.nombre + " " + this.apellido
    }
};

console.log(persona);

/*  Importante: tener en cuenta que this hace referencia al contexto en que se encuentra declarado, si se
 *  usa dentro de una función anónima va a tener el contexto de la misma, pero si se usa dentro de una
 *  función flecha va ha saltar su contexto, por el contexto global.
 */
// si ejecutamos este log en el navegador nos devolverá el objeto window 
console.log(this); 

const unObjeto = {
    nombre: "nom",
    apellido: "ape",
    edad: 44,
    accion(){   // ECMA Script 6
        console.log(this);
    }
};
unObjeto.accion()

const otroObjeto = {
    nombre: "otroNom",
    apellido: "otroApe",
    edad: 33,
    accion: function(){
        console.log(this);
    }
}

otroObjeto.accion()

const otroObjetoMas = {
    nombre: "otroNom",
    apellido: "otroApe",
    edad: 33,
    accion: () => {
        console.log(this);
    }
}
console.log("El siguiente log es de un this en una función flecha dentro de un objeto");
// En el siguiente log, también en el navegador, recivimos el objeto window, así es como salteamos el contexto local
otroObjetoMas.accion();

// para acceder al valor de una propiedad hay que escribir el nombre de la variable (el objeto)
// seguido de un punto "." y luego la propiedad o método que se desea obtener.
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());



// 2 Creación con new Object()
/* Crear un objeto con new Object(), guarda la referencia del espacio en memoria en la
 * variable elegida pero este queda vació. Luego de esto puede ir completandose con propiedades
 * y métodos dinámicamente, mediante la asignación (ej: persona.loQueSea = "Así").
 */


const persona2 = new Object();
persona2.nombre = "Otro Juan";
persona2.direccion = "Uritorco";
persona2.tel = 123122541;



// 3 Acceder con notación de corchetes
/* Para acceder con corchetes se usa el nombre de la variable (objeto) seguido de "[",
 * dentro de los corchetes va entre comillas el nombre de la propiedad que se desea y "]".
 */
console.log(persona2["nombre"]);

/*  for in: for in es una forma de recorrer internamente un objeto. Lleva dos elementos,
 * el primero es el nombre que vamos a usar como referencia para cada propiedad (puede ser
 * cualquiera), luego " in " y el segundo va a ser el nombre de la variable que queremos
 * iterar.
 */

for ( nomProp in persona ) {
    console.log(nomProp);   // imprime el nombre de la propiedad
    console.log(persona[nomProp]);  // imprime el contenido de la propiedad
};



// 4 Delete (elimina propiedad y su valor)

console.log(persona);
delete persona.edad;
console.log(persona);



// 5 Acceder con Object.values(), Object.keys(), JSON.stringify()

// imprimimos accediendo a cada valor
console.log("Nombre: " + persona.nombre + " " + persona.apellido);

// Creamos un array con cada valor con Object.values()
const arrayValoresObjeto = Object.values(persona)
console.log(arrayValoresObjeto);

// Creamos un array con cada propiedad (clave o "key") con Object.keys()
const arrayPropiedadesObjeto = Object.keys(persona)
console.log(arrayPropiedadesObjeto);

// Guardamos en una constante el objeto convertido a string, para leerlo en otros lugares
const stringObjeto = JSON.stringify(persona)

console.log(typeof stringObjeto);
console.log(stringObjeto);


// 6 Get

const casa = {
    direccion: "Siempre Viva 674",
    habitantes: 5,
    get abrirPuerta(){
        return "Abriendo puerta"
    },
    infoCasa: function(){
        return "Hay " + this.habitantes + " personas viviendo en " + this.direccion
    }
};

/* El objeto casa tiene dos metodos (funciones), una con un "get" antepuesto y la otra
 * como una función normal, asociada a una propiedad (variable). Cuando accedemos a cada
 * una, la diferencia que hay es que en la que tiene "get" accedmos como si fuera una
 * propiedad más, sin poner () al final, mientras que en la función asociada a la propiedad
 * debemos saber que esa "propiedad" es en realidad un metodo y agregarle () al final
 */

console.log(casa.infoCasa());

console.log(casa.abrirPuerta);

// Si iteramos el objeto con for in por ejemplo, no obtendremos el valor del método sin el get
for (p in casa) {
    console.log(casa[p]);
}


// 7 Set
/* Si deseamos agregar o modificar el valor de una propiedad podemos usar "set", estos 
 * nos asegura que lo que ingresemos al objeto sea validado y ahorremos errores de sintaxis
 * por hacerlo mediante asignaciones (objeto.loQueSea = "algo").
  */

const usuario = {
    nombre: "Nereia",
    apellido: "Grendwisk",
    email: "",
    telefono: 4352656,
    get nroToString(){
        return this.telefono.toString();
    },
    get normalizeEmail(){
        return this.email.toLowerCase();
    },
    set normalizeEmail(email){
        this.email.length == 0 ? this.email = email.toLowerCase() : "";
    }
}

console.log(usuario.email);
usuario.normalizeEmail = "Nere@mail.com";
console.log(usuario.normalizeEmail);
usuario.normalizeEmail = "otroEmail@mail.com";  //no actualiza el email por la condición en set
console.log(usuario.normalizeEmail);


// 8 Función constructora de objetos

/* Para crear un contructor de una clase de objetos podemos utilizar una función,
 * a esta la nombramos como el tipo de objeto que vamos a obtener y comenzando con mayuscula.
 * los parámetros que le asignemos serán los valores de sus propiedades.
 */

function Usuario(nombre, apellido, edad, email = ""){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
};


/* Asignamos a una variable la referencia a un espacio en memoria para el objeto que deseamos
 * construir con la palabra "new", luego podemos crear la cantidad de objetos que deseemos
 * asignandolos a distintas variables, pasando por parámetro las propiedades.
*/

const primerUsuario = new Usuario("Lola", "Ravana", 56, "lalola@mail.com");
const segundoUsuario = new Usuario("Lolo", "Revono", 55);

console.log(Object.values(primerUsuario));
console.log(Object.values(segundoUsuario));

console.log(primerUsuario.nombreCompleto());
console.log(segundoUsuario.nombreCompleto());

/* Creando una variable (const) asignandole un new String, vemos que el tipo de dato es un
* objeto igualmente, que tiene sus propiedades y métodos. Asi, cada variable a la que le
* asignemos un "new" va a generar un obeto
*/

const algo = new String("Mi string");
const otroAlgo = "Mi string";
console.log(algo);
console.log(typeof algo);
console.log(otroAlgo);
console.log(typeof otroAlgo);


// 9 Prototype

/* Con prototype se puede "modificar" el objeto constructor y afectar a todos los
 * objetos que salen de él */

Usuario.prototype.tel = "Ingrese un nro de teléfono";

console.log(Object.values(segundoUsuario));

console.log(segundoUsuario.tel);
segundoUsuario.tel = "4567891"
console.log(segundoUsuario.tel);
console.log(primerUsuario.tel);



// 10 Call

/* El método "call" nos permite utilizar un método que está dentro de un objeto, en otro
    objeto que no tiene ese método, para esto, deben tener las mismas propiedades */

const autoUsado = {
    puerta: 5,
    caja: "automática",
    caracteristicas: function(){
        return  "La caja es " + this.caja + " y tiene " + this.puerta + " puertas.";
    }
}

const autoNuevo = {
    puerta: 3,
    caja: "semi automática"
}

console.log(autoUsado);
console.log(autoNuevo);
console.log(autoNuevo.acelerar);

// Los valores que toma "this", van a ser los del objeto que se pasa por parámetro.
console.log(autoUsado.caracteristicas.call( autoNuevo ));

// También se pueden pasar los parametros si los tiene a la función separandose por ",".
const producto = {
    marca: "Una marca",
    creado: 2023,
    info: function(tipo, origen){
        return this.marca + " hizo en " + this.creado + " este prducto de tipo " + tipo + " en " + origen;
    }
};

const producto2 = {
    marca: "Otra marca",
    creado: 2022,
}

console.log(producto.info.call(producto2, "embutido","Entre Ríos"));


// 11 Aplly

// Funciona igual que "call" pero cuando se pasan argumentos solo admite un arreglo


const producto3 = {
    marca: "Otra marca más",
    creado: 2025,
}

let argumentos = ["panificado", "Salta"];
console.log(producto.info.apply(producto3, argumentos ));


//  12 Destructuring con objetos
// Se crea una variable para cada propiedad del objeto con el mismo nombre, y se asignan los valores
const { caja, puerta } = autoUsado;

console.log(puerta, caja);


// 13 Objetos literales
// Si la variable que queremos igualar a una propiedad del nuestro nuevo objeto, va a tener el mismo nombre
// podemos cambiar ->  puerta: puerta, caja: caja} <- por -> puerta, caja
const otroAuto = {
    puerta,
    caja
};

console.log(otroAuto);
