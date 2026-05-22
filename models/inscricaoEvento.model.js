const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');
const Evento = require('./evento.model');

const InscricaoEvento = sequelize.define('inscricaoEvento', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        references: { model: Usuario, key: 'id_usuario' }
    },
    id_evento: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        references: { model: Evento, key: 'id_evento' }
    },
    tipo_inscricao: {
        type: DataTypes.ENUM('Participante', 'Colaborador'),
        allowNull: false
    },
    justificativa_contribuicao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    presenca_confirmada: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { tableName: 'inscricoes_evento', timestamps: false });

Usuario.belongsToMany(Evento, { through: InscricaoEvento, foreignKey: 'id_usuario' });
Evento.belongsToMany(Usuario, { through: InscricaoEvento, foreignKey: 'id_evento' });

module.exports = InscricaoEvento;