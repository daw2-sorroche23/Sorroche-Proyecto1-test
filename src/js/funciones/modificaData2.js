export const ModificaData2 = (tiempo)=>{

    //creamos un objeto 
    let tiempoActual = new Date(tiempo)

    //Guardamos en una variable el formato en que se tendra que ver el tiempo a la hora de mostrarlo
    let mostrarTiempo = tiempoActual.getYear() + "-" + (tiempoActual.getM() + 1) + "-" + tiempoActual.getD() + " " + tiempoActual.getH() + ":" + tiempoActual.getM() + ":" + tiempoActual.getS() 
    
 
}