let frutas = ["banana","manzana",5,3,"pera"];//esto es un arrays
document.write(frutas[3]);//cuado pongo[0] es para que muestre solamente banana

//diferencia

let pc1 = {
    nombre: "EfrenPC",
    procesador: "AMD A 8",
    ram: "8GB",
    espacio: "1 TB"
};

document.write(pc1["nombre"]);//asi se muestran los arreglosde esta forma


//es una forma de leer un array con los valores dentrp
let nombre = pc1["nombre"];
let procesador= pc1["procesador"];
let ram= pc1["ram"];
let espacio= pc1["espacio"];
//le damos ombre como podemos incluirlos

//<br>es un salto <b>se pone en negrita
frase = `el nombre de mi pc es: <b>${nombre}</b><br> 
        el procesador es; <b>${procesador}</b><br>
        la ram es: <b>${ram}</b><br>
        el espacio es: <b>${espacio}</b>`;

document.write(frase);













const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
console.log(nombresEstudiantes.length);  // 4


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
console.log(nombresEstudiantes[1]);  // 'Antonio

const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', ... 'Samuel'];
console.log(nombresEstudiantes[nombresEstudiantes.length - 1]);  // 'Samuel'


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
nombresEstudiantes[0] = 'Jorge';
console.log(nombresEstudiantes);  // ['Jorge', 'Antonio', 'Sara', 'Samuel']


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
nombresEstudiantes.push('Patricia');
console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara', 'Samuel', 'Patricia']


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
nombresEstudiantes.pop();
console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara']


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
nombresEstudiantes.unshift('Leo');
console.log(nombresEstudiantes);  // ['Leo', 'Martin', 'Antonio', 'Sara', 'Samuel']
nombresEstudiantes.shift();
console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara', 'Samuel']


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
for (let i = 0; i < nombresEstudiantes.length; i++) {
    console.log(nombresEstudiantes[i]);
}

// 'Martin'
// 'Antonio'
// 'Sara'
// 'Samuel'
