const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {  //writes the array to the json files with the new object included
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
}

function validateNote(note) { // makes sure that the object being pushed in has a title and text
    if (!note.title || typeof note.title !== 'string') {
        return false;
      }
    if (!note.text || typeof note.text !== 'string') {
        return false;
      }
    return true;
}

function findById(id, notesArray) { // searches the json for that specific json object and returns thats
    const results = notesArray.filter(notes => notes.id === id)[0];
    console.log(results);
    return results;
}

function deleteNote(id, notesArray) { // returns everything except the specified json object then writes that back to the json
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