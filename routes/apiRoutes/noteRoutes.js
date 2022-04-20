const router = require('express').Router();
const path = require ('path');
const fs = require ('fs');
//npm function for creating a unique ID 
const uniqueID = require ('uniqid');

//Display created notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

//Create new notes and push them into the DB
router.post('/notes', (req, res) => {
    let notes = fs.readFileSync('db/db.json');
    notes=JSON.parse(notes);

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqueID(),
    };

    notes.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notes));
    res.json(notes);
});

//Delete a note
router.delete('/notes/:id', (req, res)=> {
    let allNotes = JSON.parse(fs.readFileSync('db/db.json'));

    let deleteNote = allNotes.filter(note => note.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    
    res.json(deleteNote);
});

module.exports = router;
