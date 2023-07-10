const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter');


const app = express();

app.use(express.json({ limit:'10mb' }));  //El middleware express.json() analizará automáticamente el cuerpo de la solicitud si está en formato JSON y lo convertirá en un objeto JavaScript accesible a través de req.body
app.use(express.urlencoded({ limit:'10mb', extended:true }))  //Mientras tanto, el middleware express.urlencoded() analizará el cuerpo de la solicitud si está en formato URL codificada y lo convertirá en un objeto JavaScript accesible a través de req.body.
app.use(cookieParser());
app.use(morgan('combined'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', mainRouter)

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars   //middleware de manejo de errores 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = app;