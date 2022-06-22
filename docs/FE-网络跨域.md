# 网络跨域
## 什么是跨域
在讲解跨域之前，需要讲解一个重要的安全策略就是**同源策略**。
其中，**源 = 协议  + 域名 + 端口源**，**protocol（协议）、domain（域名）、port（端口）三者一致，**才是同源。反之，就是跨域。

**同源策略**是一个重要的安全策略，它用于限制一个[origin](https://link.segmentfault.com/?enc=biqlIWTqtcIYG4DkzheMsg%3D%3D.lzsEnnciMR4dFakuVMSjIFThS9eVLHPAkuaKX%2BGA6mAd86hbStHaHSARp%2BDxo276UO0t9VxLmcMCwIUeGzWrTw%3D%3D)的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

### 限制范围
- `Cookie`、`LocalStorage`、`IndexDB`
- `DOM`获取
- `AJAX`请求不能发送

<table style="visibility: visible;"><thead style="visibility: visible;"><tr style="border-width: 1px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-top-style: solid; border-top-color: rgb(204, 204, 204); background-color: white; visibility: visible;"><th style="border-top-width: 1px; border-color: rgb(204, 204, 204); text-align: left; background-color: rgb(240, 240, 240); min-width: 85px; visibility: visible;">源 1</th><th style="border-top-width: 1px; border-color: rgb(204, 204, 204); text-align: left; background-color: rgb(240, 240, 240); min-width: 85px; visibility: visible;">源 2</th><th style="border-top-width: 1px; border-color: rgb(204, 204, 204); text-align: left; background-color: rgb(240, 240, 240); min-width: 85px; visibility: visible;">是否同源</th></tr></thead><tbody style="border-width: 0px; border-style: initial; border-color: initial; visibility: visible;"><tr style="border-width: 1px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-top-style: solid; border-top-color: rgb(204, 204, 204); background-color: white; visibility: visible;"><td style="border-color: rgb(204, 204, 204); min-width: 85px; visibility: visible;"><span style="font-weight: bold; color: rgb(255, 53, 2); visibility: visible;">www.baidu.com</span><sup style="line-height: 0; font-weight: bold; color: rgb(239, 112, 96); visibility: visible;"></sup></td><td style="border-color: rgb(204, 204, 204); min-width: 85px; visibility: visible;"><span style="font-weight: bold; color: rgb(255, 53, 2); visibility: visible;">www.baidu.com/news</span><sup style="line-height: 0; font-weight: bold; color: rgb(239, 112, 96); visibility: visible;"></sup></td><td style="border-color: rgb(204, 204, 204); min-width: 85px; visibility: visible;">✅</td></tr><tr style="border-width: 1px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-top-style: solid; border-top-color: rgb(204, 204, 204); background-color: rgb(248, 248, 248); visibility: visible;"><td style="border-color: rgb(204, 204, 204); min-width: 85px; visibility: visible;"><span style="font-weight: bold; color: rgb(255, 53, 2); visibility: visible;">www.baidu.com</span><sup style="line-height: 0; font-weight: bold; color: rgb(239, 112, 96); visibility: visible;"></sup></td><td style="border-color: rgb(204, 204, 204); min-width: 85px; visibility: visible;"><span style="font-weight: bold; color: rgb(255, 53, 2); visibility: visible;">www.baidu.com</span><sup style="line-height: 0; font-weight: bold; color: rgb(239, 112, 96); visibility: visible;"></sup></td><td style="border-color: rgb(204, 204, 204); min-width: 85px; visibility: visible;">❌</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><span style="font-weight: bold;color: rgb(255, 53, 2);">http://localhost:5000</span><sup style="line-height: 0;font-weight: bold;color: rgb(239, 112, 96);"></sup></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><span style="font-weight: bold;color: rgb(255, 53, 2);">http://localhost:7000</span><sup style="line-height: 0;font-weight: bold;color: rgb(239, 112, 96);"></sup></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);"><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><span style="font-weight: bold;color: rgb(255, 53, 2);">http://localhost:5000</span><sup style="line-height: 0;font-weight: bold;color: rgb(239, 112, 96);"></sup></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><span style="font-weight: bold;color: rgb(255, 53, 2);">http://127.0.0.1:5000</span><sup style="line-height: 0;font-weight: bold;color: rgb(239, 112, 96);"></sup></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: white;"><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><span style="font-weight: bold;color: rgb(255, 53, 2);">www.baidu.com</span><sup style="line-height: 0;font-weight: bold;color: rgb(239, 112, 96);"></sup></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><span style="font-weight: bold;color: rgb(255, 53, 2);">baidu.com</span><sup style="line-height: 0;font-weight: bold;color: rgb(239, 112, 96);"></sup></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;">❌</td></tr><tr style="border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);"><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><br></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><br></td><td style="border-color: rgb(204, 204, 204);min-width: 85px;"><br></td></tr></tbody></table>

## 跨域解决方法
### 代理
适用场景：生产环境不跨域，但是开发环境跨域

#### nginx代理跨域

`nginx`可以使用反向代理来实现跨域访问：

```
server {
        listen 80;
        server_name local.test;
        location /api {
            proxy_pass http://localhost:8080;
        }
        location / {
            proxy_pass http://localhost:8000;
        }
}

```


#### Node中间件代理
```js
app.use(function (req, res, next) { // 此方法就是一个最基本的中间件，它在每次请求之前打印时间  
  console.log('Time:', Date.now())  
  next()  
})  
  
app.get('/hello', (req, res) => { // "GET /hello" 就是一个路由  
  res.send('Hello World!')  
})
```

#### Node正向代理

正向代理主要是在前端项目中设置，在`Vite`和`Webpack`的项目中都可以通过配置`server`的`proxy`信息来实现代理。
- [Vite Proxy代理配置](https://vitejs.dev/config/#server-proxy)
- [Webpack Proxy代理配置](https://webpack.js.org/configuration/dev-server/#devserverproxy)


### JSONP
JSONP的做法是：**当需要跨域请求时，不使用AJAX，转而生成一个script元素去请求服务器，由于浏览器并不阻止script元素的请求，这样请求可以到达服务器。服务器拿到请求后，响应一段JS代码，这段代码实际上是一个函数调用，调用的是客户端预先生成好的函数，并把浏览器需要的数据作为参数传递到函数中，从而间接的把数据传递给客户端**

```js
<script>
var script = document.createElement('script');
script.type = 'text/javascript';
// 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
document.head.appendChild(script);
// 回调执行函数
function handleCallback(res) { alert(JSON.stringify(res)); }
</script>
```

缺点：JSONP有着明显的缺点，即其只能支持GET请求


### CORS（Cross-Origin Resource Sharing）
`cors`跨域资源共享是基于`http1.1`的一种跨域方案，整体思路是**如果浏览器要跨域访问服务器的资源，需要获得服务器的允许**。

针对不同的请求，CORS 规定了三种不同的交互模式，分别是：

-   **简单请求**
-   **需要预检的请求**
-   **附带身份凭证的请求**

这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。

```js
const cors = require("koa-cors");

app.use(cors());
```

#### 简单请求
请求方法属于`get`、`post`、`head`三种方法中的一种，请求头仅包含安全字段，如：
-   `Accept`
-   `Accept-Language`
-   `Content-Language`
-   `Content-Type`
-   `DPR`
-   `Downlink`
-   `Save-Data`
-   `Viewport-Width`
-   `Width`

**请求头如果包含`Content-Type`，仅限下面的值之一：**
-   `text/plain`
-   `multipart/form-data`
-   `application/x-www-form-urlencoded`

当满足上述条件时，浏览器判定为简单请求。
当一个请求满足简单请求的条件是，这个请求会被进行如下加工：
- 请求头中添加`origin`字段，告知服务器是哪个源再跨域请求
- 服务器响应头中添加`Access-Control-Allow-Origin`，表示允许该跨域请求

#### 需要预检的请求

如果不是一个简单请求，那么就会进行如下的流程：
1.  **浏览器发送预检请求，询问服务器是否允许**
2.  **服务器允许**
3.  **浏览器发送真实请求**
4.  **服务器完成真实的响应**
在这里就会发送一个预检请求，用来询问服务器对这类请求是否允许，一般是`OPTIONS`请求，且没有请求体，并在请求头中包含后续真是请求的请求方法和请求头信息。如果服务器允许，那么我们就会发送真实的请求。

#### 附带身份凭证的请求

这类请求通常指的是我们的请求携带`cookie`作为验证信息，对于一个携带`cookie`的请求，如果没有告知服务器，也会被视为跨域解决。

对于需要携带`Cookie`的请求，后端跨域只能设置为`Access-Control-Allow-Origin 的值为*`，因为只有这样才能正常传递`Cookie`。

## 参考
- [# 前端面试必会网络之跨域问题解决](https://mp.weixin.qq.com/s/QUvSm3xNGAHMCEhvF6qlPg)
- [ # 10 种跨域解决方案（附终极方案）](https://segmentfault.com/a/1190000022398875)
- [# 9种常见的前端跨域解决方案（详解）](https://juejin.cn/post/6844903882083024910)
