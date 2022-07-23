// LEER DOS SERIES DE 10 ENTEROS QUE ESTARAN ORDENADOS CRECIENTEMENTE
		//COPIAR (FUSIONAR) LAS DOS TABLAS EN UNA TERCERA DE FORMA QUE SIGAN ODRDENADOS
		let a,b,c;
		let creciente = true;
		
		a = new int[10];
		b = new int[10];
		c = new int[20];
		
		System.out.println("digite el primer el arreglo ");
		do {
			for(let i=0;i<10;i++) {
				System.out.print((i+1)+" digite un numero");
				a[i] = entrada.nextInt();	
			}
			
			//comprobamos si el arreglo esta ordenado en orden creciente
			for(let i=0;i<9;i++) {
				if(a[i] < a[i+1]){//creciente
					creciente = true;
				}
				if(a[i] > a[i+1]){//creciente
					creciente = false;
					break;
				}
			}
			
			if(creciente == false) {
				document.write(" el arreglo esta desordenado vuelva a digitar");
			}
			
		}while(creciente == false );
		
		document.write("digite el segundo arreglo ");
		do {
			for(let i=0;i<10;i++) {
				document.write((i+1)+" digite un numero");
				b[i] = entrada.nextInt();	
			}
			
			//comprobamos si el arreglo esta ordenado en orden creciente
			for(let i=0;i<9;i++) {
				if(b[i] < b[i+1]){//creciente
					creciente = true;
				}
				if(b[i] > b[i+1]){//creciente
					creciente = false;
					break;
				}
			}
			if(creciente == false) {
				document.write(" el arreglo esta desordenado vuelva a digitar");
			}
			
	}while(creciente == false );
	
		let i=0;
		let j=0;
		let k=0;
		
		while(i<10 && j<10) {
			if(a[i]<b[j]) {
				c[k] = a[i];
				i++;
			}
			else {
				c[k]=b[j];
				j++;
			}
			k++;
		}
		if(i==10) {
			while(j<10) {
				c[k] = b[j];
				j++;
				k++;
			} 
		}
		else {
			while(i<10) {
				c[k] = a[i];
				i++;
				k++;
			}
		}
		document.write("el arreglo c completo es: ");
		for(k=0;k<20;k++) {
			document.write(c[k]+" ");
		}
		document.write(" ");
	