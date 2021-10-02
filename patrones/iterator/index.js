/**
 * 
 * Patrón Iterador
 * 
 * El tomará la responsabilidad de acceder a estructuras de datos complejas
 * 
 * La clase iteradora define como se accederá al estado de los elementos.
 * 
 * Fue pensado para trabajar sobre listas complejas. (Árboles, recorridos complejos, etc...)
 */

/**
 * Ejemplo de una lista simple.
 * 
 * @problema Al recorrerla en multiples lugares, tendremos que hacerlo 
 * siempre el cual al añadir nuevas funcionalidades podría hacerla difícil de
 * sostener.
 *  
 */
// const list = [0,2,3,5,6,7,10,3,5,7];
// list.forEach( item => {
//   console.log( item );
// });

/**
 * La clase Logs será muy compleja, tendremos que recorrerla
 */
const Logs = require("./Logs");

const logs = new Logs();
logs.fetchData();

console.log( `Data before iterations ${ logs.allLogs }`);
while( logs.hasNext() ){
  let currentLog = logs.next();

  // TODO: Complex logic here...
  console.log( currentLog );
}