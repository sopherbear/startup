//used to make database requests

//config will be used to obtain things like my username, password, and host
const config = require('../dbConfig.json');

const { MongoClient } = require('mongodb');


const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);

const db = client.db('rental');


(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

// const collection = client.db('rental').collection('house');

// const house = {
//   name: 'Beachfront views',
//   summary: 'From your bedroom to the beach, no shoes required',
//   property_type: 'Condo',
//   beds: 1,
// };
// await collection.insertOne(house);

// const cursor = collection.find();
// const rentals = await cursor.toArray();
// rentals.forEach((i) => console.log(i));

