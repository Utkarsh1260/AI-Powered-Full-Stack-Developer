let http=require("http");

let server=http.createServer((req, res)=>{
    console.log("Hello Its Server");
    res.end("Ok I have heard");
});


server.listen(3000,()=>{
    console.log("Server has started on port 3000");
})