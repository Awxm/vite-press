# 精选模块

## 1 HTML模块

1 如何理解HTML语义化
2 H5的新特性有哪些
3 说一下 HTML5 drag api
4 iframe有那些缺点
5 如何实现浏览器内多个标签页之间的通信
6 简述一下src与href的区别
7 知道的网页制作会用到的图片格式有哪些
8 script标签中defer和async的区别
9 说一下 web worker
10 用一个div模拟textarea的实现
11 介绍下资源预加载 prefetch/preload
12 介绍下 viewport
13 如何解决a标点击后hover事件失效的问题?
14 点击一个input依次触发的事件
15 有写过原生的自定义事件吗
16 addEventListener和attachEvent的区别？
17 addEventListener函数的第三个参数
18 DOM事件流是什么？
19 冒泡和捕获的具体过程
20 关于一些兼容性
21 如何阻止冒泡和默认事件(兼容写法)
22 所有的事件都有冒泡吗？
23 拖拽有哪些知识点
24 offset、scroll、client的区别
25 target="_blank"有哪些问题？
26 children以及childNodes的区别
27 HTMLCollection和NodeList的区别

## 2 CSS模块

1 盒模型
2 BFC
3 层叠上下文
4 居中布局
元素水平垂直居中的方法有哪些？如果元素不定宽高呢？
左右居中
上下居中
5 选择器权重计算方式
6 清除浮动
7 link 与 @import 的区别
8 CSS3的新特性
9 CSS动画和过渡
transition 实现渐变动画
transform 转变动画
animation 实现自定义动画
用css3动画使一个图片旋转
10 有哪些方式（CSS）可以隐藏页面元素
11 说说em/px/rem/vh/vw区别
12 flex布局
13 关于伪类 LVHA 的解释
14 calc函数
15 伪类和伪元素
16 浏览器是怎样解析 CSS 选择器的
17 浏览器如何判断是否支持 webp 格式图片
18 CSS加载问题
19 文字单超出显示省略号
20 页面变灰
21 CSS中可继承的属性
22 常规流(文档流)是个怎样的排列关系
23 inline-block的使用场景
24 position: fixed什么时候会失效？
25 回流（reflow）和重绘（repaint）的理解
分析
如何触发
如何避免
26 GPU加速的原因
27 说说will-change
28 z-index和background的覆盖关系
29 移动端中css你是使用什么单位
30 说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别
31 在移动端中怎样初始化根元素的字体大小
32 移动端中不同手机html默认的字体大小都是一样的吗
33 line-height 如何继承
34 css 怎么开启硬件加速(GPU 加速)
35 flex:1 是哪些属性组成的
36 css选择器有哪些？优先级？哪些属性可以继承？
37 flex弹性盒布局模型及适用场景？
38 介绍一下grid网格布局
39 什么是响应式设计？响应式设计的基本原理是什么
40 如果要做优化，CSS提高性能的方法有哪些？
41 如何实现单行／多行文本溢出的省略样式？
42 让Chrome支持小于12px 的文字方式有哪些
43 说说对CSS预编语言的理解？有哪些区别?
44 编程题
画一条 0.5px 的线
如何画一个三角形
圆？半圆？椭圆？
CSS画圆半圆扇形三角梯形
两栏布局：左边定宽，右边自适应方案
三栏布局：左右两边宽度固定中间自适应

## 3 js模块

1 数据类型基础
1.1 JS内置类型
1.2 null和undefined区别
1.3 null是对象吗？为什么？
1.4 '1'.toString()为什么可以调用？
1.5 0.1+0.2为什么不等于0.3？如何让其相等
1.6 如何理解BigInt
1.7 JS 整数是怎么表示的
1.8 Number() 的存储空间是多大？如果后台发送了一个超过最大自己的数字怎么办
2 数据类型检测
2.1 typeof类型判断
2.2 typeof 于 instanceof 区别
2.3 Object.is和===的区别
2.4 总结
3 数据类型转换
3.1 转化规则
3.2 转Boolean
3.3 对象转原始类型是根据什么流程运行的
3.4 如何让if(a == 1 && a == 2)条件成立
3.5 四则运算符
3.6 比较运算符
3.7 [] == ![]结果是什么？为什么？
3.8 == 和 ===有什么区别
4 闭包
4.1 闭包产生的原因
4.2 闭包有哪些表现形式
4.3 如何解决下面的循环输出问题
4.4 闭包的几种使用场景
5 原型和原型链链
5.1 原型/构造函数/实例
5.2 原型对象和构造函数有何关系
5.3 能不能描述一下原型链
6 继承
6.1 方式1: 借助call
6.2 方式2: 借助原型链
6.3 方式3：将前两种组合
6.4 方式4: 组合继承的优化1
6.5 方式5(最推荐使用): 组合继承的优化2
6.6 ES6的extends被编译后的JavaScript代码
6.7 从设计思想上谈谈继承本身的问题
6.8 继承-简版
7 this
8 内存机制
9 执行上下文
10 变量提升
11 模块化
12 异步编程
12.1 浏览器中的Event loop
12.2 Node 中的 Event loop
12.3 实现一个Promise A+ 规范
12.4 setTimeout、Promise、Async / Await 的区别
12.5 setTimeout(fn, 0)多久才执行，Event Loop
12.6 async原理
13 内存泄露
13.1 Chrome devTools查看内存情况
13.2 内存泄漏的场景
14 垃圾回收机制
15 深浅拷贝
16 对象的几种创建方式
16.1 工厂模式,创建方式
16.2 构造函数模式
16.3 使用原型模式
16.4 组合使用构造函数模式和原型模式
16.5 动态原型模式
17 数组相关
17.1 数组常用方法
17.2 Array(3)和Array(3, 4)的区别？
17.3 请创建一个长度为100，值都为1的数组
17.4 请创建一个长度为100，值为对应下标的数组
17.5 如何转化类数组成数组
17.6 forEach中return有效果吗？如何中断forEach循环？
17.7 JS判断数组中是否包含某个值
17.8 JS中flat---数组扁平化
18 操作DOM
18.1 说说有几种类型的DOM节点
18.2 操作DOM节点方法
19 Ajax总结
19.1 Ajax 有那些优缺点
19.2 关于http,XMLHttpRequest,Ajax的关系
19.3 XMLHttpRequest的发展历程是怎样的？
19.4 使用XMLHttpRequest封装一个get和post请求
20 定时器
20.1 setInterval存在哪些问题？
20.2 链式调用setTimeout对比setInterval
20.3 实现比 setTimeout 快 80 倍的定时器
22.4 说一下requestAnimationFrame
22.5 requestAnimationFrame对比setTimeout
21 谈谈你对for in/for of的理解
22 JavaScript 实现对上传图片的压缩？

## 4 ES6模块

1 ES5、ES6和ES2015有什么区别?
2 babel是什么，有什么作用?
3 let有什么用，有了var为什么还要用let？
4 举一些ES6对String字符串类型做的常用升级优化?
5 举一些ES6对Array数组类型做的常用升级优化
6 举一些ES6对Number数字类型做的常用升级优化
7 举一些ES6对Object类型做的常用升级优化
8 举一些ES6对Function函数类型做的常用升级优化?
9 Symbol是什么，有什么作用？
10 Set是什么，有什么作用？
11 Map是什么，有什么作用？
12 Proxy是什么，有什么作用？
13 Reflect是什么，有什么作用？
14 Promise是什么，有什么作用？
15 Iterator是什么，有什么作用？
16 for...in 和for...of有什么区别？
17 Generator函数是什么，有什么作用？
generator 原理
Generator 实现
18 async函数是什么，有什么作用？
19 Class、extends是什么，有什么作用？
20 module、export、import是什么，有什么作用？
21 日常前端代码开发中，有哪些值得用ES6去改进的编程优化或者规范？
22 ES6的了解
23 说说你对Promise的理解
24 Promise 的构造函数
25 谈一谈你了解ECMAScript6的新特性？
26 Object.is() 与原来的比较操作符 ===、== 的区别？
27 什么是 Babel
28 symbol 有什么用处
29 模块化
30 箭头函数的特点
31 ES5 / ES6 的继承除了写法以外还有什么区别
32 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？
33 介绍下 Set、Map、WeakSet 和 WeakMap 的区别
34 Promise.all() 和 Promise.allSettled()的比较
Promise.allSettled()
Promise.all()

## 5 浏览器模块

1 跨标签页通讯
2 浏览器架构
3 渲染机制
3.1 浏览器的渲染机制一般分为以下几个步骤
3.2 图层
3.3 重绘与回流
3.4 JavaScript 会阻塞 DOM 生成
3.5 缩短白屏时长，可以有以下策略
4 跨域
4.1 JSONP
4.2 CORS
4.3 nginx反向代理
4.4 Node 中间层接口转发
4.5 Proxy
4.6 websocket
4.7 document.domain（不常用）
4.8 postMessage（不常用）
4.9 window.name（不常用）
4.10 扩展阅读
5 浏览器缓存
6.1 强缓存
6.2 协商缓存（对比缓存）
6.3 缓存场景
6.4 讲讲304
6.5 强缓存、协商缓存什么时候用哪个
6.6 缓存总结
6.7 cookie和localSrorage、session、indexDB 的区别
6.8 什么是 Cookie
6.9 什么是 Session
6.10 Cookie 和 Session 的区别
6 内存泄露
7 浏览器API
7.1 Web Worker
7.2 Service Worker
7.3 requestAnimationFrame用法
1.页面可见
2.动画帧请求回调函数列表
3.屏幕刷新频率
4.动画原理
5.requestAnimationFrame用法
6.与setTimeout对比
7.优雅降级
8 页面加载执行
8.1 浏览器事件循环
8.2 怎么判断页面是否加载完成
8.3 css 加载会造成阻塞吗 ？
8.4 为什么 JS 阻塞页面加载 ?
8.5 DOMContentLoaded 与 load 的区别 ?
8.6 什么是 CRP,即关键渲染路径? 如何优化
9 history路由和hash路由
10 performance相关
window.performance.getEntries()

## 7 Vue模块

1 谈谈你对MVVM的理解
2 谈谈你对SPA单页面的理解
3 Vue2.x 响应式数据原理
4 Vue3.x 响应式数据原理
proxy基本用法
说说你对 proxy 的理解，Proxy 相比于 defineProperty 的优势
5 Vue中如何检测数组变化
6 Vue中如何进行依赖收集？
7 Vue实例挂载的过程中发生了什么
简单
vue2.x详细
8 理解Vue运行机制全局概览
全局概览
初始化及挂载
编译
响应式
Virtual DOM
更新视图
再看全局
9 如何理解Vue中模板编译原理
Vue complier 实现
10 Vue生命周期相关
Vue的生命周期方法有哪些
父组件可以监听到子组件的生命周期吗
Vue生命周期钩子是如何实现的
Vue 的父子组件生命周期钩子函数执行顺序
11 Vue.mixin的使用场景和原理
12 Vue组件data为什么必须是个函数？
13 nextTick在哪里使用？原理是？
14 computed和watch相关
computed和watch区别
vue3中 watch、watchEffect区别
Watch中的deep:true是如何实现的
Vue computed 实现
watch 原理
15 Vue.set的实现原理
16 Vue diff算法相关问题
Vue为什么需要虚拟DOM？优缺点有哪些
Vue中diff算法原理
Vue的diff算法详细分析
Vue2和Vue3和React三者的diff算法有什么区别
既然Vue通过数据劫持可以精准探测数据变化，为什么还需要虚拟DOM进行diff检测差异
请说明Vue中key的作用和原理，谈谈你对它的理解
17 Vue组件相关
Vue组件为什么只能有一个根元素
谈一谈对Vue组件化的理解
Vue组件渲染和更新过程
异步组件是什么？使用场景有哪些？
为什么要使用异步组件
函数式组件优势和原理
Vue组件之间通信方式有哪些
组件中写name属性的好处
Vue.extend 作用和原理
Vue中如何扩展一个组件
子组件可以直接改变父组件的数据么，说明原因
什么是递归组件？举个例子说明下？
Vue中组件和插件有什么区别
18 为什么Vue采用异步渲染
19 v-if和v-show区别
20 v-if和v-for哪个优先级更高
21 Vue的事件绑定原理
22 Vue 是如何实现数据双向绑定的
双向绑定的原理是什么
实现双向绑定
23 v-model双向绑定原理
v-model实现原理
Vue中修饰符.sync与v-model的区别
24 什么是作用域插槽
25 keep-alive原理
keep-alive 使用场景和原理
怎么缓存当前的组件？缓存后怎么更新
26 Vue路由相关
Vue-router基本使用
vue-router 动态路由是什么
router-link和router-view是如何起作用的
Vue-router 除了 router-link 怎么实现跳转
Vue-router 路由模式有几种
Vue路由hash模式和history模式
了解history有哪些方法吗？说下它们的区别
如何监听 pushState 和 replaceState 的变化呢？
Vue路由的钩子函数
$route和$router的区别
vue-router 路由钩子函数是什么 执行顺序是什么
vue-router 有哪几种导航守卫
vue-router守卫
vue-router中如何保护路由
怎么实现路由懒加载呢
Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？
如果让你从零开始写一个vue路由，说说你的思路
27 Vuex相关
vuex是什么？怎么使用？哪种功能场景使用它？
Vuex中actions和mutations有什么区别
怎么监听vuex数据的变化
Vuex 页面刷新数据丢失怎么解决
Vuex 为什么要分模块并且加命名空间
你有使用过vuex的module吗？
你觉得vuex有什么缺点
用过pinia吗？有什么优点？
28 对Vue SSR的理解
29 Vue 修饰符有哪些
vue中修饰符分为以下五种
应用场景
30 说说 vue 内置指令
31 怎样理解 Vue 的单向数据流
32 写过自定义指令吗？原理是什么
基本使用
原理
vue3.2 自定义全局指令、局部指令
33 Vue3相关
Vue3 对 Vue2 有什么优势
Vue3 和 Vue2 的生命周期有什么区别
Vue3如何实现响应式
如何理解Composition API和Options API
Composition API 如何实现逻辑复用
Composition API 和 React Hooks 的对比
Vue3的设计目标是什么？做了哪些优化
Vue3有了解过吗？能说说跟vue2的区别吗？
你知道哪些Vue3新特性?
Vue3速度快的原因
Composition API 与 Options API 有什么不同
ref如何使用
toRef和toRefs如何使用和最佳方式
深入理解为什么需要ref、toRef、toRefs
ref和reactive异同
vue3升级了哪些重要功能
Vue3.2 setup 语法糖汇总
v-model参数的用法
watch和watchEffect的区别
setup中如何获取组件实例
Vite 为什么启动非常快
说说Vue 3.0中Tree shaking特性？举例说明一下？
用Vue3.0 写过组件吗？如果想实现一个 Modal你会怎么设计？
34 Vue中v-html会导致哪些问题
35 说下$attrs和$listeners的使用场景
36 在Vue中使用插件的步骤
37 vue-cli 工程技术集合介绍
构建的 vue-cli 工程都到了哪些技术，它们的作用分别是什么
vue-cli 工程常用的 npm 命令有哪些
请说出vue cli项目中src目录每个文件夹和文件的用法
38 delete和Vue.delete删除数组的区别？
39 v-on可以监听多个方法吗？
40 v-once的使用场景有哪些
41 Vue Ref的作用
42 scoped样式穿透
43 Class 与 Style 如何动态绑定
44 Vue为什么没有类似于React中shouldComponentUpdate的生命周期
45 SPA、SSR的区别是什么
46 vue-loader是什么？它有什么作用？
47 说说你对slot的理解？slot使用场景有哪些
slot是什么
slot使用场景
slot分类
slot原理分析
48 Vue.observable你有了解过吗？说说看
Observable 是什么
使用场景
原理分析
49 Vue中的过滤器了解吗？过滤器的应用场景有哪些？
如何用
定义filter
应用场景
原理分析
50 Vue项目中有封装过axios吗？主要是封装哪方面的？
axios是什么
为什么要封装
如何封装
51 说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢
为什么要划分
目录结构
52 从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织
53 vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做
是什么
如何做
54 Vue项目中你是如何解决跨域的呢
跨域是什么
如何解决
55 Vue项目本地开发完成后部署到服务器后报404是什么原因呢
如何部署
404问题
解决方案
56 实际工作中，你总结的vue最佳实践有哪些
57 vue 中使用了哪些设计模式
58 如果让你从零开始写一个vuex，说说你的思路
59 使用vue渲染大量数据时应该怎么优化？说下你的思路！
60 动态给vue的data添加一个新的属性时会发生什么？怎样解决？
Vue.set()
Object.assign()
$forceUpdate
小结
61 你是怎么处理vue项目中的错误的？
62 SPA首屏加载速度慢的怎么解决
什么是首屏加载
加载慢的原因
解决方案
小结
63 Vue中常见性能优化
64 Vue项目性能优化-详细
代码层面的优化
Webpack 层面的优化
基础的 Web 技术优化
65 Vue与Angular以及React的区别？
Vue与AngularJS的区别
Vue与React的区别
66 Vue2高级用法
自定义组件model
vue3自定义组件model
vue2 slot
vue2动态组件
vue2异步组件
67 Vue面试考察的高频原理
响应式原理
vdom和diff算法
模板编译
组件渲染更新过程（重点掌握）
前端路由原理
68 Vue面试考点答题分析
请说一下响应式数据的理解
Vue如何检测数组变化
Vue中模板编译原理
生命周期钩子是如何实现的
Vue.mixin的使用场景和原理
nextTick在哪里使用?原理是
Vue为什么需要虚拟DOM
Vue中的diff原理
Vue中computed和watch的区别
Vue.set方法是如何实现的
Vue.use是干什么的?原理是什么
vue-router有几种钩子函数?具体是什么及执行流程是怎样的

## Node模块

1 package.json版本号规则
2 package.json 与 package-lock.json 的关系
3 npm 模块安装机制
4 模块化的差异 AMD CMD COMMONJS ESMODULE
5 Node 的 Event Loop: 6个阶段
6 Koa相关
koa洋葱模型怎么实现的
如果中间件中的next()方法报错了怎么办
co的原理是怎样的
7 Express、koa实现原理以及对比
8 请介绍一下 require 的模块加载机制
9 exports.xxx=xxx 和 Module.exports={}有什么区别
10 Node 的异步 I/O
请介绍一下 Node 事件循环的流程
在每个 tick 的过程中，如何判断是否有事件需要处理呢
描述一下整个异步 I/O 的流程
11 V8 的垃圾回收机制
如何查看 V8 的内存使用情况
V8 的内存限制是多少，为什么 V8 这样设计
V8 的内存分代和回收算法请简单讲一讲
12 Buffer 模块
新建 Buffer 会占用 V8 分配的内存吗
Buffer.alloc 和 Buffer.allocUnsafe 的区别
Buffer 的内存分配机制
Buffer 乱码问题
13 webSocket
webSocket 与传统的 http 有什么优势
webSocket 协议升级简述一下
14 https
https 用哪些端口进行通信，这些端口分别有什么用
身份验证过程中会涉及到密钥， 对称加密，非对称加密，摘要的概念，请解释一下
为什么需要 CA 机构对证书签名
https 验证身份也就是 TSL/SSL 身份验证的过程
15 进程通信
请简述一下 node 的多进程架构
请问创建子进程的方法有哪些，简单说一下它们的区别
实现一个 node 子进程被杀死，然后自动重启代码的思路

## 前端工程相关

1 webpack的基本配置
2 webpack高级配置
配置多入口打包
抽离CSS文件
抽离公共代码splitChunks，避免多次打包
3 webpack性能优化-构建速度
优化babel-loader
IgnorePlugin
noParse
happyPack
parallelUglifyPlugin
自动刷新
热更新
优化打包速度完整代码
DllPlugin 动态链接库
4 webpack性能优化-产出代码（线上运行）
5 webpack原理简述
1.1 核心概念
1.2 工作流程 (加载 - 编译 - 输出)
1.3 模块包装
1.4 webpack的打包原理
1.5 webpack的打包原理详细
1.6 总结
6 webpack热更新原理
7 webpack Loader
8 webpack Plugin
实现一个编译结束退出命令的插件
9 webpack编译优化
优化webpack打包速度
10 webpack import()原理
动态导入原理
webpack中如何实现动态导入？
11 webpack有哪几种文件指纹？
12 webpack中如何处理图片的？
13 webpack常用插件总结
14 抽象语法树AST
15 Babel环境搭建和基本配置
16 使用babel-loader会有哪些问题？可以怎样优化？
17 Babel 原理
18 Babel是如何编译Class的？
19 Babel Polyfill是什么
20 Babel Runtime
21 Tree Shaking原理是什么
对tree-shaking的了解
原理
22 Vite了解吗
Vite 特点
Vite 为什么启动非常快
手写实现
23 面试真题
前端为何打包和构建
module chunk bundle区别
loader和plugin区别
babel和webpack的区别
babel-polyfill和babel-runtime的区别
webpack如何实现懒加载
为何proxy不能被polyfill
webpack优化
优化构建速度
优化产出代码

## 移动多端开发

1 移动端适配
适配方案
2 移动端300ms延迟
3 如何解决移动端 Retina 屏 1px 像素问题
4 如何解决移动端击穿（穿透）问题
5 移动端的兼容问题
6 JSBridge原理是什么？如何设计一个JSBridge？
6.1 JSBridge原理
6.2 JsBridge的核心
6.3 为什么是‘JS’Bridge
6.4 应用场景
6.5 JSBridge实现 —— Native端调用Web端代码
6.6 JSBridge实现 —— Web端调用Native端代码（拦截URL Schema）
6.7 JSBridge实现 —— Web端调用Native端代码（注入api)

## 小程序模块

1 登录
2 图片导出
3 数据统计
4 工程化
5 小程序架构
6 WXML && WXSS
7 小程序的问题
8 授权获取用户信息流程
9 性能优化
10 wepy vs mpvue
11 mpvue

## 前端安全模块

1 代码注入XSS
1.1 如何攻击
1.2 如何防御
1.3 cookie 如何防范 XSS 攻击
2 跨站请求伪造CSRF
CSRF怎么获取用户的登录态
cookie通常是不能跨域访问的，那问什么会有csrf攻击
总结
3 浏览器同源策略 SOP
3.1 同源
3.2 限制
3.3 绕过跨域
3.4 浏览器同源策略与ajax
4 跨域资源共享 CORS
4.1 简单请求
4.2 预检请求
4.3 CORS 与 cookie
5 密码安全

## 性能优化相关

1 性能优化方式
1.1 DNS 预解析
1.2 缓存
1.3 使用 HTTP / 2.0
1.4 预加载
1.5 预渲染
1.6 懒执行与懒加载
1.7 文件优化
1.8 其他
2 首屏渲染优化
3 页面基础优化
4 性能优化方向
4.1 工程化方向
4.2 细节方向
5 长列表优化
vue-virtual-scroll-list优化长列表
Object.freeze优化长列表
6 卡顿问题解决
7 编码优化
8 如何根据chrome的timing优化
8.1 性能优化API
8.2 检测工具
8.3 前端指标
9 Vue性能优化
9.1 vue首屏加载优化有哪些方案么
9.2 编码阶段
9.3 用户体验：
9.4 SEO优化
9.5 打包优化
10 vue1.X，vue2.X，vue3 框架分析性能
10.1 Vue1.x （特点：响应式）
10.2 Vue2.x （特点：组件级响应式，组件内部vdom diff）
10.3 Vue3 （特点：proxy做响应式：静态标记、按需更新）

## HTTP模块

1 HTTP 报文的组成部分
2 常见状态码
3 从输入URL到呈现页面过程
3.1 简洁
3.2 详细
4 TCP、UDP相关
4.1 UDP 和 TCP有什么区别
4.2 TCP为什么要三次握手
4.3 三次握手过程中可以携带数据吗
4.4 TCP的四次挥手
4.5 TCP 和 UDP 的区别
4.6 HTTP和TCP的不同
5 HTTP2相关
5.1 说一下 http2.0
5.2 HTTP2和HTTP1有什么区别
5.3 http/2为什么要做头部压缩，实现原理是什么？
5.4 http/2的Server Push有什么优点
5.5 谈谈你对多路复用的理解
6 https相关
6.1 HTTPS加的一层SSL在七层中哪个位置
6.2 https 协议的优点
6.3 https 协议的缺点
6.4 http与https区别
6.5 https传输的具体过程
6.6 HTTPS的整体过程分为证书验证和数据传输阶段
6.7 介绍一下https的握手过程
6.8 为什么https数据传输使用对称加密
6.9 介绍下https中间人攻击的过程
6.10 HTTPS 握手过程中，客户端如何验证证书的合法性
6.11 问题
6.12 数字签名？它是什么
6.13 谈谈对数字证书的理解
6.14 为什么说数字证书就能对通信方的身份进行验证呢
6.15 请详细的说一下HTTPS它的加密传输过程，涉及到哪些算法呢？
6.16 描述一下RSA握手
6.17 ECDHE握手和RSA握手又有什么区别呢
6.18 你知道TSL1.3版本吗？它较TSL1.2做了哪些改进呢？
6.19 介绍下 HTTPS 中间人攻击
6.20 http/https 协议总结
7 WebSocket的实现和应用
7.1 什么是 WebSocket
7.2 WebSocket 是什么样的协议，具体有什么优点
7.3 理解WebSocket协议的底层原理、与HTTP的区别
8 Token、cookie、Session区别
8.1 Cookie 和 session 的区别
8.2 cookie 和 token 都存放在 header 中，为什么不会劫持 token？
8.3 介绍下如何实现 token 加密
9 一个图片 url 访问后直接下载怎样实现
10 fetch 发送 2 次请求的原因
11 GET 和 POST 的区别
12 301 和 302 的区别
13 DNS的作用、DNS解析的详细过程，DNS优化原理
14 简单请求和复杂请求
15 Http请求中的keep-alive有了解吗
16 管道机制的作用是什么
17 什么情况下会触发option请求
18 GET可以上传图片吗
19 CDN的作用和原理
如何捕获CDN上的js运行时导致的详细错误信息？
20 强缓存命中发生了什么？
默认的强制缓存时间是多少？
21 CORS跨域的原理
CORS的哪些是简单请求？
CORS的预检请求具体是怎样的？
为什么简单请求不需要预检？
复杂请求预检检查什么东西？
如果CORS附带身份凭证要怎样做？
如何减少CORS预请求的次数？
22 在深圳的网页上输入百度，是怎么把这个请求发到北京的
23 为什么使用多域名部署？
24 页面10张img，http1是怎样的加载表现？怎样解决的？
25 说一说SSO单点登录
26 说一说OAuth
27 HTTP 中的 301、302、303、307、308 响应状态码

## 常用设计模式

1 创建型-工厂模式
1.1 简单工厂模式
1.2 抽象工厂模式
2 创建型-单例模式
2.1 单例模式的实现思路
2.2 生产实践：Vuex中的单例模式
2.3 单例模式——面试真题
2.4 实现一个全局的模态框
3 结构型-装饰器模式
3.1 装饰器模式初相见
3.2 深入装饰器原理
3.3 装饰器语法糖背后的故事
3.4 将“属性描述对象”交到你手里
3.5 React中的装饰器：HOC
3.6 使用装饰器改写 Redux connect
4 结构型-适配器模式
4.1 兼容接口
4.2 生产实践：axios中的适配器
5 结构型-代理模式
5.1 ES6中的Proxy
5.2 “婚介所”的实现
5.3 事件代理
5.4 虚拟代理
5.5 缓存代理
6 行为型-策略模式
6.1 先来看一个真实场景
6.2 if-else 侠，人人喊打
6.3 重构询价逻辑
6.4 总结
7 行为型-状态模式
7.1 一台咖啡机的诞生
7.2 改造咖啡机的状态切换机制
7.3 开放封闭
7.4 进一步改造
7.5 状态模式复盘
8 行为型-观察者模式
8.1 生活中的观察者模式
8.2 在实践中理解定义
8.3 Vue数据双向绑定（响应式系统）的实现原理
8.4 实现一个Event Bus / Event Emitter
8.5 观察者模式与发布-订阅模式的区别是什么？
9 行为型-迭代器模式
9.1 “公元前”的迭代器模式
9.2 ES6对迭代器的实现
9.3 实现一个迭代器生成函数
10 中介者模式
11 享元模式

## 框架通识

1 MVVM
2 路由原理
3 Virtual Dom
4 Diff算法
4.1 React-Diff
4.2 Vue2.X Diff —— 双端比较
4.3 Vue3 Diff —— 最长递增子序列

## 排序算法

冒泡排序
实现
优化
单向冒泡
双向冒泡
选择排序
实现
插入排序
实现
优化
拆半插入
希尔排序
归并排序
快速排序
实现一
实现二
堆排序
实现
计数排序
实现
桶排序
基数排序

## 计算机通识

一、网络
1 UDP
2 TCP
3 HTTP
4 DNS
二、数据结构
2.1 栈
2.2 队列
2.3 链表
2.4 树
2.5 堆
三、算法
3.1 时间复杂度
3.2 位运算
3.3 排序
3.4 链表
3.5 树

## 面试集合

一、准备：简历编写和面试前准备
准备一份合适的简历
推荐使用 PDF 版本的简历
简历最好要有针对性地来写
简历是面试时「点菜」用的菜单
拿到面试邀请之后做的准备工作
面试中出现的常规问题
利用脑图来梳理知识点

二、 一面 1：基础知识点与高频考题解析
知识点梳理
变量类型
typeof
instanceof
值类型 vs 引用类型
原型和原型链
原型链中的this
作用域和闭包
执行上下文
this
作用域
作用域链
闭包
异步
ES6/7 新标准的考查
Set 和 Map
Promise

三、一面 2：JS-Web-API 知识点与高频考题解析
知识点梳理
BOM
DOM
事件
Ajax
跨域
存储
小结

四、一面 3：CSS-HTML 知识点与高频考题解析
知识点梳理
选择器的权重和优先级
盒模型
浮动float
定位 position
flex布局
如何实现居中对齐？
理解语义化
CSS3 动画
重绘和回流
小结

五、一面 4：从容应对算法题目
知识点梳理
数据结构
前端常遇见的数据结构问题
算法的效率是通过算法复杂度来衡量的
人人都要掌握的基础算法
快排和二分查找
面试遇见不会的算法问题怎么办
正则匹配解题
小结

六、一面 5：浏览器相关知识点与高频考题解析
知识点梳理
加载页面和渲染过程
性能优化
详细解释
Web 安全

七、一面 6：开发环境相关知识点与高频考题解析
知识点梳理
IDE
Git
关于 SVN
Linux 基础命令
前端构建工具
调试方法
小结

八、二面 1：如何回答常见的软技能问题
程序员应该具备的软技能
常见的软技能问题和提升
小结

九、二面 2：如何介绍项目及应对项目细节追问
怎样介绍自己做过的一个项目
没有做过大型项目怎么办
项目细节和技术点的追问
小结

十、HR 面：谈钱不伤感情
匹配度考查
谈薪资
准确定位和自我估值
跟 HR 沟通的技巧

十一、其他：面试注意事项
注意社交礼仪
舒适但不随意的着装
约个双方都舒服的面试时间
面试后的提问环节
面试禁忌
最好自己带电脑
面试后的总结和思考

十二、总结
准备阶段
技术面部分
非技术面试部分
HR 面
补充说明
Node.js部分
前端框架（库）
移动开发

### 集合优化

一、前言
知识体系： 从一道面试题说起
从原理到实践：各个击破
二、网络篇 1：webpack 性能调优与 Gzip 原理
webpack 的性能瓶颈
webpack 优化方案
构建结果体积压缩
Gzip 压缩原理
三、网络篇 2：图片优化——质量与性能的博弈
2018 年，图片依然很大
不同业务场景下的图片方案选型
小结
四、存储篇 1：浏览器缓存机制介绍与缓存策略剖析
HTTP 缓存机制探秘
HTTP 缓存决策指南
MemoryCache
Service Worker Cache
Push Cache
小结
五、存储篇 2：本地存储——从 Cookie 到 Web Storage、IndexDB
故事的开始：从 Cookie 说起
Cookie的性能劣势
向前一步：Web Storage
应用场景
终极形态：IndexDB
小结
六、CDN 的缓存与回源机制解析
CDN的缓存与回源机制解析
为什么要用 CDN
CDN 如何工作
CDN的核心功能特写
CDN 与前端性能优化
CDN 的实际应用
CDN 优化细节
七、渲染篇 1：服务端渲染的探索与实践
服务端渲染的运行机制
服务端渲染解决了什么性能问题
服务端渲染的应用实例
服务端渲染的应用场景
八、渲染篇 2：知己知彼——解锁浏览器背后的运行机制
浏览器的“心”
开启浏览器渲染“黑盒”
浏览器渲染过程解析
几棵重要的“树”
不做无用功：基于渲染流程的 CSS 优化建议
告别阻塞：CSS 与 JS 的加载顺序优化
小结
九、渲染篇 3：对症下药——DOM 优化原理与基本实践
望闻问切：DOM 为什么这么慢
药到病除：给你的 DOM “提提速”
十、渲染篇 4：千方百计——Event Loop 与异步更新策略
前置知识：Event Loop 中的“渲染时机”
Micro-Task 与 Macro-Task
Event Loop 过程解析
渲染的时机
生产实践：异步更新策略——以 Vue 为例
小结
十一、渲染篇 5：最后一击——回流（Reflow）与重绘（Repaint）
哪些实际操作会导致回流与重绘
如何规避回流与重绘
Flush 队列：浏览器并没有那么简单
小结
十二、应用篇 1：优化首屏体验——Lazy-Load 初探
Lazy-Load 初相见
一起写一个 Lazy-Load 吧！
小结
十三、应用篇 2：事件的节流（throttle）与防抖（debounce）
“节流”与“防抖”的本质
Throttle： 第一个人说了算
Debounce： 最后一个人说了算
用 Throttle 来优化 Debounce
小结
十四、性能监测篇：Performance、LightHouse 与性能 API
可视化监测：从 Performance 面板说起
可视化监测： 更加聪明的 LightHouse
可编程的性能上报方案： W3C 性能 API
小结
