# React Notes
React combines JavaScript and HTML into its component format, but CSS has to be separate. The JavaScript and HTML go into a JSX file.

We run JSX through Babel so that the browset can actually do stuff with it.

## Babel in Codepen
Need to import React and import Reactdom.
Specify that the JavaScript Preprocessor is Babel, and it should work fine.

## Components
(Think like header, footer, main)

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