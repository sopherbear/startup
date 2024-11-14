# HTTP Service Notes

## The Internet
Basically a system of wires that connects all of the computers around the world. 
In order for devices to communicate with each other, they have to have an IP address.(Example: BYU 128.187.16.184). However, 
people generally refer to the symbolic name (the domain name).

To find the IP of a domain:
```
dig byu.edu
```
Once a device has a target IP address, it will ask for a route to that address.

To trace route:
```
//the domain you are trying to get to.
traceroute byu.edu
```
### TCP IP Model
The top application layer uses stuff like HTTP and SSH for user functionality. The lower transport layer breaks application data into small
chunks and sends them to the other computers. The internet layer actually forges the connection and keeps it live during communication. The
bottom link layer handles hardware.


## Web Servers
Computing device that hosts a web service that can accept incoming internet connections and speak HTTP application protocol.

### Ports
Each service on the device starts up on a different port.

We use a Gateway to get to the port of the exact service you want, even if you have several services (and thus ports) open concurrently.
A gateway listens on port 443.

### Domain Names
[subdomain.]secondary.top:  secondary+top are the root.

startup.familyrecipebook.click.

Subdomains can resolve to different IP addresses.

We can use terminal command **whois** to get information about who to contact on technical issues

### Web Services
All requests between devices use HTTPS to exchange data.

We can make requests from the frontend for external data (like quotes or images) and inject it into the DOM. 
To make a request, we use **fetch**.

Functionality is provided by the backend of the application. Functions provided by a webservice are called *APIs* or *endpoints*.
Backend can also use fetch to make requests of other services.(Think database)


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

