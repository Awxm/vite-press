
# 高频面试题

## 1 CSS

盒模型
BFC
选择器权重计算方式
清除浮动
垂直居中的方案
CSS3的新特性
CSS动画和过渡
有哪些方式（CSS）可以隐藏页面元素
说说em/px/rem/vh/vw区别
flex布局
如果要做优化，CSS提高性能的方法有哪些？
画一条 0.5px 的线
如何画一个三角形
两栏布局：左边定宽，右边自适应方案

## 2 JavaScript

typeof类型判断
类型转换
闭包
原型与原型链
原型继承和 Class 继承
模块化
事件机制
箭头函数
JS内存泄露如何检测？场景有哪些？
async/await异步总结
Promise异步总结
Event Loop执行机制过程

## 3 浏览器

储存
浏览器缓存机制
从输入URL 到网页显示的完整过程
常见的web前端攻击方式有哪些
跨域方案
移动端H5点击有300ms延迟，该如何解决
如何实现网页多标签tab通讯
requestIdleCallback和requestAnimationFrame有什么区别
script标签的defer和async有什么区别

## 4 Vue2

响应式原理
vdom和diff算法
模板编译
Vue组件渲染过程
Vue组件之间通信方式有哪些
Vue的生命周期方法有哪些
如何统一监听Vue组件报错
在实际工作中，你对Vue做过哪些优化

## 5 Vue3

vue3 对 vue2 有什么优势
vue3 和 vue2 的生命周期有什么区别
如何理解Composition API和Options API
ref如何使用
toRef和toRefs如何使用和最佳方式
深入理解为什么需要ref、toRef、toRefs
vue3升级了哪些重要功能
Composition API 如何实现逻辑复用
Vue3如何实现响应式
Proxy 基本使用
vue3用Proxy 实现响应式
v-model参数的用法
watch和watchEffect的区别
setup中如何获取组件实例
Vue3为何比Vue2快
什么是PatchFlag
什么是HoistStatic和CacheHandler
SSR和Tree-shaking的优化
Vite 为什么启动非常快
Composition API 和 React Hooks 的对比

class组件存在哪些问题
用useState实现state和setState功能
用useEffect模拟组件生命周期
用useEffect模拟WillUnMount时的注意事项
useRef和useContext
useReducer能代替redux吗
使用useMemo做性能优化
使用useCallback做性能优化
什么是自定义Hook
使用Hooks的两条重要规则
为何Hooks要依赖于调用顺序
class组件逻辑复用有哪些问题
Hooks组件逻辑复用有哪些好处
Hooks使用中的几个注意事项

## 8 Webpack

hash、chunkhash、contenthash区别
webpack常用插件总结
webpack热更新原理
webpack原理简述
webpack性能优化-构建速度
webpack性能优化-产出代码（线上运行）

## 9 HTTP

HTTP基础总结
HTTP缓存
HTTP协议1.0和1.1和2.0有什么区别
WebSocket和HTTP协议有什么区别
请描述TCP三次握手和四次挥手
HTTP跨域请求时为什么要发送options请求
HTTP请求中token、cookie、session有什么区别
什么是HTTPS中间人攻击，如何预防（HTTPS加密过程、原理）

## 10 Node

浏览器和nodejs事件循环（Event Loop）有什么区别
nodejs如何开启多进程，进程如何通讯

## 11 综合题目

你们的工作流程是怎么样的
工作中遇到过哪些项目难点，是如何解决的
前端性能优化
前端常用的设计模式和使用场景
如果一个H5很慢，如何排查性能问题
后端一次性返回十万条数据，你该如何渲染
H5页面如何进行首屏优化
请描述js-bridge的实现原理
从零搭建开发环境需要考虑什么
如果你是项目前端技术负责人，将如何做技术选型（常考）
高效的字符串前缀匹配如何做
前端路由原理
首屏渲染优化
interface和type的区别（常考）

## 12 手写题

防抖
节流
New的过程
instanceOf原理
实现call方法
实现apply方法
实现bind方法
发布订阅模式
手写JS深拷贝-考虑各种数据类型和循环引用
用JS实现一个LRU缓存
手写curry函数，实现函数柯里化
手写一个LazyMan，实现sleep机制
手写一个getType函数，获取详细的数据类型
手写一个JS函数，实现数组扁平化Array Flatten
把一个数组转换为树
获取当前页面URL参数
手写Promise加载一张图片
两个数组求交集和并集
JS反转字符串
设计实现一个H5图片懒加载
手写Vue3基本响应式原理
实现一个简洁版的promise

## 13 算法题

时间复杂度与空间复杂度基本概念
实现数字千分位格式化
实现快速排序并说明时间复杂度
将数组中的0移动到末尾
求斐波那契数列的第n值
给一个数组，找出其中和为n的两个元素（两数之和）
实现二分查找并分析时间复杂度
实现队列功能
手写判断一个字符串"{a(b[c]d)e}f"是否括号匹配
