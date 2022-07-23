let trabajo = "240 minutos de trabajo";
let tp = "100 minutos hacer trabajos practicos";
let estudio = "100 minutos de estudio";
let homework = " 45 minutos de cosas de la casa";
let descanso = "20 minutos de descanso";
//funciona como agenda
console.log("tareas");
for (var i = 0; i < 14; i++) {
    if (i == 0) {
        console.groupCollapsed("semana 1");
    }
    console.groupCollapsed("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("semana 2");
    }
    
}
console.groupEnd();
console.groupEnd();
