const express = require('express');
// lets us represent tokens with unique ids
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = {};
let recipe = {};
let bookNames = [];

app.use(express.json());

app.use(express.static('public'));

//This code just checked that it was working.
// app.get('*', (_req, res) => {
//   res.send({ msg: 'Startup service' });
// });

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

//get booknames
apiRouter.get('/bookNames', (_req, res) => {
  res.send(bookNames);
});

// Submit bookName
apiRouter.post('/bookName', (req, res) => {
  bookNames= updateBookNames(req.body, bookNames);
  res.send(bookNames);
});

function updateBookNames(newBookName, bookNames) {
  bookNames.push(newBookName);

  if (bookNames.length > 4) {
    bookNames.length = 4;
  }
  return bookNames;
}



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});