const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNewNote, validateNote, findById, deleteNote } =require('../../lib/notes.js'); //imports these functions from the notes.js in the lib file
const uniqid = require('uniqid');

router.get('/notes', (req, res) => { // route to get all the json data
    res.json(notes.notesArray);
});

router.get('/notes/:id', (req, res) => { // route to get an individual json item
    const result = findById(req.params.id, notes.notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => { // route to post a new json item
    req.body.id = uniqid();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes.notesArray);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => { // route to delete a json item
    const result = deleteNote(req.params.id, notes.notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

module.exports = router;