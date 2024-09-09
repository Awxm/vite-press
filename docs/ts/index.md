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

### object

1. object 表示**非原始类型**，它可以存储对象、函数、数组等。由于限制的范围比较宽泛。实际开发中使用的比较少。
2. Object(大写) 表示可以调用Object方法的类型，也就是除了null和undefined以外的任意值。同时由于限制的范围也是太大了。实际开发中使用的比较少。

```ts

let a: object;
let b: Object;

a = {};
a = { name: 'tom' };
a = [];
a = ['1', '12'];
a = function () {};
a = new String('hello');
class Person {}
a = new Person();

a = 1; // 不能将类型“number”分配给类型“object”。
a = 'hello'; // 不能将类型“string”分配给类型“object”。
a = true; // 不能将类型“boolean”分配给类型“object”。
a = null; // 不能将类型“null”分配给类型“object”。
a = undefined; // 不能将类型“undefined”分配给类型“object”。



b = {};
b = { name: 'tom' };
b = [];
b = ['1', '12'];
b = function () {};
b = new String('hello');
class Person {}
b = new Person();
b = 1;
b = 'hello';
b = true;

b = null; // 不能将类型“null”分配给类型“Object”
b = undefined; //不能将类型“undefined”分配给类型“Object”

```

想像一下我们要声明一个对象呢?

#### 声明对象类型

```ts
let user: { name: string; age: number };
user = { name: 'Chenxin', age: 26 };
// 可选属性使用?
let user2: { name: string; age?: number };
// 任意属性使用[key: string]: any,索引签名
// 一般使用key index k 就是给一个形式。
let user3: { name: string; age: number; [key: string]: any };
```

:::tip
索引签名: 允许定义对象可以具有任意数量的属性，这些属性的键和类型是可变的，常用于:描述类型不确定的属性，(具有动本属性的对象)。
:::

#### 声明函数类型

  ```ts
let count: (x: number, y: number) => number;
count = function (x: number, y: number): number {
  return x + y;
};
// 也可以使用箭头函数
count = (x: number, y: number) => x + y;
// 还可以省略参数类型
count = (x, y) => x + y;
// 还可以省略返回类型
  ```

1. **TypeScript**中的`=>`在的数类型声明时表示**函数类型**，
2. 描述其参数类型和透回类型、JavaScript 中的`=>`是一种定义的数的语法，是具体的函数实现。
3. 函数类型声明还可以使用:**接口**、**自定义类型**等方式

#### 数组类型

  ```ts
  let arr: number[] = [1, 2, 3];
  let arr1: Array<number> = [1, 2, 3];
  let arr2: Array<string | number> = [1, '2', 3];
  let arr3: (string | number)[] = [1, '2', 3];
  ```

### tuple

元组(Tuple)是一种特殊的**数组类型**，可以存**固定数量**的元素，并且每个元素**类型是已知**的**且可以不同**。元组用于**精确描述一组值的类型**，**?**表示**可选元素**。

```ts
let a: [string, number];
// 第一个元素必须是number 类型，第二个元素是可选的，如果存在，必须是 boolean 类型
let b: [number, boolean?];
// 无限元组
let c: [string, number, boolean,...string[]];

a = ['hello', 123];
b = ['hello']; // true,false 可有可无
c = ['hello', 123, true, 'world', false];
```

### enum

枚举(enum )可以定义一组命名常量，它能增强代码的可读性，也让代码更好维护。

下面这个代码看起来是不是比较难维护随着color的增加返回的return值也会增加.

```ts
const color: (key: string) => string = (key) => {
  if (key === 'red') {
    return '1';
  }
  if (key === 'green') {
    return '2';
  }
  if (key === 'blue') {
    return '3';
  }
  return '0';
};

enum Color {
  Red,
  Green,
  Blue,
}

// 修改成为
const color1: (key: Color) => number = (key: Color): Color => {
  if (key === Color.Red) {
    return Color.Red;
  } else if (key === Color.Green) {
    return Color.Green;
  } else if (key === Color.Blue) {
    return Color.Red;
  }
  return Color.Red;
};

```

#### 数字枚举

数字枚举一种最常见的枚举类型指枚举成员的值都是数字，并且**从 0 开始**，**逐一递增**，**没有重复值**。其成员的值自动邀形且数字枚举还具备**反向映射**的特点，
在下面代码的打印中，不难发现可以通过值来获取对应的枚举成员名称.

```ts
enum Color {        
  Red,// 0
  Green, // 1
  Blue, // 2
  Yellow = 10,
  Pink, // 自动赋值11

}
console.log(Color.Red); // 0
{
  0: "Red",
  1: "Green",
  2: "Blue",
  Red:0,
  Green:1,
  Blue:2
}
console.log(Color.Red); // 0
console.log(Color[0]); // "Red"
// 枚举是只读的不能赋值
Color[0] = "Yellow"; // error
Color.Red = 1; // error
```

#### 字符串枚举

字符串枚举是指枚举成员的值都是字符串，不是数字递增的。其成员的值是字符串字面量，不能使用反向映射。

```ts
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}
console.log(Color.Red); // "RED"
console.log(Color[0]); // 元素隐式具有 "any" 类型，因为类型为 "0" 的表达式不能用于索引类型 "typeof Color"。
console.log(Color['Red']); // RED
console.log(Color['RED']); // 报错
```

#### 常量枚举

```ts

enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); // "RED"

//  编译后的代码
"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // "RED"

// 加上const 

const enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); // 0

// 编译后的代码
"use strict";
console.log(0 /* Color.Red */); // "RED"

// 如果没有用的话就什么都没有

```

#### 联合枚举

联合枚举是指枚举成员的值可以是不同类型，可以是数字或字符串。

```ts
enum Color {
  Red = 1,
  Green = '2',
  Blue,
}

console.log(Color.Red); // 1
console.log(Color.Green); // "2"


```

### type

type 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更方便地进行类型复用和扩展

#### 基本用法

```ts
// 假设想个string取个名字str
type str = string;
// 然后就可以使用str类型了
let a: str = 'hello';

```

#### 联合类型，它表示一个值可以是几种不同类型之一

```ts
type strOrNum = string | number;
let b: strOrNum = 123;

type sex = '男' | '女'

let c: sex = true; // 报错
let d: sex = '男';

function sayHello(name: strOrNum,sex: sex): void {
console.log(`hello ${name} ${sex}`);
}

sayHello('world', '男'); // hello world 男
```

#### 交叉类型，它表示多个类型合并成一个类型

交叉类型(Intersection Types)将多个类型合并为一个类型。合并后的类型将拥有所有被合并类型的成员。交叉类型通常用于**对象类型**。

```ts
type base = {
  name: string;
  age: number;
};

type info = {
  phone: number;
};

type person = base & info;

let p: person = {
  name: 'chenxin',
  age: 25,
  phone: 1234567890,
};

```
