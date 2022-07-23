//tres chicos de 23 años compran un helado, los precios de los helados no estan a cada respectivo heldo
//ingresa el monto y mostrar el helado mas caro
//si hay dos o mas con el mismo precio mostras ambos
//indicar el vuelto
//ellos quieren comprar el helado mas caro que puedan con el dinero que tienen 

//roberto tiene 1.5 usd
//pedro tiene 1.7 usd
//cofla tiene 3 usd

//los precios del helado son los siguientes

//palito de helado de agua 0.6 usd
//palito de helado de crema 1
//bombon helado heladix 1.6
//helado marca heladovich 1.7
//marca helardo 1.8
//potecito de helado con cofles 2.9
//pote de 1/4 kg 2.9 usd

//soluciones
//pedirle que ingresen el monto y mostrarles el helado mas caro 
//si hay dos o mas helados con el mismo tiempo mostrarlos los dos
//cofla quiere saber cuanto es el vuelto

let dinero = prompt("ingresa el monto para comprar un helado ");//le pongo 2 dolares
let h_agua = 0.6;
let h_crema = 1;
let h_heladix = 1.6;
let h_heladovich = 1.9;
let h_helardo = 2.2;
let h_cofles = 2.9;
let h_pote = 2.9;

if(dinero >= 0.6 && dinero <= 1){
    cambio1 = dinero - h_agua;
    document.write("helado de agua, ");
    document.write(`el cambio es: ${cambio1}`);//aqui se realiza la concatenacion
}
else if(dinero >= 1 && dinero <= 1.6){
    cambio2 = dinero - h_crema;
    document.write("helado de crema, ");
    document.write(`el cambio es: ${cambio2}`);//aqui se realiza la concatenacion
}
else if(dinero >= 1.6 && dinero <= 1.9){
    cambio3 = dinero - h_heladix;
    document.write("helado de heladix, ");
    document.write(`el cambio es: ${cambio3}`);//aqui se realiza la concatenacion
}
else if(dinero >= 1.9 || dinero <= 2.2){
    cambio4 = dinero - h_heladovich;
    document.write("helado de heladovich, ");
    document.write(`el cambio es: ${cambio4}`);//aqui se realiza la concatenacion
}
else if(dinero >= 2.2 || dinero <= 2.9){
    cambio5 = dinero - h_helardo;
    document.write("helado de helardo, ");
    document.write(`el cambio es: ${cambio5}`);//aqui se realiza la concatenacion
}
else if(dinero >= 2.9 || dinero <= 3.1){
    cambio6 = dinero - h_cofles;
    document.write("helado de cofles, ");
    document.write(`el cambio es: ${cambio6}`);//aqui se realiza la concatenacion
}
else if(dinero >= 2.9 || dinero <= 3.1){
    cambio7 = dinero - h_pote;
    document.write("helado de pote, ");
    document.write(`el cambio es: ${cambio7}`);//aqui se realiza la concatenacion
}
else{
    document.write("no existe");
}






















//cofla se enoja le da el dineor a un bagabundo, el bagabundo compra dos boletos
//si le alcanza uno lo compra 
//si le alcanza dos lo compra/si alcanza 3 lo compra y el vuelto lo regala

//asesinato interrogacion 
//si el sospechoso miente darle descarga electrica
//si no miente no hacer nada
//si el aparato no se decide aclarar las preguntas que deben ser mas claras


