# promise

## 什么是promise?

Promise A+ 规范的概念？

主要是解决：异步编程中回调地狱问题，异步实现不统一的问题。promise其实就一个带有then方法，可能是对象也有可能是函数

**Promise 对象的定义**：

Promise 是一个对象，它可以获取异步操作的结果。
Promise 有三种状态：pending（待定）、fulfilled（已成功）和rejected（已失败）。
Promise 只能从 pending 变为 fulfilled 或从 pending 变为 rejected。一旦状态改变后，状态不能再更改。

**Promise 的参数**：

Promise 构造函数接受一个函数作为参数，这个函数有两个参数：executor（执行器）函数。
执行器函数会立即执行，并接收两个参数：resolve 和 reject。

**resolve 和 reject 函数**：

resolve 和 reject 函数由 Promise 构造函数提供，用于改变 Promise 的状态。
当异步操作成功时，调用 resolve 函数将 Promise 状态改为 fulfilled，并将成功的结果作为参数传递。
当异步操作失败时，调用 reject 函数将 Promise 状态改为 rejected，并将失败的原因（通常是一个 Error 对象）作为参数传递。

**then 方法**：

Promise 对象必须提供一个 then 方法，用于指定 fulfilled 和 rejected 状态的回调函数。
then 方法接受两个可选的参数：onFulfilled 和 onRejected。
onFulfilled 函数在 Promise 状态变为 fulfilled 时调用，onRejected 函数在 Promise 状态变为 rejected 时调用。
then 方法可以链式调用，以支持对前一步结果的进一步处理。

错误处理：

如果 onFulfilled 或 onRejected 函数抛出异常，Promise 的后续链将使用 reject 方法传递异常。
Promise 对象应实现一个 catch 方法，作为 then 方法的简化形式，只接受一个 onRejected 参数。

在es6中新增一个new promise 这个函数就是对promise的实现

Promise 构造函数接受一个函数作为参数，这个函数有两个参数：resolve 和 reject。当异步操作成功时，调用 resolve 函数将 Promise 状态改为 fulfilled；当异步操作失败时，调用 reject 函数将 Promise 状态改为 rejected。

Promise 对象提供了 then 和 catch 方法来处理异步操作的结果：

then 方法接受两个可选的回调函数，分别处理 fulfilled 和 rejected 状态。

catch 方法接受一个回调函数，处理 rejected 状态。

```js

// 判断是不是promise
function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

```
