# 第二周专栏（ JS ）

## 1. 说一说 this 绑定

### call和apply  
```javascript
fun.call(obj,arg1,arg2 ... )
fun.apply(obj,[arg1,arg2 ... ])
```
call和apply是`Function.prototype`上的方法,作用就是修改this指向,他们的第一个参数都是this指向，区别在于apply通过数组将参数传回，而call直接传递参数
### bind     
 ```javascript
function test() {
    console.log(this);
}
let obj={a:1};
let fun = test.bind(obj)
fun()//{a:1}
 ```
与call和apply不同，bind绑定的函数不会立即执行，绑定后的返回值是一个将obj绑定为this的函数
```javascript
/* bind实现 */
Function.prototype.bind = function (obj) {
    /* 切割arguments第一个参数 */
    var args = Array.prototype.slice.call(arguments, 1);
    /* 传递this */
    var self = this;
    return function () {
        self.apply(obj, args);
    }
}
```
通过闭包传递参数，返回一个延迟函数即可实现bind
## 2. 说一说闭包
[闭包&作用域链&let](https://blog.csdn.net/weixin_42060896/article/details/105407892?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158959175019724846406692%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=158959175019724846406692&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v25-1-105407892.nonecase&utm_term=%E9%97%AD%E5%8C%85)

闭包：内部函数可以访问其所在的外部函数的变量，即使外部函数已经执行完毕

![闭包](https://img-blog.csdnimg.cn/20200409122025703.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjA2MDg5Ng==,size_16,color_FFFFFF,t_70)

原理：闭包函数访问的变量不会在父亲函数执行完后立即销毁，闭包函数执行时可以根据作用域链向上查找到所需变量。


## 3. 原型和原型链  --  为什么要有原型链

![原型](https://img-blog.csdnimg.cn/20200405225739424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjA2MDg5Ng==,size_16,color_FFFFFF,t_70)


[js面向对象](https://blog.csdn.net/weixin_42060896/article/details/105335310?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158959254219725222463140%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=158959254219725222463140&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v25-1-105335310.nonecase&utm_term=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1)

**原型** 

构造函数利用Prototype定义共享的方法和参数,每次创建一个实例都会具备该方法

**原型链**

当实例的原型上没有所需方法时，会通过_proto_一直往上寻找，直到找到或者null

## 4. DOM 事件机制

[深入理解DOM事件机制](https://www.jianshu.com/p/80dc1bf495d6)

#### 事件流

事件就是用户对页面进行的各种操作，例如click

事件流就是从页面接受事件的顺序

事件处理程序就是绑定事件对应的处理函数

事件流分为两种：
- 冒泡：事件从目标元素开始往外冒泡，起点为目标元素，终点为window，adEventListener默认为冒泡触发
- 捕获：事件从最外层元素开始往内捕获，起点为window，重点为目标元素

![](https://upload-images.jianshu.io/upload_images/11616333-9d494daf71d77ea2.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/632/format/webp)

#### 事件委托
当我们需要对页面增加元素但是又不想重新绑定事件时，例如ul中添加li,可以通过在ul上监听事件，然后通过target获取到目标元素，从而实现子元素监听，这种实现方法就叫事件委托。
```javascript
ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        //...
    }
})
```

## 5. 类型转换  

#### js数据类型

- 6种数据类型：string,number,boolean,object,function,symbol
- 3种对象类型：Object,Date,Array
- 2个不包含任何值的数据类型null,undefined

#### typeof 操作符
typeof判断类型有物种结果string,number,object,function,undefined
需要注意的情况：
- NaN的结果是number
- Array,Date,null的结果是object

#### 类型转化

- 显示转换：Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。toString()，一元运算符`+`转换为数字等
- 隐式转换
    - `+`运算符，转化优先顺序为：String>Number>Boolean·　
    - `-,*,/,%`将数据转为Number类型再运算
    - 逻辑运算符转为Boolean类型


## 8. 异步加载js的方式

#### defer延迟执行js文件
```html
<script type="text/javascript" defer src="test.js"></script>
```
当script标签加上defer属性后，浏览器会在页面解析完毕后再执行test.js,能够一定程度上解决js阻塞页面的问题，不属于异步解决方案，并且只适用于外部文件延迟

#### async异步加载js
```html
<script type="text/javascript" async src="test.js"></script>
```
async 是 HTML5 新增的布尔型属性，通过设置 async 属性，test.js加载不会阻塞页面，也不用考虑` <script> `标签的放置位置。


## 9. 垃圾回收机制
#### 定义
>垃圾回收机制就是间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存。

#### 变量
js的变量分为全局变量和局部变量,局部变量函数执行过后就内存会被回收,全局变量直到浏览器关闭页面才会被回收

#### js垃圾回收方式

- 标记清除（大部分浏览器使用）  
垃圾回收器在运行的时候给所有变量加上标记，然后给`环境中的变量`和`被环境中变量引用的变量`去除标记，完成之后删除还有标记的变量。
- 引用计数  
当变量被声明或者引用类型赋值时，对应的值的引用次数+1,当变量引用了其他值，原先的值引用次数-1,当引用次数为0时,说明这个值已经无法被访问，因此可以对其进行空间回收,但是遇到循环引用的情况下会造成内存泄漏：
```javascript
function demo() {
    let obj1 = {};//obj1对应地址引用计数+1
    let obj2 = { a: obj1 };//obj2、obj1对应地址引用计数+1
    obj1.b = obj2;//obj2对应地址引用计数+1
    //执行到这里obj1,obj2对应地址引用计数都是2
}
```
代码执行完毕以后，变量obj1和obj2都会赋值为null，赋值前的两个地址引用计数变成2-1=1,不能被回收也不能被利用

## 10. 对象的深拷贝

实现过程：
1. 判断是引用类型还是基本数据类型
2. 基本数据类型直接返回
3. 引用类型若为数组，创建一个数组，将数组每一项深拷贝的返回值push到新数组
4. 引用类型若为对象，创建一个对象，将对象的每个值深拷贝结果存到新对象
```javascript
let obj = {
    name: 'zhangsan',
    hobbies: ['写代码', '看书'],
    father: {
        name: 'lisi',
        hobbies: ['打球', '看报'],
        say: function () {
            console.log("我是" + this.name)
        }
    },
    say: function () {
        console.log("我是" + this.name);
    }
}

function deepClone(obj) {
    let res;
    /* 数组或对象 */
    if (typeof obj == "object") {
        /* 数组 */
        if (Array.isArray(obj)) {
            res = [];
            obj.forEach(v => res.push(deepClone(v)))
        } else {/* 对象 */
            res = {};
            for (let key in obj) {
                res[key] = deepClone(obj[key]);
            }
        }
    } else {
        res = obj;
    }
    return res;
}
let res = deepClone(obj)
/* 改变值，看是否影响obj */
res.name = "wangwu"
res.father.name = "zhaoliu"
obj.say()//我是zhangsan
obj.father.say()//我是lisi
res.say()//我是wangwu
res.father.say()//我是zhaoliu
```

## 11. instanceof的判断机制

执行`a instanceof A`的判断过程中，js首先获取`A.prototype`,然后获取`a.__proto__`,若两者相等，则返回true，若不相等，继续获取`a.__proto__.__proto__...`随着原型链往上找直到匹配或者遇到`Object.prototype`，匹配到返回true,到`Object.prototype`也没有匹配则返回false

实现instance：
```javascript
function myInstance(a, A) {
    while (a) {
        if (a.__proto__ === A.prototype) {
            return true;
        }
        a = a.__proto__;
    }
    return false;
}
console.log(myInstance("11", String))//true
```

## 14. new 和 Object.create()区别

`new`操作符创建一个对象的过程
- 创建一个对象obj
- 将obj连接到原型链上，即设置`obj.__proto__ = Constructor.prototype`
- 绑定this指向，传参执行原型函数(参数应用到obj对象上)
- 判断执行结果，没有则返回obj
```javascript
/* 手写方法 */
function myNew() {
    /* 创建新对象 */
    let obj = new Object();
    /* 构造函数,取第一个传入的参数，arguments不是数组，不存在shift方法 */
    let Constructor = [].shift.call(arguments);//Person
    /* 原型链 */
    obj.__proto__ = Constructor.prototype;/* obj->Person.prototype->Person */
    /* 绑定this指向传值,获取返回值 */
    let res = Constructor.apply(obj, arguments);//Person(name,age)
    /* 若结果不是对象则返回obj */
    return typeof res === 'object' ? res : obj;
}
```
`Object.create`创建一个对象的过程
- 创造一个空构造函数
- 将空的构造函数prototype设为传入的prototype
- 返回实例
```javascript
Object.create = function (prototype) {
    var F = function () { };
    F.prototype = prototype;
    return new F();
};
```
举例：
```javascript
function A(name) {
    this.name = "AAA";
}
A.prototype.age = 18;
// new
let a1 = new A();
console.log(a1);//A { name: 'AAA' }
console.log(a1.age);//18
// Object.create
let a2 = Object.create(A.prototype);
console.log(a2);//A {}
console.log(a2.age);//18
```
从执行过程和例子可以看出，`new`和`Object.create`创建的的实例都具备`prototype`的属性和参数，但是`new`创建的实例执行了`原来的构造函数A`使新对象具备了`原构造函数A自身的属性`，而`Object.create`先创建一个`空构造函数F`，再进行`new F()`操作，`原构造函数A`的自身属性不被继承.
