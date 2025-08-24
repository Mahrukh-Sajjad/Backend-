// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello world");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// why we dont use http directly but with express
// verbose and repititive
// No routing ,middlewares and extra features.
// Hard to manage large applications.

// so we use express which is based on http module.

// express is a package.

// npm init -y this command creates a package.json file in our project.

const express = require("express");

const app = express(); // is line pay server create hojata hai.

app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// req contains data relevant to client's request.
/*
req comes in 
req.body
req.params
req.query
req.headers & req.cookies // it contains authentification data.
*/

// api is a way for two applications to communicate with each other.
// for example frontend is an appliaction and server is an application they can communicate through api.
// rest api follows set of rules for two applications to communicates
// rest api provides standards to structure request and response.
