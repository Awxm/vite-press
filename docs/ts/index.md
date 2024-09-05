# TS

## 数据类型

1. js中的数据类型有：boolean、number、string、null、undefined、Object、symbol、bigint
2. 六种新的数据类型：аny、unknown、tuple、never、void、enum
3. 两种自定义数据类型: interface、type

:::tip

```ts

let a:string = 'hello'
a = 'world'
a = new String('hello') // 类型不一致

let b:String = '123'
b = '234';
b = new String('123');
```

类型大小写有区别吗？

答案是有区别的，“string”是基元（基本的数据类型）；“String”是包装器对象（用来包装基本数据类型）当然它也可以用来存储字符串。

在 JavaScript中的这些内置构洁的数:Number、String、Boolean ，它们用于创建对应的包装对象，在日常开发时很少使用，在TypeScript中也是同理，所以在 TypeScript 中进行类型声明时，通常都是用小写的number、string 、boolean
:::

### any

any 它可以表示任意类型，一旦使用any类型意为放弃了对该变量的类型检查。

```ts

let a:any
//  以下对a的赋值，均无警告
a = 123
a = 'hello'
a = true

// 没有明确的表示b的光型是any，但TS主动推测出来b是any-隐式的any类型
let b
a = 123
a = 'hello'
a = true
```

:::warning
any 类型的变量，可以赋值给任意类型的变量
:::

```ts
let a:string = 'hello'
let b:any  
a = b // 类型不一致，不会报错
```

### unknown

unknown 类型是 any 类型的超集，它表示未知类型。（可以理解为类型安全的any）不能直接赋值给其他类型，只能赋值给 any 类型(不确定数据的具体类型)

```ts
let a: unknown
// 以下对a的赋值，均正常
a = "你好"
a = 2
a = 3

//设置x的数据类型为string
let b: string
b = a //警告:不能将类型“unknown”分配给类型“string”。

// 要想解决报错

if (typeof a === 'string') {
  x = a; // 正常
}
// 使用断言
x = a as string; 
x = <string>a; 

```

unknown 会强制开发者在使用之前进行类型检查，从而提供更强的类型安全性，

```ts
let a: string
a = "你好"
a.toUpperCase() // 正常


let b: any
b = "你好"
b.toUpperCase() // 正常

let c: unknown
c = "你好"
c.toUpperCase() // “c”的类型为“未知”

// 使用断言解决报错
(c as string).toUpperCase(); 
(<string>c).toUpperCase();


```

### never

never 的含义是: 任何值都不是，简言之就是不能有值，undefined、null、''、0 都不行！针对一些循环永远不会结束的函数，可以用 never 类型表示。

几乎不用 never 去直接限制变量，因为没有意义，例如:

```ts
// 指定a的类型为never，那就意味着a以后不能存任何的数据了
let a: never

//以下对a的所有赋值都会有警告
a = true
a = undefined
a = null

```

never一般用来限制函数的返回值，例如:

```ts
function error(s: string): never {
  throw new Error('出错了' + s);
}
```

never一般是ts主动推断出来的

```ts
let a:string = 'hello'

a = 123 // 类型不一致，会报错
 
 if (typeof a === 'string') {
    console.log(a.toUpperCase()) 
 }else{
    console.log(a) // 这里的a的类型是never，所以这里的代码不会执行
 }

```

### void

void 通常用于函数返回值声明，含义:【函数不返回任何值就是返回值为空的时候，调用者也不应依赖其返回值进行任何操作】

```ts
function log(message: string): void {
  console.log(message);
}
function log1(message: string): void {
  console.log(message);
  return; // 这里的return可以省略
}
function log2(message: string): void {
  console.log(message);
  return undefined; // 这里的return可以省略
}

log('hello'); // 正常

```

:::tip
开发者没有编写 return 去指定函数的返回值，所以 log 函数是没有显式返回值的，但会有一个隐式返回值，就是 undefined ;即:虽然函数返回类型为 void ，但也是可以接受 undefined 的，简单记:undefined 是void 可以接受的一种空
:::

```ts
    function log(message: string): void {
     console.log(message);
    }

    function log1(message: string): undefined {
    console.log(message);
    }

    const  funlog = log('hello'); 
    const  funlog1 = log1('hello');

    // 无法测试 "void" 类型的表达式的真实性
    if(funlog){}  
  
    if(funlog1){}
```

:::tip

理解 void 与 undefined

* void 是一个广泛的概念，用来表达“空”，而 undefined 则是这种“空”的具体实现之一。
* 因此可以说 undefined 是 void 能接受的“空”状态的一种具体形式。
* 换句话说: void 包含 undefined，但 void 表达的语义超越了单纯的 undefined ，它是一种意图上的约定，而不仅仅是特定值的限制。

若函数返回类型为void那么:

1. 从语法上讲:函数是可以返回 undefined 的，至于显示返回，还是隐式返回，:这无所谓!
2. 从语义上讲:函数调用者不应关心函数返回的值，也不应依赖返回值进行任何操作!即使返回了 undefined 值。

::：
