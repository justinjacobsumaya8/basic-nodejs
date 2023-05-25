const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    const name = "Justin";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    // fs.createReadStream("./index.html").pipe(res);
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
});

server.listen(3000, () => {
    console.log("Server running in port 3000");
})