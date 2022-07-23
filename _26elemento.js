const rangoEtario = document.querySelector(".rangoetario");//es seleccionado el atribto desde html clase
// document.write(rangoEtario);//si imprimimos con esto aparecera que tipo es en pantalla

// rangoEtario.setAttribute("type","color");//cambia el tipo si es rango texto o numero o range etc.
valordeatributo = rangoEtario.getAttribute("type");

document.write(valordeatributo);//aparece range
//remueve el atributo--------------------------------
