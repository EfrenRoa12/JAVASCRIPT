const contenedor = document.querySelector(".contenedor");
const parrafo = document.createElement("H2").innerHTML = "parrafo";
const h2_nuevo = document.createElement("h2");/**es loq ue remplazara */
h2_nuevo.innerHTML = "titulo";/**es para remplazar a un h2 comun en html */
h2_antiguo = document.querySelector(".h2");/** */
contenedor.replaceChild(h2_nuevo,h2_antiguo);/**es lo que va a remplazar */





const contenedor = document.querySelector(".contenedor");
const parrafo = document.createElement("H2").innerHTML = "parrafo";
const h2_nuevo = document.createElement("h2");/**es loq ue remplazara */
h2_nuevo.innerHTML = "titulo";/**es para remplazar a un h2 comun en html */
h2_antiguo = document.querySelector(".h2");/** */

contenedor.removeChild(h2_antiguo)/**elimina un hijo de un elemento padre */





const contenedor = document.querySelector(".contenedor");
const parrafo = document.createElement("H2").innerHTML = "parrafo";
const h2_nuevo = document.createElement("h2");/**es loq ue remplazara */
h2_nuevo.innerHTML = "titulo";/**es para remplazar a un h2 comun en html */
h2_antiguo = document.querySelector(".h2");/** */
respuesta = contenedor.hasChildNodes();
/**nos muestra true o false depende de */
if (respuesta) {
    document.write("el elemento si tiene hijos");
} else {
    document.write("el elemento no tiene hijos");
}



console.log(contenedor.parentNode)


console.log(h2_antiguo.nextSibling)/**le sigue un texto*/
console.log(h2_antiguo.lastSibling)/**muestra el ultimo no elsiguiente */














const div = document.querySelector(".div3");
console.log(div.closest(".div"));





