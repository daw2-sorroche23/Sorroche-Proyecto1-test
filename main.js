
import { edad, Edat } from "./src/js/funciones/edat.js"
import { modificaNick } from "./src/js/funciones/modificaNick.js"
import { saludar } from "./src/js/funciones/saludar.js"

document.querySelector('#app').innerHTML = `
  <div>
    <h1>${saludar("Zeus")}</h1>
    <h1>${modificaNick("Hola Maria")}</h1>
    <h1>${Edat("1973/04/13 00:00:00")}</h1>
  </div>
`

