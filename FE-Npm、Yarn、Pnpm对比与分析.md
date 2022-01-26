## Npm、Yarn、Pnpm对比与分析

## Npm

> 开创了当今大多数 JavaScript 包管理器使用的打包标准和包协议的工具。该工具的开发人员还维护 npmjs.com 包管理网站，这是目前最流行的分发开源 JavaScript 库的地方。

### npm 2.x的依赖管理

> npm 2 在安装依赖包时，采用简单的递归安装方法

`npm2` 安装依赖的时候比较简单直接，直接按照包依赖的树形结构下载填充本地目录结构。

比如在项目中`A`和 `C` 都依赖 `B`，无论被依赖的 `B` 是否是同一个版本，都会直接无脑的生成对应的树结构，比如我们现在有下面的依赖：

- A@2.0.0：BaseA@1.0.0 BaseB@2.0.0
- B@3.0.0：BaseA@1.0.0 BaseB@2.0.1

那么`npm i`之后`node_modules`里面生成的内容将是下面这样的：

```
node_modules/ 
├─┬ A 
│ ├── C 
├─┬ B 
│ └── C 
```

在递归安装后就会出现下面的情况：

![](https://www.zoo.team/images/upload/upload_2353c438e4777d358ec10e7ee05abc9c.png)

- 优点：
  - 依赖的层级明显
  - 删除和移动操作都很方便
- 缺点：
  - 嵌套的层级过深
  - 相同版本之前存在大部分重复依赖

### npm3 依赖管理

> npm 3 会遍历所有的节点，逐个将模块放在 node_modules 的第一层，当发现有重复模块时，则丢弃， 如果遇到某些依赖版本不兼容的问题，则继续采用 npm 2 的处理方式

`npm3`对于`npm2`的情况进行了优化，那么如何进行优化呢？其实我们最直观的思路就是将树打平，将依赖扁平化，不就能解决嵌套过深和依赖冗余的问题。所以，在上面的例子中，如果我们用`npm3`来进行`install`，最后生成的`node_modules`会是这样的结构：

```
node_modules/ 
├─┬ A 
├─┬ B 
├─┬ C 
```

所以最终npm3会生成下面的依赖树：

![](https://www.zoo.team/images/upload/upload_1328c0b8feaf525299de1aaef56f9295.png)

所以npm3虽然打平了树形结构，但是没有解决重复依赖的问题，而且会出现由于`package.json`导致的依赖版本不固定的方法。

因此，出现了`package.lock.json`文件：

- 在团队开发中，确保每个团队成员安装的依赖版本是一致的，确定一棵唯一的 node_modules 树；
- node_modules 目录本身是不会被提交到代码库的，但是 package-lock.json 可以提交到代码库，如果开发人员想要回溯到某一天的目录状态，只需要把 package.json 和 package-lock.json 这两个文件回退到那一天即可 。
- 由于 package-lock.json 和 node_modules 中的依赖嵌套完全一致，可以更加清楚的了解树的结构及其变化。
- 在安装时，npm 会比较 node_modules 已有的包，和 package-lock.json 进行比较，如果重复的话，就跳过安装 ，从而优化了安装的过程

### npm安装依赖存在的问题

- 依赖安装时，需要生成 `node_modules` 目录，大量的文件复制使得安装效率低下
- 运行时，Node 模块解析需要大量的文件 `stat` 和目录读取与遍历以确定依赖的定位与解析

## Yarn

> 能更快的安装`npm`的安装包的同时支持更简单的使用`monorepos`，换句话来说，*允许我们的多个项目一起存在于同一个存储库中并相互交叉引用* 。

Yarn采取了一个不同的方法。每次`yarn`安装都会生成一个和`npm-shrinkwrap.json`类似的`yarn.lock`文件，但是它是默认产生的。除了常规信息，`yarn.lock`文件还包含了安装内容的检查从而确保使用相同版本的包。

像`npm`一样，`yarn`也使用了本地缓存。但是不像`npm`，`yarn`在安装已经缓存的依赖的时候并不需要网络连接，提供了一种`offline`模式。

Yarn提供一些其它的好处。比如，它允许聚合项目中使用的所有的licence，并且很容易看到。

### 依赖管理

>  yarn的依赖管理遵循五个步骤

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30761cefb2a84d32b436cd3e9e37c006~tplv-k3u1fbpfcp-watermark.awebp)

- checking：检查安装是否存在冲突配置文件以及系统是否兼容

- resolving packages：解析包，并且解析出依赖树中包的具体版本信息

  - 首先，从当前项目的package.json中获取首层依赖，首层依赖包括dependences、devDependences、optionalDependences
  - 遍历首层依赖，调用find方法获取依赖包的版本信息，然后递归调用find，查找每个依赖下的dependence中依赖的版本信息。在解析包的同时使用一个Set（fetchingPatterns）来保存已经解析和正在解析的package。
  - 在具体解析每个package时，首先会根据其name和range（版本范围）判断当前package是否为被解析过（即resolved）（通过判断是否存在于上面维护的set中，即可确定是否已经解析过）
  - 对于未解析过的包，首先尝试从lockfile中获取到精确的版本信息， 如果lockfile中存在对于的package信息，获取后，标记成resolved（已解析）。如果lockfile中不存在该package的信息，则向registry发起请求获取满足range的已知最高版本的package信息，获取后，将当前package标记为resolved
  - 对于已解析过的包，则将其放置到一个延迟队列（delayedResolveQueue）中先不处理
  - 当依赖树的所有package都递归遍历完成后，再遍历delayedResolveQueue，在已经解析过的包信息中，找到最合适的可用版本信息

  Resolving Packages 结束后，我们就确定了依赖树中所有package的具体版本，以及该包地址等详细信息。

- Fetching Packages：获取依赖包，这一步，会对缓存中没有的包进行下载，将对应package下载到缓存目录下，完成这一步，代表着依赖树中需要的所有包都存在缓存当中了

  - 已经在缓存中存在的package，是不需要重新下载的，所以第一步先过滤掉本地缓存中已经存在的package。过滤过程是根据`cacheFolder+slug+node_modules+pkg.name`生成一个path，判断系统中是否存在该path，如果存在，证明已经有缓存，不用重新下载，将它过滤掉。
  - 维护一个fetch任务的queue，根据Resolving Packages中解析出的包下载地址去依次获取包。
  - 在下载每个包的时候，首先会在缓存目录下创建其对应的缓存目录，然后对包的reference地址进行解析。
  - 如果reference是file协议，或者是相对路径，则说明其指向的是本地目录（即离线镜像），调用fetchFromLocal从离线缓存中获取包，否则调用fetchFromExternal到外部（registry） 获取包。
  - 将获取的package文件流通过fs.createWriteStream写入到缓存目录下，缓存下来的是.tgz压缩文件，再解压到当前目录下
  - 下载解压完成后，更新lockfile文件

- Linking Packages：这一步，是将缓存中的对应包扁平化的安装到项目的依赖目录下（一般为`node_modules`） >>> **这里可以参照npm3**

  - 在复制包之前，会先解析peerDependences，如果找不到匹配的peerDependences，进行warning提示
  - 之后对依赖树进行扁平化处理，生成要拷贝到的目标目录dest
  - 对扁平化后的目标dest进行排序（使用localeCompare本地排序规则）
  - 根据flatTree中的dest（要拷贝到的目标目录地址），src（包的对应cache目录地址）中，执行将copy任务，将package从src拷贝到dest下。

- Building Packages：编译一部分二进制包

## Pnpm

> `pnpm`是一种替代`npm`的高性能方案，也是会比`npm`更快，但是`pnpm`的磁盘利用效率是比`yarn`和`npm`都要好的。同样，pnpm也支持monorepo。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c13ce7ad65e4345a2be7bd750187d51~tplv-k3u1fbpfcp-watermark.awebp)

### 如何工作

相比于`yarn`和`npm`，`pnpm`只需要**安装一次依赖**，然后让项目之间共享依赖项。

如果依赖不同版本的依赖，只添加不同的文件到`store`中。例如，如果它有 100 个文件，而新版本仅在其中一个文件中有更改，`pnpm update`则只会将 1 个新文件添加到存储中，而不是仅为单个更改克隆整个依赖项。

### 为什么它这么快？

因为它采用了巧妙的方式，利用硬链接和符号链接，以避免复制所有本地缓存的源文件，这是打败yarn在性能上最主要的一方面。

利用 **hard link**`[1]` 硬链接机制，在全局目录（默认为 `${os.homedir}/.pnpm-store`）存储(`files`目录下)并维护(`metadata`目录下)依赖文件的信息，这样可以保证所有下载的依赖文件只有一份真实的磁盘存储。

在生成 `node_modules` 目录时，使用 `symlink` 软连接方式生成相关目录和文件结构。这样就避免了复制文件导致的磁盘 IO 性能问题。

由于这种依赖关系的链接，它的速度也比其替代品快 2 倍。通过使用这项技术和一些真正高性能的缓存解决方案。





## 总结

| 对比内容                                                    | Yarn                                                         | Npm                                               | Pnpm                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 安装速度                                                    | 快                                                           | 普通                                              | 很快                                                         |
| monorepo工作区                                              | 支持                                                         | 不支持                                            | 支持                                                         |
| 兼容性（指对于尚未遵循现代`Node.js`包模块解析标准的遗留包） | 好                                                           | 最好                                              | 差                                                           |
| 磁盘利用率                                                  | 普通                                                         | 差                                                | 好                                                           |
| 综合                                                        | 通过缓存策略尽可能的避免不必要的操作，一定程度上提升了依赖安装的体验 | `npm`是一个成熟的，稳定的并且易于使用的包管理器。 | 从依赖生成和模块查找方面下手设计新的方案，解决从磁盘 IO 这个导致性能问题的主要原因 |





