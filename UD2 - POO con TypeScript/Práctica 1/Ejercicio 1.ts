/* 
1. Escribe una función en TypeScript que reciba como parámetro una nota numérica
entre 0 y 10 e imprima un mensaje en pantalla según la calificación obtenida:
• >=9: Sobresaliente
• >=7: Notable
• >=5: Aprobado
• <5: Suspenso. 
*/


const calcularNota = (nota: number): void => {
    switch (true) {
        case nota >= 9:
            console.log("Sobresaliente")
            break;
        case nota >= 7:
            console.log("Notable")
            break;
        case nota >=5: 
            console.log("Aprobado")
            break;
        case nota < 5 && nota >= 0:
            break;
            console.log("Suspenso")
        default:
            console.log("Ingresa una nota entre 0 y 10")
            break;
    }
}

calcularNota(6);