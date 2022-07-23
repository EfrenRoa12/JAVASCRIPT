const titulo = document.querySelector(".titulo");
let resultado = titulo.textContent;/**hace que muestre la letra---tituloinnerHTML-----ourHTML */
document.write(resultado);

const contenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment("LI");
for (let i = 0; i < 20; i++) {
    item.innerHTML = "este es un item de la lista";
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);/*nos muestra el item de la lista hemos creado el elemento*/




const contenedor = document.querySelector(".contenedor");
const primerhijo = contenedor.childNodes;/**muestra toda la lista de nosos no es un array */
console.log(primerhijo)

/**lo que hace es recorrer los elementos */
const contenedor = document.querySelector(".contenedor");
const primerhijo = contenedor.children;/**muestra toda la lista de nosos no es un array */
for (const hijo of hijos) {
    console.log(hijo);
}

/**------------------------------------------------------------ */
