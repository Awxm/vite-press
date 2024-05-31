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

### 方法函数的定义

## 表达式

## 运算符号
