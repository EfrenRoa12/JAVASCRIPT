// pedir numeros hasta que se introduzca uno negativo y calcular la medida
let numero,elemento,suma;
let media;

numero = parseInt(prompt("digite un numero: "));

while(numero>=0) {

 let   suma = suma + numero; //suma iterativa
    elemento++;// aumentamos 1 a elementos

    numero = parseInt(prompt("digite otro numero: "));


}

if(elemento==0) {//
    document.write("error la division entre 0 no existe ");
}
else {
    media = suma/elemento;
    document.write("la media el promedio es: "+media);
}