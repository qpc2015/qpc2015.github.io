---
title: Xib及自定义控件封装
tags:
  - iOS
categories:
  - iOS
date: 2020-07-04 10:40:45
---

## view的封装（自定义控件封装）

- 如果一个view内部的子控件比较多，一般会考虑自定义一个view，把它内部子控件的创建屏蔽起来，不让外界关心
- 外界可以传入对应的模型数据给view，view拿到模型数据后给内部的子控件设置对应的数据
- 封装控件的基本步骤
- <!--more-->

- - 在initWithFrame:方法中添加子控件，提供便利构造方法
  - 在layoutSubviews方法中设置子控件的frame（一定要调用super的layoutSubviews）
  - 增加模型属性，在模型属性set方法中设置数据到子控件上Xib和storyboard对比

- 共同点：

- - 都用来描述软件界面
  - 都用Interface Builder工具来编辑
  - 本质都是转换成代码去创建控件

- 不同点

- - Xib是轻量级的，用来描述局部的UI界面
  - Storyboard是重量级的，用来描述整个软件的多个界面，并且能展示多个界面之间的跳转关系Xib的加载

```plain
// 方法1
NSArray *views = [[NSBundle mainBundle] loadNibNamed:@"xib文件名" owner:nil options:nil]
// 方法2
UINib *nib = [UINib nibWithNibName:@"xib文件名" bundle:nil];
NSArray *views = [nib instantiateWithOwner:nil options:nil];
```



**使用xib自定义view的步骤**

- 新建自定义控件类（如KZKShopView） Subclass of选择 UIView
- 新建Xib文件（文件名建议和View的类名一致，这样看起来比较直观）
- 修改Xib中View的类名（Custom Class）
- 封装xib的加载过程

```plain
// h头文件中
@interface KZKShopViwe : View
+ (instancetype)shopView;
@end
// m文件中
@implementation KZKShopwView
+ (instancetype)shopView{
  return [[[NSBundle mainBundle] loadNidNamed:@"KZKShopView" owver:nil options:nil] lastobject];
}
@end
```

- 增加模型属性，在模型属性set方法中设置数据到子控件上注意点
- 一个控件有两种创建方式

- - 通过代码创建

- - - 初始化时一定会调用initWithFrame:方法

- - 通过xib\storyboard创建

- - - 初始化时不会调用initWithFrame:方法，只会调用initWithCoder:方法
    - 初始化完毕后会调用awakeFromNib方法

- 有时候希望在控件初始化时做一些初始化操作，比如添加子控件、设置基本属性

- - 这时需要根据控件的创建方式，来选择在initWithFrame:、initWithCoder:、awakeFromNib的哪个方法中操作





**参考**

XIB自定义View的坑（https://juejin.cn/post/6844903636741390344）
