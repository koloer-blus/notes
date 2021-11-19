## 转移仓库的Commit

```
git remote -v
// 删除原本的远程repo
git remote rm origin
// 添加新的远程repo
git remote add origin ssh://username@xxx.xxx.xxx/new/repo
git push -u origin --all
git push -u origin --tags
```
