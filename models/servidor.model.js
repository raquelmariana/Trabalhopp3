const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');

const Servidor = sequelize.define('servidor', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: Usuario, key: 'id_usuario' },
        onDelete: 'CASCADE'
    },
    funcao: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, { tableName: 'servidores', timestamps: false });

Usuario.hasOne(Servidor, { foreignKey: 'id_usuario' });
Servidor.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Servidor;