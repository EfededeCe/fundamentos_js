
import saludar, {nombre, Animal as An} from "./14_1_modulos.js";
import cuentas  from "./14_2_modulos.js";

/*  Módulos  */

/*
 * 1 Import
 * 2 Export
 * 3 Export default
 * 4 Import as
 * 
 */

// 1 import

/*  Para poder importar código de otro archivo js, a partir de ES6 (2015) existe import/export, que 
    viene a reemplazar la forma anterior que usaba al require. Para poder usar este tipo de importación
    en un archivo que va a usarse desde html, hay que agregar en la etiqueta 
    <script src="..." type="module">. Si lo usamos con NodeJS en el archivo package.json hay que aclarar
    setiando "type": "module". Para importar hay que escribir import en la caecera del archivo 
    donde queremos traer código, y luego le decimos qué traer y de qué archivo*/

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//  ----->   <script src=".//14_0_modulos.js" type="module"></script>

// </body>
// </html>


// 2 Export
/*  Para poder exportar, debemos poner export antes de la variable/clase/función que 
    deseemos exportar de un archivo (ver 14_1_modulos.js y 14_2_modulos.js) */


// 3 Export default
/*  Export default hace que se exporte por defecto una funcion u otro elemento que deseemos
    (solo puede haber un export default por archivo), haciendo que éste no sea necesario desestructurarlo
    en la importación */


console.log(nombre);
console.log(cuentas);


// 4 Import as
/*  No es más que para modificar el nombre a un import, por uno más corto o conveniente para nuestro trabajo */

const perro = new An();
perro;

saludar(nombre);

console.log(cuentas.resta(1000,10, 5, 300));