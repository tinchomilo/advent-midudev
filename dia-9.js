/*
En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Nos trae un montón de ejemplos:

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
*/

export default function groupBy(collection, it) {
    let result = {}
      switch (typeof collection[0]) {
          case 'number':
              collection.forEach( elem => {
                  if( !result.hasOwnProperty(it(elem)) ){
                      result[it(elem)] = [elem]
                  } else {
                      result[it(elem)].push(elem)
                  }
              });
              break;
  
          case 'string':
              collection.forEach( elem => {
                  if( !result.hasOwnProperty(elem.length) ){
                      result[elem.length] = [elem]
                  } else {
                      result[elem.length].push(elem)
                  }
              })
              break;
  
          case 'object':
              collection.forEach( elem => {
                  if( !result.hasOwnProperty(it) ){
                      result[elem[it]] = [elem]
                  } else {
                      result[elem].push(elem)
                  }
              })
              break;
      }
      return result
  }