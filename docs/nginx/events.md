# events块

这里主要配置 Nginx 服务器与用户的网络连接，常用的设置包括

1. 设置每个work process可以同时支持的最大连接数等
2. 选取哪种事件驱动模型来处理连接请求
3. 设置是否允许同时接收多个网络连接
4. 设置网络连接的序列化

```nginx
  events {
    #单个后台 worker process 进程的最大并发链接数=
    worker_connections  1024;

    #use模型名, 网络IO模型 select、poll、kqueue、epoll 等
    use epoll;

    #设置是否允许同时接收多个网络连接
    multi_accept off;
  
    #对多个nginx 进程接收连接进行序列化，防止多个进程对连接的争抢
    accept_mutex on;
    
  }
```
