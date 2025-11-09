/*
10. Crea un array con varios números. Recorre el array con un bucle y para cada número
imprime (usando un operador ternario):
• "Par" si es par.
• "Impar" si es impar.
*/
var numeros: number[] = [3, 10, 5, 8, 7, 12];

numeros.forEach(element => {
    console.log(`${element}: ${(element % 2 == 0) ? "Par" : "Impar"}`)
});


function hay8(array:number[]): boolean {
    if (array.includes(8)) {
        return true;
    }
    return false;
}

const hay8array = (array:number[]) : boolean => {
    if (array.includes(8)) {
        return true;
    }
    return false;
}