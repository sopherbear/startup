# Link (1):

the link element can link a file to an html file. Example:

```
<link rel="stylesheet" href="main.css"/>
```

# Div (2):

The div tag groups elements and divides them from other groups of elements (for example, items in a list).


# Selectors (3):

**#**: indicates an id. Should isolate one specific element.

**.whatever**: Indicates a class. 

Example:
```
footer {
  flex: 0 30px;
  background-color: darkslategray;
}

.nav-item {
  padding: 0 .3em;
}
```

# Padding vs. Margin (4, 6):

Padding: extra space within an element.

Margin: extra space around the element (think with walls and such.)

Types of Padding: padding-top, padding-right, padding-bottom, padding-left
(Each can have length, % of width, and/or inherit)

or could be written as padding: 40px, 3px, 8px, 90px

# Flex(5)
Example from codepen:
```
body {
  display: flex;
  flex-direction: column;
}
header {
  flex: 0 80px;
}
main {
  flex: 1;
  display: flex;
  flex-direction:row;
}
section:nth-child(1) {
  /*should make the proportions stay the same*/
  flex:1;
}

section:nth-child(2) {
  flex:3;
}

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

```
# Arrow Syntax Function Declaration (7)
Allows you to use an unnamed function. For example: () => 3; returns 3.

# The DOM(11)
The DOM is a tree. It represents HTML elements. You can access it through the browser under *document*. That is the top node of the tree.

You can use the DOM to insert, modify, or delete elements. Or to inject HTML.

# Span(12)
Span defaults to CSS display:inline. This means it will try and fit everything side-by-side.

# Displaying Image with Hyperlink
```
<a href="url" id="">
  <img src "sjdifhwuoh.png alt="shibainu">
</a>
```

# Box Model
element > padding > border > margin

# How to use JavaScript on particular elements (18)
```
//js file
function sayHello() {
  console.log('hello');
}

```
```
//html file
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
**To get an element with particular id:**
```
document.getElementById('elementId')
```
# Declaring a file to be HTML (20)
```
<!DOCTYPE html>
```
# JavaScript Loop Syntax(21)

IF:
```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```

FOR:
```
for (let i = 0; i < 2; i++) {
  console.log(i);
}
```

WHILE:
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```
SWITCH:
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

# Syntax for creating JavaScript Objects

# JavaScript Object
```
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```
23.
# include JavaScript on html page:
Use the "script" tag.
Or use a link.

# What is JSON?
JSON is JavaScript Object? Notation
It works similarly to a map, but convertible to and from js objects. uses key value pairs. Keys must be strings. 


# Console Commands
chmod: changes file permissions

pwd: print working directory

cd:change directory

ls: list 

vim:text editor

nano: text editor

mkdir: makes a directory

mv: move/rename

rm: remove

man: displays manual

ssh: secure remote login ***remote shell session***

ps: info about currently running processes

wget:download files from web

sudo: execute command as other user


ls -la : lists in long format, even hidden ones.

root domain: main website (familyrecipebook.click)
subdomain: other sections(startup.)
top-level domain: the suffix (like .com)

web certificate necessary
