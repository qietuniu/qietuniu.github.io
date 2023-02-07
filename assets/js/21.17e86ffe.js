(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{523:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("移动端中导航的网格式布局无处无在，宽高怎么设置相适应？元素怎么居中对齐？不同场景怎么选择代码最高效？巧妙使用margin、padding等基础属性，小小技巧可以解决许多烦恼！")])]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("写在最前：移动端中导航的网格式布局无处无在，宽高怎么设置相适应？元素怎么居中对齐？不同场景怎么选择代码最高效？巧妙使用margin、padding等基础属性，小小技巧可以解决许多烦恼！")]),s._v(" "),n("h1",{attrs:{id:"一、float布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、float布局"}},[s._v("#")]),s._v(" 一、Float布局")]),s._v(" "),n("h2",{attrs:{id:"_1、场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、场景"}},[s._v("#")]),s._v(" 1、场景")]),s._v(" "),n("p",[s._v("首页导航布局（无间距）")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/1. png)")]),s._v(" "),n("h2",{attrs:{id:"_2、页面布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、页面布局"}},[s._v("#")]),s._v(" 2、页面布局")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="g-grid">\n    <div class="g-grid-item">\n      <div class="g-grid-imgWrap">\n        <img class="item-img" src="img/g1.png" />\n      </div>\n      <p class="g-grid-label">汽车票船票</p>\n    </div>\n    \x3c!-- 以下九个子元素布局相同省略 --\x3e\n </div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_3、样式代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、样式代码"}},[s._v("#")]),s._v(" 3、样式代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".g-grid {\n    text-align: center;\n    overflow: hidden; \n    background: #fff;\n}\n.g-grid-item {\n    position: relative;\n    float: left; \n    width: 20%;\n    padding: 10px 0;\n    text-align: center;\n}\n.g-grid-imgWrap {\n    display: inline-block;\n    width: 30%; \n    height: 0; \n    padding-bottom: 30%; \n}\n.g-grid-imgWrap img {\n    width: 100%;\n}\n.g-grid-label {\n    font-size: 12px;\n    color: #333;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"_4、代码解析（高度根据宽度进行自适应问题）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、代码解析（高度根据宽度进行自适应问题）"}},[s._v("#")]),s._v(" 4、代码解析（高度根据宽度进行自适应问题）")]),s._v(" "),n("p",[s._v("①、父元素g-grid通过 "),n("code",[s._v("overflow: hidden")]),s._v(" 建立BFC，使得整体高度从1变成自适应。通常可使用clearfix来清除浮动的副作用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(' .clearfix:after{\n    display: block;\n    clear: both;\n    content: "";\n    visibility: hidden;\n    height: 0;\n}\n.clearfix{\n    zoom:1;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("②、子元素g-grid-item通过 "),n("code",[s._v("float: left")]),s._v(" 属性浮动起来，这也是该方法最主要的属性。")]),s._v(" "),n("p",[s._v("③、移动端比较常见的一个需求是"),n("strong",[s._v("高度根据宽度进行自适应")]),s._v("。这个时候可以使用到 "),n("code",[s._v("padding-bottom")]),s._v(" 。当width和padding-bottom相等时就实现了宽高相等（注意要将height置为0），举一反三，各种比例下也可以设置。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("width: 30%; \nheight: 0; \npadding-bottom: 30%; \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("引申：vh和vw是css引入视口的概念来代替显示器的物理尺寸，它们作为单位的时候也可实现该效果，虽然现在兼容性慢慢变好，但是Android4. 4之前不支持是硬伤。\nvw：1vw等于视口宽度的1%。\nvh：1vh等于视口高度的1%。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("height:1vw;\nwidth:1vw;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h1",{attrs:{id:"一、display：inline-block布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、display：inline-block布局"}},[s._v("#")]),s._v(" 一、Display：inline-block布局")]),s._v(" "),n("h2",{attrs:{id:"_1、场景-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、场景-2"}},[s._v("#")]),s._v(" 1、场景")]),s._v(" "),n("p",[s._v("首页导航布局（有间距）")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/2. png)")]),s._v(" "),n("h2",{attrs:{id:"_2、样式代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、样式代码"}},[s._v("#")]),s._v(" 2、样式代码")]),s._v(" "),n("p",[s._v("页面布局与Float布局相同")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".g-grid {\n    margin-right: -2%;\n    padding: 10px 10px 0;\n    font-size: 0;\n    background: #fff;\n}\n.g-grid-item {\n    position: relative;\n    display: inline-block;\n    width: 31.33%;\n    padding-bottom: 31.33%;\n    margin-right: 2%;\n    margin-bottom: 10px;\n}\n.g-grid-imgWrap {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 20px;\n}\n.g-grid-imgWrap img {\n    width: 100%;\n    height: 100%;\n}\n.g-grid-label {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20px;\n    line-height: 20px;\n    font-size: 12px;\n    color: #333;\n    text-align: center;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h2",{attrs:{id:"_3、代码解析（去除最后一个元素margin-right值）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、代码解析（去除最后一个元素margin-right值）"}},[s._v("#")]),s._v(" 3、代码解析（去除最后一个元素margin-right值）")]),s._v(" "),n("p",[s._v("①、g-grid-item设置display：inline-block布局经常会使得元素元素间莫名其妙出现空隙。可以在写代码时使得元素和元素紧紧相连，但不太方便我们编写代码，IDE格式化之后也会自动分开。此处建议设置父元素g-grid的 "),n("code",[s._v("font-size属性为0")]),s._v(" 就可以去掉空隙。")]),s._v(" "),n("p",[s._v("②、g-grid-item这些子元素之间需要间隔时用到margin-right(或者margin-left)，经常要处理最后一行设置为margin-right(或者margin-left)为0。有以下解决方法：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("手动或者js为最后一个元素添加一个 "),n("code",[s._v("margin-right：0")])])]),s._v(" "),n("li",[n("p",[s._v("通过伪类 "),n("code",[s._v(":nth-child(3n)")]),s._v(" 来设置 "),n("code",[s._v("margin-right：0")])])]),s._v(" "),n("li",[n("p",[s._v("在g-grid-item的父元素设置 "),n("code",[s._v("margin-right: -2%;")]),s._v(" （推荐该方法）")])])]),s._v(" "),n("p",[s._v("楼上的float布局也可以使用该方法去设置间隙")]),s._v(" "),n("p",[s._v("③、宽高多少不仅仅可以通过设置值来决定，该例子里面使用以下代码实现了 "),n("code",[s._v("width：100%，高度为父级高度减去20px")]),s._v(" , 根据场景不同来决定写法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("position: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 20px;\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("④、float布局和display：inline-block布局的水平居中通常使用 "),n("code",[s._v("text-align: center;")]),s._v(" ，子元素在父元素里水平居中要求子元素 "),n("code",[s._v("display不为block")])]),s._v(" "),n("h1",{attrs:{id:"三、grid布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、grid布局"}},[s._v("#")]),s._v(" 三、Grid布局")]),s._v(" "),n("h2",{attrs:{id:"_1、场景-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、场景-3"}},[s._v("#")]),s._v(" 1、场景")]),s._v(" "),n("p",[s._v("网格布局（无间距）")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/3. png)")]),s._v(" "),n("h2",{attrs:{id:"_2、页面布局-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、页面布局-2"}},[s._v("#")]),s._v(" 2、页面布局")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="g-grid">\n    <div class="g-grid-item">\n      <img class="item-img" src="img/g1.png" />\n      <p class="g-grid-label">汽车票船票</p>\n    </div>\n    \x3c!-- 以下八个子元素布局相同省略 --\x3e\n </div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"_3、样式代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、样式代码-2"}},[s._v("#")]),s._v(" 3、样式代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".g-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 33.33%);\n    grid-template-rows: repeat(3, 100px);\n    background: #fff;\n}\n.g-grid-item {\n    display: inline-grid;\n    border-right: 1px solid #eee;\n    border-top: 1px solid #eee;\n    align-content: center\n    justify-items: center;\n}\n.g-grid-item:nth-child(3n) {\n    border-right: none;\n}\n.g-grid-item img {\n    height: 30px;\n    width: 30px;\n}\n.g-grid-label {\n    font-size: 12px;\n    color: #333;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"_4、代码解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、代码解析"}},[s._v("#")]),s._v(" 4、代码解析")]),s._v(" "),n("p",[s._v("①、grid布局通过grid-template-columns和grid-template-rows来设置几列几行\n②、g-grid-item通过设置 "),n("code",[s._v("align-content: center;")]),s._v(" 来使得子元素都处于垂直居中， "),n("code",[s._v("justify-items: center")]),s._v(" 来使得子元素都处于水平居中")]),s._v(" "),n("h1",{attrs:{id:"四、flex布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、flex布局"}},[s._v("#")]),s._v(" 四、Flex布局")]),s._v(" "),n("h2",{attrs:{id:"_1、场景-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、场景-4"}},[s._v("#")]),s._v(" 1、场景")]),s._v(" "),n("p",[s._v("九宫格布局（有空隙）")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/4. png)")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/5. png)")]),s._v(" "),n("h2",{attrs:{id:"_2、样式代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、样式代码-2"}},[s._v("#")]),s._v(" 2、样式代码")]),s._v(" "),n("p",[s._v("页面布局与Grid布局相同 "),n("code",[s._v("请输入代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".g-grid {\n    display: flex;\n    flex-wrap: wrap;\n}\n.g-grid-item {\n    flex: 0 1 31.33%;\n    margin: 0px 1% 10px;\n    padding: 1.2rem;\n    box-sizing: border-box;\n    text-align: center;\n    background: #eee;\n}\n.g-grid-item img {\n    height: 30px;\n    width: 30px;\n}\n.g-grid-label {\n    font-size: 12px;\n    color: #333;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"_3、代码解析-flex换行显式且存在间距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、代码解析-flex换行显式且存在间距"}},[s._v("#")]),s._v(" 3、代码解析(Flex换行显式且存在间距)")]),s._v(" "),n("p",[s._v("①、Flex布局通过 "),n("code",[s._v("flex-wrap: wrap;")]),s._v(" 来进行换行，但当需要元素与元素之间存在间距时，不能使用 "),n("code",[s._v("justify-content: space-between;")]),s._v(" ，减少一个元素会变成下图：")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/6. png)")]),s._v(" "),n("p",[s._v("所以该例子通过margin来设置间距，这个是比较通用的方法。")]),s._v(" "),n("p",[n("strong",[s._v("@vczhan[eq]")]),s._v(" 提供了一个思路，父级为 "),n("code",[s._v("justify-content: space-between;")]),s._v(" 或者 "),n("code",[s._v("justify-content: space-around;")]),s._v(" 的同时，加上")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('.g-grid::after {\n  content: "";\n  width: 31.33%;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("可以解决三列下的问题，但是四或以上列下不固定个数的情况下还是不适用，请根据自己使用场景选择方案。同理 "),n("strong",[s._v("@Ice丶Wing[icewing]")]),s._v(" 提供的空div思路类似，也可以这么处理。\n（再次谢谢两位！）")]),s._v(" "),n("p",[s._v("②、. g-grid-item设置 "),n("code",[s._v("flex: 0 1 31.33%;")]),s._v(" 意思是元素的本来大小为父元素的31. 33%，空间不足时该元素将缩小，存在剩余空间也不放大。")]),s._v(" "),n("p",[s._v("当该值设为 "),n("code",[s._v("flex: 1 1 31.33%;")]),s._v(" 时，减少一个元素会变成下图：")]),s._v(" "),n("p",[s._v("![图片描述](/img/article/7. png)")]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("尊重原创，如需转载请注明出处！")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);