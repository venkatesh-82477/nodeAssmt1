const http = require("http");

const server = http.createServer(function(req,res){
    res.write("<h1>Hello world</h1>")//this is html format
    //res.write({message:"this is json format"})
    res.end();
})
server.listen(5500,function(){
    console.log("server is started at port 5500");
})