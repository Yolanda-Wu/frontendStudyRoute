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