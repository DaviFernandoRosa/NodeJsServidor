const http = require('http');

http.createServer((request, response)=>{
  response.writeHead(200,{
      'content-Type':'text/plain'
});
  response.write('Resposta com sucesso!');
  response.end();
}).listen(1337);