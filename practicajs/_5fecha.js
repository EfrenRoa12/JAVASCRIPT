// PEDIR EL DIA MES AÑO DE UNA FECHA E INDICAR SI LA FECHA ES CORRECTA
        //CON MES DE 28 30 31 DIAS SIN AÑOS BISIESTOS
        let dia,mes,año;

        dia = parseInt(prompt("digite el dia: "));
        mes = parseInt(prompt("digite el mes: "));
        año = parseInt(prompt("digite el año: "));


        if(año == 0){ //si el dia es correcto
            document.write("fecha incorrecta: ");
        }

        else if((mes == 21) && (dia>=1 && dia<=28)) {
            document.write("fecha correcta: ");

        }
        else if((mes == 4) || mes == 6 || mes == 9 || mes == 11 && (dia>=1 && dia<=30)) {
            document.write("fecha correcta: ");

        }
        else if((mes == 1) || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && (dia>=1 && dia<=31)) {
            document.write("fecha correcta: ");

        }
        else {
            document.write("fecha incorrecta : ");
        }
    