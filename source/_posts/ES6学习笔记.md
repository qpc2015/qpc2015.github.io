---
title: ES6学习笔记
tags:
  - ES6
categories:
  - web
date: 2020-04-22 09:35:07
---

ES6:ECMAScript是JavaScript的标准，JS是ES的实现，主流实现只有JS，所以很多时候JS就等同于ECMA
正式名称：ES2015，是ECMA标准的第六版

<!-- more -->

### 变量:

var存在的问题:

```js
    1、重复声明：
        var a=12;
        var a=5；
    
    2、不能限制修改：
        var GIT_HOST='github.com'
        if(GIT_HOST='git')

    3、块级作用域：
        ES5的var作用域——函数级
        ES6的let作用域——块级
```

**let:变量,防止重复定义**
**const:常量,防止重复定义**

    小总结：
    变量：
        var:重复声明，不能限制修改，函数级
        let:不能重复声明，变量,块级
        const:不能重复声明,常量，块级

### 解构赋值:

json = {a:12,b:5};

let (a,b)=json;



arr = [1,2,3];

let [a,b,c]= arr;

```
1、两边结构必须一样
  let {a,b}=[1,2]
2、右边必须是个正常数据结构
  let {a,b}={1,2}
3、赋值与解构同时完成
  let {a,b};
  {a,b}={a:1,b:2}
```

------

### Symbol

ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最多的用法是用来定义对象的唯一属性名

1. Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象
2.  作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，所以取到的是字符串 sy 属性
3. Symbol 值作为属性名时,可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果要读取对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 获取

```
let syObject = {};
syObject[sy] = "kk";
 
syObject[sy];  // "kk"
syObject.sy;   // undefined
```

### map

map和object的区别

- map是干净的，只含有显示插入的键，而Object上会有原型上的属性以及方法，es5之后可以说使用Object.create(null)来创建一个干净的对象(vuex源码中大量使用)
- map的键可以是任意的数据类型，包括基本的数据类型，对象以及函数，而object只允许使用symbol以及string或数值
- map中的key是有序的，迭代的时候以其插入的顺序返回键值，而object的键是无序的
  map长度可以通过size方法来获取，而object需要手动计算(Object.keys(obj).length)
- map是可迭代的，object需要通过获取键来迭代
- Map在频繁增删键值对的场景下表现更好，在频繁添加和删除键值对的场景下未作出优化。
  

### set

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用

```
let mySet = new Set();
mySet.add(1); // Set(1) {1}
mySet.add(5); // Set(2) {1, 5}

var mySet1 = new Set([1, 2, 3, 4, 4]);
[...mySet1]; // [1, 2, 3, 4]
```



### string

ES6 之前判断字符串是否包含子串，用 indexOf 方法，ES6 新增了子串的识别方法

- includes()：返回布尔值，判断是否找到参数字符串。
- startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部
- repeat()：返回新的字符串，表示将字符串重复指定次数返回
- padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
- padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。

```
console.log("h".padStart(5,"o"));  // "ooooh"
```

**模板字符串:**

```js
let arr=[12,56,87,95,64];
arr.forEach((item,index) => {
      alert(`第${index}个：${item}`);
});
```

**JSON:**

stringify:JSON->字符串
Parse:json字符串->JSON

```
JSON.stringify({a:12,b:5});      => '{"a":12,"b":5}'
JSON.parse('{"a":12,"b":5}');
```

### Array扩展:

map         映射，一一对应（n=>n）
reduce      n=>1
filter      过滤（n=>?）
forEach     遍历
find  查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素

```
let arr = [68,53,32,98,65];
let strArr =arr.map(function (item){
	return item>=60?'及格':'不及格';
})

//求平均数
let pj = arr.reduce(function (tmp,item,index){
	if(index == arr.length-1){
	 return (temp + item)/arr.length;
	}else{
	 return temp + item;
	}
});

//取出偶数
let arr3 = arr.filter(item=>{
	if(item%2==1){
		return false;
	}else{
		return true;
	}
})

arr.forEach((item,index)=>{
	
})
```

### 函数

**默认参数**

```
function fn(name,age=17){
 console.log(name+","+age);
}
fn("Amy");     // Amy,17
```

**不定参数**

```
function f(...values){
    console.log(values.length);
}
f(1,2);      //2
f(1,2,3,4);  //4
```

**箭头函数**

    function(){
        .....
    }
    ()=>{}

简写：
    1、如果有且仅有一个参数，（）可不写
    2、如果有且仅有一个语句并且是return，{}也可以不写

修正this

### 面向对象 class

语言发展：
    机器语言->汇编语言->低级语言（面向过程）->高级语言（面向对象）->模块系统->框架->系统接口（API）

封装
    ES5面向对象（未标准化）
        没有统一的写法
    ES6面向对象（语法糖）
        统一的写法
继承：
    1、省事
    2、便于扩展

ES6新加：
    class           类声明
    constructor     构造函数
    extends         继承关键字
    super           父类/超类

```
class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	showName(){
		console.log(this.name);
	}
}

let p = new Person();
p.showName();


class Worker extends Person{
	constructor(name,age,job){
		super(name,age);
		this.job = job;
	}
	
	showJob(){
		console.log(this.job);
	}
}
```

### 模块系统

1、定义

```
export let a= 12;
export let b = 5;
```

2、使用
    1、导出（export）
        //变量
        export let a=1;
        //函数
        export function show(){
            ......
        }
        //类
        export class Person{
            .......
        }
        //默认成员
        export default ....

​		export {...}

​    2、导入
​        import * as model from xxx          引入所有成员
​        import model from xxx               引入default成员
​        import {a,b as name} from xxx
​        //只引入，不使用
​        import 'xxx'
​        //异步引入
​        let p=import(xxxx)
​    3、webpack编译 (因暂时浏览器不支持模块化,所以是需要wp编译)

### babel编译 (向后适配)

**本地使用:**

    1、安装node
    2、安装babel
        npm i @babel/core @babel/cli @babel/preset-env
        npm i @babel/polyfill
    3、添加脚本
        "build":"babel src -d dest"  //从src输出到dest
    4、添加.babelrc配置文件
        {
            "presets":{
                "@babel/preset-env"
            }
        }
    5、执行编译
        npm run build

------

### 异步操作:

异步操作：同时进行多个操作，用户体验，es6之前代码混乱
同步操作：一次只能进行一个操作，用户体验不好，代码清晰

异步的同步写法:

```javascript
Promise
    1、封装异步操作
    let p = new Promise(function(resolve,rejext){
    	$.ajex({
    	url:'',
    	success(arr){
    		resolve(arr);
    	},
    	error(res){
    		reject(res);
    	}
    	});
    });
    p.then(function(data){
    	console.log('成功了');
    },function(res){
    	console.log('失败了');
    });
    
    
    2、promise.all{[  //并行调用p1,p2
            p1,
            p2,
            ...
        ]}.then
    3、promise.race  竞速调用
    
```

```js
    async/await
    普通函数——一直执行，直到结束
    async函数——能够"暂停"

		async function show(){
      ....;
      let data = await $.ajax(); //等待请求完成后继续执行
      ....;
    }
```





