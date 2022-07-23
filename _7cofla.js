/*
crear un mini sistema que nos permita registrar a los alumnosque estan presentes  p y ausentes a en clase
pasados los 30 dias mostrar el total de asistencias de alumnos (presentes y ausentes)
se puede tener un maximo de 10% de ausencia por semestre si se tiene mas aclarar que esta reprobado
*/
let cantidad = prompt("cuantos alumnos son? ");
let alumnostotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnostotales[i] = [prompt("nombre del alumno "+(i+1)), 0];
    
}
const tomarasistencia = (nombre, p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnostotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnostotales) {
        tomarasistencia(alumnostotales[alumno][0],alumno);
    }
}

for (alumno in alumnostotales) {
    let resultado = `${alumnostotales[alumno][0]}:<br>
    ........presentes: ${alumnostotales[alumno][1]}<br>
    ........ausencias: ${30 - parseInt(alumnostotales[alumno][1])}
    `;
    if (30 - alumnostotales[alumno][1] > 18) {
        resultado+="<b style= 'color: red'>reprobado por inasistencia</b><br></br>";
    } else {
        resultado += "<br><br>";     
        document.write(resultado);
    }
}