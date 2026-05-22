const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const usuario = siquelize.define('usuario',{

    id_usuario:{
        type: DataTypes.integer,
        allownull:false,
    }






   id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    email_institucional VARCHAR(255) UNIQUE NOT NULL,
    matricula VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Discente', 'Docente', 'Servidor') NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP



})
