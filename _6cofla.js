/*
un joven gana la loteria y hace fiesta a su casa y solo deja pasar a mayores de edad
dejar pasar a mayores de edad la primera persona que entre a las 2 am no paga
*/

let free = false;
const validarcliente = (time)=>{
        let e_mayores = prompt("ingresa tu edad: ");
    if (e_mayores >= 18) {
        if (time >= 2 && time < 7 && free == false) {//el tiempo entre las 2 a 7 am hay entradas
           alert("pasas gratis por ser la primera persona: ");//una vez cumpliendo pagan los demas solo unapersona no paga 
           free = true;
       } else {
           alert(`son las ${time}:00 hs, puedes pasar pero pagas la entrada`);
       }
    } else {
       alert("es menor de edad no pasa ");
    }
}   
//validamos las cosas varias veces
validarcliente(6);
validarcliente(4);
validarcliente(3);
validarcliente(2);
validarcliente(7);
validarcliente(5);