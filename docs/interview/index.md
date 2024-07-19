# 面试

## HTML+CSS

### 1. 什么是BFC？如何触发？有何特点？如何解决margin"塌陷"

1. 什么是：简单来说BFC又称为块级格式化上下文，它是一个独立的渲染区域，它规定在该区域中，常规流块盒的布局，
2. 如何触发：position:absolute;overfolw:hidden;float:left,根元素（HTML）,inline-block,v表格元素
3. 特点：独立的渲染区域，隔绝了内部与外部的联系，内部渲染是不会影响到外部
4. 如何解决margin"塌陷"：常用的解决方案position:absolute;overfolw:hidden;float:left;当然还有broder:1px solid #000; 或者给一个padding值

### 2. CSS如何溢出？说一下overflow 不同值的区别

如何溢出？当一个元素超出了包含快的范围时，就会出现溢出，（内容超过了其定义的边界时）

1. visible:
这是默认值。内容不会被裁剪，它会延伸到父元素之外。

2. hidden:
内容会被裁剪，并且溢出的部分不会显示。

3. scroll:
内容会被裁剪，但同时会在元素上显示滚动条，允许用户滚动查看被裁剪的内容。

4. auto:
类似于scroll，但滚动条只在内容实际溢出时才出现。

### 3. 三栏布局有什么实现方法

1. 浮动布局
2. 绝对定位
3. Flexbox布局
4. grid布局

### 4. CSS calc属性作用是什么？主要用于解决什么问题

**作用**:

calc() 函数是**CSS3**引入的一种计算属性值的方法，它允许在样式表中执行基本的算术运算，包括加法 (+), 减法 (-), 乘法 (*), 和除法 (/)。calc() 可以用于动态地计算长度、频率、角度、时间、百分比、数值等类型的值  

**解决问题**：

1. 响应式布局：在响应式设计中，可以使用 calc() 来基于视口宽度计算元素宽度，使得元素能够自适应不同的屏幕尺寸
2. 动态计算间距：计算元素之间的间距，确保在不同屏幕尺寸下间距保持一致或按照比例调整。
3. 自适应高度和宽度：计算容器的高度或宽度，使其根据内容或父容器的尺寸自动调整
4. 动态调整字体大小：据容器大小动态调整字体大小，以优化可读性和美观度

### 5. 有一个固定长宽div,怎么实现屏幕上垂直水平居中

1. margin:auto (你需要确保父元素有明确的高度和宽度)
2. 设置flexBox
3. 定位

### 6. 描述一下逐渐增强（progressive enhancement）和 优雅降级（graceful degradation）

它们旨在确保网站在各种设备和浏览器环境下都能提供良好的用户体验,区别：渐进增强是向上兼容，优雅降级是向下兼容。

**渐进增强**

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。类似 爬山，由低出往高处爬

**优雅降级**

一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。类似蹦极，由高处往低处下落

### 7. iframe的优缺点 用来解决过什么问题

### 8. Google Chrome 如何支持大小小于12px的文字

1. 使用Transform缩放
2. 使用SVG文本
3. 使用图片
4. font-size-adjust

### 9. 描述一下css的盒模型

### 10. HTML5 有哪些新特性？

### 11. CSS3 有哪些新特性？

### 12. 如何实现水平居中

1. flexbox
2. 定位
3. Grid
4. 对于块级元素，可以使用margin: auto;

### 13. 如何实现垂直居中

1. Flexbox
2. 定位
3. table
4. absolute
5. line-height
6. 伪元素

### 14. 如何实现双圣杯布局

### 15. CSS中选择器的优先级

1. !ipmortant
2. 用户选择器
3. 行内
4. ID
5.

### 16. CSS权重如何计算

大师课补充

### 17. HTML5中input元素的type属性有哪些？

1. pasword
2. text
3. email
4. number
5. tel
6. file
7. subimt
8. radio
9. checkbox

### 18. CSS中哪些属性是继承的？哪些不可以

大师课里面有

### 19. CSS单位中px em 和rem的区别？ 配合font-size如何计算？移动适配方案

### 20. 如何画一条0.5的线

因为浏览器通常会将边框的宽度四舍五入到最近的整数像素值

1. 使用CSS Transform

```html
.line {
      width: 100%;
      border-top: 1px solid black;
      transform: scaleY(0.5);
      transform-origin: top;
    }
```

2. 使用SVG

```html
 <svg height="1" width="100%">
    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:black;stroke-width:0.5" />
  </svg>
```

3. 使用背景图像

```html
 .line {
      width: 100%;
      height: 1px;
      background: linear-gradient(to bottom, black 50%, transparent 50%);
    }
```

### 21. 隐藏一个元素有哪些方法？display:none与visibility:hidden与opacity:0之间的区别

display:none 元素不占用任何空间。
visibility: hidden 元素仍然占据空间，但视觉上不可见。
opacity: 0  元素变得完全透明，但仍占据空间

### 22. position 的值有哪些 ，分别有什么特点

relative: 相对定位，元素相对于其正常位置进行定位。
absolute:绝对定位，元素相对于最近的已定位祖先元素进行定位。
fixed:固定定位，元素相对于浏览器窗口进行定位。
static: 默认值，元素没有定位，元素出现在正常的流中（忽略 top/bottom/left/right 属性）。
sticky: 元素相对于它的正常位置进行定位，直到它遇到一个满足条件的 ancestor 元素，然后就固定在满足条件的 ancestor 元素上。

### 23. 什么是浮动，浮动会引起什么问题，有什么解决方案

是 CSS 中的一个布局特性(弹性盒、网格、浮动、定位、盒模型、显示)浮动则是允许元素从文档流中移出，并向左或向右移动，直到碰到容器边缘或其他浮动元素。周围的非浮动元素会围绕浮动元素排列

可以使元素脱离正常的文档流，并允许其他内容围绕浮动的元素。常见的使用场景包括图文混排和多列布局。

引起的问题：父容器高度塌陷、布局混乱、清除浮动困难

### 24. line-height和height有什么区别

 height属性用于设置块级元素和替换元素的高度，line-height属性用于设置行内元素或块级元素内部行高，即文本行与行之间的距离 一般指设置行内元素、行内块级元素及其包含的文本。

#### 25. 区别

1. 作用对象不同：
height：影响整个元素的高度。
line-height：影响元素内部文本行的高度。

2. 应用场景不同：
height：常用于设置块级元素的高度，如div、header等。
line-height：常用于调整文本行距，适用于段落、标题等文本内容。

3. 继承性：
height：不继承父元素的高度。
line-height：可以继承父元素的行高。

4. 计算方式不同：
height：明确的数值或百分比，直接影响元素的高度。
line-height：影响文本的行高，进而间接影响包含文本的元素的高度。

### 26. 设置一个元素的背景颜色，背景颜色会填充哪些区域

设置一个元素的背景颜色时，背景颜色会填充该元素的内容区域、内边距（padding）区域，但不会填充外边距（margin）区域。
如果需要背景颜色扩展到包括边框或控制更细的背景绘制区域，可以使用background-clip属性

### 27. inline-block、inline 和 block的区别 为什么img 是inline 还可以设置宽高

#### inline（行内元素）

特点：与其他元素在一行内排列，不会在元素前后自动换行。
尺寸：元素的宽度和高度由内容决定，不能直接设置宽高（但可以设置内边距、外边距）。
常见元素：span、a、img。

#### block（块级元素）

特点：独占一行，前后会自动换行，宽度默认填满父容器。
尺寸：可以设置宽度和高度。
常见元素：div、p、h1-h6、ul、li。

#### inline-block（行内块级元素）

特点：像行内元素一样在一行内排列，但可以设置宽度和高度。
尺寸：可以设置宽度和高度，同时保留行内元素的排列特性。
常见用途：需要行内排列但又需要设置宽高的元素，如按钮、图片。

#### img 元素的特殊情况

img 元素默认是 inline 元素，但可以设置宽度和高度。这是因为 img 是**替换元素（replaced element）**。
替换元素在文档中并**不直接包含内容，而是用外部资源（如图像）替换**。因此，浏览器会为替换元素提供默认的宽度和高度，允许开发者使用 CSS 设置宽高属性。

### 28.什么是重绘？什么是回流？如何减少，如何让文档脱离文档流

**重绘**是指**元素的外观（如颜色、背景、边框等**）发生变化但位置和布局没有改变时，浏览器对该元素的重新绘制。重绘的开销相对较小，因为它不涉及布局和重排

**回流（又称重排）**是指当元素的**尺寸、结构或位置**发生变化时，浏览器重新计算元素的几何属性和布局。回流的开销较大，因为它不仅需要重新计算布局，还可能导致其他元素的回流和重绘。

#### 操作

1. 重绘

* 改变元素的颜色（color）
* 改变背景色（background-color）
* 改变边框颜色（border-color

2. 回流

* 添加或删除DOM元素
* 改变元素的尺寸（width, height）
* 改变元素的内边距（padding）或外边距（margin）
* 改变元素的边框（border-width）
* 改变元素的显示属性（display）
* 改变元素的位置属性（top, left, position）

#### 如何减少

1. **减少对DOM的频繁操作**：将多次DOM操作合并为一次，使用文档片段（Document Fragment）或离线DOM（如display: none）进行批量更新。
2. **使用CSS类进行批量操作**：避免逐个修改元素样式，尽量通过修改CSS类来实现样式变化。
3. **避免逐个修改元素样式**：使用CSS文本批量设置样式。
4. **避免触发同步布局查询**：尽量减少访问会触发浏览器同步布局查询的属性，如offsetWidth、offsetHeight、clientWidth、clientHeight、scrollTop、scrollLeft等。

#### 脱离文档流

使用position: absolute或position: fixed
使用float属性
使用display: none
使用visibility: hidden（注意：元素依然占据空间，只是不可见）

大师课

### 29. box-sizing的作用，如何使用

首先box-sizing用于定义元素的宽度和高度的计算方式。它有三个值content-box、padding-box 和 border-box

**默认值content-box**： 元素的宽度和高度只包括内容，不包括内边距（padding）、边框（border）和外边距（margin）。
**border-box**： 元素的宽度和高度包括内容、内边距和边框，但不包括外边距

**padding-box**： 元素的宽度和高度包括内容和内边距，但不包括边框和外边距。

通常被推荐使用，因为它可以更直观地理解和控制元素的尺寸。特别是在复杂布局和响应式设计中，使用 border-box 可以避免很多尺寸计算的麻烦。

### 30. 如何清除浮动

1. 使用清除元素 clear: both;在浮动元素之后添加一个带有 clear 属性的元素。
2. 使用伪元素
3. 使用 overflow 属性,对包含浮动元素的包含快使用 overflow 属性。 overflow: auto; 或 overflow: hidden; 都可以达到清除浮动的效果。这是因为 overflow 属性会开启BFC，使得容器能够包含浮动的子元素。
4. 或者更换布局方案使用 Flexbox 或 Grid 布局

### 31. css 动画如何实现

CSS 动画可以通过 @keyframes 规则和 animation 属性来实现。
定义动画关键帧：使用 @keyframes 规则定义动画的关键帧，指定动画的开始和结束状态，或者中间状态。
应用动画：在元素上使用 animation 属性指定动画的名称、持续时间和其他动画属性。

animation-name: 指定动画的名称（由 @keyframes 定义）。
animation-duration: 动画时长。
animation-timing-function: 动画的时间函数（如 linear, ease, ease-in, ease-out, ease-in-out）。
animation-delay: 动画开始前的延迟时间。
animation-iteration-count: 动画的循环次数（可以是具体的次数或 infinite）。
animation-direction: 动画方向（如 normal, reverse, alternate, alternate-reverse）。
animation-fill-mode: 动画结束时的状态（如 none, forwards, backwards, both）。
animation-play-state: 动画的播放状态（如 running, paused）。

### 32. 如何实现某个容器中居中的？

1. 使用 margin: 0 auto;
2. Flexbox
3. 定位

### 33. 如何改变一个 DOM 元素的字体颜色?

要改变一个 DOM 元素的字体颜色，你可以使用以下几种方法：通过**内联样式、内部样式表和外部样式表**来实现。使用 **JavaScript** 动态更改

```javasrcipt
document.getElementById('text').style.color = 'red';
```

### 34. 相对布局和绝对布局，位置:相对和绝对

### 35. 什么是弹性盒子柔性布局?

### 36. 什么是 rem 布局?

### 37. Less和SCSS有什么区别?

### 38. ::前和::后中双冒号和单冒号的区别?

### 39. CSS3 新增伪类，以及伪元素?

### 40. 响应式布局实现方案?

### 41. 链接标签和导入标签的区别?

### 42. 过渡和动画的区别?

### 43. 说一下块元素、行元素、置换元素

### 44. 多行元素的文本省略号如何实现?

### 46. 文档类型作用?严格模式与混杂模式如何区分?它们有何意义?

## JAVASCRIPT

### javascript 有数据类型有哪些?

### javascript 有哪些引用类型?

### 如何判断 javascript 的数据类型?

### 怎么判断两个对象相等?如何判断空对象?

### 0.1+0.2 为什么不等于 0.3 ?(解释原理)

### 强制类型转换、隐式类型转换分别是什么，列举场景说明

### 创建函数的几种方式?

### javascript 创建对象的几种方式?

### 列举宿主对象、内置对象、原生对象并说明其定义

### ===和 ==的区别?

### null, undefined 的区别

### 什么情况下会返回 undefined 值?

### 如何区分数组和对象?

### 多维数组如何降维?

### 怎么获取当前日期(年-月-日 时:分:秒)?

### 什么是类数组(伪数组)，如何将其转化为真实的数组?

### 如何遍历对象的属性?7

### 如何给一个按钮绑定两个 onclick 事件?

### 变量提升是什么?与函数提升的区别?

### 什么是作用域链?如何延长?

### 如何实现数组的随机排序?

### dom 节点的 Attribute 和 Property 有何区别?

### dom 结构操作怎样添加、移除、移动、复制、创建和査找节点?

### 如何让事件先冒泡后捕获?

### JavaScript 动画和 CSS3 动画有什么区别?

### dom 的事件模型

### 事件三要素是什么?

### 获取元素位置?

### 如何绑定事件，如何解除事件?

### 对事件委托的理解

### setTimeout 和 setInterval 的区别及用法是什么?

### 岗位轮换 setTimeout 来实现 setInterval

### document.write 和 innerHTML 的区别?

### 元素拖动如何实现，原理是怎样?

### 什么是重绘(repaint)?什么是回流(reflow)?如何最小化重绘和回流?

### 解洪

### 延迟加载的方式有哪些?

### 垃圾回收机制有哪些?具体怎么如何执行?

### 什么是内存泄漏 ?

### 数组遍历的方法有哪些，分别有什么特点，性能如何?

### ES5 和 ES6 的区别，ES6 新增了什么?

### ES6 的继承和 ES5 的继承有什么区别?

### var、let、const 之间的区别?暂时性死区如何理解?

### Class、extends 是什么，有什么作用?

### 什么是 JS 闭包

### 说一下类的创建和继承，列举一下你所知道的继承方式

### 如何解决异步回调地狱

### 说一下图片的懒加载和预加载

### mouseover和mouseenter的区别

### new 操作符做了哪些事情

### 改变函数内部 this 指针的指向函数(bind，apply，call 的区别)，内在分别是如何实现的?

### js 的各种位置，比如 clientHeight, scrollHeight, offsetHeight ,以及 scrollTop, offsetTop, 的区别?

### 异步加载 JS 的方法

### Ajax 解决浏览器缓存问题

### 节流和防抖

### eval 是做什么的

### 对象深拷贝的简单实现

### 实现 jS 中所有对象的深度克隆（包装对象，Date 对象，正则对象）

### 一个 once 函数，传入函数参数只执行一次

### 实现将原生的 ajax 封装成 promise

### jS 监听对象属性的改变

### 如何实现一个私有变量，用 get 可以访问，不能直接访问

### 怎么控制一次加载一张图片，加载完后再加载下一张

### 如何实现 sleep 的效果(es5 或者 es6)

### Function._proto_(getPrototypeOf)是什么?

### 箭头函数中 this 指向

### 数组常用方法有哪些

### 数组去重有哪些方法?

### 如何去除字符串首尾空格

### 说说你所知道的 js 语言特性?

### 如何判断一个数组?

### JS 的全排列

### 谈谈你所理解的跨域，为什么会有这个问题?如何解决?

### null == undefined 输出什么? null === undefined 呢?

### 什么是按需加载

### 简单介绍-下 symbol

### 介绍-下 promise，及其底层如何实现

### JS 原型链，原型链的顶端是什么?0bject 的原型是什么?Object的原型的原型是什么?

### promise+Generator+Async的使用

### JS 中 string 的 startwith 和 indexof 两种方法的区别

### 15 字符串转数字的方法

### 平时是怎么调试 JS 的

### 怎么获得对象上的属性

### async 和 await 具体该怎么用?

### 知道哪些 ES6，ES7 的语法

### promise 和 await/async 的关系

### JS 加载过程阻塞，解决方法

### JS 对象类型，基本对象类型以及引用对象类型的区别轮播的实现原理?假如一个页面上有两个轮播，你会怎么实现?

### 解释-下 JS 的事件循环

### Localstorage、sessionStorage、cookie 的区别

### 解释下 HTML5 Drag API

### 解释-下 webworker

### {} 和[]的 valueOf 和 toString 的结果是什么?

### 三种事件模型是什么?

### 介绍-下 V8 隐藏类

### AMD 和 CMD 规范的区别?说-下 CommonJS、AMD 和 CMD?

### 谈谈 JS 的运行机制

## VUE

### 说说你对 Vue 的理解，有何优缺点?

### Vue 和 React 有什么不同?

### 什么是虚拟 DOM?

### 描述下 vue 的生命周期有哪些?分别做了什么事情?watch 怎么深度监听对象变化

### 删除数组用 delete 和 Vue.delete 有什么区别?

### watch 和 computed 有什么区别?

### v-for 没有 key 会发生什么问题?

### 谈谈 Vue 双向绑定原理

### v-model 是什么?有什么用呢?

### 在 vue 项目中如何引入第三方库?有哪些具体操作方法?

### Vue3.0 里为什么要用 Proxy API 替代 defineProperty API?

### Vue3.0 编译做了哪些优化?

### Vue3.0 新特性 -- Composition API 与 React.js 中 Hooks 的异同点

### Vue3.0 是如何变得更快的?dom diff 算法有何优化?

### vue 要做权限管理该怎么做?如果控制到按钮级别的权限怎么做?

### vue 在 created 和 mounted 这两个生命周期中请求数据有什么区别呢?

### 说说你对 Proxy 的理解

### Vue3.0性能提升主要是体现在哪些方面?

### vue3有哪些新的组件?

### Vue2.0 和 Vue3.0 有什么区别?

### Composition Api 与 Options Api 有什么不同?

### 对Vue项目你做过哪些性能优化?

### Vue组件通信的方式有哪些?

### Vue常用的修饰符有哪些?

### Vue中的$nextTick有什么作用?底层如何实现?

### v-show和v-if有什么区别?

### 有用过keep-alive吗?它有什么作用?

### 如何实现一个虚拟DOM吗?

### 为什么data属性是一个函数而不是一个对象，具体原因是什么?

### Vue2的初始化过程你有过了解吗，做了哪些事情?

### Vue3初始化的一个大概流程?

### vue3响应式api如何编写?

### 在Vue项目中你是如何做的SSR渲染?

## Echarts

### echarts 的基本用法?

### 如何在 vue 中引入 ?

### 如何绘制条形图?

### 切换时卡顿如何解决?

### echarts 图表自适应 div resize 问题?

## 计算机网络

### 什么是 Ajax，Ajax 都有哪些优点和缺点?

### 请介绍一下 XMLHTTPrequest 对象及常用方法和属性

### Ajax 的实现流程是怎样的?

### Aiax 接收到的数据类型有哪些，数据如何处理?封装好的 Ajax 里的常见参数及其代表的含义

### Ajax 注意事项及适用和不适用场景

### 常见的 HTTP 状态码以及代表的意义

### 301 302 303 状态码的区别?

### 什么是同源策略

### 为什么会有跨域的问题出现，如何解决跨域问题

### Get 和 Post 的区别以及使用场景

### 解释 jsonp 的原理

### HTTP 与 HTTPS 的区别

### 简述 web 前端 Cookie 机制，并结合该机制说明会话保持原理

### 你知道的 HTTP 请求方式有几种

### 谈谈你理解的 RESTFUL 规范

### 解释一下三次握手是什么，具体流程。变为二次握手会发生什么问题?

### TCP 和 UDP 分别是什么?

### WebSocket 的实现和应用

### -个图片 ur 访问后直接下载怎样实现?

### 说-下 http2.0

### 补充 400 和 401、403 状态码

### fetch发送2次请求的原因

### 对 HTML 语义化标签的理解

### Cookie 和 session 的区别

### 强缓存 和 协商缓存 区别?什么时候用哪个?本质是?

### cache-control 的值有哪些

### 谈谈 304 状态码

### 什么是 CDN，以及如何优化?

### DNS是什么

### 什么是四层、七层网络模型?

## 代码编程

### this指向

### 如何判断对象为空

### 事件循环下面题目输出什么，为什么？

### 函数柯里化 实现一个add 函数满足能力

### 假设前端需要发 n个请求(n很大)，写一个方法同时只并发10个请求，直到n个请求完成

### 实现转化下划线命名到驼峰命名

### 实现对象深拷贝

### 如果已经有三个 promise，A、B 和 C，想串行执行，该怎么写?

## 网络安全

### 什么是 xss 攻击及如何防范

### 什么是 ddox 攻击及如何防范?

### 什么是 csrf 攻击及如何防范?

## 前端工程化

### 如何理解前端模块化、前端组件化，二者有何区别?

### 如何理解前后端分离?

## webpack

### 有自己配置过 webpack 吗?如果需求是多页面与单页面并行，需要如何配置?

### Webpack 的优点是什么?

### Webpack 的构建流程是什么?从读取配置到输出文件这个过程尽量说

### 说-下 Webpack 的热更新原理

### 有哪些常见的 Loader?他们是解决什么问题的

### loader 和 Plugin 的不同?

### 如何利用 Webpack 来优化前端性能

### 是否写过 Loader 和 Plugin?描述-下编写 loader 或 plugin 的思路?

### 使用 Webpack 开发时，你用过哪些可以提高效率的插件?

### 什么是长缓存?在 Webpack 中如何做到长缓存优化?

### 如何提高 Webpack 的构建速度?

### 怎么实现 Webpack 的按需加载?什么是神奇注释?

### Babel 的原理是什么?

### 如何写-个 babel 插件?

### rebase 与 merge 的区别?

### git reset、 git revert 和 git checkout 有什么区别 ?

### webpack 和 vite 区别(模块化与流的区别)

### webpack文件指纹策略:hash chunkhash contenthash

### 研发协同(Git)

### git 的基本使用方法

### git 工作流程

### 需要合并别人代码进来

### 需要切换分支

### 我们如何使用 git 和开源的码云或 github 上面的远端仓库的项目进行工作呢

### git、github、gitlab 三者之间的联系以及区别

### github 和码云的区别

### 提交时发生冲突，你能解释冲突是如何产生的吗?你是如何解决的

### 如果本次提交误操作，如何撤销

### git 修改提交的历史信息

### 如何删除 github 和 gitlab 上的文件夹

### 如何查看分支提交的历史记录?查看某个文件的历史记录呢

### git 跟 svn 有什么区别

### 我们在本地工程常会修改一些配置文件，这些文件不需要被提交14.而我们又不想每次执行 git status 时都让这些文件显示出来，我们该如何操作?

### git fetch 和 git merge 和 git pull 的区别

### 如何把本地仓库的内容推向一个空的远程仓库

## 发布上线

### 流水线如何搭建

### 对 Docker 理解

### pm2 与 docker 有何区别?

## 测试

### 单元测试如何做?

### 如何解决联调依赖问题?

### 提测阶段bug 和 线上bug 解决过程有和区别?

## Nodejs

### 对 Node.js 有没有了解，它有什么特点，适合做什么业务

### Node 和 前端项目怎么解决跨域的Node 的优点是什么?

### 缺点是什么commonjS 中的 require/exports 和 ES6 中import/export 的区别是什么

### 简述同步和异步的区别，如何避免回调地狱，Node 的异步问题是如何解决的

### dependencies 和 devDependencies 两者区别

### 描述一下从接到 ur 开始，到逻辑处理，到DB查询，到返回结果，整个过程是怎么处理的?

### 谈谈你对 Koa 和 Express 的理解，二者的区别是?

### 谈谈对 egg 和 nest.js 的理解，二者的区别是?

:::tip
[出自抖音哲玄](https://www.douyin.com/search/%E5%93%B2%E7%8E%84?aid=88f86942-7166-49c0-8391-457e1bed5a05&type=general)
:::
