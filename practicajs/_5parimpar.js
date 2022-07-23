// LEER UN NUMERO HASTA QUE SE INTRODUZCA UN 0 PARA CADA UNO INDICAR SI ES PAR O IMPAR


let numero;

numero = parseInt(prompt("digite un numero"));

while(numero!=0) {
    if(numero %2 ==0){
        document.write("el numero "+numero+" es par");
    }
    else {
        document.write("el numero "+numero+" es impar");
    }
    numero = parseInt(prompt("digite otro numero"));

}