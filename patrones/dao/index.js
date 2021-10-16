/**
 * 
 * Patrón Data Access Object (DAO)
 * 
 * Es un patrón que entrega una capa de abstracción sobre un tipo de base de datos o algún mecanismo de persistencia.
 * 
 * Mapea las llamadas de la aplicación en una capa de persistencia, provee de alguna información específica para efectuar algunas operaciones de la base de datos.
 * 
 * Permite acceder a una BD sin exponer los detalles de la misma.
 * 
 */

const MySQLDAO = require('./MySQLDAO');

let MySQLDAOInstance = new MySQLDAO(); // Connection Stablished

let query = MySQLDAOInstance.findAll('users');

console.log( query );