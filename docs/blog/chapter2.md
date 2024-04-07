# 第二章 了解javaScript

## `<script>`元素

将 JavaScript 插入 HTML 的主要方法是使用`<script>`元素,最早在`Netscape Navigator 2` 中实现的后来，这个元素被正式加入到HTML 规范。

### 常见的属性

- `async`:可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效
- `charset`:使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值 (这在处理非 ASCII 字符时可能很有用)
- `crossorigin`:指定跨域请求的 CORS（跨源资源共享）设置,默认不使用CORS。crossorigin="anonymous"配置文件请求不必设置凭据标志。="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
- `defer`:表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在IE7 及更早的版本中，对行内脚本也可以指定这个属性
- `integrity`:允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容
- `language`:(废弃)最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）
- `src`:指定外部 JavaScript 文件的 URL
- `type`:代替 language，表示代码块中脚本语言的内容类型（也称MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是module，则代码会被当成ES6 模块，而且只有这时候代码中才能出现import 和export 关键字

:::info 注意
外部 JavaScript 文件的扩展名是.js。这不是必需的，因为浏览器不会检查所包含 JavaScript 文件的扩展名。这就为使用服务器端脚本语言动态生成 JavaScript 代码，或者在浏览器中将JavaScript 扩展语言（如TypeScript，或React 的JSX）转译为JavaScript提供了可能性。不过要注意，服务器经常会根据文件扩展来确定响应的正确MIME 类型。如果不打算使用.js 扩展名，一定要确保服务器能返回正确的MIME 类型。使用了 src 属性的`<script>`元素不应该再在`<script>`和`</script>`标签中再包含其他JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码
:::

### 标签位置

`<script>`元素都被放在页面的`<head>`标签内

```html
<!DOCTYPE html> 
<html>  
  <head> 
  <title>Example HTML Page</title> 
  <script src="example1.js"></script> 
  <script src="example2.js"></script> 
  </head> 
  <body> 
  <!-- 这里是页面内容 --> 
  </body> 
</html>
```

为啥要这样做呢？

主要是想把css和JavaScript 文件都集中放到一起，当文件放在`<head>`的时候浏览器会把所有的js代码全部下载、解析、执行、完成后才能渲染页面。在这个工程中大量的js代码会导致渲染延迟，浏览器窗口空白，而放在`<body>`的时候，页面渲染完成之后，再去执行js代码，这样会大大降低页面的渲染速度。

### 推迟执行脚本

### 异步执行脚本

### 动态加载脚本

## 行内代码与外部文件

## 文档模式
