**还未整理完，待续...**

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

#### 产生折叠的必备条件：margin 必须是邻接的。

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
-  一个不包含border-top、border-bottom、padding-top、padding-bottom的常规文档流元素，并且其 ‘height’ 为 0 或 ‘auto’， ‘min-height’ 为 ‘0’，其里面也不包含行盒(line box)，其自身的 margin-top 和 margin-bottom 会折叠。 

## 清除浮动

- 触发浮动元素父元素的BFC，使其能够包含浮动元素
  - 给父元素添加 `overflow:hidden` 样式
  - 给父元素设置为浮动元素或者绝对定位
  - 给父元素添加 `display:inline-block`
- 利用 `clear` 属性来闭合元素
  - 在浮动元素后添加一个空元素，空元素样式为 `clear:both`
  - 给受到浮动影响的元素添加 `clear:both`样式
  - 给浮动元素父元素添加伪元素 `:after{content: '';display: block;clear: both;}`



## 文献

-  [https://justcode.ikeepstudying.com/2016/07/css-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3bfc%E5%92%8Cmargin-collapse-margin%E5%8F%A0%E5%8A%A0%E6%88%96%E8%80%85%E5%90%88%E5%B9%B6%E5%A4%96%E8%BE%B9%E8%B7%9D/](https://justcode.ikeepstudying.com/2016/07/css-深入理解bfc和margin-collapse-margin叠加或者合并外边距/) 
-  https://juejin.im/post/59e7190bf265da4307025d91#heading-2 
-  https://segmentfault.com/a/1190000004865198 