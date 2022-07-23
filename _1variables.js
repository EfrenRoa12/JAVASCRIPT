recipiente = "barbijo";
//esto es una vasriable siempre puede cambiar por ser variable
alert(recipiente)
//

String = "cadena de texto";
Number = 2;
Boolean = true;

//tres formas de declarar una variABLE
// var =   let    const

var numero1 = 15;//recordemos es para uso general

let numero2 = 16;//es para uso locla en especifico

const nombre = "dalto";//siempre va a ser constante llamado nombre

let hola;
alert(hola);//me decir undefined indefinida no esta definido hola no tinene valor

let num1 = 2, num2 = 5;//podemos inciializar varios let en una sola linea

//existe la posibilidad de que la declaracion corra primero y despues declararlo ejemplo solo en algunos casos hoisting
let num4;
alert(num4);
num4 = 2;

//null es un vacio que le agregamos a algo que n tine valor intencionalmente
let num5 = null;

//nan not and number

//promt es una api de js

prompt("holarancio");//vamos a escribir algo---lo que escrfibimos va a serejemplo dime tu nombre efren va a valer

let nombres = prompt("como te llamas?");//es el valos mi nombe que yo escriba
alert("hola "+nombre); //sera lo que escribimos----lo 




//
let number = 10;
number += 5;//lo que hace que 10 + 5 = 15 + - *  % & | 0 resto %= / etc
document.write(number);


//es para incremento y decremento
let number1 = 10;
let number2 = 5;
number1--;
resultado = number1;
alert(number1);


//concatenaacion entre
let saludo = "¡hola pedro! ";
let pregunta = "¿como estas?";
frase = saludo + pregunta;
document.write(frase);


//concatenacion estandar y recomendado

let frase1 = "Efren ";

let frase2 = `soy ${frase1} y estoy estudiando`;

document.write(frase2);


//----------------------------------------------
//se realiza comillas simples primero despues comillas dobles para que fnciones formas de concatenar
frases = 'mi nombre es: " efren "y soy un crack';


// operadores intermedio 
let n1 = 14;
let n2 = 8;

document.write(n1 == n2);//compara si son un numero sea igual a n1 a n2 es falso

document.write(n1 != n2);//si el valor es distinto de sera falso
document.write(n1 !== texto);//no es el mismo dato marca true
document.write(n1 == 2);//aplica mayo menor etc.

//------------------------------------------------------------------------

//operadores logicos
// para comentar contro + }
// or= ||-------- not && 

document.write(!afirmacion);//seria lo contrario si es verdadero va a ser falso
//solo funciona con true o false
//problemas
nume1 = 12;
nume2 = 24;
nume3 = 36;
nume4 = 62;
nume5 = 78;

op = (nume1 < nume2 || nume2 < nume3) && (!(nume1 && nume2) && nume5 != nume3);
//num1 es menor a numero 2 si = true
//numero 2 es menor k numero 3 = true
//nume1 es contrario de num 2 = true{{{{{{{{{{{{{{{{{{{{{{{{{{como es coontrario sera false}}}}}}}}}}}}}}}}}}}}}}}}}}
//nume5 es distinto a 3 = true

//despues si || = or los dos son true v a a ser true si uno es falso va a ser falso
//&& solamente va a ser verdadero si todos van a ser verdaderso con uno es dalso
//al final falso por el && ya que esdalso
document.write(op);




//MAYUSCULAS Y minusculas con camel case


document.getElementById(hola);//primera palabra minu desúes de cada palabra incician con mayuscula

//condicionales
//se ejecuta
if(10 < 15){
    alert.prompt("hola");
}
else if(10 > 15){
    alert("falso");
}
else{
    alert("no existe");
}




console.log(Math.pow(2,3) + 22);



Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27;

/*
Math también tiene métodos que redondearán los números para nosotros. .round redondeará un número al número 
entero más cercano. .floor siempre redondeará un número al número entero más cercano hacia abajo. .
ceil siempre se redondeará al número entero más cercano hacia arriba.
*/
Math.round(6.5) = 7;
Math.round(6.45) = 6;
Math.floor(6.999) = 6;
Math.ceil(6.0001) = 7;


/*
.length
El tipo de datos “string” tiene un método incorporado llamado .
length. Cualquier cadena que llamemos a esto devolverá la cantidad de caracteres en esa cadena.

*/
var nombreGato = 'felix';
console.log(nombreGato.length); // 5

