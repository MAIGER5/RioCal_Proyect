const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Poducts", {
        idProducts: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        benefits: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        formul: {
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