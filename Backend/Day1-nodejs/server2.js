let http = require("http");

let server = http.createServer((req, res) => {

    console.log("Hello Its Server");

    if (req.method === "GET" && req.url === "/") {
        res.end("Home Page");
    }

    else if (req.method === "GET" && req.url === "/products") {
        res.end("Products Page");
    }

    else if (req.method === "POST" && req.url === "/create") {
        res.end("Create Product");
    }

    else {
        res.statusCode = 404;
        res.end("Route Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});