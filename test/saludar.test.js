//Librerias de chai
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

import { saludar } from '../src/js/funciones/saludar.js';

describe("Testing funcion saludar",()=>{
    it("Si el valor que añadimos es Zeus devolvera Hola Zeus",()=>{
        assert.equal(saludar('Zeus'), "Hola Zeus")
    })
})