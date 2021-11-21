function MathCamp() {
  this.icons = ['*'];
  this.console = function (val) {
    console.log('The result is: ' + val + '\n' + this.icons.join('  '));
  }
};

MathCamp.prototype.add = function (a, b) {
  return this.console(a + b);
};

/**
 * 原型链继承
 * 
 * 缺点：
 * 1. 原型中包含的所有引用类型属性将被所有的实例共享
 * 2. 子类在实例化的时候不能给弗雷构造函数传参
 */
console.log('原型链继承');

function MathLib1() { };

MathLib1.prototype = new MathCamp();

const camp1 = new MathLib1();

camp1.icons.push('~');
const camp2 = new MathLib1();

camp2.add(1, 3);

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

console.log('借用构造函数继承');

function MathLib2() {
  MathCamp.call(this);
};

const camp3 = new MathLib2();

camp3.icons.push('?');
console.log(camp3.add, camp3.icons);

const camp4 = new MathLib2();
console.log(camp4.add, camp4.icons);


/**
 * 组合继承
 * 
 * 优点：
 * 1. 解决了原型链继承和借用构造函数继承的缺点
 * 
 * 缺点：
 * 1. 两次父类构造函数造成了不必要的浪费
 */


console.log('组合继承');

function MathLib3() {
  MathCamp.call(this);
};

MathLib3.prototype = new MathCamp();

const camp5 = new MathLib3();
camp5.icons.push('^_^');
camp5.add(4, 6);
const camp6 = new MathLib3();
camp6.add(4, 6);


/**
 * 原型继承
 * 
 * 和原型链相同
 */

console.log('原型继承');

function object(o) {
  function F() { };
  F.prototype = o;
  return new F();
}

const MathLib4 = {
  icons: ['$'],
};

const camp7 = Object.create(MathLib4);
camp7.icons.push('=');
console.log(camp7.icons);

const camp8 = Object.create(MathLib4);
console.log(camp8.icons);


/**
 * 寄生式继承
 * 
 * 缺点：
 * 1. 为对象添加函数会不能函数复用降低效率
 */
console.log('寄生继承');
function MathLib5(o) {
  const clone = object(o);
  clone.console = function () {
    console.log('clone', clone);
  }
  return clone;
}

const camp9 = new MathLib5(new MathCamp());

console.log(camp9.icons);


/**
 * 寄生组合继承
 */

console.log('寄生组合继承');

function extend(subClass, superClass) {
  const F = function () { };
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
  subClass.superClass = superClass.prototype;
  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

function MathLib6() {
  this.console = console.log;
  MathCamp.call(this);
};

extend(MathLib6, MathCamp);

const camp10 = new MathLib6();

console.log(camp10.icons, camp10);
