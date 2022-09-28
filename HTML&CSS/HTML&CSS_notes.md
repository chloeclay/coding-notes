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
            - w有值/ml为auto：靠右
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
###### 2. 浮动float
1. 设置浮动后元素从文档流中脱离，盖住文档流中除文字外的元素，浮动元素互相之间不遮盖
2. 子元素实际宽度不再强制等于父元素内容区宽度，宽高都由内容撑开决定
3. 不再分块元素和行内元素
4. 一行内无法容纳则自动换行，不超过上边的浮动元素，最多平齐
5. 清除浮动影响
    - clear：
        - left：清除左侧所受其他元素浮动影响
        - right：清除右侧所受其他元素浮动影响
        - both：清除两侧中对当前元素影响最大的浮动
    - BFC（块级格式化环境）解决高度塌陷：
        - 开启特点：
            1. 不被浮动元素遮盖
            2. 垂直外边距不传递给父元素
            3. 可以包含浮动的子元素
        - 开启方式：
            1. 设置float（脱离文档流）
            2. 设置据对定位（脱离文档流）
            3. 设置overflow为非visible的值（通常为hidden）
            4. 设置display: flow-root;（不兼容ie）
    - 添加clearfix类解决高度塌陷：
        ```css
            .clearfix::before,
            .clearfix::after{
                content:'';
                display: table;
                clear: both;
            }
        ```
###### 3. 定位position
1. static 默认值，不开启定位
2. relative 相对定位
    - 不脱离文档流，不改变元素性质，但会提升元素层级
    - 参照自身位置进行定位
    - 利用top/left/bottom/right设置偏移量
3. absolute 绝对定位
    - 脱离文档流，改变元素性质（行内元素变块元素），提升元素层级
    - 参照包含块进行定位
        > 包含块：包含当前元素的块元素
        >   - 普通元素：包含块为距离最近的祖先块元素
        >   - 绝对定位元素：包含块为距离最近的开启定位的祖先元素；若所有祖先元素都未开启定位，则包含块为初始包含块
    - 等式：
        > - 水平：
        >   - **left + margin-left + width + margin-right + right = 父元素宽度**
        > - 垂直：
        >   - **top + margin-top + height + margin-bottom + bottom = 父元素高度**

        > 常用：
        > 1. 绝对定位+水平居中+垂直居中：
        > width: 固定值
        > left: 0
        > right: 0
        > height: 固定值
        > top: 0
        > bottom: 0
        > margin: auto
        > 2. 绝对定位+撑满父元素
        > height: auto
        > width: auto
        > left: 0
        > right: 0
        > top: 0
        > bottom: 0
4. fixed 固定定位
    - 参照视口（viewport）进行定位，不随网页滚动
    - 其余特性与绝对定位一致
5. sticky 粘滞定位
    - 参照距离最近的，开启了滚动条的祖先元素进行定位
    - 元素滚动到定位位置时保持在该位置（导航条）
    - 其余特性与相对定位一致
6. 层级
    - 定位元素之间的层级相同，下边的定位元素会盖住上边的
    - z-index设置**定位元素**层级，数字越大越靠上
    - 父元素无法遮盖子元素
    - opacity设置元素透明度
##### 4. 常用属性
1. 字体
    - font-family: 'microsoft yahei'; （有空格时需加引号）
    - font: italic bold 50px/75px 'microsoft yahei', sans-serif; （倒数第二位必须是字号，斜杠后为行高，最后一位必须是字体名）
    - @font-face:{
        font-family: 自定义名称;
        src: url(./xxx/xx.ttf);
    }
    - 图标字体
        - font awesome
            - 引入css后直接使用\<i class="fas fa-cat">\</i>
            - html引入：\&#x十六进制编码;
            - css：元素::before{
                content:'\十六进制编码';
                fas的代码;
            }
        - remix icon 原理同上
        - iconfont.cn 原理同上
2. 基线 baseline
    - 每个文本框都有一条基线，所有行内元素、替换元素（图片、表单项）默认沿基线对齐
    - vertical-align：
        - baseline 默认值 基线对齐
        - top 顶部对齐（可用于加角标）
        - bottom 底部对齐
        - middle 居中对齐（非真正居中，不常用）
        - 数值 距离基线多远对齐
3. 表格
    - 边框需设置给td，且给table设置合并边框：
        - border-collapse: collapse;
    - 给td设置vertical-align对齐方式
4. 居中
    1. 定位居中法
        - 父元素position: relative;
        - 子元素position: absolute;
        - 子元素width/height确定;
        - 子元素top/bottom/left/right=0;
        > 此时子元素必须确定宽高，否则默认撑满父元素
    2. 表格居中法
        - 父元素display: table-cell;
        - 父元素vertical-align: middle;
        - 父元素text-align: center;
        - 子元素display: inline-block;
        > 此时父元素转换为单元格，默认宽度由内容撑开
---
- 进度条
        - 2022-09-07 bilibili HTML&CSS复习-李立超 P13 语义化标签
        - 2022-09-13 bilibili HTML&CSS复习-李立超 P24 CSS
        - 2022-09-15 bilibili HTML&CSS复习-李立超 P32 CSS餐厅练习flukeout.github.io
        - 2022-09-17 bilibili HTML&CSS复习-李立超 P33 样式的继承
        - 2022-09-19 bilibili HTML&CSS复习-李立超 P1 布局 盒子模型
        - 2022-09-20 bilibili HTML&CSS复习-李立超 P10 布局 行内元素
        - 2022-09-21 bilibili HTML&CSS复习-李立超 P16 布局 浮动
        - 2022-09-22 bilibili HTML&CSS复习-李立超 P17 布局 导航条练习
        - 2022-09-23 bilibili HTML&CSS复习-李立超 P20 布局 高度塌陷
        - 2022-09-26 bilibili HTML&CSS复习-李立超 P30 字体样式
        - 2022-09-27 bilibili HTML&CSS复习-李立超 P32 文字的垂直对齐
        - 2022-09-28 bilibili HTML&CSS复习-李立超 P38 背景

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
- 三倍速：document. querySelector('video').playbackRate=3