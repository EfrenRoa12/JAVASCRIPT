const titulo = document.querySelector(".titulo");
titulo.classList.add("grande");//agregamos la clase


titulo.classList.remove("grande");//elimina la clase en html que tiene segun sea la clase

let valor = titulo.classList.contains("grandess");//si existe una clase lamado grandes en html existe si no no existe
if (valor) {
    document.write("la clase esxiste");//
} else {
    document.write("la clase no existe");//
}


/*si la clase no existe la agrega si si la quita */
titulo.classList.toggle("mar");


/* */
let valor = titulo.classList.replace("grandess","chico");//remplaza la clase grande por chica

/*  */
