(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{399:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),a("p",[t._v("最初看到 "),a("code",[t._v("assert")]),t._v("，是在 ACM 时，看到的别人的高精度板子，限定了除数大于0：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("但是感觉没什么用：如果 此时不等于 0，程序立即停止（"),a("code",[t._v("abort")]),t._v("）并返回一个非 0 值，就算 RE 了， 好像没什么用。")]),t._v(" "),a("p",[t._v("直到看《编程珠玑》的时候看到了它的用处：")]),t._v(" "),a("p",[t._v("断言的意思是，按照我为我的代码设定的逻辑，这种情况是绝对、永远为 true，如果是 false 就是代码出 bug 了。")]),t._v(" "),a("p",[t._v("它的作用是：它能限定当前程序的状态（如果和预期不一样就会报错），一方便是方便调试（能让程序一直保持在正确等状态下），另一方面是能让其他人理解自己的程序。")]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("该函数在 "),a("code",[t._v("<assert.h>")]),t._v(" 或 "),a("code",[t._v("<cassert>")]),t._v(" 中。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以这么用：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("还可以把布尔判断式写成一个 "),a("code",[t._v("bool")]),t._v(" 类型的函数。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSorted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSorted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"禁用所有-assert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用所有-assert"}},[t._v("#")]),t._v(" 禁用所有 "),a("code",[t._v("assert")])]),t._v(" "),a("p",[t._v("甚至还有一行关掉所有 "),a("code",[t._v("assert")]),t._v(" 语句的方法：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("NDEBUG")])]),t._v("\n")])])]),a("h2",{attrs:{id:"assert-的涉及用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assert-的涉及用法"}},[t._v("#")]),t._v(" "),a("code",[t._v("assert()")]),t._v(" 的涉及用法")]),t._v(" "),a("ol",[a("li",[t._v("捕捉逻辑错误。可以在程序逻辑必须为真的条件上设置断言。除非发生逻辑错误，否则断言对程序无任何影响。即预防性的错误检查，在认为不可能的执行到的情况下加一句 "),a("code",[t._v("assert(0)")]),t._v("，如果运行到此，代码逻辑或条件就可能有问题。")]),t._v(" "),a("li",[t._v("程序没写完的标识，放个 "),a("code",[t._v("assert(0)")]),t._v(" 调试运行时执行到此为报错中断，好知道成员函数还没写完。")])]),t._v(" "),a("h2",{attrs:{id:"which-one-断言、异常处理和-return-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which-one-断言、异常处理和-return-false"}},[t._v("#")]),t._v(" Which one: 断言、异常处理和 return false")]),t._v(" "),a("p",[t._v("当程序遇到预期可能的错误时，可以进行断言、"),a("RouterLink",{attrs:{to:"/notes/cpp/cpp-grammar/cpp-exception-handling.html"}},[t._v("异常处理")]),t._v("和返回一个错误返回值表示执行错误。那么到底该选择哪个呢？")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/23669218",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎"),a("OutboundLink")],1),t._v("上有这个问题。结论基本是：")]),t._v(" "),a("ul",[a("li",[t._v("三个词可以分为两类：一类是 "),a("code",[t._v("assert")]),t._v("，另一类是异常处理和返回错误值。因为 "),a("code",[t._v("assert")]),t._v(" 应当是程序出了 bug 才会触发（程序应当“留下证据然后立即自爆”），另两个可能是用户输入了错误的内容触发的。应当修改错误或者引导用户进行正确输入。")]),t._v(" "),a("li",[t._v("针对采用return value 还是 exception，没有一定的结论。"),a("a",{attrs:{href:"https://stackoverflow.com/questions/99683/which-and-why-do-you-prefer-exceptions-or-return-codes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stack Overflow"),a("OutboundLink")],1),t._v(" 有一个针对这个问题的讨论，不过基本上没有结论，我比较喜欢的是抛出异常会强迫调用者处理，返回值则不会。无论那种，基本上都要有一堆的处理语句。"),a("a",{attrs:{href:"https://www.zhihu.com/question/23669218/answer/28175134",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);