# CS260 Notes

[**_Markdown Guide Link_**](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


## GitHub, Commits, Push, and Pull
Creating a repository is easiest through GitHub, but a lot of adding to the repository is done through VS code or the terminal.
You can also get the repository URL on GitHub, which is nice.

### Code Help

**To create git clone, go to filepath that you want and execute the following:**
``` 
git clone url

cd repository_name
```


To add text to a file:

```
printf "\n text \n" >> file.md
```


To push to GitHub repository:

```
git status
```
(This helps you see what needs to be committed.)

```
git add file.md

git commit -am "Commit comments"

git push
```

To pull changes from GitHub to the clone:

```
git pull
```
(git fetch lets you see the differences without actually pulling.)


For now, I don't think merge conflicts are overly relevant.


## AWS and Setting Up a Domain
I think that AWS kind of sucks to set up. But it's done now. Here's what I learned.

### Getting a Server
Once you have an account with AWS, go to EC2 and set up the server. The instructions seem fairly straightforward. It is ok to pick any license for a starter project. Make sure to make it broadly accessible if you want it that way.

### Getting a Domain
Go to Route53. Check to see if your desired domain name is available.

*Pro tip: Look for .click domains. They are $3 a year rn*

Register the domain name, then go to the Hosted zones tab. Create record using the IP address from the server, then create another record using an asterisk in the Record name field. This will allow you to use subdomains and the main domain with the server.


## HTML
HTML is a markdown language that provides all structure and none of the looks. Think of it as a skeleton.

[HTML Notes](./HTML_notes.md)


## CSS
CSS (Cascading style sheets) is used to format HTML so that it looks nice. Think of it as adding some flesh and skin onto that skeleton.

[CSS Notes](./CSS_notes.md)


## JavaScript
Javascript is used for all the interactive features on a web application.

[JavaScript Notes](./javascript_notes.md)


## Study Guide Notes
[study_guide](./study_guide.md)


## React Notes
[react_notes](./react_notes.md)
