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


// bu 2chi usul starting
// bu gpt varyanti ISHLADI
// const http = require("http");
// const { MongoClient } = require("mongodb");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR", err);
//     }else {
//         user = JSON.parse(data)
//     }
// });

// const connectionString =
//   "mongodb+srv://LEO:leo12345678@cluster0.d4zhpe5.mongodb.net/Reja";
// const client = new MongoClient(connectionString);
// let db;
// async function startServer() {
//   console.log("Server boshlanmoqda...");
//   try {
//     console.log("MongoDB ga ulanish...");
//     await client.connect();
//     console.log("MongoDB connection succeed");
//     db = client.db(); // MUHIM
//     const app = require("./app");
//     const server = http.createServer(app);
//     let PORT = 3000;
//     server.listen(PORT, function () {
//       console.log(`The server is running successfully on port: http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.log("ERROR on connection MongoDB", err);
//   }
// }

// // EXPORT QILAMIZ
// function getDB() {
//   return db;
// }

// module.exports = { startServer, getDB };

// // serverni ishga tushur
// startServer();
// bu 2chi usul ending



// bu 3chi usul starting
// const http = require("http");
// const { MongoClient } = require("mongodb");
// const fs = require("fs");

// let user;

// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR reading user.json:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// const connectionString =
//   "mongodb+srv://LEO:leo12345678@cluster0.d4zhpe5.mongodb.net/Reja?retryWrites=true&w=majority";

// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let db;

// async function startServer() {
//   console.log("Server boshlanmoqda...");

//   try {
//     console.log("MongoDB ga ulanish...");

//     await client.connect();

//     console.log("MongoDB connection succeed");

//     db = client.db("Reja");

//     const app = require("./app");
//     const server = http.createServer(app);

//     const PORT = 3000;

//     server.listen(PORT, function () {
//       console.log(
//         `The server is running successfully on port: http://localhost:${PORT}`,
//       );
//     });
//   } catch (err) {
//     console.log("ERROR on connection MongoDB", err);
//   }
// }

// function getDB() {
//   if (!db) {
//     throw new Error("Database hali ulanmagan");
//   }

//   return db;
// }

// module.exports = { startServer, getDB };

// startServer();
// bu 3chi usul ending

// bu 4chi usul starting
const http = require("http");
const { MongoClient } = require("mongodb");
const fs = require("fs");

const connectionString =
  "mongodb+srv://LEO:leo12345678@cluster0.d4zhpe5.mongodb.net/Reja?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let db;
let user;

// user.json o‘qish
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR reading user.json:", err.message);
  } else {
    try {
      user = JSON.parse(data);
      console.log("user.json successfully loaded");
    } catch (parseErr) {
      console.log("ERROR parsing user.json:", parseErr.message);
    }
  }
});

async function startServer() {
  console.log("Server boshlanmoqda...");

  try {
    console.log("MongoDB ga ulanish...");
    await client.connect();

    db = client.db("Reja");

    console.log("MongoDB connection succeed");
    // console.log("Web Serverni boshlash");

    const app = require("./app");
    const server = http.createServer(app);

    const PORT = 3000;

    server.listen(PORT, function () {
      console.log(
        `The server is running successfully on port: http://localhost:${PORT}`,
      );
    });
  } catch (err) {
    console.log("ERROR on connection MongoDB:", err.message);
  }
}

function getDB() {
  if (!db) {
    throw new Error("Database hali ulanmagan!");
  }

  return db;
}

function getUser() {
  return user;
}

module.exports = { startServer, getDB, getUser };

startServer();
// bu 4chi usul ending