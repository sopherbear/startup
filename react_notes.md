# React Notes
React combines JavaScript and HTML into its component format, but CSS has to be separate. The JavaScript and HTML go into a JSX file.

Example JSX: The horrible lovechild of HTML and JSON:
```
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```
We run JSX through Babel, which converts JSX into intelligible JavaScript for the browser to read. It turns things into elements using ".createElement"

## Babel in Codepen
Need to import React and import Reactdom.
Specify that the JavaScript Preprocessor is Babel, and it should work fine.

## Components
(Think like header, footer, main)

REMEMBER: with ReactDOM.render, you have to pass in the function you are using from JSX and the html element where you want it to be placed.

Example:
```
// App is the JSX function, root is the html div element id.
ReactDOM.render(<App />, document.getElementById("root"));
```

Example of a simple component:
```
const Hello = () => {
  const name = "Sophie"
  return <p>Hello {name}</p>;  
};
// the following code injects that paragraph into the root ID within the HTML
ReactDOM.render(<Hello />, document.querySelector("#root"));
```

A slightly more complex example of the same thing:
```
const Hello = () => {
  return <p>Hello <Name/></p>;  
};

function Name() {
  return <span>Sophie</span>
}

// the following code injects that paragraph into the root ID within the HTML
ReactDOM.render(<Hello />, document.querySelector("#root"));
```

Or even less hard-codey:
```
const Hello = () => {
  return <p>Hello <Name n="Sophie"/></p>;  
};

function Name({n}) {
  return <span>{n}</span>
}

// the following code injects that paragraph into the root ID within the HTML
ReactDOM.render(<Hello />, document.querySelector("#root"));
```

### Properties

I can pass information to a component using element properties. Example:

```
JSX
//Demo is not an HTML component, but react will replace it with the rendered code, so it will work.
 <div>Component: <Demo who="Sophie" /></div>


React Component
function Demo(props) {
  //since "who" is defined and we pass in props as a parameter, is should print correctly.
  return <b>Hello {props.who}</b>;
}

Resulting HTML
<div>Component: <b>Hello Sophie</b></div>
```
If I call an HTML element that doesn't exist, react knows to look for that function and call render() on it so that it will work.

### State
Components can have internal state. The following code creates a state variable called "clicked".

```
const Clicker = () => {
  // React.useState() returns a variable that contains the current state. So here, it will be able to say if button has been clicked.
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

### Class Style Components
Not commonly used anymore. This is an example of the clicker in this style:
```
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

## React Toolchains
Tools that we use to abstract out areas of code, I guess.
The toolchain we use for class: Github (for repository), Vite (for JSX, etc), ESBuild, Rollup, PostCSS, bash script


## React Notes from in class
We're moving from a multi-page application to a single-page application that will switch out pages using the router.

OK, I think I follow what's going on here. The idea is that we want the header and footer to remain the same, and we want to be able to inject whatever is in main based on interaction with the navigation bar. Home would be the default path. THAT'S FREAKING COOL, MAN.

## Vite
Vite is a command line interface that allows your to bundle and debug code well.


## React Router
To create a new React-based web application using Vite, open your console and run the following commands:
```
//don't have to name the thing demovite
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
// the following code bundles what you have so the debugger can work
npm run dev
```
press o to open the url

press q to have vite stop hosting the application

The main files are index.html, main.jsx, and App.jsx. Browser loads index.html (provides #root) that React application will inject into. 
main.jsx associates #root element with App component in App.jsx, so it can be injected into index.html.

Vite and Babel use jsx files, so that's why we use them, too.

### TO ACTUALLY DEPLOY TO PRODUCTION ENVIRONMENT
To bundle code so it can actually be deployed:
```
npm run build
```

To actually deploy:
call deployReact.sh file in Simon, run npm run build  within it, and copy resulting dist into production server.

## Router
Used in order to run single-page applications.The router chooses what "route" the main element takes.
No particular one has to be used for React, so we're just going with react-router-dom-6.

```
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```

## Reactivity
React enables reactivity with: *props*, *state*, and *render*.

React monitors these things so we can track the effects of any interactions on the display/functionality.


The following code uses state and 
```
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: </span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
```

## TicTacToe Activity Stuff
* To track state in React, import \<useState\> from 'react';
* **Export**: makes a function accessible outside of the js file
* **Default**: tells other files this is the main function in the file
* \<button className="square"\>: className indicates a class or property. In this case, square is a property of button that makes it square.

For the index.js file:
* import React, { StrictMode } from "react"; //imports React so you can use it
* import {createRoot} from "react-dom/client"; //allows you to communicate with browser via ReactDOM
* import "./styles.css"; // imports my CSS file
* import App from "./App"; //imports components in app.js

React can only return one JSX element at a time, so if we want to return multiple, they need to all be wrapped like so:
```
dhfiwfhu (
<>
  <button sdfihwufho wi></button>
  <button huifhw efhowhif></button>
</>
);
```
Add in \<div\> elements so that the rows wrap properly.
```
<>
  <div className="board-row">
    <button sdfihwufho wi></button>
  </div>
  <div className="board-row">
    <button huifhw efhowhif></button>
  </div>
</>
```

We end up making a square component using that button code so that we can populate board with squares instead of repeat code.

We're going to want to pass in a value {number} so that each square has a unique number:
```
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```
Now for each instance of Square, we can put value="#" to fill it in.

We add in handleClick function to change if a square has been clicked, and import state so that we can remember it has been clicked and mark it.

Since we are tracking state, instead of passing in value to square, we will define a const [value, setValue] = useState(null).

**Value** stores the value. **setValue** is a function that lets us change the value.

The handleClick function we wrote will copy the squares array and update it. 



**IMMUTABILITY**: In this code, we make a copy of the array "squares" that is called "nextSquares". This is good practice, since we can alter
nexSquares without messing with squares itself, which preserves past instances of the list and allows the program to check if components have
changed or not, which makes the process of rerendering board cheaper.



## React Hooks
They allow functional components (functions that return react components) to use state and other things. They always start with
"use" (e.g. "useState", "useEffect")

**useEffect**: lets you represent life cycle events

Example: to run a function every time component completes rendering:
```
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

Another example with cleanup:
```
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
### Hook Dependencies
Hook dependencies determine what triggers useEffect.


## Simon React Learning
***Steps to Convert html/css into React application***

1. Install and configure Vite
2. Reorganize the code
3. Convert to React Bootstrap
4. Enable React
5. Create app component
6. Create view components
7. Create the router
8. Convert HTML to React components
9. Replace deployment script

### Install and Configure Vite
First, in the project root directory, run the following code:
```
// this basically installs a json(convertible to and from javascript) file for you with some defaults
npm init -y

///installs Vite, which serves code locally during development. Basically, allows me to check up on stuff as I build it.
npm install vite@latest -D
```

In the new package.json, replace default scripts with this:
```
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
```

add node_modules to .gitignore file

### Reorganize the Code
Create a public folder, then move placeholder.jpg and favicon.ico into it. (All static assets go here, like sounds and images)

Create and src folder for all the react code, then create a folder within that folder for each view component. (In this case, about, login,
play, and scores). Rename **main.css** to **app.css** and put it under the src folder. (all codey components and stuff will go here.)

### Convert to React Bootstrap
Install the react version of bootstrap:
```
npm install bootstrap react-bootstrap
```
Now we can import bootstrap stylesin any components we want using this:
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

To use a bootstrap COMPONENT, import the particular component. Example with Button component:
```
import Button from 'react-bootstrap/Button';

export function NavButton({ text, url }) {
  const navigate = useNavigate();
  return (
    <Button variant='primary' onClick={() => navigate({ url })}>
      {text}
    </Button>
  );
}
```
### Enabling React
install React.
```
npm install react react-dom react-router-dom
```
Rename index.html to login.html, then create new index.html to represent React SPA entry port.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <title>Simon React</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!--All the code is injected in root-->
    <div id="root"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>
```
The script reference for index.jsx causes the injection of the top level component named App.

Create an index.jsx file:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Create App Component
Create an app.jsx file underneath **src** folder and add in the following code:
```
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className='body bg-dark text-light'>App will display here</div>;
}
```
Modify app.css so that the selector is *.body* rather than *body*, which doesn't exist in react.


***IMPORTANT***: NOW YOU SHOULD BE ABLE TO RUN THROUGH THE TERMINAL by running the following:
```
npm run dev

o
```
It won't look like much, but it will run. 

MAKE SURE TO COMMIT HERE ON THE ACTUAL STARTUP.

Then we will add in the code for the header, footer, and a placeholder for main. MAKE SURE TO PUT ALL THIS CODE INSIDE A DIV ELEMENT.
Rename all the "class" to "className".

Example:
```
export default function App() {
  return (
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            Simon<sup>&reg;</sup>
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='index.html'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='play.html'>
                Play
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='scores.html'>
                Scores
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='about.html'>
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className='bg-dark text-white-50'>
        <div className='container-fluid'>
          <span className='text-reset'>Author Name(s)</span>
          <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}
```

MAKE SURE TO COMMIT AGAIN HERE.

### Create View Components
Create jsx files for all the view components for the main section. Here's some example code:
```
import React from 'react';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>login displayed here</div>
    </main>
  );
}
```
Remember to replace all "class" with "className"

### Create the Router
The router will display each main section as requested.
Import the router component and all the view components into app.jsx component.
```
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
```
Wrap the elements within component in app.jsx with <\BrowserRouter><\BrowserRouter>

### Navigating Routes
```
<a className="nav-link" href="play.html">Play</a>

// to

<NavLink className='nav-link' to='play'>Play</NavLink>
```
### Injecting the Routed Element
In app.jsx elements:
```
 <main>App components go here</main>

 // to

<Routes>
  <Route path='/login' element={<Login />} exact />
  <Route path='/play' element={<Play />} />
  <Route path='/scores' element={<Scores />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>
```
(The * makes it so you can handle if an unknown path is requested.)

Add in this code to the bottom of app.jsx so it can actually handle those cases.
```
function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
```

### Converting to React Components
create jsx files with each insertable main element needed on the website. Make sure to import the css files. Example:
```
import './play.css';
```
Delete redundant html files.

### Deployment Script
Delete deployfiles.sh.

Create deployReact.sh, fill it with the following code.
```
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployReact.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying React bundle $service to $hostname with $key\n"

# Step 1
printf "\n----> Build the distribution package\n"
rm -rf build
mkdir build
npm install # make sure vite is installed so that we can bundle
npm run build # build the React front end
cp -rf dist/* build # move the React front end to the target distribution

# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}/public
mkdir -p services/${service}/public
ENDSSH

# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i "$key" build/* ubuntu@$hostname:services/$service/public

# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf build
rm -rf dist
```
## Simon React Javascript
Adding in interactivity

### About component
