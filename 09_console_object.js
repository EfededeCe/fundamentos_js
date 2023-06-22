console.log();
console.warn();
console.table();
console.log(console);
console.table(Object.entries(console).sort());
console.error();
console.group();
console.groupEnd();
console.info();
// console.clear();

console.log(document);
console.dir(document);
console.dir(window);

console.time("Etiqueta");
console.timeEnd("Etiqueta");



// Extras

// Como se ve estos métodos son del  objeto window, que es el contexto de JS en el navegador. Aún así no es necesario anteponer la
// palabra window al método en cuestión.
window.alert("Esto es una alerta"); // Devuelve undefined siempre
window.confirm("Esto es un pedido de confirmación"); // Devuelve true o false si se clickea Aceptar o Cancelar respectivamente
window.prompt("Esto es un prompt"); // Devuelve la cadena de texto que haya ingresado el usuario o null si toca cancelar
