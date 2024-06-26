const http = require('http');
const PORT = process.env.PORT || 8080;
const fs = require('fs');

const file_data = fs.readFileSync('./data.json', 'utf-8');
console.log(file_data);

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/api'){
        res.writeHead(200, {'Content-type': 'application/json'});
        return res.end(file_data);
    }
    res.writeHead(200, { 'Content-type': 'text/plain'});
    res.end('hello in first node ');
});

server.listen(PORT, () => console.log('server run at :', PORT));