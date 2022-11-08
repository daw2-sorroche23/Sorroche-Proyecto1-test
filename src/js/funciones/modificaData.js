export const modificaData= (tiempo)=>{

    //Creamos un objeto del tipo Date
    let fecha = new Date(tiempo)

    //Devolvemos  el dia 
    let dia = fecha.getDate()

    //Devolvemos el mes 
    let mes = fecha.getMonth()

    //Devolvemos la hora en todo su formatos

    //El padstart lo que hace es rellenar la variable con lo que pongamos hasta alcanzar una longitud dada. 

    //Si el valor que ponemos es menor a 2 como pr ejemplo 1 nos devolvera 01 


    let ano = fecha.getFullYear()
    let h = String(fecha.getHours()).padStart(2,'0') 
    let m = String(fecha.getMinutes()).padStart(2,'0')
    let s = String(fecha.getSeconds()).padStart(2,'0')

    //Creamos un array que contaga los meses de un año
    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
    ];


    //Devolvemos el dia del array del mes(un nombre) y todo el contenido de las horas 
    return(dia + " " + mesesNombres[mes] +   " - " + ano + " " + h + ":" + m + ":" + s);

}