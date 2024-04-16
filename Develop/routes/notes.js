const tips = require('express').Router();


notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`notes added successfully`);
    } else {
      res.error('Error in adding notes');
    }
  });