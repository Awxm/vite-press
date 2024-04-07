# Nginx配置总结

```nginx
user www;             # nginx进程启动⽤户
worker_processes auto;         #与cpu核⼼⼀致即可
worker_cpu_affinity auto;          # cpu亲和
error_log /var/log/nginx/error.log warn; #错误⽇志
pid /run/nginx.pid;
worker_rlimit_nofile 35535; #每个work能打开的⽂件描述符，调整⾄1w以上,负荷较⾼建议
2-3w
events {
 use epoll; # 使⽤epoll⾼效⽹络模型
 worker_connections 10240; # 限制每个worker进程能处理多少个连接，10240x[cpu核 ⼼] }
http {
 include mime.types;
 default_type application/octet-stream;
 charset utf-8; # 统⼀使⽤utf-8字符集
 # 定义⽇志格式
 log_format main '$remote_addr - $remote_user [$time_local] "$request" '
 '$status $body_bytes_sent "$http_referer" '
 '"$http_user_agent" "$http_x_forwarded_for"';
 
 access_log /var/log/nginx/access.log main; # 访问⽇志
 
 server_tokens off; # 禁⽌浏览器显示nginx版本号
 client_max_body_size 200m; # ⽂件上传⼤⼩限制调整
 
 # ⽂件⾼效传输，静态资源服务器建议打开
 sendfile on;
 tcp_nopush on;
 
 # ⽂件实时传输，动态资源服务建议打开,需要打开keepalived
 tcp_nodelay on;
 keepalive_timeout 65;
 
 # Gzip 压缩
 gzip on;
 gzip_complevel 2;
 gzip_disable "MSIE [1-6]\.";
 gzip_http_version 1.1;
 gzip_types .....;
 # 虚拟主机
 include /etc/nginx/conf.d/*.conf;
}
```

## Nginx优化配置详解

```nginx
### 基本参数优化

#关闭在错误页面中的nginx版本号，安全性是有好处的
server_tokens off;
#传输文件时发挥作用
sendfile on;
#一个数据包里发送所有头文件
tcp_nopush on;
#不缓存数据
tcp_nodelay on;
#在这个超时时间过后关闭客户端链接
keepalive_timeout 10; 
#设置请求头的超时时间
client_header_timeout 10; 
#设置请求体的超时时间
client_body_timeout 10;
#开启关闭不响应的客户端连接功能，释放客户端所占的内存空间
reset_timeout_connection on;
#客户端的响应超时时间。如果在这段时间内，客户端没有读取任何数据，nginx就会关闭连接。
send_timeout 10;
#设置用于保存各种key（比如当前连接数）的共享内存的参数。5m就是5兆字节，这个值应该被设置的足够大以存储（32K5）32byte状态或者（16K5）64byte状态。
limit_conn
#为给定的key设置最大连接数。这里key是addr，我们设置的值是100，也就是说我们允许每一个IP地址最多同时打开有100个连接。
limit_conn_zone 
#设置文件使用的默认的MIME-type。
default_type
#设置我们的头文件中的默认的字符集
charset

#Gzip压缩
#压缩的文件类型
 text/plain text/css 
 application/json 
 application/x-javascript 
 text/xml application/xml 
 application/xml+rss 
 text/javascript
gzip_types  
#采用gzip压缩的形式发送数据
gzip on;
#为指定的客户端禁用gzip功能
gzip_disable "msie6"
#压缩前查找是否有预先gzip处理过的资源
gzip_static;
#允许或者禁止压缩基于请求和响应的响应流
gzip_proxied any;
#设置对数据启用压缩的最少字节数
gzip_min_length  1000;
#设置数据的压缩等级
gzip_comp_level 6;

#FastCGI参数
#缓存路径 /data/ngx_fcgi_cache 
fastcgi_cache_path 
#目录结构等级
levels=2:2 
keys_zone=ngx_fcgi_cache:512m 
    #关键字区域存储时间
#非活动删除时间  
inactive=1d 
#连接到后端fastcgi的超时时间
fastcgi_connect_timeout 240; 
#建立连接后多久不传送数据就断开
fastcgi_send_timeout 240; 
#接收fastcgi应答的超时时间
fastcgi_read_timeout 240; 
#指定读取fastcgi应答缓冲区大小
fastcgi_buffer_size 64k; 
#指定本地缓冲区大小（缓冲FaseCGI应答请求）
fastcgi_buffers 4 64k;
#繁忙时的buffer，可以是fastcgi_buffer的两倍
fastcgi_busy_buffers_size 128k; 
#在写入缓存文件时用多大的数据块，默认是fastcgi_buffer的两倍
fastcgi_temp_file_write_size  128k; 
#开启缓存时指定一个名称
fastcgi_cache mingongge;
#指定应答码200 302 缓存一小时
fastcgi_cache_valid 200 302 1h;
#指定应答码301缓存一天
fastcgi_cache_valid 301 1d; 
#指定其它应答码缓存一月
fastcgi_cache_valid any 1m;

#其它参数优化
open_file_cache
#指定缓存最大数目以及缓存的时间
open_file_cache_valid
#在open_file_cache中指定检测正确信息的间隔时间
open_file_cache_min_uses   
#定义了open_file_cache中指令参数不活动时间期间里最小的文件数
open_file_cache_errors     
#指定了当搜索一个文件时是否缓存错误信息
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
#指定缓存文件的类型
{
#指定缓存时间
expires 3650d;    
}
location ~ .*\.(js|css)?$
expires有个缺点就是如果更新WEB数据后，用户没有清理缓存，会看到旧的数据，因此建议将时间设置短一点
{expires 3d;}
```

## 常用优化

```nginx
网络连接的优化
events {
#优化同一时刻只有一个请求而避免多个睡眠进程被唤醒的设置，on为防止被同时唤醒，默认为off，因此nginx刚安装完以后要进行适当的优化。
accept_mutex on; 
}

隐藏nginx版本号
server_tokens off;

事件驱动模型
events {
accept_mutex on;
multi_accept on;
use epoll; #使用epoll事件驱动，因为epoll的性能相比其他事件驱动要好很多
}

配置单个工作进程的最大连接数
events {
 worker_connections 102400; #设置单个工作进程最大连接数102400
}

配置sendfile方式传输文件
# 是由后端程序负责把源文件打包加密生成目标文件，然后程序读取目标文件返回给浏览器；这种做法有个致命的缺陷就是占用大量后端程序资源，如果遇到一些访客下载速度巨慢，就会造成大量资源被长期占用得不到释放（如后端程序占用的CPU/内存/进程等），很快后端程序就会因为没有资源可用而无法正常提供服务。通常表现就是 nginx报502错误，而sendfile打开后配合location可以实现有nginx检测文件使用存在，如果存在就有nginx直接提供静态文件的浏览服务，因此可以提升服务器性能.

 #可以配置在http、server或者location模块，配置如下：
 sendfile on; 
 #Nginxg工作进程每次调用sendfile()传输的数据最大不能超出这个值，默认值为0表示无限制，可以设置在http/server/location模块中。
 sendfile_max_chunk 512k; 

会话保持时间
#用户和服务器建立连接后客户端分配keep-alive链接超时时间，服务器将在这个超时时间过后关闭链接，我们将它设置低些可以让ngnix持续工作的时间更长，1.8.1默认为65秒，一般不超过120秒。

#后面的60为发送给客户端应答报文头部中显示的超时时间设置为：如不设置客户端将不显示超时时间。
keepalive_timeout 65 60; 60s
#浏览器收到的服务器返回的报文 
Keep-Alive:timeout=60 
如果设置为0表示关闭会话保持功能，将如下显示：
#浏览器收到的服务器返回的报文
Connection:close 

配置nginx worker进程最大打开文件数
worker_rlimit_nofile 65535;

配置nginx gzip压缩实现性能优化

图片、视频（流媒体）等文件尽量不要压缩，因为这些文件大多都是经过压缩的，如果再压缩很可能不会减小或减小很少，或者有可能增大，而在压缩时还会消耗大量的CPU、内存资源

#表示开启压缩功能
gzip on; 
#表示允许压缩的页面最小字节数，页面字节数从header头的Content-Length中获取。默认值是0，表示不管页面多大都进行压缩，建议设置成大于1K。如果小于1K可能会越压越大
gzip_min_length 1k;
#压缩缓存区大小 
gzip_buffers 432k; 
#压缩版本
gzip_http_version 1.1;
#压缩比率 
gzip_comp_level 9; 
#指定压缩的类型
gzip_types text/css text/xml application/javascript; 
 #vary header支持
gzip_vary on;

nginx expires功能
#为用户访问网站的内容设定一个过期时间，当用户第一次访问到这些内容时，会把这些内容存储在用户浏览器本地，这样用户第二次及之后继续访问该网站，浏览器就会检查已经缓存在用户浏览器本地的内容，就不会去浏览器下载了，直到缓存的内容过期或者被清除为止。
location ~ ^/(images|javascript|js|css|flash|media|static)/ {
 expires 360d;
}

rewrite实例
http {
 # 定义image日志格式
 log_format imagelog '[$time_local] ' $image_file ' ' $image_type ' ' $body_bytes_sent ' ' $status;
 # 开启重写日志
 rewrite_log on;
 server {
 root /home/www;
 location / {
 # 重写规则信息
 error_log logs/rewrite.log notice;
 # 注意这里要用‘’单引号引起来，避免{}
 rewrite '^/images/([a-z]{2})/([a-z0-9]{5})/(.*).(png|jpg|gif)$' /data?file=$3.$4;
 # 注意不能在上面这条规则后面加上“last”参数，否则下面的set指令不会执行
 set $image_file $3;
 set $image_type $4;
 }
 location /data {
 # 指定针对图片的日志格式，来分析图片类型和大小
 access_log logs/images.log mian;
 root /data/images;
 # 应用前面定义的变量。判断首先文件在不在，不在再判断目录在不在，如果还不在就跳转到最后一个url里
 try_files /$arg_file /image404.html;
 }
 location = /image404.html {
 # 图片不存在返回特定的信息
 return 404 "image not foundn";
 }
}

if语句块
if ($http_user_agent ~ MSIE) {proxy_pass
 rewrite ^(.*)$ /msie/$1 break;
} //如果UA包含"MSIE"，rewrite请求到/msid/目录下
if ($http_cookie ~* "id=([^;]+)(?:;|$)") {
 set $id $1;
 } //如果cookie匹配正则，设置变量$id等于正则引用部分
if ($request_method = POST) {
 return 405;
} //如果提交方法为POST，则返回状态405（Method not allowed）。return不能返回301,302
if ($slow) {
 limit_rate 10k;
} //限速，$slow可以通过 set 指令设置
if (!-f $request_filename){
 break;
 proxy_pass http://127.0.0.1;
} //如果请求的文件名不存在，则反向代理到localhost 。这里的break也是停止rewrite检查
if ($args ~ post=140){
 rewrite ^ http://example.com/ permanent;
} //如果query string中包含"post=140"，永久重定向到example.com
location ~* .(gif|jpg|png|swf|flv)$ {
 valid_referers none blocked www.jefflei.com www.leizhenfang.com;
 if ($invalid_referer) {
 return 404;
 } //防盗链
}

https
#定义一个新的server，配置如下，必须的配置有listen ,server_name, ssl ,ssl_certificate, ssl_certificate_key,一般配置的时候我都是直接复制，然后改主机名，证书私钥文件，日志路径，root的根目录这几项。

如果想让访问80的转到443，可用rewrite语句

listen 443;
server_name agent.t.jlhcar.com;
ssl on;
ssl_certificate, "/usr/local/certificate/agent.t.jlhcar.com.pem";证书
ssl_certificate_key "/usr/local/certificate/agent.t.jlhcar.com.key";私钥
ssl_session_cache shared:SSL:1m;
ssl_session_timeout 10m;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
ssl_prefer_server_ciphers on;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;协议
...
//日志以及root根目录的其他配置
server {
 listen 80;
 server_name agent.xxx.com;
 rewrite ^/(.*)$ https://agent.xxx.com/$1;
}

http转https的时候会将POST转换为GET请求，此时需要这样配置

server {
 listen 80;
 server_name dev-payment.xxxx.cn;
 return 307 https://dev-payment.xxxx.cn$request_uri;
}


负载均衡和反向代理
# http配置段要配置一个upstream
upstream ucart{
 server 192.168.0.1:80;
 server 192.168.0.2:80;
}
注意：nginx中不识别_（下划线），否则会出现400错误

然后再server配置段，将所需要处理的请求反向代理至后端服务器，在可根据需要和服务器配置情况来定义权重，实现负载均衡
location /aaa/ {
 proxy_pass http://abc/;
 proxy_connect_timeout 3; //连接超时时间
 proxy_read_timeout 30;
 proxy_set_header Host tapi.51ucar.cn; //HTTP头信息,后端服务器根据此来找到特定虚拟主机
 proxy_set_header X-Real-IP $remote_addr; //HTTP头信息，真实IP
 proxy_set_header X-Scheme $scheme;
}
 

```
