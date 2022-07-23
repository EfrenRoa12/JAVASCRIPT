//metodo arrays
//le quitamos el ultimo
let nombres = ["pedro","maria","jorge"];

document.write(nombres+"<br>");//es como esta actualmente
let resultado = nombres.pop();//es como le quitamos jorge
document.write(resultado+"<br>");
document.write(nombres);//es como quedo

//********************************************************************************* */
//le quitamos el primero
let nombres = ["pedro","maria","jorge"];

document.write(nombres+"<br>");//es como esta actualmente
let resultado = nombres.shift();//es como le quitamos pedro
document.write(resultado+"<br>");
document.write(nombres);//es como quedo
//********************************************************************************* */
//
let nombres = ["pedro","maria","jorge"];

document.write(nombres+"<br>");//es como esta actualmente
let resultado = nombres.push("juancito");//agregamos juancito
document.write(resultado);
//********************************************************************************* */
//
let numero = [1,2,3,4,5,6,7,8,9];

document.write(numero+"<br>");//es como esta actualmente
let resultado = numero.reverse();//primero empieza por el ultimo al primero
document.write(resultado);//es como quedo
//********************************************************************************* */
//
let numero = [1,2,3,4,5,6,7,8,9];

document.write(numero+"<br>");//es como esta actualmente
numero.unshift(0);//agregamos un numero al array
document.write(numero);//
//********************************************************************************* */
//
let numero = [1,5,8,6,1,2,4,7,6];//si fuera palabra "baco","abecedario","cian"---lo ordena por rden alfabetico

document.write(numero+"<br>");//es como esta actualmente
numero.sort();//lo ordena de manera de que empiece desde o al 9
document.write(numero);//
//********************************************************************************* */
//
let numero = [1,5,8,6,1,2,4,7,6];//si fuera palabra "baco","abecedario","cian"---lo ordena por rden alfabetico

document.write(numero+"<br>");//es como esta actualmente
numero.splice(1,2);//vamos a la posicion 1 y eliminamos 3 elementos
// numero.splice(1,2,"pedro","juan");//remplace por nombres
document.write(numero);//

//*****************************ACCESORES************************************ */
//
let numero = ["pedro","maria","jorge","hector","francisco","mario"];//si fuera palabra "baco","abecedario","cian"---lo ordena por rden alfabetico

document.write(numero+"<br>");//imprime como taal un array posiciones
let resultado = numero.join();//lo convierte en una cadena de texto una sola
document.write("elemento"+resultado);
//*****************************ACCESORES************************************ */
//
let numero = ["pedro","maria","jorge","hector","francisco","mario"];//si fuera palabra "baco","abecedario","cian"---lo ordena por rden alfabetico

document.write(numero+"<br>");//imprime como taal un array posiciones
let resultado = numero.slice(0,2);//la posicion 3 es omitida no es motrado en pantalla
let resultado = numero.slice(0,-2);//desde el ultimo lo va quitando como si fuera reversa
document.write("elemento"+resultado);
//*****************************REPETICION************************************ */
//
let numero = ["pedro","maria","jorge","hector","francisco","mario"];//si fuera palabra "baco","abecedario","cian"---lo ordena por rden alfabetico

document.write(numero+"<br>");//imprime como taal un array posiciones
let resultado = numero.slice(0,2);//la posicion 3 es omitida no es motrado en pantalla
let resultado = numero.slice(0,-2);//desde el ultimo lo va quitando como si fuera reversa
document.write("elemento"+resultado);
