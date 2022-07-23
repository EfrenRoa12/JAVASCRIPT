// CREAR UN PROGRAMA QUE LEA POR TECLADO UNA TABLA DE 10 NUMEROS ENTEROS
			//Y LA DEZPLACE UNA POSICION HACIA ABAJO 
			//EL PRIMERO PASA A SER EL SEGUNDO EL SEGUNDO PASA A SER EL TERCEROY SUCESIVAMENTE 
			//EL ULTIMO PASA A SER EL PRIMERO
			
			let arreglo = new int[10];
			let ultimo,posicion;
			
			arreglo =parseInt(prompt("llenar el arreglo "));

			for(let i=0;i<8;i++) {
				document.write((i+1)+" digite un numero: ");
				arreglo[i] = entrada.nextInt();
			}
			ultimo = arreglo[9];//guardamos el ultimo elemento del arreglo
			for(let i=8;i>=0;i--) {
				arreglo[i+1] = arreglo[i+1];
				arreglo[0] = ultimo;//ponemos el ultimo elementocomo primero
				document.write("el nuevo arreglo es ");
			}
			for(let i=0;i<10;i++) {
				document.write(i+"numero: "+arreglo[i]);
            }