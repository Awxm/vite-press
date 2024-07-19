1 初识 npm script
用 npm init 快速创建项目
用 npm run 执行任意命令
创建自定义 npm script
2 运行多个 npm script 的各种姿势
哪来那么多命令？
让多个 npm script 串行？
让多个 npm script 并行？
有没有更好的管理方式？
3 给 npm script 传递参数和添加注释
给 npm script 传递参数
给 npm script 添加注释
调整 npm script 运行时日志输出
4 使用 npm script 的钩子
改造 test 命令
增加覆盖率收集
5 在 npm script 中使用变量
使用预定义变量
使用自定义变量
6 实现命令行自动补全
使用 npm run 直接列出
把 npm completion 集成到 shell 中
更高级的自动完成
如何实现 yarn 的命令自动补全？
7 实现 npm script 跨平台兼容
文件系统操作的跨平台兼容
用 cross-var 引用变量
用 cross-env 设置环境变量
再多说几句
8 把庞大的 npm script 拆到单独文件中
安装依赖
准备目录和文件
修改 scripty 脚本
修改 package.json
实际测试
高级技巧
9 用 node.js 脚本替代复杂的 npm script
安装 shelljs 依赖
创建 Node.js 脚本
用 Node.js 实现同等功能
让 package.json 指向新脚本
测试 cover 命名
10 实战1 文件变化时自动运行 npm script
单元测试自动化
代码检查自动化
11 实战2 结合 live-reload 实现自动刷新
安装项目依赖
添加 npm script
在页面中嵌入 livereload 脚本
启动服务并测试
12 实战3 在 git hooks 中运行 npm script
安装项目依赖
添加 npm script
用 lint-staged 改进 pre-commit
13 实战4 用 npm script 实现构建流水线
项目目录结构
添加构建过程
准备脚本目录
图片构建过程
样式构建过程
JS 构建过程
资源版本号和引用替换
完整的构建步骤
14 实战5 用 npm script 实现服务自动化运维
使用 npm script 进行版本管理
使用 npm script 进行服务进程和日志管理
