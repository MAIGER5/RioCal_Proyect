require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME
  } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, 
    native: false,
});

const basename = path.basename(__filename);


async function testPostgreSQLConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Resto de la lógica de tu aplicación
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
 
testPostgreSQLConnection();