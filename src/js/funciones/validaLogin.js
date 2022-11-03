import { dades } from "./dades.js"


export const validaLogin = (usuari)=>{
    
    /*Añadimos un contador para que cada vez que haya una concordancia con el nick compruebe la contrasenya*/
    let cont=0

    /*Guardamos en esta variable la posicion del nick donde son iguales en el array y el input del login de esta manaera si es diferente mostrara mensaje de error*/
    let num=0

    for(let indice=0;indice<dades.length;indice++){
        if(usuari.nick == dades[indice].nick){
            num=indice
            cont = cont + 1 
        }
    }

    /*Con este if si el nick es corecto añade uno al contador y pasa a comprovar la contrasenya*/

    if(cont==1){
        if(usuari.pass != dades[num].password){
            return{
                error: true,
                missatge: "Contrasenya incorrecta"
            }

        /*Si todo lo demas esta bien pondra un mensaje que se ha iniciado sesion con el usuario seleccionado*/

        }else{
            return{
                error: false,
                missatge: "Hola " + dades[num].nick 
            }
        }
    /*Si no entra en el contador significa que este no ha sumado y el usuario no existe*/
    }else{
        return{
            error:true,
            missatge: "Aquest usuari no existeix"
        }
    }

}