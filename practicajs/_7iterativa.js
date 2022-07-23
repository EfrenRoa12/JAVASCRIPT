// pedir numeros hasta que se teclee un cero mostrar la suma de todos los numeros introducidos

let numero, suma = 0;

do {
    numero = parseInt(prompt("digite un numero"));

    suma += numero;//suma iterativa
} while (numero != 0);
document.write("la suma es...." + suma);
