/**
 *
 * Clase generadora de Logs (Con múltiples clases) 
 * 
 */

class AdvancedLogsLibrary{
  constructor(){
    console.log("_constructor");
    return true;
  }

  checkPermissions(){
    console.log("_checkPermissions");
    return true;
  }

  checkExistFolder(){
    console.log("_checkExistFolder");
    return true;
  }

  generateLogName(){
    console.log("_generateLogName");
    return true;
  }

  write( message ){
    console.log('_write', message );
    return true;
  }
}

module.exports = AdvancedLogsLibrary;