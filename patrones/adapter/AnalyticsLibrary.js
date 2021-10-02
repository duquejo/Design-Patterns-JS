/**
 * Core Analytics Super Complex Library
 * 
 * @solución #1 - Añadir más lógica compleja a los métodos de la clase para 
 * resolver el problema.
 *  
 * @incorrecto No deberíamos recargar la clase de más responsabilidades
 */
class AnalyticsLibrary{
  process( data ){
    this.validateData( data );

    // TODO: Complex operations here
  }
  validateData( data ){
    if( data.includes( 'xml' ) ){
      console.log('valid data');
    } else {
      console.log('invalid data');
    }
  }
}

module.exports = AnalyticsLibrary;