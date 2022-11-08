//Librerias de chai
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { Edat } from "../src/js/funciones/edat.js"
should();  // Modifies `Object.prototype`

//Describe contiene la descripcion de lo que vamos a testear

//it contiene una descripción del testing y luego contiene un función arrow

//assert.equal compara argumentos que pongamos y produce un error si no son iguales


describe("Función edat", ()=>{
    it("Recibe la fecha de nacimiento en formato texto (2022/10/26 00:00:00) y devuelve la edad de la persona (49)", ()=>{
        assert.equal(Edat('1973/04/13 00:00:00'),49)
    })

    it("Recibe la fecha de nacimiento en formato texto (2022/10/26 00:00:00) y devuelve la edad de la persona (22)", ()=>{
        assert.equal(Edat('2000/04/13 00:00:00'),22)
    })

    it("Recibe la fecha de nacimiento en formato texto (13/04/2000) y devuelve un mensaje de error", ()=>{
        expect(Edat('13/04/2000')).to.deep.equal(
            {
                error:true,
                missatge: "El format no es correcte"
            }
        )
    })
})