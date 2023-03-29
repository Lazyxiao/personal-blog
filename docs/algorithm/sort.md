## 冒泡排序

```js
let arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function bubbleSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        // [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
```

## 插入排序

::: tip
  思路：通过构建有序序列对未排序数据，在已排序序列中向前扫描，找到相应位置并插入，从而达到排序效果 <br/>
  优化：因为普通情况下交换会进行三次赋值操作，优化可以直接将三次赋值变成一次
:::

::: warning
  注意：插入排序的下标是从1开始的
:::

```js
let arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

// 优化前
function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// 优化后
function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let e = arr[i];
    let j; // j保存元素e应该插入的位置
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

console.log(insertionSort(arr));
```
## 选择排序

::: tip
  思路： 从一组数据中选出最小的，然后放到第一位，然后选出第二小的放到下一位以此类推
:::

```js
let arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function selectionSrot(arr) {
  let len = arr.length;
  let minIndex; // 存放最小元素的索引
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      if (minIndex != i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSrot(arr));
```

## 归并排序

:::tip
  概念： 采用分治将已有的子序列进行合并，得到完全有序的序列；先使子序列有序，再使子序列段有序。
:::

```js
function mergeSort(arr) {
  
}
```

## 快速排序

## 堆排序

:::tip
  概念： 堆排序是指利用堆这种数据结构设计的一种排序算法。堆积是一个近似完全二叉树结构，并同时满足堆的性质，即
  子节点的键值或索引总是小于（或者大于）它的父节点。堆的底层实际上是一颗完全二叉树，可以用数组实现。<br />

  根节点最大的堆叫做大根堆，根节点最小的堆叫做小根堆，你可以根据从小到大排序或者从大到小排序，分别建立对应的堆
  就可以
:::

```js
let arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function heap_sort(arr) {
  let len = arr.length;
  let k = 0;

  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function max_heapify(start, end) {
    let dad = start;
    let son = dad * 2 + 1; // 左儿子索引
    if (son > dad) return;
    if (son + 1 < end && arr[son] < arr[son + 1]) {
      son++;
    }
    if (arr[dad] <= arr[son]) {
      swap(dad, son);
      max_heapify(son, end);
    }
  }

  for (let i = Math.floor(len / 2); i >= 0; i++) {
    max_heapify(i, len)
  }

  for (let j = len - 1; j > k; j--) {
    swap(0, j);
    max_heapify(0, j);
  }

  return arr;
}

console.log(heap_sort(arr));
```
<!-- :::
::: -->
<!-- ### 堆实现请看这里 []() -->

