import { SZEMELYLISTA } from "./adat.js";

export function konzolraIr(lista) {
    /* a SZEMELYLISTA adatait kiírja a konzolra az alábbi formátumban:
       név: Géza, tel: 06-30-4454564 */
    for (let index = 0; index < lista.length; index++) {
        console.log(`név: ${lista[index].nev}, tel: ${lista[index].tel}`)
    }
}

export function listaOsszeallit(lista) {
    let txt = "<ul>"
    for (let index = 0; index < lista.length; index++) {
        txt += `<li>név: ${SZEMELYLISTA[index].nev}, tel: ${SZEMELYLISTA[index].tel}<li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}

export function kartyaOsszeallit(lista) {
    let txt = "<ul>"
    for (let index = 0; index < lista.length; index++) {
        txt += "<div class =`kartya`>"
        txt += `<h3>név: {lista[index].nev}></h3>
        txt += `<p>név: {lista[index].nev}></p>
        txt += `<p>név: {lista[index].nev}></p>
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}