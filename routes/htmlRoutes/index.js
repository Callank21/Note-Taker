const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {//allows for a call to the index page to send the browser to the index page
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => { //allows for a call to the notes page to send the browser to the notes page
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => { //allows for a call to the index page to send the browser to the index page
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;