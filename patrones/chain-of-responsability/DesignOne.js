/**
 * 
 * Inherit BaseDesign class
 */
const BaseDesign = require('./BaseDesign');

class DesignOne extends BaseDesign{

  run( role ){

    if( this.isMyResponsability( role ) ){
      // Complex logic
      return "Design One";
    }
    return this.next(role);
  }

  // Complex logic
  isMyResponsability( role ){
    return role == 1;
  }
}

module.exports = DesignOne;