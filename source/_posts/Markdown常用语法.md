---
title: Markdown常用语法
date: 2019-09-10 16:44:40
toc: true
tags:
- Markdown
categories: 
- 其他
---


## 第一章 块元素

### 1.1标题

标题有6个等级，用#号表示

```
# 标题1
## 标题2
## 标题2
### 标题2
#### 标题4
##### 标题5
###### 标题6
```

### 1.2引用

使用>字符，表示引用

```
> This is a blockquote with two paragraphs. This is first paragraph.
> This is second pragraph.Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> This is another blockquote with one paragraph. There is three empty line to seperate two blockquote.
```

> This is a blockquote with two paragraphs. This is first paragraph.
> This is second pragraph.Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> This is another blockquote with one paragraph. There is three empty line to seperate two blockquote.

<!--more-->

### 1.3列表

```
* red
* blue
```

* red
* blue

```
1. red
2.      blue
```

1. red
2.      blue

### 1.4任务列表

用 [ ] 或者 [X] 未完成，完成）表示列表，通过点击复选框来更改状态（完成/未完成）

```
- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed
```

- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed

### 1.5代码块

使用 ```<语言> 按回车键，将会对代码进行高亮

```
​```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
​```
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

###1.6数学

可以使用MathJax呈现LaTeX数学表达式

```
$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} 
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$
```

$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} 
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$

### 1.7表格

使用 | First Header | Second Header | 按回车键，将会创建2列的表格

```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

还可以使用 : 号，来设置文字对齐方式

```
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
```

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |

###1.8 脚注

```
使用 [^footnote] 创建脚注.
You can create footnotes like this[^1].
[^1]: Here is the *text* of the **footnote**.
然后，可以把鼠标停留在脚注中，查看内容
```
You can create footnotes like this[^1].
[^1]: Here is the *text* of the **footnote**.

### 1.10横线

输入 *** 或者 — 后，按回车键

---

### 1.11目录

输入 [toc] ，按回车键

[TOC]



## 第二章 Span元素

### 2.1链接

文字描述包含在 [] 内，链接地址包含在 () 内，() 要紧接着 [] 后面

```
This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.
```

This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.

### 2.1.1引用链接

```
[Bing][]
And then define the link:
[Bing]: http://bing.com/
```

[Bing][]
And then define the link:

[Bing]: http://bing.com/

### 2.2图片

```
在链接格式前面添加 ! ，如下

![在这里插入图片描述](http://pxebjkhug.bkt.clouddn.com/image-20190906161123468.png)
```

在链接格式前面添加 ! ，如下

![在这里插入图片描述](http://pxebjkhug.bkt.clouddn.com/image-20190906161123468.png)

###2.3 强调

对应 HTML 的 *标签*

```
*single asterisks*
_single underscores_
```

*single asterisks*

_single underscores_

如果像使用 * 号，在 * 号前使用 \

```
\*this text is surrounded by literal asterisks\*
```

\*this text is surrounded by literal asterisks\*

### 2.4加粗

```
**double asterisks**
__double underscores__
```

**double asterisks**
__double underscores__

### 2.5代码

在文章中现实代码，用 ` 号表示

```
Use the `printf()` function.
```

Use the `printf()` function.

### 2.6删除线

```
~~Mistaken text.~~
```

~~Mistaken text.~~

### 2.7下划线

```
<u>Underline</u>
```

<u>Underline</u>

###2.8Emoji 表情

用两个 : 号包含单词，或者在 编辑 -> 表情与符号 中选择

```
:happy:
```

:happy:

### 2.9高亮

这个功能默认是关闭的，如果要打开这个功能（以 Mac 版本为例），选择 Typora -> 偏好设置 -> markdown 标签，勾选高亮复选框

```
==highlight==
```

==highlight==



