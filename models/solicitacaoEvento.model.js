const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./evento.model');
const Usuario = require('./usuario.model');

const SolicitacaoEvento = sequelize.define('solicitacaoEvento', {
    id_solicitacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_evento: {
        type: DataTypes.INTEGER,
        references: { model: Evento, key: 'id_evento' }
    },
    id_discente: {
        type: DataTypes.INTEGER,
        references: { model: Usuario, key: 'id_usuario' }
    },
    id_avaliador: {
        type: DataTypes.INTEGER,
        references: { model: Usuario, key: 'id_usuario' }
    },
    status_solicitacao: {
        type: DataTypes.ENUM('Pendente', 'Aceito', 'Recusado'),
        defaultValue: 'Pendente'
    },
    motivo_recusa: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    data_solicitacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'solicitacoes_evento', timestamps: false });

// Relações
Evento.hasMany(SolicitacaoEvento, { foreignKey: 'id_evento' });
SolicitacaoEvento.belongsTo(Evento, { foreignKey: 'id_evento' });

Usuario.hasMany(SolicitacaoEvento, { foreignKey: 'id_discente', as: 'DiscenteSolicitante' });
Usuario.hasMany(SolicitacaoEvento, { foreignKey: 'id_avaliador', as: 'Avaliador' });

SolicitacaoEvento.belongsTo(Usuario, { foreignKey: 'id_discente', as: 'Discente' });
SolicitacaoEvento.belongsTo(Usuario, { foreignKey: 'id_avaliador', as: 'Avaliador' });

module.exports = SolicitacaoEvento;