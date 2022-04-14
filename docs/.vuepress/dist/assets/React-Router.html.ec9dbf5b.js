import{_ as l,r as t,o,c,a as s,e as a,F as i,d as r,b as n}from"./app.07af11fc.js";const p={},b=r('<h1 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> React Router</h1><blockquote><p>\u4ECE<code>React Router</code>\u6E90\u7801\u6765\u4E00\u6B65\u6B65\u7406\u89E3</p><p>\u6E90\u7801\u4E00\u5171\u6709\u56DB\u4E2A\u5927\u7684\u5185\u5BB9\u677F\u5757\uFF1A</p><ul><li><code>React Router</code>\uFF1A\u58F0\u660E\u5F0F\u7684\u8DEF\u7531\uFF0C\u63D0\u4F9B\u6838\u5FC3\u7684\u8DEF\u7531\u529F\u80FD\u3002\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528\uFF0C\u9700\u8981\u914D\u5408<code>React Router Dom</code>\u548C<code>React Router Native</code>\u4F7F\u7528</li><li><code>React Router Dom</code>\uFF1A\u6D4F\u89C8\u5668\u5E94\u7528\u4F7F\u7528</li><li><code>React Router Native</code>\uFF1A<code>React Native</code>\u4F7F\u7528\uFF08<strong>\u6211\u4EEC\u5728\u8FD9\u91CC\u4E0D\u6DF1\u5165\u63A2\u8BA8\u5B83</strong>\uFF09</li></ul><p>\u6211\u4EEC\u4EE5<code>Browser Router</code>\u4E3A\u4F8B\uFF0C\u4E00\u6B65\u4E00\u6B65\u6765\u6DF1\u5165\u7406\u89E3</p></blockquote><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><p>\u5728\u4E86\u89E3<code>React Router</code>\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E0B\u4ED6\u4EEC\u7684\u6838\u5FC3\u4F9D\u8D56<code>history</code>\u3002</p>',4),u=n("\u8FD9\u662F\u4E00\u4E2A\u7531"),m={href:"https://github.com/remix-run",target:"_blank",rel:"noopener noreferrer"},d=n("Remix"),h=n("\uFF08"),g=s("code",null,"React Router",-1),R=n("\u5F00\u53D1\u56E2\u961F\uFF09\u5F00\u53D1\u7684"),y=s("code",null,"npm",-1),v=n("\u5305\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5BF9\u4E8E\u6D4F\u89C8\u5668\u548C\u5176\u4ED6\u73AF\u5883\u4E2D\u8FD0\u884C\u7684"),_=s("code",null,"JavaScript",-1),f=n("\u7A0B\u5E8F\u63D0\u4F9B\u5386\u53F2\u8BB0\u5F55\u548C\u539F\u751F\u7684\u5BFC\u822A\u64CD\u4F5C\u3002"),x=s("p",null,[n("\u540C\u6837\uFF0C\u4ED6\u4E5F\u652F\u6301"),s("code",null,"browser history"),n("\u3001"),s("code",null,"hash history"),n("\u3001"),s("code",null,"memory history"),n("\uFF08\u867D\u7136\u73B0\u5728\u7684"),s("code",null,"React Router"),n("\u4EE5\u53CA\u4E0D\u63A8\u8350\u4F7F\u7528\uFF09\u4E09\u79CD\u65B9\u5F0F\u3002")],-1),w=n("\u5F53\u7136\u4E86\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u53EA\u5173\u5FC3\u6211\u4EEC\u7528\u5230\u7684API\uFF0C\u5982\u679C\u6709\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u524D\u5F80"),P={href:"https://github.com/remix-run/history/blob/dev/docs/getting-started.md",target:"_blank",rel:"noopener noreferrer"},q=n("history"),L=n("\u53BB\u6DF1\u5165\u4E86\u89E3\u3002"),N=r(`<ol><li><p><code>hisotry.listen</code>\uFF1A\u76D1\u542C\u5F53\u524D\u7684<code>location</code>\u7684\u53D8\u5316\u5E76\u5728\u53D8\u5316\u53D1\u751F\u65F6\u8C03\u7528\u7ED9\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p></li><li><p><code>history.action</code>\uFF1A\u5F53\u524D\uFF08\u6700\u8FD1\uFF09\u7684\u5386\u53F2\u6808\u7684\u4FEE\u6539\u64CD\u4F5C\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u968F\u7740\u5F53\u524D\u7684<code>location</code>\u7684\u53D8\u5316\u800C\u53D8\u5316</p></li><li><p><code>history.location</code>\uFF1A\u5F53\u524D\u7684<code>location</code>\uFF0C\u540C\u6837\u4E5F\u662F\u53EF\u53D8\u7684</p></li><li><p><code>createPath</code>\uFF1A\u521B\u5EFA<code>Route Path</code></p></li><li><p><code>createBrowserHistory</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u652F\u6301\u4F7F\u7528<code>HTML 5 history</code>\u8FDB\u884C<code>pushState</code>\u3001<code>replaceState</code>\u4EE5\u53CA<code>popState</code>\u4E8B\u4EF6\u7684<code>BrowserHistory</code>\u5B9E\u4F8B\u3002\u4F20\u5165\u7684<code>window</code>\u662F\u5F53\u524D\u9700\u8981\u5C55\u793A\u89C6\u56FE\u9ED8\u8BA4\u6240\u5728\u7684<code>document</code></p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const PopStateEventType = &#39;popstate&#39;;

function createPath({
  pathname = &#39;/&#39;,
  search = &#39;&#39;,
  hash = &#39;&#39;
}: Partial&lt;Path&gt;) {
  if (search &amp;&amp; search !== &#39;?&#39;)
    pathname += search.charAt(0) === &#39;?&#39; ? search : &#39;?&#39; + search;
  if (hash &amp;&amp; hash !== &#39;#&#39;)
    pathname += hash.charAt(0) === &#39;#&#39; ? hash : &#39;#&#39; + hash;
  return pathname;
}

//\u8FD4\u56DEevents\u961F\u5217\uFF08\u652F\u6301length\u3001push\u3001call\u65B9\u6CD5\uFF09
function createEvents&lt;F extends Function&gt;(): Events&lt;F&gt; {
  \u2026\u2026
}


function createBrowserHistory(
  options: BrowserHistoryOptions = {}
): BrowserHistory {
  let { window = document.defaultView! } = options;
  let globalHistory = window.history;

  // \u8FD4\u56DE\u5F53\u524D\u7684\u6808index\u548C\u5BF9\u5E94\u7684window.location
  function getIndexAndLocation(): [number, Location] {
    \u2026\u2026
  }

  let blockedPopTx: Transition | null = null;
  function handlePop() {
    \u2026\u2026
  }

 //\u76D1\u542CpopState\u4E8B\u4EF6
  window.addEventListener(PopStateEventType, handlePop);

  let action = Action.Pop;
  let [index, location] = getIndexAndLocation();
  let listeners = createEvents&lt;Listener&gt;();
  \u2026\u2026

  //\u8FD4\u56DE \u9ED8\u8BA4\u7B2C\u4E00\u4E2A \u8DEF\u7531
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, &#39;&#39;);
  }

  // \u521B\u5EFAreact router \u7684path
  function createHref(to: To) {
    return typeof to === &#39;string&#39; ? to : createPath(to);
  }

  // \u83B7\u53D6\u8DF3\u8F6C\u7684location
  // state\u9ED8\u8BA4\u4E3Anull\u662F\u56E0\u4E3A\`window.history.state\`\u4E5F\u662F\u5982\u6B64
  function getNextLocation(to: To, state: any = null): Location {
    \u2026\u2026
  }

	\u2026\u2026

  let history: BrowserHistory = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
	\u2026\u2026
    listen(listener) {
      return listeners.push(listener);
    },
    \u2026\u2026
  };
//\u8FD4\u56DEhistory\u5B9E\u4F8B
  return history;
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div></li></ol><h2 id="browser-router" tabindex="-1"><a class="header-anchor" href="#browser-router" aria-hidden="true">#</a> <code>Browser Router</code></h2><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>/**
 * browser router \u63D0\u4F9B\u6700\u5E72\u51C0\u7684url
 */
export function BrowserRouter({
  basename,
  children,
  window
}: BrowserRouterProps) {
  let historyRef = React.useRef&lt;BrowserHistory&gt;();
  if (historyRef.current == null) {
  	//1.createBrowserHistory\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684history\u5B9E\u4F8B
    historyRef.current = createBrowserHistory({ window });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  //2.useLayoutEffect\uFF0C\u4FDD\u8BC1\u540C\u6B65\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u9875\u9762\u7684\u6E32\u67D3
  //3.history.listen\uFF0C\u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C
  React.useLayoutEffect(() =&gt; history.listen(setState), [history]);
	
  //4.Router
  return (
    &lt;Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    /&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6700\u540E\u8FD4\u56DE\u7684<code>&lt;Router</code>\u7EC4\u4EF6\u65F6\u6765\u81EA\u4E8E<code>React Router</code>\u4E2D\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1A</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>export type Navigator = Pick&lt;History, &quot;go&quot; | &quot;push&quot; | &quot;replace&quot; | &quot;createHref&quot;&gt;;

interface NavigationContextObject {
  basename: string;
  navigator: Navigator;
  static: boolean;
}

const NavigationContext = React.createContext&lt;NavigationContextObject&gt;(null!);

interface LocationContextObject {
  location: Location;
  navigationType: NavigationType;  // &gt;&gt;&gt; history.Action
}

const LocationContext = React.createContext&lt;LocationContextObject&gt;(null!);



export function Router({
  basename: basenameProp = &quot;/&quot;,
  children = null,
  location: locationProp,
  navigationType = NavigationType.Pop,
  navigator,
  static: staticProp = false
}: RouterProps): React.ReactElement | null {
  \u2026\u2026

  let {
    pathname = &quot;/&quot;,
    search = &quot;&quot;,
    hash = &quot;&quot;,
    state = null,
    key = &quot;default&quot;
  } = locationProp;

  \u2026\u2026

  return (
    &lt;NavigationContext.Provider value={navigationContext}&gt;
      &lt;LocationContext.Provider
        children={children}
        value={{ location, navigationType }}
      /&gt;
    &lt;/NavigationContext.Provider&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u5176\u5B9E <code>&lt;Router&gt;</code> \u53EA\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li>\u4E00\u662F\u7ED9\u5B50\u7EC4\u4EF6\u5305\u4E86\u4E00\u5C42<code>context</code>\uFF0C\u8BA9\u8DEF\u7531\u4FE1\u606F\uFF08 history \u548C location \u5BF9\u8C61\uFF09\u80FD\u4F20\u9012\u7ED9\u5176\u4E0B\u6240\u6709\u5B50\u5B59\u7EC4\u4EF6</li><li>\u4E8C\u662F\u7ED1\u5B9A\u4E86\u8DEF\u7531\u76D1\u542C\u4E8B\u4EF6\uFF0C\u4F7F\u6BCF\u6B21\u8DEF\u7531\u7684\u6539\u53D8\u90FD\u89E6\u53D1<code>setState</code>\u3002</li></ul><p>\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48<code>Route</code>\u9700\u8981\u5305\u88F9\u5728<code>Router</code>\u7EC4\u4EF6\u4E2D\uFF0C\u56E0\u4E3A\u8DEF\u7531\u4FE1\u606F\u90FD\u7531\u5916\u5C42\u7684\u5BB9\u5668\u7EC4\u4EF6\u901A\u8FC7 <code>context</code> \u7684\u65B9\u5F0F\uFF0C\u4F20\u9012\u7ED9\u6240\u6709\u5B50\u5B59\u7EC4\u4EF6\uFF0C\u5B50\u5B59\u7EC4\u4EF6\u5728\u62FF\u5230\u5F53\u524D\u8DEF\u7531\u4FE1\u606F\u540E\uFF0C\u624D\u80FD\u5339\u914D\u5E76\u6E32\u67D3\u51FA\u5BF9\u5E94\u5185\u5BB9\u3002\u6B64\u5916\u5728\u8DEF\u7531\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u5BB9\u5668\u7EC4\u4EF6<code>&lt;Router&gt;</code> \u4F1A\u901A\u8FC7 <code>setState()</code> \u7684\u65B9\u5F0F\uFF0C\u89E6\u53D1\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002</p><h2 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> Route</h2><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>function Route(
  _props: PathRouteProps | LayoutRouteProps | IndexRouteProps
): React.ReactElement | null {
  invariant(
    false,
    \`A &lt;Route&gt; is only ever to be used as the child of &lt;Routes&gt; element, \` +
      \`never rendered directly. Please wrap your &lt;Route&gt; in a &lt;Routes&gt;.\`
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u5C31\u53EF\u4EE5\u770B\u5230\u5176\u5B9E<code>Route</code>\u5C31\u662F\u5355\u7EAF\u7684\u4FE1\u606F\u8F7D\u4F53\uFF0C\u7EAF\u6253\u5DE5\u4EBA\u4E86\u3002</p>`,11);function B(H,S){const e=t("ExternalLinkIcon");return o(),c(i,null,[b,s("p",null,[u,s("a",m,[d,a(e)]),h,g,R,y,v,_,f]),x,s("p",null,[w,s("a",P,[q,a(e)]),L]),N],64)}var C=l(p,[["render",B],["__file","React-Router.html.vue"]]);export{C as default};
