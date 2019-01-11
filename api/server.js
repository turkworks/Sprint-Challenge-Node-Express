const express = require('express');
const morgan = require('morgan');

const server = express();



server.use(express.json());
server.use(morgan('short ')); 



server.get('/',  (req, res) => {
    res.send(`server is alive`);
})



module.exports = server;