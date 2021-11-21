/**
 * 原型链继承
 * 存在问题：
 * 1. 原型中包含的所有引用类型属性将被所有的实例共享
 * 2. 子类在实例化的时候不能给弗雷构造函数传参
 */

function Math() {
  this.icons = ['*'];
  this.console = function (val) {
    console.log('The result is: ' + val + this.icons);
  }
};

Math.prototype.add = function(a,b) {
  return this.console(a+b);
};

function MathLib() {};

MathLib.prototype = new Math();

const camp1 = new MathLib();

camp1.icons.push('~');
const camp2 = new MathLib();

camp2.add(1,3);

