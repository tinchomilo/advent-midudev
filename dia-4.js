/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  if( height < 1 || height > 100 ){
      return false
  }

  let arbol = [1]
  let obj = {}
  let i = 0
  let base = ''
  let copa = ''
  let lineas = ''
  let guiones = ''
  let ateriscos = ''
  let aux = 0
  
  while( arbol.length != height)  {
      if( i % 2 !== 0){
          arbol.push( i + 2 )
      }
      i++
  }
       
  for (let i = 0; i < arbol.length; i++) {
      aux = arbol[arbol.length -1 ] - arbol[i] 
      if( aux !== 0){
          for (let j = 0; j < aux; j++) {                
              lineas += '_'
          }       
      } 
      for (let k = 0; k < arbol[i]; k++) {
          lineas += '*'            
      }
      obj[arbol[i]] = lineas

      lineas = ''     
  }
  
  for( let clave in obj ) {
      guiones = obj[clave].split('').filter( elem => elem === '_')
      ateriscos = obj[clave].split('').filter( elem => elem === '*').join('')
      guiones.splice(guiones.length/2, 0, ateriscos ).join('')
      obj[clave] = guiones.join('')
      copa += obj[clave] + '\n'
  }

  for( let i = 0; i < arbol[arbol.length -1]; i++ ) {        
      if( i === Math.floor( arbol[arbol.length -1 ] / 2 ) ) {
          base += '#'
      } else {
          base +='_' 
      }
  }
  base = base + '\n' + base

  return copa + base
}