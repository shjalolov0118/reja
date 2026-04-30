// // bu 24chi darsdagi xolat ISHLAMADI
// const http = require('http');
// const mongodb = require('mongodb');

// let db;
// const connetcionString =
//   'mongodb+srv://LEO:leo12345678@cluster0.d4zhpe5.mongodb.net/Reja';

// mongodb.connect(
//   connetcionString,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err, client) => {
//       if (err) console.log("ERROR on connection MongoDB");
//       else {
//         console.log("MongoDB connection succeed");
//         console.log(client);
//         const app = require("./app");
//         const server = http.createServer(app);
//         let PORT = 3000; // serverno 3000chi portga listen qildig
//         server.listen(PORT, function () {
//           console.log(
//             `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
//           );
//         });
//       }
//     }
// );



// bu gpt varyanti ISHLADI
const http = require("http");
const { MongoClient } = require("mongodb");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR", err);
    }else {
        user = JSON.parse(data)
    }
});

const connectionString =
  "mongodb+srv://LEO:leo12345678@cluster0.d4zhpe5.mongodb.net/Reja";
const client = new MongoClient(connectionString);
let db;
async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connection succeed");
    db = client.db(); // MUHIM
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
      console.log(`The server is running successfully on port: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("ERROR on connection MongoDB", err);
  }
}

// EXPORT QILAMIZ
function getDB() {
  return db;
}

module.exports = { startServer, getDB };

