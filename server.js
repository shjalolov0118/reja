console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json()); // kirib kelayotgan object datani json formatga o'giribberadi
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/hello", function(req, res) {
    // res.end(`<h1 style="background: red">HELLO WORLD by Shukurjon</h1>`);
    res.end(`<h1>HELLO WORLD</h1>`);
});
app.get("/gift", function (req, res) {
    res.end(`<h1>Siz sovgalar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000; // serverno 3000chi portga listen qildig
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});

