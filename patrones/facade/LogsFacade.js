/**
 * Fachada para los Logs
 * 
 * Esta fachada ejecutará todo el código complejo en orden, de simplicar toda la 
 * lógica fuerte en una sola.
 * 
 */
class LogsFacade{

  constructor( logsInstance ) {
    this._logs = logsInstance;
  }
  
  write( message ){
    if( this._logs.checkPermissions() && this._logs.checkExistFolder() ){
      this._logs.generateLogName();
      this._logs.write( message );
    }
  }
}

module.exports = LogsFacade;