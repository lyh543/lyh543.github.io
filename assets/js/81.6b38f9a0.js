(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{440:function(e,a,t){"use strict";t.r(a);var s=t(3),o=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("写算法、写后端开发的时候，在 IDE 打断点、条件断点、检测变量用的飞起，但是在 JS 以及 Vue 的前端开发中，这一套就有一些变化了。一是因为调试工具从各家 IDE 变为了浏览器，二是因为 Vue 的每个组件的变量不能在浏览器中直接访问，三是因为 Vue 代码需要转化为原生 JS 执行，所以看报错总会有一堆 "),a("code",[e._v("vue.runtime.esm.js")]),e._v(" 之类的、来自 Vue 框架本身代码的报错，而不是指向具体某一行的报错。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/ea0f5a0813cb055d312148b3390f029813f897b8d2fa8ea530aeaac8db9781a1.png",alt:"vue.runtime.esm.js 报错"}})]),e._v(" "),a("p",[e._v("经过一段时间的摸索，博主发现了几种调试的方法。")]),e._v(" "),a("h2",{attrs:{id:"输出变量调试法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出变量调试法"}},[e._v("#")]),e._v(" 输出变量调试法")]),e._v(" "),a("p",[e._v("在刚学 C 语言、还不会用 IDE 的时候，我很喜欢使用 "),a("code",[e._v("printf")]),e._v(" 输出变量进行调试。在 JavaScript 里，可以使用 "),a("code",[e._v("console.log()")]),e._v(" 输出变量。")]),e._v(" "),a("p",[e._v("能不能在浏览器里的 Console 进行调试呢？答案也是可以的，只要在调试的时候，在代码里把 Vue 组件绑在 window 上。")]),e._v(" "),a("p",[e._v("在 Vue 组件的 "),a("code",[e._v("activated")]),e._v(" 或 "),a("code",[e._v("onload")]),e._v(" 函数开头加上一行：")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("my_component "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("然后就可以在浏览器 Console 窗口使用 "),a("code",[e._v("window.my_component")]),e._v(" 访问到组件的 "),a("code",[e._v("this")]),e._v(" 及其变量啦~")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/10958b723061ad8f937066a94062586ddea8d36da381d3c6fb9fefe477489840.png",alt:"在 Console 中查看变量"}})]),e._v(" "),a("h2",{attrs:{id:"断点调试法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断点调试法"}},[e._v("#")]),e._v(" 断点调试法")]),e._v(" "),a("p",[e._v("通过打断点进行调试，也是常见的调试方法之一。我们在浏览器找到自己写的代码，然后就可以在代码上打断点了。")]),e._v(" "),a("p",[e._v("不过，我们的代码不是在 "),a("code",[e._v("localhost:8080")]),e._v(" 目录，而是在 "),a("code",[e._v("webpack:\\\\")]),e._v(" 目录下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/26b679334306b3ef6344449ad61600d206c81926c673ca6d5724cab310b69c8a.png",alt:"webpack 下的代码"}})]),e._v(" "),a("p",[e._v("不过这也是因为我配置了 webpack。如果实在找不到，还可以在 Source 这个页面按 "),a("code",[e._v("Ctrl+Shift+F")]),e._v(" 全局搜索自己的代码内容；或者在你的代码的某个地方 "),a("code",[e._v("console.log(1)")]),e._v("，然后在 Console 部分找到对应的超链接跳转到代码。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/d19be6061d2618c93f69513ec4d8bb2a8842cba1cba17e72ed2566dc28458044.png",alt:"通过 console.log 找到源码"}})]),e._v(" "),a("h2",{attrs:{id:"chrome-插件-vue-js-devtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-插件-vue-js-devtools"}},[e._v("#")]),e._v(" Chrome 插件 Vue.js devtools")]),e._v(" "),a("p",[e._v("Vue 也提供了 "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome"),a("OutboundLink")],1),e._v(" 和 Firefox 插件，利用插件，可以方便的查看当前页面的结构，以及观察 Vuex、Vue Router 的状态。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/b104f57439f04dd1d9b7defb9cd9f6d37f4135a0841be92b03456dffe6d186ef.png",alt:"Vue.js devtools"}})])])}),[],!1,null,null,null);a.default=o.exports}}]);