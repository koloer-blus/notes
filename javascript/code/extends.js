/**
 * 原型链继承
 * 
 * 缺点：
 * 1. 原型中包含的所有引用类型属性将被所有的实例共享
 * 2. 子类在实例化的时候不能给弗雷构造函数传参
 */

function MathCamp() {
  this.icons = ['*'];
  this.console = function (val) {
    console.log('The result is: ' + val + this.icons);
  }
};

MathCamp.prototype.add = function(a,b) {
  return this.console(a+b);
};

function MathLib1() {};

MathLib1.prototype = new MathCamp();

const camp1 = new MathLib1();

camp1.icons.push('~');
const camp2 = new MathLib1();

camp2.add(1,3);

/**
 * 借用构造函数继承
 * 
 * 优点：
 * 1. 保证了原型链中引用值类型的独立，不会被所有实例共享
 * 2. 子类型创建时也能向夫类型传递参数
 * 
 * 缺点：
 * 1. 函数不可复用
 * 2. 父级定义的方法对于子类型不可见
 */

function MathLib2() {
  MathCamp.call(this);
};

const camp3 = new MathLib2();

camp3.icons.push('?');
console.log(camp3, camp3.icons);
const camp4 = new MathLib2();
console.log(camp4, camp4.icons);
