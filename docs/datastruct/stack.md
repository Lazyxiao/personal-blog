## 栈

:::tip
概念： 栈是一种遵循后进先出（LIFO）原则的有序集合。新添加或待添加的元素都保存在栈的同一端，称作栈顶，另一端
叫做栈底。
:::

## js实现栈以及常见的几个栈方法

:::tip
  push(element(s)): 添加一个（或几个）新元素到栈顶 <br />
  pop(): 移除栈顶元素，同时返回被移除的元素。<br />
  peek()：返回栈顶元素，不对栈做任何修改。<br />
  isEmpty(): 如何栈里没有任何元素返回true，否则返回false。<br />
  clear(): 移除栈里所有元素。<br />
  size(): 返回栈里元素的个数。 该方法和数组length方法类似。
:::


```js
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.count = 0;
    this.items = {};
  }
}
```
