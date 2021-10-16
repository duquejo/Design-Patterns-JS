/**
 * 
 * Inherit BaseDesign class
 */
const BaseDesign = require('./BaseDesign');

class DesignTwo extends BaseDesign{

  run( role ){

    if( this.isMyResponsability( role ) ){
      // Complex logic
      return "Design Two";
    }
    return this.next(role);
  }

  // Complex logic
  isMyResponsability( role ){
    return role == 2;
  }
}

module.exports = DesignTwo;