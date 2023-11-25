const path = require('path');
const fs = require('fs');

var uniqid = require('uniqid');

module.exports = (app) => {
    // GET /api/notes should read the db.json file and return all saved notes as JSON.
    app.get('/api/notes', (req, res) => {
        const filePath = path.join(__dirname, '../db/db.json');
        res.sendFile(filePath);
    });

    // POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post('/api/notes', (req, res) => {
        const filePath = path.join(__dirname, '../db/db.json');

        // Read the existing notes from the JSON file
        let db = JSON.parse(fs.readFileSync(filePath));

        // Create a new note
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        // Add the new note to the array of notes
        db.push(newNote);

        // Write the updated array of notes back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

        // Send the response with the updated list of notes
        res.json(db);
    });

    // DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
    app.delete('/api/notes/:id', (req, res) => {
        const filePath = path.join(__dirname, '../db/db.json');

        // Reading notes from db.json
        let db = JSON.parse(fs.readFileSync(filePath));

        // Removing note with id
        let deleteNotes = db.filter(item => item.id !== req.params.id);

        // Rewriting note to db.json
        fs.writeFileSync(filePath, JSON.stringify(deleteNotes, null, 2));
        res.json(deleteNotes);
    });
};
