(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{404:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("C++ I/O 请见"),a("RouterLink",{attrs:{to:"/notes/cpp/cpp-grammar/cpp-io.html"}},[t._v("C++ I/O")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"c输入输出标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c输入输出标识符"}},[t._v("#")]),t._v(" C输入输出标识符")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("输入")]),t._v(" "),a("th",[t._v("输出")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("%ld")]),t._v(" "),a("td",[t._v("%ld")])]),t._v(" "),a("tr",[a("td",[t._v("long long")]),t._v(" "),a("td",[t._v("%lld %I64d")]),t._v(" "),a("td",[t._v("%lld %I64d *")])]),t._v(" "),a("tr",[a("td",[t._v("float")]),t._v(" "),a("td",[t._v("%f")]),t._v(" "),a("td",[t._v("%f")])]),t._v(" "),a("tr",[a("td",[t._v("double")]),t._v(" "),a("td",[t._v("%lf")]),t._v(" "),a("td",[t._v("%f")])]),t._v(" "),a("tr",[a("td",[t._v("long double")]),t._v(" "),a("td",[t._v("%llf %Lf")]),t._v(" "),a("td",[t._v("%Lf")])])])]),t._v(" "),a("p",[t._v("* 在 Codeforces 使用 "),a("code",[t._v("%lld")]),t._v(" 输出可能会炸，在 Light OJ 上使用 "),a("code",[t._v("%I64d")]),t._v(" 会炸，所以我选择 "),a("code",[t._v("cout")]),t._v("🙄")]),t._v(" "),a("h2",{attrs:{id:"为什么要-scanf-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要-scanf-s"}},[t._v("#")]),t._v(" 为什么要 scanf_s")]),t._v(" "),a("p",[a("code",[t._v("scanf")]),t._v(" 在读入字符串的时候中"),a("a",{attrs:{href:"(https://www.zhihu.com/question/43933571/answer/238686480)"}},[t._v("存在安全漏洞")]),t._v("，简单的来说就是读字符串时没有指定长度上限，导致可能把字符串（恶意代码）写入其他内存部分。因此使用 Visual Studio 进行工程开发时建议使用 "),a("code",[t._v("scanf_s")]),t._v(" 或者 "),a("code",[t._v("cout")]),t._v("。（貌似 "),a("code",[t._v("scanf_s")]),t._v(" 也加入了 C++ 20 的标准中，是微软提议的）。"),a("br"),t._v("\n使用时，"),a("code",[t._v("scanf_s")]),t._v(" 在用 "),a("code",[t._v("%s")]),t._v(" 输入字符串时，要在 "),a("code",[t._v("char*")]),t._v(" 指针后加一个长度 "),a("code",[t._v("count")]),t._v(" 参数。其他语法和 "),a("code",[t._v("scanf")]),t._v(" 一致。")]),t._v(" "),a("h2",{attrs:{id:"scanf-c-不忽略空格、回车"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scanf-c-不忽略空格、回车"}},[t._v("#")]),t._v(" scanf %c 不忽略空格、回车")]),t._v(" "),a("p",[a("code",[t._v('scanf("%c")')]),t._v(" 是看得见空格、回车的。相比下，"),a("code",[t._v("cin")]),t._v(" 会看不见空格、回车。")]),t._v(" "),a("h2",{attrs:{id:"scanf-d-忽略对应输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scanf-d-忽略对应输入"}},[t._v("#")]),t._v(" scanf "),a("code",[t._v("%*d")]),t._v(" 忽略对应输入")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scanf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d%*d%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输入 "),a("code",[t._v("1 2 3")]),t._v("，"),a("code",[t._v("a=1")]),t._v("，2 被跳过，"),a("code",[t._v("b=3")]),t._v("，c 未被赋值。")]),t._v(" "),a("h2",{attrs:{id:"printf-格式化输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#printf-格式化输出"}},[t._v("#")]),t._v(" printf 格式化输出")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%7.3d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//output: "    002"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%-7.3d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//output: "002    "')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%7.3f"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//output: "  2.000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%f"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//output: "0.0"')]),t._v("\n")])])]),a("h2",{attrs:{id:"puts-gets-putchar-getchar-getc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#puts-gets-putchar-getchar-getc"}},[t._v("#")]),t._v(" puts, gets, putchar, getchar, getc")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("puts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//with endline")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//until it get a endline or eof, and a exclude '\\n'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'A'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getc == fgetc")]),t._v("\n")])])]),a("p",[t._v("值得注意的是，"),a("code",[t._v("gets")]),t._v(" 因为和 "),a("code",[t._v("scanf")]),t._v(" 拥有同样的"),a("a",{attrs:{href:"(https://www.zhihu.com/question/43933571/answer/238686480)"}},[t._v("安全漏洞")]),t._v("，在 C++ 11 中被弃用，在 C++ 14 中被移除，现在建议使用 "),a("a",{attrs:{href:"#fgets"}},[t._v("fgets")]),t._v("，但输入输出有不同。")]),t._v(" "),a("h2",{attrs:{id:"fgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fgets"}},[t._v("#")]),t._v(" fgets")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fgets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("stdin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("fgets")]),t._v(" 后的 "),a("code",[t._v("str")]),t._v(" 包含 "),a("code",[t._v("\\n")]),t._v("，而 "),a("code",[t._v("gets")]),t._v(" 后的 "),a("code",[t._v("str")]),t._v(" 不包含。处理时需注意。")]),t._v(" "),a("h2",{attrs:{id:"getch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getch"}},[t._v("#")]),t._v(" getch")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//没有回显，在conio.h里")]),t._v("\n")])])]),a("h2",{attrs:{id:"从文件输入、输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从文件输入、输出"}},[t._v("#")]),t._v(" 从文件输入、输出")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从文件输入、输出（1）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("stdin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("stdout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从文件输入、输出（2）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFILE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfp1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfp2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fscanf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World! And \\"input.txt\\" is:%s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fclose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fclose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);