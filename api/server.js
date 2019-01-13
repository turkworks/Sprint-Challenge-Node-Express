const express = require('express');
const sqlite3 = require('sqlite3');

const custom = require('../common/customMiddleware.js')
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
    res.send(`please type in /projects or /actions to see data`);
})






server.get('/custom', custom, (req, res) => {
    res.send(`The value is ${req.query.number} and the double is ${req.double}`);
})



module.exports = server;

