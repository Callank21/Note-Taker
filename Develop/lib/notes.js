const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
      }
    if (!note.text || typeof note.text !== 'string') {
        return false;
      }
    return true;
}

function findById(id, notesArray) {
    const results = notesArray.filter(notes => notes.id === id)[0];
    console.log(results);
    return results;
}

function deleteNote(id, notesArray) {
    notesArray = notesArray.filter(notes => notes.id !== id);
    console.log(notesArray);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notesArray;
}

module.exports = {
    createNewNote,
    validateNote,
    findById,
    deleteNote
};