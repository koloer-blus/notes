# `React Query`快速指南

## 什么是`React Query`
`React Query`是一个专门用于获取数据的`React Library`，他能更好的支持`React`程序**获取、缓存、同步和更新服务状态**。换一种更贴切的说法，那就是`React Query`替我们完善了以往处理请
求时对状态、相应信息以及缓存等内容的处理。

## 怎么安装
`React Query`兼容 `React v16.8+`，并与 `React dom` 和 `React Native` 兼容。

```shell
npm i react-query


yarn add react-query
```

当然，除此之外你还可以通过`CDN`包进行导出，**然后在使用时需要`window.ReactQuery`进行全局挂载**。

```js
<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>
```


## 核心概念

下面的所有内容我们都围绕这个例子来展开：[示例代码](https://codesandbox.io/s/lucid-waterfall-dgdks9)

<iframe src="https://codesandbox.io/embed/react-query-demo-dgdks9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="React-Query-Demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


### `Query`：查询
查询是指从服务器获取数据，在一般不需要修改服务器数据时，`Queries`支持任何基于`Promise`的方法（这里更建议请求方法仅限于`GET`），这里可以查看上面示例中的`RepoInfo`组件以及相关代码。

查询使用`useQuery` Hook，`useQuery`接收三个参数，分别对应查询键值、查询所需`Promise`函数以及查询的配置项。

```js
//useQuery(queryKey, queryFn?, options);

const query = useQuery(['fetch-Query', name], axios.get('http://tets.api'), {
	enabled: false
});
```

其中第一个查询键值，更确切的来说是查询依赖，当依赖发生变化后会重新发起查询，可以传入一个数组，但是至少需要传入一个用于标明当前查询内容的`Query Key`。

第二个参数就是查询`promise`函数，这个函数根据不同情况不一样，可以是`fetch`、`axios`等请求方法。

第三个参数是这个查询的配置，包含是否自动查询、失败是否自动重试等。

除此之外，查询的结果`Query`包含的信息也是非常丰富，有表示状态的`isLoading`、`isError`、`isSuccess`这些，还有其他信息，包括`data`、`error`等信息。

#### 依赖查询

依赖查询（或串行查询）取决于先前的查询结果。要实现这一点，只需使用`enabled`选项就可以告诉查询何时可以运行：

```jsx
const repo = useQuery(["repo-info", repoId], () => api.getRepoInfo(repoId), {
	enabled: repoId !== 0,
});

```

#### 动态并行查询`Queries`

`useQueries`接受一组[**作为查询配置的对象**](https://cangsdarm.github.io/react-query-web-i18n/guides&concepts/query-functions#%E4%BD%BF%E7%94%A8%E6%9F%A5%E8%AF%A2%E5%AF%B9%E8%B1%A1%E4%BB%A3%E6%9B%BF%E5%8F%82%E6%95%B0)，并以**数组形式返回查询的结果**：

```jsx
const repoQueries = useQueries(
	repoIds.map((id) => {
		return {
			queryKey: ["repo-item", id],
			queryFn: () => api.getRepoInfo(id)
		};
	})
);
```

### `Mutations`：修改

与查询不同，修改通常意味着用于创建/更新/删除数据或执行服务器命令等副作用。

在进行修改时，我们需要使用`React Query`导出的`useMutation` hook：

```jsx
const mutation = useMutation(mutationFn, options)
```

`useMutation`接受两个参数，第一个为发起修改的修改函数，第二个为修改Query的相关配置。

其中发起修改的修改函数一般写法为`(v) => promise(...)`，在这其中，`v`一般是`mutate`方法传递给这个函数的参数。

返回值`mutation`其中包含我们常用的信息，还有`mutate`和`mutateAsync`、`reset`等方法。
- `mutate`是用于发起这个修改请求并且传递参数给我们的`mutationFn`；
- `mutateAsync`： 类似于`mutate`但返回一个可以等待的`Promise`，它将在成功时解析或抛出一个错误；
- `reset`：用于重置和修改请求的状态；

这里可以查看上面示例中的`RepoForm`组件及其相关代码

```jsx
const RepoForm: React.FC = () => {

	const nameRef = React.useRef(null as any);
	const idRef = React.useRef(null as any);
	const mutation = useMutation((newInfo) => api.postRepoInfo(newInfo), {
		onSuccess: () => alert("success"),
		onError: () => alert("❗error")
	});
	const submitForm = () => {
		const name = nameRef.current.value;
		const id = idRef.current.value;
		mutation.mutate({ name, id } as any);
	};
	return (
	<React.Fragment>
		<h3>Repo Form (mutation)</h3>
		<label htmlFor="name">name: </label>
		<input name="name" ref={nameRef}></input>
		<label htmlFor="id">repo Id: </label>
		<input name="id" ref={idRef}></input>
		<button onClick={submitForm}>Submit</button>
	</React.Fragment>
	);
};
```

除了上面的简单用法，我们还可以使用`useMutation`自带的一些副作用钩子更加细致的去控制不同的状态。
```jsx
useMutation(addTodo, {
  onMutate: (variables) => {
    // 修改即将发生！

    // （可选）返回包含回滚时使用的数据的上下文
    return { id: 1 };
  },
  onError: (error, variables, context) => {
    // 错误触发！
    console.log(`rolling back optimistic update with id ${context.id}`);
  },
  onSuccess: (data, variables, context) => {
    // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
    // 错误或成功……这并不重要
  },
});
```

### `Query Invalidation`：查询错误处理

在再次获取数据查询之前，等待查询变得过时并不总是可行的。 特别是当您知道由于用户所做的某些事情，查询的数据已经过期时。 为此，`QueryClient` 包含一个 `invalidateQueries` 方法，可以智能地将查询标记为过时的，并使之可用重新获取数据！

> 注意：在其他使用归一化缓存的库试图强制性地，或通过模式推断来使用新数据更新本地查询的情况下， React Query 为您提供了避免维护归一化缓存所需要的人工操作的工具，使得**失效具有针对性**，可以**在后台重新获取**并最终进行**原子级更新**。

当使用 `invalidateQueries` 使查询无效时，会发生两件事：

-   该查询被标记为过时的。此过时状态将覆盖 `useQuery` 或相关 hook 中使用的所有 `staleTime` 配置
-   如果查询正通过 `useQuery` 或相关 hook 渲染，则该查询也会在后台重新获取数据。

```jsx
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10,
});

// 该查询会被无效
const todoListQuery = useQuery(["todos", { version: 20 }], fetchTodoList);

// 该查询会被无效
const todoListQuery = useQuery(["todos", { version: 10 }], fetchTodoList);

// 该查询不会被无效
const todoListQuery = useQuery(["todos", { version: 5 }], fetchTodoList);
```

## 参考
- [# React Query](https://react-query.tanstack.com/)
- [# React Query 中文文档](https://cangsdarm.github.io/react-query-web-i18n/)