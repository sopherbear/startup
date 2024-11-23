const { MongoClient } = require('mongodb');
const bcyrpt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
//client is going to be in my mongo database tied to the info I have in dbConfig.
const client = new MongoClient(url);
//specifies the data that belongs to startup
const db = client.db('startup')
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
async function createBookName() {
  return;
}


module.exports = {
  getUser,
  getUserByToken,
  createUser,
  createBookName,

}