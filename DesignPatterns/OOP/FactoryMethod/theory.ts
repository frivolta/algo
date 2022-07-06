abstract class Creator {
  public abstract factoryMethod(): Product;
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: ${product.operation}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of the concrete product 1}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of the concrete product 2}";
  }
}

//client
function clientCode(creator: Creator) {
  console.log("Client");
  creator.someOperation();
}

clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());
