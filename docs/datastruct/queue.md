## 队列

:::tip
概念： 队列是一种遵循先进先出（FIFO， 也称先来先服务）原则的一组有序的项。
:::

## js实现队列以及队列的几个常见方法

:::tip
  enqueue(element(s)): 向队尾添加一个（或几个）新的项 <br />
  dequeue(): 移除队列第一项（即排在队列最前面的项）并返回被移除的元素。<br />
  peek()：返回队列第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动，参考front方法。<br />
  isEmpty(): 如何队列里没有任何元素返回true，否则返回false。<br />
  size(): 返回队列里元素的个数。 该方法和数组length方法类似。
:::

```js
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0; // 由于要移除前端元素， 因此需要一个变量帮助追踪第一个元素。
    this.items = {};
  }
  equeue(element) {
    this.items[this.count] = element;
    this.count++;
  }
}
```
