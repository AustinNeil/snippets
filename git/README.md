# Using Git

[Great Playground to mess with git commands](https://onlywei.github.io/explain-git-with-d3/#freeplay)
[Other Help](http://rogerdudler.github.io/git-guide/)

## Tips

TODO

- Keep the length between commits as short as possible
- Use good, descriptive commit messages

## Terminology

TODO

- Working Directory - 
- Index (Staging Area)
- HEAD - Last commit made
- Origin
- Remote = Local
- Upstream

## Workflow

Git projects use the analagy of a tree to organize a repository.\
The **Master Branch** should always be your **single source of truth**, and hence it's often used as your **trunk**\
From the **Master Branch**, other branches can be created for various reasons including: Testing, Development, Features, etc.\
The purpose of branching is to create an isolated part of the repository where changes will not affect anything else,\
especially the Master Branch

===

```text

master      --A----------------F--H-->
               \              /  /
ft-feature1 ----B-----C------E--/---->
                       \       /
ft-feature2 ------------D-----G------>
```

===

What the heck is going on here?\
Branching in action, albeit with some extra things we haven't quite gotten to yet.\
We'll circle back to this soon.

## Commands

### Status

To find what files are currently "untracked" vs what is staged to be committed, run

```git
git status
```

Example:

```git
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

This status report tells us a few very useful things:\
\
**On branch master** tells you that your current (working) branch is the master branch.\
**Your branch is up to date with 'origin/master'** assures you that you have pulled all recent commits from your origin repository's master branch.\
**Changes not staged for commit:** gives you a list of all files that have been modified since your last commit. These file changed are in your working directory, but not in your staging area (Index).\
\
In addition to these details, `git status` also will give you sample commands to do common tasks that you may be interested in doing, such as `git add`...

### Add

`git add` moves files from the working directory to the Staging Area

```git
git add <filename>
```

Example:

```git
git add .\README.md
```

If you run `git status` at this point, you'll notice a change

```git
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
```

Now you can see that your README.md file from above has moved from **Changes not staged for commit** to **Changed to be committed**,\
or in other words, you've moved README.md from your working directory, to your staging area.\
\
While it's not recommended because it can lead to sloppy commits, you may also use `git add *` to add all unstaged files to the staging area in one command.

<!-- #### Add flags

Some of the command flags for add include:

- i - interactive
-  -->

### Commit

Commit your changes after adding them to the staging area using,

```git
git commit -m "message"
```

This will commit to the HEAD of the remote working directory, but not yet to the origin directory
TODO

- fixing commit messages
- Commit verbage

### Push

TODO

```git
git push
```

#### Pushing to origin branch

```git
git push origin <branchName>
```

example `git push origin ft/10043-my-feature`

### Log

Review a history of commits to a branch using,

```git
git log
```

This is a great way to get the SHA hash of commits for other commands

#### Delete a branch

```git
git branch -d <branchName>
```

### Diff

TODO

### Stash

TODO

### Tagging

TODO

### Rebase

TODO

### Set-Upstream

TODO

## Concepts

### Branches

TODO

- naming conventions
  
#### Branch commands

##### Create a new branch

```git
git branch <branchName>
```

##### Move to new branch

```git
git checkout <branchName>
```

##### Create and move in one command, use git checkout with -b flag

```git
git checkout -b <branchName>
```

### Merging

TODO

- --no-ff

### Cherry-Picking

TODO

- Cherry Picking

### Pull Requests

TODO

- How to / what is

## Scenarios

### Initialize your own new repo

```git
git init
```

### Clone an existing repo

```git
git clone /path/to/repo
```

For remote server or protected rep

```git
git clone username@host:/path/to/repo
```

### Updates

#### Fetch vs. Merge vs. Pull

##### Pull

A `git pull origin <branchName>` will simply do the same as `git fetch origin <branchName>` followed automatically by `git merge origin <branchName>` and will attempt to do so automatically.

##### Fetch

TODO

##### Merge

TODO

Update your local repository to the newist commit from origin with

```git
git pull
```
