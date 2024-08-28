# 闭包

闭包概念：描述的是一个函数对周围状态的引用捆绑在一起，内部函数中访问到其外层作用域。

简单的理解：**内层函数** + **引用外层函数变量** = 闭包

```javascript
function a(){
    const b = 1
    function c(){
    console.log(b);
    }
}
a();

// 我们可以去浏览器控制台去查看代码 Scope 中 有一个 Closure(闭包)

```

闭包不一定要有return,如果当需要return的时候意为外部需要使用闭包的变量，使用闭包大多数情况下是需要数据私有化。

内存泄露:

```javascript
function a(){
    let b = 1
    function c(){
    b++;
    console.log(`bbb:${b}`)
    }
    return c
}
const aa = a();
aa()
```

1. 首先我们aa是一个全局变量，代码执行完成并不会销毁（除非你关闭页面就会销毁）
2. aa使用了一个a函数
3. a函数用到了c函数
4. c函数里面使用了b变量
5. 这时候形成了闭包
6. b这时候被引用就不会被回收，所以它一直存在

最后：闭包形成了内存泄漏因为b一直存在没有被清理
