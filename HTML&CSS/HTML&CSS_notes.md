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

---
- 进度条
        - 2022-09-07 bilibili HTML&CSS复习-李立超 P13 语义化标签
        - 2022-09-13 bilibili HTML&CSS复习-李立超 P24 CSS

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