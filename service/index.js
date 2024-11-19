const express = require('express');
// lets us represent tokens with unique ids
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = {};
// I think this has to be brackets because it will be in json format.
let bookName = {bookName: ""};
let otherBookNames = [{otherBookName: "Lizzie's Book"}, {otherBookName: "Elinor's Book"}, {otherBookName: "Anne's Book"}, {otherBookName: "Marianne's Book"}];

app.use(express.json());

app.use(express.static('public'));


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


//get bookname
apiRouter.get('/bookName', (_req, res) => {
  res.send(bookName);
});


// Submit bookName
apiRouter.post('/bookName', (req, res) => {
  console.log(req.body)
  bookName.bookName=req.body.bookName 
  // updateBookName(req.body, bookName);
  res.send(bookName);
});


function updateBookName(newBookName, bookName) {
  bookName.bookName = newBookName;
  return bookName;
}

apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});


apiRouter.get('/otherBookNames', (_req, res) => {
  res.send(otherBookNames);
});

apiRouter.post('/otherBookName', (req, res) => {
  scores = updateOtherBookNames(req.body, otherBookNames);
  res.send(otherBookNames);
});


//For right now, this is a placeholder.
// function updateScores(newScore, scores) {
//   let found = false;
//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score > prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});