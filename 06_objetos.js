/*  Objetos  */

/*
 * 1 Creación, Propiedades y Métodos
 * 2 Creación con new Object()
 * 3 
 * 
 *  
 */





// 1 Creación, Propiedades y Métodos
/**
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

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());



// 2 Creación con new Object()
/** Crear un objeto con new Object(), guarda la referencia del espacio en memoria en la
 * variable elegida pero este queda vació. Luego de esto puede ir completandose con propiedades
 * y métodos dinámicamente, mediante la asignación (ej: persona.loQueSea = "Así").
 */


const persona2 = new Object();
persona2.nombre = "Otro Juan";
persona2.direccion = "Uritorco";
persona2.tel = 123122541;









