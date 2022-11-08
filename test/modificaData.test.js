//Librerias de chai
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { modificaData } from "../src/js/funciones/modificaData.js"


//Describe contiene la descripcion de lo que vamos a testear

//it contiene una descripción del testing y luego contiene un función arrow

//assert.equal compara argumentos que pongamos y produce un error si no son iguales

//Le pasamos un  objeto de tipo date pero devolviendolo de diferentes formatos


describe("Función modificaData", ()=>{
    it("Recibe un objeto con fecha 2022-10-26 y devuelve: 26 Octubre 2022", ()=>{
        assert.equal(modificaData(new Date('2022-10-26 00:00:00')), '26 Octubre - 2022 00:00:00')
    })

    it("Recibe un objeto con fecha 2022-1-26 y devuelve: 26 Enero 2022", ()=>{
        assert.equal(modificaData(new Date('2022-1-26 00:00:00')), '26 Enero - 2022 00:00:00')
    })
})

