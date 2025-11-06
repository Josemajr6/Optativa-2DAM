/* 
6. Escribe una función que reciba un array de strings y devuelva un solo string
concatenado, donde cada elemento esté separado por una coma y un espacio ", "
Ejemplo: concatenar(["Ana", "Luis", "Pedro"]) // Devuelve "Ana, Luis, Pedro"
*/

const concatenar = (cadenas: string[]): string => {
    let concatenacion: string = "";
    cadenas.forEach(c => {
        concatenacion += `${c}, `;
    });

    return concatenacion.slice( 0 ,-2 );
}

const listaCadenas: string[] = [ "Miguel", "Lucía", "Alba" ];
console.log(concatenar(listaCadenas));

