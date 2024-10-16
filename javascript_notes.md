# JavaScript Notes
Javascript is used for interactive things. Like making an accordion open and close, for instance.

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

