/*  Operador Corto Circuito  */



// Existen cortocircuitos and y cortocircuitos or, ambos son antagónicos

// Cortocircuito OR devuelve el valor de la izaquierda siempre que sea verdadero, si no, el de la derecha

console.log("" || 2);
console.log("" || false);
console.log("" || "asd");
console.log("" || true);
console.log(null || true);
console.log({} || true);
console.log([] || true);
console.log(undefined || true);
console.log("asd" || 2);
console.log(5 || 2);

// Cortocircuito AND devuelve el valor de la izaquierda siempre que sea falso

console.log("" && 2);
console.log("" && "asd");
console.log("" && true);
console.log("asd" && 2);
console.log(5 && 2);



