const express = require('express');
// lets us represent tokens with unique ids
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let user = {};
let recipe = {};
let bookNames = [];

//express automatically parses json for us.
app.use(express.json());

//This code just checked that it was working.
// app.get('*', (_req, res) => {
//   res.send({ msg: 'Startup service' });
// });

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});