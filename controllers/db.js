const Sequelize = require('sequelize');

const sequelize = new Sequelize("kadoia", "kadoia", "kadoia", {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados foi ok");
  }).catch(() => {
    console.log("Sem sucesso na requisição");
  })

module.exports = sequelize;
