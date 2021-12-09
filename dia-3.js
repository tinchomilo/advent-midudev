/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...


"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

export default function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    let newLetter = letter.split(' ')
    let cont = 0

    for (let i = 0; i < newLetter.length; i++) {
        cont = 0
        for( let j = 0; j < newLetter[i].length; j++) {
            
            if( newLetter[i][j] === '('){
                cont +=1
            }
        }
        
        if( cont > 1 ){
            return false
        }

        if( newLetter[i].includes('{') || newLetter[i].includes(']') || newLetter[i].includes('[') || newLetter[i].includes(']') ) {
            return false
        }
     
        if( newLetter[i] === '()' || newLetter[i] === '(())' ) {
            return false
        }

        if( newLetter[i][0] === '(') {          
            if( newLetter[i].length <= 2 ) {
                return false
            } else if( !newLetter[i].includes(')') ) {
                return false
            }
        }
    }
    return true
}