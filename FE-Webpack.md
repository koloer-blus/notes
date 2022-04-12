# `Webpack`流程解析
>本质上，**webpack** 是一个用于现代 JavaScript 应用程序的 _静态模块打包工具_。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)，然后将你项目中所需的每一个模块组合成一个或多个 _bundles_，它们均为静态资源，用于展示你的内容。
## Webpack 5.x
### 流程梳理

读取`webpack`配置参数 => 启动`webpack`，创建`complier`对象开始解析项目 => 解析`entry`，构建依赖关系树 => 编译文件 => 输出文件

### 初始化阶段

#### 读取配置参数
这一步会依靠于我们使用的`npm scripts`命令中指定的`webpack`配置文件来读取，如不指定默认为项目根目录下`webpack.config.js`。
- 在执行`npm scripts`命令时，底层通过`process.args` + 对应的`webpack`配置文件合并为当前的启动配置
- 然后调用`validateSchema`来验证配置
- 最后通过调用`getNormalizedWebpackOptions` + `applyWebpackOptionsBaseDefaults`合并最终配置

#### 创建`Complier`对象
> `complier`对象是`webpack`的编译和调度中心，是一个编译器实例。
> 这个对象会一直存活直到流程结束退出。
> 在 `webpack` 的每个进程中，`compiler` 只会生成一次

`Compiler` 模块是 webpack 的主要引擎，它通过 [CLI](https://webpack.docschina.org/api/cli) 或者 [Node API](https://webpack.docschina.org/api/node) 传递的所有选项创建出一个 compilation 实例。 它扩展（extends）自 `Tapable` 类，用来注册和调用插件。 大多数面向用户的插件会首先在 `Compiler` 上注册。

>`Compilation` 模块会被 `Compiler` 用来创建新的 compilation 对象（或新的 build 对象）。 `compilation` 实例能够访问所有的模块和它们的依赖（大部分是循环依赖）。 它会对应用程序的依赖图中所有模块， 进行字面上的编译(literal compilation)。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。
>`Compilation`是单次编辑过程的管理器，比如 `watch = true` 时，运行过程中只有一个 `compiler` 但每次文件变更触发重新编译时，都会创建一个新的 `compilation` 对象

根据读取到的最终配置(`options`)生成对应的`complier`对象。

遍历用户定义的 `plugins` 集合，因为**任何一个`webpack`插件都是一个类(当然类本质上都是funciton的语法糖)，每个插件都必须存在一个`apply`方法**。执行插件的 `apply` 方法，这个方法接受一个`complier`对象，一次来实现插件的加载注入。

> 这里需要进行以下思量：
`webpack`插件**类似发布订阅的模式，通过`compiler`上监听事件。然后再打包编译过程中触发监听的事件从而添加一定的逻辑影响打包结果**。
但是订阅模式是一种松耦合架构，发布器只是在特定时机发布事件消息，订阅者并不或者很少与事件直接发生交互，举例来说，我们平常在使用 HTML 事件的时候很多时候只是在这个时机触发业务逻辑，很少调用上下文操作。而 webpack 的钩子体系是一种强耦合架构，它在特定时机触发钩子时会附带上足够的上下文信息，插件定义的钩子回调中，能也只能与这些上下文背后的数据结构、接口交互产生 **「side effect」**，进而影响到编译状态和后续流程。


调用 `new WebpackOptionsApply().process` 方法，加载各种内置插件。
然后注入内置插件、注册各种模块工厂、初始化 `RuleSet` 集合、加载配置的插件等。

### 构建阶段

#### 解析`Entry` ，构建依赖关系树

`module` => `ast` => `dependences` => `module`

在这里，通过内置的 `EntryOptionPlugin` 插件，处理 `entry` 配置。
然后利用AST语法树，解析每个模块之间的依赖关系，递归分析遍历，从而形成对应的依赖关系树。

具体步骤如下：
- 调用 `handleModuleCreate` ，根据文件类型构建 `module` 子类
- 调用 [loader-runner](https://xie.infoq.cn/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Floader-runner) 仓库的 `runLoaders` 转译 `module` 内容，通常是从各类资源类型转译为 JavaScript 文本
- 调用 [acorn](https://xie.infoq.cn/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Facorn) 将 JS 文本解析为 AST
- 遍历 AST，识别 `require/ import` 之类的导入语句，确定模块对其他资源的依赖关系。触发各种钩子在 `HarmonyExportDependencyParserPlugin` 插件监听 `exportImportSpecifier` 钩子，解读 JS 文本对应的资源依赖调用 `module` 对象的 `addDependency` 将依赖对象加入到 `module` 依赖列表中
- AST 遍历完毕后，调用 `module.handleParseResult` 处理模块依赖
- 对于 `module` 新增的依赖，调用 `handleModuleCreate` ，控制流回到第一步
`module`对象是什么:
webpack 内部所有资源都会以`module`对象形式存在，所有关于资源的操作、转译、合并都是以`module`为基本单位进行的
-   `id`属性，表示当前模块针对于`this.rootPath`的相对目录。
-   `dependencies`属性，它是一个`Set`内部保存了该模块依赖的所有模块的模块ID。
-   `name`属性,它表示该模块属于哪个入口文件。
-   `_source`属性，它存放模块自身经过`babel`编译后的字符串代码。

之后调用`complier.run()`方法来进行编译。

#### 编译文件
-   根据入口文件路径分析入口文件，对于入口文件进行匹配对应的`loader`进行处理入口文件。
-   将`loader`处理完成的入口文件使用`webpack`进行编译。
-   分析入口文件依赖，重复上边两个步骤编译对应依赖。
-   如果嵌套文件存在依赖文件，递归调用依赖模块进行编译。
- 通过`babel`分析依赖，并且同时将所有依赖的路径更换为相对于项目启动目录`options.context`的路径。
-   入口文件中如果存在依赖的话，递归上述步骤编译依赖模块。
-   将每个依赖的模块编译后的对象加入`this.modules`。
-   将每个入口文件编译后的对象加入`this.entries`。
-  递归编译完成后，组装一个个包含多个模块的`chunk`

什么是`chunk`?
`chunk` 是输出的基本单位，默认情况下这些 `chunks` 与最终输出的资源一一对应，那按上面的规则大致上可以推导出一个 `entry` 会对应打包出一个资源，而通过动态引入语句引入的模块，也对应会打包出相应的资源，我们来看个示例。
-   `name`:当前入口文件的名称
-   `entryModule`: 入口文件编译后的对象。
-   `modules`: 该入口文件依赖的所有模块对象组成的数组，其中每一个元素的格式和`entryModule`是一致的。

# 编译完成阶段
>这一步的关键逻辑是将 `module` 按规则组织成 `chunks` ，webpack 内置的 `chunk` 封装规则比较简单：
  `entry` 及 entry 触达到的模块，组合成一个 `chunk` 。使用动态引入语句引入的模块，各自组合成一个 `chunk`
### 输出文件
1.  构建本次编译的 `ChunkGraph` 对象；
2.  遍历 `compilation.modules` 集合，将 `module` 按 `entry/动态引入` 的规则分配给不同的 `Chunk` 对象；
3.  `compilation.modules` 集合遍历完毕后，得到完整的 `chunks` 集合对象，调用 `createXxxAssets` 方法
4.  `createXxxAssets` 遍历 `module/chunk` ，调用 `compilation.emitAssets` 方法将资 `assets` 信息记录到 `compilation.assets` 对象中
5.  触发 `seal` 回调，控制流回到 `compiler` 对象

经过构建阶段后，`compilation` 会获知资源模块的内容与依赖关系，也就知道“输入”是什么；而经过 `seal` 阶段处理后， `compilation` 则获知资源输出的图谱，也就是知道怎么“输出”：哪些模块跟那些模块“绑定”在一起输出到哪里。

`seal` 结束之后，紧接着调用 `compiler.emitAssets` 函数，函数内部调用 `compiler.outputFileSystem.writeFile` 方法将 `assets` 集合写入文件系统：
-   将文件写入磁盘前调用`plugin`的`emit`钩子函数。
-   判断`output.path`文件夹是否存在，如果不存在，则通过`fs`新建这个文件夹。
-   将本次打包生成的所有文件名(`this.assets`的`key`值组成的数组)存放进入`files`中去。
-   循环`this.assets`，将文件依次写入对应的磁盘中去。
-   所有打包流程结束，触发`webpack`插件的`done`钩子。
-   同时为`NodeJs Webpack APi`呼应，调用`run`方法中外部传入的`callback`传入两个参数。


## 参考内容
- [# Webapck5 核心打包原理全流程解析，看这一篇就够了](https://mp.weixin.qq.com/s/85S7i3z9pVJyMjVKqXHy6w)
- [# 【万字】透过分析 webpack 面试题，构建 webpack5.x 知识体系](https://juejin.cn/post/7023242274876162084)
- [# 当面试官问Webpack的时候他想知道什么](https://juejin.cn/post/6943468761575849992)
- [# 万字总结 一文吃透 Webpack 核心原理](https://xie.infoq.cn/article/ddca4caa394241447fa0aa3c0)
- [# webpack 官方文档](https://webpack.docschina.org/concepts/)
- [# webpack 知识图谱](https://gitmind.cn/app/doc/fac1c196e29b8f9052239f16cff7d4c7)
- [# webpack构建流程分析](https://juejin.cn/post/6844904000169607175)