# location块

用来匹配不同的url请求，进而对请求做不同的处理和响应

## root / alias 指令

root: 配置 URL 路径附加到根位置形成最终文件路径
alias: 配置 URL 路径映射到根位置以外的其他目录

```nginx
  http {
    server {
      listen 80;
      server_name www.abc.com;
      
      # root (结尾 '/' 可有可无)
      # www.abc.com/img/1.png -> /var/www/html/img/1.png
      location /img {
        root /var/www/html;
      }
      
      
      # alias (映射到某个目录, 必须以 '/' 结尾)
      # www.abc.com/img2/1.png -> /var/www/html/1.png
      location /img2 {
        alias /var/www/html/;
      }
      
      
      # alias (映射到具体文件)
      # www.abc.com/img2/1.png -> /var/www/html/1.png
      location ~ ^/img/1.png$ {
        alias /var/www/html/1.png;
      }
    }
  }
```

## rewrite 指令

http 请求重定向处理 语法：rewrite regex replacement [flag]

```nginx
  http { 
    server {
      listen 80; 
      server_name www.abc.com;
    
      #flag=redirect (临时重定向)
      location /to_redirect { 
        rewrite ^/to_redirect http://www.google.com redirect; 
      } 
  
      #flag=permanent (永久重定向)
      location /to_permanent { 
        rewrite ^/to_permanent http://www.google.com permanent; 
      }
  
      #flag=break (停止匹配，在当前 `location` 去搜索资源)
      location /break { 
        root /var/www/html/break;
        rewrite /break/(.*) /test/$1 break; 
      } 
  
      #flag=last (发送一个新的请求去匹配 location)
      location /last { 
        root /var/www/html/last;
        rewrite /last/(.*) /test/$1 last; 
      } 
  
      location /test/ { 
        root /var/www/html; 
      }
    }
  }
```

flag=redirect:
临时重定向，浏览器根据响应状态 302 和 响应头 Location 跳转对应地址。

flag=permanent:
永久重定向，浏览器根据响应状态 301 和 响应头 Location 跳转对应地址。
当再次访问 www.abc.com/to_permanen… 时 不会询问 nginx 直接跳转新地址。

flag=break:
当访问 <www.abc.com/break/1.…> 实际匹配第三个 location，然后在当前上下文处理。其中 /break/1.jpg 被替换为 /test/1.jpg 进行处理，然后和 root 指定路径匹配，返回 /var/www/html/break/test/1.jpg 数据。

flag=last:
当访问 <www.abc.com/last/1.p…> 实际匹配第四个 location，其中 /break/1.jpg 被替换为 /test/1.jpg 去匹配新的 location 进行处理，最终匹配第五个location，返回 /var/www/html/test/1.jpg 数据。

## try_files 指令

以指定顺序检查文件是否存在，并使用第一个找到的文件进行请求处理。如果找不到内容内部转发到最后一个参数 uri (获取请求路径中的path)

```nginx
  http { 
    server {
      listen 80; 
      server_name www.abc.com;
      
      location /try/ { 
        root /var/www/html;
        index  index.html;
        try_files $uri $uri/ aaa; 
      } 
      
      location aaa { 
        default_type application/json; 
        return 200 "页面数据"; 
      }
    }
  }
```

1. 访问 www.abc.com/try/file?qu… 时，$uri 为 /try/file
2. 查找 root + $uri -> /var/www/html/try/file 找到则返回
3. 查找 root + $uri/ -> /var/www/html/try/file/index.html 找到则返回
4. 转发 @proxy_pass 处理

## 资源缓存配置

协商缓存: ETag/if-None-Match 和 Last-Modified/if-Modify-Since 两种
强制缓存: Cache-Control

```nginx
  http { 
    server {
      listen 80; 
      server_name www.abc.com;
      
      location ~* \.(css|js|png|jpg|jpeg|gif)$ { 
        #协商缓存 (默认开启，可省略)
        #etag on;
        #if_modified_since exact;

        #强制缓存
        #expires 365d;
        
        #强制缓存 (推荐)
        #设置Cache-Control "no-cache", 需要进行协商缓存，发送请求到服务器确认是否使用缓存
        #设置Cache-Control "no-store", 禁止使用缓存，每一次都要重新请求数据
        #设置Cache-Control "public", 可以被所有的用户缓存，包括终端用户和CDN中间代理服务器
        #设置Cache-Control "private", 只能被终端用户的浏览器缓存,不允许CDN等中继缓存服务器
        add_header Cache-Control "max-age=31536000"; #缓存一年
      }
    }
  }
```

## Url 路由规则

| 规则 | 类型 | 匹配 |
|----|----|----|
| = | 精准匹配 | 精确匹配。如果匹配成功，立即停止搜索并处理此请求。|
| ~ | 正则匹配 | 执行正则匹配，区分大小写。 |
| ~* | 正则匹配 | 执行正则匹配，不区分大小写 |
| ^~ | 前缀匹配  | 如果匹配成功，不再匹配其他location，且不查询正则表达式 |
| !~ | 正则匹配 | 正则匹配，区分大小写不匹配 |
| !~* | 正则匹配 | 正则匹配，不区分大小写不匹配 |
| @ | 命名location  | 严格匹配。如果请求匹配这个 location，那么将停止搜索并立即处理此请求|
| uri | 精准匹配 | 待匹配的请求字符串。可以是普通字符串或包含正则表达式。 |

### 注意事项 (!~ 和 !~* 仅支持在 if 中使用)

if ($host !~*) 这样的写法可行
if ($host !~) 这样的写法可行
location !~* 这样写法不支持
location !~ 这样写法不支持

### Url 匹配顺序

1. =: 精准匹配，如果匹配成功，则停止其他匹配
2. ^~和 无符号: 普通匹配，遍历记录所有非正则匹配，选择字符最长的 location 作为匹配, 如果选择的  location 是使用了 ^~ 修饰符，则停止正则匹配
3. 正则表达式指令匹配，按照配置文件里的顺序从上到下进行匹配，如果成功匹配就停止其他匹配
4. 所有正则都未匹配成功，则使用普通字符串匹配结果（最长字符）

```nginx
  http { 
    server {
      listen 80; 
      server_name www.abc.com;
      
      #http://www.abc.com/abcd - 正好完全匹配
      #http://www.abc.com/ABCD - 如果运行 Nginx 系统本身对大小写不敏感, 则匹配
      #http://www.abc.com/abcd?param - 匹配，因为忽略查询串参数
      #http://www.abc.com/abcd/ - 不匹配，因为末尾存在反斜杠
      #http://www.abc.com/abcde - 不匹配，因为不是完全匹配
      location = /abcd {}
      
      #http://www.abc.com/abcd - 正好完全匹配
      #http://www.abc.com/ABCD - 如果运行 Nginx 系统本身对大小写不敏感, 则匹配
      #http://www.abc.com/abcd?param - 匹配，因为忽略查询串参数
      #http://www.abc.com/abcd/ - 匹配
      #http://www.abc.com/abcde - 匹配
      location /abcd {}

      # 以 /img/ 开头的请求，都会匹配上
      # http://abc.com/img/a.jpg [匹配成功]
      # http://abc.com/img/b.mp4 [匹配成功]
      location ^~ /img/ {}
      
      #http://www.abc.com/abcd - 正好匹配 ^/abcd$
      #http://www.abc.com/ABCD - 不匹配，因为区分大小写
      #http://www.abc.com/abcd?param - 匹配，因为忽略查询串参数
      #http://www.abc.com/abcd/ - 不匹配正则表达式 ^/abcd$
      #http://www.abc.com/abcde - 不匹配正则表达式 ^/abcd$
      location ~ ^/abcd$ {}
      
      #http://www.abc.com/abcd - 正好匹配 ^/abcd$
      #http://www.abc.com/ABCD - 匹配，因为不区分大小写
      #http://www.abc.com/abcd?param - 匹配，因为忽略查询串参数
      #http://www.abc.com/abcd/ - 不匹配正则表达式 ^/abcd$
      #http://www.abc.com/abcde - 不匹配正则表达式 ^/abcd$
      location ~* ^/abcd$ {}


    }
  }
```

## 常用指令

1. proxy_pass：定义后端服务器的地址。
2. proxy_set_header：修改从客户端传递到代理服务器的请求头。
3. proxy_hide_header：隐藏从代理服务器返回的响应头。
4. proxy_redirect：修改从代理服务器返回的响应头中的Location和Refresh头字段。

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
