## meta 标签

`<meta>` 必有的属性是：`content` ，它用来具体描述一些元信息。

可选的属性有：

- `name`:  `viewport|author|description|keywords|generator|revised|others`
- `http-equiv`:  `content-type|expires|refresh|set-cookie` , 相当于 http 头文件的作用

常见的应用有：

- 用于设置 viewport 初始尺寸，常见于移动端页面适配：`<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />`
- 为文档定义一组关键字：`<meta name="keywords" content="HTML,ASP,PHP,SQL">`



## CSS 中选择器及其优先级

### 选择器分类

- 基本选择器：通配选择器 `*`; 元素选择器 `E`; ID 选择器 `#id`; 类选择器 `.class`; 群组选择器 `selector1, selector2`.
- 层次选择器：后代选择器 `E F`; 子选择器 `E>F`; 相邻兄弟选择器 `E+F`; 通用选择器 `E~F`
- 伪类选择器
  - 动态：
    - 链接：`E:link`, `E:visited`
    - 用户行为：`E:active`, `E:hover`, `E:focus`
  - 目标: `E:target`: 
  - 语言：`E:lang(language)`
  - UI 元素状态: 选中 `E:checked`; 启用 `E:enabled`; 不可用 `E:disabled`;
  - 结构: `E;first-child`, `E:nth-of-type(n)` 等等。
  - 否定
- 伪元素：`:first-letter`, `:before` 等
- 属性选择器：`E[sttr=val]` 等

### CSS优先级

从上到下——从高到低顺序排列

- `!important`：这个是最高级，顶级。
- 行内样式：`style="..."`：权重 1000
- Id 选择器：权重 100
- Class 选择器：权重10
- 标签选择器：权重1



## 盒模型的定义

在浏览器中，每个元素都可以被认为是盒模型。盒模型一般有以下属性：`display, position, float, width, height, padding, border, margin`. 

盒模型一般由 `元素内容, padding, border, margin` 组成 ,  所以又有内盒和外盒的概念。其中内外盒元素的宽高计算如下：

- 内盒元素宽(高)
  - `内盒元素宽(高) = 元素内容宽(高) + padding宽(高) + border宽(高) `
- 外盒元素宽(高)
  - `外盒元素宽(高) = 元素内容宽(高) + padding宽(高) + border宽(高) + margin宽(高) `

**tips：** 可以看出外盒元素比内盒元素多个 `margin` 属性。

由于不同浏览器的对于 CSS 实现差异，盒模型又分为 CSS 标准模型 和 IE(IE6 以下版本) 传统模型两种模式。

其中这两种盒模型的主要区别在于对 CSS 的 `width(height)` 属性的计算方式，计算方式分别如下：

- CSS 标准模型
  - `width(height) = 元素内容宽(高)`
- IE 传统模型
  - `width(height) = 元素内容宽(高) + padding宽(高) + border宽(高) `

**解释：**从以上公式也可以看出 `width(height)` 在 CSS 标准模型中是直接等于元素内容的宽(高)的，而在 IE 传统模型中是等于`元素内容`、`padding`、`border` 的宽(高)之和的。

**tips：** 虽然传统的盒模型只有在 IE6 以下的版本中存在，而且目前 IE6 的使用用户非常少，但出于兼容性的考虑还是应该清除这两种模式的区别。另外在 `input` 中，`submit, reset, button 和 select` 等元素仍然是基于传统的盒模型的，如果给他们设置 `border和padding`，它们会向盒内延伸。

当然我们也可以 `box-sizing` 属性来定义元素盒模型的模式。

`box-sizing` 有以下三种取值：

- `content-box`：CSS 标准盒模型，`width(height)` 与 元素内容宽(高) 相同。
- `border-box`： IE 传统盒模型，`width(height)` 是计算 `border` ,`padding`, `元素内容` 的宽(高)之和。
- `inherit`：继承父元素的盒模型

## inline，block，inline-block 的区别

### 特性

- inline：设置宽高无效，`margin` 只对水平方向有效，`padding` 在水平和垂直方向都有效，不换行。
- block：可以有效设置宽高，`margin` 对水平垂直方向都有效，`padding` 在水平和垂直方向都有效，换行。
- inline-block：可以有效设置宽高，`margin` 对水平垂直方向都有效，`padding` 在水平和垂直方向都有效，不换行。

### 元素

- inline：`a, span, i, em, strong, label...`
- block：`div, p, h1...h6, ol, ul, li, table, form...`
- inline-block：`img, input`

### position 样式对盒模型的影响

- `absolute/fixed`：不论 `inline，block，inline-block`，都可以有效设置宽高，都可以有效设置 `margin, padding` 值，脱离文档流，通过`top, right, bottom, left` 定位。
- `relative`：相对于正常文档流的位置，不改变盒模型的 `inline，block，inline-block` 特性。
- `static`：默认值

## BFC

### BFC 的定义

浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks，table-cells 和 table-captions），以及 overflow 值不为“ visible ”的块级盒子，都会创建 BFC（块格式化上下文）。

由上可知创建 BFC 的情况如下：

- 浮动元素或绝对定位元素
- 非块级盒子的块级容器（例如 inline-blocks，table-cells 和 table-captions）
- overflow 值不为“ visible ”的块级盒子

### BFC 特点

- 元素的布局不受外界影响，往往利用其来消除浮动。
- 在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

BFC 主要的应用有两个：解决 margin 折叠问题，清除浮动。

## margin 折叠

### 合并外边距与 BFC（或者 margin 叠加）

在CSS当中，相邻的两个盒子（可能是兄弟关系，也可能是祖先关系）的外边距可以结合成一个单独的外边距。这种合并外边距的方式称为折叠，并且因而所结成的外边距称为折叠外边距。

#### 折叠的结果：

1. 两个相邻的外边距都是正数时，折叠结果取决于它们两者之间较大的值。
2. 两个相邻外边距都是负数时，折叠结果取决于他俩者绝对值较大的值。
3. 两个相邻外边距一正一负时，折叠结果是两者之和。

**产生折叠的必备条件：margin 必须是邻接的。**

必须满足以下条件才能证明两个margin是邻接的：

- 必须是处于常规文档流（非float和绝对定位）的块级盒子，并且处于同一个 BFC 中。
- 没有线盒，没有空隙（clearance），没有padding和border将他们分隔开
- 都属于垂直方向上相邻的外边距，比如下面的任意一种情况：
  - 元素的margin-top与其第一个常规文档流的子元素的margin-top
  - 元素的margin-bottom与其下一个常规文档流的兄弟元素margin-top
  - height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
  - 高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top和margin-bottom

**可以通过以下方式创建 BFC 解决 margin 折叠问题。**

- 创建了新的BFC元素（例如浮动元素或者`overflow` 为`visible`以外的元素）与它的子元素的外边距不会折叠
- 浮动元素不与任何元素的外边距产生折叠。
- 绝对定位元素不与任何元素的外边距产生折叠。
- inline-block元素不与任何元素的外边距产生折叠
- 一个常规文档流元素的margin-bottom与它下一个常规文档流的兄弟元素的margin-top会产生折叠，除非他们之间存在间隙（clearance）。
- 一个常规文档流元素的margin-top与其第一个常规文档流子元素的margin-top会产生折叠，条件为父元素不包含padding和border，子元素不包含clearance。
- 一个'height'为'auto'并且'min-height'为'0'的常规文档流元素的margin-bottom会与其最后一个常规流子元素的margin-bottom折叠，条件为父元素不包含padding和border。
- 一个不包含border-top、border-bottom、padding-top、padding-bottom的常规文档流元素，并且其 ‘height’ 为 0 或 ‘auto’， ‘min-height’ 为 ‘0’，其里面也不包含行盒(line box)，其自身的 margin-top 和 margin-bottom 会折叠。 

## 清除浮动

- 触发浮动元素父元素的BFC，使其能够包含浮动元素
  - 给父元素添加 `overflow:hidden` 样式
  - 给父元素设置为浮动元素或者绝对定位
  - 给父元素添加 `display:inline-block`
- 利用 `clear` 属性来闭合元素
  - 在浮动元素后添加一个空元素，空元素样式为 `clear:both`
  - 给受到浮动影响的元素添加 `clear:both`样式
  - 给浮动元素父元素添加伪元素 `:after{content: '';display: block;clear: both;}`

## Flex 相关属性清单

- 在容器上有 6 个属性
    - `flex-direction: row | row-reverse | column | column-reverse`
    - `flex-wrap: nowrap | wrap | wrap-reverse`
    - `flex-flow: <flex-direction> || <flex-wrap>`
    - `align-items: flex-start | flex-end | center | baseline | stretch `
    - `justify-content: justify-content: flex-start | flex-end | center | space-between | space-around`
    - `align-content: flex-start | flex-end | center | space-between | space-around | stretch`
- 在项目上有 6 个属性
  - `order: <integer>`，默认 0.
  - `flex-grow: <number> `，默认 0.
  - `flex-shrink: <number>`，默认 1. 当值为 0 时，不会因空间不足而被压缩。
  - `flex-basis: <length> | auto`，默认 `auto`
  - `flex: none | [<flex-grow> <flex-shrink>? || <flex-basis>]`
  - `align-self: auto | flex-start | flex-end | center | baseline | stretch`



## 文献

-  [https://justcode.ikeepstudying.com/2016/07/css-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3bfc%E5%92%8Cmargin-collapse-margin%E5%8F%A0%E5%8A%A0%E6%88%96%E8%80%85%E5%90%88%E5%B9%B6%E5%A4%96%E8%BE%B9%E8%B7%9D/](https://justcode.ikeepstudying.com/2016/07/css-深入理解bfc和margin-collapse-margin叠加或者合并外边距/) 
-  https://juejin.im/post/59e7190bf265da4307025d91#heading-2 
-  https://segmentfault.com/a/1190000004865198 
-  https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html 