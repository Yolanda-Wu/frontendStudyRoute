

# Html&CSS



**本周没什么空整理，剩下的后面补上**orz







* meta 标签  --  透彻理解 name 和 http-equiv 相关作用，
  * name="view-port"      
  * http-equiv="content-security-policy"

* HTML5 新特性
* css 选择器与权重描述
* css 几种布局方式
* BFC 问题，
* 与如何解决css position定位 
* 盒子模型
* css3 的新特性
* 有哪些css 性能优化
* flex       flex: 后面可以跟几个值，以及他们的定义
* 双飞翼 和 圣杯布局  至少写一种，移动端的 顶栏 和 底栏 布局
* 接上面的flex布局，了解使用网格布局
* 移动端适配方案   ----   这里需要看文章了解
* 移动端解决 1px 方案
* 了解几种 css 预编译方案



## meta标签

meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。

meta 标签的属性定义了与文档相关联的名称/值对。

```html
<meta name="keywords" content="Lxxyx,博客，文科生，前端">
<meta http-equiv="cache-control" content="no-cache">
```

**注意**：

* meta标签永远位于 head 元素内部。

* 元数据(metadata,也叫元信息，用于描述数据的数据)总是以名称/值的形式被成对传递的。

### HTML 与 XHTML 之间的差异

在 HTML 中，<meta> 标签没有结束标签。

在 XHTML 中，<meta> 标签必须被正确地关闭。

### 属性表

| 属性                                                         | 值                                                           | 描述                                               |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------- |
| [content](https://www.w3school.com.cn/tags/tag_meta.asp#meta_prop_content) | some_text                                                    | 定义与 http-equiv 或 name 属性相关的元信息（必需） |
| [http-equiv](https://www.w3school.com.cn/tags/tag_meta.asp#meta_prop_http-equiv) | content-type; expires; refresh; set-cookie                   | 把 content 属性关联到 HTTP 头部。（可选）          |
| [name](https://www.w3school.com.cn/tags/tag_meta.asp#meta_prop_name) | author ;description; keywords ;generator ;revised ;   others | 把 content 属性关联到一个名称。（可选）            |
| [scheme](https://www.w3school.com.cn/tags/tag_meta.asp#meta_prop_scheme) | some_text                                                    | 定义用于翻译 content 属性值的格式。（可选）        |

content是必选项，与name或http-equiv搭配使用，相当于描述name或http-equiv的值

#### name

name属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。

meta标签中name属性语法格式是：

```html
<meta name="参数" content="具体的描述">。
```

name属性按常见程度排列有：keywords, description，viewport，robots，author，generator，copyright，revisitafter，renderer

##### A. keywords(关键字)

说明：用于告诉搜索引擎，你网页的关键字。
举例：

```html
<meta name="keywords" content="Lxxyx,博客，文科生，前端">
```

##### B. description(网站内容的描述)

说明：用于告诉搜索引擎，你网站的主要内容。
举例：

```html
<meta name="description" content="文科生，热爱前端与编程。目前大二，这是我的前端博客">
```

##### C. viewport(移动端的窗口)

说明：这个概念较为复杂，具体的会在下篇博文中讲述。
这个属性常用于设计移动端网页。在用bootstrap,AmazeUI等框架时候都有用过viewport。

举例（常用范例）：

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

##### D. robots(定义搜索引擎爬虫的索引方式)

说明：robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。content的参数有all,none,index,noindex,follow,nofollow。默认是all。

纯粹给搜索引擎看。content的前四个属性可以双选，俩俩配对，有四种双选结果。

举例：

```html
<meta name="robots" content="none">
```

具体参数如下：

1.index : 搜索引擎索引此网页。

2.follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。

3.noindex : 搜索引擎不索引此网页。

4.nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。

5.all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。

6.none : 搜索引擎将忽略此网页，等价于noindex，nofollow。

##### E. author(作者)

说明：用于标注网页作者
举例：

```html
<meta name="author" content="Lxxyx,841380530@qq.com">
```

##### F. generator(网页制作软件)

说明：用于标明网页是什么软件做的
举例: (不知道能不能这样写)：

```html
<meta name= Generator Content= PCDATA|FrontPage| >
```

##### G. copyright(版权)

说明：用于标注版权信息
举例：

```html
<meta name="copyright" content="Lxxyx"> //代表该网站为Lxxyx个人版权所有。
```

##### H. revisit-after(搜索引擎爬虫重访时间)

说明：如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。
举例：

```html
<meta name="revisit-after" content="7 days" >
```

##### I. renderer(双核浏览器渲染方式)

说明：renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。
举例：

```html
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

##### 常见使用场景

```html

/*保留历史记录以及动画效果*/
<meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes">

/*是否启用 WebApp 全屏模式*/
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

/*添加到主屏后的标题*/
<meta name="apple-mobile-web-app-title" content="App Title">

/*在网页上方显示一个app banner，提供app store下载*/
<meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT"

/*启用360浏览器的极速模式(webkit)*/
<meta name="renderer" content="webkit">

/*uc强制竖屏*/
<meta name="screen-orientation" content="portrait">

/*QQ强制竖屏*/
<meta name="x5-orientation" content="portrait">

/*UC强制全屏*/
<meta name="full-screen" content="yes">

/*QQ强制全屏*/
<meta name="x5-fullscreen" content="true">

/*UC应用模式*/
<meta name="browsermode" content="application">

/*QQ应用模式*/
<meta name="x5-page-mode" content="app">

/*禁止自动探测并格式化手机号码*/
<meta name="format-detection" content="telephone=no">

```



#### http-equiv

http-equiv全称http-equivalent，即“相当于HTTP的作用，比如说定义些HTTP参数啥的。”

它会告诉浏览器一些关于字符设定,页面刷新,cookie,和缓存等等相关信息。

语法格式：

```html
<meta http-equiv="参数" content="具体的描述">
```

常用属性有以下几种：

##### A. content-Type(设定网页字符集)(推荐使用HTML5的方式)

说明：用于设定网页字符集，便于浏览器解析与渲染页面
举例：

```
<meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐

<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
```

##### B. X-UA-Compatible(浏览器采取何种版本渲染当前页面)

说明：用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）
举例：

```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> //指定IE和Chrome使用最新版本渲染当前页面
```

##### C. Set-Cookie(cookie设定)

说明：如果网页过期。那么这个网页存在本地的cookies也会被自动删除。

```html
<meta http-equiv="Set-Cookie" content="name, date"> //格式

<meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:
```

##### D.content-security-policy

处于安全方面的考虑，浏览器的同源策略在一定程度上保护了用户安全，但是像`script、link、img`等标签是不受同源策略的影响，而这些因素会给我们的用户带来安全风险，这个时候，该属性就出马了。 在浏览器中，通过设置该属性来声明哪些动态资源允许被加载以此减少XSS攻击。该属性的内容包括了对`script、style、font、media`等静态资源的控制，详情见[Content Security Policy Reference](https://content-security-policy.com/)。

##### E.x-dns-prefetch-control

虽然在meta标签设置缓存无效，但是我们可以设置meta标签来提前进行DNS解析以此来提升网站性能。在HTML页面中的a标签会自动启用DNS提前解析，但是在HTTPS上却失效了，这个时候就轮到该属性登场了 通过设置`<meta http-equiv="x-dns-prefetch-control" content="on" />`就可以让a标签在HTTPS环境下进行DNS预解析。

##### F.default-style

这个属性指定了在页面上使用的首选样式表. content属性必须包含``元素的标题, href属性链接到CSS样式表或包含CSS样式表的``元素的标题.

##### G. cache-control(指定请求和响应遵循的缓存机制)，expires(网页到期时间)refresh(自动刷新并指向某页面)

**cache-control**

###### 用法1.

说明：指导浏览器如何缓存某个响应以及缓存多长时间。

举例:

```
<meta http-equiv="cache-control" content="no-cache">
```

共有以下几种用法：

1. no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
2. no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
3. public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
4. private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
5. maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。

###### 用法2.(禁止百度自动转码)

说明：用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。
举例：

```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

 **expires(网页到期时间)**

说明:用于设定网页的到期时间，过期后网页必须到服务器上重新传输。
举例：

```
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
```

**refresh(自动刷新并指向某页面)**

说明：网页将在设定的时间内，自动刷新并调向设定的网址。
举例:

```
<meta http-equiv="refresh" content="2；URL=http://www.lxxyx.win/"> //意思是2秒后跳转向我的博客
```

**然鹅cache-control、Pragma、Expires三个属性好像一般不会起作用，甚至在HTML5规范中，http-equiv中的属性并不包括这三个，如果我们需要进行缓存控制的话，还是 寄希望与HTTP headers上。**

### 留一个问题

SEO搜索引擎优化

https://www.rapospectre.com/blog/38

## css 选择器与权重计算

### 选择器类型

- 元素选择器（包括伪元素`:before`）
- class 选择器、属性选择器(`type="text"`) 伪类选择器(`:hover`)等
- id 选择器

**通配选择符**（universal selector）（[`*`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)）**关系选择符**（combinators）（[`+`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator), [`>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator), [`~`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator), ['``'](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator), [`||`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Column_combinator)）和 **否定伪类**（negation pseudo-class）（[`:not()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)）对优先级没有影响。（但是，在 `:not()` 内部声明的选择器会影响优先级）。

### 权重

一个CSS属性是通过先计算各个样式的优先级后重叠得来的。权重越高，该样式的优先级越高

#### 权重规则

1. !important 优先级最高，但也会被权重高的important所覆盖
2. 行内样式总会覆盖外部样式表的任何样式(除了!important)
3. 单独使用一个选择器的时候，不能跨等级使css规则生效
4. 如果两个权重不同的选择器作用在同一元素上，权重值高的css规则生效
5. 如果两个相同权重的选择器作用在同一元素上：以后面出现的选择器为最后规则.
6. 权重相同时，与元素距离近的选择器生效

在同一个元素使用不同的方式，声明了相同的一条或多条css规则，**浏览器会通过权重来判断哪一种方式的声明，与这个元素最为相关，从而在该元素上应用这个声明方式声明的所有css规则**。

#### CSS选择器权重等级列表

css选择器权重列表如下：

| 权重值  | 选择器                                                       |
| ------- | ------------------------------------------------------------ |
| 1,0,0,0 | 内联样式：style=""                                           |
| 0,1,0,0 | ID选择器：`#idName{...}`                                     |
| 0,0,1,0 | 类、伪类、属性选择器：`.className{...}` / `:hover{...}` / `[type="text"] ={...}` |
| 0,0,0,1 | 标签、伪元素选择器：`div{...}` / `:after{...}`               |
| 0,0,0,0 | 通用选择器（*）、子选择器（>）、相邻选择器（+）、同胞选择器（~） |

```
    !important>行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器
```

!important权重最高，但不同!important也可以权重不同，可以相互覆盖，通过增加其他选择器来增加权重即可。

> 很多人想当然的以为权重是十进制的，即十个class选择器等于一个id选择器，这是错误的。CSS权重进制在IE6为256，后来扩大到了65536，而现代浏览器则采用更大的数量。所以我们可以忽略进制的问题，从高往低比较权重值。

十一个class选择器的样式并不会覆盖一个id选择器的样式，因为：

> 当两个权值进行比较的时候，是从高到低逐级将等级位上的权重值来进行比较的，而不是 1000*个数 + 100*个数 + 10*个数 + 1*个数 的总和来进行比较的，换句话说，低等级的选择器个数再多也不会超过高等级的选择器的优先级的。

正确规则：

1. 先从高等级进行比较，高等级相同时，再比较低等级的，以此类推；

2. 完全相同的话，就采用 后者优先 原则；

3. 如果一个样式在css外联表，一个在style标签，或者head头部内。权重相同时，与元素距离近的选择器生效。

   ```html
    #content h1 { // css样式表中
         padding: 5px;
       }
       <style type="text/css">
         #content h1 { // html头部 因为html头部离元素更近一点，所以生效
           padding: 10px;
         }
       </style>
   ```

#### 一个问题

浏览器从哪个方向开始识别css的各个选择器

## BFC 问题

https://juejin.im/post/5909db2fda2f60005d2093db#heading-16

https://juejin.im/post/5c6d7a5cf265da2d9e175182#heading-5

https://juejin.im/post/5a4dbe026fb9a0452207ebe6#heading-9

https://juejin.im/post/59b73d5bf265da064618731d#heading-16

**所谓的BFC就是css布局的一个概念，是一块区域，一个环境。**

### 定义

BFC(Block formatting context)直译为"块级格式化上下文"。它**是一个独立的渲染区域**，只有**Block-level box**参与（在下面有解释）， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

我们常说的文档流其实分为定位流、浮动流和普通流三种。而**普通流其实就是指BFC中的FC**。

**FC**是formatting context的首字母缩写，直译过来是格式化上下文，它**是页面中的一块渲染区域**，有一套渲染规则，决定了其**子元素如何布局，以及和其他元素之间的关系和作用。**

常见的FC有BFC、IFC（行级格式化上下文），还有GFC（网格布局格式化上下文）和FFC（自适应格式化上下文）。

**通俗来说：** 可以简单的理解为**某个元素的一个 CSS 属性**，只不过这个属性**不能被开发者显式的修改**，拥有这个属性的元素对内部元素和外部元素会表现出一些特性，这就是BFC。

### 如何触发BFC

满足下列条件之一就可触发BFC

【1】根元素，即HTML元素

【2】float的值不为none

【3】overflow的值不为visible

【4】display的值为inline-block、table-cell、table-caption

【5】position的值为absolute或fixed 　

### BFC布局规则：

1.内部的Box会在垂直方向，一个接一个地放置。

2.Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠，而处于不同bfc中相邻的box的margin不会重叠。

3.每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

4.BFC的区域不会与float box重叠。

5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

6.计算BFC的高度时，浮动元素也参与计算（避免塌陷）

### BFC作用

1. #### 自适应两栏布局

   ```html
   <div class="aside"></div>
   <div class="text">
       <div class="main"></div>
   </div>
   <!--下面是css代码-->
    .aside {
               width: 100px;
               height: 150px;
               float: left;
   }
   .main {
               height: 200px;
               overflow: hidden;//触发main盒子的BFC
               background: #fcc;
   }
              .text{
               width: 500px;
   }
   
   ```

   上面aside盒子有一个浮动属性，覆盖了main盒子的内容，main盒子没有清除aside盒子的浮动。只做了一个动作，就是**触发自身的BFC**，然后就**不再被aside盒子覆盖**了。所以：**BFC的区域不会与float box重叠**。

2. #### 可以阻止元素被浮动元素覆盖

   给父div加上 overflow: hidden;

   **清除浮动原理：**触发父div的BFC属性，使下面的子div都**处在父div的同一个BFC区域之内**，此时已成功清除浮动。

   还可以向同一个方向浮动来达到清除浮动的目的，清除浮动的原理是两个div都位于同一个浮动的BFC区域之中。

3. #### 可以包含浮动元素——清除内部浮动

4. #### 分属于不同的BFC时可以阻止margin重叠

## 盒子模型

![](https://www.runoob.com/images/box-model.gif)

### 一道有趣的css面试题

> 一个div垂直居中
> 其距离屏幕左右两边各10px
> 其高度始终是宽度的50%
>
> div中有文本'A'
> 其font—size:20px
> 文本水平垂直居中

方法一：

```html
 <style>
    * {margin: 0; padding: 0;}
    .wrap {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background: pink;
      text-align: center;
      line-height: calc(50vw - 20px);
      height: calc(50vw - 20px);
    }
  </style>
</head>
<body>
  <div class="wrap">
    Lorem ipsum dolor sit amet.
  </div>
</body>
```

方法二：

```html
<body>
  <div class="father">
    <div class="son"><span>A</span></div>
  </div>
</body>
```

```css
.father{
  overflow:hidden;
  position: absolute;
  left:20px;
  right:20px;
  top:50%;
  transform: translateY(-50%);
}

.son{
  height:0;
  width:100%;
  padding-top:50%;
  background:pink;
}

span{
  position:absolute;
  top:50%;
  left:50%; 
  transform: translate(-50%,-50%);
  font-size:10px;
}

```

**在前端开发过程中，设置样式参数margin 与 padding 值为百分数时，其具体值的计算方法需参照最近父级的width计算。**

## flex详解

学习资源主要来自[阮一峰](http://www.ruanyifeng.com/)的flex布局教程。这个教程主要参考于这两篇文章[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 和 [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)。 

### 基本概念

主轴（main axis）和交叉轴（cross axis）

### 容器（container）的属性

> * flex-direction
> * flex-wrap
> * flex-flow
> * justify-content
> * align-items
> * align-content

#### 1.flex-direction属性

决定主轴的方向

```Css
.box{
    flex-direction: row | row-reverse | column | column-reverse;
}
```

#### 2.flex-wrap属性

定义容器中项目如何换行

```css
.box{
    flex-wrap:nowrap | wrap | wrap-reverse;
}
```

#### 3.flex-flow

该属性是`flex-direction`属性和`flex-wrap`属性的简写形式

默认值：`row nowrap`

#### 4.justify-content属性

定义了容器中项目沿着主轴的对齐方式

```css
.box{
    justify-content:flex-start | flex-end | center | space-between | space-around
}
```

#### 5.align-items属性

定义容器中一行项目沿着交叉轴的对齐方式

```css
.box{
    align-items:flex-start | flex-end | center | baseline | stretch
}
```

#### 6.align-content属性

定义了容器中多行项目沿着交叉轴的对齐方式（若容器中只有一行项目则该属性不起作用）

```css
.box{
    align-content:flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### 项目（item）的属性

> * order
> * flex-grow
> * flex-shrink
> * flex-basis
> * flex
> * align-self

#### 1.order属性

定义了项目的排列顺序。*数值越小，排列越前，默认为0。*值需为整数。

```css
.item{
    order:<integer>;
}
```

#### 2.flex-grow属性

定义有多余空间时项目的放大比例，默认为0，即存在多余空间时不放大。

```css
.item{
    flex-grow:<number>;
}
```

#### 3.flex-shrink属性

定义了空间不足时项目的缩小比例，默认为1，即空间不足时项目缩小。

`flex-grow`和`flex-shrink`对项目起的作用取决于容器内所有项目的该属性的值的比值。

```css
.box{
    flex-shrink:<number>;
}
```

#### 4.flex-basis属性

定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。 

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

可以设为跟`width`或`height`一样的值，这样项目占据的空间会固定。

#### 5.flex属性

是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。 

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性的常用值：

###### flex: 0 auto;

和 `flex: initial;`一样，即`flex: 0 1 auto`

###### flex: auto;

即`flex: 1 1 auto`

###### flex: none

即`flex: 0 0 auto`

###### flex: \<positive-number \>

即`flex: <positive-nuumber> 1 0px`

#### 6.align-self属性

允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

 

## 圣杯布局

参考文章来自[Holy Grail Layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)。

### 基本概念

圣杯布局指一个页面包括三大块，分别是header,body与footer，其中body分为三个column，中间的column涵盖页面主要内容，旁边两个竖栏则一般用于导航栏，或呈现广告。

### 目的

通常，我们希望圣杯布局的呈现能够达到以下目的：

* 三个column应该流动居中且边栏宽度固定并相等。

- 在html的页面中，中间栏的元素应该第一个出现。
- 所有的栏应该等高，忽视栏元素实际的高度。
- 使用的HTML的标记应该尽量少。（minimal markup：最低限度的标记）
- 当页面内容过少时，页脚应该固定在页面底部。

### HTML代码

```css
<body class="HolyGrail">
  <header>…</header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-content">…</main>/*main column第一个出现*/
    <nav class="HolyGrail-nav">…</nav>
    <aside class="HolyGrail-ads">…</aside>
  </div>
  <footer>…</footer>
</body>
```

### CSS代码

首先解决圣杯布局中header,HolyGrail-body,footer的排列，以及让中间部分撑开从而将页脚顶到页面最下面。将.HolyGrail-body的`flex`值设为`1`可以使中间的部分撑开。

```css
.HolyGrail {
  dispaly: flex;
  min-height: 100vh;/*用100%代替可避免在老式浏览器中出问题*/
  flex-direction:column;
}
.HolyGrail-body {
    flex: 1;
}
```

然后.HolyGrail-body的display属性应该设置为flex

```css
.HolyGrail-body {
  display: flex;
  flex: 1;
}
```

制造三个等高，流式居中，定宽的边栏：

```CSS
.HolyGrail-content {
  flex: 1;/*空间变化时会放大或缩小*/
}

.HolyGrail-nav, .HolyGrail-ads {
  /* 边栏的最小宽度设为12em */
  flex: 0 0 12em;
}

.HolyGrail-nav {
  /* 把导航栏放在左边 */
  order: -1;
}
```

### 响应式设计

主要是改变HolyGrail-body中的flex布局，默认HolyGrail-body中的`flex-direction`值为`column`,在更大的页面中将其值改为`row`。

```Css
.HolyGrail,
.HolyGrail-body {
  display: flex;
  flex-direction: column;
}

.HolyGrail-nav {
  order: -1;
}

@media (min-width: 768px) {
  .HolyGrail-body {
    flex-direction: row;
    flex: 1;
  }
  .HolyGrail-content {
    flex: 1;
  }
  .HolyGrail-nav, .HolyGrail-ads {
    flex: 0 0 12em;
  }
}
```

### 练习过程遇到的问题

在实现页脚固定时，以下代码不起作用

```
body {
  min-height: 100%;
}
```

页面无法全屏显示

原因：100%这个属性值可以理解为一个计算属性！它是需要有一个基准值！而这个基准值就是其父级元素的高度值！ 

而body的父集元素html的高度没有设定

***解决方案***：

##### 第一种方法：

```css
html,
body {
  min-height: 100%;    
}
```

##### 第二种方法

```css
body {
    min-height: 100vh;
}
```





