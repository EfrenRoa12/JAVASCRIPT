/*
        * Guillermo tene N dolares
        * Luis tiene la mitad de loq eue poseen Guillermo
        * Juan tiene la mitad de lo que posee Luis y guillermo juntos
        * hacer un programa que calcule e imprima la cantidad de dinero
        * que tienen entre los tres
*/

let guillermo, luis,juan,c_dinero,resultado;

guillermo = parseInt(prompt("ingresa el dinero de guillermo "));
    c_dinero = guillermo / 2;
    resultado = (c_dinero + guillermo)/2;

document.write("el dinero de guillermo es: $ "+guillermo);
document.write("el dinero de luis es: $ "+c_dinero);
document.write("el dinero de juan es: $ "+resultado);