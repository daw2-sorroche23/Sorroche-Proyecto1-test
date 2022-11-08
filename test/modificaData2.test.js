import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { modificaData2 } from "../src/js/funciones/modificaData2.js"


//Describe contiene la descripcion de lo que vamos a testear

//it contiene una descripción del testing y luego contiene un función arrow

//assert.equal compara argumentos que pongamos y produce un error si no son iguales

//Le pasamos un  objeto de tipo date pero devolviendolo de diferentes formatos


describe("Función modificaData2", ()=>{
    it("Recibe un objeto con fecha 2022-10-26 y devuelve: 2022/10/26 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-10-26 00:00:00')), '2022/10/26 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-26 y devuelve: 2022/01/26 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-01-26 00:00:00')), '2022/01/26 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-6 y devuelve: 2022/01/06 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-01-6 00:00:00')), '2022/01/06 00:00:00')
    })
})

