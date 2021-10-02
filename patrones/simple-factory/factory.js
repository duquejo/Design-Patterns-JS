/**
 * 
 * Mi factory
 * Será la unica clase con la capacidad de generar las otras.
 * 
 */
const Cart = require("./cart");

class CartFactory {
  static make(){
    return new Cart();
  }
}

module.exports = CartFactory;