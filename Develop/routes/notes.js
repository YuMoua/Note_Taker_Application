const notes = require('express').Router();
const notesData = require('../db/notes.json')

notes.get('/', (req, res) => {
    res.json(notesData)
  });


notes.post('/', (req, res) => {
    console.log(req.body);
  
    // const { title, text } = req.body;
  
    // if (req.body) {
    //   const newNote = {
    //     title,
    //     text
    //   };

      newNote = req.body;
      newNote.id = Math.floor((1 + Math.random())*0x10000).subString(1);
      console.log(newNote)
  });

  module.exports = notes;