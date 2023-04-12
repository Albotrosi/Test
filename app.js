const http = require ('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('HI');
    }
    else if(req.url === '/1'){
        res.end('HELO');
    }
    else if(req.url === '/2'){
        res.end('PRIVET');
    }
    else if(req.url === '/3'){
        res.end('GUTEN TAG');
    }

    else{
        res.end('404');
    }
});

server.listen(3000);
console.log('RUN!!')