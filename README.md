whats-my-contrib
===
POC

See how many garbage I have produced in a git repository

Also, use `git blame` to see how many code left, see https://gist.github.com/amitchhajer/4461043

```
git ls-files | while read f; do git blame --line-porcelain $f | grep '^author '; done | sort -f | uniq -ic | sort -n
```

Then compute the ratio of A/D and remaining code.