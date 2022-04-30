// 1 eval

function poorestSandbox(code) {
    eval(code);
}

// 待执行程序
const code = `
const ctx = {
    add: (num) => {
        return num + ctx.base;
    },
    base: 0
};
ctx.base = 3;
const res = ctx.add(10);
console.log(res);
`;

poorestSandbox(code);

//2 with

function poorestSandbox(code, obj) {
    with(obj) {
        eval(code);
    }
}
var obj = {};
// 待执行程序
const code = `
const ctx = {
    add: (num) => {
        return num + ctx.base;
    },
    base: 0
};
ctx.base = 3;
const res = ctx.add(10);
console.log(res);
`;

poorestSandbox(code, obj);