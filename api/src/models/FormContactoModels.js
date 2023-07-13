const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("FormContacto", {
        idContacto: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        compañia: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mensaje: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}