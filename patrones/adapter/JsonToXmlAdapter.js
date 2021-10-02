/**
 * 
 * @nota Debe tener un método con el mismo nombre del que
 * se va a adaptar
 * 
 */
class JsonToXmlAdapter{
  
  /**
   * ¡Tener en cuenta!
   * @param {class} JsonReader Objeto de la clase que se adaptará
   */
  constructor( reader ){
    this._reader = reader;
  }

  read(){
    const data = this._reader.read();

    // TODO: Complex logic for JSON Convertion
    return '<xml></xml>';
  }
}

module.exports = JsonToXmlAdapter;