---
title: flutter学习笔记
tags:
  - flutter
categories:
  - flutter 移动端
date: 2020-06-28 17:21:58
---

## 基本组件

### state生命周期

initState：当Widget第一次插入到Widget树时会被调用，对于每一个State对象，Flutter framework只会调用一次该回调，所以，通常在该回调中做一些一次性的操作;
didChangeDependencies()：当State对象的依赖发生变化时会被调用；
build()：此回调读者现在应该已经相当熟悉了，它主要是用于构建Widget子树的，会在如下场景被调用：
在调用initState()之后。
在调用didUpdateWidget()之后。
在调用setState()之后。
在调用didChangeDependencies()之后。
在State对象从树中一个位置移除后（会调用deactivate）又重新插入到树的其它位置之后
didUpdateWidget()：如果Widget.canUpdate返回true则会调用此回调
deactivate()：当State对象从树中被移除时，会调用此回调。
dispose()：当State对象从树中被永久移除时调用；

<!-- more -->

### GlobalKey:一种通用的获取State对象的方法

1.给目标StatefulWidget添加GlobalKey
//定义一个globalKey, 由于GlobalKey要保持全局唯一性，我们使用静态变量存储
static GlobalKey<ScaffoldState> _globalKey= GlobalKey();
...
Scaffold(
    key: _globalKey , //设置key
    ...  
)
2.通过GlobalKey来获取State对象
_globalKey.currentState.openDrawer()

### 文本Text、按钮、图片Image

### 单选框Switch、复选框Checkbox

### 输入框textField、表单Form

输入框键盘类型
1.text文本输入键盘
2.multiline多行文本，需和maxLines配合使用(设为null或大于1)
3.number数字；会弹出数字键盘
4.phone优化后的电话号码输入键盘；会弹出数字键盘并显示“* #”
5.datetime优化后的日期输入键盘；Android上会显示“: -”
6.emailAddress优化后的电子邮件地址；会显示“@ .”
7.url优化后的url输入键盘； 会显示“/ .”

### 进度指示器

LinearProgressIndicator
线性、条状的进度条

CircularProgressIndicator一个圆形进度条

## 布局类组件

### 线性布局

textdirection：表示子组件的排列顺序，对于row是从左向右，还是从右向左

mainAxisAlignment:MainAxisAlignment.start表示沿textDirection的初始方向对齐;而MainAxisAlignment.end和MainAxisAlignment.start正好相反；MainAxisAlignment.center表示居中对齐。

- Row横向
- Colunm纵向排列子组件
- flex(Row和Column都继承自Flex)

### 弹性布局Expanded

const Expanded({
  int flex = 1, 
  @required Widget child,
})
flex参数为弹性系数，如果为0或null，则child是没有弹性的，即不会被扩伸占用的空间。如果大于0，所有的Expanded按照其flex的比例来分割主轴的全部空闲空间

### 流式布局

- wrap(子元素超出显示范围后会折行)

  spacing：主轴方向子widget的间距
  runSpacing：纵轴方向的间距

- Flow

  需要自己写布局配置

### 层叠布局

- stack

  子元素可层叠展示

- positioned

  与stack搭配使用时，根据Stack的四个角来确定子组件的位置

- Align

  aligment属性相对父组件确定原点

- Center

## 容器类组件

### Container一个组合类容器

Container({
  this.alignment,
  this.padding, //容器内补白，属于decoration的装饰范围
  Color color, // 背景色
  Decoration decoration, // 背景装饰
  Decoration foregroundDecoration, //前景装饰
  double width,//容器的宽度
  double height, //容器的高度
  BoxConstraints constraints, //容器大小的限制条件
  this.margin,//容器外补白，不属于decoration的装饰范围
  this.transform, //变换
  this.child,
})

### Padding

### ConstrainedBox、SizedBox、UnconstrainedBox、AspectRatio尺寸限制

### 装饰容器DecoratedBox

boxdecoration时decoration的子类
BoxDecoration({
  Color color, //颜色
  DecorationImage image,//图片
  BoxBorder border, //边框
  BorderRadiusGeometry borderRadius, //圆角
  List<BoxShadow> boxShadow, //阴影,可以指定多个
  Gradient gradient, //渐变
  BlendMode backgroundBlendMode, //背景混合模式
  BoxShape shape = BoxShape.rectangle, //形状
})

### 变换Transform

平移
transform.translate
旋转
transform.rotate
缩放
transform.scale

### Scaffold是一个路由页的骨架

- AppBar顶部导航栏

### 剪裁Clip

ClipOval子组件为正方形时剪裁为内贴圆形，为矩形时，剪裁为内贴椭圆
ClipRRect将子组件剪裁为圆角矩形ClipRect剪裁子组件到实际占用的矩形大小（溢出部分剪裁）

## 滚动列表类组件

### ListView

ListView.builder适合列表项比较多（或者无限）的情况，因为只有当子组件真正显示的时候才会被创建，也就说通过该构造函数创建的ListView是支持基于Sliver的懒加载模型的
ListView.builder({
  // ListView公共参数已省略  
  ...
  @required IndexedWidgetBuilder itemBuilder,
  int itemCount,
  ...
})

- ListView.separated分割组件生成器

  class ListView3 extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      //下划线widget预定义以供复用。  
      Widget divider1=Divider(color: Colors.blue,);
      Widget divider2=Divider(color: Colors.green);
      return ListView.separated(
          itemCount: 100,
          //列表项构造器
          itemBuilder: (BuildContext context, int index) {
            return ListTile(title: Text("$index"));
          },
          //分割器构造器
          separatorBuilder: (BuildContext context, int index) {
            return index%2==0?divider1:divider2;
          },
      );
    }
  }

### GridView

和listview类似，gridDelegate是抽象类，子类需要实现具体的布局算法

- SliverGridDelegateWithFixedCrossAxisCount固定数量子元素
- SliverGridDelegateWithMaxCrossAxisExtent固定最大长度

### Scrollbar滚动条

给可滚动组件添加滚动条，只需将Scrollbar作为可滚动组件的任意一个父级组件即可

### SingleChildScrollView

应在期望的内容不会超过屏幕太多时使用，这是因为SingleChildScrollView不支持基于Sliver的延迟实例化模型

### CustomScrollView

可以使用Sliver来自定义滚动模型（效果）的组件

### ScrollController

## 功能型组件

## 事件处理

## 动画效果

## 自定义组件常用方式

## 文件操作和网络请求

## 与native混合开发

https://github.com/alibaba-flutter/flutter-boot

