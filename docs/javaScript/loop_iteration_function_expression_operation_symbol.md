# 循环、迭代、函数、表达式、运算符号

## 循环

指在满足条件的情况下重复执行同一段代码。循环包括了各种控制结构如for、while、do...while等，用于多次执行代码直到特定条件得到满足。

**使用场景**:循环不仅用于数据结构的遍历，还广泛用于需要重复执行某段逻辑的各种场景。例如，循环可以用于固定次数的重复操作，或者直到达到某个条件为止的操作

### For

for 循环会一直重复执行，直到指定的循环条件为 false

```js

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

```

### Do...while

do...while 语句一直重复直到指定的条件求值得到假值（false）

```js

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


```

### while

 while 语句只要指定的条件求值为真（true）就会一直执行它的语句块

 ```js
 let n = 0;
while (n < 3) {
  n+=1;
}
// 避免无穷循环（无限循环）。保证循环的条件结果最终会变成假；否则，循环永远不会停止。因为条件永远不会变成假值

while (true) {
  console.log("Hello, world");
}

 ```

### switch

switch 语句会对一个表达式求值，并将表达式的值与一系列 case 子句进行匹配，一旦遇到与表达式值相匹配的第一个 case 子句后，将执行该子句后面的语句，直到遇到 break 语句为止。若没有 case 子句与表达式的值匹配，如果没有任何 case 子句与表达式的值匹配，则会跳转至 switch 语句的 default 子句执行。

```js

// 表单式
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}

```

### break

使用 break 语句来终止循环，它会立即终止当前所在的 while，do-while，for，或者 switch 并把控制权交回这些结构后面的语句。

```js
const a=[1,2,3,4]
for (i = 0; i < a.length; i++) {
     console.log(i);
  if (a[i] === 2) {
     console.log(i,a[i]);
    break;
  }
}

```

## 迭代

迭代指的是按照某种顺序逐个访问列表中的每一项，通常与数据结构如数组、链表等的遍历操作相关联。迭代器（iterator）模式为这种过程提供了一种标准方式，允许在不暴露数据结构内部表示的情况下按顺序访问元素

**使用场景**:迭代主要用于数据结构的遍历，如对数组或对象的属性进行逐一访问。ES6引入的for...of循环直接支持可迭代对象的遍历，使得迭代操作更加方便和直观

::: tip
**迭代**通常关注于如何在不暴露数据内部细节的情况下遍历数据结构，而循环则是一种更为广泛的编程模式，涵盖了从简单的重复到复杂的递归等多种情况。在选择使用迭代还是循环时，应考虑具体的应用场景和需求，合理选择最适合的方法来解决问题。
:::

## 函数

一般来说，一个函数是可以通过外部代码调用的一个“子程序”（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。在 JavaScript 中，函数是头等 (first-class)对象，因为它们可以像任何其他对象一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是Function对象。

函数是 JavaScript 中的基本组件之一。
JavaScript 中的函数类似于过程——一组执行任务或计算值的语句。但要成为函数，这个过程应该接受输入并返回与输入存在某些明显关系的输出。要使用一个函数，你必须将其定义在你希望调用它的作用域内
一个函数定义（也称为函数声明，或函数语句）由 function 关键字，并跟随以下部分组成：

* 函数名称。
* 函数参数列表，包围在括号中并由逗号分隔。
* 定义函数的 JavaScript 语句，用大括号括起来，{ /*…*/ }。

如果一个函数中没有使用 return 语句，则它默认返回undefined。要想返回一个特定的值，则函数必须使用 return 语句来指定一个要返回的值。(使用new关键字调用一个构造函数除外)。

### 函数定义

```js
function name([param[, param[, ... param]]]) { statements }

//name 函数名。
//param 传递给函数的参数的名称。
//statements 组成函数体的声明语句。


// 函数表达式
const name = function name([param[, param[, ... param]]]) { statements }


//name 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。
//param 传递给函数的参数的名称。
//statements 组成函数体的声明语句。

// 匿名函数

const name = function () { // statements
};

// 具名函数表达式的好处是当我们遇到错误时，堆栈跟踪会显示函数名，容易寻找错误。

```

不以 function 开头的函数语句就是函数表达式定义

IIFE (Immediately Invokable Function Expressions)是在函数声明后立即调用的函数表达式。

``` js

(function () {
  statements;
})();

```

箭头函数表达式 (=>)

``` js

([param] [, param]) => { statements } param => expression

// param 参数名称。零参数需要用 () 表示。只有一个参数时不需要括号。(例如 foo => 1)
// statements or expression
// 多个声明 statements 需要用大括号括起来，而单个表达式时则不需要。表达式 expression 也是该函数的隐式返回值。
```

Function构造函数

::: warning

不推荐使用 Function 构造函数创建函数，因为它需要的函数体作为字符串可能会阻止一些 JS 引擎优化，也会引起其他问题。

:::

所有其他对象，Function 对象可以用 new 操作符创建：

``` js

new Function (param, param, ... param, functionBody)

// 函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 JavaScript 标识符规则的字符串或用逗号分隔的字符串列表
```

### 函数参数

**默认参数**:如果没有值或传入了未定义的值，默认函数参数允许形式参数使用默认值初始化,
**剩余参数**:剩余参数语法允许将数量不限的参数描述成一个数组,

arguments对象, 一个包含了传递给当前执行函数参数的类似于数组的对象。arguments.length: 传给函数的参数的数目。

``` js
console.log(typeof arguments); // 'object'

// arguments 对象只能在函数内使用
function test(a) {
  console.log(a, Object.prototype.toString.call(arguments));
  console.log(arguments[0], arguments[1]);
  console.log(typeof arguments[0]);
/*
1 "[object Arguments]"
1 undefined
number
*/
}
test(1);

```

```js

  // 遍历参数求和
function add() {
  var sum = 0,
    len = arguments.length;
  for (var i = 0; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}
add(); // 0
add(1); // 1
add(1, 2, 3, 4); // 10

```

剩余参数、默认参数和解构赋值参数

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]
// 在严格模式下，剩余参数、默认参数和解构赋值参数的存在不会改变 arguments对象的行为，但是在非严格模式下就有所不同了。
// 当非严格模式中的函数没有包含剩余参数、默认参数和解构赋值，那么arguments对象中的值会跟踪参数的值（反之亦然）。

function func(a) {
  arguments[0] = 99; // 更新了 arguments[0] 同样更新了 a
  console.log(a);
}

func(10); // 99

```

### 构造函数、函数声明、函数表达式,箭头函数

```js

// 构造函数
const  multiply = new Function("x", "y", "return x * y");
// 函数声明
function multiply(x, y) {
  return x * y;
}
// 匿名函数
 const  multiply = function (x, y) {
  return x * y;
};
// 函数表达式
const multiply = function func_name(x, y) {
  return x * y;
};
// 箭头函数
const multiply = (x, y) => {}
```

::: warning 注意

函数声明和表达式之间的差别是:

* JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
* 而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用

出现这个陷阱的本质原因体现在这两种类型在函数提升和运行时机（解析时/运行时）上的差异。

:::

```js

getName()//oaoafly
var getName = function() {
  console.log('wscat')
}

getName()//wscat
function getName() {
  console.log('oaoafly')
}

getName()//wscat

```

1. **作用域提升**

* 构造函数：构造函数没有提升
* 函数声明：函数声明会被提升到作用域的最前面，即使代码写在后面，也能被提前调用
* 函数表达式：函数表达式不会被提升，只有在执行到该行代码时才会被赋值
* 箭头函数：与函数表达式类似，也不会被提升

2. **this指向**

* 构造函数：在构造函数中，this指向新创建的对象实例
* 函数声明：this的值取决于函数的调用方式，通常是调用它的对象或者全局对象（非严格模式）。
* 函数表达式：同函数声明，this也是动态决定。
* 箭头函数：箭头函数不会改变this的指向，其内部的this值始终等于外部函数的值。

3. **prototype属性**

* 构造函数：构造函数有prototype属性，可以添加共有属性和方法
* 函数声明：普通函数声明也有prototype属性
* 函数表达式：同普通函数声明
* 箭头函数：箭头函数没有prototype属性，不能作为构造函数使用

4. **构造实例**

* 构造函数：可以使用new关键字创建新的实例
* 函数声明：如果定义了合适的prototype属性，也可以用作构造函数
* 函数表达式：同样可以作为构造函数使用
* 箭头函数：不能用作构造函数，也不能用new关键字创建实例

5. **方法调用**

* 构造函数：可以通过new调用。
* 函数声明/表达式：可以直接调用，也可以作为对象的方法调用。
* 箭头函数：直接调用，但由于没有自己的this，调用方法如call(), apply()时无法绑定上下文

::: warning 注意

当需要创建一个具有多个方法和属性共享的对象时，应考虑使用构造函数。
如果需要一个命名函数并在多处调用，函数声明可能是最佳选择。
对于不需要改变this指向的简单操作，箭头函数提供了更简洁的语法。
避免在需要动态this指向的地方使用箭头函数，如对象的方法中。

:::

总的来说，构造函数主要用于创建和初始化新对象；函数声明和表达式提供了灵活的函数定义方式；而箭头函数则提供了一种简洁且不绑定this的函数定义方式。

## 表达式

1. this 关键字指向执行上下文的特殊属性。
2. 字面量 基本的 null、布尔、数字和字符串字面量。
3. [] 数组初始化或字面量语法。
4. {} 对象初始化或字面量语法。
5. function function 关键字定义了函数表达式。
6. async function 定义一个异步函数表达式。
7. class class关键字定义了类表达式。
8. /ab+c/i 正则表达式字面量语法。
9. `string` 模版字面量语法。
10. ( ) 分组运算符。

### 属性访问符

1. 成员运算符用于访问对象的属性或方法（object.property 和 object["property"]）。
2. ?. 如果引用是空值（null 或 undefined），可选链运算符将返回 undefined 而不是导致错误。
3. new new 运算符创建了构造函数实例。

## 运算符号

前置或后置自增运算符和前置或后置自减运算符.

A++  后置自增运算符。
A--  后置自减运算符。
++A  前置自增运算符。
--A  前置自减运算符。

一元运算符只有一个操作数。

delete 运算符用来删除对象的属性。
void 运算符执行表达式并丢弃其返回值。
typeof 运算符用来判断给定对象的类型。

|名称|预算符号|含义|
|---|---|---|
|赋值| x = y| x = y|
|加法赋值| x += y | x = x + y |
|减法赋值| x -= y | x = x - y |
|乘法赋值| x *= y | x = x * y |
|除法赋值| x /= y | x = x / y |
|求余赋值| x %= y | x = x % y |
|求幂赋值| x **= y | x = x ** y |
|左移位赋值| x <<= y | x = x << y |
|右移位赋值| x >>= y | x = x >> y |
|无符号右移位赋值| x >>>= y | x = x >>> y |
|按位与赋值| x &= y | x = x & y |
|按位异或赋值| x ^= y | x = x ^ y |
|按位或赋值| x \\|= y | x = x \\| y |
|逻辑与赋值| x &&= f() | x && (x = f()) |
|逻辑或赋值| x \\||= f() | x \\|| (x = f()) |
|逻辑空赋值|  x ??= f() | x ?? (x = f()) |
