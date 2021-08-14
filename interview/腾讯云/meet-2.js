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