const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNewNote, validateNote, findById, deleteNote } =require('../../lib/notes.js');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    res.json(notes.notesArray);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes.notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes.notesArray);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes.notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

module.exports = router;