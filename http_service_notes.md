# HTTP Service Notes


## Express
Used to implement full-on web services.

*Express* is a Node package. It:
* Routes requests for service endpoints
* Manipulates HTTP requests with JSON body content
* Generates HTTP responses
* Uses **middleware** to add functionality

*TO CREATE EPRESS APPLICATION*:
```
npm install express
```
in file:
```
const express = require('express');
const app = express();

app.listen(8080);
```

Then add in HTTP routing and middleware using the *app* object.

Middleware are basically small functions that carry out a particular task. Unless they are the end of the line, they should have "next" as one of 
the parameters so that it will go on to the next middleware function.

Express has a lot of built-in middleware, but you can also create some if you like.

Middleware follows this pattern:
```
function middlewareName (req, res, next)
```

(Req stands for HTTP request object, res for HTTP response object)

Example of creating your own middleware:
```
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```

Built in middleware:
```
app.use(express.static('public'));
```
(This allows the app to use any static files you store under 'public', like images.)


Third party middleware:
```
npm install cookie-parser
```
then
```
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```

