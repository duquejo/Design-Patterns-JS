/**
 * 
 * Patrón Singleton
 * 
 * Utilizado en BD o logs, donde hay fuente de datos o 
 * información, la clase habilita una sola instancia y permite
 * reutilizar la misma sin tener que volver a crear otra.
 * 
 * 
 * Sin importar la cantidad de instancias, siempre obtendré la primera
 * instancia.
 */


let logsInstance;

class Logs {
  constructor(data){

    /**
     * Logsinstance guardará solo la instancia.
     * Solo seteo la primera vez la info
     */
    if( ! logsInstance ){
      logsInstance = this;
      this._data = data;
    } else {
      return logsInstance;
    }
  }
  get data() {
    return this._data;
  }
}

let logger1 = new Logs('Hello1');
let logger2 = new Logs('Hello2');
let logger3 = new Logs('Hello3');
let logger4 = new Logs('Hello4');
let logger5 = new Logs('Hello5');
let logger6 = new Logs('Hello6');

console.log( logger1.data );
console.log( logger2.data );
console.log( logger3.data );
console.log( logger4.data );
console.log( logger5.data );
console.log( logger6.data );