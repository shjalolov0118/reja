console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json()); // kirib kelayotgan object datani json formatga o'giribberadi
app.use(express.urlencoded({extended: true})); // serverga user kiritgan malumotlarni to'playdi

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => { //post malumotni o'zibilan olib keladi
    console.log(req.body);
    res.json({test: "success"});
})

app.get('/', function (req, res) { //get bizga malumotni o'qish uchun
    res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000; // serverno 3000chi portga listen qildig
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});

