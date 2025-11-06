/* 
5. Define una función que reciba un array de números como parámetro y devuelva la
suma total. Ejemplo: sumarArray([1, 2, 3, 4]) // Devuelve 10
*/

const sumaNumeros = (numeros: number[]): number => {
    let suma: number = 0;
    numeros.forEach(n => {
        suma += n;
    });

    return suma;
}

const listaNumeros: number[] = [ 2, 8, 5, 3, 2 ];
console.log(sumaNumeros(listaNumeros));

