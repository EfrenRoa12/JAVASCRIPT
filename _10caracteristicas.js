//abstraccion se refiere aque se resume en sus caracteristicas principales como por ejemplo
//perro ladra
//pajaro canta
//gato maulla
//modularizacion es separar el problema por partes en pequeños detalles
//encapsulamiento de datos para que no puedan acceder desde otros lugares
//polimorfoismo como los objetos se comportan con el mismo metodo solamente que las propiedades son distintas

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
    //creamos un metod ladrar para el perro
    ladrar(){
        alert("wof, wof, wof");
    }
}
//si es perro ladra si no no ladra ya que es otro animal
const perro = new Perro("perro",5, "marron", "doberman");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",3,"verde");

//aqui es en donde imprime en pantalla
//le coloco perroo porque es diferente
perro.verinformacion();
perro.ladrar();
gato.verinformacion();
pajaro.verinformacion();
