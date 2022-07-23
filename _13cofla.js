/**
 * crear un sistema para mostrar a cofla las particularidades de los 3 celulares 
 * cada celular debe tener color pero resolucion de camara y memoria ram
 * cada celular debe prender reiniciar apagar tomar fotos y grabar
 */

 class Celular{//es una funcion
    constructor(color, resolucion_Camara, memoria_Ram){//metodo constructor
        this.color = color;
        this.resolucion_Camara = resolucion_Camara;
        this.memoria_Ram = memoria_Ram;
        this.informacion = `esto es un celular de color ${this.color}, tiene resolucion de ${this.resolucion_Camara}px y una memoria ram de  ${this.memoria_Ram}`;
    }
    
    //****************************************************************************************** */
    prender(){
        if (this.enciende == false) {
            alert("celular prendido");
            this.enciende = true;
        }else{
            alert("el celular esta apagado");
            this.enciende = false;
        }
    }
    reiniciar(){
        if (this.reinicia == false) {
            alert("celular esta reiniciando");
            this.enciende = true;
        }else{
            alert("reinicia");
        }
    }
    tomarfoto(){
        alert(`foto tomado de resolucion de ${this.tomarfoto}`);
    }
    grabar(){
        alert(`grbando video en ${this.resolucion_Camara}`);
    }
    // un metoo es una funcion
    mobileinformacion(){
        return `
        color: <b>${this.color}</b></br>
        resolucion: <b>${this.resolucion_Camara}</b></br>
        ram: <b>${this.memoria_Ram}</b></br>
        `;
        
    }

}
//creamos otra clase
class celularaltagama extends Celular{
    constructor(color, resolucion_Camara, memoria_Ram,cam_extra, rec_facial){ 
    super(color, resolucion_Camara, memoria_Ram);
    this.cam_extra = cam_extra;
    
    }
    videolento(){
        alert("grabando camara lenta");
    }
    recfacial(){
        alert("reconocimientofacial");
    }
    informaciongama(){
        return this.mobileinformacion()+`resolucion de cama extra: ${this.resolucion_Camara}`;
    }
}
// const cel1 = new Celular("rojo",16,"6gb");
// const cel2 = new Celular("blanco",32,"8gb");
// const cel3 = new Celular("azul",8,"4gb");
// cel1.prender();
// cel1.reiniciar();
// cel1.tomarfoto();
// cel1.verinformacion();

cel1 = new celularaltagama("rojo",32,"4k","3gb", "full hd");
cel2 = new celularaltagama("rojo",32,"4k","3gb", "hd");

document.write(`
    ${cel1.informaciongama()}<br>
    ${cel2.informaciongama()}<br>
`);