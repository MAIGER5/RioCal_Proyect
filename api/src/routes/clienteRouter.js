const { Router } = require('express');
const addClienteHandler = require('../handlers/addClienteHandler');

const clienteRouter = Router();

clienteRouter.post('/', addClienteHandler )