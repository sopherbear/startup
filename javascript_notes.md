# JavaScript Notes
Javascript is used for interactive things. Like making an accordion open and close, for instance.


## The Basics:
Example of printing something to the console:

```
console.log('Hello' + ' ' + 'world');
// OUTPUT: Hello world
```

Example function:

```
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
```


TO SEE HOW LONG CODE TAKES:

```
console.time('demo time');
// 'demo time': some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

To count how many times code is run:
```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```

Celebrations!! You can use if, else if, and else! Woohoo!!
```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```

Also:
```
if (true && (!false || true)) {
  //...
}
```

Also for and while loops.

Also "break" and "continue".


### Declaring Variables
In order to declare a variable, use **let** or **const**. (**let** for changeable vars, **const** for constants.)

```
let x = 1;

const y = 2;
```

### Arrow Function
Basically lets us pass in an anonymous function without much fuss. 
This one always returns 3:
```
() => 3;
```

closure: a function that lets it refer to parent, even after that function is closed. Basically, lets us update without the need for a global var.

```
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}

const a = 'a';
const b = 'b';

const closure = makeClosure(a);

console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```


### JavaScript Types
Primitive Types (sorry guys, their words, not mine): Null, undefined, boolean, number, BigInt, string, symbol

Object Types: Object, Function, Date, Array, Map, JSON(a data-interchange format: similar to map, but not)

### Common Operators
+, -, *, /, === (the triple is NECESSARY), !==(inequality, double == is necessary)


### Working with Strings

length, indexOf(), split(), startsWith(), endsWith() (make sure to put the thing you are dividing by if it isn't whitespace), toLowerCase()


## Adding JavaScript to HTML

Can do it:
1. Directly with a "script" element. Example:
```
<button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
```
2. Or using an src attribute to reference to the whole js file. For example:
```
<head>
  <script src="javascript.js"></script>
</head>
```

## JavaScript Arrays

Basic Array:

```
const a = [1, 2, 2];
console.log(a[1]);
//OUTPUT: 2

console.log(a.length);
//OUTPUT: 3

```

### Basic Array Functions

push: add to end of array (a.push(4))
pop: remove from end of array (x=a.pop())
slice: return subarray (a.slice(1,-1))
sort: run a function to sort an array in place
values: use to iterate through array (for i of a.values())...
find: find first item satisfied by test function
forEach: run function on each array item (a.forEach(console.log))
map: map an array to a new array (a.map())
filter: removes filtered items (a.filter(i%2))
every: tests if all items match (a.every(i => i < 3))
some: tests if any items match (a.some(i => i < 3))

.length doesn't require parentheses.


### JSON
Looks a lot like a map. can contain following data types: string, number, boolean, array, object, or null. Usually contains objects.

THe Key is always a string, and the value is an associated data type.
Example:
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
always uses UTF-8.

Can convert to and from Javascript using JSON.parse and JSON.stringify

### The DOM

You can use javaScript to manipulate the DOM (which is the structure that html uses to construct stuff.)

To see the DOM, type *document* into the browser debugger console window, it will pull up the DOM.

To use it in javaScript, start with the *document* variable and go through the children. Example:

```
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to querySelectorAll in order to mess with particular elements.


*textContent* contains all element text.
```
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

To **insert** element:
Create it in the DOM document first (html). Then:
```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```


To **remove** element, call this on the parent element:
```
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

To inject blocks of HTML into element (probably get duck's help for full context):

```
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```


**Event Listeners:** Functions that get called when an event occurs with a particular element.

Example:
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```


**FUN FACT**: putting "use strict"; on top of js file makes it stricter, so code is cleaner and safer.

## Local Storage

browser's localStorage allows us to access info later on (like scores, usernames, etc.)
 

Functions to use in localStorage:

1. setItem(name, value) : Sets named item's value into local storage.
2. getItem(name) : get the value from storage
3. removeItem(name) : removes item from local storage
4. clear() : clears all items from local storage


Storage value MUST be string, number, or boolean.

Example: 
```
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));

```

## Promises

You can't do a lot of rendering at a time on main rendering thread, so the rest is done in a JS Promise.

State of Promise execution: pending (running asynchronously), fulfilled, or rejected.

For a pending state, it can end up returning either resolve or reject.

To do something with a resolved Promise, use then, finally, and catch.
"Then" is for if the promise is fulfilled, "catch" is for if it is rejected, and "finally" is ALWAYS called after processing is completed.

Example:
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
//    Coin toss result: tails
//    Toss completed
```


## Async/Await

Await wraps the execution of a Promise and blocks it until Promise state is fulfilled. Example:

```
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};

try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

we can designate the function as asynchronous so that await works. Example:

```
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
It will output upon being fulfilled.

Or we can change it to create a promise.

```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
//output: promise {<pending>}
```

Async declares that a function returns a promise. Await stops execution until the promise is resolved, one way or another.

```
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```