# JavaScript 进阶
## 一、基础总结深入
### 1. 数据类型
##### 1. 数据类型的分类和判断
* 基本(值)类型

    | 数据类型 | 值 | 判断方式 |
    | :----: | :----: | :---- |
    | Number | 任意数值 | · typeof |
    | String | 任意字符串 | · typeof |
    | Boolean | true/false | · typeof |
    | null | null | · === |
    | undefined | undefined | · typeof<br>· === |

* 对象(引用)类型

    | 数据类型 | 值 | 判断方式 |
    | :----: | :----: | :---- |
    | Object | 任意数值 | · typeof<br>· instanceof |
    | Array | 特别对象 | · instanceof |
    | Function | 特别对象 | · typeof |

> 1. *typeof*
>     - 返回字符串
>     - 可以判断：
>       - string number boolean undefined function
>     - 不能判断：
>       - null与object
>       - object与array
> 2. *instanceof*
>     - 返回布尔值
>     - 判断对象的具体类型
> 3. ===
>      - 可以判断：
>          - undefined null


##### 2. 常见问题  

**1. undefined 和 null 的区别**
- undefined代表定义未赋值
- nulll定义并赋值了, 只是值为null  

**2. 什么时候给变量赋值为null**
- 初始赋值, 表明将要赋值为对象
- 结束前, 让对象成为垃圾对象(被垃圾回收器回收)  

**3. 变量类型与数据类型区别**
- 数据的类型
  - 基本类型
  - 对象类型
- 变量的类型(变量内存值的类型)
  - 基本类型：保存的是基本类型的数据
  - 引用类型：保存的是地址值

### 2. 数据、变量、内存  

##### 1. 数据  
- 在内存中**可读的**, **可传递的**保存了特定信息的东西  
        
##### 2. 变量
- 可变化的量, 由变量名和变量值组成  

##### 3. 内存
- 内存条通电后产生的临时存储空间  
    >    一块小内存的2个数据：
        > - 内部存储的数据
        > - 地址值

##### 4. 关系
- 内存是用来存储数据的空间
- 变量是内存的标识, 通过变量读/写内存中的数据 
##### 5. 相关问题
1. 引用变量赋值问题:
    - 2个引用变量指向同一个对象, 通过一个变量修改对象内部数据, 另一个变量看到的是修改之后的数据
    - 2个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象, 另一引用变量依然指向前一个对象
        ```javascript
        var a = {age:20};
        function func(obj){
            obj = {age:25};
            return obj.age;
        }
        console.log(func(a)); // 25
        console.log(a.age); // 20 
        //执行函数 -> obj = a;
        //        -> 把a的对象内容赋值给obj 
        //        -> 给obj赋值新的对象 
        //        -> a并没有发生改变
        ```
2. 数据传递问题：
    - 在js调用函数传递变量参数时, 是值传递还是引用传递：
        - 理解1: 都是值(基本/地址值)传递
        - 理解2: 可能是值传递, 也可能是引用传递(地址值)
        ```javascript
        var a = 1;
        function func(a){
            a = a+1;
            return a;
        }
        console.log(func(a)); // 2
        console.log(a); // 1
        //执行函数 -> a = a
        //        -> 等号左边为写，右边为读
        //        -> 局部变量a的值发生改变 
        //        -> 全局变量a本身不变
        ```
3. 内存管理问题：
    - 内存生命周期
        * 分配小内存空间, 得到它的使用权
        * 存储数据, 可以反复进行操作
        * 释放小内存空间
    - 释放内存
        * 局部变量: 函数执行完自动释放
        * 对象: 成为垃圾对象 ==> 垃圾回收器回收
### 3. 对象 
##### 1. 定义
- 用来保存多个数据的封装体，便于统一管理
##### 2. 组成
- 由属性名和属性值（可为任意值）组成
##### 3. 访问/添加/修改内部数据
- obj.name
- obj['name']  
    > 必用 [ ] 的情况：
    >    1. 属性名包含特殊字符: - 空格
    >    2. 属性名不确定
    > ```javascript
    > var p = {};
    > var propName = 'myAge'
    > var value = 25;
    > p[propName] = value;
    > ```

### 4. 函数 
##### 1. 定义
- 用来实现特定功能的，可以执行的，n条语句的封装体
##### 2. 声明
- 函数表达式v
- 关键字声明
##### 3. 调用
  * func(): 直接调用
  * obj.func(): 通过对象调用
  * new func(): new调用
  * func.call/apply(obj): 临时让func成为obj对象的方法进行调用
  ```javascript
    var obj = {};
    function func(){
        this.xxx = 'ooo';
    }
    func.call(obj);
    console.log(obj.xxx); // 'ooo'
    // 相当于obj.func() 
  ```
##### 4. 回调函数
###### 1. 定义
- 自定义，未调用但会在某时刻或某条件下执行的函数
###### 2. 类型
- dom事件回调函数 ——> this指dom对象
- 定时器回调函数 ——> this指window
- ajax请求回调函数
- 生命周期回调函数

##### 5. 匿名函数自调用
###### 1. 全称
- Immediately-Invoked Function Expression
###### 2. 作用
  * 隐藏内部实现
  * 避免污染外部(全局)命名空间
  * 用以编码js模块
    ``` javascript
    ;(function () {
        var a = 1
        function test () {
        console.log(++a)
        }
        window.$ = function () { // 向外暴露一个全局函数$
        return {
            name: test
        }
        }
    })()
    $().name() // 2
               // 1. $是一个函数名 
               // 2. $执行后返回的是一个对象
               // 3. 该对象的name属性：执行函数test
    ```
##### 6. 函数中的this
###### 1. 定义
  * 任何函数本质上都是通过某个对象来调用的，如果没有直接指定就是window
  * 所有函数内部都有一个变量this
  * 它的值是调用函数的当前对象
###### 2. 值  

| 调用方式 | this |
| :---:| :---: | 
| func() | window |
| a.func() | a |
| var a = new Func() | a |
| func.call(obj) | obj |  

##### 7. 分号问题
- JS可以不写分号，但以 ( [ / + - 开头的语句要在句首加;
## 二、函数高级
### 1. 原型与原型链
##### 1. 原型
* 所有函数都有一个特别的属性:
  * `prototype` : 显式原型属性
* 所有实例对象都有一个特别的属性:
  * `__proto__` : 隐式原型属性
* 显式原型与隐式原型的关系
  * 函数的prototype: 定义函数时被自动赋值, 值默认为{}, 即为原型对象
  * 实例对象的__proto__: 在创建实例对象时被自动添加, 并赋值为构造函数的prototype值
  * 原型对象即为当前实例对象的父对象
##### 2. 原型链
  * 所有的实例对象都有__proto__属性, 指向原型对象
  * 通过__proto__属性形成了一个链的结构---->原型链
  * 当查找对象内部的属性/方法时, js引擎自动沿着这个原型链查找
  * 当给对象属性赋值时不会使用原型链, 而只是在当前对象中进行操作

> ```javascript
> function Fn (){
>   this.test1 = function (){
>     console.log('test1()')
>   }
> }
> Fn.prototype.test2 = function (){
>   console.log(test2())
> }
> var fn = new Fn()
> fn.test1()
> fn.test2()
> console.log(fn.toString())
> fn.test3()
> ```
  ![原型链简易示意图](https://github.com/chloeclay/coding-notes/blob/JS/images/%E5%8E%9F%E5%9E%8B%E9%93%BE.jpg?raw=true)  

>  * 除Object外所有函数的显性原型prototype指向的对象都默认是空Object对象
>     ``` javascript
>     console.log(Fn.prototype instanceof Object) // true
>     console.log(Object.prototype instanceof Object) // false
>     console.log(Function.prototype instanceof Object) // true
>     ```
>  * 所有函数都是Function的实例 
> -> 所有函数的__proto__都相同
>     ``` javascript
>     console.log(Function.__proto__ === Function.prototype) // true
>     ```
>  * Object的原型对象是原型链的尽头
>     ``` javascript
>     console.log(Object.prototype.__proto__) // null
>     ```
>
> * ![原型链完整示意图](https://github.com/chloeclay/coding-notes/blob/JS/images/%E5%8E%9F%E5%9E%8B%E9%93%BE2.png?raw=true)  
  * instanceof
> ```javascript
> console.log(Function instanceof Object)
> console.log(Object instanceof Object)
> console.log(Function instanceof Function)
> console.log(Object instanceof Function)
> // 全为true
> ```

##### 3. 面试题
1.  > ```javascript
    > function A () {}
    > A.prototype.n = 1
    > var b = new A()
    > A.prototype = {
    >   n: 2,
    >   m: 3
    > }
    > var c = new A()
    > console.log(b.n, b.m, c.n, c.m)
    > // 1 undefined 2 3
    > // 给原型函数prototype重新赋值，值为一个新的对象
    > // 切断了与原prototype对象的连接
    >```

2.  > ```javascript
    > function F (){}
    > Object.prototype.a = function(){
    >   console.log('a()')
    > }
    > Function.prototype.b = function(){
    > console.log('b()')
    > }
    > var f = new F()
    > f.a() // a()
    > f.b() // undefined
    > F.a() // a()
    > F.b() // b()
    > ``` 


### 2. 执行上下文与执行上下文栈(stack) 
##### 1. 变量声明提升 & 函数声明提升 
  * 变量提升: 在变量定义语句之前, 就可以访问到这个变量(undefined)
  * 函数提升: 在函数定义语句之前, 就执行该函数
  * 先有变量提升, 再有函数提升
##### 2. 执行上下文 & 执行上下文栈
  - 定义：
    * 执行上下文：由js引擎自动创建的对象, 包含对应作用域中的所有变量属性
    * 执行上下文栈：用来管理产生的多个执行上下文
    * 先执行变量提升，再执行函数提升
  - 范例：
  > ```javascript
  > // 1. 全局执行上下文
  > var a = 10
  > var bar = function (x) {
  >   var b = 5
  >   foo(x + b) // 3. foo函数执行上下文
  > }
  > var foo = function(y) {
  >   var c = 5
  >   console.log(a + c + y)
  > }
  > bar(10) // 2. bar函数执行上下文
  > // 结果输出：20
  >``` 
  - 生命周期
    * 全局 : 准备执行全局代码前产生, 当页面刷新/关闭页面时死亡
    * 函数 : 调用函数时产生, 函数执行完时死亡
  - 属性
    * 全局 : 

      | 属性 | 值 | 
      | :----: | :---: |
      | 用var定义的全局变量 | undefined |
      | 使用function声明的函数 | function |
      | this | window |  
      
    * 函数

      | 属性 | 值 | 
      | :----: | :---: |
      | 用var定义的局部变量 | undefined |
      | 使用function声明的函数 | function |
      | this | 调用函数的对象, 如果没有指定就是window  |
      | 形参变量 | 对应实参值 |
      | arguments | 实参列表的伪数组 |

  - 执行流程
    * 全局:
      * 在全局代码执行前先创建一个全局执行上下文(window)
      * 收集一些全局变量, 并初始化
      * 将这些变量设置为window的属性
    * 函数:
      * 在调用函数时, 在执行函数体之前先创建一个函数执行上下文
      * 收集一些局部变量, 并初始化
      * 将这些变量设置为执行上下文的属性
##### 3. 面试题
1. > ```javascript
   >  console.log('gb: '+ i)
   >  var i = 1
   >  foo(1)
   >  function foo(i) {
   >    if (i == 4) {
   >      return
   >    }
   >    console.log('fb:' + i)
   >    foo(i + 1) //递归调用: 在函数内部调用自己
   >    console.log('fe:' + i)
   >  }
   >  console.log('ge: ' + i)
   > // gb: undefined
   > // fb: 1
   > // fb: 2
   > // fb: 3
   > // fe: 3
   > // fe: 2
   > // fe: 1
   > // ge: 1
   > ```
2. > ```javascript
   > function a() {}
   > var a
   > console.log(typeof a) // function
   > ```
3. > ```javascript
   > if (!(b in window)){
   >    var b = 1
   > }
   > console.log(b) // undefined
   > // if作用域中的var也会被提升至全局 
   > // 因此b in window恒为true
   > ```
4. > ```javascript
   > var c = 1
   > function c (c){
   >    console.log(c)
   >    var c = 3
   > }
   > c(2) // c is not a function
   > ```

![执行上下文栈示意图](https://github.com/chloeclay/coding-notes/blob/JS/images/%E4%B8%8A%E4%B8%8B%E6%96%87%E6%A0%88.png?raw=true)  
### 3. 作用域与作用域链
##### 1. 理解
  * 作用域：一块代码区域, 在编码时就确定了, 不会再变化
  * 作用域链：多个嵌套的作用域形成的由内向外的结构, 用于查找变量
##### 2. 分类
  * 全局作用域
  * 函数作用域
  * js没有块作用域(在ES6之前)
##### 3. 作用
  * 作用域：隔离变量, 可以在不同作用域定义同名的变量
  * 作用域链：查找变量
##### 4. 作用域与执行上下文
  * 作用域：静态的, 编码时就确定了(不是在运行时), 一旦确定就不会变化了
  * 执行上下文：动态的, 执行代码时动态创建, 当执行结束消失
  * 联系：执行上下文环境在对应的作用域中
##### 5. 面试题
1.  > ```javascript
    > var x = 10
    > function fn (){
    >     console.log(x)
    > }
    > function show(f){
    >     var x = 20
    >     f()
    > }
    > show(fn)
    > // 10
    > // 作用域产生后不再改变 
    > // 函数执行时从自己的作用域开找
    > ```
2.  > ```javascript
    > var fn = function () {
    >   console.log(fn)
    > }
    > fn()
    > var obj = {
    >   fn2: function () {
    >       console.log(fn2)
    >   }
    > }
    > obj.fn2()
    > // fn2 is not defined
    > // fn2函数执行时先在自身作用域找
    > // 后去全局作用域找
    > ```
### 4. 闭包
##### 1. 理解
  * 当嵌套的内部函数引用了外部函数的变量时就产生了闭包
  * 闭包本质是内部函数中的一个对象，这个对象中包含引用的变量属性
##### 2. 作用
  * 延长局部变量的生命周期
  * 让函数外部能操作内部的局部变量
##### 3. 范例
```javascript
function fn1 () {
  var a = 2
  var b = 'abc'
  function fn2 () {
    // 执行函数定义时产生闭包
    // 需要调用外部函数 不用调用内部函数
    console.log(a)
  }
  fn2()
}
fn1()
```
##### 4. 常见闭包
1. 将函数作为另一个函数的返回值
```javascript
  function fn1() {
    // 此时闭包产生
    var a = 2
    function fn2() {
      a++ 
      console.log(a)
    }
    return fn2
  }
  var f = fn1()
  // f引用fn2对象 所以不消失
  f() // 3
  f() // 4
```
2. 将函数作为实参传递给另一个函数调用
```javascript
  function showDelay(msg, time) {
    setTimeout(function () {
      alert(msg)
    }, time)
  }
  showDelay('bonjour', 2000)
```
##### 5. 应用
* 闭包应用:
  * 模块化: 封装一些数据以及操作数据的函数, 向外暴露一些行为
  * 循环遍历加监听
  * JS框架(jQuery)大量使用了闭包
- 范例
```javascript
;(function (window){
  var msg = 'Bonjour'
  function upperCase(){
    console.log(msg.toUpperCase)
  } 
  function lowerCase(){
    console.log(msg.toLowerCase)
  }
  //向外暴露对象(给外部使用的方法)
  window.module = {
    upperCase: uppserCase,
    lowerCase: lowerCase
  }
})(window)
```
##### 6. 内存溢出与内存泄露
 1. 内存溢出
    * 一种程序运行出现的错误
    * 当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误
2. 内存泄露
    * 占用的内存没有及时释放
    * 内存泄露积累多了就容易导致内存溢出
    * 常见的内存泄露:
      * 意外的全局变量
      * 没有及时清理计时器或回调函数
      * 闭包
##### 7. 面试题
1. this在对象中所指向的值
```javascript
var name = 'window'
var obj = {
  name: 'object'
  func: function () {
    return function () {
      return this.name
    }
  }
}
console.log(obj.func()()) // window
// 执行内部函数时是全局window在调用
```
```javascript
var name = 'window'
var obj = {
  name: 'object'
  func: function () {
    var that = this
    return function () {
      return that.name
    } 
  }
}
console.log(obj.func()()) // object
// 用that保存了调用func时this所指代的obj对象
```
2. 闭包的生命周期
```java
  function fun(n,o) {
    console.log(o)
    return {
      fun:function(m){
        return fun(m,n)
      }
    }
  }
  var a = fun(0)
  a.fun(1)
  a.fun(2)
  a.fun(3)//undefined,0,0,0

  var b = fun(0).fun(1).fun(2).fun(3)//undefined,0,1,2

  var c = fun(0).fun(1)
  c.fun(2)
  c.fun(3)//undefined,0,1,1
```


## 三、对象高级
### 1. 对象的创建模式
1. Object构造函数模式
  ```javascript
  var obj = {};
  obj.name = 'Tom'
  obj.setName = function(name){this.name=name}
  ```
2. 对象字面量模式
  ```javascript
  var obj = {
    name : 'Tom',
    setName : function(name){this.name = name}
  }
  ```
3. 构造函数模式
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.setName = function(name){this.name=name;};
  }
  new Person('tom', 12);
  ```
4. 构造函数+原型的组合模式
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.setName = function(name){this.name=name;};
  new Person('tom', 12);
  ```
### 2. 继承模式
##### 1. 原型链继承
   ```javascript
  function Parent(){}
  Parent.prototype.test = function(){};
  function Child(){}
  // 子类型的原型指向父类型实例：
  Child.prototype = new Parent(); 
  // 让子类型的原型的constructor指向子类型
  Child.prototype.constructor = Child
  var child = new Child(); //有test()
  ```
##### 2. 借用构造函数 : 得到属性
  ```javascript
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      //借用构造函数
      Parent.call(this, xxx);   
      this.Parent(xxx)
  }
  var child = new Child('a', 'b');  
  //child.xxx为'a', 但child没有test()
  ```
##### 3.  组合
  ```javascript
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
  }
  Child.prototype = new Parent(); //得到test()
  var child = new Child(); //child.xxx为'a', 也有test()
  ```
### 3. new一个对象背后做了些什么?
  * 创建一个空对象
  * 给对象设置__proto__, 值为构造函数对象的prototype属性值   
  this.\_\_proto\_\_ = Fn.prototype
  * 执行构造函数体(给对象添加属性/方法)




## 四、线程机制与事件机制
### 1. 进程与线程
* 进程:
  * 程序的一次执行, 它占有一片独有的内存空间
  * 可以通过windows任务管理器查看进程
* 线程:
  * 是进程内的一个独立执行单元
  * 是程序执行的一个完整流程
  * 是CPU的最小的调度单元
* 关系
  * 一个进程至少有一个线程(主)
  * 程序是在某个进程中的某个线程执行的
![进程与线程示意图](https://github.com/chloeclay/coding-notes/blob/JS/images/%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B.png?raw=true)
### 2. 浏览器内核模块组成
* 主线程
  * js引擎模块 : 负责js程序的编译与运行
  * html,css文档解析模块 : 负责页面文本的解析
  * DOM/CSS模块 : 负责dom/css在内存中的相关处理 
  * 布局和渲染模块 : 负责页面的布局和效果的绘制(内存中的对象)
* 分线程
  * 定时器模块 : 负责定时器的管理
  * DOM事件模块 : 负责事件的管理
  * 网络请求模块 : 负责Ajax请求
### 3. js线程
* js是单线程执行的(回调函数也是在主线程)
* H5提出了实现多线程的方案: Web Workers
* 只能是主线程更新界面
### 4. 定时器问题:
* 定时器并不真正完全定时
* 如果在主线程执行了一个长时间的操作, 可能导致延时才处理   
### 5. 事件处理机制
* 代码分类
  * 初始化执行代码: 包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码
  * 回调执行代码: 处理回调逻辑
* js引擎执行代码的基本流程: 
  * 初始化代码===>回调代码
* 模型的2个重要组成部分:
  * 事件管理模块
  * 回调队列
* 模型的运转流程
  * 执行初始化代码, 将事件回调函数交给对应模块管理
  * 当事件发生时, 管理模块会将回调函数及其数据添加到回调列队中
  * 只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行
![事件处理示意图](https://github.com/chloeclay/coding-notes/blob/JS/images/%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.png?raw=true)

### 6. H5 Web Workers
* 可以让js在分线程执行
* 问题:
  * worker内代码不能操作DOM更新UI
  * 不是每个浏览器都支持这个新特性
  * 不能跨域加载JS

* svn版本控制
* svn server

* 应用：
  - 斐波那契数列
```java
  var worker = new Worker('worker.js');
  //用来接收另一个线程发送过来的数据的回调
  worker.onMessage = function(event){event.data} 
  // 向另一个线程发送数据
  worker.postMessage(data1) 
```
![webworker示意图](https://github.com/chloeclay/coding-notes/blob/JS/images/webworker.png?raw=true)


---
- 进度条
    - 实际
        - 2022-08-02 尚硅谷JS高级 P7 对象    
        - 2022-08-03 尚硅谷JS高级 P15 原型prototype
        - 2022-08-04 尚硅谷JS高级 P18 原型链补充
        - 2022-08-05 尚硅谷JS高级 P23 执行上下文
        - 2022-08-10 尚硅谷JS高级 P26 复习
        - 2022-08-11 尚硅谷JS高级 P37 对象创建模式
        - 2022-08-12 尚硅谷JS高级 P42 进程与线程
    - 预计
        - 2022-08-02 尚硅谷JS高级 P7 对象    
        - 2022-08-03 尚硅谷JS高级 P15 原型prototype
        - 2022-08-04 尚硅谷JS高级 P23 执行上下文
        - 2022-08-05 尚硅谷JS高级 P29 循环遍历监听
        - 2022-08-08 尚硅谷JS高级 P36 面试题
        - 2022-08-09 尚硅谷JS高级 P42 进程与线程

---
## 常用格式
#### 级别标题
*斜体体文本*
**粗体文本**
1. 数字列表
- 项目列表
    - 子项目列表
> 最外层
> > + 第一项第二层嵌套
> >    + 第一项第二层嵌套
```javascript
$(document).ready(function () {
    alert('bonjour');
});
```
![alt 属性文本](http://static.runoob.com/images/runoob-logo.png "可选标题")
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 左边单元格 | 右边单元格 | 居中单元格 |
| 单元格 | 单元格 | 单元格 |
创建脚注格式类似这样 [^RUNOOB]。
[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
