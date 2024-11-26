# Startup
startup application for CS 260

### Notes
This repository contains a [notes.md file](./notes.md), which contains class notes.


# Family Recipebook Application

## Specification Deliverable
This section contains the details required in the startup specification assignment. 

### Elevator pitch

Nothing seems to bring family together quite like Grammy's apple pie, Dad's grilled pork chops, or Great great Aunt Tilly's closely-guarded rhubarb crumble. By sharing and passing down these recipes, we can create rich family traditions and keep the memory of our loved ones close by, even if they have passed or live far away. This application will format, categorize, and alphabetize recipes that users enter into an online, sharable recipebook that the whole extended family can have access to, without the risk of the recipes getting lost or damaged over years of use.


### Design

![mock layout 1](./pictures/app1.jpg)


![mock layout 2](./pictures/app2.jpg)

### Key Features

* Secure login over HTTPS
* Allow user input
* Format, categorize, and alphabetize based on user input
* Allow users to view the recipebooks of other users
* Allow users to search for particular recipes


### Technologies

I will use the following technologies in the ways listed below:
* **HTML** : Use correct HTML structure for application.
* **CSS**  : Use for application styling on different screen sizes, format input in an appealing way.
* **React** : Provides login and choice display.
* **Service** : Backend service with endpoints for login and retrieving choices and input.
* **DB/Login** : Stores users, choices, and formatted input. Register and login users. Credentials securely stored in database.
* **Websocket** : Allows users to see the recipebooks of other users.


### HTML Deliverable

For this deliverable, I structured my startup application using HTML.

- [x] **HTML** : 7 HTML pages that include the following pages: home with login, creating a recipebook, a menu of one's own recipe book, a form to add a new recipe, a list of others' recipe books, a menu of another's recipe book, and the structure that all recipes will use.
- [x] **Links** : Each page has an option to navigate to one or multiple other pages, either through hyperlinks or linked images. In addition, the recipe menu has links to placeholders for actual recipes.
- [x] **Text** : There are text headers and text descriptions on the forms. The recipe itself will be completely text, although right now I have just put in placeholders for the actual text.
- [x] **Images** : I put in placeholders for the images. I plan to use a third-party service to supply pictures of food as the cover of each recipebook. I also put in a placeholder for an image in the tab.
- [x] **DB/Login** : There is an input box and submit button for login, creating new recipe books, and creating new recipes. The recipes themselves will be formatted directly from the input data.
- [x] **Websocket** : Each recipebook is accessible by any user, although users can only add to recipebooks that they have made. Recipebooks will be updated live. 



### CSS Deliverable

For this deliverable, I formatted the appearance of my application.

- [x] **Header, Footer, and Main Body Content**: I have all of these.
- [x] **Navigation Elements**: I added a navigation menu in the header for all of the pages. I also have several buttons that have links.
- [x] **Responsive to Window Resizing**: Flex has been applied, so the app should adjust well.
- [x] **Application Elements**: Played with color scheme, should have good contrast.
- [x] **Application Images**: Application has images that have been sized appropriately.



### React Deliverable

For this deliverable, I used Javascript and React so that the application could be interactive. I also added placeholders for later units.

- [X] **Bundled and Transpiled**: I bundled and transpiled my old html code.
    - [X] **Components**: Created stub components for main and used mocks for login, creating new books, and new recipes
    - [X] **Login**: I got the login mockup set up.
    - [X] **Database**: The word information is stored locally. It isn't retrieved locally yet, since I have to reformat the text and am not quite sure how to do that yet.
    - [X] **WebSocket**: I set placeholders for images that will be from an API. I also set placeholders for recipebooks that will viewed by other users.
    - [X] **Application Logic**: I stored individual elements of the recipe independent of one another in local storage, but triggered them to be stored all at the same time by the press of one button.
- [X] **Router**: I created a router for injecting code into main in between header and footer.
- [X] **Hooks**: I use several built-in hooks such as useState and onClick


### Service Deliverable

- [X] **Node.js/Express HTTP service**: I implemented Node.js and Express tools
- [X] **Static Middleware for Frontend**: I set it up so the image for "my recipe book" will always be the same one from the public file.
- [X] **Calls to Third-Party Sevice Endpoints**: The food images for "other books" are taken from third-party api.
- [X] **Backend Service Endpoints**: Placeholders for login. Endpoints for my_recipe_book name. Still some errors with endpoint for otherbooks, though.
- [X] **Frontend Calls Service Endpoints**: Frontend uses fetch to access endpoints like recipebook


### DB/Login Deliverable
For this deliverable, I set up the login and stored book names in mongodb.

-[X] **MongoDB Atlas database created**: I successfully created the database.
-[X] **Stores Data in MongoDB**: The database stores authentication information and book names and retrieves book names.
-[X] **User Registration**: User can create an account now.
-[X] **Existing User**: An existing user can log in and access their recipebookname.
-[X] **Uses MongoDB to Store Credentials**: Users are stored, as well as recipe book names that they submit.
-[X] **Restricts Functionality**: Unless the user is logged in, they cannot access the recipe books. MyRecipeBook doesn't pull up
names of other user's books.