import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","杂记",["/index.html","/README.md"]],
  ["v-61356017","/React/React%20Concurrent%20Mode.html","从React 开始架构分析",["/React/React Concurrent Mode.html","/React/React%20Concurrent%20Mode","/React/React Concurrent Mode.md","/React/React%20Concurrent%20Mode.md"]],
  ["v-b7c4f514","/interview/EventLoop%E8%AF%A6%E8%A7%A3.html","EventLoop",["/interview/EventLoop详解.html","/interview/EventLoop%E8%AF%A6%E8%A7%A3","/interview/EventLoop详解.md","/interview/EventLoop%E8%AF%A6%E8%A7%A3.md"]],
  ["v-2fa9fbe6","/interview/%E5%89%8D%E7%AB%AF%E6%A8%A1%E5%9D%97%E5%8C%96.html","模块化标准现状",["/interview/前端模块化.html","/interview/%E5%89%8D%E7%AB%AF%E6%A8%A1%E5%9D%97%E5%8C%96","/interview/前端模块化.md","/interview/%E5%89%8D%E7%AB%AF%E6%A8%A1%E5%9D%97%E5%8C%96.md"]],
  ["v-7c29de32","/interview/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5URL%E7%BD%91%E5%9D%80%E5%8F%91%E7%94%9F%E7%9A%84%E4%BA%8B%E6%83%85.html","",["/interview/浏览器输入URL网址发生的事情.html","/interview/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5URL%E7%BD%91%E5%9D%80%E5%8F%91%E7%94%9F%E7%9A%84%E4%BA%8B%E6%83%85","/interview/浏览器输入URL网址发生的事情.md","/interview/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5URL%E7%BD%91%E5%9D%80%E5%8F%91%E7%94%9F%E7%9A%84%E4%BA%8B%E6%83%85.md"]],
  ["v-a61546fa","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/Css%E5%AE%9E%E7%8E%B0%E7%AE%80%E5%8D%95%E5%9B%BE%E5%BD%A2.html","利用纯CSS实现一些简单的形状",["/文章笔记/Css实现简单图形.html","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/Css%E5%AE%9E%E7%8E%B0%E7%AE%80%E5%8D%95%E5%9B%BE%E5%BD%A2","/文章笔记/Css实现简单图形.md","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/Css%E5%AE%9E%E7%8E%B0%E7%AE%80%E5%8D%95%E5%9B%BE%E5%BD%A2.md"]],
  ["v-4b84498f","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/V8%E5%BC%95%E6%93%8ELazyParsing--%E8%BD%AC%E8%BD%BD.html","1. 引言",["/文章笔记/V8引擎LazyParsing--转载.html","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/V8%E5%BC%95%E6%93%8ELazyParsing--%E8%BD%AC%E8%BD%BD","/文章笔记/V8引擎LazyParsing--转载.md","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/V8%E5%BC%95%E6%93%8ELazyParsing--%E8%BD%AC%E8%BD%BD.md"]],
  ["v-ccbd0ed4","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/Vim%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.html","Vim使用教程",["/文章笔记/Vim使用手册.html","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/Vim%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C","/文章笔记/Vim使用手册.md","/%E6%96%87%E7%AB%A0%E7%AC%94%E8%AE%B0/Vim%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
