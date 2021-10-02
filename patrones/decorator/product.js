class Product{
  constructor( name ){
    this._name = name;
  }

  getPrice(){
    return 10;
  }
  getName(){
    return this._name;
  }
  getDescription(){
    return `This is a ${ this._name } toy`;
  }
}

module.exports = Product;