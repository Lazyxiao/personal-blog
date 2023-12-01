# 常见手写js系列

## 手写call、apply、bind

## 手写promise

```js
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class MyPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallBacks = [];
        this.onRejectedCallBacks = [];

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULFILLED;
                this.value = value;
                this.onFulfilledCallBacks.forEach(cb => {
                    cb();
                });
            }
        }

        const reject = (value) => {
            if (this.state === PENDING) {
                this.state = REJECTED;
                this.reason = value;
                this.onRejectedCallBacks.forEach(cb => {
                    cb();
                });
            }
        }

        try {
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled == "function" ? onFulfilled : value => value;
        onRejected = typeof onRejected == "function" ? onRejected : reason => { throw reason };

        const promise2 = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(error) {
                        reject(error);
                    }
                }, 0);
            }

            if (this.state === REJECTED) {
                try {
                    const x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
                }, 0);
            }
        });
    }
};

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }

    if (x && typeof x === 'object' || typeof x === 'function') {
        let used = false;

        try {
            const x = x.then;

            if (typeof then === 'function') {
                then.call(x,
                (y) => {
                    if (used) return;

                    used = true;
                    resolvePromise(promise, y, resolve, reject);
                },
                (r) => {
                    if (used) return;

                    used = true;
                    reject(r);
                });
            } else {
                resolve(x);
            }
        } catch (error) {
            if (used) return;
            used = true;
            reject(error);
        }
    } else {
        resolve(x);
    }
}
```

## 手写async await

## 手写debounce、throttle

## 手写instanceOf

