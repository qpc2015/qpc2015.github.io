---
title: React学习笔记
tags:
  - React
categories:
  - web
date: 2020-05-13 10:56:16
---

### DAY1

#### React生态圈

jsx:拓展了js自身的语法,是react的基础

Flux:react的数据流组件

Redux:比flux更加简单、易用

React-Native:用react编写原生移动应用

<!-- more -->

**jsx**

jsx是一门独立的语言,希望能改进js的很多问题,但是es6出现后,包含了jsx的大部分特性,所以很少独立使用

- babel可以编译jsx
- react是基于jsx语法



提供模板式创建元素的方法

```jsx
//普通元素创建
let oDiv = document.createElement('div');
odiv.title = 'aaa';
oDiv.innerHTML = 'BBB';
//jsx方式
let oDiv = <div title="aaa">BBB</div>
```

> 注意:jsx并不会真正创建dom元素,jsx只是解析模板语法,创建虚拟DOM节点,需经由ReactDOM渲染才会成为真正的DOM元素.



**关于虚拟DOM**

直接操作dom元素非常缓慢,所以很多框架(vue,react)都具备虚拟dom特性,我们直接操作的是虚拟dom,而非真正节点,react会在何时的实际批量更新dom节点(一般是主进程空闲时),从而提高性能.



**能否单独使用jsx?**

不能,react强依赖jsx用于解析jsx语法,但是jsx也强依赖react用于解析模板语法



**第一个react程序**

```
   //引入js文件
    <script src="js/browser.js"></script>
    <script src="js/react.js"></script>
    <script src="js/react-dom.js"></script>
    
    //容器
     <div id="root"></div>
     
    //react渲染,经过babel编译才能执行
    <script type="text/babel">
        let root = document.getElementById('root');
        ReactDOM.render(<div>aaa</div>,root);
    </script>
    
```

**特殊属性**

react中类"html代码",其实不是真正的html,而是jsx语法,绝大部分标签与html一样,但是有两个属性需要修改

- class:className
- for:htmlFor



**单标签**

react中单标签必须闭合(html标签和自定义组件都是)

- <img src=''>; 错误
- <img src="" />; 正确



#### react组件

组件

```
       //组件定义
       class Cmp1 extends React.Component{
            constructor(...args){
                super(...args);
            }

            render(){
                let a = 12;
                let name = 'qpc';
                let age = 18;
                return <div> 
                    <span style={{color:'red'}}>你好</span>
                    姓名:{name} 年龄:{age}</div>;
            }
        }
			//组件渲染
        let root = document.getElementById('root');
        ReactDOM.render(<Cmp1 txt="qpc"></Cmp1>,root);
```

注意:

- 组件必须继承React.Component
- 组件必须有constructor()且super父级,否则状态等功能无法使用
- 组件必须有render()方法
- 组件类名必须首字母大写
- 组件使用时,单双标签都可以
- 组件中的html必须规范(双标签闭合,单标签结尾加/)



**模板输出**

输出变量、属性、方法、任何东西都可以

```jsx
 class Cmp1 extends React.Component{
      constructor(...args){
          super(...args);
          
          this.age = 18;
      }
      
      fn(){
      	return 55;
      }

      render(){
          let name = 'qpc';
          let age = 18;
        	const a = 66;
          return <div> 
              <span style={{color:'red'}}>你好</span>
              //输出变量
              姓名:{name} 
              //输出属性
              年龄:{this.age}
              {this.fn()};
            //输出到属性
            <div title={a}>div2</div>
              </div>;
      }
  }
```



**组件传参**

用props接受参数

```jsx
 class Cmp1 extends React.Component{
      constructor(...args){
          super(...args);
      }
   
   render(){
     return <div>
     	{this.props.a},{typeof(this.props.a)}
     </div>
   }  
 }
```



**组件输出**

```jsx
 class Cmp1 extends React.Component{
      constructor(...args){
          super(...args);
      }
   
   render(){
     let spana = <span>aaa</span>
     return <div>
     	{spana}
     </div>
   }  
 }

//输出一组元素
   render(){
     let arr = [
       <span key={0}>aaa</span>,
       <span key={1}>bbb</span>,
       <span key={2}>ccc</span>
     ];
     return <div>
     	{arr}
     </div>
   } 
```

关于key

key非常重要，它关联虚拟dom和真实dom，从而在虚拟dom修改时对实际dom元素做最小化额修改以此提高性能，普通元素其实也有key，由react自己生成

> 注意：尽量不要用index作为key,因为index是会变化的（比如删掉一个元素，后续元素的index会变化）

key的选择标准：

- 唯一：否则reactdom无法重用
- 不变：否则dom元素混乱



**组件循环**

```jsx
   render(){
     let arr = [1，2，3];
     return <div>
     {arr.map((item,index) =>(
     	<span key={index}>{item}</span>
     ))}
     </div>
   } 
```

**组件嵌套**

```jsx
class item extends React.Component{
      constructor(...args){
          super(...args);
      }
   render(){
     return (
       <li>
         {this.props.data}
       </li>
     )
   }  
 }

class list extends React.Component{
      constructor(...args){
          super(...args);
      }
   render(){
     let arr = [1,2,3];
     return (
       <ul>
         {arr.map((n,index)=><item key={index} data={n}></item>)}
       </ul>
     )
   }  
 }

//输出一组元素
   render(){
     let arr = [
       <span key={0}>aaa</span>,
       <span key={1}>bbb</span>,
       <span key={2}>ccc</span>
     ];
     return <div>
     	{arr}
     </div>
   } 
```



**组件状态**

**状态**

- 属性是只读的，状态是可变的
- 状态的改变，组件会重新渲染

```jsx
 class Cmp1 extends React.Component{
    constructor(...args){
        super(...args);
        //初始化状态
        this.state={a:0};
    }
    
    add(){
    	this.setState({
    		a:this.state.a+1
    	});
    }
   
   render(){
     return <div>
       <input type="button" value="加1" onClick={thi.add.bind(this)}></input>
     	{this.state.a}
     </div>
   }  
 }

```

注意：

- 状态的初始化只能在constructor中完成
- 必须通过setState修改状态，否则也不能重新渲染——setState调用了render



**props变化引起重新渲染**

**强制渲染(forceUpdate)**



**组件生命周期**

componentDidMount组件已经挂载

shouldComponentUpdate:即将开始更新组件，可以阻值更新发生

componentDidUpdate组件已更新



**组件引用**

- ref：需用引用的组件
- refs:父级中引用所有ref组件

实例：求和

```jsx
 class Cmp1 extends React.Component{
    constructor(...args){
        super(...args);
        //初始化状态
        this.state={sum:0};
    }
    
    fn(){
    	this.setState({
    		sum:parseInt(this.refs.num1.value)+parseInt(this.refs.num2.value)
    	});
    }
   
   render(){
     return <div>
       <input type="text" ref="num1"/>
       <input type="text" ref="num2"/>
       <input type="button" value="求和" onClick={thi.fn.bind(this)}/>
     	{this.state.sum}
     </div>
   }  
 }
```

> 和vue有所不同，react中的ref不能重复，如果重复，后面的会覆盖掉前面的



**组件通信**

redux