const { Router } = require("express");
const { json } = require('sequelize')
const AddFormController = require("../controllers/AddFormController");



const addFormHandler = async ( req, res ) => {

    const { nombres, apellidos, nacionalidad, industria, compania, areaRequerimiento, telefono, email, mensaje, consentimientoCorreo } = req.body;

    try {
        const response = await AddFormController(nombres, apellidos, nacionalidad,industria, compania, areaRequerimiento, telefono, email, mensaje, consentimientoCorreo);
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = addFormHandler;


// { 
//     "nombres":"MAIGER", 
//     "apellidos":"OVALLE", 
//     "nacionalidad":"COLOMBIA", 
//     "industria":"AGRICOLA", 
//     "compania":"MAIGER", 
//     "areaRequerimiento":"COMERCIAL", 
//     "telefono""3016404867", 
//     "email":"maiger5@gmail.com", 
//     "mensaje":"SIN NOVEDAD", 
//     "consentimientoCorreo":true 
// }