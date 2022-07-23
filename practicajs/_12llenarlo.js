// llenar arreglo
let elemento;
			
elemento =Integer.parseInt(JOptionPane.showInputDialog(null,"digite la cantidad de elementos"));

let letra = new [elemento];

letras = parseInt(prompt(" Digite los elementos del arreglo: "));


for(let i=0;i<=elemento;i++) {
    letra = parseInt(prompt((i+1)+" digite un caracter"));//SEUTILIZA I + 1 PARA NO EMPEZAR DE 0 SI NO APARTIR DE 1
        
        letra[i] = entrada.next().charAt(0);
}
letra = parseInt(prompt(" los caracteres del arreglo son: "));
for(let i=0;i<elemento;i++) {
    document.write(letra[i]+" ");
}	
