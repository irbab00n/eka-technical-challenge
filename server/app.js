const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const _public = path.join(__dirname, '../public');

app.use(express.static(_public))
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
});

app.post('/test', (req, res) => {
  console.log('Request body on server level: ', req.body);

  // Use the type that gets passed down to determine what action will need to happen on the database level

  /* ex: 
    if we have {type: UPDATE_FORM_ONE}, it should check in the database if either the username or email exists in the database
    if both tests return no value, we can allow the user to create the account
    then, respond back to the client level to advance the form and update the app state
  */

  // stub to send successful response for testing purposes
  res.status(200).send('Successful request!');
});

module.exports = app;