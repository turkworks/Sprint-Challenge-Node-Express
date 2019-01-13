const express = require('express');
const sqlite3 = require('sqlite3');

const doubler = require('../common/doublerMiddleware.js')
const configureMiddleware = require('../config/middleware.js')
const productsRouter = require('../products/productsRouter.js')
const clientsRouter = require('../clients/clientsRouter.js')

const server = express();




configureMiddleware(server);
// server.use(sqlite3);
// server.use(doubler);


server.use('/products', productsRouter)
server.use('/clients',clientsRouter)


server.get('/',  (req, res) => {
    res.send(`sanity check success`);
})






server.get('/double', doubler, (req, res) => {
    res.send(`The value is ${req.query.number} and the double is ${req.double}`);
})



module.exports = server;

