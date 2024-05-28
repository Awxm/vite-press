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

## 函数

函数是 JavaScript 中的基本组件之一。
JavaScript 中的函数类似于过程——一组执行任务或计算值的语句。但要成为函数，这个过程应该接受输入并返回与输入存在某些明显关系的输出。要使用一个函数，你必须将其定义在你希望调用它的作用域内

一个函数定义（也称为函数声明，或函数语句）由 function 关键字，并跟随以下部分组成：

函数名称。
函数参数列表，包围在括号中并由逗号分隔。
定义函数的 JavaScript 语句，用大括号括起来，{ /*…*/ }。

## 表达式

## 运算符号
