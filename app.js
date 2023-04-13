let http = require('http');
let server = http.createServer( function(req, res){
    // req . url и путь к файлу у вас может быть другим
    if( req . res === '/index.html'){// отдаем html
      res.writeHead(200, {
          'Content-Type':'index.html; charset=utf-8',
      });
      let myReadShort = fs.createReadStream(__dirname + '/H.C.html','utf-8');
      myReadShort.pipe(res);
    } else if( req . url === '/style.css'){// отдаем css
      res.writeHead(200, {
          'Content-Type':'text/css; charset=utf-8',
      });
      let myReadShort = fs.createReadStream(__dirname + '/style.css','utf-8');
      myReadShort.pipe(res);
    } else { // отдаем ошибку
      res.writeHead(404, {
          'Content-Length':'0',
      });
    }
  });
console.log('aaaaa');
server.listen(3000)