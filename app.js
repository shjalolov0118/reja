// bu 2chi urunish atarting
console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const { getDB } = require("./server");
const user = require("./database/user.json");
const { ObjectId } = require("mongodb");
// const mongodb = this.require("mongodb");

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
  try {
    const db = getDB();
    const data = await db.collection("plans").find().toArray();
    res.render("reja", { items: data });
  } catch (err) {
    console.log("ERROR on / route:", err.message);
    res.status(500).send("Something went wrong");
  }
});

// 2chi urunish starting
app.post("/create-item", async function (req, res) {
  console.log("user entered /create-item");
  //   console.log(req.body);

  try {
    const db = getDB();
    const newReja = req.body.reja;

    // if (!newReja || !newReja.trim()) {
    //     return res.status(400).send("Reja kiritilmadi");
    // }

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

app.post("/delete-item", async function (req, res) {
  try {
    const db = getDB();
    const id = req.body.id;

    console.log("O'chiriladigan ID:", id);

    await db.collection("plans").deleteOne({ _id: new ObjectId(id) });
    res.json({ state: "success" });
  } catch (err) {
    console.log("ERROR on /delete-item:", err.message);
    res.status(500).json({ state: "fail" });
  }
});

// app.post("/edit-item", (req, res) => {
//     const db = getDB();
//     const data = req.body;
//     console.log(data);
//     db.collection("plans").findOneAndUpdate(
//         { _id: new ObjectId(data.id) },
//         { $set: { reja: data.new_input } },
//         function(err, data) {
//             res.json({ state: "success" });
//         }
//     );
// });

// 2chi urunish starting
app.post("/edit-item", async function (req, res) {
  try {
    const db = getDB();
    const data = req.body;
    console.log(data);

    await db
      .collection("plans")
      .findOneAndUpdate(
        { _id: new ObjectId(data.id) },
        { $set: { reja: data.new_input } },
      );

    res.json({ state: "success" });
  } catch (err) {
    console.log("ERROR on /edit-item:", err.message);
    res.status(500).json({ state: "fail" });
  }
});
// 2chi urunish ending

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    getDB()
      .collection("plans")
      .deleteMany({})
      .then(function () {
        res.json({ state: "hamma rejalar o'chirildi" });
      });
  }
});

// Author page
app.get("/author", function (req, res) {
  console.log("user entered /author");
  res.render("author", { user });
});

module.exports = app;
// bu 2chi urunish ending
