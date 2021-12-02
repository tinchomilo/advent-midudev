/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que su nombre contenga las letras n y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]
Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
*/

// En este ejercicio no puedo utilizar map ya que no estoy modificando los valores, si lo utilizo en los objetos que no matcheen con los datos buscados, me arroja undefined. ej:
// [{ undefined }, { undefined }, { name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }]


// Solución 1
function contarOvejas(ovejas) {
    // aquí tu magia
    let newOvejas = ovejas.filter( (elem) => {
        if(elem.name.toLocaleLowerCase().includes('na')  && elem.color === 'rojo') {
            return elem            
        }        
    })
    return newOvejas
}

// Solución 2
// function contarOvejas(ovejas) {
//     // aquí tu magia
//     return ovejas.filter( (elem) => {
//         return elem.name.toLocaleLowerCase().includes('na') && elem.color === 'rojo'
//     })
// }

// Solución 3
// function contarOvejas(ovejas) {
//     // aquí tu magia
//     let lista = []
//     ovejas.map( (elem) => {
//         if( elem.name.toLowerCase().includes('na') && elem.color === 'rojo' ) {
//             lista.push(elem)
//         }
//     })
//     return lista
// }