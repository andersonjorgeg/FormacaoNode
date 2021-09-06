let http = require('http');

http.createServer((req, res) => {
  res.end("<h1>Bem vindo ao site</h1>")
}).listen(3000)
console.log('servidor está rodando')