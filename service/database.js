const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
//client is going to be in my mongo database tied to the info I have in dbConfig.
const client = new MongoClient(url, {tls: true, serverSelectionTimeoutMS: 4000, autoSelectFamily: false,});
//specifies the data that belongs to startup
const db = client.db('startup')

//MONGODB BABYYYY
//specifies collections of data to startup
const userCollection = db.collection('user');
const bookNameCollection = db.collection('bookName');
const recipeCollection = db.collection('recipe');

//Will asynchronously test connection and exit if process fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  //will not understand expressiong in curly braces unless I use backticks.
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
})

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  //hashes password before we insert it into database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}


//REMEMBER TO COMPLETE THE FUNCTION LATER
async function addBookName(bookName) {
  return bookNameCollection.insertOne(bookName);
}

async function getBookNames() {
  const query  = {}; 
  const cursor = bookNameCollection.find(query);
  return cursor.toArray();
}

async function getMyBookName(token) {
  const query = { token: token}
  return cursor = bookNameCollection.findOne(query);
}

//Will need to add recipes later

async function addRecipe(recipe) {
  return recipeCollection.insertOne(recipe);
}

async function getSomeRecipes() {
  //WILL NEED TO MAKE SURE CATEGORIES MATCH SO THIS WORKS
  const query = {
    token: token
  }
  
  //want a list so that I can put a link to every recipe that falls into the category that falls under the category
  const cursor = recipeCollection.find(query);
  return cursor.toArray();
}

async function getAllRecipes() {
  const query = {}
  const cursor = recipeCollection.find(query);
  return cursor.toArray;
}


module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addBookName,
  getBookNames,
  getMyBookName,
  addRecipe,
  getSomeRecipes,
  getAllRecipes
};