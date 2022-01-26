# 为什么不用`for`而用`forEach`

## 作用区分

首先在开始之前我们先了解下在`javascript`中`for`和`forEach`的区别：

- `for`：用于创建一个循环，可以用于**遍历**对象。
- `forEach`：挂载在对象原型上可**迭代**的方法。

那么看到这里我们就会有很多问题，遍历和迭代有区别吗？别说，区别很大。

- 遍历：对数据结构内的成员进行规律的访问
- 迭代：利用迭代器提供的方式对对象进行递归的访问。

## 老规矩（跑个分看看）

从大范围来讲，其实迭代时属于遍历中的一种。那么他们的性能差距大吗？

首先我们创建一个数组，给他塞几个元素意思意思：

```js
function generateTestArray() {
  const result = [];
  for (let i = 0; i < 1000000; ++i) {
    result.push({
      a: i,
      b: i / 2,
      r: 0,
    });
  }
  return result;
}
```

然后我们比较下面的6个函数的执行速度：

```
function() {
    array.forEach((x) => {
        x.r = x.a + x.b;
    });
}

function() {
    for (const obj of array) {
        obj.r = obj.a + obj.b;
    }
}

function() {
    for (let i = 0; i < array.length; ++i) {
        array[i].r = array[i].a + array[i].b;
    }
}

function() {
    const len = array.length;
    for (let i = 0; i < len; ++i) {
        array[i].r = array[i].a + array[i].b;
    }
}

function() {
    for (let i = 0; i < array.length; ++i) {
        const x = array[i];
        x.r = x.a + x.b;
    }
}

function() {
    const len = array.length;
    for (let i = 0; i < len; ++i) {
        const x = array[i];
        x.r = x.a + x.b;
    }
}
```

最终我们得到了这样的结果（其中**横轴代表函数执行时间**）：

![Array.forEach 与 for 和 for..of](https://leanylabs.com/c3c272e1aeeed21f5a97eda0c3fe8c1a/forEach.svg)

> 循环的微优化对`for`JavaScript 中的数组没有意义。V8 已经做得很好，甚至可能还消除了边界检查。

事实来看，**虽然`for`不是最差的，但是和`forEach`差距巨大**。

`forEach`为什么快？其实这个问题不单单是`forEach`，包含在内的`map`，`reduce`等迭代器也是同样的优秀。**究其原因，其实是和`Array`等这些可迭代的对象有关，由于他们包含`[Symbol.iterator]`方法，使得他们支持天然的可迭代**。

那么什么是迭代器呢？这里其实是和另一个概念生成器(Generator)有关，它提供一个类似链表节点的`.next()`方法，这样的配置使得它使用这种`.next()`的方法访问下一个元素时不用从头开始，并且通过返回的值来控制并以此迭代内部的值。

顺便一提，其实`for……of……`原理也就是如此。

## 讲点实在的

>  (Talk is cheap, show me your code!!!)

既然我们已经知道了原理，那么我们用一下看看呗~

> 温馨提示：下面的代码可以直接在浏览器运行哈，如果觉得清楚，可以打印下`iterator.next`一探究竟

```js
const arr = [1,3,5]
// 生成迭代器对象
const iterator = arr[Symbol.iterator]()

iterator.next()
// {value: 1, done: false}

iterator.next()
//{value: 3, done: false}

iterator.next()
//{value: 5, done: false}
```

在这里我们看到，迭代器对象的调用的时候通过内部的`next()`方法来访问下一个元素，毕竟在`javascript`中的数组其实是一个`伪链表`,基本上到这里我们也就大致清楚了`forEach`和`for`的不同。



> 参考：
>
> [Performance of JavaScript .forEach, .map and .reduce vs for and for..of](https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/#arrayforeach-vs-for-and-forof)