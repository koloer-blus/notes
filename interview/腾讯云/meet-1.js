
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