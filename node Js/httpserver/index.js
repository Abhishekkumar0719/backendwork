const http = require("http")

const server = http.createServer((req, res) =>
{   
    if(req.url = "/")
    {
        res.end("this site is maintance")
    }else if(req.url="/about")
    {
        res.end("this site is about side");
    }
    else if(req.url="/place")
    {
        res.end("this site is place side");
    }
    
});



server.listen(8000,"127.0.0.1",() =>
{
    console.log("Listing to the port is 6000")
})