# CSS Notes
CSS makes things look nice and pretty, if you use it right.

## CSS and HTML
In order to make HTML stuff look pretty, there's a few ways to use CSS.

* You can use the *style attribute* on a specific element within HTML. 1st precedence.
```
<p style="color:green">CSS</p>
```
* You can use the *style element* in the *head* section of an html file to specify a stylistic choice for all of a particular element in the file. (THIS USES CURLY BRACES.) 2nd precedence.
```
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```
* OR you can use an html link in the head to create a hyperlink to an external file containing CSS rules. 3rd precedence.
```
<link rel="stylesheet" href="styles.css"/>
```
```
p {
  color:green;
}
```
Best Practice: Put rules for the highest levels in the DOM higher in the document. That way, you aren't writing over broad groups of things after apply details to more specified areas.

*CSS defines things as boxes. Think the box model.*

![alt text](image.png)

## Accessing particular areas within DOM



## Flex

Flex is how we make interfaces stretch and condense, depending on the size of the screen and the size of the window.

To make flex apply to a body or some other element, do this: 
```
body {
  display: flex;
  flex-direction: column /* or row */
  margin: 0
  height: 100vh;
}
```

For something NOT to flex:
```
header {
  flex: 0 80px;
  /* makes it so the area doesn't flex at all, but stays set at 80 px. */
}
```

For sections within main to flex:

```
main {
  flex: 1; /*makes it so it can flex*/
  display: flex;
  flex-direction: row; /*makes it so it will flex horizontally*/
}

/* make sure to use nth child wording. It won't work without it.*/
section:nth-child(1) {
  flex: 1; /*this is a proportion of 1 to whatever the proportions of the other sections are. */
}

section:nth-child(2) {
  flex: 3; /*So a 1 to 3 ratio.*/
}
```

### Media Query
Media query allows us to work with different screen sizes.
