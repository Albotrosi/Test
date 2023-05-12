const express = require('express');
const mainRoute= require('./routes/main');
const gitRoute = require('./routes/git')
const server = express();
server.set('view engine','ejs');
server.set('views',__dirname + '/views');
server.use(express.static(__dirname +'/public'));

const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.get('/api/content', function(req, res) {
    // Получаем параметры фильтрации из запроса
    const category = req.query.category || '';
    const minPrice = req.query.min_price || 0;
    const maxPrice = req.query.max_price || Infinity;
    const inStock = req.query.in_stock === 'true';
  
    // Выполняем фильтрацию контента и возвращаем результаты
    const filteredContent = content.filter(function(item) {
      return item.category.includes(category) &&
             item.price >= minPrice &&
             item.price <= maxPrice &&
             (inStock ? item.in_stock : true);
    });
    res.send(filteredContent);
  });
  

server.use('/',mainRoute)
server.listen(3000)