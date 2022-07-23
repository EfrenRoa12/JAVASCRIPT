let cadena = "cadena de prueba";
let cadena2 = "cadena 2";

resultado = cadena.concat(cadena2);
document.write(resultado);
//********************************************************* */
//si la cadena comienza con cadena es true si no es false   ya sea que tenga espacio adelante es true como si comparara
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);
document.write(resultado);
//********************************************************* */
//si la cadena termina con a si es true si no es false
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.endsWith(cadena2);
document.write(resultado);
//********************************************************* */
//si una palabra se encuentra esta si no es false
//si de se encuentra estara en la otra
let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.includes(cadena2);
document.write(resultado);
//********************************************************* */
//a parir de cadena cuenta c0 a1 d2 e3 n4 a5 6 d7 de----cuenta
let cadena = "cadena de prueba";
let cadena2 = "de";

resultado = cadena.indexOf(cadena2);
document.write(resultado);

//********************************************************* */
//
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.indexOf("de");
document.write(cadena[7]);//imprimira 7 la posicion d

//********************************************************* */
//
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.lastIndexOf("de");//de atras
document.write(resultado);
document.write(cadena[15]+cadena[14]+cadena[13]);//formamos una palabra de reverss imprime bien
//********************************************************* */
//rellenar los caracteres con los parametros que queramos
let cadena = "abc";
let cadena2 = "";
//rellena 6 veces a al principio
resultado = cadena.padStart(6,"a");
document.write(resultado);
//********************************************************* */
//rellenar los caracteres con los parametros que queramos
let cadena = "abc";
let cadena2 = "";
//rellena 6 veces a al final
resultado = cadena.padEnd(6,"d");
document.write(resultado);

//********************************************************* */
//rellenar repite abc 6 veces
let cadena = "abc";
let cadena2 = "";
//rellena 6 veces a al principio
resultado = cadena.repeat(6);
document.write(resultado);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//divide la cadena como le pidamos
let cadena = "hola, como, estas, ?";
resultado = cadena.split(",");//lo devuelve como un array
//resultado = cadena.split("como");//si coloco estovoy a eliminar el como
document.write(resultado[1]);


//nos retorna un pedazo de la cadena que seleccionamos
let cadena = "abcde";//a0 b1 c2
resultado = cadena.substring(0,2);//inicia desde el 0 al 2 o sea son 3 
document.write(resultado);



//convierte una cadena aminuscula
let cadena = "abc";
resultado = cadena.toLowerCase();
document.write(resultado);

//convierte una cadena e mauscula
let cadena = "abc";
resultado = cadena.toLocaleUpperCase();
document.write(resultado);



//devuelve una cadena que convierte en objeto especifico
let cadena = "50";
resultado = cadena.toString();
document.write(2+resultado);//lo convierte en cadea
document.write(resultado*2);//lo multiplica
document.write(resultado.length);//cuenta la cadena autoaticaente
document.write(resultado.trim);//remueve los espacios


//elimina los espacios en blanco al final y al principio
let cadena = "abc";
let cadena2 = "";
resultado = cadena.trim();
document.write(resultado);
//elimina los espacios en blanco al final de la cadena
let cadena = " abc ";
let cadena2 = "";
resultado = cadena.trimEnd();
document.write(resultado);
//eliina los espacios en blanco al principio de la cadena
let cadena = " ab c";
let cadena2 = "";
resultado = cadena.trimStart();
document.write(resultado);



//retorna un objeto a un valor string
let cadena = "abc";
let cadena2 = "";
resultado = cadena.valueOf(6);
document.write(resultado);
