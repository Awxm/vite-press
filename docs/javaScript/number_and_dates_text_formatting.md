# 数字、日期、文本格式化

## 数字

数字类型也还能表示三种符号值：

1. +Infinity（正无穷）
2. -Infinity（负无穷）
3. NaN (not-a-number，非数字)

| 属性  | 描述 |
| ---- |  ---- |
| Number.MAX_VALUE  | 可表示的最大值 |
| Number.MIN_VALUE | 可表示的最小值 |
| Number.NaN | 特指”非数字“ |
| Number.NEGATIVE_INFINITY | 特指“负无穷”;在溢出时返回 |
| Number.POSITIVE_INFINITY | 特指“正无穷”;在溢出时返回 |
| Number.EPSILON | 表示 1 和比最接近 1 且大于 1 的最小Number之间的差别 |
| Number.MIN_SAFE_INTEGER | JavaScript 最小安全整数。 |
| Number.MAX_SAFE_INTEGER | JavaScript 最大安全整数。 |

| 方法 | 描述 |
| ---- | ---- |
| Number.parseFloat() | 把字符串参数解析成浮点数，和全局方法 parseFloat() 作用一致。|
| Number.parseInt() | 把字符串解析成特定基数对应的整型数字，和全局方法 parseInt() 作用一致。|
| Number.isFinite() | 判断传递的值是否为有限数字。|
| Number.isInteger() | 判断传递的值是否为整数。|
| Number.isNaN() | 判断传递的值是否为 NaN. More robust version of the original global isNaN().|
| Number.isSafeInteger() | 判断传递的值是否为安全整数。|
| toFixed() | toFixed() 返回指定小数位数的表示形式，var a=123,b=a.toFixed(2)//b="123.00" |

## 日期

JavaScript 没有日期数据类型。但是你可以在你的程序里使用 Date 对象和其方法来处理日期和时间,Date 对象有大量的设置、获取和操作日期的方法。它并不含有任何属性。
创建一个日期对象：

```js
var dateObjectName = new Date([parameters]);

前边的语法中的参数（parameters）可以是一下任何一种：

//无参数 : 创建今天的日期和时间，例如： today = new Date();.
//一个符合以下格式的表示日期的字符串："月 日，年 时：分：秒"。例如： var Xmas95 = new Date("December 25, 1995 13:30:00")。如果你省略时、分、秒，那么他们的值将被设置为 0。
//一个年，月，日的整型值的集合，例如： var Xmas95 = new Date(1995, 11, 25)。
//一个年，月，日，时，分，秒的集合，例如： var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);

```

处理日期时间的 Date 对象方法可分为以下几类：

* "set" 方法，用于设置 Date 对象的日期和时间的值。
* "get" 方法，用于获取 Date 对象的日期和时间的值。
* "to" 方法，用于返回 Date 对象的字符串格式的值。
* parse 和 UTC 方法，用于解析 Date 字符串。

注意：getTime方法返回从 1970 年 1 月 1 日 00:00:00 的毫秒数。

## 文本格式化

1. 字面量:可以使用单引号或双引号创建简单的字符串
2. 16 进制转义序列: \x 之后的数值将被认为是一个 16 进制数。
3. Unicode: Unicode转义序列在\u 之后需要至少 4 个字符。
4. 字符串对象  new String

:::tip

[具体查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_dates#%E6%95%B0%E5%AD%A6%E5%AF%B9%E8%B1%A1%EF%BC%88math%EF%BC%89)

:::
