# Proxy/Object.defineProperty

## Proxy

proxy是拦截对象的基本方法。

```javascript
const obj = {}
obj.a // 本质上是内部GET操作
obj.a = 1 // 本质上是内部SET操作

for (let key in obj) { // 本质上是内部OwnPropertyKeys操作
  console.log(key)
}
```

其实我们对对象的任何操作，最终都会转换成内部的方法。**内部方法其实才是对象基本的操作**，比如GET、SET、OwnPropertyKeys、DefineOwnProperty等。

<!-- es262文档有对象的基本操作 -->

## Object.defineProperty

Object.defineProperty没有做任何拦截，只是对象基本方法中的一个
