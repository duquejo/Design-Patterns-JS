/**
 * Este decorador agregará funcionalidades al
 * producto original.
 * 
 * Utilizará las funciones del que decorará.
 * 
 * 
 */
class ProductInternational{
  constructor( product ){
    this._product = product;
  }
  getPrice(){
    return this._product.getPrice() + 50;
  }
  getName(){
    return this.translate( this._product.getName() );
  }
  getDescription(){
    return this._product.getDescription() + ' Español';
  }
  translate(){
    return this._product.getName() + ' Spanish';
  }
}

module.exports = ProductInternational;