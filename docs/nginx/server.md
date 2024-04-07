# server块

用于指定虚拟主机的域名或IP地址。如果一个请求的Host头中的值和server_name匹配，则nginx将会使用该虚拟主机配置处理该请求。
每个server块又分为全局server块，和一个或多个location块。在这里主要讲解server全局块的配置。

```nginx
  http {
    #指定服务器的IP地址
    server {
      listen 80;
      server_name 192.168.1.100;
      
      location / {
        root /var/www/html;
      }
    }


    #指定服务器的域名
    server {
      listen 80;
      server_name www.abc.com;
      
      location / {
        root /var/www/html;
      }
    }


    #可以使用正则表达式匹配(需要～, 标志正则表达式)
    #下面可以匹配 www.abc.com 和 abc.com
    server {
      listen 80;
      server_name ~^(www.)?abc.com$;
      
      location / {
        root /var/www/html;
      }
    }


    #可以使用通配符匹配, 只能用在如下两种情况
    #1.三段字符串组成名称的首段或尾段
    #2.两段字符串组成名称的尾段
    server {
      listen 80;
      server_name *.abc.com abc.*;
      
      location / {
        root /var/www/html;
      }
    }
  }
```

如果被多个虚拟主机的 server_name 匹配成功，那么请求处理优先级如下

1. 准确匹配到 server_name
2. 通配符在开始时匹配到 server_name
3. 通配符在结尾时匹配到 server_name
4. 正则表达式匹配 server_name
5. 按顺序进行匹配 server_name

注意事项：

1. server_name不应该包含端口号
2. server_name中使用空格隔开的多个域名
3. server_name默认值为localhost
