// Rest apis provide rules and guidelines to share data between two applicaions.
// it has 4 methods get,post,patch  and delete.
// get => to get some data from server
//  post => to create a resourse(comment,post) to post something on server.
// patch (update)
// delete
// there are three ways to send data through request req.body, req.query, req.params
// we use req.body method with post,put and patch. it is used when data is large ,complex and sensitive.

const express = require("express");
const app = express();
app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "notes added successfully",
  });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "notes deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title } = req.body;
  notes[index].title = title;
  res.json({
    message: "notes updated successfully",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
