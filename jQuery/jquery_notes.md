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
    * 测试版与生产版(min压缩版)
- 内容
    * jQuery函数: $/jQuery
    * jQuery对象: \$xxx(执行$()得到的)
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
  ```javascript
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
    console.log(falseArr.forEach)
    // undefined
  ```
### 3. 选择器
* 分类
  * 基本
    * #id
    * tagName/*
    * .class
    * selector1,selector2,selector3: 并集
    * selector1selector2selector3: 交集
  * 层次
    * selector1>selector2：子元素
    * selector1 selector2：后代元素
    * prev+next：匹配所有紧接在 prev 元素后的 next 元素
    * prev~siblings：匹配 prev 元素之后的所有 siblings 元素
  * 过滤
    * :first
    * :last
    * :eq(index)
    * :lt
    * :gt
    * :odd 奇数
    * :even 偶数
    * :not(selector)
    * :hidden
    * :visible
    * [attrName]
    * [attrName=value]
  * 表单
    * :input
    * :text
    * :checkbox
    * :radio
    * :checked: 选中的
  * $ 工具方法
    * $.each(): 遍历数组或对象中的数据
    * $.trim(): 去除字符串两边的空格
    * $.type(obj): 得到数据的类型
    * $.isArray(obj): 判断是否是数组
    * $.isFunction(obj): 判断是否是函数
    * $.parseJSON(json) : 解析json字符串转换为js对象/数组
    * JSON.parse(jsonString)   json字符串--->js对象/数组
    * JSON.stringify(jsObj/jsArr)  js对象/数组--->json字符串
  * 属性/文本
    * attr(name) / attr(name, value): 读写非布尔值的标签属性
    * prop(name) / prop(name, value): 读写布尔值的标签属性
    * removeAttr(name)/removeProp(name): 删除属性
    * addClass(classValue): 添加class
    * removeClass(classValue): 移除指定class
    * val() / val(value): 读写标签的value
    * html() / html(htmlString): 读写标签体文本
### 4. CSS模块
  * style样式
    * css(styleName): 根据样式名得到对应的值
    * css(styleName, value): 设置一个样式
    * css({多个样式对}): 设置多个样式
  * 位置坐标
    * offset(): 读/写当前元素坐标(原点是页面左上角)
    * position(): 读当前元素坐标(原点是父元素左上角)
    * scrollTop()/scrollLeft(): 读/写元素/页面的滚动条坐标
      * 页面html or body问题：
        - 读：\$(document.documentElement).scrollTop() + $(document.body).scrollTop()
        - 写：\$('html,body').scrollTop(100)
  * 尺寸
    * width()/height(): width/height
    * innerWidth()/innerHeight(): width + padding
    * outerWidth()/outerHeight(): width + padding + border
    * outerWidth()/outerHeight(true): width + padding + border + margin

---
- 进度条
    - 2022-08-16 尚硅谷jQuery P6 基本选择器
    - 2022-08-17 尚硅谷jQuery P7 层次选择器
    - 2022-08-18 尚硅谷jQuery P12 多tab点击切换
    - 2022-08-19 尚硅谷jQuery P20 对象的过滤

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
