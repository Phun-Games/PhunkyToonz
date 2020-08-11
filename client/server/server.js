const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '../index.html');
});

app.get('/signup', (req, res) => {
  res.status(200).sendFile(__dirname + '../CreateAccount.jsx');
});

app.listen(PORT, () => console.log('server listening on port 3000'));
