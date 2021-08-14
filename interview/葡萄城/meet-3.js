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

// ###           ###             ###
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

// ###             ###      ###
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
