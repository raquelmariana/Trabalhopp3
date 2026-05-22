const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');

const Notificacao = sequelize.define('notificacao', {
    id_notificacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: { model: Usuario, key: 'id_usuario' }
    },
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    lida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { tableName: 'notificacoes', timestamps: false });

Usuario.hasMany(Notificacao, { foreignKey: 'id_usuario' });
Notificacao.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Notificacao;