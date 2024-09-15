# CS260 Notes

[**Markdown Guide**](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


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



