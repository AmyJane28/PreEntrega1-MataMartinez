let calificacionTareaTotal = 0
let totalExamen
let totalAsistencia
let totalCalifTareas

let cantidadAlumnos = Number(prompt("Ingresa con número ¿Cuántos alumnos son a calificar?: "))
if(isNaN(cantidadAlumnos)){
    alert("No es valor númerico, por favor intenta de nuevo")
}
else{

for(let j=0; j<cantidadAlumnos; j++){
let nombreAlum = prompt("Ingresa el nombre del alumno a calificar: ")

//Función para sacar promedio de tareas 
function promTareas(){
    let numTareas = Number(prompt("¿Cuántas tareas a calificar son? "))
    if(isNaN(numTareas)){
        alert("No es valor númerico")
    }
    else{
        for(let i=0; i<numTareas; i++){
            let calificacionTarea = Number(prompt("Ingresa la calificación de tarea " + (i+1) +":"))
            if(calificacionTarea >=0 && calificacionTarea<=100){
                calificacionTareaTotal = calificacionTareaTotal + calificacionTarea;
            }
            else{
                alert("Ingresa una calificación entre 0 y 100")
                break
            }                            
   }
    }
return  totalCalifTareas= (calificacionTareaTotal/numTareas)*.20
}

console.log(promTareas())

let examen = Number(prompt("Ingresa calificación de examen: "))
if(isNaN(examen)){
    alert("No es valor númerico")
    examen = Number(prompt("Ingresa calificación de examen: "))
    if(examen>=0 && examen <=100){
        totalExamen = examen * .60
    }
    else{
        alert("Ingresa una calificación entre 0 y 100")
        examen = Number(prompt("Ingresa calificación de examen: "))
        totalExamen = examen * .60
    }   
}
else if(examen>=0 && examen <=100)
{
    totalExamen = examen * .60
}
else {
    alert("Ingresa una calificación entre 0 y 100")
    examen = Number(prompt("Ingresa calificación de examen: "))
    totalExamen = examen * .60
        
}

    let asistencia = Number(prompt("Ingresa calificación de asistencia: "))
    if(isNaN(asistencia)){
        alert("No es valor númerico")
        asistencia = Number(prompt("Ingresa calificación de asistencia: "))
        if(asistencia>=0 && asistencia <=100){
            totalAsistencia = asistencia * .20
            alert("El promedio de " + nombreAlum + " es de: " + promedioTotal())
        }
        else
        {
        alert("Ingresa una calificación entre 0 y 100")
        asistencia = Number(prompt("Ingresa calificación de asistencia: "))
        totalAsistencia = asistencia * .20
        alert("El promedio de " + nombreAlum + " es de: " + promedioTotal())
    }   
}
    else if(asistencia>=0 && asistencia <=100)
    {
        totalAsistencia = asistencia * .20
        //mandamos llamar la función para sacar promedio completo
        alert("El promedio de " + nombreAlum + " es de: " + promedioTotal())
    }
    else{
        alert("Ingresa una calificación entre 0 y 100")
        asistencia = Number(prompt("Ingresa calificación de asistencia: "))
        totalAsistencia = asistencia * .20
        alert("El promedio de " + nombreAlum + " es de: " + promedioTotal())
    }

//Función para sacar el promedio total contando tareas, examen y asistencia
function promedioTotal(){
    
    return totalExamen+totalAsistencia+totalCalifTareas
}
console.log(promedioTotal())
}

}

