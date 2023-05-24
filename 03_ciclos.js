/*  Ciclos  */

/*
 * 1 While
 * 2 Do While
 * 3 For
 * 4 Break
 * 5 Continue
 * 6 Labels
 */



// 1 While
let while1 = 0;

while (while1 < 3){
    console.log(`Esta es la vuelta nr `, while1 + 1);
    while1++;
};


// 2 Do While
do {
    console.log(while1);
    while1++
} while (while1 < 0);


// 3 For
for (let i = 0; i <= 10; i++){
    console.log(i * 2);
};


// 4 Break
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
        break;  // rompe el ciclo y sale
    };
};


// 5 Continue
for (let i = 0; i <= 10; i++){
    if (i % 2 != 0){
        continue; // va a la siguiente iteración
    } else {
        console.log(i);
    }
};


// 6 Labels (etiquetas)     no suelen usarse...
inicio: // la etiqueta indica a donde se dirijirá el continue o lo que romperá el break
for (let i = 0; i <= 10; i++){
    if (i % 2 != 0){
        continue inicio; //etiqueta
    } else {
        console.log(i);
    }
};





