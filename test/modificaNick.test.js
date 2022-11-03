//Librerias de chai
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { modificaNick } from '../src/js/funciones/modificaNick.js';
should();  // Modifies `Object.prototype`

describe("Testing funcion modificaNick",()=>{
    it("Recibe ' Hola Maria ' y devuelbe 'HOLA_MARIA'",()=>{
        assert.equal(modificaNick(" Hola Maria "),"HOLA_MARIA")
    })

    it("Recibe 'Hola Maria' y devuelbe 'HOLA_MARIA'",()=>{
        assert.equal(modificaNick("Hola Maria"),"HOLA_MARIA")
    })

    it("Recibe 'Hola soy Maria' y devuelbe 'HOLA_SOY_MARIA'",()=>{
        assert.equal(modificaNick("Hola soy Maria"),"HOLA_SOY_MARIA")
    })
})