const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Products", {
        idProducto: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        beneficios: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        formulaQuimica: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        usoDescriptivo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        usoDetallado: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        especDescriptiva: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        especDetallada: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        mercado: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
        
    })
}