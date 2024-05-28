# 语法、数据类型、流程控制、错误处理

## 语法

### 基础

1. javaScript是区分大小写并使用unicode字符集
2. ECMAScript 规定了在语句的末尾自动插入分号（ASI）。
3. 但如果一行中有多条语句，那么这些语句必须以分号分开。虽然分号不是必需的，但最好还是加上。这个习惯可以大大减少代码中产生 bug 的可能性。

#### 注释

1. 单行注释：//
2. 多行注释：/**/
3. JavaScript 脚本中见到像这样 #!/usr/bin/env node 的第三种注释（这种注释我们称为hashbang 注释，这种注释被用来指定执行 JaveScript 脚本的引擎的路径）

#### 声明

1. var 声明变量,可选初始化一个值。
2. let 声明变量,块作用域的局部变量，可选初始化一个值。
3. const 声明一个块作用域的只读常量。

#### 声明变量

一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，所以字母可以是从“A”到“Z”的大写字母和从“a”到“z”的小写字母。

#### 变量求值

1. 用 var 或 let 语句声明的变量，如果没有赋初始值，则其值为 undefined
2. 如果访问一个未声明的变量会导致抛出 ReferenceError 异常

::: warning undefined一个特殊值

1. 用来判断变量是否已赋值
2. 在布尔类型环境中会被当作 false
3. 数值类型环境中会被转换为 NaN

:::

::: warning null

1. 在布尔类型环境中会被当作 false
2. 数值类型环境中会被转换为 0

:::

### 作用域

在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。在ES6之前没有语句块的作用域，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量

```js

if (true) var a = 1
console.log(a) //1  

if (true) let b = 1
console.log(b) //ReferenceError  

```

### 变量提升

你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。

::: warning

ES6中let 和 const 同样会被提升变量到代码块的顶部但是不会被赋予初始值（var 初始值 undefined）。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”（后面在讲这个），直到这个变量被声明为止。

:::

### 函数提升、全局变量

**函数提升**：只有函数声明会被提升到顶部，而函数表达式不会被提升。  
**全局变量**：全局变量是全局对象的属性。在网页中，（译注：缺省的）全局对象是 window ，所以你可以用形如 window.variable 的语法来设置和访问全局变量。在浏览器环境中，使用 var 声明的变量会成为全局对象 window 的属性。这意味着，当您在浏览器中使用 var 声明变量时，它们将自动成为 window 对象的属性，从而可以使用 . 运算符访问。在其他 JavaScript 运行环境（如 Node.js）中，全局变量不会成为某个特定对象的属性。在这些环境中，您需要使用其他方法来访问全局变量。为了避免潜在的作用域和命名冲突问题，建议使用 let 或 const 声明变量，它们具有块级作用域。在浏览器环境中，这些变量仍然不会成为 window 对象的属性，除非您显式地将它们添加到 window 对象中。

### Let Var的区别

 **let** 声明可**重新赋值**的**块级作用域局部变量**;**var**声明**函数作用域或全局作用域**的变量;可以跨标签输出区别如下：

1. 全局污染
2. 块级作用域
3. TDZ暂时性死区（声明之前无法访问这个变量）
4. 重复声明

```js
console.log(a) // undefined
var a = 1
```

::: warning 暂时性死区

在 ES6 之前，我们使用 var 声明变量，var 声明的变量会被提升到当前作用域的顶部。这意味着我们可以在声明之前使用变量，但这可能会导致意想不到的行为。

为了解决这个问题，ES6 引入了 let 和 const 来声明变量。与 var 不同，let 和 const 声明的变量不会被提升。  
在 let 或 const 声明语句之前访问这些变量会导致程序抛出 ReferenceError 错误。这个范围被称为暂时性死区。  

暂时性死区的**目的**是提高代码的**可读性**和**可预测性**，确保变量在使用之前已经声明并**初始化**。这有助于避免因变量提升导致的意外行为和潜在的错误。

:::

## 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型：

七种基本数据类型：

1. 布尔值（Boolean），有 2 个值分别是：true 和 false。
null，一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。

2. undefined，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。

3. 数字（Number），整数或浮点数，例如： 42 或者 3.14159。

4. 任意精度的整数（BigInt），可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。

5. 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy"。

6. 代表（Symbol，在 ECMAScript 6 中新添加的类型）。一种实例是唯一且不可改变的数据类型。

以及对象（Object）。

### 数据类型的转换

JavaScript 是一种动态类型语言这意味着你在声明变量时可以不必指定数据类型，而数据类型会在代码执行时会根据需要自动转换

```js

let text = 'text'

text = 1 // 这样的赋值不会出现任何问题因为js是动态类型的语言

```

## 字面量

1. 数组字面量是一个封闭在方括号对 ([]) 中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素

``` js
let list = ["1", "2", "3"];

console.log(list.length); // 3

console.log(data[0]); // 1
// 注意多余的逗号
list = ["a", , "b"];

console.log(list[1]); // undefined

//  尾部的逗号在早期版本的浏览器中会产生错误，因而编程时的最佳实践方式就是移除它们。

list = [, "home", , "school",,];

console.log(list); // [empty,"home",empty,"school",empty]

console.log(list[0],list[4]); // undefined undefined

// 显式地将缺失的元素声明为 undefined，将大大提高你的代码的清晰度和可维护性。
```

2. 布尔类型有两种字面量：true和false。

3. 数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量

4. 整数可以用十进制（基数为 10）、十六进制（基数为 16）、八进制（基数为 8）以及二进制（基数为 2）表示。

* 十进制整数字面量由一串数字序列组成，且没有前缀 0。
* 八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7。
* 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
* 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。

``` js

0, 117 and -345 (十进制，基数为 10)
015, 0001 and -0o77 (八进制，基数为 8)
0x1123, 0x00111 and -0xF1A7 (十六进制，基数为 16 或"hex")
0b11, 0b0011 and -0b11 (二进制，基数为 2)

```

5. 浮点数一个十进制整数，可以带正负号（即前缀“+”或“-”），小数点（“.”）小数部分（由一串十进制数表示）指数部分

``` js

3.1415926
.123456789
3.1E+12
.1e-23

```

6. 对象字面值是封闭在花括号对（{}）中的一个对象的零个或多个“属性名—值”对的（元素）列表。

```js

const a = "a";

function afun(name) {
  return name;
}

var car = { a, getCar: afun("afun"), b:'b' };

console.log(car.a); // a
console.log(car.b); // b
console.log(car.afun); // afun
/**
 *  注意
 * 你可以使用数字或字符串字面值作为属性的名字，或者在另一个字面值内嵌套上一个字面值。
 * 对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 javascript 标识符，它必须用引号包裹。
 * 属性的名字不合法，那么便不能用点（.）访问属性值。而是通过方括号表示法（[]）来访问。
 * */  

```

7. 字符串字面量是由双引号（"）对或单引号（'）以及（`）括起来的零个或多个字符。字符串被限定在同种引号之间；也即，必须是成对单引号或成对双引号。下面的例子都是字符串字面值

|  符号  | 意思  |
|----|----|
| \o | Null 字节 |
| \b |退格符 |
| \f |换页符 |
| \n |换行符 |
| \r |回车符 |
| \t |Tab (制表符) |
| \v |垂直制表符 |
| \\' |单引号 |
| \\" |双引号 |
| \\\ |反斜杠字符（\）|

## 语句块

在 JavaScript 代码中，分号（;）字符被用来分割语句。任何表达式 (expression) 都可以看作一条语句 (statement)。在 ECMAScript 6 标准之前，Javascript 没有块作用域。在一个块中引入的变量的作用域是包含函数或脚本，并且设置它们的效果会延续到块之外。换句话说，块语句不定义范围。JavaScript 中的“独立”块会产生与 C 或 Java 中完全不同的结果。示例：

``` js
var x = 1;
{
  var x = 2;
}
alert(x); // 输出的结果为 2
```

### 控制流程

|  关键字  | 意思  |
|  ----  | ----  |
|  return  | 指定函数要返回的值。 |
|  break  | 终止当前的循环，switch 或标签语句，使程序跳到终止的语句之后的语句执行。 |
|  continue  | 终止当前或标签循环的当前迭代，直接执行下一个迭代循环。 |
|  throw  | 抛出一个用户定义的异常。 |
|  if...else  | 如果指定的条件为真，则执行相匹配的一个语句；若为假，则执行另一个语句。 |
|  switch  | 计算表达式，将子句与表达式的值做匹配，执行与该值相关联的语句。 |
|  try...catch  | 标记一个语句块，并指定语句抛出异常时的错误处理代码。 |

### 声明变量

|  关键字  | 意思  |
|  ----  | ----  |
|  var  | 声明一个变量，可同时将其初始化为一个值。 |
|  let  | 声明一个块级作用域的本地变量，可同时将其初始化为一个值。 |
|  const  | 声明一个只读的命名常量。 |

### 函数和类

|  关键字  | 意思  |
|  ----  | ----  |
|  function  | 声明一个指定参数的函数。 |
|  function*  | 生成器函数使编写迭代器更容易。 |
|  async function  | 使用指定的参数声明一个异步函数。 |
|  async function*  | 异步生成器函数使编写异步迭代器更容易。 |
|  class | 声明一个类。 |

### 迭代

|  关键字  | 意思  |
|  ----  | ----  |
|  do...while  | 创建一个循环来执行指定语句，直到测试条件的求值为假。先执行语句，再对条件表达式求值，指定语句至少会执行一次。 |
|  for  | 创建一个由三个可选的表达式（用括号包裹，分号分割）组成的循环，并在循环体中执行语句。 |
|  for...in  | 无序遍历对象的可枚举属性。语句针对每个唯一的属性。 |
|  for...of  | 遍历可迭代对象（包括 数组、类数组对象、迭代器和生成器），对每个不同的属性的值，调用一个自定义的带有要执行的语句的迭代钩子。 |
|  for await...of | 遍历异步可迭代对象、类数组对象、迭代器和生成器，对每个不同的属性的值，调用一个自定义的带有要执行的语句的迭代钩子。 |
| while | 创建一个执行指定语句的循环，直到测试条件的求值为假。先对条件进行求值，再执行语句。 |

### 其他

|  关键字  | 意思  |
|  ----  | ----  |
|  debugger  | 调用可用的调试功能。如果没有调试功能可用，该语句不生效。 |
|  export  | 用来导出函数，以便这些函数能够被导入到外部模块或其他脚本中。 |
|  import  | 用来引入外部的模块或另一个脚本中导出的函数。 |
|  for...of  | 遍历可迭代对象（包括 数组、类数组对象、迭代器和生成器），对每个不同的属性的值，调用一个自定义的带有要执行的语句的迭代钩子。 |
|  for await...of | 遍历异步可迭代对象、类数组对象、迭代器和生成器，对每个不同的属性的值，调用一个自定义的带有要执行的语句的迭代钩子。 |
| while | 创建一个执行指定语句的循环，直到测试条件的求值为假。先对条件进行求值，再执行语句。 |

错误的值

下面这些值将被计算出 false (also known as Falsy values):

* false
* undefined
* null
* 0
* NaN
* 空字符串（""）

包括所有对象会被计算为真。

## 错误处理

### 异常处理语句

你可以用 throw 语句抛出一个异常并且用 try...catch 语句捕获处理它。

* throw语句
* try...catch语句

#### throw 语句

throw语句抛出一个异常。当你抛出异常，你规定一个含有值的表达式要被抛出。

``` js
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString: function () {
    return "I'm an object!";
  },
};

```

#### try...catch 语句

try...catch 语句标记一块待尝试的语句，并规定一个以上的响应应该有一个异常被抛出。如果我们抛出一个异常，try...catch语句就捕获它

```js

try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}

```

#### finally块

finally块包含了在 try 和 catch 块完成后、下面接着 try...catch 的语句之前执行的语句。finally块无论是否抛出异常都会执行。如果抛出了一个异常，就算没有异常处理，finally块里的语句也会执行。

```js

function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
    // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch (e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"

```

#### 使用Error对象

使用 `Error` 构造函数 `{name:'',message:''}`

```js
function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
   doSomethingToGetAJavascriptError();
  }
}

try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}

```

::: tip
好东西[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)
:::
