---
title: iOS 预编译指令#if
tags:
  - iOS 
categories:
  - iOS 
date: 2020-07-03 10:57:54
---

OC中的预编译指令有三种功能1：宏定义  2条件编译  3文件包含



1、宏定义

1-1定义格式： #define 标识符 字符串

1、 不含参数： #define TAG_VIEW 10086



2、 含有参数：#define MAX_INT(a,b) a+b

<!--more-->

1-2宏定义的说明



1、宏名一般习惯用大写字母表示，以便与变量名相区别。但这并非规定，也可用小写字母。

2、 宏定义是用宏名代替一个字符串，只作简单置换，不作正确性检查，同时也不会做运算逻辑处理,同时在进行宏定义时，可以引用已定义的宏名，可以层层置换。在这里需要特别注意的是：当宏涉运算时，要根据情况来添加括号。

3、  ＃define 命令出现在程序中函数的外面，宏名的有效范围为定义命令之后到本文件结束。通常，＃define 命令写在文件开头，函数之前，作为文件一部分，在此文件范围内有效。

4、 可以用＃undef  命令终止宏定义的作用域。

5、宏定义是专门用于预处理命令的一个专用名词，它与定义变量的含义不同，只作字符替换，不分配内存空间。



特别提示：



1、省略号...和VA_ARGS的使用--关于省略号··· 代表的是个数可变的参数即可变参数，一般会与__VA__ARGS__结合使用，__VA__ARGS__表示保留名，将省略号省略的参数传递给宏。如下



// 例如我们最常见的形式

\#ifdef DEBUG

\#define JRLog(...) NSLog(__VA_ARGS__)

\#else

\#define JRLog(...)// 如果编译经过在这里那么JRLog(···)无意义

\#endif

2、条件编译

条件编译就是在编译之前预处理器根据预处理指令判断对应的条件，如果条件满足就将对应的代码编译进去，否则代码就根本不进入编译环节（相当于根本就没有这段代码）。



常用的条件编译函数：



1、#if 编译预处理中的条件命令, 相当于C语法中的if语句，如果if后判断为真则执行if后面的代码块



2、 #ifdef 判断某个宏是否被定义, 若已定义, 执行随后的语句-注意只会判断该宏是否定义，而不会具体判断语句的正确性

3、 #ifndef 与#ifdef相反, 判断某个宏是否未被定义

4、 #elif 若#if, #ifdef, #ifndef或前面的#elif条件不满足, 则执行#elif之后的语句, 相当于C语法中的else-if

6、 #else 与#if, #ifdef, #ifndef对应, 若这些条件不满足, 则执行#else之后的语句, 相当于C语法中的else

7、 #endif #if, #ifdef, #ifndef这些条件命令的结束标志.

8、#if 与 #ifdef 的区别：#if是判断后面的条件语句是否成立，#ifdef是判断某个宏是否被定义过。要区分开！

\#ifdef  MAX_F

// 如果定义了宏MAX_F，则编译此处的代码

\#else

// 如果没有定义宏MAX_F，则编译此处的代码

\#endif

 

// 同样

\#ifndef  MAX_F

// 如果没有定义宏MAX_F，则编译此处的代码

\#elif MAX_INT

// 如果定义了宏MAX_F,同时还定义了宏MAX_INT，则编译此处的代码

\#else

// 定义了宏MAX_F,但是没有定义宏MAX_INT，则编译此处的代码

\#endif

另外在pch文件中，可以看到自带一个条件编译



\#ifndef Header_h 

\#define Header_h 

 

\#endif

这种格式是为了防止该头文件被引用时发生重复引用。



条件编译的常用情况：



1：情况1：

\#ifdef _XXXX

...程序段1...

\#else

...程序段2...

\#endif

这表明如果标识符_XXXX已被#define命令定义过则对程序段1进行编译；否则对程序段2进行编译。

例如： 

\#define NUM

.............

.............

.............

\#ifdef NUM

printf("之前NUM有过定义啦！:) ");

\#else

printf("之前NUM没有过定义！:( ");

\#endif

}

如果程序开头有#define NUM这行，即NUM有定义，碰到下面#ifdef NUM的时候，当然执行第一个printf。否则第二个printf将被执行。

我认为，用这种，可以很方便的开启/关闭整个程序的某项特定功能。

2:情况2： 

\#ifndef _XXXX 

...程序段1... 

\#else 

...程序段2... 

\#endif

这里使用了#ifndef，表示的是if not def。当然是和#ifdef相反的状况（如果没有定义了标识符_XXXX，那么执行程序段1，否则执行程序段2）。例子就不举了。

3：情况3：

\#if 常量 

...程序段1...

\#else

...程序段2...

\#endif 

这里表示，如果常量为真（非0，随便什么数字，只要不是0），就执行程序段1，否则执行程序段2。

我认为，这种方法可以将测试代码加进来。当需要开启测试的时候，只要将常量变1就好了。而不要测试的时候，只要将常量变0。

iOS常用的系统参数宏：



// 判断是否是真机

\#if TARGET_OS_IPHONE // 在这里一定不能使用#ifdef，因为TARGET_OS_IPHONE无论在真机还是模拟器情况下都存在只不过 模拟器时值为0

\#else

\#endif

// 判断是否是模拟器

\#if TARGET_OS_SIMULATOR // 同上。"TARGET_IPHONE_SIMULATOR"已经废弃

\#else

\#endif

// 判断手机系统版本

\#if __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_9_0

\#else

\#endif

// 规定只能在ios系统下运行

\#ifdef __IPHONE_OS_VERSION_MIN_REQUIRED 

​    // 规定运行支持的最小版本

​    \#if __IPHONE_OS_VERSION_MIN_REQUIRED < __IPHONE_7_0

​    \#else

​    \#endif

\#endif

// 可以参照Availability.h 文件  文件路径 /Applications/Xcode8.1.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/usr/include 不同Xcode版本路径略有差异

/**

 \#define __IPHONE_2_0      20000

 \#define __IPHONE_2_1      20100

 \#define __IPHONE_2_2      20200

 \#define __IPHONE_3_0      30000

 \#define __IPHONE_3_1      30100

 \#define __IPHONE_3_2      30200

 \#define __IPHONE_4_0      40000

 \#define __IPHONE_4_1      40100

 \#define __IPHONE_4_2      40200

 \#define __IPHONE_4_3      40300

 \#define __IPHONE_5_0      50000

 \#define __IPHONE_5_1      50100

 \#define __IPHONE_6_0      60000

 \#define __IPHONE_6_1      60100

 \#define __IPHONE_7_0      70000

 \#define __IPHONE_7_1      70100

 \#define __IPHONE_8_0      80000

 \#define __IPHONE_8_1      80100

 \#define __IPHONE_8_2      80200

 \#define __IPHONE_8_3      80300

 \#define __IPHONE_8_4      80400

 \#define __IPHONE_9_0      90000

 \#define __IPHONE_9_1      90100

 \#define __IPHONE_9_2      90200

 \#define __IPHONE_9_3      90300

 \#define __IPHONE_10_0    100000

 \#define __IPHONE_10_1    100100

 */

3、文件包含

C语言下一般使用 #include, OC中一般使用 #import ,它们的区别是：在使用#include的时候要注意处理重复引用，#import大部分功能和#include是一样的,但是他处理了重复引用的问题,我们在引用文件的时候不用再去自己进行重复引用处理。OC中还有一个引用声明 @class主要是用于声明一个类,告诉编译器它后面的名字是一个类的名字,而这个类的定义实现是暂时不用知道的。一般来说,在interface中(.h文件)引用一个类,就用@class,它会把这个类作为一个类型来使用,而在实现这个interface的文件中,如果需要引用这个类的实体变量或者方法之类的,还是需要import这个在@class中声明的类。

————————————————

版权声明：本文为CSDN博主「yingBi2014」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/yingBi2014/article/details/79664466
