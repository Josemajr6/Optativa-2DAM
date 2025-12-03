import { Aventurero } from "./Aventurero";
import { Mision } from "./Mision";
import { ObjetoMagico } from "./ObjetoMagico";

export const obtenerMasExperimentados = (misiones: Mision[]): Map<Mision, Aventurero> => {
    var map = new Map<Mision, Aventurero>()
    misiones.forEach(m => {
        var aventureroMasExperimentado = m.listaAventureros[0]
        m.listaAventureros.forEach(a => {
            if (a.nivel > aventureroMasExperimentado.nivel) {
                aventureroMasExperimentado = a
            }
        });
        map.set(m, aventureroMasExperimentado)

    })
    return map
}

export const agregarObjetoMagico = (oM: ObjetoMagico, a: Aventurero) => {
    a.objetosMagicos.push(oM)
}

export const eliminarObjetoMagico = (oM: ObjetoMagico, a: Aventurero) => {
    const pos = a.objetosMagicos.findIndex(o => o.nombre === oM.nombre && o.tipoObjetoMagico === oM.tipoObjetoMagico)
    if (pos !== 1) {
        a.objetosMagicos.splice(pos, 1);
    }
}

export const obtenerAvMasObjetos = (m: Mision): Aventurero => {
    var avMasObjetos: Aventurero = m.listaAventureros[0]
    m.listaAventureros.forEach(a => {
        if (a.objetosMagicos.length > avMasObjetos.objetosMagicos.length) {
            avMasObjetos = a
        }
    })
    return avMasObjetos
}

