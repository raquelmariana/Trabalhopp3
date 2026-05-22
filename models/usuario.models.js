const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_completo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email_institucional: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    matricula: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    tipo_usuario: {
        type: DataTypes.ENUM('Discente', 'Docente', 'Servidor'),
        allowNull: false
    },
    data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
   
    tableName: 'usuario', 
    timestamps: false    
});

module.exports = Usuario;