
export const modificaNick = (nick)=>{

    let nombre=nick.trim()

    let nombreSinEpacios = nombre.replaceAll(" ","_").toUpperCase()

    return(nombreSinEpacios)

}