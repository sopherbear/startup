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
