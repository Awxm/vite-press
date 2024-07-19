# BFC

## 什么是BFC？

BFC(Block Formatting Context)块级格式化上下文，它是一个独立的渲染区域，它规定在该区域中，常规流块盒的布局。

1. 开启BFC的区域，是一块独立的渲染区域（如果想要div和其他渲染不一样，需要开启BFC，其实就是给这个元素做一个独立的声明）
2. 隔绝了内部与外部的联系，内部渲染是不会影响到外部
规则：不会和子元素进行外边距合并，它的边框盒不会与浮动元素重叠，它的高度需要计算浮动元素

## 了解一些基本概念

### 常规流，块盒

常规流块盒。总宽度就是：margin+pading+border+content= 包含块的宽度

1. 水平方向上，撑满整个包含块宽度，
2. 常规流块盒在垂直方向上，依次摆放（因为水平撑满包含块宽度垂直依次摆放）
3. 外边距无缝相邻，margin会合并
4. 可能会产生**margin塌陷**
5. 父元素无视浮动元素会产生**高度坍塌**
6. 正常元素可能会**被浮动元素覆盖**（正常元素在浮动元素之后）

根源来自浏览器，因为我们写完的所有元素，最后都是去浏览器解析的，并且浏览器虚渲染到屏幕，为什么产生问题是因为渲染规则，BFC 简单点说就是一个空间，这个空间上面有一个单独的渲染规则

### BFC渲染区域

这个区域由某个html元素创建，以下元素会在其内部创建BFC:

1. 根元素 意味着html元素创建的BFC区域，覆盖了网页中所有的元素
2. 浮动和绝对定位元素
3. overflow不为visible的块盒

## BFC需要解决什么问题

1. 子元素不会产生margin塌陷，以及不会和其他子元素产生margin合并
2. 自身高度不会因为子元素产生高度坍塌（高度计算不会无视父元素）
3. 自己不会被其他浮动元素所覆盖（不会与浮动元素重叠，会避开浮动元素排布）

无外乎就是解决 浮动和margin问题

## 如何开启BFC?

1. 根元素（HTML）
2. 设置浮动舒服float
3. position属性（需要是absolute或fixed）
4. overflow属性只要不是visible
5. inline-block元素
6. 设置display属性为flow-root
7. 表格元素
8. 伸缩项目（flex盒子内的item）

## 案例

### margin 塌陷

```html
    <div class="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <!-- 这时候就产生了margin塌陷 -->
    <style>
        .container {
            width: 500px;
            background-color: red;
        }
    
        .item {
            margin: 20px;
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <!-- 如何解决 -->
        <style>
        .container {
            width: 500px;
            background-color: red;
            /* float: left;
            overflow: hidden;
            position:absolute; */
        }
    </style>

```

### 高度坍塌

```html
    <div class="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <style>
        .container {
            width: 500px;
            background-color: red;
        }
    
        .item {
            float: left;
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <!-- 解决 -->
    这时候由于包括块元素的高度是自适应的，所以就会产生高度坍塌
    <style>
        .container {
            width: 500px;
            background-color: red;
            /* float: left;
            overflow: hidden;
            position:absolute; */
        }
    </style>

```

### 自己不会被其他浮动元素所覆盖

```html
    <div class="item1"></div>
    <div class="item2"></div>
    <style>
        .div {
            width: 100px;
            height: 100px;
        }
    
        .item1 {
            float: left;

            background-color: red;
        }
    
        .item2 {
            background-color: blue;
            /* float: left;
            overflow: hidden;
            position:absolute; */
        }
    </style>
    <!-- 解决 -->
    <style>
         .item2 {
            background-color: blue;
            /* float: left;
            overflow: hidden;
            position:absolute; */
          }
    </style>

```
