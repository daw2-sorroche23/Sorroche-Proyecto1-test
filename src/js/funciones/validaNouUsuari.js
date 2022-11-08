import { dades } from "./dades.js"

export const validaNouUsuari = (usuari)=>{

    const dadesUsuari = []

    dadesUsuari.nick=usuari.nick
    dadesUsuari.pass=usuari.pass

    //Llamamos el largo del nombre y mostramos el mensaje si  cunple los valores del if
    if(dadesUsuari.nick.length<3 || dadesUsuari.nick.length>10){
        return{
            error:true,
            missatge: "El nick no és correcte"
        }
    }


    //Hacemos un bucle que llama el nick de el array dades para comprobra si el que usuario ponga esta repetido
    for(let indice=0;indice<dades.length;indice++){
        if(dadesUsuari.nick == dades[indice].nick){
            return{
                error: true,
                missatge: "Aquest usuari ja existeix"
            }
        }
    }

    
    //Lo mismo que con el nick pero con la password
    if(dadesUsuari.pass.length<3 || dadesUsuari.pass.length>10){
        return{
            error:true,
            missatge:"La contrasenya no és correcte"
        }

    //Hacemos un else en el utimo if ya que si hemos llegado hasta aqui los demas paramatros han sido correctos i mandamos un mensage que esta bien 
    }else{
        return{
            error:false,
            missatge:"L’usuari amb nick: " + dadesUsuari.nick + " s’ha creat correctament"
        }
    }

}