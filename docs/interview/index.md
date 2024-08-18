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

```js
document.getElementById('text').style.color = 'red';
```

### 34. 相对布局和绝对布局，位置:相对和绝对

### 35. 什么是弹性盒子柔性布局?

### 36. 什么是 rem 布局?

REM 布局是基于CSS中的相对单位 rem 进行网页布局的一种方法。它相对于根元素（通常是HTML元素）的字体大小进行度量。使用 rem 布局有助于实现响应式设计，使网页在不同设备和屏幕尺寸上更具**一致性**和**可读性**。
一致性：rem 基于根元素的字体大小，这意味着如果根元素的字体大小发生变化，所有使用 rem 的元素都会按比例调整，从而保持一致的比例和布局。
可读性：由于 rem 是一种相对单位，它更容易理解和维护，比绝对单位（如 px）更灵活
响应式设计：通过调整根元素的字体大小，可以轻松实现整个页面的缩放，从而适应不同的屏幕尺寸和分辨率

```html

html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1rem; /* 16px */
}

```

### 37. Less和SCSS有什么区别?

Less 和 SCSS 都是 CSS **预处理器**，用于编写更**简洁**、**模块化**和**可维护**的 CSS 代码。
它们都提供了**变量**、**嵌套**、**混合**等高级功能，但在语法和特性上有所不同。
以下是 Less 和 SCSS 的主要区别：

1. less 使用的是@符号，scss使用的是$
2. 嵌套规则基本一致
3. 在Mixins上也有区别 less 使用的.class的方法，而scss使用的是@mixin 引用则是 @include

Less
即用即编译：Less 通常在客户端编译，但也可以在服务器端或使用构建工具进行编译。
简单易用：Less 的语法更接近原生 CSS，更容易上手。
SCSS
强大的功能：SCSS 提供了更多高级功能，如嵌套规则、继承、模块化和运算功能。完全兼容 CSS，同时也提供了一套强大的脚本语言，用于在样式表中进行逻辑运算和函数调用。@import：支持将样式拆分为多个文件并通过 @import 进行组合。
@extend：允许选择器继承其他选择器的样式。

### 38. 双冒号和单冒号的区别?

双冒号（::before 和 ::after）和 单冒号（:before 和 :after）主要用于区分伪元素和伪类。
伪类（Pseudo-classes）：用于选择元素的特定状态，例如 :hover、:active、:nth-child 等。
伪元素（Pseudo-elements）：用于选择元素的一部分，例如元素的首字母、首行或插入的内容。

单冒号主要用于伪类，但在CSS2及之前的规范中，伪元素也使用单冒号，双冒号是CSS3引入的，用于更明确地区分伪元素和伪类。伪元素在CSS3中使用双冒号。推荐的用法是

伪类 使用单冒号，如 :hover、:nth-child。
伪元素 在CSS3中推荐使用双冒号，如 ::before、::after，尽管单冒号在大多数情况下也能正常工作

### 39. CSS3 新增伪类，以及伪元素?

新增伪类

:nth-child(an+b)，:nth-last-child(an+b)，:first-child 和 :last-child，:root，选择文档的根元素（通常是HTML元素）。

新增伪元素

::before 和 ::after：在元素内容的前后插入内容。
::first-line：选择元素的第一行

### 40. 响应式布局实现方案?

百分比

#### 媒体查询

通过@media规则，可以为不同的屏幕尺寸定义特定的样式。
这样可以在小屏设备和大屏设备上应用不同的布局规则，实现真正的响应式设计。

#### 视口单位

使用vw, vh, vmin, vmax等单位，它们基于视口的宽度或高度，有助于创建自适应的布局。

#### 利用Bootstrap、Foundation等前端框架，它们内置了响应式栅格系统和其他组件，简化了响应式设计的实现过程

#### 弹性盒模型（Flexbox）

利用CSS的display: flex;属性创建容器，通过flex-direction, justify-content, 和 align-items等属性控制子元素的排列和对齐方式。

Flexbox特别适合创建一维的响应式布局。

### 41. 链接标签和导入标签的区别?

1. 链接标签（<link>）和导入标签（@import）都是用于**包含外部样式表**的方法
2. <link> 标签是一种HTML元素,用于将外部资源（如样式表、图标等）链接到HTML文档中。而@import 是一种CSS规则用于在一个CSS文件中导入另一个CSS文件。
3. <link> 更适合在HTML文档中直接链接外部样式表，性能更好。

@import 适合在CSS文件中组织和管理样式表，但要注意其可能带来的性能影响。

### 42. 过渡和动画的区别?

CSS中的过渡（transition）和动画（animation）都是用于在网页上**实现动态效果**的方法，但它们在实现方式、应用场景和控制细节上有显著区别。

过渡（Transition）用于在**元素状态改变**时，**平滑地过渡**一个或多个CSS属性的**值**。

动画（Animation）用于在**一定的时间内**，通过**关键帧定义**一个或多个CSS属性的**变化**。

#### 特点

过渡：  
触发机制：过渡需要一个**触发事件**，例如**用户的悬停**、**点击**或**元素状态的改变**。  
简单控制：只需要定义**初始状态**和**结束状态**，**浏览器**会自动**计算中间状态**。  
属性限制：只能在触发事件发生时对有限的CSS属性进行过渡。  
简洁性：适用于简单的状态变化，不需要复杂的中间步骤。  

动画  
独立运行：动画不需要事件触发，可以在**页面加载时**自动运行，**也可以通过JavaScript**控制。  
复杂控制：可以定义多个关键帧，精细控制动画的每个阶段。  
无限循环：可以设置动画无限循环或特定次数循环。  
多属性变化：可以在一个动画中同时对多个属性进行变化。  

#### 使用

过渡：

适用于简单的交互效果，如悬停、焦点、激活等状态变化。控制少量CSS属性的简单变化。

动画：

适用于复杂的效果，需要多个阶段的精确控制。同时能创建独立运行、循环播放或需要精细调整的动画效果。

过渡：适合于简单的状态变化，依赖于**用户交互**或状态改变，使用起来较为**简单**。
动画：适合于复杂的、多步骤的动画效果，不依赖于用户的交互，可以**独立运行**，提供更强的控制力和灵活性。

### 43. 说一下块元素、行元素、置换元素

1. 块元素是占据其父容器的整个宽度，形成一个独立的块级区域。行内元素只占据其内容所需的宽度，并与其他行内元素共享同一行。置换元素是由外部资源决定其显示内容和尺寸的元素。

#### 主要特点

块元素：  
独占一行：每个块元素都从新的一行开始，并且在其后自动换行。  
宽度：默认情况下，块元素的宽度是其父容器的100%。
高度：高度由其内容决定，但可以通过CSS进行设置。
内边距和边框：可以设置上下左右的内边距和边框。  
可包含其他块元素和行内元素。  

行内元素：  
不独占一行：行内元素不会在其前后自动换行。  
宽度：仅占据内容所需的宽度。  
高度：仅占据内容所需的高度。  
内边距和边框：只能设置左右的内边距和边框，上下的内边距和边框可能会影响布局但不会改变行高。
不能包含块元素：只能包含文本或其他行内元素  

主要特点  
外部资源：显示内容通常是外部资源（如图像、视频、表单元素等）。  
默认尺寸：由其内容的固有尺寸决定，但可以通过CSS修改。  
具体表示：浏览器会根据元素类型和内容进行具体表示。

#### 常见元素

```html
<!-- 块元素 -->
<div>, <p>, <h1> - <h6>, <ul>, <ol>, <li>, <table>, <header>, <footer>, <section>, <article>, <nav>, <aside>, <blockquote>, <form>
<!-- 常见行内元素 -->
 <span>, <a>, <strong>, <em>, <img>, <br>, <input>, <label>, <code>, <b>, <i>, <u>, <small>, <sub>, <sup>, <time>, <mark>, <q>, <cite>, <abbr>, <dfn>
<!-- 置换元素 -->
 <img>, <input>, <textarea>, <select>, <object>, <video>, <embed>, <iframe>, <canvas>

```

块元素：独占一行，宽度默认100%，可以包含块和行内元素。  
行内元素：共享一行，仅占内容宽度，不能包含块元素。  
置换元素：由外部资源决定内容和尺寸，显示具体内容。  

### 44. 多行元素的文本省略号如何实现?

``` html
  <div class="ellipsis">
    The text should end with an ellipsis after the specified number of lines.
    The text should end with an ellipsis after the specified number of lines.
    The text should end with an ellipsis after the specified number of lines.
  </div>
<!-- 方法一依赖于WebKit浏览器的特性，并结合其他CSS属性来实现。 -->
  <style>
    .ellipsis {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* 这里指定显示的行数 */
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5; /* 根据需要调整行高 */
      max-height: 4.5em; /* line-height * number of lines */
    }
  </style>
  <!-- line-clamp 是一个较新的CSS属性，目前并非所有浏览器都完全支持。-->
    <style>
    .ellipsis {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 3; /* 这里指定显示的行数 */
      display: -webkit-box;
    }
  </style>
  <!-- 使用 JavaScript -->
    <style>
    .ellipsis {
      max-height: 4.5em; /* 控制最大高度，行高的倍数 */
      overflow: hidden;
      position: relative;
    }
    .ellipsis::after {
      content: '...';
      position: absolute;
      bottom: 0;
      right: 0;
      background: white; /* 根据背景色调整 */
    }
  </style>
   <script>
    function addEllipsis() {
      var element = document.getElementById('ellipsis');
      var lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      var maxHeight = parseFloat(getComputedStyle(element).maxHeight);
      var maxLines = Math.floor(maxHeight / lineHeight);

      while (element.scrollHeight > element.offsetHeight) {
        element.textContent = element.textContent.replace(/\W*\s(\S)*$/, '...');
      }
    }

    addEllipsis();
  </script>
```

### 45. 文档类型作用?严格模式与混杂模式如何区分?它们有何意义?

#### 文档类型（Doctype）

1. 触发浏览器模式：决定浏览器使用何种渲染模式来解析和呈现网页。
2. 文档标准化：帮助确保HTML和CSS的正确解析，减少浏览器对代码的错误解释。
3. 兼容性：提高不同浏览器之间的兼容性，确保网页在各个浏览器中的呈现尽可能一致。

#### 区别

严格模式是浏览器完全遵循W3C规范来解析和渲染HTML和CSS的模式。在这种模式下，浏览器严格按照标准来执行，从而确保网页在不同浏览器中表现一致。混杂模式是为了兼容早期网页设计而存在的。在这种模式下，浏览器会模仿上世纪90年代及2000年早期的非标准行为，以确保旧网页能够正确显示。这种模式会导致一些CSS和JavaScript行为的差异，从而可能影响现代网页的表现。

1. 完整的HTML5 Doctype（例如 <!DOCTYPE html>）会触发严格模式。
2. 缺失或不完整的Doctype声明会触发混杂模式。

#### 意义

严格模式的意义  
一致性：确保网页在不同浏览器中的表现一致，减少跨浏览器的差异。  
现代标准：允许使用现代HTML和CSS功能，提升网页的功能和表现。  
调试和维护：遵循标准的代码更容易调试和维护，减少非标准行为导致的问题。  

混杂模式的意义  
兼容性：帮助旧网页在现代浏览器中正常显示，避免因旧网页不符合现代标准而导致的渲染问题。  
渐进增强：提供一种向后兼容的方式，使得过渡到现代标准变得更平滑。  

## JAVASCRIPT

### javascript 有数据类型有哪些?

原始数据类型

String、Boolean、Number、Null、Undefined、 bigint、Symbol

引用数据类型

Object、Array、Function、Date、RegExp、Error

原始数据类型是不可变的，代表基本的数据值；对象数据类型是可变的，代表更复杂的数据结构和功能

### javascript 有哪些引用类型?

扩展上面 Map、Set、WeakMap、WeakSet

1. Object：基础对象类型。  
2. Array：有序集合。
3. Function：可执行代码块。
4. Date：日期和时间。
5. RegExp：正则表达式。
6. Error：错误对象。
7. Map：键值对集合，键值可以是任意数据类型。
8. Set：唯一值集合。
9. WeakMap：弱引用键的 Map。
10. WeakSet：仅存储对象的弱引用 Set。

### 如何判断 javascript 的数据类型?

1. 使用 typeof 运算符typeof 运算符可以用来判断**基本数据类型**（原始数据类型）和函数的类型。
2. 使用 instanceof 运算符,instanceof 运算符可以用来判断对象是否是某个构造函数的实例。这对于判断对象数据类型特别有效。
3. 使用 Array.isArray() 方法专门用于判断一个值是否为数组。
4. 使用 Object.prototype.toString.call() 方法可以用来准确判断数据的具体类型，包括区分 null 和 object。
5. 使用 constructor 属性可以用于检查对象的构造函数，但它可能会被重写，因此并不总是可靠。
6. 判断是否为 null,由于 typeof null 返回 "object"，我们可以使用特定检查来判断一个值是否为 null。

* typeof：适用于基本数据类型（Number, String, Boolean, Undefined, Symbol, BigInt）和函数。
* instanceof：适用于对象和自定义类的实例。
* Array.isArray()：专门判断数组。
* Object.prototype.toString.call()：最准确的判断方法，适用于各种类型。
* constructor 属性：可用于对象类型，但可能不可靠。
* 特定检查：用于判断 null 值。

### 怎么判断两个对象相等?

1. 在JavaScript中，可以使用递归算法来比较两个对象的所有属性和嵌套属性
2. 使用 JSON.stringify() 方法，它将 JSON 对象转换为字符串，然后比较两个字符串。这个方案是不考虑symbol属性

```js
function isEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (obj1 == null || obj2 == null) return false;

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    let keys1 = [...Object.keys(obj1), ...Object.getOwnPropertySymbols(obj1)];
    let keys2 = [...Object.keys(obj2), ...Object.getOwnPropertySymbols(obj2)];

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

```

### 如何判断空对象?

1. Reflect.ownKeys()
2. Object.keys()
3. Object.getOwnPropertyNames()
4. Object.entries()
5. JSON.stringify()
6. for...in

### 0.1+0.2 为什么不等于 0.3 ?(解释原理)

1. 原因在于计算机内部的浮点数表示使用了二进制系统，而某些十进制小数无法用二进制准确表示。
这个我描述得不是很好，这个得查一下计算机二进制 和 十进制
在计算机中，浮点数（如0.1、0.2和0.3）通常使用二进制格式存储，这与我们日常使用的十进制格式不同。这种存储方式遵循IEEE 754标准，它使用有限的位数来表示一个浮点数，包括指数部分和小数部分。由于二进制系统不能精确表示所有十进制小数，这就导致了一些常见的十进制小数在二进制中只能被近似表示。

具体到0.1+0.2的例子中，0.1和0.2都无法用二进制精确表示，它们在计算机内部会被转换为最接近的二进制分数。例如，0.1在二进制中被表示为一个无限循环小数：0.0001100110011...，而0.2则被表示为另一个无限循环小数。当这两个数相加时，结果同样是一个近似的二进制数，这个结果再转换回十进制时，通常不会恰好等于0.3。

在大多数编程语言中，当你打印出0.1+0.2的结果时，你看到的可能是0.30000000000000004这样的数字，这是因为计算机内部的计算结果与期望的0.3有微小的差异。这种现象在进行财务计算或其他对精度要求极高的场景中尤其需要注意，通常会采取一些策略来避免或减少这种误差的影响，比如使用定点数、高精度数学库或通过四舍五入等方法进行修正。

### 强制类型转换、隐式类型转换分别是什么，列举场景说明

1. 强制类型转换，也称为**显式类型转换**，是指在代码中**明确地**指定要将一种数据类型转换为另一种数据类型。程序员明确地使用转换函数或操作符进行类型转换。
2. 隐式类型转换，也称为**自动类型转换**，是指在编程语言中**自动进行的类型转换**。编译器或解释器会在需要时自动进行类型转换，而不需要程序员明确指定。

```js
// 强制类型 数字转换为字符串、字符串转换为数字
let a = 1
a='1'
// 隐式类型 字符串与数字相加时、布尔值转换为数字
let b = 1
b = b + '2'
```

### 创建函数的几种方式?

1. 函数声明
2. 函数表达式
3. 箭头函数
4. 立即调用的函数表达式
5. new Function

### javascript 创建对象的几种方式?

1. 对象字面量直接使用花括号 {} 来定义
2. 使用 new Object()构造函数，可以用来创建一个空对象
3. 可以定义一个构造函数，并使用 new 关键字来创建对象实例
4. ES6 引入了类（class）语法，它是一种更清晰的创建对象和定义构造函数的方式5
5. 工厂函数是一个普通函数，用于创建和返回对象

### 列举宿主对象、内置对象、原生对象并说明其定义

1. 宿主对象:JavaScript的执行环境（通常是浏览器或Node.js）提供的对象。这些对象不是JavaScript语言本身的一部分，而是由宿主环境定义的

浏览器环境提供了以下对象：
window: 表示浏览器窗口。
document: 表示HTML文档。
console: 用于控制台输出。
XMLHttpRequest: 用于进行HTTP请求。
localStorage 和 sessionStorage: 用于客户端存储

Node.js环境：
global: 类似于浏览器中的window对象。process: 提供有关Node.js进程的信息和控制。
require: 用于加载模块。fs: 文件系统模块，用于文件操作。

2. 内置对象:内置对象是JavaScript语言规范的一部分，在程序执行前就已经存在。这些对象在全局范围内可用

3. 原生对象:包括所有内置对象以及通过JavaScript语言定义的对象（用户自定义对象）。例如：通过new关键字或字面量语法创建的对象。

### ===和 ==的区别?

==（宽松相等运算符） 运算符用于比较两个值是否相等，但在比较之前会进行类型转换。这意味着不同类型的值在比较时可能会被自动转换成相同的类型，然后再进行比较。

```js
// 例子
5 == '5'    // true，因为字符串'5'会被转换成数字5进行比较
0 == false  // true，因为false会被转换成数字0进行比较
null == undefined  // true，因为它们被认为是等价的
```

===（严格相等运算符）=== 运算符用于比较两个值是否相等，并且不会进行类型转换。只有当两个值的类型和内容都相同时，比较才会返回 true。

### null, undefined 的区别

undefined 是一个表示变量**未定义**的**原始值**, 在一个变量被声明但没有被赋值时，它的值是 undefined。访问一个对象中不存在的属性，它也会返回 undefined。  
null 是一个表示**空值**或**无**的**原始值**，通常用于表示意图上的**无值**

undefined 通常表示变量尚未定义或初始化，自动由 JavaScript 赋值。
null 通常表示故意的“空值”，由开发者显式赋值以表示没有值的状态。

### 什么情况下会返回 undefined 值?

1. 变量声明但未初始化
2. 函数没有返回值
3. 访问不存在的对象属性
4. 数组中未初始化的元素
5. 函数参数未提供
6. 解构赋值中的缺失值

### 如何区分数组和对象?

### 多维数组如何降维?

1. flat
2. 使用递归
3. reduce

```js
// flat 
let arr = [1, [2, [3, [4, 5]]]];
let flattened = arr.flat(Infinity);  // Infinity 表示递归降维到最深层
console.log(flattened);  // 输出: [1, 2, 3, 4, 5]
// 递归reduce
function flatten(arr) {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

let arr = [1, [2, [3, [4, 5]]]];
let flattened = flatten(arr);
```

### 怎么获取当前日期(年-月-日 时:分:秒)?

```js
getFullYear()：// 获取四位数的年份。
getMonth() + 1：// 获取月份，注意 JavaScript 的月份从0开始，所以需要加1。
getDate()：// 获取月份中的日期。
getHours()：// 获取小时（24小时制）。
getMinutes()：// 获取分钟。
getSeconds()：// 获取秒数。
padStart(2, '0')：// 将单数字符串前面补零，使其总长度为2位。
```

### 什么是类数组(伪数组)，如何将其转化为真实的数组?

是指拥有类似数组的特性（如length属性和通过索引访问元素），但不具备数组的方法（如push、pop等）的对象。常见的类数组对象包括**arguments**对象、DOM方法返回的**NodeList**、以及**HTMLCollection**。具有的特性是拥有length属性、通过索引（如obj[0]）访问元素。
转换方法

1. Array.prototype.slice.call
2. Array.from
3. 使用扩展运算符

### 如何遍历对象的属性?

1. for...in 循环与 Object.getOwnPropertySymbols()
2. Reflect.ownKeys()
3. Object.getOwnPropertyNames() 获取所有属性名称（包括不可枚举的属性）。
4. 使用 Object.entries() 和 Object.getOwnPropertySymbols()

### 如何给一个按钮绑定两个 onclick 事件?

1. 直接在 HTML 中定义多个 onclick 处理程序
2. addEventListener

```js
onclick="firstHandler(); secondHandler();"
```

### 变量提升是什么?与函数提升的区别?

变量提升：变量声明被提升到作用域顶部，但赋值不提升。var 声明的变量在提升时会被初始化为 undefined，而 let 和 const 声明的变量在提升时会进入暂时性死区，直到声明语句为止。

函数提升：函数声明整个被提升，包括函数体，可以在函数声明前调用函数。函数表达式不会被提升。

### 什么是作用域链?如何延长?

1. 在JavaScript中，作用域链（Scope Chain）是用来解析变量标识符的一个机制。它决定了程序在运行时如何查找变量。作用域链是由多个作用域（通常是函数作用域和块作用域）按照其嵌套层级排列而成的一个链条。

原理

当代码在某个执行上下文中（如函数或全局上下文）执行时，会创建一个作用域链来解析标识符。作用域链是由当前执行上下文的变量对象（Variable Object）加上其父上下文的变量对象，依此类推，直到全局上下文的变量对象组成的。

如何延长 ：使用块作用域（ES6）

### 如何实现数组的随机排序?

1. Fisher-Yates 洗牌算法：这是实现数组随机排序的最推荐方法，保证了真正的随机性。
2. sort() 方法：使用sort()方法与随机比较函数实现随机排序虽然简单，但不保证真正的随机性，不推荐在需要严格随机性场合使用。  

```JS
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // 生成一个0到i之间的随机整数
        const j = Math.floor(Math.random() * (i + 1));
        // 交换元素array[i]和array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const arr = [1, 2, 3, 4, 5, 6];
const shuffledArr = shuffleArray(arr);
console.log(shuffledArr); // 输出随机排序后的数组

```

### dom 节点的 Attribute 和 Property 有何区别?

Attributes 是在HTML标签中定义的内容，它们是元素的初始值，Attributes 存储在HTML标签中，当浏览器解析HTML文档时，这些属性值会被用于初始化对应的DOM节点的Properties。通过 getAttribute() 和 setAttribute() 方法可以访问和修改Attributes。

Properties 是DOM对象的属性，表示元素的当前状态。它们是动态的，可能会随用户交互而改变。Properties 是存储在DOM对象中的JavaScript属性，通过直接访问和修改DOM对象的属性来操作Properties

#### 区别

初始化：

Attributes 是在HTML中定义的，它们用于初始化DOM对象的Properties。  
Properties 是DOM对象的属性，是由浏览器解析HTML后生成的。

动态性：

Attributes 通常不会在页面加载后发生变化，除非通过 setAttribute 方法显式修改。
Properties 是动态的，可能会随用户交互或JavaScript代码的执行而变化。

访问方式：

Attributes 通过 getAttribute() 和 setAttribute() 方法访问和修改。
Properties 通过直接访问DOM对象的属性来访问和修改。
数据类型：

Attributes 通常是字符串类型，因为它们来源于HTML文本。
Properties 可以是任意类型，例如布尔值、对象等。

```html
  <input id="myInput" type="text" value="attribute value">

    <script>
        const input = document.getElementById('myInput');

        // 获取属性值
        console.log(input.getAttribute('value')); // 输出: attribute value

        // 获取属性值
        console.log(input.value); // 输出: attribute value

        // 修改属性值
        input.setAttribute('value', 'new attribute value');
        console.log(input.getAttribute('value')); // 输出: new attribute value

        // 修改属性值
        input.value = 'new property value';
        console.log(input.value); // 输出: new property value
        console.log(input.getAttribute('value')); // 输出: new attribute value (仍然是旧的属性值)
    </script>
```

### dom 结构操作怎样添加、移除、移动、复制、创建和査找节点?

添加节点：使用 appendChild()将一个节点添加到指定节点的子节点列表的末尾。、insertBefore()在指定节点之前插入一个新节点。、innerHTML直接设置一个元素的HTML内容（包括子元素）。。
移除节点：使用 removeChild()、remove()。
移动节点：使用 appendChild() 将节点从一个父节点移动到另一个父节点。
复制节点：使用 cloneNode()。  
创建节点：使用 createElement() 和 createTextNode()。  
查找节点：使用 getElementById()、getElementsByClassName()、getElementsByTagName ()、querySelector()、querySelectorAll()。

### 如何让事件先冒泡后捕获?

1. 在DOM事件模型中，事件传播有两个主要阶段：捕获阶段（Capturing Phase）和冒泡阶段（Bubbling Phase）。事件首先从文档的根节点开始，通过捕获阶段向下传播，最终到达事件目标节点；然后，事件在冒泡阶段从目标节点向上返回到根节点。
2. 默认事件传播顺序
捕获阶段：从文档根节点向下传播，直到事件目标。
目标阶段：事件到达目标节点。
冒泡阶段：从目标节点向上传播，直到文档根节点。
如何实现事件先冒泡后捕获
在标准DOM事件模型中，事件的传播顺序是不可改变的：先捕获，再目标，再冒泡。你不能直接改变事件的传播顺序使其“先冒泡后捕获”，因为这是浏览器的设计规范和事件模型的工作方式。

### JavaScript 动画和 CSS3 动画有什么区别?

1. 首先JavaScript 编写动画逻辑，通常使用 setInterval、setTimeout 或 requestAnimationFrame 等方法来实现。可以操作任何 DOM 属性，不仅限于样式属性，因此具有更大的灵活性。需要手动控制动画的每一步，如计算属性值、处理缓动函数等而CSS3 动画通过 CSS 的 transition 和 animation 属性来实现。transition 用于定义元素在状态变化时的过渡效果。animation 允许定义复杂的关键帧动画，可以通过 @keyframes 规则来设置不同时间点的样式变化。更适合简单的样式变换，尤其是那些可以通过 CSS 属性控制的动画效果。

2. 从性能来说JavaScript 动画性能依赖于浏览器的 JavaScript 引擎和动画实现方式，如果动画复杂或需要频繁操作 DOM，可能会导致性能问题。requestAnimationFrame 可以提升性能，因为它能够与浏览器的重绘周期同步。而CSS3 动画通常性能更高，因为动画可以由浏览器的优化引擎（如 GPU）处理，减少了主线程的负载。浏览器对 CSS 动画进行了高度优化，特别是对于硬件加速的属性（如 transform 和 opacity）。
3. 从使用场景来说JavaScript 动画适用于复杂的动画效果，尤其是那些需要精细控制或与用户交互紧密相关的动画。当动画需要与非样式属性变化、DOM 操作或业务逻辑结合时，JavaScript 是更好的选择。而CSS3 动画适用于简单的过渡效果和关键帧动画，如淡入淡出、位移、旋转、缩放等当动画只涉及样式变化且不需要与复杂的逻辑结合时，CSS3 动画更简单且性能更好。

#### 案例

```js
// js

const element = document.getElementById('animate');
let pos = 0;
function frame() {
  pos++;
  element.style.left = pos + 'px';
  if (pos < 100) {
    requestAnimationFrame(frame);
  }
}
requestAnimationFrame(frame);

//css
/* 定义关键帧 */
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}

/* 应用动画 */
#animate {
  position: relative;
  animation: move 1s linear;
}
```

于简单的动画效果，CSS3 动画更为推荐，因为其实现简单且性能更好。
对于复杂的动画需求或需要与 JavaScript 逻辑紧密结合的情况，JavaScript 动画是更好的选择。

### dom 的事件模型

要包括三个阶段：捕获阶段、目标阶段和冒泡阶段

1. 捕获阶段（Capturing Phase）
在捕获阶段，事件从文档的根节点向事件目标节点传播。这个阶段允许父节点在事件到达目标节点之前先处理事件。

2. 目标阶段（Target Phase）
在目标阶段，事件到达事件目标节点。此时，事件处理程序直接在事件目标节点上执行。

3. 冒泡阶段（Bubbling Phase）
在冒泡阶段，事件从目标节点向上级节点传播，直到文档的根节点。这个阶段允许父节点在事件已经在目标节点上处理之后再处理事件。

### 事件三要素是什么?

事件类型：指事件的种类，如 click、keydown 等。
事件目标：指事件实际发生的DOM元素，可以通过 event.target 获取。
事件处理程序：定义了事件发生时应该执行的代码块，通过 addEventListener 注册。

### 获取元素位置?

1. getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
2. offsetTop 和 offsetLeft 属性返回元素相对于其包含元素（最近的定位祖先）的顶部和左侧的距离。
3. 如果想要获取鼠标事件相对于视口的位置，可以使用 event.clientX 和 event.clientY。
4. event.pageX 和 event.pageY 返回鼠标事件相对于文档的位置，包括页面滚动的偏移量。
5. scrollTop 和 scrollLeft 属性返回元素的滚动条位置。
6. 假设你想要获取一个元素的大小及其相对于整个文档的位置，可以结合使用 getBoundingClientRect() 和页面的滚动偏移量：

### 如何绑定事件，如何解除事件?

1. 在 JavaScript 中，绑定和解除事件监听器是通过 addEventListener 和 removeEventListener 方法来实现的。以下是详细的说明和示例：
2. 绑定事件监听器使用 addEventListener 方法，可以将事件监听器绑定到一个元素上。它接受三个参数：事件类型、事件处理函数以及一个可选的选项对象或布尔值（用于指定事件捕获或冒泡阶段）。
3. 解除事件监听器使用 removeEventListener 方法，可以从一个元素上移除事件监听器。它接受三个参数：事件类型、要移除的事件处理函数以及一个可选的选项对象或布尔值（必须与添加事件监听器时的选项相同）。
补充：事件监听器选项第三个参数可以是一个选项对象，它提供更多的配置选项：

capture：布尔值，是否在捕获阶段触发监听器。
once：布尔值，表示监听器在触发一次后自动移除。
passive：布尔值，表示监听器永远不会调用 preventDefault。  

```js
// 获取元素
const button = document.getElementById('myButton');

// 定义事件处理函数
function handleClick(event) {
  console.log('Button clicked!');
}

// 绑定点击事件
button.addEventListener('click', handleClick);
```

#### 案例

使用匿名函数

如果在绑定事件时使用匿名函数，解除事件监听器时需要使用同一个匿名函数引用。通常情况下，这并不实际，因此推荐使用具名函数。

```js
// 获取元素
const button = document.getElementById('myButton');

// 绑定点击事件（匿名函数）
button.addEventListener('click', function handleClick(event) {
  console.log('Button clicked!');
  
  // 解除点击事件
  button.removeEventListener('click', handleClick);
});
```

捕获和冒泡

可以通过第三个参数来指定事件处理函数是否在捕获阶段执行。如果第三个参数为 true，则在捕获阶段执行；如果为 false 或省略，则在冒泡阶段执行。

```js
// 获取元素
const button = document.getElementById('myButton');

// 定义事件处理函数
function handleClick(event) {
  console.log('Button clicked!');
}

// 在捕获阶段绑定点击事件
button.addEventListener('click', handleClick, true);

// 在捕获阶段解除点击事件
button.removeEventListener('click', handleClick, true);

```

事件委托

事件委托是一种常见的优化技术，通过将事件监听器绑定到父元素上，利用事件冒泡机制来处理子元素的事件。

```js
// 获取父元素
const list = document.getElementById('myList');

// 定义事件处理函数
function handleItemClick(event) {
  if (event.target && event.target.nodeName === 'LI') {
    console.log('List item clicked!');
  }
}

// 绑定点击事件到父元素
list.addEventListener('click', handleItemClick);

```

### 对事件委托的理解

事件委托是一种常见的优化技术，通过将事件监听器绑定到父元素上，利用事件冒泡机制来处理子元素的事件。
性能优化：当有许多子元素需要绑定事件处理器时，事件委托可以显著减少内存使用和提高性能。
动态内容处理：事件委托允许处理将来动态添加到文档中的元素，而不需要重新绑定事件。

```js
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// 获取父元素0
const list = document.getElementById('myList');

// 定义事件处理函数
function handleItemClick(event) {
  // 检查事件目标是否是 LI 元素
  if (event.target && event.target.nodeName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
}

// 绑定点击事件到父元素
list.addEventListener('click', handleItemClick);


```

### setTimeout 和 setInterval 的区别及用法是什么?

setTimeout 方法用于在指定的延迟（以毫秒为单位）后执行一次代码或函数。
setInterval 方法用于在指定的时间间隔（以毫秒为单位）重复执行代码或函数，直到被取消为止。

setTimeout: 适用于需要延迟执行一次的任务。例如，显示延迟消息、计时器等。
setInterval: 适用于需要定期重复执行的任务。例如，轮询数据、动画、周期性更新等。

阻塞和延迟: JavaScript 是单线程的，如果当前线程被阻塞，定时器的执行可能会被延迟。
精度问题: 浏览器的定时器并不保证高精度，实际的执行时间可能会有所偏差，特别是在页面繁忙或被后台执行时。

### 岗位轮换 setTimeout 来实现 setInterval

### document.write 和 innerHTML 的区别?

首先两个方法都可以用来在网页中插入 HTML 内容
document.write 方法直接将内容写入 HTML 文档流。它通常用于在页面加载期间动态生成内容。使用 document.write 插入的内容会立即被解析并渲染到页面中。innerHTML 是一个属性，它允许读取或写入元素的 HTML 内容。通过设置 innerHTML，可以更新元素的内容而不会影响整个文档。它是现代 Web 开发中更常用的方法。

#### write

页面加载期间使用：document.write 通常用于页面加载期间。如果在页面加载完成后使用 document.write，它会清空整个文档，并重新写入新的内容。这会导致页面上的所有现有内容和事件处理器被删除。

性能问题：document.write 会阻塞页面加载，可能影响性能，尤其是在加载外部资源时。

现代开发中的局限性：在现代 Web 开发中，document.write 不常用，因其容易导致性能和维护性问题。

#### innerHTML

安全性问题：直接设置 innerHTML 可能会引入 XSS（跨站脚本）漏洞。如果内容来自用户输入或不可信来源，需要进行适当的过滤和转义。

性能考虑：频繁使用 innerHTML 更新内容可能会导致性能问题，因为每次设置 innerHTML 都会导致浏览器重新解析和渲染元素的内容。

保留事件处理器：更新 innerHTML 会删除元素内现有的事件处理器。如果需要保留事件处理器，应该使用其他方法（如 appendChild 或 insertAdjacentHTML）。

#### 总结

document.write：

用于页面加载期间动态生成内容。
会直接写入文档流，可能清空现有内容。
现代开发中不常用，因其容易导致性能和维护性问题。

innerHTML：

用于读取或设置元素的 HTML 内容。
不会影响整个文档，只更新指定元素的内容。
更常用，但需要注意安全性和性能问题。

在大多数情况下，innerHTML 是更安全和灵活的选择。对于动态生成内容，现代 Web 开发更倾向于使用 JavaScript 操作 DOM，如 innerHTML、appendChild、insertAdjacentHTML 等方法。

### 元素拖动如何实现，原理是怎样?

监听拖动开始事件：当用户按下鼠标或触摸屏幕时，记录初始位置。
监听拖动进行事件：当用户移动鼠标或滑动手指时，更新元素的位置。
监听拖动结束事件：当用户释放鼠标或手指时，结束拖动操作。

拖动开始：在 mousedown 或 touchstart 事件中，记录初始位置 (startX, startY) 和元素的当前位置 (initialX, initialY)。
拖动进行：在 mousemove 或 touchmove 事件中，计算新的位置，更新元素的 left 和 top 样式。
拖动结束：在 mouseup 或 touchend 事件中，标记拖动结束，恢复光标样式。

确保元素的 CSS position 属性设置为 absolute、relative 或 fixed 以便能够移动。
处理触摸事件时需要注意不同的触摸点和事件的细微差异。
考虑将拖动逻辑封装到一个函数或类中，以便重用和维护。

### 延迟加载的方式有哪些?

延迟加载（Lazy Loading）是一种优化技术，用于延迟加载非关键资源（如图像、脚本、样式表等），直到它们实际需要时再加载。这样可以加快初始页面加载速度，减少带宽消耗，提升用户体验

#### 图像延迟加载

使用 loading 属性
现代浏览器支持 loading 属性，可以简单地实现图像的延迟加载。

```js
// <img src="image.jpg" loading="lazy" alt="Lazy Loaded Image">

<img data-src="image.jpg" alt="Lazy Loaded Image" class="lazy">

<script>
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        let lazyLoad = function() {
            for (let i = 0; i < lazyImages.length; i++) {
                if (lazyImages[i].getBoundingClientRect().top <= window.innerHeight &&
                    lazyImages[i].getBoundingClientRect().bottom >= 0 &&
                    getComputedStyle(lazyImages[i]).display !== 'none') {
                    lazyImages[i].src = lazyImages[i].dataset.src;
                    lazyImages[i].classList.remove('lazy');
                }
            }

            if (lazyImages.length === 0) { 
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
            }
        };

        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);
    }
});
</script>


```

#### 脚本延迟加载、动态加载脚本

```js
<!-- defer: 脚本会在 HTML 解析完成后执行，按顺序执行 -->
<script src="script.js" defer></script>

<!-- async: 脚本会在下载完成后立即执行，执行顺序不确定 -->
<script src="script.js" async></script>

// 动态加载脚本
function loadScript(url, callback) {
    let script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

loadScript('script.js', function() {
    console.log('Script loaded and ready to use');
});

```

#### 样式表延迟加载、延迟加载模块

```js
function loadStylesheet(url) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

loadStylesheet('style.css');
// 动态导入模块
import('./module.js').then(module => {
    module.doSomething();
}).catch(err => {
    console.error('Error loading module:', err);
});
```

#### 使用外部库

```js
// lazysizes
// lozad.js
<img data-src="image.jpg" class="lozad" alt="Lazy Loaded Image">

<script src="https://cdn.jsdelivr.net/npm/lozad@1.14.0/dist/lozad.min.js"></script>
<script>
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
</script>

```

#### 内容延迟加载

```html

<div id="content"></div>
<button id="loadButton">Load Content</button>

<script>
document.getElementById('loadButton').addEventListener('click', function () {
    document.getElementById('content').innerHTML = '<p>This is the loaded content.</p>';
});
</script>

```

### 垃圾回收机制有哪些?具体怎么如何执行?

什么是垃圾回收机制？主要干什么的？
垃圾回收机制(garbage collection)简称GC 是javascript中使用的**内存管理系统**的基本组成部分。javaScript 是在创建变量（对象、字符串）时自动进行了分配内存，并且在**不使用它们**的时候，会自动回收内存。，释放的过程就是垃圾回收机。内存在不使用的时候就被垃圾回收器自动回收。

这里涉及一个概念内存的分配：内存分配：声明变量、函数、对象等，系统会自动为他们分配内存
内存的使用：读写内存、也就是使用变量、函数等

内存回收：使用完毕，由垃圾回收自动回收**不再使用**的内存

### 堆栈

 首先数据类型可以分为栈内存和堆内存

 栈内存：基本数据类型：number、string、boolean、null、undefined、symbol
 堆内存：引用数据类型：object、array、function

```js
var a = 1;
var b = true;
var c = '2';
```

### 什么是内存泄漏?

内存泄漏是指程序在运行时无法释放不再需要的内存，从而导致内存资源被浪费。
虽然 JavaScript 是一种垃圾回收语言，这意味着它会自动回收不再使用的内存，但内存泄漏问题仍然会发生。常见的 JavaScript 内存泄漏原因包括：

全局变量：在不小心的情况下，使用全局变量（例如，未声明的变量）会导致内存泄漏，因为全局变量在整个程序生命周期内都存在，无法被垃圾回收。

闭包：闭包可以保持对外部函数变量的引用。如果不小心管理闭包，可能会导致这些外部变量无法被垃圾回收，尤其是当闭包被长时间持有时。

事件监听器：如果添加了事件监听器但没有在不需要时移除它们，事件监听器会持续保持对 DOM 元素的引用，阻止它们被垃圾回收。

定时器：使用 setInterval 或 setTimeout 定时器时，如果不清理它们（使用 clearInterval 或 clearTimeout），可能会导致内存泄漏，特别是当定时器函数内部引用了大量内存时。

DOM 引用：如果保留了对 DOM 元素的引用（例如通过 JavaScript 对象），而这些 DOM 元素已经被从页面中移除，可能会导致内存泄漏。

循环引用：两个对象互相引用，导致垃圾回收机制无法回收它们的内存。

要避免这些问题，可以采取以下措施：

使用工具（如浏览器开发者工具）监测和分析内存使用情况。尽量避免使用全局变量，使用模块化和局部变量。确保及时移除不再需要的事件监听器和定时器。清理不再需要的 DOM 引用。
小心使用闭包，确保不会不必要地保持对大对象的引用。

### 数组遍历的方法有哪些，分别有什么特点，性能如何?

### ES5 和 ES6 的区别，ES6 新增了什么?

1. ES5: 只有 var 用于声明变量。ES6: 引入了 let 和 const，提供块级作用域。
2. ES5: 使用传统的函数声明。ES6: 引入箭头函数，简化函数声明。
3. ES5: 使用函数和原型链模拟类。ES6: 引入了 class 语法。
4. ES5: 使用字符串连接。ES6: 引入了模板字符串（模板字面量）。
5. ES5: 手动提取对象或数组中的值。ES6: 支持解构赋值。
6. ES5: 需要在函数内部检查并赋默认值。ES6: 支持函数参数的默认值。
7. ES5: 使用第三方库（如 CommonJS、AMD）进行模块化。ES6: 引入 import 和 export 语法。
8. ES5: 使用回调函数处理异步操作。ES6: 引入 Promise 对象，更方便的处理异步操作。
9. ES5: 不支持生成器函数。ES6: 引入生成器函数（使用 function* 语法）。
10. ES5: 不支持 Symbol 类型。ES6: 引入了 Symbol，用于创建唯一的标识符。

### ES6 的继承和 ES5 的继承有什么区别?

实现方式
ES5的继承主要通过原型链和构造函数来实现。‌具体来说，‌ES5的继承是通过修改子类的原型（‌prototype）‌来指向父类实例，‌或者通过构造函数中的call方法来调用父类的构造函数，‌从而实现继承。‌这种方式相对复杂，‌且容易引发一些问题，‌如方法覆盖等
ES6引入了类的概念，‌通过class关键字定义类，‌使用extends关键字实现类之间的继承关系。‌这种方式更接近传统的面向对象编程，‌且语法更简洁、‌易于理解和维护
语法差异：‌
ES5中，‌继承通常涉及到对原型链的操作，‌如Object.create()、‌prototype属性的设置等，‌这些操作相对低级且容易出错。
ES6的类语法提供了更高级别的抽象，‌通过class和extends关键字，‌可以更直观地表示类的继承关系。‌此外，‌super关键字的引入使得在子类中调用父类的方法变得更加简单和直接13。‌
总的来说，‌ES6的继承机制通过引入类和extends关键字，‌提供了更直观、‌易于理解的继承方式，‌同时解决了ES5继承中存在的一些问题。‌

### var、let、const 之间的区别?暂时性死区如何理解?

1. 全局污染
2. 块级作用域
3. TDZ暂时性死区（声明之前无法访问这个变量）
4. 重复声明

ES6中let 和 const 同样会被提升变量到代码块的顶部但是不会被赋予初始值（var 初始值 undefined）。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”（后面在讲这个），直到这个变量被声明为止。

在 ES6 之前，我们使用 var 声明变量，var 声明的变量会被提升到当前作用域的顶部。这意味着我们可以在声明之前使用变量，但这可能会导致意想不到的行为。

为了解决这个问题，ES6 引入了 let 和 const 来声明变量。与 var 不同，let 和 const 声明的变量不会被提升。  
在 let 或 const 声明语句之前访问这些变量会导致程序抛出 ReferenceError 错误。这个范围被称为暂时性死区。  

暂时性死区的**目的**是提高代码的**可读性**和**可预测性**，确保变量在使用之前已经声明并**初始化**。这有助于避免因变量提升导致的意外行为和潜在的错误。

### Class、extends 是什么，有什么作用?

继承 继承class 的函数以及 数据项

### 什么是 JS 闭包

是一个函数以及其捆绑的词法环境的引用的组合，闭包其实是可以从内部函数访问外部函数的作用域
闭包会随着函数的创建而被同时创建。

闭包 = 内层函数 + 引用的外层函数变量

### 说一下类的创建和继承，列举一下你所知道的继承方式

### 如何解决异步回调地狱

1. 使用 Promises
2. 使用 Async/Await

### 说一下图片的懒加载和预加载

懒加载（Lazy Loading）
懒加载是一种优化技术，主要用于在页面加载时延迟非立即可见元素（如图片和视频）的加载。其核心思想是在用户滚动到这些元素进入视口（可视区域）前不加载它们，从而减少初始页面加载时间和资源消耗。这在长页面或者包含大量图片的页面上特别有效。

工作原理：

图片元素的 src 属性在初始时并不包含实际的图片URL，而是设置为占位符（如透明像素或低分辨率预览图）。
当用户滚动页面时，JavaScript 监听滚动事件并检查哪些图片进入了视口。
对于进入视口的图片，将其 src 属性更新为实际的图片URL，从而触发图片的加载。
优点：

减少页面加载时间。
节省带宽，尤其是在移动设备上。
改善用户体验，尤其是对于低速网络连接的用户。

预加载（Preloading）
预加载是指在页面加载过程中，提前加载一些关键资源，确保当用户需要访问这些资源时，它们已经就绪，从而提供更快的响应速度和更好的用户体验。预加载通常用于关键路径资源，如关键CSS、JavaScript 文件，以及即将使用的图片。

工作原理：

<link rel="preload"> 标签可以在HTML头部使用，告诉浏览器优先加载指定资源。
浏览器会尽早开始下载这些资源，即使它们在文档流中较后才被引用。

优点：

加快关键资源的加载速度。
提升首屏渲染速度和页面交互速度。
减少用户的等待时间，增强页面的感知性能。
懒加载与预加载的区别
目标不同：懒加载是为了延迟非立即可见元素的加载，而预加载是为了提前加载关键资源。
触发条件不同：懒加载依赖于用户行为（如滚动），而预加载则是在页面加载时立即触发。
适用场景不同：懒加载适用于长页面中的非关键图片，预加载适用于关键路径上的资源。

### mouseover和mouseenter的区别

mouseover 和 mouseenter 都是鼠标事件，它们会在鼠标指针移动到一个元素上时触发。但是，这两个事件在处理方式上有显著的不同：

事件冒泡：

mouseover：这个事件会冒泡。这意味着当你将鼠标移到一个元素上时，不仅该元素会被触发 mouseover 事件，而且其所有祖先元素也会依次触发 mouseover 事件，直到文档根元素。
mouseenter：这个事件不会冒泡。当你将鼠标移到一个元素上时，只有该元素会触发 mouseenter 事件，而不会影响其父元素或祖先元素。
触发时机：

mouseover：当鼠标指针移动到元素或其任何子元素上时都会触发。
mouseenter：只在鼠标指针直接移动到该元素上时触发，如果鼠标指针从一个子元素移动到另一个子元素，只要没有离开过该元素，就不会再次触发 mouseenter。
由于 mouseenter 不会冒泡，因此在某些情况下，它可能提供更精确的控制，特别是在处理复杂的DOM结构时，避免了不必要的事件触发。然而，mouseover 的冒泡特性使得它在需要检测整个元素树的鼠标状态时更加有用。

### new 操作符做了哪些事情

创建新对象：

new 首先会创建一个全新的空对象。
设置原型链：

新创建的对象的原型 (**proto**) 会被设置为构造函数的 prototype 属性所指向的对象。这样就建立了原型链，新对象可以继承构造函数原型上的方法和属性。
绑定 this 并执行构造函数：

构造函数会被调用，此时 this 关键字被绑定到新创建的对象上。构造函数内部的代码将被执行，可以为新对象添加属性和方法。
返回新对象：

如果构造函数没有显式返回一个对象，则 new 操作符会自动返回新创建的对象。如果构造函数返回了一个对象，那么 new 操作符会返回这个对象，而不是新创建的那个。

### 改变函数内部 this 指针的指向函数(bind，apply，call 的区别)，内在分别是如何实现的?

1. call
功能：call 方法立即调用一个函数，并允许你传入参数列表。
语法：function.call(thisArg, arg1, arg2, ...argN)
内部实现：call 方法首先会检查传入的第一个参数 thisArg，然后将函数的 this 值设置为 thisArg（如果 thisArg 是 null 或 undefined，则默认为全局对象）。之后，它会按照传入的参数列表顺序将参数传递给函数并执行。
2. apply
功能：与 call 类似，apply 也立即调用一个函数，但它接受一个参数数组或类数组对象作为参数。
语法：function.apply(thisArg, [argsArray])
内部实现：apply 方法同样会检查第一个参数 thisArg，并将其设置为函数的 this 值。第二个参数是一个数组或类数组对象，其中的元素会被解构并作为单独的参数传递给函数。
3. bind
功能：bind 方法并不会立即调用函数，而是返回一个新的函数，这个新函数的 this 值已经被绑定到提供的值上。
语法：function.bind(thisArg, arg1, arg2, ...argN)
内部实现：bind 方法创建一个新的函数，当这个新函数被调用时，它的 this 值会被设置为 bind 方法调用时传入的第一个参数 thisArg。此外，bind 方法还可以预先传递一些参数给新函数。
内部实现概述
这些方法的内部实现通常涉及到 JavaScript 的特殊机制，如 Function.prototype.call 的底层机制。在引擎层面，它们利用了 JavaScript 的灵活性来修改函数调用上下文。例如，call 和 apply 通过直接修改函数的 this 值来调用函数，而 bind 则创建一个新的函数包装器，该包装器在调用时会调整 this 的指向。

### js 的各种位置，比如 clientHeight, scrollHeight, offsetHeight ,以及 scrollTop, offsetTop, 的区别?

1. clientHeight
描述：表示元素的可视高度，不包括边框（border）、滚动条和外边距（margin）。
用途：通常用于获取元素的可用显示区域的高度。
2. scrollHeight
描述：表示元素的总高度，包括因为溢出而不可见的部分。
用途：用于确定元素是否具有垂直滚动条，或计算元素的完整高度。
3. offsetHeight
描述：表示元素的高度，包括内容、内边距（padding）、边框（border），但不包括外边距（margin）。
用途：用于获取元素的实际占用空间的高度。
4. scrollTop
描述：表示元素垂直滚动条的滚动距离，即元素内容相对于容器顶部的位置。
用途：用于控制或查询元素的滚动位置。
5. offsetTop
描述：表示元素相对于最近的定位祖先元素（positioned ancestor）的偏移量，即元素顶部边缘到最近定位祖先元素顶部边缘的距离。
用途：用于计算元素在页面中的确切位置。
总结
clientHeight 和 scrollHeight 主要关注元素的尺寸，前者是可视部分，后者是全部。
offsetHeight 包括了边框和内边距，提供了元素实际占用的空间大小。
scrollTop 用于处理滚动，可以用来控制或查询元素的滚动状态。
offsetTop 用于定位，帮助我们理解元素在页面中的位置。

### 异步加载 JS 的方法

1. defer 异步加载，但要等到dom文档全部解析完才会被执行。只有IE能用，也可以将代码写到内部。
2. async 异步加载，加载完就执行，async只能加载外部脚本，不能把js写在script标签里。
3. 创建script，插入到DOM中，加载完毕后callback。可以解决不同浏览器的兼容问题。

### Ajax 解决浏览器缓存问题

1.添加时间戳：在请求的 URL 后添加时间戳参数，使每次请求的 URL 不同，强制浏览器重新获取数据。
2.设置缓存控制：在响应头中设置缓存控制参数，如 Cache-Control、Expires，指示浏览器缓存数据的有效期限。
3.使用 POST 请求：POST 请求不会被浏览器缓存，每次请求都会重新获取数据。
4.使用 HTTP 动词：使用不同的 HTTP 动词，如 PUT、DELETE，可以使浏览器将其视为新的请求，重新获取数据。
5.使用动态 URL：使用动态 URL，如添加随机数参数，使每次请求的 URL 不同，强制浏览器重新获取数据。

### 节流和防抖

防抖和节流都是用于控制事件触发频率的前端性能优化技术，它们的主要区别在于触发事件的时机和执行回调函数的次数。

防抖（Debounce）是指在事件触发后，延迟一定时间再执行回调函数。如果在延迟时间内再次触发了该事件，则重新计时。简单来说，防抖就是将多次高频率触发的事件合并为一次执行。防抖的应用场景包括输入框搜索联想和窗口大小调整等。

节流（Throttle）是指在一定时间内只能触发一次事件。如果在指定的时间内再次触发了该事件，则忽略该次触发。简单来说，节流就是限制事件的触发频率。节流的应用场景包括页面滚动事件和鼠标移动事件等。
防抖和节流都可以通过使用setTimeout实现，目的都是降低回调执行频率，节省计算资源。防抖关注一定时间连续触发的事件，只在最后执行一次，而节流一段时间内只执行一次。

### eval 是做什么的

eval是Javascript内置函数，用于计算字符串表达式的值。例如eval("2+3") 返回的是5。eval(string)函数可计算某个字符串，并执行其中的JavaScript代码。 参数：string；描述：要计算的字符串，其中含有要计算的JavaScript表达式或要执行的语句。 jscript中的用法很相似。

### 对象深拷贝的简单实现

使用 JSON.parse 和 JSON.stringify这种方法适用于不包含函数、undefined 和循环引用的对象。

```javascript
const originalObject = { a: 1, b: { c: 2 } };
const deepCopiedObject = JSON.parse(JSON.stringify(originalObject));

console.log(deepCopiedObject); // { a: 1, b: { c: 2 } }

```

使用递归函数，使用 structuredClone 方法

### 实现 jS 中所有对象的深度克隆（包装对象，Date 对象，正则对象）

```javascript

function deepClone(obj, hash = new WeakMap()) {
  // 基本类型直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 处理正则表达式对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 处理包装对象
  if (obj instanceof Boolean) {
    return new Boolean(obj);
  }
  if (obj instanceof Number) {
    return new Number(obj);
  }
  if (obj instanceof String) {
    return new String(obj);
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy);
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, hash);
    });
    return arrCopy;
  }

  // 处理普通对象
  const objCopy = {};
  hash.set(obj, objCopy);
  Object.keys(obj).forEach(key => {
    objCopy[key] = deepClone(obj[key], hash);
  });
  return objCopy;
}

// 测试
const originalObject = {
  a: 1,
  b: new Date(),
  c: /abc/g,
  d: new Boolean(true),
  e: new Number(123),
  f: new String('hello'),
  g: [1, 2, { h: 3 }],
  i: { j: { k: 4 } },
  l: null
};

const deepCopiedObject = deepClone(originalObject);
console.log(deepCopiedObject);

```

1. 基本类型：如果对象是 null 或者不是对象，直接返回该值。  
2. 循环引用：使用 WeakMap 跟踪已经克隆的对象，避免循环引用导致的无限递归。
3. Date 对象：创建一个新的 Date 对象。
4. 正则表达式对象：创建一个新的 RegExp 对象。
5. 包装对象：创建新的 Boolean、Number 和 String 对象。
6. 数组：创建一个新的数组，并递归克隆每个元素。
7. 普通对象：创建一个新的对象，并递归克隆每个属性。

### 一个 once 函数，传入函数参数只执行一次

你可以创建一个 once 函数，它接受一个函数作为参数，并返回一个新的函数，这个新函数只会执行一次。可以使用闭包来实现这一功能，确保函数只能被调用一次。

```javascript
function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

// 测试
const logOnce = once((msg) => {
  console.log(msg);
  return msg;
});

logOnce("Hello, World!"); // 输出 "Hello, World!"
logOnce("This will not be logged"); // 没有输出

```

### 实现将原生的 ajax 封装成 promise

要将原生的 XMLHttpRequest (即 ajax) 封装成一个返回 Promise 的函数，可以这样实现：

```javascript

function ajaxPromise(options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(options.method || 'GET', options.url);

    // 设置请求头
    if (options.headers) {
      for (let key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      }
    }

    // 处理响应
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Request failed with status code ${xhr.status}`));
        }
      }
    };

    // 处理请求错误
    xhr.onerror = () => reject(new Error('Network error'));

    // 发送请求
    xhr.send(options.body || null);
  });
}

// 使用示例
ajaxPromise({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts/1'
})
  .then(response => {
    console.log('Success:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });


```

ajaxPromise 函数：

接受一个 options 对象作为参数，包含 method, url, headers, 和 body 等属性。
返回一个新的 Promise 对象。
创建 XMLHttpRequest 对象：

创建一个新的 XMLHttpRequest 对象 xhr。
设置请求类型和 URL：

使用 xhr.open 设置请求类型（默认是 GET）和请求的 URL。
设置请求头：

如果 options.headers 存在，遍历 headers 对象并使用 xhr.setRequestHeader 设置每个请求头。
处理响应：

设置 xhr.onreadystatechange 回调函数，当 xhr.readyState 为 XMLHttpRequest.DONE 时检查响应状态码。
如果状态码在 200 到 299 之间，表示请求成功，调用 resolve 并传入响应数据。
如果状态码不在这个范围内，表示请求失败，调用 reject 并传入错误信息。
处理请求错误：

设置 xhr.onerror 回调函数，在网络错误时调用 reject 并传入错误信息。
发送请求：

使用 xhr.send 发送请求，传入 options.body（如果存在）作为请求体。
这样，你就可以通过 ajaxPromise 函数使用 Promise 语法进行 AJAX 请求，并处理异步操作的成功或失败。

### jS 监听对象属性的改变

在 JavaScript 中，可以使用 Object.defineProperty、Proxy

1. Object.defineProperty 可以定义对象属性的 getter 和 setter，从而实现对属性变化的监听。

```javascript
function observe(obj, key, callback) {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newValue) {
      value = newValue;
      callback(newValue);
    },
    configurable: true,
    enumerable: true,
  });
}

// 示例
let person = { name: "John" };

observe(person, "name", (newValue) => {
  console.log(`Name changed to: ${newValue}`);
});

person.name = "Doe"; // 输出: Name changed to: Doe

```

2. Proxy 是 ES6 引入的用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）的功能，适用于监听对象属性的变化。

```javascript
function createObservableObject(obj, callback) {
  return new Proxy(obj, {
    set(target, key, value) {
      target[key] = value;
      callback(key, value);
      return true;
    },
    get(target, key) {
      return target[key];
    },
  });
}

// 示例
let person = { name: "John", age: 30 };

let observablePerson = createObservableObject(person, (key, value) => {
  console.log(`Property ${key} changed to ${value}`);
});

observablePerson.name = "Doe"; // 输出: Property name changed to Doe
observablePerson.age = 31;     // 输出: Property age changed to 31

```

### 如何实现一个私有变量，用 get 可以访问，不能直接访问

在 JavaScript 中，可以使用闭包（closure）和 Object.defineProperty 或者 Proxy 来实现私有变量，使得它们只能通过 get 方法访问，而不能直接访问

```javascript
function createObject() {
  let _privateVariable = "This is a private variable";

  let obj = {};

  Object.defineProperty(obj, 'getPrivateVariable', {
    get() {
      return _privateVariable;
    },
    enumerable: false,
    configurable: false
  });

  return obj;
}

let myObject = createObject();
console.log(myObject.getPrivateVariable); // 输出: This is a private variable
console.log(myObject._privateVariable);   // 输出: undefined

```

2. Proxy 可以更灵活地控制对象的行为，包括拦截属性访问。

```javascript
function createObject() {
  let _privateVariable = "This is a private variable";

  return new Proxy({}, {
    get(target, prop) {
      if (prop === 'getPrivateVariable') {
        return _privateVariable;
      } else {
        return undefined;
      }
    }
  });
}

let myObject = createObject();
console.log(myObject.getPrivateVariable); // 输出: This is a private variable
console.log(myObject._privateVariable);   // 输出: undefined

```

3. 使用 ES6 类语法实现私有变量,结合访问器（getter）和私有变量

```javascript
class Person {
  #name; // 私有变量（使用 # 符号）

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  get name() {
    return this.#name;
  }
}

// 示例
const person = new Person("John");

console.log(person.getName()); // 输出: John
console.log(person.#name); // 语法错误，无法直接访问私有变量

```

### 怎么控制一次加载一张图片，加载完后再加载下一张

可以使用 JavaScript 控制图片的按顺序加载，即在一张图片加载完毕后再加载下一张图片。实现这个功能的关键是利用 Image 对象的 onload 事件来检测图片加载完成，然后开始加载下一张图片。

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sequential Image Loading</title>
</head>
<body>
    <div id="image-container"></div>

    <script>
        // 图片 URL 列表
        const imageUrls = [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg',
            // 更多图片 URL
        ];

        // 当前加载的图片索引
        let currentImageIndex = 0;

        // 获取图片容器
        const imageContainer = document.getElementById('image-container');

        // 加载下一张图片
        function loadNextImage() {
            if (currentImageIndex < imageUrls.length) {
                const img = new Image();
                img.src = imageUrls[currentImageIndex];
                img.onload = function() {
                    imageContainer.appendChild(img);
                    currentImageIndex++;
                    loadNextImage();
                };
                img.onerror = function() {
                    console.error('Image failed to load:', img.src);
                    currentImageIndex++;
                    loadNextImage();
                };
            }
        }

        // 开始加载图片
        loadNextImage();
    </script>
</body>
</html>
<!-- 
代码解释
图片 URL 列表：
定义一个包含所有图片 URL 的数组 imageUrls。

当前加载的图片索引：
使用 currentImageIndex 来跟踪当前加载的图片索引。

图片容器：
获取用于显示图片的容器元素 imageContainer。

加载下一张图片的函数 loadNextImage：

检查是否有更多图片需要加载 (currentImageIndex < imageUrls.length)。
创建一个新的 Image 对象，并将其 src 属性设置为当前图片的 URL。
绑定 onload 事件，当图片加载完成时，将图片添加到容器中，增加索引，然后递归调用 loadNextImage 加载下一张图片。
绑定 onerror 事件，以处理加载失败的情况，增加索引并继续加载下一张图片。
开始加载图片：
调用 loadNextImage 函数以开始按顺序加载图片。

注意事项
错误处理：代码中处理了图片加载错误的情况，确保即使某张图片加载失败，也能继续加载下一张图片。
异步加载：Image 对象的 onload 事件是异步的，可以确保一张图片加载完成后才开始加载下一张图片。 -->

```

### 如何实现 sleep 的效果(es5 或者 es6)

在 JavaScript 中，通常没有像其他编程语言sleep 函数。但可以通过使用 setTimeout 和 Promise 来实现类似的功能。

```javascript

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Waiting for 2 seconds...');
    await sleep(2000); // 等待 2 秒
    console.log('2 seconds passed!');
}

demo();

```

在 ES5 中，没有 async/await，但可以使用回调函数来实现类似的效果：

```javascript
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(2000).then(function() {
    console.log('2 seconds passed!');
});

```

### Function._proto_(getPrototypeOf)是什么?

在 JavaScript 中，Function.prototype 和 Object.getPrototypeOf 是两个不同的概念，但它们都与对象的原型链和继承有关。
**Function.prototype** 是所有函数对象的原型。所有的函数（包括构造函数）都继承自 Function.prototype。这是因为在 JavaScript 中，函数也是对象，每个函数都是 Function 构造函数的实例。

```javascript
function exampleFunction() {}

// 访问函数的原型
console.log(exampleFunction.prototype); // 输出：exampleFunction {}

console.log(Function.prototype); // 输出：[Function: Empty] 这是函数对象的原型

```

**Object.getPrototypeOf** 是一个方法，用于获取指定对象的原型（即内部 [[Prototype]] 属性的值）。这个方法可以用于获取任何对象的原型，包括函数对象。

```javascript
function exampleFunction() {}

const prototypeOfFunction = Object.getPrototypeOf(exampleFunction);
console.log(prototypeOfFunction); // 输出：[Function: Empty]

const exampleObject = {};
const prototypeOfObject = Object.getPrototypeOf(exampleObject);
console.log(prototypeOfObject); // 输出：{}

```

```javascript
function exampleFunction() {}

console.log(Function.prototype); // 输出：[Function: Empty]
console.log(Object.getPrototypeOf(exampleFunction)); // 输出：[Function: Empty]

// 验证 exampleFunction 的原型是否是 Function.prototype
console.log(Object.getPrototypeOf(exampleFunction) === Function.prototype); // 输出：true

```

Function.prototype 是所有函数对象的原型，所有函数对象都继承自 Function.prototype。
Object.getPrototypeOf 是用于获取对象的原型的方法，可以用于获取任何对象（包括函数对象）的原型。
通过 Object.getPrototypeOf，可以验证一个对象的原型是否是预期的原型，例如验证一个函数对象的原型是否是 Function.prototype。

### 箭头函数中 this 指向

在 JavaScript 中，箭头函数 (=>) 和传统的函数表达式或函数声明有一个显著的区别：箭头函数不绑定自己的 this 值。相反，箭头函数会捕获其定义时所在的上下文的 this 值，这个特性使得箭头函数在处理回调函数时特别有用，避免了手动绑定 this。
箭头函数中 this 的指向
箭头函数没有自己的 this，它会捕获函数定义时的 this，并且在整个函数体内都不会改变。

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age); // `this` 指向 `Person` 实例
  }, 1000);
}

const p = new Person();
```

```javascript

```

### 数组常用方法有哪些

map filter reduce find findIndex forEach

### 数组去重有哪些方法?

Set 和 filter 和 reduce

### 如何去除字符串首尾空格

第一个trim(),
第二个replace(/^\s+|\s+$/g, '');

### 说说你所知道的 js 语言特性?

### 如何判断一个数组?

1. Array.isArray()
2. instanceof 运算符
3. Object.prototype.toString.call()

### JS 的全排列

```javascript
function permute(nums) {
    let result = [];

    // 辅助函数，用于生成排列
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push(current.slice()); // 复制当前排列并添加到结果中
        } else {
            for (let i = 0; i < remaining.length; i++) {
                current.push(remaining[i]); // 选择元素
                let nextRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1)); // 剩余元素
                backtrack(current, nextRemaining); // 递归生成剩余元素的排列
                current.pop(); // 撤销选择
            }
        }
    }

    backtrack([], nums); // 开始递归

    return result;
}

// 测试示例
let nums = [1, 2, 3];
let permutations = permute(nums);
console.log(permutations);

```

### 谈谈你所理解的跨域，为什么会有这个问题?如何解决?

跨域（Cross-Origin）问题指的是当一个网页试图请求不同域名的资源时，浏览器由于安全原因而阻止这些请求。这种安全机制称为同源策略（Same-Origin Policy）

#### 同源策略

同源策略是一种浏览器的安全机制，用于防止一个网站的恶意脚本对其他网站的数据进行访问。它要求以下三者必须一致：

协议（如 HTTP 与 HTTPS）
域名（如 example.com 与 <www.example.com）>
端口（如 80 与 443）

#### 跨域的根本原因

是为了防止 CSRF（跨站请求伪造）和 XSS（跨站脚本攻击）等安全风险。通过限制跨域请求，浏览器能够保护用户数据不被恶意网站窃取或篡改

#### 解决方案

1. JSONP是一种绕过同源策略的方法，只能用于 GET 请求。通过动态添加`<script>` 标签并设置回调函数，服务器返回执行该回调函数的 JavaScript 代码。

```javascript
function handleResponse(data) {
    console.log(data);
}

let script = document.createElement('script');
script.src = 'https://example.com/data?callback=handleResponse';
document.head.appendChild(script);

```

2. CORS（跨域资源共享，Cross-Origin Resource Sharing）

* 服务器端设置：服务器通过设置 Access-Control-Allow-Origin 头来允许特定的跨域请求。

```javascript
function handleResponse(data) {
    console.log(data);
}

let script = document.createElement('script');
script.src = 'https://example.com/data?callback=handleResponse';
document.head.appendChild(script);

```

* 带凭证的请求：如果需要携带凭证（如 cookies），需要设置额外的头

```http
Access-Control-Allow-Credentials: true

```

* nginx 配置：通过设置 proxy_set_header 和 add_header 来实现跨域。

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

        # 处理预检请求
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
            return 204;
        }

        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}


```

* nodejs 代理：通过 express 的中间件实现代理。

```javascript
const express = require('express');
const request = require('request');
const app = express();

app.use('/proxy', (req, res) => {
    let url = req.query.url;
    req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => console.log('Server running on port 3000'));

```

### null == undefined 输出什么? null === undefined 呢?

使用宽松（非严格）相等运算符 == 时，JavaScript 会进行类型转换，然后再比较。这种情况下，null 和 undefined 被认为是相等的 true  
使用严格相等运算符 === 时，JavaScript 不会进行类型转换，而是直接比较两个值的类型和内容。如果类型或内容不同，则返回 false：
null 的类型是 object（这是一个被认为是 JavaScript 语言设计的一个错误）。null 表示“空值”或“无值对象”。通常用于显式地赋值给变量，表示该变量没有任何对象值。undefined 的类型是 undefined。 undefined 表示“未定义”。当一个变量被声明但未初始化时，默认值是 undefined。

### 什么是按需加载

用于在应用程序运行时只加载所需的资源，而不是在初始加载时加载所有资源。这样可以减少初始加载时间，提高应用的性能和用户体验。，按需加载主要应用于 JavaScript 模块、图片和其他资源的加载

```javascript
// 使用 ES6 动态 import
// 按需加载某个模块
function loadModule() {
    import('./module.js')
        .then(module => {
            module.default();
        })
        .catch(err => {
            console.error('Error loading module:', err);
        });
}

// 调用时才加载模块
loadModule();

```

图片的按需加载

```javascript
<img data-src="image.jpg" class="lazyload" alt="Lazy loaded image">

<script>
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazyload");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for older browsers
        let lazyLoad = function() {
            lazyImages.forEach(function(lazyImage) {
                if (lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazyload");
                }
            });

            if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});
</script>

```

#### 按需加载的优势

减少初始加载时间：只加载当前视图所需的资源，加快页面的初始加载速度。
降低带宽消耗：避免加载未使用的资源，减少带宽消耗。
提高用户体验：更快的页面加载速度和响应速度，提升用户体验。

#### 按需加载的注意事项

兼容性：确保使用的按需加载技术兼容所有目标浏览器。
错误处理：处理资源加载失败的情况，提供相应的用户反馈。
SEO 影响：对于需要 SEO 的页面，确保按需加载的内容能够被搜索引擎抓取。

### 简单介绍-下 symbol

### 介绍-下 promise，及其底层如何实现

 大师课

### JS 原型链，原型链的顶端是什么?0bject 的原型是什么?Object的原型的原型是什么?

大师课

### promise+Generator+Async的使用

### JS 中 string 的 startwith 和 indexof 两种方法的区别

在 JavaScript 中，String.prototype.startsWith 和 String.prototype.indexOf 是用于字符串搜索的两种方法，它们的功能和使用方式有所不同

1. startsWith 方法用于判断一个字符串是否以指定的子字符串开始。
2. indexOf 方法用于在一个字符串中查找指定的子字符串，并返回子字符串第一次出现的位置。

### 字符串转数字的方法

1. 使用 Number() 函数
2. parseInt()
3. 加号
4. 减号

### 平时是怎么调试 JS 的

console.log()
debug

### 怎么获得对象上的属性

Object.keys,返回一个包含对象所有可枚举属性名的数组。这对遍历对象的属性名非常有用。
Object.values,
Object.entries() 返回一个包含对象所有属性的键值对数组，每个键值对是一个数组，包含属性名和属性值。
Object.getOwnPropertyNames() 返回一个数组，包含对象自身的所有属性名（包括非可枚举属性），不包括继承的属性。

### async 和 await 具体该怎么用?

### 知道哪些 ES6，ES7 的语法

### promise 和 await/async 的关系

### JS 加载过程阻塞，解决方法

1. async 和 defer 是两种可以应用于 `<script>` 标签的属性，用于控制 JavaScript 的加载和执行方式
2. 将脚本放在文档底部
3. 使用动态脚本加载
4. 使用模块化加载 (ES6 Modules)
5. 懒加载（Lazy Loading）
6. 服务端渲染 (SSR) 和预渲染

### JS 对象类型，基本对象类型以及引用对象类型的区别轮播的实现原理?

* String：表示字符串。
* Number：表示数字，包括整数和浮点数。
* Boolean：表示布尔值，true 或 false。
* undefined：表示未定义的值。
* null：表示空值，通常用于表示一个空对象引用。
* Symbol：表示唯一且不可变的值（ES6 引入）。
* BigInt：表示任意精度的大整数（ES11 引入）。
区别：

* Object：普通对象，可以包含键值对。
* Array：数组对象，可以保存有序的值列表。
* Function：函数对象，是可以调用的代码块。
* Date：表示日期和时间。
* RegExp：表示正则表达式。

#### 基本类型与引用类型的主要区别

存储方式：基本类型的值存储在栈中，引用类型的值存储在堆中，变量保存的只是引用地址。
赋值方式：基本类型赋值时会复制值，引用类型赋值时会复制引用。
比较方式：基本类型比较的是值本身，而引用类型比较的是引用地址。

### 假如一个页面上有两个轮播，你会怎么实现?

### 解释-下 JS 的事件循环

大师课

### Localstorage、sessionStorage、cookie 的区别

1. 存储时长
localStorage：持久存储，数据不会随浏览器关闭而删除，除非手动删除。
sessionStorage：会话级别存储，数据仅在当前页面会话中有效。一旦关闭页面或浏览器，数据就会被清除。
cookie：存储时长由开发者设置，取决于Expires或Max-Age属性。可以是临时的（浏览器关闭后删除）或持久的。
2. 数据存储大小
localStorage 和 sessionStorage：通常能存储大约5-10MB的数据，不同浏览器的限制有所不同。
cookie：每个cookie的大小限制为约4KB，且浏览器对同一域名下的cookie数量有一定限制。
3. 数据的传输
localStorage 和 sessionStorage：数据仅在客户端存储，不会在每次HTTP请求时自动发送到服务器。
cookie：在同一域名下，每次HTTP请求时都会自动将相关cookie发送给服务器。
4. 访问方式
localStorage 和 sessionStorage：通过JavaScript进行访问和操作，API简单易用。
cookie：既可以通过JavaScript访问，也可以通过HTTP头设置和读取，但操作起来稍显复杂。
5. 安全性
localStorage 和 sessionStorage：相对安全，只能通过同源的脚本进行访问，但依然容易受到XSS（跨站脚本攻击）的威胁。
cookie：可以设置HttpOnly属性，使其只能通过HTTP请求访问，从而减少XSS的风险。此外，还可以设置Secure属性，仅允许在HTTPS连接下传输。
6. 典型使用场景
localStorage：适用于需要长期保存的数据，如用户设置、主题选择等。
sessionStorage：适用于仅在单次页面会话中需要保存的数据，如表单输入信息、临时会话数据等。
cookie：适用于需要在客户端和服务器之间传递的小数据，如用户认证信息、追踪用户会话状态等。

### 解释下 HTML5 Drag API

### 解释-下 webworker

Web Worker 是 HTML5 引入的一项技术，允许在浏览器中运行 JavaScript 脚本的后台线程。它使得在不阻塞主线程的情况下执行繁重的计算任务或处理并行任务成为可能，从而保持网页的响应性和流畅性。

Web Worker 的主要特点：
多线程环境：Web Worker 提供了一个与主线程独立的运行环境。主线程（UI线程）负责处理用户界面和事件，Web Worker 线程可以处理计算密集型任务。这种分离避免了主线程因长时间运行的任务而导致页面卡顿或无响应。

独立运行：Worker 线程在独立的全局上下文中运行。它没有直接访问 DOM 的能力，也不能调用主线程的一些特定 API，如 window、document 等。这确保了 Worker 的执行不会直接影响到用户界面。

数据通信：主线程和 Worker 之间通过消息传递进行通信。它们使用 postMessage() 方法发送消息，通过 onmessage 事件监听接收消息。传递的数据通常是字符串或通过结构化克隆算法（Structured Clone Algorithm）复制的对象。

文件访问：Worker 可以通过 importScripts() 方法导入其他 JavaScript 文件，以执行额外的任务。

Web Worker 的优缺点
优点：

提高页面的响应性，避免长时间运行的脚本阻塞主线程。
允许执行复杂的计算任务而不影响用户体验。
缺点：

不能直接操作 DOM。
数据通信是异步的，可能增加开发复杂性。
使用 Web Worker 会增加内存消耗，因为每个 Worker 线程都有自己的独立执行环境。
典型使用场景
处理大规模数据（如加密、图像处理、数据分析等）。
后台持续任务（如轮询服务器、处理定时任务等）。
并行执行多个独立的计算任务，以提升整体性能。
Web Worker 是在现代 Web 应用中提升性能和用户体验的重要工具，特别适用于需要并发处理的场景

### {} 和[]的 valueOf 和 toString 的结果是什么?

{}（对象）的 valueOf 和 toString

```javascript
let obj = {};
console.log(obj.valueOf()); // 输出: {}
let obj = {};
console.log(obj.toString()); // 输出: "[object Object]"

```

[]（数组）的 valueOf 和 toString

```javascript
let arr = [];
console.log(arr.valueOf()); // 输出: []

let arr = [1, 2, 3];
console.log(arr.toString()); // 输出: "1,2,3"


```

### 三种事件模型是什么?

原始事件模型(事件处理函数直接绑定到 HTML 元素的属性上，例如：<button onclick="alert('clicked')">Click me</button>。)、IE事件模型(过 window.event 访) 和 DOM事件模型
DOM事件模型由 W3C 定义，并在现代浏览器中广泛支持，包括 Chrome、Firefox、Safari 等。它是当前推荐的事件处理方式。

原始事件模型 是最早的事件模型，已很少使用。
IE事件模型 是微软的独有实现，支持事件冒泡，不支持事件捕获。
DOM事件模型 是目前最常用的事件模型，支持事件捕获和冒泡，并且是跨浏览器的标准实现。

### 介绍-下 V8 隐藏类

1. 隐藏类的作用
隐藏类的主要作用是将对象属性的访问优化为一个更高效的过程。V8 通过创建隐藏类来在对象的属性结构发生变化时保持一致性，从而使得对象属性的读写操作更快。

2. 隐藏类的工作机制
对象创建：当创建一个新对象时，V8 会为该对象分配一个隐藏类。这个隐藏类记录了对象的属性布局，包括属性名称和类型等信息。

属性添加：当向对象添加属性时，V8 会检查当前对象的隐藏类。如果当前隐藏类可以通过属性的增加或改变转换成另一个隐藏类，那么 V8 会为这个新的属性布局创建一个新的隐藏类。这样，所有具有相同属性布局的对象都可以共享相同的隐藏类。

隐藏类缓存：通过隐藏类缓存机制，V8 能够避免每次访问对象属性时都进行复杂的查找操作，而是直接利用隐藏类提供的高效路径。

隐藏类的优化：如果 V8 发现对象的属性布局不会发生变化，它会将多个具有相同属性布局的对象映射到同一个隐藏类，从而进一步提升性能。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person('Alice', 30);
const p2 = new Person('Bob', 25);
// V8 会为 Person 构造函数创建一个隐藏类来表示对象的属性布局。如果随后我们对 Person 进行修改，例如添加新的属性
//  会创建一个新的隐藏类来反映这种变化。对于属性布局没有变化的对象，V8 会重用相同的隐藏类。

p1.gender = 'female';

```

3. 隐藏类的优势
提高属性访问速度：通过缓存和优化属性访问路径，隐藏类显著提高了对象属性访问的速度。
减少内存消耗：隐藏类允许多个对象共享相同的属性布局，从而减少了内存开销。
4. 隐藏类的局限性
动态特性影响：由于隐藏类是基于对象的动态特性生成的，频繁的属性添加、删除和修改可能导致隐藏类的频繁变化，从而影响性能。
调试困难：隐藏类是 V8 的内部实现细节，开发者通常不需要直接与之交互，但它的变化可能会影响 JavaScript 代码的性能。

### AMD 和 CMD 规范的区别?说-下 CommonJS、AMD 和 CMD?

CommonJS、AMD 和 CMD 是 JavaScript 模块化的三种**主要规范或设计模式**，它们用于解决在不同环境中加载和管理模块的问题

#### CommonJS

背景：
CommonJS 是一种模块化规范，最初由 CommonJS 社区提出。它主要用于服务器端的 JavaScript 环境，如 Node.js 和 io.js。  
**特点**  

**同步加载**：CommonJS 模块是同步加载的，这适合于服务器端的环境，因为文件通常在本地系统上，加载速度较快。

**模块导出和导入**：使用 module.exports 或 exports 对象导出模块。使用 require 函数导入模块。

```javascript
// myModule.js
module.exports = {
    greet: function(name) {
        return `Hello, ${name}!`;
    }
};

```

#### AMD

AMD 是一种模块化规范，主要用于浏览器环境，尤其是前端开发。它旨在解决异步加载模块的问题。

**特点**

**异步加载**：AMD 支持异步加载模块，这对于浏览器环境中的资源管理非常有用，因为浏览器中的文件加载可能会比较慢。

**模块定义和依赖**：使用 define 函数定义模块及其依赖。使用 require 函数异步加载模块。

```javascript
// myModule.js
define(function() {
    return {
        greet: function(name) {
            return `Hello, ${name}!`;
        }
    };
});

// main.js
require(['myModule'], function(myModule) {
    console.log(myModule.greet('Alice')); // 输出: Hello, Alice!
});

```

#### CMD

CMD 是一种模块化规范，主要由阿里巴巴提出，并在其前端框架 Sea.js 中使用。CMD 规范是对 AMD 的一种改进，旨在更好地适应前端开发的需要

**特点**

**异步加载**：CMD 支持异步加载模块，但与 AMD 有所不同，它允许在模块中动态引入依赖。
**模块定义和依赖**：使用 define 函数定义模块，模块可以在内部引入依赖。CMD 模块的依赖可以在模块执行时动态加载。

```javascript
// myModule.js
define(function(require, exports, module) {
    const dependency = require('./dependency');
    module.exports = {
        greet: function(name) {
            return `Hello, ${name}!`;
        }
    };
});
// main.js
require(['myModule'], function(myModule) {
    console.log(myModule.greet('Alice')); // 输出: Hello, Alice!
});

```

主要区别
模块加载方式：

CommonJS：同步加载，适合服务器端。
AMD：异步加载，适合浏览器环境。
CMD：也支持异步加载，但允许模块内部动态加载依赖。
依赖管理：

CommonJS：模块在加载时同步获取其依赖。
AMD：在定义模块时声明依赖，支持异步加载。
CMD：模块可以在执行时动态加载依赖，支持异步加载。
使用场景：

CommonJS：主要用于 Node.js 等服务器端环境。
AMD：主要用于前端浏览器环境，如 RequireJS。
CMD：主要用于前端浏览器环境，如 Sea.js。
模块定义：

CommonJS：通过 module.exports 或 exports 对象导出。
AMD：通过 define 函数声明模块及其依赖。
CMD：通过 define 函数声明模块，并允许在模块内部引入依赖。
总结
CommonJS 适用于服务器端，提供同步加载。
AMD 适用于浏览器端，支持异步加载和声明式依赖。
CMD 也是针对浏览器的异步加载方案，但提供了更灵活的依赖管理方式。

### ES

ES 模块（ESM，ECMAScript Modules）是 ECMAScript 6（ES6）引入的标准模块化方案，用于在 JavaScript 中定义和使用模块。ES 模块是现代 JavaScript 的模块化标准，它使得 JavaScript 代码的组织和管理变得更加规范和高效。下面是关于 ES 模块的一些关键点：

#### 基本语法

##### 导出

```javascript
// 命名导出：允许从一个模块中导出多个成员，每个成员可以有名字。
export const PI = 3.14;
export function add(x, y) {
  return x + y;
}
// 默认导出：一个模块只能有一个默认导出。可以导出一个值、对象、函数或类。
export default function greet(name) {
  return `Hello, ${name}!`;
}

```

##### 导入

```javascript
// 导入命名导出：使用 import 语句从模块中导入指定的成员。
import { PI, add } from './math.js';
console.log(PI); // 输出: 3.14
console.log(add(2, 3)); // 输出: 5

// 导入默认导出：使用 import 语句从模块中导入默认导出的成员。
import greet from './utils.js';
console.log(greet('Alice')); // 输出: Hello, Alice!

// 导入所有成员：可以使用 * as 从模块中导入所有的命名导出。
import * as math from './math.js';
console.log(math.PI); // 输出: 3.14
console.log(math.add(2, 3)); // 输出: 5


```

#### 模块的特性

静态分析：ES 模块的导入和导出是静态的，意味着可以在编译时分析模块的依赖关系。这使得工具和优化器可以更好地进行代码分析和优化。

异步加载：ES 模块可以被动态加载，支持异步加载。使用 import() 语法可以在运行时异步加载模块

模块作用域：ES 模块有自己的作用域，模块内定义的变量和函数不会污染全局作用域。

严格模式：ES 模块默认在严格模式下执行，这意味着某些不安全的特性和语法将被禁用。

与 CommonJS：

CommonJS：模块在运行时动态加载，使用同步方式。主要用于服务器端（Node.js）。
ES 模块：模块在编译时静态加载，支持异步加载。主要用于浏览器和现代 JavaScript 环境。
与 AMD：

AMD：主要用于浏览器环境，支持异步加载和依赖声明。
ES 模块：是 ECMAScript 标准的一部分，支持静态分析和异步加载，广泛用于浏览器和服务器端。

### 谈谈 JS 的运行机制

#### 执行上下文（Execution Context）

定义：执行上下文是 JavaScript 执行代码的环境。每当 JavaScript 代码运行时，都会创建一个新的执行上下文。
组成：

变量环境（Variable Environment）：用于存储变量和函数声明。

词法环境（Lexical Environment）：用于存储闭包和词法作用域的变量。

内存环境（Memory Environment）：用于管理当前上下文的内存。  

类型：
全局执行上下文：脚本运行的初始上下文。整个代码在全局上下文中执行，创建全局对象（如 window）和全局作用域。

函数执行上下文：每当调用一个函数时，会创建一个新的执行上下文，包含函数内部的局部变量和参数。
Eval 执行上下文：由 eval() 函数创建的上下文。

#### 执行栈（Execution Stack）

定义：执行栈（也称为调用栈）是一个栈结构，用于管理执行上下文的调用。  

工作原理：

当一个新的执行上下文被创建时，它会被推入执行栈的顶部。

当前执行上下文的代码执行完成后，会从栈中弹出，控制权转移到栈顶的下一个上下文。

#### 事件循环（Event Loop）

定义：事件循环是 JavaScript 的异步编程模型的核心部分。它管理任务队列和调用栈，确保异步任务能够被正确处理。

工作原理：

JavaScript 引擎执行栈中的同步代码。
异步任务（如定时器、事件处理程序等）会被推入任务队列（或称为消息队列）。
事件循环不断检查执行栈是否为空，如果为空，它会从任务队列中取出待处理的任务并推入执行栈。

#### 任务队列（Task Queue）

定义：任务队列是存储异步任务的队列，包括宏任务队列和微任务队列。

宏任务：包括 setTimeout、setInterval、I/O 操作等。

微任务：包括 Promise 的 then、catch、finally 回调和 MutationObserver 等。

宏任务队列：在每个事件循环的阶段末尾处理。
微任务队列：在执行栈清空后、宏任务之前处理。

#### JavaScript 的内存管理

垃圾回收：JavaScript 使用垃圾回收机制自动管理内存。它会定期检查不再使用的对象并释放其占用的内存。
引用计数：当对象的引用计数为零时，该对象会被垃圾回收。
标记清除：标记所有可达对象，然后清除不可达的对象。
内存泄漏：如果程序中的对象不再使用但仍被引用，可能导致内存泄漏。常见的内存泄漏包括全局变量、闭包、事件监听器等

#### 作用域和闭包

作用域（Scope）：作用域是变量和函数的可见范围。JavaScript 有全局作用域和函数作用域（在 ES6 中也引入了块级作用域）。

闭包（Closure）：闭包是一个函数，它可以访问其外部函数的变量，即使外部函数已经返回。闭包允许函数访问其创建时的作用域。

## VUE

### 说说你对 Vue 的理解，有何优缺点?

Vue.js 是一个流行的 JavaScript 框架，用于构建用户界面和单页应用程序（SPA）。它由尤雨溪（Evan You）创建，旨在提供一个渐进式的、灵活的前端框架。

Vue.js 的核心特点
渐进式框架：

Vue 是渐进式的，意味着你可以逐步将它引入到现有的项目中。你可以从简单的库开始，逐步扩展到一个完整的框架，具体取决于你的需求。
响应式数据绑定：

Vue 提供了响应式的数据绑定功能，当数据发生变化时，视图会自动更新。这是通过 Vue 的观察者模式和依赖收集机制实现的。
组件化：

Vue 的核心概念是组件化。组件是 Vue 应用的基本构建块，它可以包含模板、逻辑和样式。组件化使得应用的结构更加清晰，维护和重用变得更加容易。
简单易用：

Vue 提供了简洁的 API 和易于理解的文档，适合新手入门。同时，它也支持复杂的功能，适合大型项目开发。
虚拟 DOM：

Vue 使用虚拟 DOM 来优化 DOM 更新操作。通过虚拟 DOM，Vue 能够高效地计算出需要实际更新的 DOM 部分，从而提升性能。
工具生态：

Vue 提供了一系列官方工具和插件，例如 Vue Router（用于路由管理）和 Vuex（用于状态管理）。这些工具和插件与 Vue 紧密集成，提升了开发效率。

学习曲线平缓：

Vue 的学习曲线比许多其他框架（如 Angular 和 React）平缓，文档清晰且易于理解。
灵活性：

Vue 允许开发者逐步引入功能，可以从简单的页面开始，逐步扩展为复杂的应用程序。
双向数据绑定：

Vue 提供了双向数据绑定功能，使得数据和视图保持同步，减少了手动 DOM 操作的需要。
组件化：

通过组件化开发，代码可以模块化，复用性高，有助于管理和维护大型应用。
性能：

虚拟 DOM 的使用使得 Vue 在处理大型应用时性能表现良好。

版本升级：

在 Vue 2.x 到 Vue 3.x 的升级过程中，一些不兼容的变化可能会导致旧有项目的迁移成本较高。
插件质量参差不齐：

尽管 Vue 的官方插件质量高，但社区插件的质量参差不齐，需要开发者仔细选择和评估。

### Vue 和 React 有什么不同?

1. 设计理念
Vue：

渐进式框架：Vue 被设计为一个渐进式框架，允许开发者逐步引入其功能。你可以从仅使用 Vue 的视图层开始，逐步扩展到完整的框架。
声明式编程：Vue 使用声明式的模板语法，将 HTML、JavaScript 和 CSS 封装在一个组件中，强调模板与逻辑的清晰分离。
React：

库而非框架：React 被设计为一个库，专注于构建用户界面。它更侧重于组件的视图层，你可能需要结合其他库（如 Redux、React Router）来构建完整的应用。
声明式编程：React 通过 JSX 语法（JavaScript XML）来描述 UI，允许你在 JavaScript 代码中嵌入 HTML。React 的设计哲学是“声明式编程”，强调通过组件和状态管理来控制 UI 更新。
2. 模板与 JSX
Vue：

模板语法：Vue 使用模板语法（基于 HTML）来声明组件的结构，通过数据绑定和指令来处理动态内容。
易于理解：Vue 的模板语法较接近传统 HTML，对于新手开发者较为友好。
React：

JSX：React 使用 JSX，这是一种将 HTML 语法嵌入 JavaScript 的方式。JSX 允许在组件中直接写 HTML，并通过 JavaScript 表达逻辑。
灵活性高：JSX 是一种强大的工具，可以通过 JavaScript 的力量灵活地生成和处理 UI 结构，但对于习惯传统 HTML 的开发者，可能需要一些适应。
3. 组件
Vue：

组件定义：Vue 组件通过 .vue 文件来定义，这些文件将模板、脚本和样式封装在一个文件中。
选项式 API 和组合式 API：Vue 提供了两种主要的 API：选项式 API（data, methods, computed, watch 等）和组合式 API（setup 函数），使得组件定义更加灵活和可维护。
React：

组件定义：React 组件可以是函数组件或类组件，函数组件通常使用 React Hooks 来处理状态和副作用。
函数式组件和类组件：React 允许通过函数组件和类组件来定义组件。函数组件配合 Hooks 提供了更简洁和灵活的状态管理方式。
4. 数据绑定
Vue：

双向数据绑定：Vue 提供了双向数据绑定（如 v-model 指令），使得数据和视图保持同步，简化了表单处理。
响应式系统：Vue 的响应式系统允许在数据变化时自动更新视图。
React：

单向数据流：React 使用单向数据流，数据从父组件流向子组件，通常通过 props 和 state 进行管理。
状态管理：React 提供了 useState 和 useReducer Hooks 以及 Context API 来处理组件状态和上下文。
5. 生命周期
Vue：

生命周期钩子：Vue 提供了一系列生命周期钩子（如 created, mounted, updated, destroyed），可以在这些钩子中执行组件的初始化、更新和销毁逻辑。
React：

生命周期方法：类组件提供了生命周期方法（如 componentDidMount, componentDidUpdate, componentWillUnmount），函数组件则通过 useEffect Hook 实现类似的功能。
6. 生态系统和工具
Vue：

官方工具：Vue 提供了如 Vue CLI（项目脚手架）、Vue Router（路由管理）和 Vuex（状态管理）等官方工具和插件，整合度较高。
社区支持：Vue 拥有一个活跃的社区和丰富的插件生态系统。
React：

生态系统：React 的生态系统更加广泛，拥有大量的第三方库和工具，如 Redux（状态管理）、React Router（路由管理）和 Next.js（服务器端渲染）。
灵活性：React 的生态系统允许开发者自由选择和组合各种库来满足特定需求，但也可能导致配置和集成上的挑战。

### 什么是虚拟 DOM?

虚拟 DOM（Virtual DOM）是现代前端框架和库（如 React 和 Vue）中用于提升性能和优化用户界面的技术。它是一种抽象表示，用于在真实 DOM 上进行高效的更新和操作。下面是对虚拟 DOM 的详细解释：

1. 虚拟 DOM 的概念
虚拟 DOM 是一个轻量级的 JavaScript 对象，它模拟了实际 DOM 的结构和内容。它是实际 DOM 的一种抽象表示，用于在内存中进行计算和操作。虚拟 DOM 的主要目的是优化页面更新的性能，减少对实际 DOM 的直接操作。

2. 虚拟 DOM 的工作原理
虚拟 DOM 的工作流程可以分为以下几个步骤：

2.1 创建虚拟 DOM
当应用程序初始化时，框架会创建一个虚拟 DOM 树，这个树的结构和真实 DOM 的结构相似，但它是在内存中维护的，而不是实际渲染到页面上。
2.2 更新虚拟 DOM
当应用程序的数据发生变化时，框架会首先更新虚拟 DOM。这种更新是快速的，因为它只涉及在内存中的对象操作，不需要直接操作实际 DOM。
2.3 比较虚拟 DOM
框架会将更新后的虚拟 DOM 树与之前的虚拟 DOM 树进行比较，这个过程称为“虚拟 DOM 差异算法”或“diff 算法”。它会找出虚拟 DOM 中的差异（即哪些部分被修改、添加或删除了）。
2.4 更新实际 DOM
根据虚拟 DOM 中的差异，框架会最小化地更新实际 DOM。只有那些发生变化的部分会被更新，从而减少了直接操作 DOM 的次数，提高了性能。
3. 虚拟 DOM 的优点
性能优化：直接操作实际 DOM 是一种昂贵的操作，因为每次更新都可能导致浏览器的重新渲染和回流。虚拟 DOM 通过在内存中处理更新，减少了对实际 DOM 的操作，从而提高了性能。

高效的更新：虚拟 DOM 的 diff 算法能够高效地找出实际 DOM 和虚拟 DOM 之间的差异，减少了不必要的更新操作。

跨平台支持：虚拟 DOM 使得框架可以在不同的环境（如浏览器、服务器端渲染等）中使用相同的渲染逻辑，增加了框架的灵活性和可扩展性。

4. 虚拟 DOM 与实际 DOM
实际 DOM：浏览器中的真实文档对象模型，直接影响页面的渲染和交互。每次对实际 DOM 的修改都会导致页面的重新渲染（repaint）和回流（reflow）。

虚拟 DOM：在内存中维护的 DOM 的抽象表示。虚拟 DOM 的更新和比较操作是轻量级的，不会立即影响实际页面的渲染。

### 描述下 vue 的生命周期有哪些?分别做了什么事情?watch 怎么深度监听对象变化

### 删除数组用 delete 和 Vue.delete 有什么区别?

### watch 和 computed 有什么区别?

#### 含义

computed:

用于计算属性。它们基于其他数据源，并在这些数据源发生变化时自动重新计算值。computed 属性是基于依赖的数据源进行缓存的，只有在依赖的数据发生变化时才会重新计算。
适用于依赖其他数据属性并且需要在模板中直接使用的场景。

watch:

用于监听一个或多个数据属性的变化，并在这些属性发生变化时执行指定的回调函数。它通常用于执行复杂的逻辑，或者在数据变化时需要执行异步操作时使用。
适用于需要在数据变化时触发某些操作而不是直接返回计算结果的场景。

#### 场景

computed:

当你需要根据其他属性的值来计算一个新的值，并且希望这个计算过程是高效的。
例如：基于 firstName 和 lastName 计算 fullName。

watch:

当你需要在数据变化时执行一些逻辑，如异步操作、数据验证、手动处理DOM等。
例如：监听 route 变化来执行导航相关的逻辑，或者监控某个变量的变化来执行 API 调用。

### v-for 没有 key 会发生什么问题?

v-for 中缺少 key 可能会导致视图更新效率降低、状态混乱等问题，因此在使用 v-for 渲染列表时，务必要提供唯一的 key 来确保应用的正确性和性能。

视图更新效率降低: Vue.js 使用虚拟 DOM 来高效地更新视图。key 是用于标识虚拟 DOM 节点的唯一 ID，当数据发生变化时，Vue 会通过 key 来判断哪些元素发生了变化、哪些需要重新渲染、哪些可以复用。如果没有提供 key，Vue 在处理列表更新时会采用一种更简单的策略，

数据状态混乱：如果某些 DOM 元素依赖于组件的状态例如输入框的内容不正确地被复用到其他行，或者动画出现异常。

如果没有提供 key，当 items 列表发生变化时（比如新增、删除、或重新排序），Vue 可能会出现复用错误的 DOM 元素的情况。而使用唯一的 key 可以确保 Vue 能够正确地识别和追踪每个列表项，进而高效、准确地更新视图。

### 谈谈 Vue 双向绑定原理

Vue 双向绑定的原理
Vue 的双向绑定主要依赖于以下两个机制：

数据劫持（Data Hijacking）
发布-订阅模式（Publish-Subscribe Pattern）

1. 数据劫持（Data Hijacking）
Vue 使用 Object.defineProperty 进行数据劫持，通过定义对象的 getter 和 setter 来监视数据的变化。每当数据发生变化时，Vue 都能够检测到并作出相应的处理。

getter（取值操作）: 当从数据模型中读取值时，Vue 会通过 getter 捕获这个操作，并将依赖于该数据的组件或视图进行记录。
setter（设值操作）: 当数据模型中的值被修改时，setter 会被触发，Vue 随后会通知所有依赖该值的组件或视图进行更新。
2. 发布-订阅模式（Publish-Subscribe Pattern）
Vue 通过发布-订阅模式来管理视图和数据之间的关系：

Dep: Dep 是一个依赖管理器，它用于存储所有的依赖（即订阅者）。
Watcher: Watcher 是一个订阅者，当数据发生变化时，Watcher 会收到通知，并触发相应的视图更新。

#### 工作流程概述

初始化数据绑定:

Vue 在实例化时，会遍历数据对象的属性，并通过 Object.defineProperty 将这些属性转换为 getter 和 setter，以便进行数据劫持。

依赖收集:

当 Vue 渲染组件或模板时，它会读取数据属性，这时 getter 被调用，Vue 将当前组件（或相关的 Watcher）作为依赖添加到 Dep 中。

数据变化通知:

当用户在视图中修改数据（例如在输入框中输入内容），setter 被触发，Dep 随后通知所有相关的 Watcher，这些 Watcher 会重新计算视图并触发视图的更新。

视图更新:

Watcher 在接收到通知后，会重新执行渲染函数，以更新视图中的内容，使之与最新的数据保持一致。

### v-model 是什么?有什么用呢?

是Vue.js中的一个核心指令，用于实现数据和视图之间的双向绑定。其主要作用包括表单元素绑定、实时数据更新、自定义组件使用等

表单元素绑定：v-model可以用于表单元素如`<input>`、`<textarea>`、`<select>`等，实现数据模型与表单元素的双向同步。

实时数据更新：当表单元素的值发生变化时，v-model能够实时更新数据模型的值。反之，当数据模型的值发生变化时，它也能更新表单元素的显示值。

自定义组件使用：在自定义组件中，v-model可以用于接收来自父组件的数据并通过触发事件来更新这些数据。

修饰符的使用：v-model还支持如.lazy、.trim、.number等修饰符，用于优化数据绑定的行为。

数据流向：v-model的实现基于Vue的响应式系统和事件监听机制。数据流向包括从数据模型到视图的更新（Model to View）以及从用户的输入到数据模型的更新（View to Model）。

模板编译：在Vue的内部，v-model会被编译成：value属性和input事件监听器的组合，这使得开发者可以在模板中更简洁地编写代码，而不需要显式地处理数据的双向绑定逻辑。

### Vue3.0 里为什么要用 Proxy API 替代 defineProperty API?

袁老师的视频有这个 要看这个

### Vue3.0 编译做了哪些优化?

代理（Proxy）: Vue 3 使用 `JavaScript` 的 Proxy 对象来实现响应式系统，而不是 Vue 2 中使用的 Object.defineProperty。Proxy 可以监听对象的所有操作，提供更高效的性能和更好的灵活性。

编译时优化: Vue 3 在编译时做了许多优化，比如静态节点提升（Static Tree Hoisting），将静态内容提取到渲染函数外部，减少渲染时的计算开销。

Tree Shaking 支持: Vue 3 的代码更加模块化，使得可以利用现代构建工具（如 Webpack、Rollup）进行 Tree Shaking，去除未使用的代码，从而减小最终的包体积。

更快的虚拟 DOM: Vue 3 的虚拟 DOM 实现进行了重写，使得对比和更新过程更加高效。它通过更精细的优化和减少不必要的操作来提高性能。

Diff算法优化：Vue 3.0使用更高效的Virtual DOM diff算法，降低了不必要的虚拟节点创建和比对，加快了渲染性能

更好的 TypeScript 支持: Vue 3 从设计上就支持 TypeScript，提供更好的类型推导和开发体验。

Composition API: 虽然 Composition API 是一个新的特性，但它也间接带来了性能提升。它允许开发者以更灵活和可组合的方式组织逻辑，使得组件更加高效和可维护。

### Vue3.0 新特性 -- Composition API 与 React.js 中 Hooks 的异同点

#### 组件逻辑组织

Composition API：通过setup函数，将组件的相关逻辑集中在一起，使得状态管理、生命周期钩子等更加模块化和可重用。
React Hooks：允许开发者在函数组件中引入状态和副作用处理逻辑，通过诸如useState和useEffect等API，以函数调用的形式组织和管理组件逻辑。

#### 代码可复用性

Composition API：可以编写独立的函数或自定义逻辑，这些可以在多个组件间复用，提高开发效率和代码的整洁度。
React Hooks：鼓励创建自定义Hooks，从而实现跨组件的逻辑复用，社区生态对Hooks的支持也大大增强了其灵活性。

#### 函数组件能力

Composition API：使函数组件具备更多能力，包括状态管理、响应式数据创建等，不再依赖对象式组件配置。
React Hooks：在不使用类的情况下，为函数组件引入状态和副作用处理，完全不需要类组件即可构建复杂的React应用。

#### 语法概念

Composition API：引入了ref、reactive、computed等新概念，用于创建和管理响应式数据。
React Hooks：主要使用useState、useEffect、useContext等Hooks来管理状态和副作用，语法上更贴近传统的函数调用。

#### 数据响应性

Composition API：采用Vue的响应式系统，通过ref和reactive创建的数据具有响应性，自动追踪依赖并更新视图。
React Hooks：需要显式管理响应状态，通过useState设置状态，通过useEffect处理副作用，不内置响应性系统。

#### 生命周期管理

Composition API：仍然支持传统的生命周期钩子，并在setup函数中提供对应的生命周期API。
React Hooks：使用useEffect管理组件的生命周期事件，代替传统的类组件生命周期方法。

#### 模板与JSX

Composition API：与Vue模板紧密集成，允许在Vue组件中使用模板语法，保持模板的直观性和易用性。
React Hooks：主要用于配合JSX，通过JSX表达UI结构，与React的函数式编程思想相契合。

#### 生态系统

Composition API：与Vue 3集成，扩展了Vue的内置功能，同时保持与旧Options API的兼容性。
React Hooks：作为React的一部分，与React生态系统无缝整合，社区支持广泛。

### Vue3.0 是如何变得更快的?

Vue 3.0 通过优化DOM Diff算法、采用Proxy作为响应式系统、静态提升和树懒加载等，显著提升了性能。以下是Vue 3.0中DOM Diff算法的具体优化：

引入静态标签和PatchFlag：在Vue 2中，每次更新都会对整个VDOM树进行全量对比，这在大型应用中会造成明显的性能损耗。Vue 3引入了静态标签（PatchFlag）的概念，通过对元素添加标记来区分静态内容和动态内容。这种优化减少了不必要的比对，仅针对发生变化的部分进行Diff，大大提高了渲染效率。

优化keyed列表的更新：Vue 3改进了对带有key的列表的处理方式。在Vue 2中，当使用v-for指令渲染列表时，如果列表项的顺序发生改变，Vue需要做大量的DOM操作以保证key的对应关系，这在性能上是昂贵的。Vue 3引入了长度轴向化的算法，使相同长度的列表更新变得非常高效，降低了复杂度，从而加快了渲染速度。

事件监听缓存：在Vue 3内部，事件监听器现在会被缓存，避免了重复添加同一事件的监听器。这个优化减少了组件初始化和更新时的开销，特别对于动态组件和频繁更新的组件场景，性能提升明显。

异步渲染与Suspense：Vue 3支持异步组件的渲染，通过标签，可以灵活控制加载状态和错误处理，避免因数据未加载完成导致的不必要的重渲染和闪屏现象，有效利用时间切片进行渲染，确保应用在数据量大或渲染复杂时依旧流畅。

### diff 算法有何优化?

1. 算法复杂性和性能

Vue 2:

算法复杂性: Vue 2 使用的是一种 O(N^2) 的算法，即双端算法（two-pointer approach），在处理具有相同类型的子节点（如列表）时比较效率较低。这意味着在最坏情况下，比较操作的时间复杂度是平方级别的。

静态节点: Vue 2 主要通过标记静态节点来优化性能，但它的处理仍然比较局限，特别是在复杂的动态更新场景中。

Vue 3:

算法复杂性: Vue 3 采用了更加高效的 diff 算法，通过改进的双端算法（optimized two-pointer approach），减少了不必要的比较操作，从而降低了时间复杂度，特别是在处理大量节点时表现更佳。

静态节点: Vue 3 更加高效地处理静态节点，将它们标记为不可变，并在渲染过程中避免了不必要的更新，从而提高了性能。

2. 虚拟 DOM 对比

Vue 2:

关键点: Vue 2 的虚拟 DOM diff 算法在对比两个虚拟 DOM 树时，主要关注节点的类型和顺序，利用一系列优化来减少节点的重新渲染。

Vue 3:

优化的虚拟 DOM: Vue 3 进一步优化了虚拟 DOM 的对比，支持更高效的静态节点提升，减少了复杂的 diff 计算。在 Vue 3 中，虚拟 DOM 的 diff 算法更加精确和快速，处理了更多的优化场景。

3. 处理节点的方式

Vue 2:

节点类型: Vue 2 的 diff 算法对不同类型的节点（如文本节点、元素节点、组件节点）采取了不同的处理策略，但在一些复杂场景中可能会有性能问题。
key 属性: 在 v-for 中使用 key 提供了更高效的列表渲染，但其性能仍受限于算法的复杂性。

Vue 3:

节点类型和优化: Vue 3 的算法在处理节点时，考虑了更多的优化策略。Vue 3 更好地利用了 key 属性来提升列表渲染性能，并且支持更多的节点类型和复杂情况。

Fragment: Vue 3 允许组件返回多个根节点（Fragment），这使得处理节点更灵活，同时优化了节点的处理和渲染过程。

4. 关键更新

Vue 2:

局限性: 在 Vue 2 中，处理大量的动态节点和复杂组件时，diff 算法的性能可能会受到影响，特别是在深度嵌套和大量节点的场景中。

Vue 3:

性能改进: Vue 3 的 diff 算法引入了更多的性能改进，如更高效的树结构更新、静态节点优化和更智能的节点对比策略，从而在大多数场景中显著提升了性能。

#### 优化

1. 基本算法和优化策略

Vue 2:

双端算法（Two-Pointer Technique）: Vue 2 使用了双端算法来比较虚拟 DOM 树，这种算法在处理相同类型的子节点（例如列表）时，时间复杂度是 O(N^2)。
静态节点优化: Vue 2 会标记静态节点，在后续的更新中避免重新渲染这些节点，从而提高性能，但处理深度嵌套和复杂动态更新时仍有一定的限制。

Vue 3:

优化的双端算法（Optimized Two-Pointer Technique）: Vue 3 改进了双端算法，使其在处理动态和复杂的节点时表现更佳。通过优化节点的比较策略，减少了不必要的操作，提高了性能。

静态节点和节点缓存: Vue 3 更加高效地处理静态节点，并引入了节点缓存技术。这意味着 Vue 3 能够更好地利用静态节点，减少比较的次数和复杂性。

2. 节点处理和比较

Vue 2:

节点类型处理: Vue 2 的 diff 算法在处理不同类型的节点（文本节点、元素节点、组件节点）时使用了不同的策略，但在某些复杂的场景中可能会导致性能瓶颈。

key 属性: 在 v-for 中使用 key 属性有助于提高列表渲染性能，但在处理复杂的列表和动态更新时，性能优化仍然有限。

Vue 3:

Fragment（多个根节点）: Vue 3 允许组件返回多个根节点（Fragment），这使得节点处理更加灵活，并优化了节点的渲染过程。

更智能的节点对比: Vue 3 在节点对比中使用了更智能的策略，能够更高效地处理复杂节点和动态更新。它通过更好地利用 key 属性来提高列表渲染性能。

3. 组件和指令的优化

Vue 2:

组件更新: 在 Vue 2 中，组件更新时会进行全面的 diff 比较，可能导致性能问题，特别是在有大量组件时。

指令处理: Vue 2 中的指令处理有时需要额外的计算，这可能会增加 diff 算法的复杂性。

Vue 3:

组件更新优化: Vue 3 通过改进的虚拟 DOM 实现，优化了组件更新过程。它减少了不必要的比较，并提高了组件的更新效率。

指令和插件支持: Vue 3 引入了更灵活的指令和插件系统，这使得指令的处理更加高效，并且能够更好地与虚拟 DOM 进行集成。

4. 性能和开发体验

Vue 2:

性能: Vue 2 在处理大规模 DOM 更新时性能较为一般，特别是在复杂的组件和大量节点的场景中可能会遇到性能瓶颈。

开发体验: Vue 2 的 diff 算法虽然经过优化，但在某些情况下可能会影响开发体验，尤其是在需要频繁更新和渲染复杂 DOM 的应用中。

Vue 3:

性能提升: Vue 3 通过引入更高效的 diff 算法和优化技术，大幅提升了性能。在大规模和复杂的应用中，Vue 3 能够显著提高更新和渲染的效率。

开发体验提升: Vue 3 的改进使得开发者能够更好地处理复杂的 DOM 更新，提高了开发体验。通过优化的虚拟 DOM 和更智能的节点对比，Vue 3 使得开发过程更加流畅和高效。

### vue 要做权限管理该怎么做?如果控制到按钮级别的权限怎么做?

  路由权限 指令权限 以及函数权限

### vue 在 created 和 mounted 这两个生命周期中请求数据有什么区别呢?

created 和 mounted 是两个重要的生命周期钩子函数，用于在 Vue 实例的不同阶段执行代码。

#### 区别

##### created 钩子

触发时机: created 钩子在 Vue 实例创建完成后立即调用，此时数据已经被设置，但是 DOM 元素还没有被挂载到页面上。

适用场景:

用于初始化数据、设置默认值、进行一些实例级别的设置。
请求数据时，适用于需要在组件渲染前获取数据的场景。比如，获取数据以供组件渲染时使用，或准备好初始数据以避免组件在加载时出现空白。

请求数据的效果:

数据请求在 created 中进行时，可能会导致在数据到达之前组件的视图部分已经开始渲染，因此初次渲染时可能会显示空数据或加载状态。需要通过条件渲染（如 v-if）来处理这种情况。

##### mounted 钩子

触发时机: mounted 钩子在 Vue 实例挂载到 DOM 后调用，此时 DOM 元素已经被创建和插入到页面中。

适用场景:

用于需要访问或操作 DOM 元素的场景，例如初始化第三方插件、操作 DOM 等。
请求数据时，适用于需要确保 DOM 已经渲染完成的情况。此时可以保证组件的初始渲染已经完成，可以直接使用 DOM 或做一些额外的操作。
请求数据的效果:

数据请求在 mounted 中进行时，组件的视图已经渲染，用户可以看到组件的初始内容（即使是加载状态）。这对于在页面加载时展示一些用户界面反馈（如加载动画）比较有用。

created: 适用于需要在组件创建时就准备好数据，以便在渲染时使用。适合用于组件的初始化阶段。
mounted: 适用于需要在组件渲染到页面后进行的数据请求或 DOM 操作。适合需要依赖于已渲染的 DOM 元素进行操作的场景。

### 说说你对 Proxy 的理解

袁老师的课里面有

### Vue3.0性能提升主要是体现在哪些方面?

1. Composition API
2. Diff 算法
3. 响应式系统
4. Fragment 支持
5. Tree Shaking 和代码拆分

### vue3有哪些新的组件?

1. Teleport
2. Suspense
3. Fragment
4. v-model 的改进

### Vue2.0 和 Vue3.0 有什么区别?

1. 组合式api 复用逻辑

### Composition Api 与 Options Api 有什么不同?

Options API

定义方式:

使用 data、methods、computed、watch 等选项来定义组件的逻辑。
结构:

组件逻辑按照选项进行组织，每个选项负责不同的功能。

优点:

易于理解和使用，适合小型项目和开发者上手。结构清晰，适合开发者习惯于传统的 Vue 编写方式。

缺点:

随着组件逻辑的增加，代码可能变得难以维护，尤其是在大型组件中。逻辑复用和组织变得比较困难，容易导致 "配置地狱"。

Composition API

定义方式:

使用 setup 函数来定义组件的响应式状态、方法和其他逻辑。通过 ref、reactive 等 API 创建响应式数据，使用 watch 和 computed 处理副作用和计算属性。

结构:逻辑按照功能模块进行组织，所有相关的逻辑可以集中在一个地方，甚至可以在多个组件中复用。

优点:

逻辑更易于组合和复用，通过函数和组合 API 可以更灵活地组织代码。支持 TypeScript，更好地支持类型推导。在大型组件和复杂应用中，能提高代码的可维护性和可读性。

缺点:

上手难度较大，学习曲线相对较陡，特别是对于新手开发者。可能会导致组件变得过于复杂，尤其是在没有合理组织的情况下。

### 对Vue项目你做过哪些性能优化?

1. 组件优化
使用 v-if 和 v-show: v-if 是惰性渲染，只有当条件满足时才会渲染组件，而 v-show 是一直渲染，只是通过 CSS 来控制显示和隐藏。根据需要选择合适的指令以避免不必要的 DOM 操作。
组件懒加载: 使用动态导入 (import()) 来实现路由组件的懒加载，减少初始加载时间。
避免不必要的重新渲染: 使用 v-once 指令对不需要更新的部分进行一次性渲染，减少计算和渲染开销。
优化 key 使用: 在列表渲染中，确保使用唯一且稳定的 key，避免不必要的组件重渲染。
2. 数据管理
使用 computed 属性: 对于依赖于其他响应式数据的复杂计算，使用 computed 属性而不是在模板中进行计算，可以缓存计算结果，减少性能开销。
避免深度响应式: 在响应式数据较大时，避免过多使用深度响应式（例如，reactive），可以选择使用 ref 来对简单类型进行响应式处理。
3. 渲染优化
虚拟滚动: 对于长列表，使用虚拟滚动技术（如 vue-virtual-scroll-list），只渲染视口内的元素，减少 DOM 节点数目。
懒加载图片: 使用 IntersectionObserver 或 Vue 插件（如 vue-lazyload）实现图片懒加载，减少初始加载时间。
事件节流和防抖: 对频繁触发的事件（如滚动、输入）使用节流（throttling）和防抖（debouncing）技术，减少事件处理频率。
4. 性能监控和分析
使用 Vue Devtools: 利用 Vue Devtools 进行性能分析，查看组件的渲染和更新情况，帮助找出性能瓶颈。
Webpack 分析工具: 使用工具如 webpack-bundle-analyzer 查看打包后的文件大小，识别和优化大型依赖库。
5. 网络优化
减少请求次数: 合并多个请求，使用缓存（如 localStorage 或 sessionStorage）来减少网络请求次数。
使用 CDN: 将静态资源（如图片、样式表和脚本）托管在 CDN 上，加快资源加载速度。
开启 Gzip 压缩: 对服务器响应进行 Gzip 压缩，减少传输数据的大小，提高加载速度

### Vue组件通信的方式有哪些?

1. v-model
2. Props
3. emit
4. provide/inject
5. $on/$off/$emit
6. $refs

### Vue常用的修饰符有哪些?

### Vue中的$nextTick有什么作用?底层如何实现?

nextTick用于在下次 DOM 更新循环结束之后执行一个回调。它主要用于在数据更改后等待 DOM 更新完成再执行某些操作。这在处理需要依赖 DOM 更新完成后的逻辑时特别有用，例如获取 DOM 元素的尺寸或进行其他 DOM 操作。

#### $nextTick的作用

确保 DOM 更新完成: 当你在修改数据后立即进行 DOM 操作时，可能会遇到数据变化还未反映到 DOM 上的情况。$nextTick 允许你在 DOM 更新完成后执行某些操作，从而确保你操作的 DOM 是最新的。

处理异步更新: Vue 的 DOM 更新是异步的，使用 $nextTick 可以确保你的回调在 DOM 更新完成后被调用，从而避免因 DOM 尚未更新而导致的错误。

`nextTick`的底层实现涉及到 JavaScript 的事件循环机制，主要依赖于 Promise 或 MutationObserver 来确保在下一个宏任务或微任务中执行回调.使用微任务（如 Promise 或 MutationObserver）来在下一个宏任务或微任务中执行回调，以确保 DOM 更新已完成.(
  Vue 的 $nextTick 内部实现可能会根据环境选择合适的方式（如 Promise, MutationObserver, 或 setTimeout）。这使得 $nextTick 能够在各种浏览器和 JavaScript 环境中正常工作。
)

### v-show和v-if有什么区别?

v-show 和 v-if 都是 Vue.js 中用来控制元素显示和隐藏的指令，但它们的工作方式和适用场景有所不同。以下是它们的主要区别：

1. 渲染方式

v-if:

v-if 是条件渲染，它在 DOM 中插入或移除元素。当条件为假时，元素及其子元素不会被渲染到 DOM 中，渲染和销毁操作会消耗资源。适合用于条件变化较少的场景，因为每次条件变化时都需要重新渲染。

v-show:

v-show 是基于 CSS 的切换显示和隐藏，它只会改变元素的 display 样式，而不会在 DOM 中插入或移除元素。无论条件如何，元素始终会存在于 DOM 中，只是通过 display: none 来隐藏。
适合用于条件变化频繁的场景，因为切换的成本相对较低，不需要重新渲染。

2. 性能

v-if: 更加消耗性能，因为每次条件变化时都需要重新渲染或销毁元素及其子组件。不适合频繁变化的条件场景。
v-show:性能开销较低，因为它只是简单地切换元素的显示状态，而不涉及实际的 DOM 操作。适合频繁切换的场景，比如需要切换显示的元素比较多时。

3. 使用场景

v-if：当你需要根据条件动态插入或移除大量内容，或者对渲染进行复杂的处理时，使用 v-if 更为合适。适用于条件变化较少的场景，避免重复渲染和销毁的开销。
v-show：当你需要频繁地切换元素的显示状态时，使用 v-show 更为高效，因为它只涉及样式的变化。适用于需要保持元素状态但只需要显示或隐藏的场景。

v-if: 条件渲染，涉及 DOM 插入和销毁，适合条件不频繁变化的场景。
v-show: 切换显示和隐藏，仅涉及 CSS 样式，适合条件变化频繁的场景。

### 有用过keep-alive吗?它有什么作用?

### 如何实现一个虚拟DOM吗?

### 为什么data属性是一个函数而不是一个对象，具体原因是什么?

data 作为一个函数的主要目的是为了确保每个 Vue 组件实例都有独立的数据对象，避免数据共享和冲突。这种设计使得 Vue 组件能够安全地被复用和实例化，保证了组件的正确性和数据的隔离。

### Vue2的初始化过程你有过了解吗，做了哪些事情?

 vue2文档有

### Vue3初始化的一个大概流程?

vue3流程图

### vue3响应式api如何编写?

const a = ref()

### 在Vue项目中你是如何做的SSR渲染?

1. @vue/server-renderer
2. Nuxt.js

## 计算机网络

### 什么是 Ajax，Ajax 都有哪些优点和缺点?

1. AJAX（Asynchronous JavaScript and XML）是一种在不重新加载整个页面的情况下与服务器进行异步通信的技术

#### 优点

无需刷新页面: AJAX 允许网页与服务器进行异步数据交换，从而实现局部更新，而不需要重新加载整个页面。这可以提高用户体验和响应速度。
动态内容加载: 用户在与网页互动时，网页内容可以动态加载和更新，而不需要等待整个页面重新加载。这使得网页更加流畅和交互性更强。
局部更新: 只向服务器请求和更新必要的数据，而不是重新加载整个页面，减少了不必要的数据传输和带宽使用。
减少页面加载时间: 通过仅更新页面的一部分，可以减少页面加载时间和服务器的负担。
支持多种数据格式: AJAX 可以处理多种数据格式，包括 XML、JSON、HTML 和纯文本，这使得它非常灵活和适用于各种需求。

#### 缺点

老旧浏览器支持有限: 尽管现代浏览器对 AJAX 的支持很强大，但一些老旧浏览器可能不完全支持 AJAX，这可能会导致兼容性问题。
开发难度: 处理异步请求、更新页面内容和管理状态可能增加开发的复杂性，特别是在处理多个并发请求和错误处理时。
内容不可索引: AJAX 加载的内容通常在初次加载时不可见，这可能会影响搜索引擎的索引和排名，尤其是对于依赖 AJAX 内容的网页。
多次请求: 如果应用程序频繁发起 AJAX 请求，可能会导致性能问题，如增加服务器负担和网络延迟。
数据安全问题: 异步请求可能会带来安全隐患，如跨站点脚本攻击（XSS）和跨站请求伪造（CSRF）。需要采取额外的安全措施来保护数据安全。

优点: AJAX 提供了异步数据交换能力，允许局部页面更新，提高用户体验，减少带宽使用，改善性能，并且支持多种数据格式。
缺点: 可能存在浏览器兼容性问题，增加开发复杂性，对 SEO 有影响，可能带来性能问题和安全隐患。

### 请介绍一下 XMLHTTPrequest 对象及常用方法和属性

XMLHttpRequest 对象是用于在 Web 页面上进行异步 HTTP 请求的 JavaScript 对象。它允许在不重新加载整个页面的情况下从服务器请求数据，并对响应进行处理。XMLHttpRequest 对象是 AJAX（Asynchronous JavaScript and XML）的核心组成部分。

1. open初始化请求。
2. send 发送请求
3. setRequestHeader设置请求头。
4. abort取消当前请求
5. getAllResponseHeaders获取所有响应头的字符串

```javascript
// 创建 XMLHttpRequest 对象
const xhr = new XMLHttpRequest();

// 设置请求
xhr.open('GET', 'https://api.example.com/data', true);

// 监听请求状态变化
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // 请求完成
    if (xhr.status === 200) { // 请求成功
      console.log('Response:', xhr.responseText);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  }
};

// 发送请求
xhr.send();

```

### Ajax 的实现流程是怎样的?

创建一个 XMLHttpRequest 对象。
配置请求的类型、URL 以及是否异步。
发送请求到服务器。
监听服务器的响应并处理它。

```javascript
// 1. 
var xhr = new XMLHttpRequest();
// 2
xhr.open('GET', 'https://example.com/api/data', true);
// 3
xhr.send(null); // GET 请求
// xhr.send('param1=value1&param2=value2'); // POST 请求
// 4
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
// 5
var data = xhr.responseText; // 获取文本数据
```

### Aiax 接收到的数据类型有哪些，数据如何处理?封装好的 Ajax 里的常见参数及其代表的含义

1. 纯文本(Text)： xhr.responseText
2. JSON：var jsonData = JSON.parse(xhr.responseText);
3. XML： var xmlData = xhr.responseXML;
4. HTML： var htmlData = xhr.responseText; document.getElementById('content').innerHTML = htmlData;
5. 二进制数据 (Blob, ArrayBuffer)： xhr.responseType = 'blob'（'arraybuffer'）;  var binaryData = xhr.response;

##### 数据处理

文本数据处理：xhr.responseText
JSON 数据处理：JSON.parse(xhr.responseText)
XML 数据处理：responseXML.getElementsByTagName('item')
二进制数据处理：new Blob([xhr.response], { type: 'image/png' })

### Ajax 注意事项及适用和不适用场景

1. 跨域问题
2. 浏览器兼容
3. 异步同步的问题
4. 处理响应时间与错误
5. 安全性
6. 数据格式与解析
7. 回调地狱

SEO 友好的页面

### 常见的 HTTP 状态码以及代表的意义

看HTTP那一章

### 301 302 303 状态码的区别?

看HTTP那一章

### 什么是同源策略

同源”是指两个 URL 具有相同的 协议、域名 和 端口

### 为什么会有跨域的问题出现，如何解决跨域问题

1. 防止 xss 攻击
2. CORS 是一种标准的跨域解决方案。服务器可以通过设置适当的 HTTP 头部允许来自特定域名的跨域请求
3. 代理服务器 nginx

### Get 和 Post 的区别以及使用场景

#### 数据传输方式

1. GET:URL 参数、可见性、长度限制（2048）
2. POST 请求体、无长度限制具体的限制取决于服务器配置。数据类型多样多种数据类型，包括 JSON、XML、表单数据、文件等。

#### 安全性

1. GET数据暴露在 URL 中 浏览器历史、服务器日志、网络监控中，敏感数据不适合通过 GET 传输。
2. POST相对安全、不会直接显示在 URL 中，虽然不会对数据进行加密，但比 GET 更难被意外曝光。

#### 缓存机制

1. GET 请求通常可以被浏览器缓存，特别是用于获取静态资源
2. POST 请求的响应通常不会被浏览器缓存，适合用于操作需要实时处理结果的场景。

#### 参数传递

1. GET主要用于 URL 中的查询参数，如搜索关键字、分页信息等。书签和分享
2. POST 请求的响应通常不会被浏览器缓存，适合用于操作需要实时处理结果的场景。

#### 场景

##### GET

数据查询: 用于从服务器获取数据而不改变服务器状态的操作，如搜索查询、过滤结果、获取静态资源等。

示例：GET /search?query=javascript

导航和链接: 适合用于网页之间的链接、导航，用户可以直接点击 URL 访问资源，且 URL 可以方便地保存和分享。

示例：GET /products?page=2&category=books

获取静态资源: 浏览器通常会缓存 GET 请求的静态资源，如图片、CSS、JavaScript 文件，减轻服务器压力。

示例：GET /images/logo.png

#### POST

提交表单: 用于提交用户输入的数据，例如登录、注册、评论等操作。

示例：POST /login

上传文件: POST 请求可以传输文件或二进制数据，用于文件上传或传输大数据量。

示例：POST /upload

创建或更新资源: 用于在服务器上创建新资源或更新现有资源，通常带有副作用（如数据库的写操作）。

示例：POST /api/users （创建用户）

传递敏感数据: 由于数据在请求体中传输，POST 适合传递需要一定隐私保护的数据（尽管更好的做法是通过 HTTPS 加密传输）。

### 解释 jsonp 的原理

### HTTP 与 HTTPS 的区别

网络上进行数据传输的协议，从几个方面来说：安全性、工作原理、证书、性能、URL 和端口、SEO

#### 安全性

##### http

无加密：HTTP 是一个明文传输协议，数据在网络上传输时不进行加密。因此，数据可以被中间人拦截、查看和篡改。
风险：由于数据是明文的，用户的隐私信息、敏感数据（如密码、信用卡信息）在传输过程中容易被窃取或篡改。

##### https

加密传输：HTTPS 在 HTTP 的基础上增加了 SSL/TLS 加密层，通过加密算法保护数据在传输过程中的机密性和完整性。
数据保护：HTTPS 确保数据在传输过程中被加密，防止中间人攻击（MITM）和数据泄露，提高数据的安全性。

#### 工作原理

##### http

数据传输：数据以明文形式通过 TCP/IP 协议进行传输。
连接：HTTP 连接通常不进行加密和认证，通信内容易被第三方读取。

##### https

加密层：HTTPS 使用 SSL/TLS 协议对数据进行加密，确保数据在网络上以加密形式传输。
认证：HTTPS 还涉及到服务器的身份验证，通过数字证书（由受信任的证书颁发机构颁发）确认服务器的身份，防止伪造网站的攻击。

#### 证书

##### http

无证书：HTTP 协议不涉及证书的使用，不进行身份验证。

##### https

数字证书：HTTPS 需要 SSL/TLS 证书。证书用于加密通信以及验证服务器的身份，确保用户连接到的是合法的服务器。
证书颁发：证书由证书颁发机构（CA）颁发，证书的有效性可以通过 CA 的公钥来验证。

#### 性能

##### http

性能：HTTP 协议不涉及加密，因此在处理速度上相对较快，但这并不是说它更高效，因为数据的安全性和完整性未得到保证。

##### https

性能开销：HTTPS 的加密和解密过程会带来一定的性能开销，因此在处理时可能比 HTTP 略慢。不过，现代硬件和优化技术（如 HTTP/2）已经显著减少了这个性能差异。

#### URL 和端口

##### http

URL：以 http:// 开头。
端口：默认端口为 80。

##### https

URL：以 https:// 开头。
端口：默认端口为 443。

#### SEO

##### http

HTTP 可能会被认为不够安全，影响网站的 SEO 排名

##### https

搜索引擎优先考虑 HTTPS 网站

### 简述 web 前端 Cookie 机制，并结合该机制说明会话保持原理

Cookie 机制一种在**客户端**和**服务器**之间**传递信息**的技术，它允许**服务器**在用户的**浏览器**上**存储**和**检索数据**。这些数据通常用于跟踪**用户状态**、**个性化设置**和**会话管理**。

1. 创建Cookie,服务器通过HTTP响应头中的Set-Cookie
2. 存储Cookie
3. 发送Cookie
4. 读取和更新Cookie
5. 删除Cookie

会话保持是指在**用户**与**Web应用**进行**交互**时，**服务器**能够**识别**出是**同一个用户**，并**维持其状态**的过程。Cookie机制是实现会话保持的一种常用方法。

**用户登录**：当用户登录Web应用时，服务器会验证用户的身份，并创建一个唯一的会话标识符（通常是一个随机生成的字符串）。

**创建会话Cookie**：服务器将这个会话标识符作为值，创建一个Cookie，并通过Set-Cookie响应头发送给客户端。

**存储会话标识符**：客户端浏览器接收到这个Cookie后，将其存储在本地。

**后续请求**：当用户继续与Web应用交互并发送请求时，浏览器会自动将包含会话标识符的Cookie发送给服务器。

**识别用户**：服务器接收到请求后，从请求头中读取Cookie，提取出会话标识符，并通过这个标识符识别出是哪个用户。

**维持状态**：服务器根据会话标识符找到对应的用户会话数据，从而维持用户的状态，例如用户的登录状态、购物车内容等。

### 你知道的 HTTP 请求方式有几种

GET PUT POST DELETE

### 谈谈你理解的 RESTFUL 规范

 RESTFUL规范是一种软件架构风格，REST代表表述性状态转移，它强调资源的概念，并通过HTTP协议来实现客户端与服务器之间的通信。

* 资源（Resources）：

RESTful架构中的核心概念是资源。资源可以是任何可以被命名的对象，如用户、文章、图片等。
每个资源都有一个唯一的标识符，通常是一个URI（统一资源标识符）。

* 统一接口（Uniform Interface）：

RESTful服务应该提供一个统一的接口来访问资源，这个接口由四个主要部分组成：请求方法、URI、请求头和响应体。
请求方法（如GET、POST、PUT、DELETE等）用于定义对资源的操作。
URI用于定位资源。
请求头和响应体用于传递额外的信息和数据。

* 无状态（Stateless）：

RESTful服务应该是无状态的，即服务器不保存客户端的任何状态信息。
每个请求都应该包含足够的信息来让服务器理解并处理该请求，而不需要依赖于之前的请求或会话状态。

* 可缓存（Cacheable）：

RESTful服务应该支持缓存，以提高性能和可伸缩性。
服务器可以通过响应头来指示客户端是否可以缓存响应，以及缓存的策略。

* 分层系统（Layered System）：

RESTful服务可以由多个层组成，每层负责不同的功能，如负载均衡、认证、业务逻辑等。
客户端通常无法直接访问服务器内部的层，这增加了系统的安全性和灵活性。

* 按需代码（Code on Demand，可选）：

RESTful服务可以通过传输可执行代码来扩展客户端的功能，但这不是必须的，也不是REST规范的核心部分。

* 超媒体作为应用状态的引擎（HATEOAS，Hypermedia as the Engine of Application State）：

RESTful服务应该使用超媒体（如HTML、JSON等）来描述资源和状态。
客户端可以通过解析超媒体来了解可用的资源和操作，从而动态地导航和交互。

### 解释一下三次握手是什么，具体流程。变为二次握手会发生什么问题?

第一次握手：

客户端发送一个SYN（同步序列编号）报文给服务器，请求建立连接。
报文中包含客户端的初始序列号（ISN）。
客户端进入SYN_SENT状态。

第二次握手：

服务器收到SYN报文后，如果同意连接，则发送一个SYN+ACK（同步确认）报文作为响应。
报文中包含服务器的初始序列号（ISN）和对客户端SYN的确认（ACK），确认号为客户端ISN+1。
服务器进入SYN_RECEIVED状态。

第三次握手：

客户端收到SYN+ACK报文后，发送一个ACK（确认）报文给服务器，确认号为服务器ISN+1。
客户端进入ESTABLISHED状态。
服务器收到ACK报文后，也进入ESTABLISHED状态，此时连接建立成功。

#### 变为二次握手会发生的问题

1. 半开连接（Half-open Connection）：

如果客户端发送了SYN报文，但服务器没有响应（例如由于网络问题），客户端会一直等待服务器的响应，而服务器则不知道这个连接请求的存在。
这种情况下，连接处于半开状态，浪费了服务器的资源。

2. 无法确认服务器的接收能力：

在两次握手的情况下，客户端无法确认服务器是否成功接收了自己的SYN报文。
如果服务器没有收到SYN报文，但客户端认为连接已经建立，这会导致数据丢失或不一致。

3. 无法防止重复连接请求：

如果客户端的SYN报文在网络中延迟或重传，服务器可能会收到多个相同的SYN报文。
在两次握手的情况下，服务器会为每个SYN报文创建一个连接，导致资源浪费和潜在的冲突。

### TCP 和 UDP 分别是什么?

#### TCP

TCP（传输控制协议）和UDP（用户数据报协议）是两种常用的网络传输协议

工作方式：TCP是一种面向连接的协议，需要在客户端和服务器之间建立一个连接，然后再进行数据传输。它提供了可靠的、有序的、全双工的数据流传输，通过确认、重传、窗口控制等机制来保证数据的可靠传输。

性能：TCP协议通过可靠性机制和拥塞控制来保证数据的可靠传输，因此它的传输速度相对较慢

适用场景：TCP协议适用于需要可靠传输、数据量大、传输距离较远的场景，例如HTTP、FTP等应用层协议

特点：面向连接、可靠、基于字节流、全双工通信。

连接过程：通过三次握手建立连接，通过四次挥手释放连接。

可靠性机制：包括序列号、确认和重传机制，确保数据的准确和可靠传输。

流量控制和拥塞控制：使用滑动窗口机制和慢开始、拥塞避免、快重传和快恢复等策略。

#### UDP

工作方式：UDP是一种无连接的协议，数据传输之前不需要在客户端和服务器之间建立连接。它提供了不可靠的、无序的、非全双工的数据包传输，不保证数据的可靠传输

性能：UDP协议没有可靠性机制和拥塞控制，数据传输的速度相对较快

适用场景：UDP协议适用于实时性要求高、数据量小、传输距离短的场景，例如音视频传输、网络游戏等

特点：无连接、不可靠、基于数据报、尽最大努力交付。

速度：由于没有连接建立和流量控制机制，UDP通常比TCP更快。

适用场景：适用于对实时性要求较高的应用，如视频会议、在线游戏等。

### WebSocket 的实现和应用

1. WebSocket 是一种网络通信协议，它在单个 TCP 连接上进行全双工通信。WebSocket 协议使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据
2. 聊天、实时数据更新、新闻推送、天气预报、在线游戏、物联网设备监控。

### -个图片 ur 访问后直接下载怎样实现?

```javascript
function downloadImage(imageUrl, fileName) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 使用示例
downloadImage('https://example.com/path/to/image.jpg', 'downloaded_image.jpg');
```

### 说-下 http2.0

HTTP/2.0的主要特性

二进制分帧：HTTP/2.0将数据传输划分为小的帧，每个帧都包含帧头和帧载荷，提高了传输效率。
头部压缩：使用HPACK算法对HTTP头部进行压缩，减少了头部传输的数据量。
多路复用：支持多个请求和响应在同一个连接上同时进行，提高了网络的并发能力。
服务器推送：服务器可以在客户端请求之前，主动向客户端推送数据，减少了额外的请求延迟。
流量控制和资源优先级：有效利用流的多路复用机制，确保只有接收者使用的数据会被传输，同时支持优先级设置，确保重要资源优先传输。
安全性增强：默认使用TLS 1.2或更高版本的加密协议，提供了更强的安全性保护。

HTTP/2.0与HTTP 1.1的区别

连接复用：HTTP/1.1支持持久连接，而HTTP/2.0在此基础上实现了完全的多路复用。
请求头持久化：HTTP/1.1通过Keep-Alive减少连接建立和关闭的开销，HTTP/2.0进一步减少了重复发送头部信息的次数。
流水线处理：HTTP/1.1支持流水线化，但存在队头阻塞问题，HTTP/2.0通过多路复用解决了这一问题。
传输编码：HTTP/1.1引入分块传输编码提高传输效率，HTTP/2.0的二进制格式本身更高效。
多路复用：HTTP/1.x中的队头阻塞问题在HTTP/2.0中通过多路复用技术得到解决。
头部压缩：HTTP/1.1不支持头部压缩，HTTP/2.0使用HPACK算法压缩头部，减少了传输的数据量。
服务器推送：HTTP/1.1不支持服务器推送，HTTP/2.0引入了服务器推送机制，提高了响应速度。
安全性：HTTP/1.1不支持强制使用TLS，HTTP/2.0默认使用TLS加密传输，提供了更强的安全性。

HTTP/2.0的应用场景

网页浏览：显著提高网页的加载速度和响应性能。
移动应用：提高移动应用的网络利用率和响应速度。
云服务：提高云服务的性能和响应速度。
实时通信：适用于实时通信应用，提供更快的传输速度和更好的并发性

HTTP/2.0通过一系列的创新特性，显著提高了网络通信的效率和安全性，是现代Web应用的重要支撑。

### 补充 400 和 401、403 状态码

1. 400 （错误请求） 服务器不理解请求的语法。
2. 401(未授权) 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应
3. 403(禁止) 服务器拒绝请求。

### fetch发送2次请求的原因

1. fetch 在某些情况下可能会发送两次请求，这通常是由于浏览器的预检请求（preflight request）机制导致的。预检请求是浏览器为了确保跨域请求安全而自动发起的一种请求。
2. 跨域请求：当 fetch 发起跨域请求时，浏览器会首先发送一个 OPTIONS 请求，这就是预检请求。预检请求会检查目标服务器是否允许跨域请求，如果允许，浏览器才会发送实际的请求。因此，在这种情况下，你会看到两个请求：一个是 OPTIONS 预检请求，另一个是实际的请求。如果服务器响应允许跨域请求，浏览器会发送第二个请求，即实际的 POST 请求。

```javascript
fetch('https://example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' })
});
```

3.自定义请求头：如果 fetch 请求中包含了自定义的请求头，浏览器同样会发送预检请求。这是因为自定义请求头可能会影响到服务器的处理逻辑，浏览器需要先确认服务器是否接受这些自定义头。在这种情况下，浏览器会先发送一个 OPTIONS 预检请求，然后发送实际的 POST 请求。

```javascript
fetch('https://example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom-value'
    },
    body: JSON.stringify({ key: 'value' })
});
```

### 对 HTML 语义化标签的理解

1. HTML语义化标签是指那些具有明确含义的标签，它们用于描述网页内容的结构和意义，而不是仅仅用于视觉呈现。这些标签帮助开发者、搜索引擎以及辅助技术（如屏幕阅读器）更好地理解网页的内容。
2. 语义化标签的作用和优势:提高代码的可读性和可维护性、提升搜索引擎优化（SEO）效果、增强网页的可访问性、适应不同的设备和屏幕尺寸
3. 常用的标签：`<header>`定义文档的页眉，通常包含网站的标志、导航菜单等;`<nav>`表示页面的主要导航链接部分;`<main>`代表文档或文档某个部分的主内容区域;`<article>`定义文档中的独立内容，如新闻文章、博客条目等;`<section>`代表文档中的一个独立部分，通常带有一个标题;`<aside>`用于定义与页面主要内容相关但不是主要内容的一部分的内容，比如侧边栏或广告;`<footer>`定义文档或节的页脚，通常包含版权信息、联系方式等。

### Cookie 和 session 的区别

存储位置

Cookie: 存储在客户端浏览器中。  
Session: 存储在服务器端。

安全性

Cookie: 相对不安全，容易被截获和篡改。  
Session: 更加安全，因为数据存储在服务器端。

大小限制

Cookie: 每个Cookie的大小通常不超过4KB。
Session: 没有明确的大小限制，但过多的数据会影响服务器性能。

数量限制

Cookie: 每个域名下的Cookie数量有限制，通常为20个左右。  
Session: 没有明确的数量限制，但过多的Session会增加服务器负载。

生命周期

Cookie: 可以设置有效期，过期后会被浏览器自动删除。  
Session: 通常依赖于用户的活动状态，可以通过设置超时时间来控制。

用途

Cookie: 用于保存用户信息、个性化设置等。  
Session: 用于记录用户的状态，如登录状态等。

### 强缓存 和 协商缓存 区别?什么时候用哪个?本质是?

概念

强缓存: 浏览器根据响应头中的 Expires 或 Cache-Control 指令来判断资源是否有效，如果有效则直接从缓存加载。  
协商缓存: 当浏览器不确定缓存的有效性时，会向服务器发送条件请求（例如使用 If-Modified-Since 或 If-None-Match）来确认资源是否已更新。

控制机制

强缓存:使用 Expires 头指定资源过期时间。使用 Cache-Control 头中的 max-age 指定资源的有效时间。  
协商缓存:使用 Last-Modified 和 If-Modified-Since 来检查资源是否已修改。使用 ETag 和 If-None-Match 来验证资源版本。

使用场景

强缓存: 适用于静态资源，如图片、CSS、JavaScript 文件等，这些资源在部署后很少改变。  
协商缓存: 适用于动态资源或可能频繁变化的内容，如动态生成的页面等。

本质

强缓存的本质是通过预设的有效期来避免不必要的网络请求,协商缓存的本质是在客户端和服务器之间进行协商，确定资源是否需要重新获取。

选择使用

对于几乎不会变化的资源，使用强缓存可以减少服务器负担，提高加载速度。  
对于可能会发生变化的资源，使用协商缓存可以在保证资源是最新的同时，减少不必要的数据传输。

### cache-control 的值有哪些

Cache-Control 是一个 HTTP 头部，用于指定缓存机制的指令，控制客户端和中间缓存（如 CDN 和代理服务器）如何缓存和使用响应内容。以下是 Cache-Control 头部常见值及其含义：

1. no-cache
含义：要求客户端在使用缓存内容之前必须重新验证缓存的内容。
使用场景：当服务器内容可能已更改但不一定每次请求都需要更新时。
2. no-store
含义：指示缓存不应存储任何关于客户端请求和服务器响应的信息。
使用场景：用于敏感数据，如银行网站登录页，确保数据不会被存储在缓存中。
3. public
含义：表示响应可以被任何缓存（包括公共缓存）缓存，即使它是认证内容。
使用场景：当响应内容不包含敏感数据，并且可以被任何人访问时。
4. private
含义：表示响应只能被单个用户的缓存缓存，而不能被共享缓存（如 CDN）缓存。
使用场景：用于包含用户特定数据的响应，如个人账户页面。
5. max-age=`<seconds>`
含义：指定响应可以在缓存中存储的最大时间（以秒为单位）。超过这个时间，缓存内容被视为过期。
使用场景：用于指定缓存内容的有效时间。例如，max-age=3600 允许缓存存储响应内容 1 小时。
6. s-maxage=`<seconds>`
含义：与 max-age 类似，但仅对共享缓存（如 CDN）有效。覆盖 max-age 或 Expires 头部。
使用场景：当需要不同的缓存策略用于不同的缓存层时。例如，指定 CDN 上缓存的时间。
7. must-revalidate
含义：当缓存内容过期时，客户端在使用缓存内容之前必须先向服务器验证其有效性。
使用场景：用于确保客户端在使用过期缓存之前验证内容的有效性。
8. proxy-revalidate
含义：类似于 must-revalidate，但仅对共享缓存有效。
使用场景：确保共享缓存（如代理服务器）在内容过期后验证其有效性。
9. no-transform
含义：指示缓存不应对响应内容进行转码（如压缩或更改格式）。
使用场景：当内容不应被修改或转码时，例如图片和视频。
10. immutable
含义：指示内容在 max-age 过期之前不应更改。浏览器可以优化缓存策略并减少请求。
使用场景：用于静态资源，如版本化的图像或脚本文件，确保在指定时间内不改变。

### 谈谈 304 状态码

（未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。

### 什么是 CDN，以及如何优化?

CDN（内容分发网络，Content Delivery Network）是一个分布式的网络架构，通过在全球范围内部署多个边缘服务器，来缓存和分发静态和动态内容，从而提高网站的性能、可用性和安全性。

1. CDN 的工作原理
**内容缓存：**
缓存静态内容：CDN 边缘服务器会缓存静态内容，如图像、CSS、JavaScript 文件等。当用户请求这些内容时，CDN 会从最近的边缘服务器提供数据，而不是从原始服务器获取。
动态内容加速：虽然动态内容（如用户生成的数据）不会被缓存，CDN 也可以通过优化传输路径和减少延迟来加速动态内容的传输。
**用户请求路由：**
智能路由：CDN 会根据用户的地理位置、网络状态和服务器负载等因素，选择最接近的边缘服务器来响应请求。这可以减少延迟和提高响应速度。
**负载均衡：**
分担流量：CDN 边缘服务器分担来自用户的流量，从而减少原始服务器的负载，避免单点故障。
**安全性：**
DDoS 防护：CDN 提供分布式的 DDoS（分布式拒绝服务）攻击防护，减少对源服务器的攻击影响。
SSL/TLS 加密：CDN 支持 SSL/TLS 加密，确保用户与边缘服务器之间的通信安全。

2. 优化 CDN 的方法
**内容缓存策略：**
设置合理的缓存时间：通过设置适当的缓存过期时间（TTL，Time-To-Live）来平衡内容的新鲜度和缓存命中率。常见的做法是对静态内容（如图像、视频）设置较长的 TTL，对动态内容（如 API 响应）设置较短的 TTL。
使用缓存控制头：配置适当的 HTTP 缓存控制头（如 Cache-Control, Expires）来管理缓存行为。
**内容优化：**
压缩内容：使用 Gzip 或 Brotli 等压缩算法来减少传输的数据量。优化图像：使用适当的图像格式和尺寸，压缩图像以减少文件大小。
**合理的分发策略：**
选择合适的 CDN 提供商：选择具有全球覆盖和良好性能的 CDN 提供商。配置地理位置：确保 CDN 边缘服务器覆盖用户主要集中区域，优化请求路由。
**动态内容加速：**
使用 CDN 的动态加速功能：一些 CDN 提供动态内容加速功能，通过优化传输路径和减少延迟来加速动态内容的传输。
**监控和分析：**
监控性能：使用 CDN 提供的监控工具来跟踪缓存命中率、响应时间和流量等指标。分析数据：根据监控数据分析和调整缓存策略，优化 CDN 配置。
**安全性设置：**
启用 HTTPS：通过 CDN 配置 HTTPS，以加密数据传输和保护用户隐私。配置 Web 应用防火墙（WAF）：使用 CDN 提供的 WAF 功能来保护应用程序免受常见的网络攻击。

### DNS是什么

DNS（域名系统，Domain Name System）是一个分布式的、层次化的系统，用于将域名转换为 IP 地址。它是互联网的核心组成部分，使得用户可以使用易于记忆的域名（如 <www.example.com）访问网络资源，而无需记住数字格式的> IP 地址（如 192.0.2.1）。

### 什么是四层、七层网络模型?

四层网络模型（简称 TCP/IP 模型）四层网络模型，也被称为 TCP/IP 模型，是用于描述和设计互联网协议的模型。它包含四个主要层级：

**应用层（Application Layer）**：这一层处理应用程序间的通信协议，如 HTTP、FTP、SMTP 等。负责提供用户服务和应用程序的接口。
**传输层（Transport Layer）：**这一层负责数据的传输和管理端到端的通信。主要协议包括 TCP（传输控制协议）和 UDP（用户数据报协议）。TCP 提供可靠的、面向连接的服务，而 UDP 提供无连接、不可靠的服务。
**网络层（Network Layer）：**这一层负责数据包在网络中的路由和转发。主要协议是 IP（互联网协议），它负责地址分配和路由选择。子协议如 ICMP（互联网控制消息协议）用于错误报告和诊断。
**链路层（Link Layer）：**这一层处理物理网络上的数据传输和网络接口。负责帧的封装和解封装，包括以太网、Wi-Fi 等协议。

七层网络模型，即开放系统互联（OSI）模型，是由国际标准化组织（ISO）提出的网络分层模型，用于标准化网络通信协议的设计。它包含以下七个层级：

**物理层（Physical Layer）：**负责传输原始的比特流，包括硬件设备如电缆、交换机和网卡。定义了电气信号、光信号和机械特性。
**数据链路层（Data Link Layer）：**负责节点之间的可靠数据传输。包括以太网、PPP（点对点协议）、HDLC（高级数据链路控制）等协议。处理错误检测和帧的封装。
**网络层（Network Layer）：**负责数据包的路由和转发。主要协议包括 IP（互联网协议）、ICMP（互联网控制消息协议）。
**传输层（Transport Layer）：**负责端到端的数据传输和流量控制。主要协议包括 TCP（传输控制协议）和 UDP（用户数据报协议）。
**会话层（Session Layer）：**负责建立、管理和终止会话（连接）。提供对话控制和同步。
**表示层（Presentation Layer）：**负责数据的编码、解码和转换。处理数据格式、加密和解密。
**应用层（Application Layer）：**处理应用程序间的通信协议。包括 HTTP、FTP、SMTP、DNS 等协议。

## 代码编程

### this指向

1. 全局上下文：在全局作用域中，this 指向全局对象。在浏览器环境中，全局对象是 window；在 Node.js 环境中，全局对象是 global
2. 函数调用：当函数作为普通函数调用时，this 通常指向全局对象（在严格模式下，this 为 undefined）。
3. 对象方法调用：当函数作为对象的方法被调用时，this 指向调用该方法的对象。
4. 构造函数：当函数作为构造函数被调用时（使用 new 关键字），this 指向新创建的对象。

```javascript
function MyConstructor() {
    this.myProperty = 'value';
}

const myInstance = new MyConstructor();
console.log(myInstance.myProperty); // 输出：'value'
```

5. 箭头函数：箭头函数没有自己的 this，它会捕获其所在上下文的 this 值。javascript箭头函数中的 this 指向定义箭头函数时的上下文中的 this 值，而不是调用时的上下文。这意味着箭头函数内部的 this 与外层非箭头函数的 this 值相同。

```javascript
const myObject = {
    myMethod: function() {
        const arrowFunction = () => {
            console.log(this);
        };
        arrowFunction();
    }
};

myObject.myMethod(); // 输出：myObject
```

在这个例子中，arrowFunction 是一个箭头函数，它捕获了 myMethod 方法中的 this 值。因此，当调用 arrowFunction 时，this 指向 myObject。

6. 显式绑定：可以使用 call、apply 或 bind 方法显式地设置函数调用时的 this 值。

```javascript
function myFunction() {
    console.log(this);
}

const myObject = {};

myFunction.call(myObject); // 输出：myObject
myFunction.apply(myObject); // 输出：myObject

const boundFunction = myFunction.bind(myObject);
boundFunction(); // 输出：myObject
```

在这个例子中，通过 call、apply 和 bind 方法，我们可以显式地将 myFunction 的 this 设置为 myObject。
this 的指向取决于函数的调用方式,

### 如何判断对象为空

### 函数柯里化 实现一个add 函数满足能力

函数柯里化（Currying）是将一个接受多个参数的函数转换成一系列接受单一参数的函数的技术。柯里化函数在每次调用时接受一个参数，并返回一个新的函数，这个新的函数可以接受下一个参数，直到所有参数都被提供。

### 假设前端需要发 n个请求(n很大)，写一个方法同时只并发10个请求，直到n个请求完成

```javascript

function fetchWithConcurrency(n, concurrencyLimit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let activeRequests = 0;
    let completedRequests = 0;
    let index = 0;

    function fetchNext() {
      if (completedRequests === n) {
        resolve(results);
        return;
      }

      while (activeRequests < concurrencyLimit && index < n) {
        const currentIndex = index++;
        activeRequests++;

        fetch(`https://example.com/api/data/${currentIndex}`)
          .then(response => response.json())
          .then(data => {
            results[currentIndex] = data;
            completedRequests++;
            activeRequests--;
            fetchNext();
          })
          .catch(error => {
            reject(error);
          });
      }
    }

    fetchNext();
  });
}

// 使用示例
fetchWithConcurrency(100, 10)
  .then(results => {
    console.log('所有请求已完成:', results);
  })
  .catch(error => {
    console.error('请求出错:', error);
  });
  
```

### 实现转化下划线命名到驼峰命名

```javascript

function toCamelCase(str) {
  // 使用split
  // return str.split('_').map((word, index) => {
  //       return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  //   }).join('');

  // 正则方式
  return str.replace(/_([a-z])/g, function(match, letter) {
    return letter.toUpperCase();
  });
}

// 使用示例
const underscoredStr = 'this_is_a_test_string';
const camelCaseStr = toCamelCase(underscoredStr);

console.log(camelCaseStr); // 输出: "thisIsATestString"
```

### 实现对象深拷贝

1. 递归方法来遍历对象的属性并进行深拷贝

```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  // 处理 Symbol 类型属性
  const symbols = Object.getOwnPropertySymbols(obj);
  symbols.forEach(symbol => {
    copy[symbol] = deepCopy(obj[symbol]);
  });

  return copy;
}

// 使用示例
const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  },
  [Symbol('mySymbol')]: 'symbolValue'
};

const copied = deepCopy(original);
console.log(copied); // { a: 1, b: { c: 2, d: [3, 4] }, Symbol(mySymbol): 'symbolValue' }
```

### 如果已经有三个 promise，A、B 和 C，想串行执行，该怎么写?

```javascript
async function executePromisesInSeries() {
  try {
    const resultA = await A();
    console.log('A 完成，结果:', resultA);

    const resultB = await B();
    console.log('B 完成，结果:', resultB);

    const resultC = await C();
    console.log('C 完成，结果:', resultC);
  } catch (error) {
    console.error('执行过程中发生错误:', error);
  }
}

```

## 网络安全

### 什么是 xss 攻击及如何防范

XSS（Cross-Site Scripting，跨站脚本攻击）是一种常见的网络安全漏洞，攻击者通过在目标网站上注入恶意脚本，使其在用户的浏览器中执行，从而窃取用户信息、篡改网页内容或进行其他恶意行为。

XSS 攻击的类型

反射型 XSS：攻击者将恶意脚本注入到 URL 参数中，用户点击链接后，服务器返回包含恶意脚本的网页，浏览器执行该脚本。

存储型 XSS：攻击者将恶意脚本存储在目标网站的数据库中，当其他用户访问网站时，恶意脚本被取出并执行。

DOM 型 XSS：攻击者通过修改网页的 DOM 结构，注入恶意脚本。这种攻击不需要服务器参与，完全在客户端执行。

如何防范 XSS 攻击

输入验证：对用户输入的数据进行严格的验证，确保数据符合预期的格式和类型。

输出编码：在将用户输入的数据插入到 HTML 页面时，对特殊字符进行转义编码，防止恶意脚本被执行。

使用内容安全策略（CSP）：CSP 是一种安全特性，可以限制浏览器加载和执行外部资源，如 JavaScript 文件、CSS 文件等。通过设置合适的 CSP 策略，可以有效防止 XSS 攻击。

启用 HTTP Only 和 Secure 标志：为 Cookie 设置 HTTP Only 标志可以防止 JavaScript 访问 Cookie，从而降低 XSS 攻击的风险。Secure 标志可以确保 Cookie 只在 HTTPS 连接中传输，防止中间人攻击。

使用安全的编程实践：遵循安全的编程实践，如避免使用 innerHTML，使用 textContent 或 innerText 插入文本内容，使用 createElement 和 appendChild 创建和插入元素等。

定期审查和更新：定期审查网站的安全性，及时修复已知的安全漏洞，并保持软件和依赖库的更新。

通过采取这些措施，可以有效地防范 XSS 攻击，保护网站和用户的安全。

### 什么是 ddox 攻击及如何防范?

DDoS（Distributed Denial of Service，分布式拒绝服务）攻击是一种网络攻击手段，攻击者通过控制大量受感染的计算机（称为僵尸网络）同时向目标系统发送大量请求，导致目标系统资源耗尽，无法正常提供服务。

DDoS 攻击的类型
洪水攻击：攻击者向目标发送大量数据包，耗尽目标的网络带宽。

协议攻击：攻击者利用网络协议的漏洞，发送特殊构造的请求，导致目标系统资源耗尽。

应用层攻击：攻击者针对目标系统的特定应用，发送大量请求，耗尽服务器的处理能力或资源。

如何防范 DDoS 攻击
增加带宽：提高网络带宽可以在一定程度上抵御 DDoS 攻击，但这并不能完全解决问题，因为攻击者可能会增加攻击流量。

使用防火墙和入侵检测系统：配置防火墙和入侵检测系统，过滤掉恶意流量，阻止攻击者进入网络。

部署 DDoS 防护设备：使用专门的 DDoS 防护设备或服务，可以有效地识别和过滤恶意流量，保护目标系统。

使用内容分发网络（CDN）：CDN 可以分散请求流量，减轻目标服务器的压力，提高网站的可用性。

限制连接数和请求速率：对目标系统的连接数和请求速率进行限制，防止攻击者消耗过多资源。

启用负载均衡：通过负载均衡技术，将流量分散到多个服务器上，提高系统的抗压能力。

备份和恢复计划：制定备份和恢复计划，确保在遭受 DDoS 攻击时，能够快速恢复服务。

定期审查和更新：定期审查网络安全性，及时修复已知的安全漏洞，并保持软件和依赖库的更新。

### 什么是 csrf 攻击及如何防范?

CSRF（Cross-Site Request Forgery，跨站请求伪造）是一种网络攻击手段，攻击者通过诱导用户在已登录的网站上执行非预期的操作，从而达到攻击目的。例如，攻击者可能诱使用户点击一个恶意链接，导致用户在不知情的情况下转账、修改密码等。

CSRF 攻击的原理
用户登录网站 A，并在浏览器中保存了登录状态（如 Cookie）。
攻击者创建一个恶意网站 B，诱导用户访问。
用户在访问网站 B 时，网站 B 向网站 A 发送请求，携带用户的登录状态。
网站 A 认为这是用户发起的合法请求，执行相应操作。

1. 使用 CSRF 令牌：在表单中添加一个随机生成的 CSRF 令牌，服务器端验证该令牌是否匹配。攻击者无法预测这个令牌，因此无法伪造请求。
2. 验证请求来源：检查 HTTP 请求头中的 Referer 或 Origin 字段，确保请求来自合法的源。
3. 使用 SameSite Cookie 属性：设置 Cookie 的 SameSite 属性为 Strict 或 Lax，限制 Cookie 在跨站请求中的发送。
4. 避免使用 GET 请求执行敏感操作：尽量使用 POST、PUT 或 DELETE 请求执行敏感操作，因为这些请求不容易被第三方网站伪造。
5. 定期审查和更新：定期审查网站的安全性，及时修复已知的安全漏洞，并保持软件和依赖库的更新。

```javascript

<form action="/submit" method="POST">
  <input type="hidden" name="csrf_token" value="random_token">
  <!-- 其他表单字段 -->
  <button type="submit">提交</button>
</form>

app.use((req, res, next) => {
  if (req.headers.referer === 'https://yourdomain.com' || req.headers.origin === 'https://yourdomain.com') {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
});

/* Set-Cookie: session_id=12345; SameSite=Strict; */
```

### CSRF攻击和XSS攻击有什么区别？

CSRF（跨站请求伪造）攻击和XSS（跨站脚本攻击）都是网络安全领域常见的攻击类型，但它们之间存在一些关键区别：

CSRF 攻击
攻击目标：CSRF 攻击的目标是利用用户在已登录网站上的身份执行非预期的操作，如转账、修改密码等。

攻击方式：攻击者通过诱导用户访问恶意网站或点击恶意链接，利用用户浏览器中保存的登录状态（如 Cookie）向目
标网站发送请求。

攻击原理：CSRF 攻击利用了浏览器对已登录网站的会话状态的信任，使攻击者能够在用户不知情的情况下执行操作。

防御措施：使用 CSRF 令牌、验证请求来源、设置 SameSite Cookie 属性等方法可以防御 CSRF 攻击。

 XSS 攻击
攻击目标：XSS 攻击的目标是向目标网站注入恶意脚本，使其在用户的浏览器中执行，从而窃取用户信息、篡改网页内容或进行其他恶意行为。

攻击方式：攻击者通过在目标网站的输入框、评论区等地方插入恶意脚本，当其他用户访问网站时，恶意脚本被执行。

攻击原理：XSS 攻击利用了网站对用户输入的处理不当，使攻击者能够注入并执行恶意脚本。

防御措施：对用户输入进行严格的验证和过滤、输出编码、使用内容安全策略（CSP）等方法可以防御 XSS 攻击。

CSRF 攻击关注的是利用用户身份执行非预期操作，而 XSS 攻击关注的是在用户浏览器中执行恶意脚本。  
CSRF 攻击通常需要用户与恶意网站或链接进行交互，而 XSS 攻击则依赖于网站对用户输入的处理不当。  
防御 CSRF 攻击的方法主要包括使用 CSRF 令牌、验证请求来源等，而防御 XSS 攻击的方法主要包括输入验证、输出编码、使用 CSP 等。

## 前端工程化

### 如何理解前端模块化、前端组件化，二者有何区别?

它们旨在提高代码的可维护性、可复用性和可扩展性。

前端模块化

前端模块化是指将代码分割成独立的、可复用的模块，每个模块负责完成特定的功能。模块化的目的是解耦代码，使得代码更易于组织和维护。在前端开发中，模块化可以通过以下几种方式实现：

CommonJS：一种同步加载模块的规范，主要用于 Node.js 环境。

AMD（Asynchronous Module Definition）：一种异步加载模块的规范，主要用于浏览器环境。

ES6 Modules：ECMAScript 2015 引入的原生模块系统，支持同步和异步加载模块。

前端组件化

前端组件化是指将 UI 划分为独立的、可复用的组件，每个组件负责渲染一部分 UI 并处理相关的交互逻辑。组件化的目的是提高代码的复用性和可维护性，使得开发者能够更高效地构建复杂的 UI。在前端开发中，组件化可以通过以下几种方式实现：

原生 Web Components：一种基于 Custom Elements 和 Shadow DOM 的标准，用于创建可复用的自定义元素。

框架组件系统：如 React、Vue 和 Angular 等前端框架提供的组件系统，支持创建和管理组件。

区别

关注点不同：模块化关注的是代码的组织和管理，将代码分割成独立的模块；而组件化关注的是 UI 的构建和复用，将 UI 划分为独立的组件。

粒度不同：模块化的粒度较大，通常是一个功能模块；而组件化的粒度较小，通常是一个 UI 组件。

实现方式不同：模块化主要通过模块加载器和模块规范（如 CommonJS、AMD 和 ES6 Modules）实现；而组件化主要通过 Web Components 标准和前端框架的组件系统实现。

### 如何理解前后端分离?

它将应用程序的前端（用户界面）与后端（数据处理）进行分离。在这种模式下，前端负责展示和交互，后端负责数据处理和业务逻辑。这种架构模式带来了许多优势，如提高开发效率、降低耦合度、便于维护和部署

前端需要处理更多业务逻辑：前端需要处理一部分原本由后端处理的业务逻辑，这可能会增加前端的开发工作量

不利于SEO：由于页面数据异步渲染，搜索引擎可能无法有效抓取内容，影响网站的搜索引擎优化（SEO）

## webpack

### 有自己配置过 webpack 吗?如果需求是多页面与单页面并行，需要如何配置?

#### MPA

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 多个
  entry: {
    page1: './src/page1/index.js',
    page2: './src/page2/index.js',
    // 添加更多页面入口
  },
  // 单个
  //  entry: './src/spa/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(), // 次构建之前清理输出目录
    new HtmlWebpackPlugin({
      template: './src/page1/index.html',
      filename: 'page1.html',
      chunks: ['page1'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page2/index.html',
      filename: 'page2.html',
      chunks: ['page2'],
    }),
    // 添加更多页面的 HtmlWebpackPlugin 配置
  ],
  module: {
    rules: [
      // 你的其他 loader 配置
    ],
  },
};
// package.json配置多个脚本命令。
 "scripts": {
    "build:mpa": "webpack --config webpack.mpa.config.js",
    "build:spa": "webpack --config webpack.spa.config.js",
    "build": "npm run build:mpa && npm run build:spa"
  }
```

### Webpack 的优点是什么?

1. 模块化支持如CommonJS、AMD、ES6 Modules 等，使得代码可以方便地进行模块化组织和管理。
2. 代码分割：Webpack 支持代码分割，可以将大型应用拆分成多个小块，按需加载，提高应用的加载速度和性能。
3. 热模块替换（HMR）：Webpack 支持热模块替换，可以在不刷新整个页面的情况下，实时更新修改过的模块，提高开发效率。
4. 丰富的插件系统：Webpack 拥有丰富的插件系统，可以通过插件扩展其功能，如压缩、优化、代码检查等
5. 优化功能：Webpack 提供了许多优化功能，如 Tree Shaking、代码压缩、拆分等，有助于减小打包文件的体积，提高应用的加载速度。

6. 易于集成：Webpack 易于与其他工具和框架集成，如 Babel、React、Vue 等，方便开发者构建复杂的应用。

### Webpack 的构建流程是什么?从读取配置到输出文件这个过程尽量说

读取配置文件：Webpack 首先读取项目根目录下的 webpack.config.js 配置文件。这个文件包含了构建过程中所需的各种配置信息，如入口文件、输出路径、加载器、插件等。

解析入口文件：Webpack 根据配置文件中的入口文件路径，找到入口文件并开始解析。解析过程中，Webpack 会递归地读取模块依赖，形成一个依赖树。

加载器处理：对于解析过程中遇到的不同类型的文件（如 JavaScript、CSS、图片等），Webpack 会使用相应的加载器对文件进行处理。加载器会将这些文件转换为 Webpack 可以处理的模块。

插件处理：在构建过程中，Webpack 会执行配置文件中定义的插件。插件可以在构建过程的不同阶段执行特定的任务，如代码压缩、优化、生成 HTML 文件等。

输出文件：经过加载器和插件的处理后，Webpack 会将处理后的模块打包成一个或多个文件，并将这些文件输出到配置文件中指定的输出路径。

优化：在输出文件之前，Webpack 会对打包后的文件进行优化，如删除未使用的代码（Tree Shaking）、压缩代码、拆分代码等。

完成构建：Webpack 完成构建过程，输出最终的文件。

读取配置文件  
  ├── 解析入口文件  
  │   ├── 加载器处理  
  │   └── 插件处理  
  ├── 输出文件  
  │   └── 优化  
  └── 完成构建  

### 说-下 Webpack 的热更新原理

模块热替换：Webpack 在编译过程中，会为每个模块生成一个 ID，并在内存中维护一个模块 ID 和模块实例的映射关系。当修改了一个模块的代码后，Webpack 会重新编译这个模块，并生成一个新的模块 ID。然后，Webpack 会通过 WebSocket 或轮询的方式通知浏览器端的 HMR 客户端，告诉它哪些模块发生了变化。

HMR 客户端：浏览器端的 HMR 客户端是一个由 Webpack 插件生成的 JavaScript 文件，它会监听来自 Webpack 的更新通知。当收到更新通知时，HMR 客户端会根据模块 ID 找到对应的模块实例，并用新的模块实例替换旧的模块实例。

模块替换策略：HMR 客户端在替换模块时，会根据模块的类型采取不同的策略。对于原生 JavaScript 模块，HMR 客户端会直接替换模块实例；对于 CSS 模块，HMR 客户端会通过操作 DOM 来更新样式；对于 HTML 模块，HMR 客户端会重新渲染整个页面。

兼容性处理：为了确保 HMR 在不同浏览器中的兼容性，Webpack 会使用 polyfill 或垫片来填补浏览器之间的差异。

配置：要启用 HMR，需要在 Webpack 配置文件中设置 hot: true，并添加相应的 HMR 插件。例如，在 Webpack 4 中，可以使用 HotModuleReplacementPlugin 插件来启用 HMR。

### 有哪些常见的 Loader?他们是解决什么问题的

1.babel-loader：将 ES6+ 代码转换为浏览器兼容的 ES5 代码
2. css-loader：解析 CSS 文件中的 @import 和 url() 语句，并将 CSS 转换为 JavaScript 模块。解决 CSS 文件导入和 URL 处理问题。
3. style-loader：将 CSS 代码注入到 JavaScript 中,通过`<style>` 标签插入到 HTML 页面中。解决 CSS 样式应用问题。
4. sass-loader：将 Sass/SCSS 代码转换为 CSS 代码
5. file-loader：处理文件（如图片、字体等），将文件复制到输出目录
6. url-loader：将文件（如图片、字体等）转换为 base64 编码的 Data URL

### loader 和 Plugin 的不同?

#### Loader

作用范围：Loader 主要用于处理单个文件或模块，将一种文件类型转换为另一种文件类型。例如，babel-loader 将 ES6+ 代码转换为 ES5 代码，css-loader 将 CSS 文件转换为 JavaScript 模块。

工作时机：Loader 在构建过程中的 module.rules 配置中定义，Webpack 在解析模块时按照配置的顺序依次应用 Loader。

返回值：Loader 返回一个新的模块，该模块可以是转换后的代码、资源 URL 等。

链式调用：多个 Loader 可以链式调用，Webpack 会按照配置的顺序依次应用它们。

#### Plugin

作用范围：Plugin 的作用范围更广泛，可以影响整个构建过程。Plugin 可以在构建过程中的不同阶段执行特定的任务，如代码压缩、优化、生成 HTML 文件等。

工作时机：Plugin 在构建过程中的 plugins 配置中定义，Webpack 在构建的不同阶段调用相应的 Plugin。

返回值：Plugin 通常不返回值，而是在特定阶段执行特定的操作。

独立性：Plugin 是独立的插件系统，可以单独安装和使用，不需要与其他 Plugin 链式调用。

Loader 主要用于处理单个文件或模块，转换文件类型；而 Plugin 则用于影响整个构建过程，执行特定的任务。在实际项目中，Loader 和 Plugin 可以结合使用，以实现更复杂的构建需求。

### 如何利用 Webpack 来优化前端性能

1. 代码分割
2. Tree Shaking消除未使用的代码来减小打包文件体积
3. 压缩代码使用压缩插件（如 TerserWebpackPlugin）
4. 通过配置缓存，可以加快构建速度。例如，使用 cache-loader 缓存编译结果，使用 contenthash 为文件名添加哈希值。
5. 使用 image-webpack-loader 等插件来压缩图片，减小图片文件的体积。对于字体等资源，可以使用 url-loader 和 file-loader 来处理。
6. 将静态资源部署到 CDN，加快资源加载速度。
7. 使用 webpack-bundle-analyzer 插件分析打包结果，找出体积较大的模块，进一步优化

```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
// 2
module.exports = {
  // ...
  mode: 'production',
};
//  3
// webpack.config.js
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};
// 4. 
module.exports = {
  // ...
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'babel-loader'],
      },
    ],
  },
};
// 5
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
};
// 6. 
module.exports = {
  // ...
  output: {
    publicPath: 'https://cdn.example.com/',
  },
};
// 7.
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // ...
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};
```

### 是否写过 Loader 和 Plugin?描述-下编写 loader 或 plugin 的思路?

```javascript
// Loader uppercase
module.exports = function(source) {
  return source.toUpperCase();
};
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'uppercase-loader',
      },
    ],
  },
};
// plugin
class LineCounterPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('LineCounterPlugin', (compilation, callback) => {
      let totalLines = 0;

      Object.keys(compilation.assets).forEach(assetName => {
        if (assetName.endsWith('.js')) {
          const asset = compilation.assets[assetName];
          const source = asset.source();
          totalLines += source.split('\n').length;
        }
      });

      console.log(`Total lines of JavaScript code: ${totalLines}`);
      callback();
    });
  }
}
// 简单的 Plugin 来统计代码行数
module.exports = LineCounterPlugin;
// webpack.config.js
module.exports = {
  // ...
  plugins: [
    new LineCounterPlugin(),
  ],
};
```

### 使用 Webpack 开发时，你用过哪些可以提高效率的插件?

1. Webpack Bundle Analyzer：这个插件可以通过交互式的、可缩放的树状图来可视化webpack输出文件的大小，帮助你识别和优化体积大的模块
2. imagemin-webpack-plugin：用于使用imagemin压缩图像，减小打包文件的大小
3. CleanWebpackPlugin：在每次构建前清理上一次项目生成的捆绑文件，避免文件积累
4. HtmlWebpackPlugin：动态生成HTML文件，自动引入JS和CSS文件，简化部署流程
5. esbuidPlugin

### 什么是长缓存?在 Webpack 中如何做到长缓存优化?

### 如何提高 Webpack 的构建速度?

1.启用缓存
2. 代码分割
3. Tree Shaking
4. 使用多线程
5. 优化 Loader 配置
6. 优化 Plugin 配置

### 怎么实现 Webpack 的按需加载?

1. 使用 import() 动态导入
2. splitChunks
3. Webpack 的 require.ensure() 过时了

```javascript
// 使用动态 import() 按需加载模块
async function loadModule() {
  const module = await import('./module.js');
  module.default();
}
// webpack.config.js
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

### 什么是神奇注释?

### Babel 的原理是什么?

解析（Parsing）：Babel 首先将源代码解析成抽象语法树（AST）。AST 是一种树形数据结构，表示源代码的语法结构。

转换（Transformation）：Babel 遍历 AST，对每个节点应用一系列的转换规则。这些规则定义了如何将 ES6+ 语法转换为 ES5 语法。Babel 的核心库包含许多内置的转换插件，可以处理大部分 ES6+ 特性。

生成（Generation）：经过转换后的 AST 被重新生成为 ES5 代码。这个过程涉及将 AST 节点转换回 JavaScript 代码字符串。

插件系统：Babel 的强大之处在于其插件系统。开发者可以根据需要编写自定义插件来处理特定的语法转换。这使得 Babel 能够支持不断发展的 JavaScript 语法和特性。

预设（Presets）：为了简化配置，Babel 提供了一些预设，这些预设是一组预定义的插件集合。例如，@babel/preset-env 预设包含了将 ES6+ 代码转换为 ES5 代码所需的所有插件。

### 如何写-个 babel 插件?

```javascript
// 将所有的 console.log 语句替换为 console.info。
module.exports = function() {
  // module.exports = function(babel) {
  // const { types: t } = babel;

  return {
    visitor: {
      CallExpression(path) {
        const callee = path.node.callee;
        if (callee.type === 'MemberExpression' && callee.object.name === 'console' && callee.property.name === 'log') {
          callee.property.name = 'info';
        }
      },
    },
  };
};
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    './replace-console-log-with-info.js',
  ],
};
```

#### babel常用方法

babel.types：提供了一系列类型检查和构造函数，用于操作 AST 节点。  
babel.template：提供了一个简单的模板字符串功能，用于生成 AST 节点。

babel.traverse：提供了遍历 AST 的方法，可以用于访问和修改 AST 节点。  
babel.transformFromAst：可以从 AST 转换为源代码。

#### 一些AST节点类型

Identifier：表示变量、函数名或其他标识符。

Literal：表示字面量，如字符串、数字、布尔值等。

VariableDeclaration：表示变量声明，如 var、let、const。

FunctionDeclaration：表示函数声明。

VariableDeclarator：表示变量声明中的初始化表达式。

BlockStatement：表示代码块。

ExpressionStatement：表示表达式语句。

ReturnStatement：表示返回语句。

IfStatement：表示条件语句。

SwitchStatement：表示 switch 语句。

WhileStatement：表示 while 循环。

ForStatement：表示 for 循环。

ForInStatement：表示 for...in 循环。

ForOfStatement：表示 for...of 循环。

NewExpression：表示创建新对象的表达式。

CallExpression：表示函数调用表达式。

MemberExpression：表示成员访问表达式，如 obj.prop。

ArrayExpression：表示数组字面量。

ObjectExpression：表示对象字面量。

BinaryExpression：表示二元表达式，如 a + b。

UnaryExpression：表示一元表达式，如 -a。

UpdateExpression：表示更新表达式，如 a++。

LogicalExpression：表示逻辑表达式，如 a && b。

ConditionalExpression：表示条件表达式，如 a ? b : c。

TemplateLiteral：表示模板字符串。

TaggedTemplateExpression：表示带标签的模板字符串。

ClassDeclaration：表示类声明。

ClassExpression：表示类表达式。

MetaProperty：表示元属性，如 new.target。

ImportDeclaration：表示导入声明。

ExportNamedDeclaration：表示命名导出声明。

ExportDefaultDeclaration：表示默认导出声明。

ExportAllDeclaration：表示导出所有声明。

ImportExpression：表示导入表达式。

ImportDefaultSpecifier：表示默认导入指定。

ImportNamespaceSpecifier：表示命名空间导入指定。

ImportSpecifier：表示导入指定。

FunctionExpression：表示函数表达式。

ArrowFunctionExpression：表示箭头函数表达式。

SpreadElement：表示展开元素，如 ...args。

RestElement：表示剩余元素，如 ...rest。

ArrayPattern：表示数组模式。

ObjectPattern：表示对象模式。

AssignmentExpression：表示赋值表达式，如 a = b。

SequenceExpression：表示序列表达式，如 a, b, c。

ThisExpression：表示 this 表达式。

**Super`除了之前提到的 AST 节点类型，Babel 的 AST 还包括以下一些类型：

YieldExpression：表示 yield 表达式。

AwaitExpression：表示 await 表达式。

TemplateElement：表示模板字符串中的静态部分。

ClassBody：表示类体，包含类的方法和属性。

MethodDefinition：表示类方法定义。

PropertyDefinition：表示类属性定义。

Decorator：表示装饰器。

BindingPattern：表示绑定模式，如解构赋值中的模式。

ObjectPatternProperty：表示对象模式中的属性。

ArrayPatternElements：表示数组模式中的元素。

ForOfStatement：表示 for...of 循环。

ImportAttribute：表示导入声明中的属性。

ExportNamespaceSpecifier：表示命名空间导出指定。

ExportDefaultSpecifier：表示默认导出指定。

ExportSpecifier：表示导出指定。

VariableDeclaratorId：表示变量声明中的标识符。

FunctionParameter：表示函数参数。

ArrowFunctionExpression：表示箭头函数表达式。

ClassProperty：表示类属性。

RestProperty：表示剩余属性，如 ...rest。

SpreadProperty：表示展开属性，如 ...props。

SuperProperty：表示 super 属性。

MetaProperty：表示元属性，如 new.target。

NewTargetExpression：表示 new.target 表达式。

ImportBinding：表示导入绑定。

ExportBinding：表示导出绑定。

ClassImplements：表示类实现的接口。

InterfaceDeclaration：表示接口声明。

TypeAlias：表示类型别名。

TSDeclareFunction：表示 TypeScript 声明的函数。

TSDeclareMethod：表示 TypeScript 声明的方法。

TSPropertySignature：表示 TypeScript 属性签名。

TSMethodSignature：表示 TypeScript 方法签名。

TSIndexSignature：表示 TypeScript 索引签名。

TSFunctionType：表示 TypeScript 函数类型。

TSConstructorType：表示 TypeScript 构造函数类型。

TSImportType`：表示 TypeScript 导入类型。

TSExportAssignment：表示 TypeScript 导出赋值。

TSNamespaceExport：表示 TypeScript 命名空间导出。

TSInterfaceBody：表示 TypeScript 接口体。

TSExpressionWithTypeArguments：表示 TypeScript 带类型参数的表达式。

TSPropertyAssignment：表示 TypeScript 属性赋值。

TSMethodSignature：表示 TypeScript 方法签名。

TSConstructorSignature：表示 TypeScript 构造函数签名。

TSIndexSignature：表示 TypeScript 索引签名。

TSFunctionType：表示 TypeScript 函数类型。

TSConstructorType：表示 TypeScript 构造函数类型。

TSImportType`：表示 TypeScript 导入类型。

TSExportAssignment：表示 TypeScript 导出赋值。

TSNamespaceExport：表示 TypeScript 命名空间导出。

TSInterfaceBody：表示 TypeScript 接口体。

TSExpressionWithTypeArguments：表示 TypeScript 带类型参数的表达式。

TSPropertyAssignment：表示 TypeScript 属性赋值。

### webpack 和 vite 区别(模块化与流的区别)

#### Webpack

Webpack 是一个模块打包器，它将项目中的所有资源（如 JavaScript、CSS、图片等）视为模块，并通过加载器（loader）和插件（plugin）进行处理和优化。Webpack 的构建过程是单线程的，这意味着所有的模块都需要在同一个进程中处理。

Webpack 的主要特点：

模块化：Webpack 支持各种模块系统，如 CommonJS、AMD、ES6 Modules 等，可以将项目中的各种资源视为模块进行处理。
加载器和插件：Webpack 提供了丰富的加载器和插件，可以对资源进行转换、优化和压缩等操作。

代码分割：Webpack 支持代码分割，可以将大型项目拆分成多个小块，按需加载，提高应用的加载速度和性能。

热模块替换（HMR）：Webpack 支持热模块替换，可以在不刷新整个页面的情况下，实时更新修改过的模块。

#### Vite

Vite 是一个基于浏览器原生 ES 模块（ESM）的构建工具，它利用了浏览器对 ESM 的支持来实现快速的开发服务器和按需加载。Vite 的构建过程是多线程的，这意味着它可以并行处理多个模块。

Vite 的主要特点：

流式构建：Vite 利用浏览器原生的 ESM 支持，实现了一种流式构建方式，可以快速启动开
发服务器，并在开发过程中实现按需加载。

模块热替换（HMR）：Vite 也支持模块热替换，可以在不刷新整个页面的情况下，实时更新修改过的模块。

优化依赖预加载：Vite 会分析项目的依赖关系，并在开发服务器启动时预加载这些依赖，从而提高开发速度。

灵活的插件系统：Vite 提供了一个灵活的插件系统，可以方便地扩展其功能。

#### 区别

模块化：Webpack 和 Vite 都支持模块化，但 Vite 更侧重于利用浏览器原生的 ESM 支持来实现快速的开发服务器和按需加载。

构建流程：Webpack 的构建流程是单线程的，而 Vite 利用浏览器原生的 ESM 支持实现了流式构建，可以并行处理多个模块。

开发速度：由于 Vite 利用了浏览器原生的 ESM 支持，它的开发速度通常比 Webpack 更快。

生态系统：Webpack 拥有庞大的生态系统和丰富的插件，而 Vite 相对较新，但它的插件生态系统也在不断发展。

### webpack文件指纹策略:hash chunkhash contenthash

hash：适用于整个构建过程的唯一哈希值，每次构建所有文件名都会变化。

chunkhash：适用于每个代码块的唯一哈希值，只有修改的代码块文件名会变化。

contenthash：适用于文件内容的唯一哈希值，只有内容变化的文件名会变化。

## 研发协同(Git)

### git reset、 git revert 和 git checkout 有什么区别 ?

### rebase 与 merge 的区别?

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

## 一些优化

### 首屏优化该如何去傚?

1.使用路由懒加载
2.非首屏组件使用异步组件
3.首屏不中要的组件延迟加袭
4.静态资源放在CDN上
5.减少首屏上JS、CSS等资源文件的大小
6.使用服务端渲染
7.减少DOM的数量和层级
8.使用精灵图请求
9.做一些loading
18.开启zip压缩
11.图片懒加载

:::tip
[出自抖音哲玄](https://www.douyin.com/search/%E5%93%B2%E7%8E%84?aid=88f86942-7166-49c0-8391-457e1bed5a05&type=general)
:::
