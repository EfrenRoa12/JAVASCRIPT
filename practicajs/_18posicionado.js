// crear un programa que LEA POR TECLADO UNA TABLA
		//DE 10 NUMEROS ENTEROS Y DEZPLACE N POSICIONES EN EL ARREGLO
		//(N ES DIGITADO POR EL USUARIO)
		
		let arreglo = new int[10];//CREAMOS EL ARREGLO DE 10 ELEMENTOS
		let n_posicion,ultimo;
		
		//sabemos cuales son los elementos del arreglo-----*****-----
		document.write("llenar el arreglo ");
		for(let i=0;i<10;i++) {
			System.out.print((i+1)+" digite un numero: ");
			arreglo[i] = entrada.nextInt();
		}
		document.write(" que nos digite la cantidad de posiciones a dezplazar: ");
		n_posicion = entrada.nextInt();
		
		for(let vuelta=1;vuelta<=n_posicion;vuelta++) {
			ultimo=arreglo[9];//guardamos el ultimo arreglo
			for(let i=8;i>=0;i--) {//dezplazando posicion e el arreglo 
				arreglo[i+1] = arreglo[i];
			}
			arreglo[0] = ultimo;//el ultimo como e primero
		}
		document.write("el arreglo resultante es : ");
		for(let i=0;i<10;i++) {//dezplazando posicion e el arreglo 
			document.write(i+" elemento : "+arreglo[i]);
		}
	
