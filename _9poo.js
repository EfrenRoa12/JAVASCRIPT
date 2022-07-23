
class humano{//es una funcion
    constructor(nombre,edad,id){//metodo constructor
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
        this.informacion = `soy ${this.nombre}, tengo ${this.edad} años y mi id es: ${this.id}`;
    }

    // un metoo es una funcion
    verinformacion(){
        document.write(this.informacion+"<br>")//esta informacion que imprime es llamado desde verinformacion
        //e informacion esta en contructor
    }
}
//aqui agregamos la informacion necesaria que queremos que imprima
const efren = new humano("efren",27,"d5d5d");
const carlos = new humano("carlos",20,"d5dcs5d");
const harvie = new humano("harvie",38,"d5asd");

//aqui es en donde imprime en antalla
efren.verinformacion();
carlos.verinformacion();
harvie.verinformacion();
