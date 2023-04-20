const express = require('express');
const mainRoute= require('./routes/main')

const server = express();

server.set('view engine','ejs');
server.set('views',__dirname + '/views');

server.use('/',mainRoute)

server.listen(3000)