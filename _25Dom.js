document.getElementById(parrafo);//forma de seleccionar un elemento desde html

parrafo = document.getElementById(parrafo);
document.write(parrafo);
//--------------------------------------------------
seleccion = document.querySelector(".sele");//aqui depende si es id # clase ect.
document.write(seleccion);
//--------------------------------------------------
selec = document.querySelectorAll(".parr");//aqui depende si es id # clase ect.
document.write(selec[1]);//selecciona el elemento parrafo depende de html en p con su clase
//----------------------------------------------------
