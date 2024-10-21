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
16.
17.
18.
19.
20.
21.
22.
23.
24.
25.
26.
27.
28.
29.
30.
31.
32.
33.



