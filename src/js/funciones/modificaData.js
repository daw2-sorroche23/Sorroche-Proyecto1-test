export const modificaData= (tiempo)=>{

    //creamos un objeto del tipo Date
    let fecha = new Date(tiempo)

    //devuelve el dia 
    let dia = fecha.getDate()

    //devuelve el mes 
    let mes = fecha.getMonth()

    //vevuel la hora en todo su formatos
    let ano = fecha.getFullYear()
    let h = String(fecha.getHours()).padStart(2,'0')
    let m = String(fecha.getMinutes()).padStart(2,'0')
    let s = String(fecha.getSeconds()).padStart(2,'0')

    //cremos un array que contenga los meses de un año
    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
    ];


    //Devolvemos el dia del array del mes(un nombre) y todo el contenido de las horas 
    return(dia + " " + mesesNombres[mes] +   " - " + ano + " " + h + ":" + m + ":" + s);

}