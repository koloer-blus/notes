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