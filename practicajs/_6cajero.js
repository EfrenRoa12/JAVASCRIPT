// hacer un programa que simule un cajero automatico con un saldo inicial de 1000
        //con el siguiente menu de opciones
        //1 ingresar dinero a lacuenta
        //2retirar dinero dee la cuenta
        //salir

        let saldo_inicial = 1000;
        let opcion;
        let ingreso,saldo_actual,retiro;

        opcion = parseInt(prompt("digite el primer numero: "
                +"a. ingresa dinero ala cuenta: \n"
                +"b. retira dinero de la cuenta: \n"
                +"c. salir\n"));

        switch(opcion) {
            case 'a': ingreso = parseInt(prompt("digite la cantidad a ingresar: "));
                saldo_actual = saldo_inicial + ingreso;
                document.write("la suma es: "+saldo_actual);
                break;
            case 'b': retiro = parseInt(prompt("digite la cantidad de retiro: "));
                if(retiro>saldo_inicial) {
                    document.write("no cuenta con el saldo suficiente: ");
                }
                else {
                    saldo_actual = saldo_inicial - retiro;
                    document.write("dinero en cuenta: "+saldo_actual);
                }
                break;


            case 'c': break;

            default : 	document.write("la operacion no existe: ");


        }