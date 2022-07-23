let numero = 0;

while(numero < 6){
    numero++;//la concidional es que compare del 1 al 6 hasta que sea menor se repita el bucle hasta que llegue a 6
    document.write(numero);
    // document.write(numero+"<br>"); //si le colocamos eso imprime en lista con br
}


//###################################################################################################################


do{
    // numero++; //si lo pongo asi es de 1 a 7
    document.write(numero);
    // document.write(numero+"<br>"); //si le colocamos eso imprime en lista con br

    //si es asi es de 0 a 6
    numero++;//primero realiza la operacion depues pregunto la condicion es al reves
}while(numero <= 6);

//###################################################################################################################

while(numero < 100){//se ejecutara hasta al numero 100
    numero++;//
    document.write(numero);
    if(numero == 10){//como le conlocamos este break solo ejecutara hasta el numero 10
    break;
    }
}

document.write("fin");

//###################################################################################################################
//incremento del 1 al 6
for(let i = 0;i < 6; i++){
    document.write(i);
}


//###################################################################################################################
//decremento del 6 al 1
for(let i = 6;i >=0 ; i--){
    document.write(i);
}
//###################################################################################################################
//salteado
for(let i = 1;i <=5 ; i++){
    if(i == 4){//el numero 4 sera omitido
    continue;//es la funcion que omite el numero 4
    document.write(i+"<br> agregar al dicionario si tiene 4 no ponerlo");
    }
}

//###################################################################################################################
//for in, for of
//tira la posicio
let animales = ["gato","perro","gallina"];

for(animal in animales){
    document.write(animal+"<br>");
}

document.write(animal+"<br>");
//tira lo que es el valor de la posicion
for(animal of animales){
    document.write(animal+"<br>");
}

//###################################################################################################################
let array1 = ["maria","josefa","roberta"];
let array2 = ["pedro","marcelo",array1];

for(let array in array2){//recorrimos el primer array
    if(array == 2){//en caso de que estemos en la posicion 2 
        for(let array of array1){//recorremos otro array la posicion 2 es array1--nos salteamos la posicion 2
            document.write(array+"<br>");//mostramos e pantallalo que hemos recorrido
            //es donde termina la posicion numero 2
            //break
            //continue

        }
    }else{
        document.write(array[array2]+"<br>");
    }
}

//###################################################################################################################