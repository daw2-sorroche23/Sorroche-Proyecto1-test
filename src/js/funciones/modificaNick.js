
export const modificaNick = (nick)=>{

    //Quitamos los espacios delante y detras del nombre

    let nombre=nick.trim()

    //Subtituimos los espacion en blacon por una "_"

    //Con el toUpperCase da igual como lo escriba que simpre lo pondra en mayusculas

    let nombreSinEpacios = nombre.replaceAll(" ","_").toUpperCase()

    //Lo devolvemos

    return(nombreSinEpacios)

}