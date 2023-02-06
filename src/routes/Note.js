const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
//App Routes
router.get('/', (req, res) => {

        res.send('Hello Node');

});
//Get all notes
router.get('/notes/list/:userId', async (req, res) => {
        var note = await Note.find(
                { userId: req.params.userId }
        );
        res.json(note);
});


router.get('/notes/list/', async (req, res) => {
        var note = await Note.find();
        res.json(note);
});
//Add a note
router.post('/notes/add', async (req, res) => {

        await Note.deleteOne({ id: req.body.id });
        
        const newNote = new Note({
                id: req.body.id,
                userId: req.body.userId,
                title: req.body.title,
                content: req.body.content,

        });
        await newNote.save();

        res.json({ msg: 'Note added' + `id:${req.body.id}` });
});



//Delete a note
router.delete('/notes/delete/:id', async (req, res) => {
        await Note.deleteOne({ id: req.params.id });
        res.json({ msg: 'Note deleted' + `id:${req.params.id}` });
});

module.exports = router;