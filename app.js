
const express = require('express');
const mainRoute= require('./routes/main');
const gitRoute = require('./routes/git')
const server = express();
server.set('view engine','ejs');
server.set('views',__dirname + '/views');
server.use(express.static(__dirname +'/public'));

const bodyParser = require('body-parser');

server.use(bodyParser.json());

const mongoose = require ('mongoose')
const connect = mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const {Schema} = mongoose
    
const schema = new Schema({
  name: {type:String},
  surname:{type:String},
  birthday:{type:Date}
})
const UserModel = mongoose.model('users', schema); 



const data = { 
  name: 'Oleg',
  surname:'olegov',
  birthday: Date.now() 
}

UserModel.create(data)

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

server.get('/users', (req, res) => {
  UserModel.find().then((data) => { 
    res.send(data);
  }).catch((err) => {
    console.log(err);
  });
});

server.use('/', mainRoute);
server.use('/git', gitRoute);

server.listen(3000, () => {
    console.log('Server started on port 3000');
});