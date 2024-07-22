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

### var、let、const 之间的区别?暂时性死区如何理解?

### Class、extends 是什么，有什么作用?

继承 继承class 的函数以及 数据项

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
