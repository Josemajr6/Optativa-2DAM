/*
7. Crea un programa que reciba un número entre 1 y 7 e imprima el día de la semana
correspondiente
*/

const diaSemana = (numDia: number): void => {
    switch (numDia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
           console.log("Martes");
            break;
        case 3:
           console.log("Miércoles");
            break;
        case 4:
           console.log("Jueves");
            break;
        case 5:
           console.log("Viernes");
            break;
        case 6:
           console.log("Sábado");
            break;
        case 7:
           console.log("Domingo");
            break;
        default:
            break;
    }
}

diaSemana(5);