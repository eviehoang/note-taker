const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const db = require("./db/db.json");
const PORT = process.env.PORT || 3001;

//Allows all notes to have a unique ID
const { v4: uuidv4 } = require("uuid");


//Allows public folder to be unblocked
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// Notes html and it's "url"
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//API Routes
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
  
      try {
        let dbData = JSON.parse(data);
        res.json(dbData);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).send("Error parsing JSON data");
      }
    });
  });

//POST
///api/notes receives a new note to save on the request body and add it to db.json, then returns new note to the client.
app.post("/api/notes", (req, res) => {
  //grabs notes from body of request
  const newNote = req.body;
  //gives each note a random ID
  newNote.id = uuidv4();
  //adds the note object to the array
  db.push(newNote);
  //update the json file with the new object
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  //responds with the note object used
  res.json(db);
});

//DELETE
app.delete('/api/notes/:id', (req, res) => {
    // Convert req.params.id to the same type as the id in your database
    const idToDelete = req.params.id;
  
    // Filter out the note with the specified id
    const newDb = db.filter((note) => note.id !== idToDelete);
  
    // Update the db.json file asynchronously
    fs.writeFile('./db/db.json', JSON.stringify(newDb), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting note.');
      } else {
        // Update the in-memory db variable
        db.length = 0; // Clear the array
        db.push(...newDb); // Push the updated notes back into the array
  
        // Send the updated notes array back to the client
        res.header('Cache-Control', 'no-store'); // Disable caching
        res.json(newDb);
      }
    });
  });

//App listens with front end on this port
app.listen(PORT, () => console.log(`App listening on ${PORT}`));