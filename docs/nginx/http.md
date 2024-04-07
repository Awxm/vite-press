
# http块

http块是 Nginx 服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能，包含了http全局块、upstream块、server块。在这里主要讲解http全局块的配置。

```nginx
  http {
    #文件扩展名与文件类型映射表 
    include mime.types; 
    #默认文件类型
    default_type application/octet-stream; 
    #默认编码
    charset utf-8; 
    #服务器名字的 hash 表大小
    server_names_hash_bucket_size 128;
    #存储HTTP头部的内存buffer大小  
    #如果(请求行+请求头)的大小如果没超过32k，放行请求。 
    client_header_buffer_size 32k; 
    #存储超大HTTP头部的内存buffer大小 
    #注意：
    #1. 请求行(request line)的大小不能超过8k，否则返回414错误 
    #2. (request header)中的每一个头部字段的大小不能超过8k
    #3. (请求行+请求头)的大小不能超过32k(4 * 8k)
    large_client_header_buffers 4 8k; 
    #HTTP请求包体的最大值 默认1
    client_max_body_size 1m;
    #表示启用sendfile系统调用，该系统调用可以在内核空间和用户空间之间直接传输数据，避免了数据的多次复制，从而提高了系统的性能。 普通应用设为on，下载等重应用设为off
    sendfile on;  
    #开启目录列表访问，合适下载服务器，默认关闭
    autoindex on; 
    #该选项可以让nginx在发送HTTP响应时，尽可能地将多个响应数据一次性发送给客户端，从而减少了TCP报文的数量，提高了系统的性能。
    #向客户端传输数据时是否立即发送。当tcp_nopush指令关闭时，nginx会等待缓冲区中的数据达到一定量或者超时后再发送，而当tcp_nopush指令开启时，nginx在等待数据达到缓冲区阈值或者超时的同时也会立即将缓冲区中的数据发送给客户端，这有助于提高传输效率和节省网络带宽。
    #提高网络传输效率
    tcp_nopush on; 
    #该选项可以禁用Nagle算法，使得TCP连接不会延迟发送数据，从而提高了系统的性能
    #提高网络传输效率
    tcp_nodelay on; 
    
    ##连接客户端超时时间各种参数设置## 

    #单位是秒，客户端连接时时间，超时后服务器端自动关闭连接 
    keepalive_timeout 120; 
    #读取客户端请求头超时时间 默认为60s，如果在此超时时间内客户端没有发送完请求头 则响应408
    client_header_timeout 10;
    #读取客户端请求头超时时间 默认为60s，
    client_body_timeout 10;  
    #告诉nginx关闭不响应的客户端连接。这将会释放那个客户端所占有的内存空间
    reset_timedout_connection on; 
    #响应客户端超时时间，这个超时时间仅限于两个活动之间的时间，如果超过这个时间，客户端没有任何活动，nginx关闭连接。
    send_timeout 10;
    
    #FastCGI 可以将Web服务器和应用程序间(Java/Golang)的通信转换为基于TCP/IP的套接字连接

    #连接到后端fastcgi的超时时间
    fastcgi_connect_timeout 300;
    #建立连接后多久不传送数据就断开
    fastcgi_send_timeout 300;
    #接收fastcgi应答的超时时间
    fastcgi_read_timeout 300;
    #指定读取fastcgi应答缓冲区大小
    fastcgi_buffer_size 64k;
    ##指定本地缓冲区大小（缓冲FaseCGI应答请求）
    fastcgi_buffers 4 64k;
    #繁忙时的buffer，可以是fastcgi_buffer的两倍
    fastcgi_busy_buffers_size 128k;
    #在写入缓存文件时用多大的数据块，默认是fastcgi_buffer的两倍
    fastcgi_temp_file_write_size 128k; 
    #开启缓存时指定一个名称
    fastcgi_cache mingongge;
    #指定应答码200 302 缓存一小时
    fastcgi_cache_valid 200 302 1h;
    #指定应答码301缓存一天
    fastcgi_cache_valid 301 1d; 
    #指定其它应答码缓存一月
    fastcgi_cache_valid any 1m;

    #传输文件压缩 gzip 模块设置, 需要和 --with-http_gzip_static_module 一起编译
    
    #开启 gzip 压缩输出
    gzip on;  
    #为指定的客户端禁用gzip功能
    gzip_disable "msie6"
    #压缩前查找是否有预先gzip处理过的资源
    gzip_static
    #允许或者禁止压缩基于请求和响应的响应流
    gzip_proxied any;
    #最小压缩文件大小
    gzip_min_length 1k; 
    #压缩缓冲区
    gzip_buffers 4 16k; 
    #压缩版本（默认 1.1，前端如果是 squid2.5 请使用 1.0）
    gzip_http_version 1.0;
    #压缩等级 (1 最小处理最快, 9 处理最慢传输速度最快) 
    gzip_comp_level 2; 
    #压缩类型，默认就已经包含 text/html
    gzip_types text/plain application/x-javascript text/css application/xml; 
    #设置为开启，服务器返回数据时会在头部带上"Vary:Accept-Encoding"的标识, 默认关闭
    gzip_vary on; 
    
    #代理缓存服务器设置

    #服务器连接的超时时间
    proxy_connect_timeout 10;
    #连接成功后,等候后端服务器响应时间 
    proxy_read_timeout 180;
    #后端服务器数据回传时间 
    proxy_send_timeout 5; 

    #开启代理缓冲区,web回传数据⾄缓冲区,代理边收边传返回给客户端
    proxy_buffering 
    #设置缓冲区大小，从代理后端服务器取得的第一部分的响应内容,会放到这里.小的响应header通常位于这部分响应内容里边.默认来说,该缓冲区大小等于指令 proxy_buffers所设置的;但是,你可以把它设置得更小. 无论proxy_buffering是否开启， buffer）都是工作的 (作用是用来存储upstream端response的header。)
    proxy_buffer_size 16k; 
    #设置缓冲区的大小和数量,从被代理的后端服务器取得的响应内容,会放置到这里. 默认情况下,一个缓冲区的大小等于内存页面大小,可能是4K也可能是8K,这取决于平台
    proxy_buffers 4 32k; 
    #开启缓冲响应的功能以后，在没有读到全部响应的情况下，写缓冲到达一定大小时，nginx一定会向客户端发送响应，直到缓冲小于此值
    proxy_busy_buffers_size 96k; 
    #设置nginx每次写数据到临时文件的size限制
    proxy_temp_file_write_size 96k;
    #从后端服务器接收的临时文件的存放路径 
    proxy_temp_path /tmp/temp_dir; 
    proxy_cache_path /tmp/cache levels=1:2 keys_zone=cache_one:512m inactive=10m max_size=64m;
    #以上 proxy_temp_path 和 proxy_cache_path 需要在同一个分区中
    #其中 levels=1:2 缓存级别, 表示采用2级目录结构
    #其中 keys_zone=cache_one:512m 缓存空间起名为 cache_one 大小为 512m
    #其中 max_size=64m 表示单个文件超过64m就不缓存了 
    #其中 inactive=10m 表示缓存的数据, 10分钟内没有被访问过就删除
    
    
    # 例 - 反向缓存代理服务器
    server {
      listen 80;
      server_name localhost;
      root /Users/html/;

      #要缓存文件的后缀，可以在以下设置。
      location ~ .*.(gif|jpg|png|css|js)(.*) {
        # nginx缓存里拿不到资源，向该地址转发请求，拿到新的资源，并进行缓存
        proxy_pass http://ip地址:8080;
         # 设置后端服务器“Location”响应头 
        proxy_redirect off;
        #允许重新定义或者添加发往后端服务器的请求头
        proxy_set_header Host $host;
        # 指定用于页面缓存的共享内存，对应http层设置的keys_zone 
        proxy_cache cache_one; 
        # 为不同的响应状态码设置不同的缓存时间
        proxy_cache_valid 200 302 24h; 
        proxy_cache_valid 301 30d; # 为不同的响应状态码设置不同的缓存时间
        proxy_cache_valid any 5m; # 为不同的响应状态码设置不同的缓存时间
        expires 90d; # 设置缓存时间
      }
    }

    
    # 例 - 负载均衡配置
    upstream backend {
      #最小连接数策略: 将请求优先分配给压力较小的服务器 (取活跃连接数与权重weight的比值最小者为下一个处理请求的server) 
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
      server_name www.abc.com;
      listen 80;
      
      location / { 
        proxy_pass http://aaa.com; 
      } 
    }
    
    
    # 例 - 配置 https 
    server { 
      listen 443 ssl;
      server_name www.abcd.com;
      
      ssl on;
      ssl_certificate /etc/nginx/server.crt; # 配置文件
      ssl_certificate_key /etc/nginx/server.key;
      ssl_session_timeout 5m;
      
      location / {
        root /usr/local/web/;
        add_header 'Cache-Control' 'no-store';
      }
    }
  }
```
