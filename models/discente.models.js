const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model'); 

const Discente = sequelize.define('discente', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        references: {
            model: Usuario, 
            key: 'id_usuario'
        },
        onDelete: 'CASCADE'
    },
    curso: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'discentes', 
    timestamps: false       
});


Usuario.hasOne(Discente, { foreignKey: 'id_usuario' });
Discente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Discente;