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


We use a Gateway to get to the port of the exact service you want, even if you have several services (and thus ports) open concurrently.
A gateway listens on port 443.

## Domain Names
[subdomain.]secondary.top:  secondary+top are the root.

startup.familyrecipebook.click.

Subdomains can resolve to different IP addresses.

We can use terminal command **whois** to get information about who to contact on technical issues

## Web Services
All requests between devices use HTTPS to exchange data.

We can make requests from the frontend for external data (like quotes or images) and inject it into the DOM. 
To make a request, we use **fetch**.

Functionality is provided by the backend of the application. Functions provided by a webservice are called *APIs* or *endpoints*.
Backend can also use fetch to make requests of other services.(Think database)


## URLs
The URL represents the location of a resource. Can be a page, font, image, a gaming session, or a number of other things.

Anatomy of a URL:
```
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>

https://byu.edu:443/cs/260/student?filter=accepted#summary
```

## Ports
Each service on the device starts up on a different port.

To connect a device to the internet, you need an IP address and a port. Port numbers let us use protocols (such as HTTPS and SSH) and services (like authentication and search).

**Common Ports**:

* 20: File transfer protocol
* 22: SSH for connecting to remote devices
* 53: DNS for looking up IP addresses
* 80: HTTPS for web requests
* 123: managing time
* 194: chatting
* 443:HTTPS secure

The web service Caddy is listening on ports 80 and 443.

WE RUN SIMON ON 3000, SO IT CAN'T RUN STARTUP THERE. USE 4000 FOR STARTUP.

## HTTP
How the web talks. When a web client (e.g. browser) and web server talk, they exchange HTTP requests and responses. We can use the browser debugger
or the **curl** command to see the exchange.

Example request:
```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

It has this form:
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

### HTTP Verbs
* GET: get resource/list of resources
* POST: create a new resource
* PUT: update a resource
* DELETE: obvious
* OPTIONS: get metadata about resource (usually HTTP headers)


Refer online for status codes.


### HTTP Headers
Includes things like cookies.

Cookies are created by the server and passed to the user as a header. They are used to track state.(Can be used to remember default language of 
the user, login credentials, or to track your every move.)




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

