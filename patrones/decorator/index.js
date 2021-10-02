/**
 * 
 * Patrón decorador
 * 
 * Nos ofrece la habilidad de cambiar el comportamiento a 
 * clases existentes de una forma dinámica.
 * 
 * Se aplica sobre algo que ya funciona.
 * 
 * El decorador por si solo no será esencial para el funcionamiento de la clase.
 * 
 */
const Product = require("./product");
const ProductInternational = require("./internationalProduct");

const car = new Product( 'Hot Wheels Car' );
const internationalCar = new ProductInternational( car );

console.log( `\nOriginal ${ car.getName() } (${ car.getDescription() }) product ${ car.getPrice() }\nInternational ${ internationalCar.getName() } (${ internationalCar.getDescription() }) product ${ internationalCar.getPrice() }\n` );

/**
 * Puedo cambiar la característica del producto al instante.
 */

let barbie = new Product( 'barbie' );
barbie = new ProductInternational( barbie ) // Overrides them

console.log( `Original ${ barbie.getName() } (${ barbie.getDescription() }) product ${ barbie.getPrice() }` );