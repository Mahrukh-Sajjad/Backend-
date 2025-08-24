const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://mahrukhsajjad758:GWA7KfTgSUWvZjVu@cluster0.awitaon.mongodb.net/cohort"
    ) // it connects the server with database.
    .then(() => {
      console.log("connected to db");
    });
}

module.exports = connectToDb;
