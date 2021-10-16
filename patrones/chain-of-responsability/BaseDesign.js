/**
 * 
 * Base Class
 * Será la general y seteará las otras que heredarán sus métodos.
 * 
 */
class BaseDesign {
  setNext( next ){
    this._next = next;
  }
  next( role ){
    if( this._next ) return this._next.run( role );
    return `There are not Design for the role ${ role }`;
  }
}

module.exports = BaseDesign;