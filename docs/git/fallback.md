# git 版本回退方案

## 方案一

1. 首先，找到你想要回退的提交的哈希值。你可以使用 git log
2. 使用 git revert 命令创建一个新的提交，它会撤销指定提交所做的更改 git revert hash
3. git push

## 方案二

1. 首先，找到你想要回退的提交的哈希值。你可以使用 git log
2. 使用 git reset 命令回退到指定提交
3. git push --force

## 方案三

1. git log --oneline
2. git checkout -b new_branch_name
3. git reset --hard
4. git push --force origin reset_branch:search-components

## 注意

git reset 这将删除指定提交之后的所有更改,如果你想要保留这些更改，可以使用 git reset --soft 或 git reset --mixed 命令。

1. git reset --soft 命令将保留已提交的更改，但会将它们从当前分支中移除。
2. git reset --mixed 命令将保留已提交的更改
