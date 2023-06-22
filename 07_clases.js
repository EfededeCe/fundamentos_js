/*  Clases  */

/*
 * 1 Creación de clases 
 * 2 Get y Set en clases
 * 
 * 
 * 
*/




// 1 Creación de clases

/* Para crear una clase se utiliza "class" y luego el nombre de la clase comenzando en
 *  mayuscula, luego llaves, y luego el constructor, que no es mas que un metodo que
 *  inicializa con los valores requeridos cuando se cree un objeto de dicha clase.
 *  Así le pasamos al método constructor los parametros que deseemos que se generen
 *  a medida que vamos creando cada objeto, por ejemplo, en clase Persona pedimos en el
 *  constructor nombre y apellido, lo que le dará a ese unico objeto creado en ese momento
 *  esos valores espesíficos y únicos.
 */

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}

// Para crear un objeto a partir de una clase (instanciar un objeto), creamos una constante
// que la igualamos a un new "class", con los parámetros que pide el constructor.

const persona1 = new Persona("Lola", "Lolita");
const persona2 = new Persona("Lalo", "Lalito");

console.log(persona1);
console.log(persona2);


// 2 Get y Set en clases
/*  Los getters y setters funcionan igual en clases como en objetos, ya que los objetos
 *  son "instancias" de las clases. Son métodos con los que podemos manipular las
 *  propiedades del objeto en cuestión.
 */

class Casa{
    constructor(propietario, direccion){
        this._propietario = propietario;
        this._direccion = direccion;
    };
    get propietario(){
        return this._propietario
    };
    set propietario(nombreCompleto){
        this._propietario = nombreCompleto;
    }

};

const miCasa = new Casa("Yo", "Mi dirección");

console.log(miCasa);
console.log(miCasa.propietario);    // Accedo a la propiedad mediante el "get"
console.log(miCasa._propietario);   // Accedo a la propiedad directamente

miCasa.propietario = "Mi otro yo";  // Cambio la propiedad mediante el "set"
console.log(miCasa.propietario);



class Animal{
    // en el caso de las clases tenemos el constructor dentro de la misma, a diferencia de los prototipos:
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
    }

    accion(){
        console.log("Corre");
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}


class Perro extends Animal {
    constructor(nombre, raza, tamanio){
        super(nombre, raza);
        this.tamanio = tamanio;
        this.edad = null;
    }
    accion(){
        console.log("Sobreescribimos  la acción que estaba en la clase padre Animal");
    }
    ladrar(){
        console.log("Guau!!");
    }

    static perro(){
        console.log("Soy un perro, un animal doméstico");   // los métodos static se pueden llamar sin necesidad de que haya una instancia de la clase 
    }

    get getEdad(){
        return this.edad
    }
    set setEdad(edad){
        this.edad = edad;
    }
}


const pelusa = new Perro("Pelusa", "Callejerita", "Pequeñita");

console.log(pelusa);

pelusa.accion();
pelusa.ladrar();