console.log("mensaje de depuracion")
console.clear()//se limpia la consola
console.error("error")//ejecuta error
console.info("no se usa mas pero servible")//mensaje informativo
console.table([4,5,7,8,9,5,4,5,8,5,5,1,2,5,6])//array--muestra posicion y el valor
console.warn("cuidado porque")
console.dir([4,5,7,8,9,5,4,5,8,5,5,1,2,5,6])//en lista
//---------------------------------------------------------------------------------

function sumar(num1,num2) {
    document.write(numero1,numero2)
    console.count()
}

sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);

console.countReset()//visualiza cuantas veces ejecuto

sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
//----------------------------------------------------
console.group()//si colocamos
console.log("grupoc a")
console.log("grupoc b")
console.log("grupoc c")
console.group()//es un grupo dentro de otro grupo de elementos console
console.log("grupoc a")
console.log("grupoc b")
console.log("grupoc c")
console.group("frutas")//
console.log("grupoc a")
console.log("grupoc b")
console.log("grupoc c")
console.groupEnd()//elimina el grupo
//---------------------------------------------------
console.time()//es un contador

console.timeLog()//muestra la cantidad de tiempo que ha pasado
console.timeEnd()//pausamos en cronometro
//-------------------------------------------------------
console.log("%rancio","color:red","background:black;padding:20px;border: 3px solid blue")