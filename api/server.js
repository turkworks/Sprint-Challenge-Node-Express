const express = require('express');
const sqlite3 = require('sqlite3');

const doubler = require('../common/doublerMiddleware.js')
const configureMiddleware = require('../config/middleware.js')
const projectsRouter = require('../projects/projectsRouter.js')
const actionsRouter = require('../actions/actionsRouter.js')

const server = express();




configureMiddleware(server);
// server.use(sqlite3);
// server.use(doubler);


server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)


server.get('/',  (req, res) => {
    res.send(`sanity check success`);
})






server.get('/double', doubler, (req, res) => {
    res.send(`The value is ${req.query.number} and the double is ${req.double}`);
})



module.exports = server;

