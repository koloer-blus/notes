# `BrowserRouter`和`HashRouter`的区别

## `BrowserRouter`

> A [`<Router />`](https://v5.reactrouter.com/core/api/Router) that uses the HTML5 history API (`pushState`, `replaceState` and the `popstate` event) to keep your UI in sync with the URL.																		——React Router Docs
>
> `<Router />` 使用 HTML5 提供的 history API (`pushState`, `replaceState` 和 `popstate` 事件) 来保持 UI 和 URL 的同步。





## `HashRouter`

> A [`<Router />`](https://v5.reactrouter.com/core/api/Router) that uses the hash portion of the URL (i.e. `window.location.hash`) to keep your UI in sync with the URL.																										——React Router Docs
>
> `<HashRouter>` 使用 URL 的 `hash` 部分（即 `window.location.hash`）来保持 UI 和 URL 的同步。



> 注意事项：Hash Router不支持`location.key`或`location.state`。