/**
 * solicitarle los datos a cofla de su calificacion
 * aprueba o reprueba
 * mostrar con solores representativos en consola
 * organizar las tareas diariamente
 * utilizar la consola para organizarlo
 * cada tarea no debe superar las 4 horas
 */

const materias = {
    fisica: [90,6,3, "fisica"],
    matematica: [84,8,2, "matematica"],
    logica: [92,8,4, "logica"],
    quimica: [96,8,4, "quimica"],
    calculo: [91,6,3, "calculo"],
    programacion: [79,7,4, "programacion"],
    bioogia: [75,9,4, "biologia"],
    bbdd: [98,9,1, "bbdd"],
    algebra: [100,10,4, "algebra"]
}

const aprobo =()=>{
    for ( materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        if (asistencias >= 90) {
            
            console.log("%c asistencia ","color:green");
        }else{
            
            console.log("%c falta de asistencia ","color:red");
        }
        if (asistencias >= 7) {
            
            console.log("%c aprobado ","color:green");
        }else{
            
            console.log("%c desaprobado ","color:red");
        }
        if (asistencias >= 3) {
            
            console.log("%c trabajo completo ","color:green");
        }else{
            
            console.log("%c falta de trabajo ","color:red");
        }
        
    }
}

aprobo()
