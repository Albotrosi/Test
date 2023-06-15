
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

const Schema = mongoose.Schema;


const bookSchema = new Schema({
  title: String,
  year: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
});


const authorSchema = new Schema({
  name: String,
  age: Number,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);


const run = async () => {
  const result = await Author
  .findById ('648b3352d9b34f8e3d835f88')
  .populate ('books')
  console.log('result:',result)
}
run ();
server.use('/', mainRoute);
server.use('/git', gitRoute);

server.listen(3000, () => {
    console.log('Server started on port 3000');
});