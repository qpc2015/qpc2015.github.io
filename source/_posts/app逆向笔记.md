## 逆向环境搭建

#### iPhone越狱操作

~~pp助手~~

~~爱思助手~~(一键越狱未成功)

**刚开始使用unc0ver对几款iphone进行越狱安装后均显示不支持,所以改用checkra1n**

<!-- more -->

**先将官网放上https://checkra.in/**

**刚开始用的官网下载的0.9.8.2刷机均中途报错**

`Exploit Failed (Error code: -31) 或 Timed out waiting for bootstrap upload(Likely caused by an incompatible tweak, to enable Safe Mode check the option on main screen) (Error code: -20)`

**后搜到这篇文章,看到有0.10.0版本的过段换最新的试试.**

https://mrmad.com.tw/checkra1n

**最后贴上越狱成功下载地址**

[v0.10.0 Beta](https://assets.checkra.in/test/checkra1n beta 0.10.0.dmg)

#### mac远程登录iPhone

通过ssh让mac远程登录iphone

1.手机端安装Cydia安装openssh工具

2.使用查看插件descrition中的描述

3.确保mac和iphone在同一局域网下,在mac的终端输入ssh 账户名@服务器主机地址 例如ssh root@10.1.1.168 (初始密码一般为alpine)

4.退出连接 exit



**相关拓展:**

**iOS下有2个常用账户:root/mobile**

root:最高权限账户,$HOME是/var/root

mobile:普通权限账户,只能操作一些普通文件,不能操作系统级别的文件,$HOME是/var/mobile

**修改登录密码**

passwd  修改root密码

Passwd mobile 修改mobile用户密码

[参考文章链接](https://www.jianshu.com/p/816c628a9722)



#### Cycript

通过cydia安装cycript可在iphone上调试运行中的app

常用指令

开启

cycript 

cycript -p 进程ID

cycript -p 进程名称

取消输入: Ctrl + C

退出: Ctrl + D

清屏:Command + R



**常用语法**

UIApp  获取app对象

#内存地址  用内存地址获取对象

ObjectiveC.classes 已加载的所有OC类

*对象 查看对象的所有成员变量

view.recursiveDescription().toString() 递归打印view的所有子控件

choose(UITableViewCell) 筛选出某种类型的对象

[mj工具类](https://github.com/CoderMJLee/mjcript)



#### ps命令

手机安装adv-cmds插件

![image-20200429144756710](/Users/pengchengqin/Desktop/blog/source/_posts/image-20200429144756710.png)

使用ps命令可以列出系统当前的进程

列出所有的进程

ps -A

ps aux

搜索关键词

ps -A|grep 关键词



#### Reveal界面调试工具

可以用其找到对应要操作视图类



#### Mach-O

![image-20200429154354763](/Users/pengchengqin/Desktop/blog/source/_posts/image-20200429154354763.png)

Class-dump对Mach-o文件进行静态分析,导出对应的头文件

导出指令

Class-dump -H Mach-O 文件路径 -o 头文件存放目录

-H表示要生成头文件

-o用于制定头文件的存放目录



头文件导出,可导出oc,swift过滤

http://stevenygard.com/projects/class-dump/



[参考](https://www.jianshu.com/p/d9a561f7c54d)



#### 脱壳

加壳是通过特殊算法,对可执行文件的编码进行改变(比如压缩/加密),以达到保护程序代码的目的.

![image-20200429154833545](/Users/pengchengqin/Desktop/blog/source/_posts/image-20200429154833545.png)

脱壳就是将未加密的文件还原出来.

手机安装crackerXI插件,获取脱壳后文件,使用ifunbox将其导出.



[实战课参考此文章](https://www.jianshu.com/p/645ef237e0d2)