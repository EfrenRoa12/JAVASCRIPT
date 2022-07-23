//****************************************************** */
numero = Math.sqrt(25);//raiz cuadrada de un numero
document.write(numero);
//********************************************************* */
numero = Math.cbrt(27);//raiz cubica
document.write(numero);
//********************************************************* */
numero = Math.max(2,4,1,6,21,92);//devuelve el numero mas grande
document.write(numero);
//********************************************************* */
numero = Math.min(2,5,9,5,1);//numero mas pequeño
document.write(numero);
//********************************************************* */
numero = Math.random();//devuelve numeros aleatorios
document.write(numero);
//********************************************************* */
numero = Math.random()*100;//enteros
numero = numero.toString();
num = numero[0] + numero[1];
if (numero[1]==".") {
    num = numero[0];
}
document.write(num);
//********************************************************* */
for (let i = 0; i < 10000; i++) {//ejecuta diezmil veces
    numero = Math.random()*99;//devuelve numeros aleatorios
    numero = Math.floor(numero+1);//redondeamos
    document.write(numero);
}
//********************************************************* */
let numero = Math.round(9.6)//lo redondea a mayor
document.write(numero);
//********************************************************* */
let numero = Math.trunc(9.6)//elimina los decimales
document.write(numero);
//********************************************************* */
let numero = Math.PI;//
document.write(numero);