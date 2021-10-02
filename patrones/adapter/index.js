/**
 * 
 * Patrón adaptador
 * 
 * Patrón de diseño estructural que le permite a los 
 * objetos interfaces incompatibles para colaborar entre sí
 * 
 * @problema Se está trabajando con una librería para procesas XML muy compleja
 * y la empresa decide empezar a recibir información vía XML.
 */
const AnalyticsLibrary = require("./AnalyticsLibrary");
const JsonReader = require("./JsonReader");
const JsonToXmlAdapter = require("./JsonToXmlAdapter");

/**
 * Comportamiento antiguo
 */
let oldDataToAnalyze = '<xml></xml>';

console.log('Old data way');
new AnalyticsLibrary().process( oldDataToAnalyze );

/**
 * 
 * Obteniendo nueva información JSON
 * 
 * let newDataToAnalyze = new JsonReader().read();
 * 
 * Acá se deben tomar soluciones. (Convertir JSON a XML antes de pasar a la librería)
 * Ver @solución #1 en clase AnalyticsLibrary.js
 * 
 * // Convert data logic..
 * new AnalyticsLibrary().process( newDataToAnalyze );
 */

/**
 * 
 * @solución #2 - Convertir función y pasarla a la data que necesitamos para
 * que nos la reciba la clase que la procesa.
 * 
 * @incorrecto - Dentro de la aplicación principal no deberíamos tener funciones 
 * adicionales, index solamente es para ejecución del problema.
 * 
 * @solución #3 - Pasar esta función a un archivo helpers.js y llamarlo externo
 * 
 * @incorrecto : No deberíamos complejizar más la aplicación, puede ser no sostenible
 * 
 * function convertJSONToXML( json ){
 *   return 'xml';
 * }
 * new AnalyticsLibrary().process( convertJSONToXML( newDataToAnalyze ) );
 * 
 */

/**
 * 
 * Implementando solución correcta con Patrón adaptador
 * 
 */
const newDataToAnalyze = new JsonReader();
const parsedData = new JsonToXmlAdapter( newDataToAnalyze ).read();

console.log('Processed data way');
new AnalyticsLibrary().process( parsedData );