const { DataTypes } = require('sequelize');

module.export = (sequelize) => {
    sequelize.define("ServicosExtrem", {
        idServicios: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        },
        nomnre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subtitle1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle6: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion6: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}