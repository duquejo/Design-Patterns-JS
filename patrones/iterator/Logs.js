/**
 * 
 * Clase con lógica compleja de recorrido
 * 
 */
class Logs{

  constructor(){
    this._data = [];
    this._currentPointer = 0;
  }

  fetchData(){
    this._data = [1,4,2,5];
  }

  next(){
    let current = this._data[ this._currentPointer ];
    this._currentPointer++;
    return current;
  }

  hasNext(){
    return this._data[ this._currentPointer ];
  }

  /**
   * Getter logs method
   */
  get allLogs(){
    return this._data;
  }
}

module.exports = Logs;