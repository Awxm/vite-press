# 索引集合类,带键的集合,使用对象,使用类

## 索引集合类

JavaScript 中没有明确的数组数据类型,你可以使用预定义的 Array 对象及其方法来处理应用程序中的数组。Array 对象具有以各种方式操作数组的方法，例如连接、反转和排序。

它有一个用于确定数组长度的属性和用于正则表达式的其他属性。

数组是由名称和索引引用的值构成的有序列表。

```js

const arr1 = new Array(element0, element1, /* … ,*/ elementN);
const arr2 = Array(element0, element1, /* … ,*/ elementN);
const arr3 = [element0, element1, /* … ,*/ elementN];

```

## 带键的集合

Map 和 Set 对象包含可按插入顺序迭代的元素。

### Map对象

map对象就是一个简单的键/值对映射集合，按照数据插入的顺序遍历所有的元素。

```js

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false


for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
  // "cat goes meow"
  // "elephant goes toot"
}

sayings.clear();
sayings.size; // 0

```

Object 和 Map 的比较

一般地，object 会被用于将字符串类型映射到值。Object 允许设置键值对、根据键获取值、删除键、检测某个键是否存在。不过，Map 对象还有一些优点，可以更好地应用于映射关系表示中。

* Object 的键均为字符串或 Symbol 类型，在 Map 里键可以是任意类型。
* 必须手动计算 Object 的大小，但是可以很容易地获取 Map 的大小（size）。
* Map 的遍历遵循元素的插入顺序。
* Object 有原型，所以映射中有一些缺省的键。（可以用 map = Object.create(null) 回避）。

这三条提示可以帮你决定用 Map 还是 Object：

* 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用 Map。
* 如果需要将原始值存储为键，则使用 Map，因为 Object 将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
* 如果存在需要对个别元素进行操作的逻辑，使用 Object。

Map 对象和 Set 对象的键和值的等值判断都基于 SameValueZero 算法：

* 等价的作用类似于严格相等运算符 ===
* -0 和 +0 相等
* NaN 与自身相等（与 === 有所不同）

## 使用对象

javascript 中的对象 (物体)，和其他编程语言中的对象一样，可以比照现实生活中的对象 (物体) 来理解它。javascript 中对象 (物体) 的概念可以比照着现实生活中实实在在的物体来理解.

## 使用类
