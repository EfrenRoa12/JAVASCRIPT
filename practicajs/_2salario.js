/*
hacer un programa que calcule e imprimael salario semanal de un empleado
a partir de sus horas semanales trabajadas de su salario
*/ 

let salario = parseInt(prompt("ingresa salario por hora del empleado "));
let horas_t = parseInt(prompt("ingresa las horas trabajadas "));
let resultado = salario * horas_t;

document.write("el salario es: $ "+resultado);
