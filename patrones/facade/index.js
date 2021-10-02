/**
 * 
 * Patrón Facade (Fachada)
 * 
 * Permite evitar el tema de tener que leer una documentación basta de un proyecto
 * grande (API o librería.)
 * Reduce el acoplamiento y la ley de "Demeter", (Permitir acceder directamente a clases
 * internas o relacionadas )
 * 
 * 
 * Note que debe seguirse un paso a paso para llegar a un resultado, el
 * cual debe obligar al programador a tener memoria de ello
 * 
 * const logs = new AdvancedLogsLibrary();
 * if ( logs.checkPermissions() && logs.checkExistFolder() ){
 *  logs.generateLogName();
 *  logs.write( message );
 * }
 *
 */

const AdvancedLogsLibrary = require('./AdvancedLogsLibrary');

/**
 * La fachada simplifica el uso de todas estas funciones complejas en una sola.
 */
const LogsFacade = require('./LogsFacade');

const logsFacade = new LogsFacade(  new AdvancedLogsLibrary() );
logsFacade.write( 'My message' );