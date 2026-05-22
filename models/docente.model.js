const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');

const Docente = sequelize.define('docente', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: Usuario, key: 'id_usuario' },
        onDelete: 'CASCADE'
    },
    formacao: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, { tableName: 'docentes', timestamps: false });

Usuario.hasOne(Docente, { foreignKey: 'id_usuario' });
Docente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Docente;