//Librerias de chai
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { validaLogin } from "../src/js/funciones/validaLogin.js"


//Describe contiene la descripcion de lo que vamos a testear

//it contiene una descripción del testing y luego contiene un función arrow

//assert.equal compara argumentos que pongamos y produce un error si no son iguales


describe("Función validaLogin() ...", ()=>{
    it("si no introduce datos en formulario", ()=>{
        expect(validaLogin({nick:"",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        )
    })

    it("si el usuario no existe", ()=>{
        expect(validaLogin({nick:"ab",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        )
    })
})

it("si el usuario existe y la contraseña no coincide", ()=>{
    expect(validaLogin({nick:"carlos",pass:"1"}))
    .to.deep.equal(
        {
            error: true,
            missatge: "Contrasenya incorrecta"
        }
    )
})

it("Logeado con exito", ()=>{
    expect(validaLogin({nick:"carlos",pass:"1234"}))
    .to.deep.equal(
        {
            error: false,
            missatge: "Hola carlos"
        }
    )
})


