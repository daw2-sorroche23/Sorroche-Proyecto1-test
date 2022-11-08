export const modificaData2 = (tiempo)=>{

    //Creamos un objeto con la fecha y el tiempo
    let tiempoActual = new Date(tiempo)


    //Volvemos la fecha en todo su formato 

    //El padstart lo que hace es rellenar la variable con lo que pongamos hasta alcanzar una longitud dada. 

    //Si el valor que ponemos es menor a 2 como pr ejemplo 1 nos devolvera 01 

    let month = String(tiempoActual.getMonth()  + 1).padStart(2,'0')
    let day = String(tiempoActual.getDate()).padStart(2,'0')
    let haour = String(tiempoActual.getHours()).padStart(2,'0')
    let minutes = String(tiempoActual.getMinutes()).padStart(2,'0')
    let seconds = String(tiempoActual.getSeconds()).padStart(2,'0')


    //Guardamos en una variable el formato en que se tendra que ver el tiempo a la hora de mostrarlo
    let tiempoActualFinal = tiempoActual.getFullYear() + "/" + month + "/" + day + " " + haour + ":" + minutes + ":" + seconds 

    return(tiempoActualFinal)
    
}