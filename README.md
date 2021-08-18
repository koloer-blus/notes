# 杂记

## 杂七杂八

<details><summary><b>1. CSS渐变背景（Css gradient background）</b></summary>
<p>

![](./assets/css渐变背景1.png)

![](./assets/css渐变背景.png)

</p>
</details>

<details><summary><b>2. 夜空(Night Sky)</b></summary>
<p>

![](./assets/夜空.png)

</p>
</details>

<details><summary><b>3. 水波(sea-wave)</b></summary>
<p>

![](./assets/水波.png)

</p>
</details>

<details><summary><b>4. 四季图标(360-weather)</b></summary>
<p>

![](./assets/四季图标.png)

</p>
</details>


## 面试

<details><summary><b>### 西安葡萄城</b></summary>
<p>

- 一面

```JS
// 将数组转为树形平级结构

const tempTree = [
  { id: 4, pId: 1, value: '1', title: 'Expand to load' },
      { id: 1, pId: 0, value: '1', title: 'Expand to load' },
      { id: 2, pId: 0, value: '2', title: 'Expand to load' },
      { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true }
    
];

function buildTree(list) {
  const temp = {};
  const tree = {};
  for(let i in list) {
    temp[list[i].id] = list[i];
  }
  for(let i in temp) {
    if (temp[i].pId) {
      if (temp[temp[i].pId] && !temp[temp[i].pId].children) {
        temp[temp[i].pId].children = new Object();
      }
      temp[temp[i].pId].children[temp[i].id] = temp[i];
    }else {
      tree[temp[i].id] = temp[i];
    }
  }
  console.log(tree);
  return tree;
}

// {
//   '1': {
//     id: 1,
//     pId: 0,
//     value: '1',
//     title: 'Expand to load',
//     children: { '4': [Object] }
//   },
//   '2': { id: 2, pId: 0, value: '2', title: 'Expand to load' },
//   '3': { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true }
// }
buildTree(tempTree);
```

- 二面

```JS
/**
 * 括号匹配 带有优先级 "{()}" --> true  "({})" --> false
 * 
 */


const pop = (arr) => arr.shift();
const add = (arr, el) => arr.unshift(el);

const bracesMap = {
  "(": ")",
  "[": "]",
  "{": "}"
};

const bracesLevel = ["(", "[", "{"];

/**
 * 
 * @param {string} bracesStr 
 */
const validBraces = (bracesStr) => {
  const bracesArr = bracesStr.split("");
  const stack = [];
  let flag = true;
  while (bracesArr.length && flag) {
    const temp = pop(bracesArr);
    if (bracesLevel.includes(temp)) {
      if (stack.length && bracesLevel.indexOf(temp) > bracesLevel.indexOf(stack[0])) {
        flag = false;
      }
      stack.unshift(temp);
    } else if(bracesMap[stack[0]] === temp) {
      stack.shift();
    } else {
      flag = false;
    }
  }
  return flag;
}



console.log(validBraces('[[(())]]'));
console.log(validBraces('{([)]}'));
console.log(validBraces("()()()"));
console.log(validBraces("([{}])"))
```

- 三面

```JS
const data = [
  { type: "ss", value: 6 },
  { type: "sdddb", value: -3 },
  { type: "ggsc", value: 4 },
  { type: "dfg", value: 7 },
  { type: "dfsssg", value: -7 },
  { type: "ggsc", value: 4 },
  { type: "dfg", value: 7 },
  { type: "ggsc", value: 4 },
  { type: "dfg", value: 7 },
];

//将上面的图转化为

//               ###             ###      ###
// ##            ###             ###      ###
// ##            ###             ###      ###
// ##       #### ###        #### ### #### ###
// ##       #### ###        #### ### #### ###
// ##       #### ###        #### ### #### ###
// ##       #### ###        #### ### #### ###
// -------------------------------------------
// ss sdddb ggsc dfg dfsssg ggsc dfg ggsc dfg
// -------------------------------------------
//    #####          ######
//    #####          ######
//    #####          ######
//                   ######
//                   ######
//                   ######
//                   ######



const getMap = (data) => {
  let map = '';
  data.forEach(row => {
    row.forEach(col => {
      map += col;
    });
    map += '\n';
  });
  return map;
}


const getArr = (row, col, str) => {
  const twoDarr = [];

  for (let i = 0; i < row; i++) {
    let subarray = [];
    for (let j = 0; j < col; j++) {
      subarray.push(str);
    }
    twoDarr.push(subarray);
  }
  return twoDarr;
}


const startRender = (dataMap, row, col, width) => {
  while (width) {
    dataMap[row][col + width] = "#";
    width--;
  }
}

/**
 * 
 * @param {array} data 
 */
const renderMap = (data) => {
  const nameLen = data.reduce((prev, item) => prev + item.type.length + 1, 0);
  const valueArr = data.map(item => item.value);
  const [min, max] = [Math.min(...valueArr), Math.max(...valueArr)];
  const dataMap = getArr((min > 0 ? max : max - min) + 3, nameLen, " ");
  const baseUpStart = max;
  const baseLowStart = min > 0 ? max : max + 3 - min;
  dataMap[baseUpStart].fill("-");
  dataMap[baseUpStart + 2].fill("-");
  data.reduce((prev, item) => {
    const { value, type } = item;
    let splitSpace = 0;
    let nameIndex = 0;
    while (nameIndex < type.length) {
      splitSpace++;
      dataMap[baseUpStart + 1][nameIndex + prev+ 1] = type[nameIndex];
      nameIndex++;
    }
    let temp = value;
    while (temp) {
      if (temp > 0) {
        startRender(dataMap, baseUpStart - temp, prev, splitSpace)
        temp--;
      } else {
        startRender(dataMap, baseLowStart + temp - (Math.abs(min) + value), prev, splitSpace);
        temp++;
      }
    }
    return prev + splitSpace + 1;
  }, 0);
  return getMap(dataMap);
}

console.log(renderMap(data));

//               ###             ###      ###
// ##            ###             ###      ###
// ##            ###             ###      ###
// ##       #### ###        #### ### #### ###
// ##       #### ###        #### ### #### ###
// ##       #### ###        #### ### #### ###
// ##       #### ###        #### ### #### ###
// -------------------------------------------
// ss sdddb ggsc dfg dfsssg ggsc dfg ggsc dfg
// -------------------------------------------
//    #####          ######
//    #####          ######
//    #####          ######
//                   ######
//                   ######
//                   ######
//                   ######

```

</p>
</details>

<details><summary><b>### 腾讯云</b></summary>
<p>

- 一面

```JS

// ## 完成函数 flatten，接受数组作为参数，数组元素包含整数或数组，函数返回扁平化后的数组

// ```js
// function flatten(arr) {
//   // TODO
// }
// console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
// ```￼


const flatten = (arr) => {
  let res = [];
  arr.forEach(item => {
    if (item instanceof Array) {
      res.push(...flatten(item));
    } else {
      res.push(item);
    }
  })
  return res;
};
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// ## 实现一个格式化数字的函数 addComma，给数字添加千位分隔符

// ```js
// function addComma(num) {
//   // TODO
// }￼


const addComma= (num) => {
  const result = [];
  let count = 0;
  const tempNum = (num || 0).toString().split('');
  for(let i = tempNum.length -1; i>= 0; i-- ) {
    count ++;
    result.unshift(tempNum[i]);
    if (!(count % 3) && i !== 0) {
      result.unshift(',');
    }
  }
  return result.join('');
}

console.log(addComma(1203004));



// ## 实现一个解析url参数的函数 

// ```js
// function parseUrl(urlStr) {
//   // TODO
// }

// parseUrl('https://cloud.tencent.com?a=1&b=2&c=3');
// // 返回 {a: 1, b: 2, c: 3}
// ```￼

/**
 * 
 * @param {string} url 
 */
const parserUrl = (url) => {
  const parseJson = {};
  const arr = url.substr(url.indexOf('?') + 1).split('&');
  arr.forEach(item => {
    const temp = item.split('=');
    parseJson[temp[0]] = temp[1];
  });
  return parseJson;
};

console.log(parserUrl('https://cloud.tencent.com?a=1&b=2&c=3'));


//事件机制
// xss攻击和csrf攻击
// 闭包使用以及原理
// 请求报文结构
// cookie和服务器的会话原理
// react hooks ref
// react fiber
```

- 二面

```JS
// /**
//  * 
//  * @param {Array} array 
//数组转链表
//  */
const translate = (array) => {
  if (Array.isArray(array) && !array.length) return null;
  let temp = null;
  let head = { value: array[0], next: null };
  let pnode = head;
  for (let i = 1; i < array.length; i++) {
    temp = { value: array[i], next: null };
    pnode.next = temp;
    pnode = temp;
  }
  return head;
};

const arr = [1, 2, 3, 4, 5];
const arr1 = [];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr3 = null;
const arr4 = [1]

const getConsole = (temp) => {
  console.log('start')
  // const head = translate(arr);
  // let temp = head;
  while (temp) {
    console.log(temp.value)
    temp = temp.next;
  }
};


const nodes = {value: 0, next: null};
const nodes1 = {value: 1, next: null};
const nodes2 = {value: 2, next: null};
const nodes3 = {value: 3, next: null};
const nodesP = {value: 0, next: null};
const nodesP1 = {value: 1, next: null};
const nodesP2 = {value: 12, next: null};
const nodesP3 = {value: 13, next: null};
const nodesP4 = {value: 14, next: null};

nodes.next = nodes1;
nodes1.next = nodes2;
nodes2.next = nodes3;
nodes3.next = nodesP2;

nodesP.next = nodesP1;
nodesP1.next = nodesP2;

nodesP2.next = nodesP3;
nodesP3.next = nodesP4;

// getConsole(arr);
// getConsole(arr1)
// getConsole(arr2);

const getCount = (p) => {
  let count = 0;
  let temp = p;
  while (temp !== null) {
    count ++;
    temp = temp.next;
  }
  return count;
}

//找出交叉链表节点
const getInterNode = (linkHeadA, linkHeadB) => {
  let [p, q] = [linkHeadA, linkHeadB];
  if (!p || !q) return null;
  if (p === q) return p;
  let [countP, countQ] = [getCount(p), getCount(q)];
  if (countP > countQ) {
    for(let i = countQ; i< countP; i++) p = p.next;
  } else if(countP < countQ) {
    for(let i = countP; i< countQ; i++) q = q.next;
  }
  getConsole(p);
  getConsole(q);
  while (p && q) {
      if (p === q) return p;
      p = p.next;
      q = q.next;
  }
  return null;
};

console.log(getInterNode(nodes, nodesP));

//获取url各个部分数据
const getUrlData = (url) =>{
  const reg = new RegExp(/(\w+):\/\/([^/:]+)(:\d*)?/)
  let matchObj = url.match(reg);
  const parseJson = {};
  const arr = url.substr(url.indexOf('?') + 1).split('&');
  arr.forEach(item => {
    const temp = item.split('=');
    parseJson[temp[0]] = temp[1];
  });
  if (matchObj) {
    matchObj.params = parseJson;
    return matchObj;
  } else {
    return null
  }
};

console.log(getUrlData("https://ss-subs.paofusub.com/sub?target=clash"));

```

</p>
</details>

<details><summary><b>### 网易雷火</b></summary>
<p>
- 一面

1. 自我介绍
2. 说说在项目中用的cookie，cookie的作用以及属性
3. react再卸载时用的哪个生命周期？在hooks中如何在卸载时做这个操作
4. css选择器的优先级，兄弟选择器和子类选择器知道吗？
5. vue的双向绑定原理？怎么实现的？vue2.x和3.x在这块有什么区别？
6. 前端如何异步上传文件？具体使用什么上传？
7. 前端瀑布流了解吗？怎么实现的？
8. 前端的页面如何做适配？有哪些方案？（这里忘记说直接写两套）
9. 前端跨域了解吗？有哪些方案？cors具体是什么？
10. 配置过webpack吗？静态资源配置了解吗？有配置过图片划分处理吗？
11. webpack图片压缩你怎么做？
（本次面试没有代码）
</p>
</details>