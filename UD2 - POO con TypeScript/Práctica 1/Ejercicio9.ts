/*
9. Escribe una función que reciba un array de números y devuelva el mayor de ellos.
Ejemplo: mayorNumero([3, 8, 1, 10, 5]) // Devuelve 10
*/
const mayorNumero = (array: number[]): number => {
    let mayor:number = array[0];

    array.forEach(element => {
        if (element > mayor) {
            mayor = element
        }
    });
    return mayor
}

var numeros : number[] = [3,5,8,2,1]
console.log(mayorNumero(numeros))