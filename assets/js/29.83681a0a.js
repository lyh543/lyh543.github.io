(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{442:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("入门 Markdown 推荐：http://younghz.github.io/Markdown/\nMarkdown Cheatsheet: https://bit.ly/mdcheat")])]),t._v(" "),s("p",[t._v("本文主要记录 Markdown（如有必要，也会提到 HTML）中"),s("strong",[t._v("不常见的语法")]),t._v("，如文字的下标、代码中含有反引号 "),s("code",[t._v("`")]),t._v(" 的处理方法等。")]),t._v(" "),s("h2",{attrs:{id:"标题中出现了井号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标题中出现了井号"}},[t._v("#")]),t._v(" 标题中出现了井号")]),t._v(" "),s("p",[t._v("标题出现了 "),s("code",[t._v("#")]),t._v(" 号，该怎么写呢？")]),t._v(" "),s("p",[t._v("第一反应，用 "),s("code",[t._v("\\")]),t._v(" 转义，但是也不行。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("## C\\#\n")])])]),s("p",[t._v("经过搜索，在 "),s("a",{attrs:{href:"https://stackoverflow.com/questions/32196555/how-to-escape-the-hash-sign-in-a-github-markdown-header-backslash-is-not-w",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stack Overflow"),s("OutboundLink")],1),t._v(" 上找到了类似的问题。正确的语法是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("## C# #\n")])])]),s("p",[t._v("效果见 "),s("RouterLink",{attrs:{to:"/Computer-Science/verbatim-strings-literal-grammar/#C-1"}},[t._v("C#")]),t._v("。")],1),t._v(" "),s("p",[t._v("当然，不同的渲染方式可能有不同的结果。")]),t._v(" "),s("p",[t._v("顺便吐槽一下，Google 搜索 "),s("code",[t._v("markdown sharp in title")]),t._v(" 的前两条都是相关问题，搜索 "),s("code",[t._v("markdown 标题出现井号")]),t._v(" 就没有相关问题，有些问题真得用英文问才有结果。")]),t._v(" "),s("p",[s("s",[t._v("百度搜索中英文都没有，搜索中文的结果全是 Markdown 入门教程")])]),t._v(" "),s("h2",{attrs:{id:"锚点-anchor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锚点-anchor"}},[t._v("#")]),t._v(" 锚点（Anchor）")]),t._v(" "),s("blockquote",[s("p",[t._v("参考链接: https://www.zhihu.com/question/58630229/answer/191984051")])]),t._v(" "),s("p",[t._v("锚（máo）点是什么呢？")]),t._v(" "),s("p",[t._v("我们知道，每个网站有一个链接。而你会发现这篇博客里，每个标题也有其链接。将鼠标放在这节的标题上（就在上面三行），你会看到一个 "),s("code",[t._v("#")]),t._v("，将鼠标放到 "),s("code",[t._v("#")]),t._v(" 上，你就可以看到这个标题对应的链接。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://lyh543.cn/Blog/markdown/#锚点（Anchor）\n")])])]),s("p",[t._v("顺便一提，网站右边的 TOC 的目录跳转也是由这个东西实现的。")]),t._v(" "),s("p",[t._v("Github Flavored Markdown 支持目录/页内跳转。只需要在网页链接以后加 "),s("code",[t._v("#")]),t._v(" 和标题，如：")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("“图片链接”标题")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("#图片链接")]),t._v(")")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"#%E5%9B%BE%E7%89%87%E9%93%BE%E6%8E%A5"}},[t._v("“图片链接”标题")])]),t._v(" "),s("p",[t._v("但是并不是直接复制标题这么简单。它的语法有:")]),t._v(" "),s("ol",[s("li",[t._v("把标题中的所有大写字母变为小写；")]),t._v(" "),s("li",[t._v("删掉除了字母、汉字、数字、空格、连字符 "),s("code",[t._v("-")]),t._v(" 外的字符；")]),t._v(" "),s("li",[t._v("把空格变为连字符 "),s("code",[t._v("-")]),t._v("；")]),t._v(" "),s("li",[t._v("如果标题不唯一，则在标题后加 "),s("code",[t._v("-1")]),t._v("，"),s("code",[t._v("-2")]),t._v("，……")])]),t._v(" "),s("p",[t._v("但是有些地方有点区别，如对我的另一篇博客的的 "),s("code",[t._v("MSVC 下获取本程序运行的时间（μs 级）")]),t._v(" 标题，应使用")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("MSVC 下获取本程序运行的时间（μs 级）")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("/cpp/cpp-grammar/time/#MSVC-下获取本程序运行的时间（μs-级）")]),t._v(")")]),t._v("\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/cpp/cpp-grammar/time/##MSVC-下获取本程序运行的时间（μs-级）"}},[t._v("MSVC 下获取本程序运行的时间（μs 级）")])],1),t._v(" "),s("p",[t._v("其实这公式也不用记，如果你的博客有 toc(table of contents，即目录) 的功能，直接复制对应标题的目录的链接就可以了。")]),t._v(" "),s("h2",{attrs:{id:"图片链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片链接"}},[t._v("#")]),t._v(" 图片链接")]),t._v(" "),s("p",[s("code",[t._v("![image](https://gitee.com/uploads/images/2019/0424/194736_1331e2af_551056.jpeg)")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/uploads/images/2019/0424/194736_1331e2af_551056.jpeg",alt:"image"}})]),t._v(" "),s("p",[t._v("想要修改图片大小，必须使用 HTML 语法"),s("s",[t._v("不会")]),t._v("。所以还是本地用 PS 改图片大小吧。")]),t._v(" "),s("p",[t._v("另外，Markdown 插入本地图片一直是个很恼火的东西，这使得它比印象笔记、CSDN、WordPress 麻烦。")]),t._v(" "),s("p",[t._v("但是不少 Markdown 编辑器有图床的功能，能将剪贴板里的图片上传到某个云端，然后在编辑器中加入图片的链接。如 VS Code 的 "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=hancel.coding-picture-bed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding 图床"),s("OutboundLink")],1),t._v(" 插件，能将图片上传至 "),s("code",[t._v("coding.net")]),t._v("（一个使用 Git 的国内云仓库）。")]),t._v(" "),s("h2",{attrs:{id:"超链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超链接"}},[t._v("#")]),t._v(" 超链接")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("超链接")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://cn.bing.com/")]),t._v(")")]),t._v("；\n引用式 "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("博客")]),t._v("]["),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("1")]),t._v("]")]),t._v(" 链接。\n引用式 "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("GitHub")]),t._v("]["),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("2")]),t._v("]")]),t._v(" 链接，带 title。\n\n"),s("span",{pre:!0,attrs:{class:"token url-reference url"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https://mazhuang.org")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url-reference url"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https://github.com/mzlogin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我的 GitHub 主页"')])]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://cn.bing.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("超链接"),s("OutboundLink")],1),t._v("；"),s("br"),t._v("\n引用式 "),s("a",{attrs:{href:"https://mazhuang.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),s("OutboundLink")],1),t._v(" 链接。"),s("br"),t._v("\n引用式 "),s("a",{attrs:{href:"https://github.com/mzlogin",title:"我的 GitHub 主页",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(" 链接，带 title。")]),t._v(" "),s("h2",{attrs:{id:"富文本格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#富文本格式"}},[t._v("#")]),t._v(" 富文本格式")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 这是"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("加粗"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 这也是"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("加粗")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 这是"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 这是"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("del")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("删除线"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("del")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 这也是"),s("span",{pre:!0,attrs:{class:"token strike"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~~")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("删除线")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~~")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" Emoji :laughing: :joy:\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 这是第一个小点\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 这是第二个小点\n")])])]),s("ul",[s("li",[t._v("这是"),s("b",[t._v("加粗")])]),t._v(" "),s("li",[t._v("这也是"),s("strong",[t._v("加粗")])]),t._v(" "),s("li",[t._v("这是"),s("sub",[t._v("下")]),t._v("标")]),t._v(" "),s("li",[t._v("这是"),s("del",[t._v("删除线")])]),t._v(" "),s("li",[t._v("这也是"),s("s",[t._v("删除线")])]),t._v(" "),s("li",[t._v("Emoji 😆 😂\n"),s("ul",[s("li",[t._v("这是第一个小点")]),t._v(" "),s("li",[t._v("这是第二个小点")])])])]),t._v(" "),s("h2",{attrs:{id:"表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("| 1 | 2 | 3 |\n| :- | --- | --: |\n| 4 | 5 | 6 |\n| | | |\n| |9 | |\n| | | |\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("th",[t._v("2")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("3")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("6")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",[t._v("9")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"right"}})])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在第二行使用 "),s("code",[t._v(":---------:")]),t._v(" 居中")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v(":----------")]),t._v(" 居左")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("----------:")]),t._v(" 居右")])]),t._v(" "),s("li",[s("p",[t._v("表格中换行可以使用 "),s("code",[t._v("<br>")])])]),t._v(" "),s("li",[s("p",[t._v("表格中代码间换行：可以将代码按行分段用 "),s("code",[t._v("`")]),t._v(" 包含，然后在每段间加入 "),s("code",[t._v("<br>")])])])]),t._v(" "),s("h2",{attrs:{id:"行内、段间代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内、段间代码"}},[t._v("#")]),t._v(" 行内、段间代码")]),t._v(" "),s("h3",{attrs:{id:"行内代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内代码"}},[t._v("#")]),t._v(" 行内代码")]),t._v(" "),s("p",[t._v("行内代码 markdown 写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("`代码`\n")])])]),s("p",[t._v("效果："),s("code",[t._v("代码")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"段间代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#段间代码"}},[t._v("#")]),t._v(" 段间代码")]),t._v(" "),s("p",[t._v("段间代码 Markdown 写法：")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("cpp")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-cpp"}},[t._v('#include<iostream>\nint main()\n{\n    std::cout << "Hello world!";\n}')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n")])])]),s("p",[t._v("效果如下：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"代码包含反引号-的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码包含反引号-的情况"}},[t._v("#")]),t._v(" 代码包含反引号 "),s("code",[t._v("`")]),t._v(" 的情况")]),t._v(" "),s("p",[t._v("行内代码包含一个反引号时，需要改用（一对）两个反引号将代码括起来。")]),t._v(" "),s("p",[t._v("段间代码包含两个反引号时，需要改用（一对）三个反引号将代码括起来。")]),t._v(" "),s("p",[t._v("貌似"),s("strong",[t._v("代码内包含 n 个反引号，即可用 n+1 个反引号代码括起来")]),t._v("。挺有意思的。")]),t._v(" "),s("h2",{attrs:{id:"引用及嵌套引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用及嵌套引用"}},[t._v("#")]),t._v(" 引用及嵌套引用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> `#include`是什么？一条预处理指令。于是你就需要搞清楚预处理在c++程序的编译过程中大约发生在什么环节。以下引用 cppreference.com:  \n>\n> > The preprocessor is executed at translation phase 4, before the compilation. The result of preprocessing is a single file which is then passed to the actual compiler.  \n>\n> C++ 的预处理器在编译之前执行，它看到 `#include` 指令，就会把那个文件的内容替换到当前位置。其它的预处理指令例如`#define`, `#ifdef`, 等也在这个阶段被执行、并产生相应的内容。预处理器执行完成后，所有的预处理指令都会被移除。其结果是一个单个头的大文件（我猜测这文件只存在于内存里），这个文件才会被进一步传给编译器做编译。\n")])])]),s("p",[s("strong",[t._v("注意被嵌套段落的上下都有空行，不然无法嵌套。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("#include")]),t._v("是什么？一条预处理指令。于是你就需要搞清楚预处理在c++程序的编译过程中大约发生在什么环节。以下引用 cppreference.com:")]),t._v(" "),s("blockquote",[s("p",[t._v("The preprocessor is executed at translation phase 4, before the compilation. The result of preprocessing is a single file which is then passed to the actual compiler.")])]),t._v(" "),s("p",[t._v("C++ 的预处理器在编译之前执行，它看到 "),s("code",[t._v("#include")]),t._v(" 指令，就会把那个文件的内容替换到当前位置。其它的预处理指令例如"),s("code",[t._v("#define")]),t._v(", "),s("code",[t._v("#ifdef")]),t._v(", 等也在这个阶段被执行、并产生相应的内容。预处理器执行完成后，所有的预处理指令都会被移除。其结果是一个单个头的大文件（我猜测这文件只存在于内存里），这个文件才会被进一步传给编译器做编译。")])]),t._v(" "),s("h2",{attrs:{id:"折叠代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#折叠代码"}},[t._v("#")]),t._v(" 折叠代码")]),t._v(" "),s("p",[t._v("使用的是 HTML 语法。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("summary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("折叠文本"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("summary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    可以写文本。\n    但是回车不能换行。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    得用 br\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("summary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("折叠代码，但是不能进行染色"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("summary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    \n    int main()\n    {\n        printf("folded code");\n    }\n\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("details",[s("summary",[t._v("折叠文本")]),t._v("\n    可以写文本。\n    但是回车不能换行。"),s("br"),t._v("\n    得用 br\n")]),t._v(" "),s("details",[s("summary",[t._v("折叠代码，但是不能进行染色")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('int main()\n{\n    printf("folded code");\n}\n')])])])]),t._v(" "),s("h2",{attrs:{id:"latex-公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex-公式"}},[t._v("#")]),t._v(" LaTeX 公式")]),t._v(" "),s("p",[t._v("原生 Markdown 不支持 LaTeX 数学公式，但诸如 Typora 等软件支持在 Markdown 中调用 MathJax 从而实现 LaTeX 公式。另外，Chrome 插件 "),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/mathjax-plugin-for-github/ioemnmodlmafdkllaclgeombjnmnbima",target:"_blank",rel:"noopener noreferrer"}},[t._v("MathJax Plugin for Github"),s("OutboundLink")],1),t._v(" 支持渲染网页上的 LaTeX 公式。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/LaTeX/LaTeX-math-equation/"}},[t._v("LaTeX 公式语法")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);