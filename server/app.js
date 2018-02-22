const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const usersController = require('./controllers/users');

const app = express();

const _public = path.join(__dirname, '../public');

app.use(express.static(_public))
app.use(bodyParser.json());



app.post('/user', (req, res) => {

  if (req.body.type === 'UPDATE_FORM_ONE') {
    usersController.updateFormOne(req, res);
  } else {
    usersController.update(req, res);
  }

});

app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
});

module.exports = app;