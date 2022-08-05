---
title: 浅析ios中static和const的使用
tags:
  - iOS
categories:
  - iOS
date: 2020-07-04 11:00:36
---

# 一、static

修饰局部变量：

1、让局部变量只初始化一次

2、局部变量在程序中只生成一份内存

3、延长局部变量的生命周期,程序结束才会销毁。

修饰全局变量：

只能在本文件中访问,作用域仅限于当前文件

<!-- more -->

# 二、const

被const修饰的变量是只读的，不可以修改        



开发中经常用到static和const一起使用的情况,如定义一个只能在当前文件访问的全局常量

static  类型   const   常量名  ＝ 初始化值

例如：static NSString * const test = @"abc";



作者：GoodProspect
链接：https://www.jianshu.com/p/1a6fda82192b
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
