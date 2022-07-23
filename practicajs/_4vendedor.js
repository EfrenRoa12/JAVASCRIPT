//pedir dos numeros y decir cual es el mayor o si son iguales
let numero1,numero2;

numero1= parseInt(prompt("ingresa primer numero "));
numero2 = parseInt(prompt("ingresa segundo numero "));

if(numero1 > numero2){
    
    document.write("numero 1 es mayor"+numero1);
}
else if(numero2>numero1){
    
    document.write("numero 2 es mayor"+numero2);
}
else{
    document.write("los numeros son iguales");
}