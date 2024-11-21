# Data and Authentication Services
Mongo DB can be used to application and user data outside of the server.

Take this example of a json document:
```
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```

I can use db queries to pull up the information that I want.
```
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

When setting up mongo for my application, it needs to be in the service folder for the backend. *INSTALL MONGO.DB WITHIN THERE, TOO.*

make sure to keep username, hostname, and password in a file and put it in .gitignore. Import the info from the file in different areas to actually use the info.

## Account Creation and Login
In order to authenticate users, we need two endpoints: one to create a user and another to allow the user to login with their credentials.
We want to alter access to other endpoints (and pages) until authenticated.

If the email already exists in our database, we want to return a 409(conflict) status. It should return a cookie containing an authentication token and a user ID.

### GetMe Endpoint
Uses the authentication token from the cookie to look up and return info about an authenticated user. (So, to log in rather than to create an account).

## Login Webservice using Express
Create/Login using Express:
```
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```