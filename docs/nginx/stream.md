# stream块

Nginx基于TCP/UDP端口的四层负载均衡（stream模块）配置, 并在server中拦截响应请求将请求转发到upstream中配置的服务器列表按一定的分配策略访问服务器。用法和http模块差不多，关键语法几乎一致。

```nginx
  stream {
    upstream backend {
      #最小连接数策略: 将请求优先分配给压力较小的服务器
      #least_conn;
    
      #最快响应时间: 优先分配给响应时间最短的服务器
      #fair;
    
      #客户端ip绑定: 同一个ip的请求永远只分配一台服务器, 解决动态网页session共享问题
      #ip_hash;
    
      # weight 设定服务器负载权重(默认是1), backup 备用服务器
      server 10.1.23.43:80599 weight=1;
      server 10.1.23.44:80599 weight=1;
      server 10.1.23.45:80599 weight=1 backup;
    }
    
    server {
      server_name www.domain.com;
      listen 80;
      
      location /api { 
        proxy_pass backend; 
      } 
    }
  }
```
