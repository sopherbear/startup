//imports cookie-parser from node
const cookieParser = require('cookie-parser');
//for encrypting
const bcrypt = require('bcrypt');
//need express to actually use backend and backend debugger
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
