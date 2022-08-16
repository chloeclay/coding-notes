# jQuery笔记
## 1. 基础知识
### 1. 了解jQuery
##### 1. 用途
* 强大选择器: 方便快速查找DOM元素
* 隐式遍历(迭代): 一次操作多个元素
* 读写合一: 读数据/写数据用的是一个函数
* 链式调用: 可以通过.不断调用jQuery对象的方法
* 事件处理
* DOM操作(CUD)
* 样式操作
* 动画
* 浏览器兼容
##### 2. 使用
- 引入
    * 本地引入/CDN远程引入
    * 测试版与生产版(压缩版)
- 内容
    * 使用jQuery函数: $/jQuery
    * 使用jQuery对象: $xxx(执行$()得到的)
### 2. 核心函数&对象
##### 1. 函数 $ / jQuery
  * jQuery向外暴露的就是jQuery函数, 可以直接使用
  * 作为一般函数使用: $(param)
    1. 参数为**函数** : 当DOM加载完成后，执行此回调函数
    2. 参数为**选择器字符串**: 查找所有匹配的标签, 并将它们封装成jQuery对象
    3. 参数为**DOM对象**: 将dom对象封装成jQuery对象
    4. 参数为**html标签字符串** (用得少): 创建标签对象并封装成jQuery对象
  * 当成对象使用: $.xxx
    * $.each(obj/arr, function(key, value){})：隐式遍历数组
    * $.trim(str)：去除两端的空格
##### 2. 对象 $()
  - 定义：一个包含所有匹配的任意多个dom元素的伪数组对象
  - 基本方法：
    * size()/length: 包含的DOM元素个数
    * [index]/get(index): 得到对应位置的DOM元素
    * each(): 遍历包含的所有DOM元素
    * index(): 得到在所在兄弟元素中的下标
  - 伪数组
    - 是一个Object对象
    - 有length和数值下标属性
    - 没有其他数组的方法（如forEach(), push(), pop(), splice()）
    - 自定义一个伪数组：
  ```java
    var falseArr = {}
    falseArr.length = 0
    falseArr[0] = 'Bonjour'
    falseArr.length = 1
    falseArr[1] = 'Chloe'
    falseArr.length = 2
    for(var i = 0; i < falseArr.length; i++){
      var obj = falseArr[i]
      console.log(i, obj)
    }
    console.log(falseArr.forEach, $btns.forEach)
    // undefined undefined
  ```
---
- 进度条
    - 2022-08-16 尚硅谷jQuery P6 基本选择器

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
[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！