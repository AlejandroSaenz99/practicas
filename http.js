const http= require('http');
const hostname = '192.168.88.103';
const port=3000;
const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

server.listen(port, hostname, ()=> {
    console.log('El servidor se esta ejecutando en http://192.168.88.103:3000/');
});