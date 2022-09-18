var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
http.createServer((req, res) => {
  //Leemos el archivo para encontrar la imagen indicada
  fs.readFile(`${__dirname}/images/${req.url}.jpg`, (err, data) => {
    if(err) {
      //Respondemos con un error si no existe 
      res.writeHead(404, {"Content-type": "text/plain"});
      res.end("Hubo un error, el pero no existe");
    }else {
      //Respondemos enviado la imagen si se encuentra dentro del archivo
      res.writeHead(200, {"Content-type": "image/jpg"});  
      res.end(data);
    }
  });

}).listen(3000, "127.0.0.1"); //Estabeciendo el puerto y la IP por defecto de localhost.