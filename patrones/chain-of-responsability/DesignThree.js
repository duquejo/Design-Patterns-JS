/**
 * 
 * Inherit BaseDesign class
 */
const BaseDesign = require('./BaseDesign');

class DesignThree extends BaseDesign{

  run( role ){

    if( this.isMyResponsability( role ) ){
      // Complex logic
      return "Design Three";
    }
    return this.next(role);
  }

  // Complex logic
  isMyResponsability( role ){
    return role == 3;
  }
}

module.exports = DesignThree;