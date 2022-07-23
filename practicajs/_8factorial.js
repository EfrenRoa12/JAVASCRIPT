// pedir un numero y calcular su
let numero;
let factorial =1;

numero = parseInt(prompt("digite un numero"));

for(let i=1;i<=numero;i++);{
    factorial*=i;
}

document.write("el numero es: "+numero+" es "+factorial);
