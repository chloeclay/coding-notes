#HTML&CSS核心
## 1. HTML
##### 1. 基本语法
- 属性
    - 属性名="属性值" --> 属性名
- 实体
    - &实体名称;
    > \< \&lt;
    > \> \&gt;
    > &nbsp; \&nbsp;
- 注释
    - \<!-- -->
    - 不可嵌套
##### 2. 基本结构
- \<!DOCTYPE html> 版本声明
- \<meta charset='UTF-8'> 配置网页字符集 防止乱码
##### 3. 常用标签
- 语义化标签
    \<main>\</main> 
        - 表示网页的主要内容，一个页面只有一个main标签
    \<header>\</header>
        - 表示网页或一个块内容的头部
    \<footer>\</footer>
        - 表示网页或一个块内容的底部
    \<article>\</article>
        - 表示一个文章（内容）
    \<nav>\</nav>
        - 表示一个导航
    \<aside>\</aside>
        - 表示侧边栏
    \<section>\</section>
        - 表示的是独立一个区块
- 列表
    - 无序列表 
    ``` html
    <ul>
        <li></li>
    </ul>
    ```
    - 有序列表
    ``` html
    <ol>
        <li></li>
    </ol>
    ```
    - 定义列表
    ``` html
    <dl>
        <dt>定义</dt>
        <dd>描述</dd>
    </dl>
    ```
- 超链接
    - 属性：
        - href
            - 绝对路径
            - 相对路径
            - #：回到当前页面的顶部
            - #id：跳转到页面的指定位置
        - target 
            - _self：在当前标签中打开
            - _blank：在新的标签中打开
- 相对路径
    - ./ ：当前目录（可以省略）
    - ../ ：返回上一级目录（写几个返回几级）
- 表格
    - \<thead>\</thead>：表格头部，用来放头部的tr
    - \<tbody>\</tbody>：主要内容
    - \<tfoot>\</tfoot>：表格底部
    - \<th>：表头单元格
    - \<caption>：设置表格的标题
    - rowspan="number"：纵向合并单元格
    - colspan="number"：横向合并单元格
- 表单
    - 将用户信息提交给服务器
    - 创建表单：
        - \<form action="指定提交地址">\</form>
    - 表单项：
        - \<input type="" value="" name="" checked>
            - type: 
                - text 文本框
                - submit 提交按钮
                - reset 重置
                - password 密码
                - checkbox 选择框
                - radio 单选框（需要设置相同name属性值分组，及不同value属性值进行提交）
            - value：提交按钮显示的文字
            - name：提交数据时必须有的数据名；name相同时归类为同一组按钮，再设置value属性提交
        - \<select name="">\</select>：下拉列表
            - \<option value="" selected>\</option>
- 常用标签
    - \<br> 换行
    - \<hr> 分割线
##### 4. 标签分类
- 块元素（block）
    - 块元素会独占页面中的一行
    - 例子：header main footer h1~h6 p ...
        div
    - 在网页中块元素主要用来对网页进行布局
- 行内元素（inline）
    - 行内元素只会占用自身大小，不会独占页面的一行
    - 例子：a b i em ... span
    - 行内元素主要用来选中文字
替换元素（暂时可以当成行内元素）
    - 替换元素用来表示网页的图片、音频、视频、 表单项之类
    - 替换的元素兼具了块和行内元素的特点
    - 例子：img input select button

- 嵌套规则
    - 块元素中可以包含块元素，也可以包含行内元素    
    - 行内元素中可以嵌套行内元素，不建议嵌套块元素  
    - 特殊情况：
        1. p元素中不能放块元素  
        2. 超链接中可以放任何元素，除了它自身







## 2. CSS
##### 1. 选择器
- div.className.className：选中同时拥有两个className的div元素
- 属性选择器：
    - [属性名]：选中含有某属性名的元素
    - [属性名="xxx"]：选中属性值为xxx的元素
    - [属性名*="xxx"]：选中属性值含有xxx的元素
    - [属性名^="xxx"]：选中属性值以xxx开头的元素
    - [属性名$="xxx"]：选中属性值以xxx结尾的元素
- 关系选择器：
    - 父 > 子：选中子元素
    - 父 子：选中后代元素
    - 兄 + 弟：选中后一个弟元素
    - 兄 ~ 弟：选中所有弟元素
- 伪类选择器：
    - :link：没有访问过的超链接
    - :visited：访问过的超链接
    - :hover：鼠标移入的元素
    - :active：鼠标点击的元素
    - :root：网页中的根元素\<html>
    - :empty：页面中的空元素
    - :first-child：第一个子元素
    - :first-of-type：同类型中的第一个子元素
    - :last-child：最后一个子元素
    - :last-of-type：同类型中的最后一个元素
    - :nth-child：第n个子元素
    - :nth-last-child：倒数第n个元素
    - :nth-of-type：同类型里的第n个元素
    - :nth-last-of-type：同类型里的倒数第n个元素
        - n 表示0到无穷大
        - 2n 表示偶数
        - 2n+1 表示奇数
        - odd 表示奇数
        - even 表示偶数
    - :only-child ：唯一的子元素
    :only-of-type：同类型中唯一的子元素
- 伪元素选择器：
    - ::before：标签的开始位
    - ::after：标签的结束位
    - ::first-line：第一行
    - ::first-letter：第一个字母
    - ::selection：选中部分
- 选择器优先级：
    - !important
    - 内联样式
    - id选择器
    - 类 & 伪类
    - 元素选择器
    - 通配选择器
    - 继承的样式
```html
<div id='box1' class='box2'>
    <span>span</span>
</div>

#box1{
    color: red;
}
*{
    color: blue;
}
<!-- 此时span显示为blue -->
```
> 超链接伪类的优先级问题
> ``` html
> a:link{}
> a:visited{}
> a:hover{}
> a:active{}
> <!-- 按如上顺序编写 -->
>```
##### 2. 单位
###### 1. 长度单位
- em：相对当前元素font-size值（常用语文字缩进/行间距）
- rem：相对根元素font-size值（常用于移动端布局）
###### 2. 颜色单位
- 进制
    - 十进制 
        - 0 1 2 3 4 5 6 7 8 9 10
    - 二进制 
        - 0 1 10 11 100 101 110 111
    - 八进制 
        - 0 1 2 3 4 5 6 7 10 
    - 十六进制 
        - 0 1 2 3 4 5 6 7 8 9 a b c d e f 10 11 12 13 14 15 16 17 18 19 1a 1b 1c 1d 1e 1f 20
- 语法：
    - #红色绿色蓝色（十六进制00-ff）
    - #rgb(0,0,0) （0-255或0-100%）
    - rgba(红色, 绿色, 蓝色, 不透明度) （不透明度0-1）
    - HSLA(色相, 饱和度, 亮度, 不透明度)
        - 色相：0-360
        - 饱和度：0-100%
        - 亮度：0-100%
        - 不透明度：0-1
##### 3. 布局
###### 1. 盒子模型（box model）
- 边框：
    - border: border-width  border-color border style;
    - border-style: solid/dotted/dashed/double/groove/ridge/inset/outset
- 盒子可见大小
    - 默认=内容+padding+border
    - box-sizing : 
        - content-box（默认值，设置内容区可见大小）
        - border-box（可选值，设置盒子可见大小）
    - margin：
        - 子元素实际宽度=父元素内容区宽度=可见框宽度+左右外边距：
            - w/ml/mr都有值：自动调整mr
            - w/ml/mr有值为auto：自动调整auto
            - w/ml/mr都为auto：填满父元素
            - w有值/ml/mr为auto：居中
        - width设置为auto，元素宽度会尽可能大；height设置为auto，元素高度会被内容撑开
        - 垂直外边距：（无边框间隔）相邻折叠
            - 兄弟：折叠并取最大值
            - 父子：子传给父
    - 行内元素（\<span>）
        - 设置width/height无效
        - 可以设置margin/padding/border，但仅影响水平布局，不影响垂直布局
    - 替换元素（\<input>）
        - 不独占一行，其余和块元素一样
    - 文档流（normal flow）
        - 指网页中的位置，是网页的最基层
        - 创建的元素默认位于文档流中
        - 文档流内块元素自上向下排列，默认宽度为auto，高度为内容撑开；行内元素自左向右排列，默认宽高都由内容撑开
    - 常用样式：
        1. overflow：子元素超出父元素大小溢出
            - visible：默认，不处理
            - hidden：裁剪溢出内容
            - scroll：生成垂直和水平滚动条
            - auto：根据需求生成滚动条
        2. display：元素类型
            - inline：行内元素
            - block：块元素
            - inline-block：行内块元素，不独占一行但可设置宽高
            - table：具有table标签特点
            - flow-root：具有html跟元素特点
        3. visibility：可见性
            - visible：默认值，正常显示
            - hidden：隐藏元素但依然占据位置
        4. border-radius：圆角
            - 100px 200px 200px 300px / 200px 320px 210px 20px：椭圆切角横/纵半径
            - 100px 200px 300px：未设置值的角取对角值
            - border-top-left-radius: 100px 50px 左上角椭圆切角
        5. outline：外轮廓
            - 等于一个不占布局位置的border
        6. line-height：行高
            - 设置文字行内垂直居中，行高=父元素height


---
- 进度条
        - 2022-09-07 bilibili HTML&CSS复习-李立超 P13 语义化标签
        - 2022-09-13 bilibili HTML&CSS复习-李立超 P24 CSS
        - 2022-09-15 bilibili HTML&CSS复习-李立超 P32 CSS餐厅练习flukeout.github.io
        - 2022-09-17 bilibili HTML&CSS复习-李立超 P33 样式的继承
        - 2022-09-19 bilibili HTML&CSS复习-李立超 P1 布局 盒子模型
        - 2022-09-20 bilibili HTML&CSS复习-李立超 P10 布局 行内元素
        - 2022-09-21 bilibili HTML&CSS复习-李立超 P16 布局 浮动

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