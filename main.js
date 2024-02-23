import { SZEMELYLISTA } from "./adat.js";
import { konzolraIr, listaOsszeallit } from "./fuggvenyek.js";

konzolraIr(SZEMELYLISTA)

/* meg kell fogni azt a HTML elemet, amibe írni szeretnék */

//const FELSELEM = document.getElementById("felsorolas")
const FELSELEM = document.querySelector("#felsorolas")
FELSELEM.innerHTML = "<h1>Ügyesek vagyunk!</h1>"
FELSELEM.innerHTML += listaOsszeallit(SZEMELYLISTA)

const KARTYA= document.querySelector(`#kartyaContainer`)
KARTYAELEM.innerHTML = 