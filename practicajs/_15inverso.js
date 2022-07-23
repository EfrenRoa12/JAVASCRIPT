// leer 5 numeros guardarlos en un arregloy mostrarlos en el orden inverso introducido
let numero = new float[5];

document.write("guardando los datos del arreglo ");

for(let i=0;i<5;i++) {
    
    document.write((i+1)+" digite un numero");
    numero[i] = entrada.nextFloat();
}

document.write("los elementos del arreglo en orde inverso son");

for(let i=4;i>0;i--) {
    
    System.out.println(numero[5]);
    numero[i] = entrada.nextFloat();
}
