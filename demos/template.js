/**
 * 
 * @param {string} str 
 */
function templateStrEval(str) {
    //对需要匹配的${和}进行匹配，并添加转译，在花括号中间添加分组()，对不能出现结束的花括号进行匹配[^}]，^为取反，并至少有一个字符+，添加全局匹配g。
    return str.replace(/\$\{([^}]+)\}/g, (_, value) => {
        return eval(value);
    });
}
/**
 * 
 * @param {string} str 
 */
function templateStr(str) {
    const tempValueObj = {};
    const tempFuncStack = [];
    const tempComputedStack = [];
    const tempStack = [];
    const push = (v) => tempStack.push(item);
    const pop = (v) => tempStack.pop(item);
    const getTop = (v) => tempStack[0];
    const computedFont = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
        }
        //对需要匹配的${和}进行匹配，并添加转译，在花括号中间添加分组()，对不能出现结束的花括号进行匹配[^}]，^为取反，并至少有一个字符+，添加全局匹配g。
    str.replace(/\$\{([^}]+)\}/g, (_, value) => {
        if (value.includes('(') && value.includes(')')) {

        } else if () {

        } else {

        }
    });
}

const sayHello = (name) => "Hello, " + name;

const a = 1,
    b = 2;
console.log(templateStr("This is /$/%/\\ ${a} + ${b} = ${a + b}, ${sayHello('test')}")