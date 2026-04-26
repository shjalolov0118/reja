console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB choqirish
// bu 24chi darsdagi xolat ISHLAMADI
// const db = require("./server").db();

// bu gpt varyanti ISHLADI
const { getDB } = require("./server");
const db = getDB();

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
    // console.log(req.body);
    // res.json({test: "success"});
})

app.get('/', function (req, res) { //get bizga malumotni o'qish uchun
    res.render("reja");
});

module.exports = app;





