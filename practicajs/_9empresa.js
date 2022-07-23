// una empresa que se dedica a la venta de desinfectantesnecesita un programa para gestionar las facturas

        //en cada factura figura el codigo del articulo
        //la cantidad vendida en litros y el precio por litro
        //se pide de 5 facturas introducidos
        //factura total-----cantidad en litros vendidos del articulo1-----cuantas facturas se emitieron de mas de $600
        let codigo,litros,litroarticulo1=0,conteomas600=0;
        let preciolitro=0,importefactura,facturaciontotal=0;

        for(let i=1;i<5;i++) {
            do {
                codigo =parseInt(prompt("articulo N: "+i+" digite el codigo"));
            }while(codigo<1 || codigo>3);

            litros =parseInt(prompt("articulo N: "+i+" digite el articulo"));

            switch(codigo) {
                case 1: preciolitro=0.6; break;
                case 2: preciolitro=3; break;
                case 3: preciolitro=1.25; break;
            }

            importefactura = litros*preciolitro;
            facturaciontotal+=importefactura;

            if(codigo==1) {
                litroarticulo1+=litros;
            }
            if(importefactura>600) {
                conteomas600++;
            }
        }
        document.write("resumen ventas ");
        document.write("facturacion total "+facturaciontotal);
        document.write("cantidad de litros vendidos en articulo 1: "+litroarticulo1);
        document.write("cantidad de facturas mayores  a $600 "+conteomas600);

    