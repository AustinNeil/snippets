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