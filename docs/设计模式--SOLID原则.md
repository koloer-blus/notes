# 设计模式--SOLID原则

SOLID原则来自于《敏捷软件开发：原则、模式与实践》这本书中，其目的是确保软件设计易于理解、更加灵活和更易于维护的五个原则的简称。

## 单一职责原则（**S**ingle Responsibility Principle）

> 修改类的原因只能有一个。

每个类只负责软件的一个功能，对功能的封装也应该在该类中。

- 适当根据变化频率、业务变化进行类的提取和拆分
- 避免过度设计和重构导致的内聚性被破坏。

例如我们有`Count`管理的代码如下代码如下：

```js
class Count {
    constructor() {
        this.value = 0;
    }
    action(action, value) {
        if (action === 'clear') {
            this.value = 0;
        }
        
        if (typeof value === 'number' && !Number.isNaN(value)) {
                return new Error(”count type is not Number or count value is NaN")
           }
        
        if (action === 'add') {
            this.value += value;
        } else (action === 'subtract') {
           this.value -= value;
        } else (action === 'reset') {
            this.value = value;
        } else {
            reutrn this.value;
        }
    }
}
```

看起来下面的`Action`似乎非常好用，但是当我们的代码随着业务增长的时候，可能会有越来越多的情况，这种情况已经不适合，这时候进行粒度的拆分就是不错的选择。

```js
class Count {
    constructor() {
        this.value = 0;
    }
   	clear() {
        this.value = 0;
    }
   	action (action, value) {
         if (typeof value === 'number' && !Number.isNaN(value)) {
                return new Error(”count type is not Number or count value is NaN")
          }
        
        if (action === 'add') {
            this.value += value;
        } else (action === 'subtract') {
           this.value -= value;
        } else (action === 'reset') {
            this.value = value;
        }
    }
    get() {
        return this.value
    }
}
```

看到上面的代码，有同学就有疑问了，为什么不把`action`中的继续拆开呢？这是因为目前这个业务并不需要拆分那么细的粒度，避免粒度过细的拆分，破坏原本的内聚性，其实`add`、`subtract`、`reset`三个本质上就是对值的更新，从某种程度上来说，他们对于传入的参数的处理过程都是一个`update`的过程。



## 开闭原则（Open/Closed Principle）

> 对于拓展，类应该是“开放的”；对于修改，类则应该是“封闭的”。

**代码应当始终保持向前兼容**，对于对已有功能的修改，应当确保对于之前接口的兼容。

我们还是使用上面的代码，比如说我们现在需要添加一个获取操作`add`、`subtract`后的值的方法，因为按照之前我们的逻辑应该是直接在`action`最后添加`return this.value`，但是这样就修改了原本的`action`行为。

```js
//这里的type是action中传递的action类型
compute(type, value) {
   this.action(type, value);
   return this.value;
}
```

使用上面的方法可以帮我们很好的规避这一问题。

## 里氏替换原则（Liskov Substitution Principle）

> 扩展类时，应当在不修改已发布代码的情况下将子类的对象作为父类的对象传递。

也就是说，在开发过程中，确保子类对父类行为的兼容。**在重写时，选择对基本类进行扩展，而不是完全替换。**

- 子类方法的参数必须与其超类的参数类型相匹配或者更加抽象。
  - 避免因为子类覆盖父类引发的功能限制。
- 子类方法的返回值必须与超类方法的返回值类型或是其子类型相匹配。
  - 避免因重写导致的返回值类型变化。
- 子类的方法不应该抛出预期之外的异常类型。
  - 异常类型必须与基础方法能抛出的异常或是其子类别相匹配。
- 子类不应该加强其前置条件。
- 子类不能削弱其后置条件。
- 超类的不变量必须保留。
- 子类不能修改超类中私有成员变量的值。

## 接口隔离原则（Inteface Segregation Principle）

尽量缩小接口的范围，避免使用不必要的接口和不必要的行为。

- 接口拆分粒度更小的原则。
- 避免因为拆分过细带来的接口臃肿。

## 依赖倒置原则（Dependency Inversion Principle）

> 高层次的类不应该依赖于低层次的类。两者都应该依赖于抽象接口。抽象接口不应该依赖于具体实现，具体实现应该依赖于抽象接口。

- 低层次的类实现基础操作。
- 高层次的类包含复杂业务逻辑以及指导低层次类执行特定操作。



## 参考

- [# 结合SOLID设计原则，浅谈如何提升前端代码质量](https://mp.weixin.qq.com/s/57ZP0EWbWnxgnGdY_12tng)