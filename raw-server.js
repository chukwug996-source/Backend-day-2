//import {add, subtract} from './math.js';
//console.log(add(4,5));
//const math = require('./math.js');
//console.log(math.add(4,5));

const http = require('http');
const server = http.createServer((req, res) =>{
  if (req.method === 'GET' && req.url=== '/'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello from my first server');
  }
  else{
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end('Not Found: ()');
  }
});
const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Raw server running on http://localhost:${PORT}`);
})