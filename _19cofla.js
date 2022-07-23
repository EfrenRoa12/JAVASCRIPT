class Calculadora{
    suma =(numero1,numero2)=>{
        return parseInt(numero1) + parseInt(numero2);
    }
    
    resta =(numero1,numero2)=>{
        return parseInt(numero1) - parseInt(numero2);
    }
    
    divide =(numero1,numero2)=>{
        return parseInt(numero1) / parseInt(numero2);
    }
    
    multiplica =(numero1,numero2)=>{
        return parseInt(numero1) * parseInt(numero2);
    }
    exponenciar =(numero1,numero2)=>{
        return parseInt(numero1) ** parseInt(numero2);
    }
    
    raizcuadrdado =(numero1)=>{
        return Math.sqrt(numero1)
    }
    raizcbica =(numero1)=>{
        return Math.cbrt(numero1)
    }
}
const calculadora = new Calculadora();

alert("elija la opcion a realizar");
let operacion = prompt("1: suma, 2:resta, 3:division, 4: multiplicacion, 5: potenciacion, 6: cuadrado, 7:raizcubica");

if (operacion == 1) {
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = calculadora.suma(num1,num2);
    document.write(`el resultado es ${resultado}`);
} 
else if(operacion == 2){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = calculadora.resta(num1,num2);
    document.write(`el resultado es ${resultado}`);
}
else if(operacion == 3){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = calculadora.divide(num1,num2);
    document.write(`el resultado es ${resultado}`);
}
else if(operacion == 4){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("segundo numero: ");
    resultado = calculadora.multiplica(num1,numo2);
    document.write(`el resultado es ${resultado}`);
}
else if(operacion == 5){
    let num1 = prompt("primer numero: ");
    let num2 = prompt("exponente: ");
    resultado = calculadora.exponenciar(num1,numo2);
    document.write(`el resultado es ${resultado}`);
}
else if(operacion == 6){
    let num1 = prompt("raiz cuadrada: ");
    resultado = calculadora.raizcuadrdado(num1,num2);
    document.write(`el resultado es ${resultado}`);
}
else if(operacion == 7){
    let num1 = prompt("raiz cubica: ");
    resultado = calculadora.raizcbica(num1,num2);
    document.write(`el resultado es ${resultado}`);
}
else{
    document.write("error")
}
