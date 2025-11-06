/* 
3. Escriba las siguientes instrucciones relacionadas con el tratamiento de arrays:
a. Declara un array con al menos 3 nombres.
b. Agrega dos nombres nuevos al final de la lista.
c. Elimina el primer elemento del array.
d. Comprueba si un nombre concreto (ejemplo "Ana") está en la lista.
e. Recorre el array e imprime cada nombre en consola.

*/

var nombres: String[] = [ "Julia", "Lucas", "Jairo" ];

nombres.push("Ana", "Andrea")

nombres.shift();

console.log(nombres.includes("Ana") ? "Se incluye Ana" : "No se incluye Ana")

console.log("\nLista de nombres: ")
nombres.forEach(nombre => {
    console.log(nombre);
});
