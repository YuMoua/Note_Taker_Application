const notes = require('express').Router();
const notesData = require('../db/notes.json')
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils')

notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/', (req, res) => {
  console.log(req.body);


  newNote = req.body;
  newNote.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  console.log(newNote);
  readAndAppend(newNote, './db/notes.json')


  const response = {
    status: 'success',
    body: newNote,
  };

  res.json(response)
});


notes.delete('/:id', (req, res) => {
  console.log(req.body);
  const noteId = req.params.id
  readFromFile('./db/notes.json', 'utf8')
    .then((data) => {
      const parseData = JSON.parse(data)
      const newData = parseData.filter((note) => note.id !== noteId)
      // const parseData = JSON.parse(newData)
      console.log(newData)
      return newData
    })
    .then((filteredData) => {
      writeToFile('./db/notes.json', filteredData)
    })
    .then((filteredData) => {
      res.json(filteredData)
    })
})




module.exports = notes;