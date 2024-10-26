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