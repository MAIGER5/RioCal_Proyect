const {json} = require('sequelize')

const getFormHandler = (req, res) =>{
    try {
        res.status(200).json("RUTA BUENA")
    } catch (error) {
        res.status(404).json("error en la ruta status 404")
    }
}

module.exports = getFormHandler