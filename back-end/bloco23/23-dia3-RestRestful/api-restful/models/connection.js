module.exports = require('mysql2/promise').createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'password',
  database: 'rest_aula',

});