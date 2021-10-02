/**
 * 
 * Patrón Factory
 * 
 * Clase que nos ayuda a mantener toda la creación de objetos en un solo
 * lugar.
 * 
 * En este caso, por ejemplo, se conectará a una base de datos, por lo que 
 * requiere definir el constructor
 * 
 * @problema
 * Tendré que pasarme por cada uno de las instancias de la clase y tendré
 * que pasar cada parámetro del constructor, por lo que sería muy tedioso.
 * 
 * @paso #1 - Crear clase a generar.
 * @paso #2 - Generar fábrica simple, estática retornando instancia de #1.
 * @paso #3 - Adaptar nueva instancia en cada sección, en caso de requerir cambios, ir a fábrica.
 */

class Cart{

  constructor( database ){
    this._database = database;
  }

  create(){
    console.log('Create');
  }
  update(){
    console.log('Update');
  }
  delete(){
    console.log('Delete');
  }
  read(){
    console.log('Read');
  }
}

module.exports = Cart;