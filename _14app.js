//crear un sistema que ayude a cofla a eligir una mejor app
//la informacion de los instaladores debe contener la cantidad de descargas y la puntuacion
//las apps se pueden instalar abrir cerrar y desinstalar
class App{//es una funcion
    constructor(descarga, puntuacion, peso){//metodo constructor
        this.descarga = descarga;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false; 
    }
    // un metoo es una funcion cada una abrir cerrar instalar desinstalar mostra la informacion
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente ");
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }

    cerrar(){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }

    appinfo(){
        return `
        Descargas: <b>${this.descarga}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `;
    }
}
//le pasamos los parametros
app1 = new App("16.000","3 estrellas","200mb");
app2 = new App("27.000","4 estrellas","700mb");
app3 = new App("16.000","5 estrellas","400mb");
app4 = new App("47.000","4 estrellas","200mb");
app5 = new App("16.000","5 estrellas","500mb");
app6 = new App("24.000","3 estrellas","400mb");
app7 = new App("16.000","4 estrellas","200mb");

//aqui imprimimos en pantalla el resultado
document.write(`
    ${app1.appinfo()}<br>
    ${app2.appinfo()}<br>
    ${app3.appinfo()}<br>
    ${app4.appinfo()}<br>
    ${app5.appinfo()}<br>
    ${app6.appinfo()}<br>
    ${app7.appinfo()}<br>
`);
