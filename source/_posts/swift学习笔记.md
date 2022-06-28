---
title: swift学习笔记
tags:
  - swift
categories:
  - swift
date: 2020-03-28 17:31:58
---

## 基础语法

### 基础部分

- var、let

- 类型注解

  当你声明常量或者变量的时候可以加上类型注解（type annotation），说明常量或者变量中要存储的值的类型
  var welcome : String

- 变量常量命名

  1.常量与变量名不能包含数学符号，箭头，保留的（或者非法的）Unicode 码位，连线与制表符。也不能以数字开头，但是可以在常量与变量名的其他地方包含数字
  2.使用保留关键字相同的名称命名，可以使用反引号（`）将关键字包围的方式，但不推荐

- 打印print

  print(_:separator:terminator:)

  separator分隔符
  terminator末尾终止符

  <!-- more -->

- 注释

  //单行注释
  /*   
  多行注释
  */

- 不强制要求语句末尾添加分号；

- 数字类型推荐使用Int/Double，减少类型转换性能消耗

- 类型安全语言，自动类型推断

- 类型取别名typealias

- 布尔值true 和 false

- 元祖

  1.元组把多个值组合成一个复合值。元组内的值可以是任意类型，并不要求是相同类型

- 可选类型String？

- 强制解析！

- 可选绑定

  if let constantName = someOptional {
   statements
  }

- 隐式解析可选类型String!

- 错误处理

  func canThrowAnError() throws {
   // 这个函数有可能抛出错误
  }

- 断言与先决条件assert

### 基本运算符

- switch

  1.默认每个case后不用写自己写break,
  2.可使用fallthrough实现贯穿效果
  3.必须保证能处理所有情况
  4.支持Character/string类型比较

### 字符串和字符

### 集合

### 控制流

### 函数

func pi() -> Double{
	return 3.14
}

- 参数标签

  func gotoWork(at time:string){
  	print('this time is \(time)')

  }

  gotoWork(at:"08:00")

- 可以使用下划线_省略参数标签

  func sum(_ v1: Int,_ v2: Int) -> Int{
  	v1+v2
  }

- 参数可以有默认值

  func check(name: String = "nobody",age: Int){


  }

- 可变参数

  一个函数最多只能有1个可变参数

- 输入输出参数inout

- 函数重载

### 闭包

### 枚举

### 类和结构体

### 属性

### 方法

### 下标

### 继承
