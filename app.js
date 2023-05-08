const express = require('express');
const mainRoute= require('./routes/main');
const gitRoute = require('./routes/git')
const server = express();
server.set('view engine','ejs');
server.set('views',__dirname + '/views');
server.use(express.static(__dirname +'/public'));

const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.post('/123', (req, res) => {
    const { text } = req.body;
    res.send(text);
});
  

server.use('/',mainRoute)
server.listen(3000)