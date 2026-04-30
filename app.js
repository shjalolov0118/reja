// bu 1chi urunish starting
// console.log("Web Serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();

// // MongoDB choqirish
// // bu 24chi darsdagi xolat ISHLAMADI
// // const db = require("./server").db();

// // bu gpt varyanti ISHLADI
// const { getDB } = require("./server");
// const db = getDB();
// const user = require("./database/user.json");

// // 1: Kirish code
// app.use(express.static("public"));
// app.use(express.json()); // kirib kelayotgan object datani json formatga o'giribberadi
// app.use(express.urlencoded({extended: true})); // serverga user kiritgan malumotlarni to'playdi

// // 2: Session code
// // 3: Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4: Routing code
// app.post("/create-item", (req, res) => { //post malumotni o'zibilan olib keladi
//     console.log("user entered /create-item");
//     console.log(req.body);
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end('something went wrong');
//         } else {
//             res.end('successfully added');
//         }
//     });
// })

// app.get('/', function (req, res) { //get bizga malumotni o'qish uchun
//     console.log("user entered /");
//     db.collection("plans").find().toArray((err, data) => {
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             res.render("reja", { items: data});
//         }
//     });
// });

// app.get('/author', function (req, res) {
//     console.log("user entered /author");
//     res.render("author", { user: user });
// });

// module.exports = app;
// bu 1chi urunish ending

// bu 2chi urunish atarting
console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const { getDB } = require("./server");
const user = require("./database/user.json");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/", async function (req, res) {
    // console.log("user entered /");
    // db.collection("plans")
    // .find()
    // .toArray((err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.end("something went wrong");
    //     } else {
    //         res.render("reja", { items: data });
    //     }
    // })

    try {
    const db = getDB();
    const data = await db.collection("plans").find().toArray();
    res.render("reja", { items: data });
    } catch (err) {
        console.log("ERROR on / route:", err.message);
        res.status(500).send("Something went wrong");
    }
});

// Create item
// 1chi urunish starting
// app.post("/create-item", async function (req, res) {
//     console.log("user entered /create-item");
//     console.log(req.body);

//     try {
//         const db = getDB();
//         const newReja = req.body.reja;
//         if (!newReja) {
//             return res.status(400).send("Reja kiritilmadi");
//         }

//         await db.collection("plans").insertOne({ reja: newReja });

//         // res.send("successfully added");
//         res.redirect("/");
//     } catch (err) {
//             console.log("ERROR on /create-item:", err.message);
//             res.status(500).send("Something went wrong");
//         }
// });
// 1chi urunish ending

// 2chi urunish starting
app.post("/create-item", async function (req, res) {
    console.log("user entered /create-item");
//   console.log(req.body);

    try {
        const db = getDB();
        const newReja = req.body.reja;

        if (!newReja || !newReja.trim()) {
            return res.status(400).send("Reja kiritilmadi");
        }

        // result ga saqlaymiz
        const result = await db.collection("plans").insertOne({
            reja: newReja.trim(),
        });

        // yangi object
        const newItem = {
                reja: newReja.trim(),
                _id: result.insertedId.toString(),
            };

        console.log([newItem]);

        res.redirect("/");
    } catch (err) {
        console.log("ERROR on /create-item:", err.message);
        res.status(500).send("Something went wrong");
        }
});
// 2chi urunish ending



// Author page
app.get("/author", function (req, res) {
    console.log("user entered /author");

    res.render("author", { user });
});

module.exports = app;
// bu 2chi urunish ending