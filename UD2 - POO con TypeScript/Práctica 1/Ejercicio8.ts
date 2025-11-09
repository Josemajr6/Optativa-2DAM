/*
8. Crea un array con varios números. Recorre el array con un for y detén la ejecución
(break) cuando encuentres el número 7, mostrando un mensaje "Número
encontrado". Si el número no existe en el array, mostrar "Número no encontrado".
*/

var numeros: number[] = [3,5,2,10,7,8]
var encontrado: boolean = false;
for (let i: number = 0; i < numeros.length ; i++) {
    if (numeros[i] === 7) {
        console.log("Número encontrado");
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Número no encontrado")
}