# 第一章 起源

## 问世

诞生于1995年当时主要的用途主要是服务端语言处理输入验证,由于当时缓慢网速的影响在客户端处理基础的验证是非常好的功能。如今javaScript是所有的浏览的标配，它不在简单的处理数据检验 个方面。

1997 年，JavaScript 1.1 作为提案被提交给欧洲计算机制造商协会（Ecma）。第39 技术委员会（TC39）承担了“标准化一门通用、跨平台、厂商中立的脚本语言的语法和语义”的任务（参见TC39-ECMAScript）。TC39 委员会由来自网景、Sun、微软、Borland、Nombas 和其他对这门脚本语言有兴趣的公司的工程师组成。他们花了数月时间打造出ECMA-262，也就是ECMAScript（发音为“ek-ma-script”）这个新的脚本语言标准

1998 年，国际标准化组织（ISO）和国际电工委员会（IEC）也将 ECMAScript 采纳为标准（ISO/IEC-16262）。自此以后，各家浏览器均以 ECMAScript 作为自己 JavaScript 实现的依据，虽然具体实现各有不同

## javaScript实现

javaScript的实现包含几个部分：

- 核心（ECMAScript）
- 浏览器对象模型（DOM）
- 文档对象模型（BOM）

### 什么是ECMAScript?

ECMAScript即ECMA-262定义的语言，只是对JavaScript实现规范描述的所有方面的一门语言的称呼,浏览器只是ECMAScript实现可能存在的宿主环境，它提供ECMA的基准实现和浏览自身交互的必须扩展。例如DOM使用ECMAScript核心类型和语法、特定环境额外功能、服务端node。

如果不涉及浏览器的话ECMA-262定义了什么？

- 语法
- 类型
- 语句
- 关键字
- 保留子
- 操作符号
- 全局对象

#### ECMAScript的版本

1. ECMA-262 第6版 ES2015（ES6）支持了类、模块、迭代器、生成器、箭头
函数、期约、反射、代理和众多新的数据类型

2. ECMA-262 第7版 ES2016（ES7）语法层面的增强，如Array.prototype.includes 和指数操作符

3. ECMA-262 第8版 ES2017（ES8）语法层面的增强，这一版主要增加了异步函数（async/await）、SharedArrayBuffer 及Atomics API，以及Object.values()/Object.entries()/Object.getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量最后的逗号

4. ECMA-262 第9版 ES2018（ES9）这次修订包括异步迭代、剩余和扩展属性、一组新的正则表达式特性、Promise finally()，以及模板字面量修订

5. ECMA-262 第10版 ES2019（ES10）这次修订增加了Array.prototype.
flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries()方法，以及Symbol.prototype.description 属性，明确定义了Function.prototype.toString()的返回值并固定了 Array.prototype.sort()的顺序。另外，这次修订解决了与 JSON 字符串兼容的问题，并定义了catch 子句的可选绑定

### 什么是DOM?

是一个应用编程接口,提供与网页内容交互的方法和接口
注意点：DOM 并非只能通过JavaScript 访问，而且确实被其他很多语言实现了。不过对于浏
览器来说，DOM 就是使用ECMAScript 实现的，如今已经成为JavaScript 语言的一大组成
部分。

1. DOM Level 1 的目标是映射文档结构
2. DOM Level 2 增加了对（DHTML 早就支持的）鼠标和用户界面事件、范围、遍历（迭代 DOM 节点的方法）的支持，而且通过对象接口支持了层叠样式表（CSS）

#### DOM的组成包括

1. 节点 DOM 中的基本单位，表示文档中的一个对象。节点可以是元素节点、属性节点、文本节点等
2. 元素 表示 HTML 或 XML 文档中的一个标签或元素。元素可以包含其他元素、属性和文本
3. 属性 表示元素的特性或参数，例如 class、id、style 等
4. 文本 表示元素中的文本内容。

#### 列举一些DOM提供的API

- getElementById()：通过元素的 ID 获取元素对象。
- getElementsByClassName()：通过元素的类名获取一组元素对象。
- getElementsByTagName()：通过元素的标签名获取一组元素对象。
- querySelector() 和 querySelectorAll()：使用 CSS 选择器获取元素对象。
- appendChild()、insertBefore()、removeChild() 和 replaceChild()：用于添加、插入、删除和替换子节点。
- setAttribute() 和 removeAttribute()：用于设置和移除元素的属性。
- innerHTML 和 textContent：用于获取和设置元素的内部 HTML 内容和纯文本内容。

### 什么是BOM?

提供与浏览器交互的方法和接口,浏览器对象模型,用于支持访问和操作浏览器的窗口,使用BOM，开发者可以操控浏览器显示页面之外的部分。BOM 主要针对浏览器窗口和子窗口（frame）

:::info 注意
因为在很长时间内都没有标准，所以每个浏览器实现的都是自己的BOM。有一些所谓的事实标准，比如对于window 对象和navigator 对象，每个浏览器都会给它们定义自己的属性和方法。
:::

#### BOM的主要组成

- window 对象：表示浏览器窗口，是 BOM 的核心对象。它提供了许多方法和属性，用于操作窗口、对话框、计时器等。
- navigator 对象：表示浏览器的信息，如浏览器类型、版本、用户代理字符串等。
- location 对象：表示当前文档的 URL 信息，如协议、主机名、路径等。它还提供了一些方法，用于加载新文档、刷新当前文档等。
- history 对象：表示浏览器的历史记录，提供了前进、后退、跳转到指定历史记录等方法。
- screen 对象：表示用户的屏幕信息，如屏幕尺寸、颜色深度等。
- document 对象：虽然严格来说属于 DOM，但它是 BOM 中最常用的对象之一，表示当前加载的文档。通过 document 对象，可以访问和操作文档的内容、结构和样式。
- performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
- 对cookie 的支持
- 其他自定义对象，如XMLHttpRequest 和IE 的ActiveXObject

#### BOM 提供了一些常用的方法和事件

- alert()、confirm() 和 prompt()：用于显示对话框。
- setTimeout() 和 setInterval()：用于设置定时器和间隔执行的函数。
- open() 和 close()：用于打开和关闭新的浏览器窗口或标签页。
- location.href：用于获取或设置当前文档的 URL。
- history.back()、history.forward() 和 history.go()：用于在浏览器历史记录中导航。
- screen.width 和 screen.height：用于获取屏幕的宽度和高度。
- document.write() 和 document.writeln()：用于向文档中写入内容。
