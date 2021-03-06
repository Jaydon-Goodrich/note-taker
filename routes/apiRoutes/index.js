const router = require('express').Router();
const createNote = require('../../lib/note');
const { notes } = require('../../db/notes.json');


router.get('/notes', (req, res) => {
    let note = notes;
    res.json(note);
});

router.post('/notes', (req, res) => {
    //set id based on what the next index will be in the array
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});


module.exports = router;