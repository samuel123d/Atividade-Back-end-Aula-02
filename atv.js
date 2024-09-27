var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    switch(req.url){
        case '/':
            test(req,res);
            break;
            default:
            res.writeHead(404,{'Content-Type' : "text/json"})
            res.write(JSON.stringify({msg : "path não encontrado!"}))
            res.end() 
            break;
    } 


    
  }).listen(8080);  

  function test(req,res) {
    switch (req.method) {
        case 'GET':
          fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          });
          break;
        default:
          fs.readFile("404.html", function (err, data) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          });
          break;
      }
    console.log(req.method)
   
}
