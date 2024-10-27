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