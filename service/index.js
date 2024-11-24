//imports cookie-parser from node
const cookieParser = require('cookie-parser');
//for encrypting
const bcrypt = require('bcrypt');
//need express to actually use backend and backend debugger
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

//APP.USE: basically allows us to use features in the request/response cycle. That's what middleware is. I understand it better now.
//allows us to convert data into json, which is more easily usable.
app.use(express.json());
//lets us use cookie-parser
app.use(cookieParser());

app.use(express.static('public'));

app.set('trust proxy', true);

//makes an express router instance
const apiRouter = express.Router();
//makes it so all routes in apiRouter will go through path /api
app.use('/api', apiRouter);


//------------------------------------------------------------------------------------------------------------------------------------
// ENDPOINTS
//------------------------------------------------------------------------------------------------------------------------------------
//will go through /api, as an endpoint under apiRouter.

//post: client sends in data, and we respond accordingly.

//create user token if not already in system
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'User already exists' });
  }
  else {
    //calls createUser, which will be defined in database.js, since it is adding to the database
    const user = await DB.createUser(req.body.email, req.body.password);
    
    //set cookie. defined much later.
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

//get token for credentials when logging in
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
})


//delete Auth token if logging out
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

//verify credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  }
  else {
    res.status(401).send({ msg: 'Unauthorized'});
  }
});

//ADD IN CODE FOR GETTING RECIPE BOOK NAMES AND RECIPES
//use secureApiRouter for these ones

//gets bookNames when requested
secureApiRouter.get('/bookNames', async (req, res) => {
  const bookNames = await DB.getBookNames();
  res.send(bookNames);
});

// Adds a bookName to the database
secureApiRouter.post('/bookName', async (req, res) => {
  const bookName = { ...req.body, ip: req.ip };
  await DB.addBookName(bookName);
  const bookNames = await DB.getBookNames();
  res.send(bookNames);
});

secureApiRouter.get('/recipes', async (req, res) => {
  const recipes = await DB.getRecipes();
  res.send(recipes);
});

secureApiRouter.get('/bookName', async (req, res) => {
  const recipe = await DB.getMyBookName();
  res.send(recipe);
})


secureApiRouter.post('/recipe', async (req, res) => {
  const recipe = { ...req.body, ip: req.ip };
  await DB.addRecipe(recipe);
  const recipes = await DB.getRecipes();
  res.send(recipes);
});


// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

//Where should this be getting called? is this the issue?
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});