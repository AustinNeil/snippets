# Using Git

[Great Playground to mess with git commands](https://onlywei.github.io/explain-git-with-d3/#freeplay)\
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

Now you can see that your README.md file from above has moved from **Changes not staged for commit** to **Changed to be committed**.\
In other words, you've moved README.md from your working directory, to your staging area.\
\
While it's not recommended because it can lead to sloppy commits, you may also use `git add *` to add all unstaged files to the staging area in one command.

<!-- #### Add flags

Some of the command flags for add include:

- i - interactive
-  -->

### Commit

Changes in the staging area can be offically commited using `git commit`\
A git commit is a marker that reflects some change within a code repo, and as such it has a corresponding message with it.\
\
Commits also give you the opportunity to see the working history of a branch or repo on the granular level, and are the most granular changes that can be tracked in a repo.

```git
git commit -m "message"
```

In the diagram from above: \

```text
master      --A----------------F--H-->
               \              /  /
ft-feature1 ----B-----C------E--/---->
                       \       /
ft-feature2 ------------D-----G------>
```

Each of the letters A, B, C, D, E, F, G, and H, indicate a commit along the branches of the repo.\

At each of these commits, the HEAD of the remote working directory is pointed there.\

Unstaged changes do not affect the head, nor does staging.\

On the next commit, the HEAD pointer will move to the most recent commit that encompasses all of the changes since the last commit.
<!--
TODO

- fixing commit messages -->

#### Commit Messages

The most common problem that inhibits git usage amongst teams is poor commit messages.\
When using the commands that we're going to be talking about soon such as `git log`, good commit messages are imperative.\
All commit messages should be written in the imperative form:

- Update ...
- Remove ...
- Delte ...

Additionally, commit messages should be able to finish this sentence:\

```text
If applied, this commit will ...
```

Example:

```git
git commit -m "Update README.md"
```

### Push

Changes commited to your local repository are referred to as your **local tree**.\
In order to push these changes to the origin (source) tree, use `git push`.\

```git
git push
```

#### Pushing to specific branch

In order to be more precise, it's recommended to explicitly declare the branch you want to be pushed to,

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

Sample Output

```text
commit 15cbaa987bac03e94d1f7g8fd60ca2ddb5ce2145
Author: AustinNeil
Date:   Sun Jan 01 12:04:49 2000 -0600

    Comment unused sections

commit 847553109de9a0e21f2cd89248259f4985fd5ea7
Author: AustinNeil
Date:   Sun Jan 01 11:59:23 2000 -0600

    Update Commit section
```

From above you can see some useful information:\
**commit** is the Commit SHA key. This is used to identify commits and make changes or move along the history if desired.\
**author** - who made the change\
**Date** - when it happened\
**Commit Message** is the text following the Data and before the next commit SHA. This is one of the reasons why proper commit messgages are so important!\

<!-- 
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
-->

## Concepts

### Branching

#### List available branches

To see a full list of available branches, including your current branch run,

```git
git branch
```

with no arguments or flags\
Sample Output:\

```git
* master
```

From the above sample we see just a single branch, the master branch, and the * indicates that master is the **working branch**

#### Create a new branch

To create a new brach run,

```git
git branch <branchName>
```

**Note:** Branches are always created from a source. The source of a branch is your **working branch** when you create a new branch.

##### Move to new branch

In order to move to the new branch, you must check it out using,

```git
git checkout <branchName>
```

##### Create and move in one command, use git checkout with -b flag

This can of course all be done at once via,

```git
git checkout -b <branchName>
```

The `-b` flag tells the checkout command that you'd also like to create the branch if it doesn't exist.

#### Delete a branch

Branch can be run with the `-d` flag in order to **delete** a branch.

```git
git branch -d <branchName>
```

<!-- 
### Merging

TODO

- --no-ff

### Cherry-Picking

TODO

- Cherry Picking

### Pull Requests

TODO

- How to / what is -->

#### Putting it together

So far we've established the commands: Add, Status, Commit, Push, Log, and various branch commands. How do they fit together? \
Lets look at the diagram one more time.

```text
master      --A----------------G--H-->
               \              /  /
ft-feature1 ----B-----C------F--/---->
                       \       /
ft-feature2 ------------D-----E------>
```

How do we create this diagram, one command at a time?\
  1) `git branch ft-feature1` - This creates the ft-feature1 branch, and sets the inital state of the branch at B
  2) `git checkout ft-feature1` - Make the working branch ft-feature1
  3) *Some code changes*
  4) `git add *` - Add changes from above to staging area
  5) `git commit -m "Commit C"` - Commit the staged changes, move the HEAD of ft-feature1 to C
  6) `git checkout -b ft-feature2` - Since our working branch is ft-feature1, ft-feature2 will be a child of ft-feature1, and point D will be the initial state of ft-feature2, which is also a copy of C
  7) *Some code changes*
  8) `git add *` - Add above changes to staging area
  9) `git commit -m "Commit E"` - Commit the staged changes, move the HEAD of ft-feature2 to E
  10) `git checkout ft-feature1` - Move back to ft-feature1 branch
  11) *Some code changes*
  12) `git add *` - Add above changes to staging area
  13) `git commit -m "Commit F"` - Commit the staged changes, move the HEAD of ft-feature1 to F

At this point, you've made changes for two different features, but you haven't had the opportunity to combine them back into our master branch.\
How do you do this?\
Merging!

### Merging

Merging is the answer to moving your changes between temporary branches (such as feature branches if you use them) to permenant branches (such as master).\

The most straightforward way to merge the two feature changes from above into our master branch is to do the following:
  1) `git checkout master` - Make the working branch master
  2) `git merge ft-feature1` - This will merge ft-feature1 into master, creating Commit G
  3) `git merge ft-feature2` - This will merge ft-feature2 into master, creating Commit H

After this has been done and the features have been integrated, you can delete the temporary feature branches using,
  1) `git branch -d ft-feature1`
  2) `git branch -d ft-feature2`

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
<!-- 
##### Fetch

TODO

##### Merge

TODO -->

Update your local repository to the newist commit from origin with

```git
git pull
```
