const { Router } = require('express');
const formRouter = require('./formRouter');
const getFormHandler = require('../handlers/getFormHandlers');
const addClienteHandler = require('../handlers/addClienteHandler');


const mainRouter = Router();


mainRouter.use('/cliente', addClienteHandler);
mainRouter.use('/form', formRouter);


module.exports = mainRouter;