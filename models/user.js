const sequelize = require('sequelize');
const db = require('../functions/controllers/db');

const User = db.define('wppbot', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: sequelize.STRING,
        allowNull: false
    },
    mensagem: {
        type: sequelize.STRING,
        allowNull: false
    },
    usuario: {
        type: sequelize.STRING,
        allowNull: false
    }
});

// criar tabela caso não exista

User.sync(
    // { alter: true }
);

module.exports = User;