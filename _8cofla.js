const suma =(numero1,numero2)=>{
    return parseInt(numero1) + parseInt(numero2);
}

const resta =(numero1,numero2)=>{
    return parseInt(numero1) - parseInt(numero2);
}

const divide =(numero1,numero2)=>{
    return parseInt(numero1) / parseInt(numero2);
}

const multiplica =(numero1,numero2)=>{
    return parseInt(numero1) * parseInt(numero2);
}

alert("elija la opcion a realizar");
let operacion = prompt("1: suma, 2:resta, 3:division, 4: multiplicacion");

if (operacion == 1) {
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = suma(num1,num2);
    document.write(`el resultado es ${resultado}`);
} 
else if(operacion == 2){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = resta(num1,num2);
    alert(`el resultado es ${resultado}`);
}
else if(operacion == 3){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = divide(num1,num2);
    alert(`el resultado es ${resultado}`);
}
else if(operacion == 4){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = multiplica(num1,numo2);
    alert(`el resultado es ${resultado}`);
}
else{
    document.write("error")
}