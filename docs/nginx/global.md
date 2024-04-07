# 全局块

Nginx 服务器全局的配置指令，这些作用域是整个Nginx。

```nginx
  #将user指令注释掉，或者配置成nobody的话所有用户都可以运行
  #user nobody;
  
  #指定工作线程数，可以制定具体的进程数，也可使用自动模式，这个指令只能在全局块配置
  worker_processes 1;
  
  #指定错误日志的路径和日志级别
  #error_log  logs/error.log;
  #error_log  logs/error.log  notice;
  #error_log  logs/error.log  info;
  
  #进程文件 
  #pid logs/nginx.pid;
```
