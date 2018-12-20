# Using Git

## Tips

- Keep the length between commits as short as possible
- Use good, descriptive commit messages

## Terminologoy

- Working Directory - 
- Index (Staging Area)
- HEAD - Last commit made
- Origin
- Remote = Local
- Upstream

## Initialize your own new repo

```git
git init
```

## Clone an existing repo

```git
git clone /path/to/repo
```

For remote server or protected rep

```git
git clone username@host:/path/to/repo
```

## Status

To find what files are currently "untracked" vs what is staged to be committed, run

```git
git status
```

## Add

```git
git add <filename>
```

## Commit

```git
git commit -m "message"
```

This will commit to the HEAD of the remote working directory, but not yet to the origin directory

## Pushing to origin branch

```git
git push origin <branchName>
```

example `git push origin ft/10043-my-feature`

## Getting Updates

### Fetch vs. Merge vs. Pull

#### Pull

A `git pull origin <branchName>` will simply do the same as `git fetch origin <branchName>` followed automatically by `git merge origin <branchName>` and will attempt to do so automatically.

#### Fetch


#### Merge


Update your local repository to the newist commit from origin with

```git
git pull
```

## Branches

### Branch commands

#### Create a new branch

```git
git branch <branchName>
```

#### Move to new branch

```git
git checkout <branchName>
```

#### Create and move in one command, use git checkout with -b flag

```git
git checkout -b <branchName>
```

#### Delete a branch

```git
git branch -d <branchName>
```

## TODO

- status
- log
- commit
- add
- cherry-pick
- push
- pull
- rebase
- pull requests
- Branching
- Merge
- naming conventions for branches
- commit verbage
- Fixing or changing commit messages
- going back in time (stash)
- tagging
- set upstream
- no-ff