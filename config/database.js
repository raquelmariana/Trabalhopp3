const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
    dialectOptions: {
        useUTC: false
    }
})

sequelize.query('PRAGMA foreign_keys = OFF');

module.exports = sequelize;