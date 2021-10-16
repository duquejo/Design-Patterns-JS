/**
 * 
 * Patrón Cadena de Responsabilidad
 * 
 * Patrón de comportamiento que permite pasar peticiones a través de 
 * una cadena de disparardores o capturadores.
 * 
 * Debe pasar por todos los pasos hasta llegar al último y se devuelve hasta el primero.
 * 
 * Funciona para casos donde hay diferentes métodos de manejar un caso, por ejemplo si tuvera diferentes métodos de manejar
 * el envío de un caso o producto, donde se tienen funcionalidades diferentes con un objetivo común, por ejemplo: Un código de rastreo que se debe pasar por diferentes proveedores
 * hasta que se encuentre la empresa que realmente tiene la responsablidad sobre el mismo.
 * 
 */

// Cada uno tiene una responsabilidad en la aplicación.
const DesignOne = require('./DesignOne');
const DesignTwo = require('./DesignTwo');
const DesignThree = require('./DesignThree');

const designOne = new DesignOne();
const designTwo = new DesignTwo();
const designThree = new DesignThree();

designTwo.setNext(designThree);
designOne.setNext(designTwo);

let role = 4;
const finalDesign = designOne.run(role);


// Complex logic...
console.log( finalDesign );