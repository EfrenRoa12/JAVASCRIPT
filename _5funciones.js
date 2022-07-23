
function saludar() {
    let pregunta = prompt("hola, como estuvo tu día? ");
if (pregunta == "bien") {
    alert("me alegro");
}
else{
    alert("que pena");
}
}

saludar();//es una funcion ya que escribimos codigo y ejecuta una sola vez y asi es encantador

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function saludo() {
    alert("hola");//primero ejecuta aert
    return "funciona correctamente";//despues ejecuta return
}
let saludos = saludo();

document.write(saludos);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++parametros
function suma(num1,num2) {
    let sum = num1 + num2;
    document.write(sum);
    document.write("<br>")
}

suma(12,32);
suma(22,55);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++funciones flechas
const salud = name => document.write(frase);
salud("pedro");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const saludoss = (nombress)=>{
    document.write("hola como estas "+nombress);
}
saludoss = ("efren");