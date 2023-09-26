const { FormContacto } = require('../db')

const AddFormController = async ( nombres, apellidos, nacionalidad,industria, compania, areaRequerimiento, telefono, email, mensaje, consentimientoCorreo ) => {
  const formNew = await FormContacto.create({ nombres, apellidos, nacionalidad,industria, compania, areaRequerimiento, telefono, email, mensaje, consentimientoCorreo })
}


module.exports = AddFormController;