export const Edat = (fecha)=>{

    //Creamos un nuevo objeto del tipo date  
    let nacimiento=new Date(fecha)

    if(isNaN(nacimiento)){
        return(
            {
                error:true,
                missatge: "El format no es correcte"
            }
        )
    }

    //Miramos el valor que tiene asignado la variable que hemos creado (Strin ,Int....)
    console.log(typeof nacimiento)

    //Lo mostramos por consola
    console.log(nacimiento)

    let today = new Date()
    let edad = today.getFullYear() - nacimiento.getFullYear()
    let diferencia = today.getMonth() - nacimiento.getMonth()

    //Restamos la diferencia del mes si es negativa te restara un año porque si no te contaria este aunque no los hallas cumplido
    if (diferencia < 0 ||(diferencia === 0 && today.getDate() < nacimiento.getDate())
    ) {
        edad --
    }

    //Lo devolvemos 
    return (edad)
}
