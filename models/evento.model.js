const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');

const Evento = sequelize.define('evento', {
    id_evento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_evento: {
        type: DataTypes.DATEONLY, 
        allowNull: false
    },
    horario: {
        type: DataTypes.TIME, 
        allowNull: false
    },
    local: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    vagas_disponiveis: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    suporte_terceiros: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: DataTypes.ENUM('Pendente', 'Confirmado', 'Cancelado', 'Adiado'),
        defaultValue: 'Pendente'
    },
    id_organizador_principal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: Usuario, key: 'id_usuario' }
    }
}, { tableName: 'eventos', timestamps: false });

Usuario.hasMany(Evento, { foreignKey: 'id_organizador_principal' });
Evento.belongsTo(Usuario, { foreignKey: 'id_organizador_principal', as: 'Organizador' });

module.exports = Evento;