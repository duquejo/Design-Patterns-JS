// const mysql =  require('mysql');

const mysql = {
  createConnection : () => {
    return {
      query: query => {
        // Complex query op
        return query;
      }
    }
  }
};

/**
 * Se le puede poner el patrón singleton para no permitir generar más conexiones.
 */

class MySQLDAO {

  constructor(){
    this.connection =  this.createConnection();
  }

  createConnection(){
    return mysql.createConnection({
      host: 'host.com',
      user: 'root',
      password: 'password'
    });
  }

  findAll( table ){
    return this.connection.query(`select * from ${ table }`);
  }
}

module.exports = MySQLDAO;