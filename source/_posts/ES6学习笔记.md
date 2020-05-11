---
title: ES6学习笔记
tags:
  - null
categories:
  - null
date: 2020-04-22 09:35:07
---

ES6:ECMAScript是JavaScript的标准，JS是ES的实现，主流实现只有JS，所以很多时候JS就等同于ECMA
正式名称：ES2015，是ECMA标准的第六版

变量:

var存在的问题:

```js
    1、重复声明：
        var a=12;
        var a=5；
    
    2、控制修改：
        var GIT_HOST='github.com'
        if(GIT_HOST='git')

    3、块级作用域：
        ES5的var作用域——函数级
        ES6的let作用域——块级
```

let:变量,防止重复定义
const:常量,防止重复定义

    小总结：
    变量：
        var:重复声明，不能限制修改，函数级
        let:不能重复声明，变量,块级
        const:不能重复声明,常量，块级

------

解构赋值:

json = {a:12,b:5};

let (a,b)=json;



arr = [1,2,3];

let [a,b,c]= arr;

```
1、两边结构必须一样
  let {a,b}=[1,2]
2、右边必须是个东西
  let {a,b}={1,2}
3、赋值与解构同时完成
  let {a,b};
  {a,b}={a:1,b:2}
```

------

箭头函数:

    function(){
        .....
    }
    ()=>{}

简写：
    1、如果有且仅有一个参数，（）可不写
    2、如果有且仅有一个语句并且是return，{}也可以不写

修正this

------

...

参数展开
    收集
    展开

数组展开
json展开

------

Array扩展:

map         映射，一一对应（n=>n）
reduce      n=>1
filter      过滤（n=>?）
forEach     遍历

------

模板字符串:

```js
let arr=[12,56,87,95,64];
    arr.forEach((item,index) => {
        alert(`第${index}个：${item}`);
    });
```

------

JSON:

stringify:JSON->字符串
Parse:json字符串->JSON

------

babel编译

本地使用:

    1、安装node
    2、安装babel
        npm i @babel/core @babel/cli @babel/preset-env
        npm i @babel/polyfill
    3、添加脚本
        "build":"babel src -d dest"
    4、添加配置
        {
            "presets":{
                "@babel/preset-env"
            }
        }
    5、执行
        npm run build

------

异步操作:

异步操作：同时进行多个操作，用户体验，es6之前代码混乱
同步操作：一次只能进行一个操作，用户体验不好，代码清晰

异步的同步写法:

    Promise
        1、封装
        2、promise.all{[
                p1,
                p2,
                ...
            ]}.then
        3、promise.race
        
    async/await
        普通函数——一直执行，直到结束
        async函数——能够"暂停"

```js
    let p = new Promise(function(resolve,reject){
        $.ajax({
            url:'data/1.txt',
            dataType:'json',
            success(arr){
                resolve(arr);
            },
            error(res){
                reject(res);
            }
        })
    });
    p.then(function(arr){
        alert("成功");
        console.log(arr);
    },function(res){
        alert("失败");
        console.log(res);
    });
```

------

面向对象

语言发展：
    机器语言->汇编语言->低级语言（面向过程）->高级语言（面向对象）->模块系统->框架->系统接口（API）

封装
    ES5面向对象（假的）
        没有统一的写法
    ES6面向对象（假的）
        统一的写法
继承：
    1、省事
    2、便于扩展

ES6新加：
    class           类声明
    constructor     构造函数
    extends         继承
    super           父类/超类

------

模块系统

1、定义

2、使用
    1、导出（export）
        //变量
        export let a=1;
        //函数
        export function show(){
            ......
        }
        //类
        export calss Person{
            .......
        }
        //默认成员
        export default

​    2、导入
​        import * as model from xxx          引入所有成员
​        import model from xxx               引入default成员
​        import {a,b as name} from xxx
​        //只引入，不使用
​        import 'xxx'
​        //异步引入
​        let p=import(xxxx)
​    3、webpack编译 (因暂时浏览器不支持模块化,所以是有wp编译)