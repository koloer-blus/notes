# React Router

> 从`React Router`源码来一步步理解
>
> 源码一共有四个大的内容板块：
>
> - `React Router`：声明式的路由，提供核心的路由功能。不能单独使用，需要配合`React Router Dom`和`React Router Native`使用
> - `React Router Dom`：浏览器应用使用
> - `React Router Native`：`React Native`使用（**我们在这里不深入探讨它**）
>
> 我们以`Browser Router`为例，一步一步来深入理解

## history

在了解`React Router`之前，我们先来了解下他们的核心依赖`history`。

这是一个由[Remix](https://github.com/remix-run)（`React Router`开发团队）开发的`npm`包，其中包含了对于浏览器和其他环境中运行的`JavaScript`程序提供历史记录和原生的导航操作。

同样，他也支持`browser history`、`hash history`、`memory history`（虽然现在的`React Router`以及不推荐使用）三种方式。

当然了，在这里我们只关心我们用到的API，如果有感兴趣的同学可以前往[history](https://github.com/remix-run/history/blob/dev/docs/getting-started.md)去深入了解。

1. `hisotry.listen`：监听当前的`location`的变化并在变化发生时调用给定的回调函数。

2. `history.action`：当前（最近）的历史栈的修改操作，这个属性会随着当前的`location`的变化而变化

3. `history.location`：当前的`location`，同样也是可变的

4. `createPath`：创建`Route Path`

5. `createBrowserHistory`：返回一个支持使用`HTML 5 history`进行`pushState`、`replaceState`以及`popState`事件的`BrowserHistory`实例。传入的`window`是当前需要展示视图默认所在的`document`

   ```react
   const PopStateEventType = 'popstate';
   
   function createPath({
     pathname = '/',
     search = '',
     hash = ''
   }: Partial<Path>) {
     if (search && search !== '?')
       pathname += search.charAt(0) === '?' ? search : '?' + search;
     if (hash && hash !== '#')
       pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
     return pathname;
   }
   
   //返回events队列（支持length、push、call方法）
   function createEvents<F extends Function>(): Events<F> {
     ……
   }
   
   
   function createBrowserHistory(
     options: BrowserHistoryOptions = {}
   ): BrowserHistory {
     let { window = document.defaultView! } = options;
     let globalHistory = window.history;
   
     // 返回当前的栈index和对应的window.location
     function getIndexAndLocation(): [number, Location] {
       ……
     }
   
     let blockedPopTx: Transition | null = null;
     function handlePop() {
       ……
     }
   
    //监听popState事件
     window.addEventListener(PopStateEventType, handlePop);
   
     let action = Action.Pop;
     let [index, location] = getIndexAndLocation();
     let listeners = createEvents<Listener>();
     ……
   
     //返回 默认第一个 路由
     if (index == null) {
       index = 0;
       globalHistory.replaceState({ ...globalHistory.state, idx: index }, '');
     }
   
     // 创建react router 的path
     function createHref(to: To) {
       return typeof to === 'string' ? to : createPath(to);
     }
   
     // 获取跳转的location
     // state默认为null是因为`window.history.state`也是如此
     function getNextLocation(to: To, state: any = null): Location {
       ……
     }
   
   	……
   
     let history: BrowserHistory = {
       get action() {
         return action;
       },
       get location() {
         return location;
       },
   	……
       listen(listener) {
         return listeners.push(listener);
       },
       ……
     };
   //返回history实例
     return history;
   }
   
   ```

## `Browser Router`

```react
/**
 * browser router 提供最干净的url
 */
export function BrowserRouter({
  basename,
  children,
  window
}: BrowserRouterProps) {
  let historyRef = React.useRef<BrowserHistory>();
  if (historyRef.current == null) {
  	//1.createBrowserHistory，获取对应的history实例
    historyRef.current = createBrowserHistory({ window });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  //2.useLayoutEffect，保证同步执行，也就是页面的渲染
  //3.history.listen，添加事件监听
  React.useLayoutEffect(() => history.listen(setState), [history]);
	
  //4.Router
  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
```

最后返回的`<Router`组件时来自于`React Router`中的自定义组件：

```react
export type Navigator = Pick<History, "go" | "push" | "replace" | "createHref">;

interface NavigationContextObject {
  basename: string;
  navigator: Navigator;
  static: boolean;
}

const NavigationContext = React.createContext<NavigationContextObject>(null!);

interface LocationContextObject {
  location: Location;
  navigationType: NavigationType;  // >>> history.Action
}

const LocationContext = React.createContext<LocationContextObject>(null!);



export function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = NavigationType.Pop,
  navigator,
  static: staticProp = false
}: RouterProps): React.ReactElement | null {
  ……

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;

  ……

  return (
    <NavigationContext.Provider value={navigationContext}>
      <LocationContext.Provider
        children={children}
        value={{ location, navigationType }}
      />
    </NavigationContext.Provider>
  );
}
```

其实 `<Router>` 只做了两件事：

- 一是给子组件包了一层`context`，让路由信息（ history 和 location 对象）能传递给其下所有子孙组件
- 二是绑定了路由监听事件，使每次路由的改变都触发`setState`。

这也就是为什么`Route`需要包裹在`Router`组件中，因为路由信息都由外层的容器组件通过 `context` 的方式，传递给所有子孙组件，子孙组件在拿到当前路由信息后，才能匹配并渲染出对应内容。此外在路由发生改变的时候，容器组件`<Router>` 会通过 `setState()` 的方式，触发子组件重新渲染。

## Route

```react
function Route(
  _props: PathRouteProps | LayoutRouteProps | IndexRouteProps
): React.ReactElement | null {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, ` +
      `never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
```

在这里我们就可以看到其实`Route`就是单纯的信息载体，纯打工人了。