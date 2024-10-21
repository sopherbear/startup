# HTML Notes
For additional help, refer to [W3schools](https://www.w3schools.com/)

## Basics of HTML
To start out a file, HTML looks something like this:
```
<!DOCTYPE html>
<!--Sets the language to English-->
<html lang="en">
    <head>
        <!--Specifies the characters you are using-->
        <meta charset="UTF-8"/>
        <!--Makes it so that the dimensions don't go all wacky-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!--Title for the tab-->
        <title>Add Recipe</title>
        <!--image for the tab-->
        <link rel="icon" href="favicon.ico" />
    </head>
```

### Structure

The basic structure of HTML 

To comment:
```
<!-- This is an HTML comment -->
```
The basic structure of HTML looks like this:
```
<head>
</head>
<body>
  <header>
    <Whatever stuff you want in here>
  </header>
  <main>
    <Whatever stuff>
  </main>
  <footer>
    <whatever stuff>
  </footer>
</body>

```
Each thing in carrots is an *element*.
To give elements *attributes*, put extra info in before the close bracket.
Example:
```
<a href="sjsdldsko.html">Label</a>
```
### The Body
Place links for navigating around the webpage under "nav"

For a link, use:
```
<a href="sjsdldsko.html">Label</a>
```
For an image, use:
```
<img src="something.jpg" alt="something"/>
```
## Testing HTML

*To see the html in real time, click the server in the bottom right corner of VScode*

### Links

To add a link to an external file, use a link tag. Example:

```
<link rel="stylesheet" href="main.css"/>
<link rel="stylesheet" href="add_recipe.css">
```
You MUST have a rel attribute for it to work.