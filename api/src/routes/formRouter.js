const { Router } = require('express');
const addFormHandler = require('../handlers/addFormHandler');


const formRouter = Router();

formRouter.post('/', addFormHandler);

module.exports = formRouter;