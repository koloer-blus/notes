interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return '型号1--爆炸果实'
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return '型号2--治疗果实'
  }
}
/**
 * 工厂模式
 */
abstract class Creator {
  public abstract factoryMethod(): Product;

  /**
        * 注意，尽管其名称，创作者的主要责任是
        * 不创造产品。 通常，它包含一些核心业务逻辑
        * 依赖于工厂方法返回的 Product 对象。 子类可以
        * 通过覆盖工厂方法间接改变业务逻辑
        * 并从中返回不同类型的产品。
        */
  public someOperation(): string {
    const product = this.factoryMethod();
    return `产品详情：${product.operation()}`
  }
}

class ConcreteCreator1 extends Creator {
  /**
   * factoryMethod: Product
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
class ConcreteCreator2 extends Creator {
  /**
   * factoryMethod: Product
   */
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
      * 注意方法的签名还是使用抽象积
      * 类型，即使具体产品实际上是从
      * 方法。 通过这种方式，创造者可以保持独立于具体产品
      * 类
      */
function productPlan(creator: Creator) {
  console.log('计划生产');
  console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
productPlan(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
productPlan(new ConcreteCreator2());