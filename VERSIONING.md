# 版本管理说明

本项目采用 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/) 进行版本管理。

## 版本格式

```
主版本号.次版本号.修订号
MAJOR.MINOR.PATCH
```

例如：`1.2.3`

## 版本号递增规则

### 主版本号 (MAJOR)

当你做了**不兼容的 API 修改**时递增，例如：

- 配置文件格式发生重大变化
- 移除已废弃的功能
- 重构导致使用方式改变
- 依赖的最低版本要求提升

### 次版本号 (MINOR)

当你做了**向下兼容的功能性新增**时递增，例如：

- 新增页面或组件
- 新增配置选项（保持向后兼容）
- 新增 API 功能
- 性能优化

### 修订号 (PATCH)

当你做了**向下兼容的问题修正**时递增，例如：

- Bug 修复
- 文档更新
- 样式微调
- 依赖更新（不影响功能）

## 版本标签

我们使用 Git 标签来标记版本：

```bash
# 创建版本标签
git tag -a v1.0.0 -m "Release version 1.0.0"

# 推送标签到远程
git push origin v1.0.0

# 推送所有标签
git push origin --tags
```

## 预发布版本

对于预发布版本，使用以下格式：

- Alpha 版本：`1.0.0-alpha.1`
- Beta 版本：`1.0.0-beta.1`
- RC 版本：`1.0.0-rc.1`

## 版本历史

查看完整的版本历史，请参阅 [CHANGELOG.md](./CHANGELOG.md)。

## 发布流程

1. **更新版本号**
   ```bash
   # 在 package.json 中更新版本号
   npm version patch  # 或 minor / major
   ```

2. **更新 CHANGELOG**
   - 记录本次版本的所有变更
   - 按照 "新增"、"变更"、"废弃"、"移除"、"修复"、"安全" 分类

3. **提交变更**
   ```bash
   git add .
   git commit -m "chore: release v1.0.0"
   ```

4. **创建标签**
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   ```

5. **推送到远程**
   ```bash
   git push origin master --tags
   ```

## 提交信息规范

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范：

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 重构（不是新功能也不是修复） |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建过程或辅助工具变动 |

示例：
```
feat: 添加博客搜索功能
fix: 修复分页重置问题
docs: 更新 README 配置说明
chore: 升级依赖版本
```

## 分支策略

| 分支 | 说明 |
|------|------|
| `master` | 主分支，保持稳定可发布状态 |
| `develop` | 开发分支，日常开发在此进行 |
| `feature/*` | 功能分支，开发新功能 |
| `fix/*` | 修复分支，修复 Bug |
| `release/*` | 发布分支，准备新版本发布 |
