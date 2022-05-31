# GIT 奇技淫巧

![](https://mmbiz.qpic.cn/mmbiz_png/A1HKVXsfHNlLbWOuvyGBlO41hSYE0fZbZYcmsmAiaD9EIwCMUOibxgT9fsTpmItznX4IsTukq9eUib2krnUdXFJjw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 转移仓库的Commit

```shell
git remote -v
// 删除原本的远程repo
git remote rm origin
// 添加新的远程repo
git remote add origin ssh://username@xxx.xxx.xxx/new/repo
git push -u origin --all
git push -u origin --tags
```

## ADD

### 选择需要提交的内容(交互模式)
```
git add -p
```

### git v1.x
<table><thead><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: left;">Git Version 1.x</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: center;">新文件</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: center;">被修改的文件</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: center;">被删除的文件</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);text-align: left;background-color: rgb(240, 240, 240);min-width: 85px;">是否受当前所在目录限制</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);text-align: left;background-color: rgb(240, 240, 240);min-width: 85px;">说明</th></tr></thead><tbody style="border-width: 0px;border-style: initial;border-color: initial;"><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add -A.</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">将当前整个工作区中所有的文件改动提交至暂存区，包括新增、修改和被删除的文件，不受当前所在目录限制</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add .</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">将当前工作区中当前目录(包括子目录)下的所有新文件和对已有文件的改动提交至暂存区，但不包括被删除的文件</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add -u.</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">将当前整个工作区中被修改和被删除的文件提交至暂存区。而新文件因为未被跟踪(untracked)，所以不会被提交至暂存区</td></tr></tbody></table>

### git v2.x

<table><thead><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: left;">Git Version 2.x</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: center;">新文件</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: center;">被修改的文件</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);min-width: 85px;text-align: center;">被删除的文件</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);text-align: left;background-color: rgb(240, 240, 240);min-width: 85px;">是否受当前所在目录限制</th><th style="border-top-width: 1px;border-color: rgb(204, 204, 204);text-align: left;background-color: rgb(240, 240, 240);min-width: 85px;">说明</th></tr></thead><tbody style="border-width: 0px;border-style: initial;border-color: initial;"><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add -A</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">将当前整个工作区中所有的文件改动提交至暂存区，包括新增、修改和被删除的文件，不受当前所在目录限制</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add .</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">将当前工作区中当前目录(包括子目录)下的所有的文件改动提交至暂存区，包括新增、修改和被删除的文件</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add -u.</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">将当前整个工作区中被修改和被删除的文件提交至暂存区。而新文件因为未被跟踪(untracked)，所以不会被提交至暂存区</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);"><td style="border-color: rgb(204, 204, 204);min-width: 85px;">git add *</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">❌</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;text-align: center;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">✅</td><td style="border-color: rgb(204, 204, 204);min-width: 85px;word-break: break-all;">将当前工作区中当前目录(包括子目录)下的所有的文件改动提交至暂存区，包括新增、修改和被删除的文件，但不包括文件名以 <code>.</code> 符号开头的文件的改动</td></tr></tbody></table>

## Diff
![](https://mmbiz.qpic.cn/mmbiz_svg/7N2JRaWooRDn9mcapfLxhcicibcJ4r7rf7ztBPCQrSVKe4xB4OWxFpSxo8eHDnt1sPOev9MsgRFlbDoTwaHuuxKY6dmoupKLk5/640?wx_fmt=svg&wxfrom=5&wx_lazy=1&wx_co=1)


## `revert` 与 `reset`区别

### revert

> revert的原理是，在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化。它不会改变过去的历史，所以是首选方式，没有任何丢失代码的风险

`revert`提供一种相对柔和的方式，但是如果已经提交了多次代码，想要恢复之前的状态，那么这里就需要注意在使用了`revert`后需要进行工作区的代码合并和处理，避免代码的遗漏。

使用revert之前revert的commit号。一般我们在revert后会生成一个专属的revert分支，于是又新增了一个commit，把之前revert的代码又重新revert回来了。

### reset

![](https://mmbiz.qpic.cn/mmbiz_svg/7N2JRaWooRDn9mcapfLxhcicibcJ4r7rf76KqFXHGX0GqVVdqkcuHGZ22H0Sicp1Z3NJj16RdBzn0XpjU3BuIGU1TIxAJOb0cdZ/640?wx_fmt=svg&wxfrom=5&wx_lazy=1&wx_co=1)

> `reset`的作用是当你希望提交的`commit`从历史记录中完全消失就可以用


那么 `reset` 一般是什么时候用呢？在大多数的开发场景下，不要用，要用也是临时修改不想提交的信息，然后使用`git reset --hard`命令，但是这个命令也可能会让你的一天努力白费。

## 展示最近提交

```shell
git show
```

## 提交Commit相关
### 修改提交信息
```shell
git commit --amend --only
```

### 修改最近的一次尚未push的commit信息

```shell
git commit --amend --only -m "feat(type): message" 
```

### 把暂存的内容添加到上一次的提交

```shell
git commit --amend
```

## 意外执行了`hard reset`，如何恢复代码

```shell
git reflog

git reset --hard SHA1234
```


## 分支Branch
### 删除远端分支

```shell
git push origin --delete del-branch
```

### 从错误的分支拉取了内容需要去除这部分内容

```shell
git reflog

git reset --hard HEAD
```

### 挑选部分的commit到我新的分支
![](https://mmbiz.qpic.cn/mmbiz_svg/7N2JRaWooRDn9mcapfLxhcicibcJ4r7rf7bDHNHZgUYQ0cpBD5ksUg8UticBfzOe5vxm1QxvEJsBLAcR8xw0q8ukgnQibkRN5RhB/640?wx_fmt=svg&wxfrom=5&wx_lazy=1&wx_co=1)

```shell
git cherry-pick Head
```

### 从别人正在开发的分支迁出一个分支

```shell
git fetch -all

git checkout --track origin/daves
```

### 同步上游分支被删除的分支

```shell
git fetch -p
```

## Rebase & Merge
![](https://mmbiz.qpic.cn/mmbiz_svg/7N2JRaWooRDn9mcapfLxhcicibcJ4r7rf7I3Vuic4EduLUvoVrBwic7WibPj35KhkicHNVAhFbld8H8iaYhRzK3qTrJUoYJDGqGYU7k/640?wx_fmt=svg&wxfrom=5&wx_lazy=1&wx_co=1)

### 已经rebase不使用--force强推代码

```
git rebase -i main
git checkout main
git merge --ff-only mybranch
```

### 更加复杂的操作

```
git rebase --interactive
```

### 组合提交内容

```
git rebase -i main
```

### 安全合并策略

```
git merge --no-ff --no-commit mybranch
```


## Tacking File
### 重命名文件，修改文件大小写，希望被追踪
```shell
git mv --force myfile MyFile
```

## 参考
- [# 如果你还不会用 git 回滚代码，那你一定要来看看](https://mp.weixin.qq.com/s/vQ25Ewe6u30arKsW2EDCMw)
- [# 图解 Git，一目了然！](https://mp.weixin.qq.com/s/srHJ9cK4h00rV8s-Be16Wg)
- [# git add .，git add -A，git add -u，git add * 的区别与联系](https://mp.weixin.qq.com/s/odPAe1MJ8rjEIrWStgaGFw)