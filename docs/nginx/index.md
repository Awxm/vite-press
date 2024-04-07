# Nginx

Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件代理服务器，在 BSD-like 协议下发行,具有高性能、高可靠性、丰富的模块化支持和简单易用的优势。

## 应用场景

### 动静分离

为了加快网站的解析速度，我们可以把动态页面和静态页面分散到不同的服务器进行解析，加快解析速度，降低单个服务器的压力，比如仅对一些图片、样式、脚本等静态资源设置缓存。

### 正向代理

比如国内的客户想要直接访问Google官网是无法连接的，但如果该用户可以访问某服务器，而这个服务器可以访问Google官网，那么客户可以将此服务器设置为代理服务器，借助该服务器请求获得Google的响应报文，再转发给用户。此时这个服务器称之为正向代理服务器, 如我们通过VPN科学上网。

### 反向代理

相比正向代理，客户是对代理无感知，类似于中转站。客户只需要向公开的URL向代理服务器发送请求，代理服务器自行选择目标服务器处理请求并返回数据。用户并不关心是哪个具体的目标服务器最终向他提供并完成了服务。

### 负载均衡

Nginx可以作为反向代理服务器，通过优化请求的分配和处理方式，根据一定的权重分配后端服务器的负载，提高系统的可用性和可靠性，使其更稳定。

### 访问控制和安全

Nginx可以使用访问控制、基于域名/IP地址的访问限制等来提高服务器的安全性，有效保护Web应用程序和服务器

## Nginx 常用命令

### 测试配置文件

```nginx
  # 测试
  nginx -t
  
  # 测试 - 指定配置文件
  nginx -t -c /usr/local/etc/nginx/nginx.conf
```

### 启动/重启/关闭

```nginx
  
  # 启动
  nginx
  
  # windows下
  start nginx

 # nginx 命令帮助
  nginx -h

  #常用的配置
  #-c 可以指定配置文件
  nginx -c /usr/local/etc/nginx/nginx.conf
  
  # 重启 (因改变了Nginx相关配置，需要重新加载配置而重载)
  nginx -s reload
  
  # 快速关闭 (不保存相关信息，并迅速终止web服务)
  nginx -s stop
  
  # 平稳关闭 (保存相关信息，有安排的结束web服务)
  nginx -s quit
```

### 查看/停止Nginx进程

```nginx
  # 查看进程
  ps -ef | grep nginx
  
  #关闭单个进程
  kill -s QUIT 单个进程号
  
  # 快速停止 Nginx：
  kill -TERM 主进程号

  # 强制停止 Nginx：
  pkill -9 nginx
```

## Nginx 配置概览

### 配置文件结构

| 名称 | 作用 |
|------|------|
| 全局块 | 配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等 |
| events块 | 配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等 |
| stream块 | 配置四层协议的转发、代理或者负载均衡等 |
| http块  | 可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等 |
| server块 | 配置虚拟主机的相关参数，一个http中可以有多个server |
| location块 | 配置请求的路由，以及各种页面的处理情况 |

### 常用内置变量

| 名称 | 作用 |
|------|------|
| $args | 获取请求 query_string 参数 |
| $arg_name | 获取请求 query_string 参数中, key 为 name 的值 |
| $cookie_name | 获取请求中的名称为 name 的 cookie |
| $host | 获取请求的 ip, 如果没有请求头中没有 Host 请求头，那么获取的是 url 中的 ip |
| $uri | 获取请求路径中的 path, 不包括 query string, 如 localhost:8888/path/route?args=xxx 等于 /path/route |
| $request_uri | 获取 path 和 query string, 如 localhost:8888/path/route?args=xxx 等于 /path/route?args=xxx |
| $request_method | 获取请求方法, 值均为大写, 如为 GET,POST,DELETE,PUT |
| $request_filename  | 当前请求的文件路径 |
| $document_uri  | 与$uri相同 |
| $document_root  | 当前请求在root指令中指定的值 |
| $server_protocol | 请求使用的协议，如HTTP/1.0或HTTP/1.1 |
| $server_addr | 服务器地址 |
| $server_name | 服务器名称 |
| $server_port | 请求到达服务器的端口号 |
| $scheme | HTTP方法（如http，https） |
| $remote_addr | 客户端的IP地址 |
| $remote_port | 客户端的端口 |
| $remote_user | 已经经过Auth Basic Module验证的用户名 |
| $limit_rate | 可以限制连接速率的变量 |
| $http_name  | name 为请求头中的字段名称，请求头名称全部小写，并将破折号 - 替换为下划线 _, 例如 $http_user_agent 获取请求头中的 User-Agent 字段 |
| $http_cookie | 客户端cookie信息 |
| $http_user_agent  | 客户端agent信息 |
| $content_type  | 请求头中的Content-Type字段 |
| $content_length  | 请求头中的Content-length字段 |

```nginx
  http {
    server{
      listen 80;
      server_name www.abc.com;
    
      location / {
        #正常状态下访问, 显示PC端网站 
        root /var/www/html/pc;
    
        #当用户为移动设备时, 显示移动端网站 (~* -> 正则匹配)
        if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
          root /var/www/html/mobile;  
        }
        
        index index.html;   
      } 
    }
  }
```

#### 注

  这篇[博客](<https://juejin.cn/post/7277799790297317410?searchId=202310171142367BBB0464E84B623A1689#heading-25>)讲得很好
