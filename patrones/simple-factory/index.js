let CartFactory = require('./factory');

/**
 * Como es estático no necesito instanciarlo
 */
let cart = CartFactory.make();

cart.create();
cart.read();
cart.update();
cart.delete();