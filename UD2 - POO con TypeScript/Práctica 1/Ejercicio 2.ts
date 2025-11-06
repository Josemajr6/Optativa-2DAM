/* 
2. Crea un programa en TypeScript que imprima en consola todos los números pares
del 1 al 20. Usa un bucle for, while y do-while. 
*/


console.log("Números pares del 1 al 20: ");
var numeros: String = ""

// Usando bucle FOR
// for (let i = 0; i <= 20; i++) {
//     if ( i % 2 == 0 ) {
//         numeros += `${i}, `;
//     }

// }

// Usando bucle While
// let cont = 0;
// while (cont != 20) {
//     cont++;
//     if (cont %2 == 0) {
//         numeros += `${cont}, `
//     }
// }

// Usando bucle Do-While
let cont = 0;
do {
    cont++;
    if (cont %2 == 0) {
        numeros += `${cont}, `
    }
} while (cont != 20);


numeros = `${numeros.slice( 0 ,-2 )}.`;
console.log(numeros);
