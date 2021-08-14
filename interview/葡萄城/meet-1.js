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