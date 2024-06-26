const http = require('http');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain'});
    res.end('hello in first node ');
});

server.listen(PORT, () => console.log('server run at :', PORT));