//metodo estatico

class Animal{//es una funcion
    constructor(especie, edad, color){//metodo constructor
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad}años y soy de color ${this.color}`;
    }
    // un metoo es una funcion
    verinformacion(){
        document.write(this.informacion+"<br>")//esta informacion que imprime es llamado desde verinformacion
        //e informacion esta en contructor
    }
}
//aqui aplicamos la herencia de animal
class Perro extends Animal{
    constructor(especie, edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    //creamos un metodo estatico
    static ladrar(){
        alert("wof, wof, wof");
    }
}
//si es perro ladra si no no ladra ya que es otro animal
const perro = new Perro("perro",5, "marron", "doberman");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",3,"verde");

Perro.ladrar();//usa metodo estatico para ejecutar
