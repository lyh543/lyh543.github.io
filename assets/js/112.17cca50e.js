(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{469:function(t,a,s){"use strict";s.r(a);var n=s(3),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("收集一些好用的函数名，具体语法等用时再查文档。")]),t._v(" "),s("p",[t._v("常用的可以看 MATLAB 教程书籍的附录。这里放一个整理的 "),s("a",{attrs:{href:"/blob/matlab/MATLAB%E5%87%BD%E6%95%B0%E9%80%9F%E6%9F%A5%E6%89%8B%E5%86%8C.pdf"}},[t._v("pdf")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"统计函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计函数"}},[t._v("#")]),t._v(" 统计函数")]),t._v(" "),s("h3",{attrs:{id:"向量的元素和-矩阵的每列和-最值-均值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向量的元素和-矩阵的每列和-最值-均值"}},[t._v("#")]),t._v(" 向量的元素和/矩阵的每列和/最值/均值")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cumsum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 累积和/每列的累积和，即前缀和")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 顺便把最小值位置 index 给 l")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 矩阵的每行和（平均数），2 是第二维")]),t._v("\n")])])]),s("h3",{attrs:{id:"向量长度、矩阵大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向量长度、矩阵大小"}},[t._v("#")]),t._v(" 向量长度、矩阵大小")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%返回一个1x2数组")]),t._v("\n")])])]),s("h3",{attrs:{id:"列排序-返回数列、原数列元素在新数列的index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列排序-返回数列、原数列元素在新数列的index"}},[t._v("#")]),t._v(" 列排序（返回数列、原数列元素在新数列的index）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[B I] = sort(V)\n[B I] = sort(V,'descend') %降序\n")])])]),s("h3",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" find")]),t._v(" "),s("p",[t._v("很重要很重要！！")]),t._v(" "),s("p",[t._v("第一行找到 v 中大于 0 的元素的下标。"),s("br"),t._v("\n第二行把下标矩阵作为原矩阵的下标，则可以直接筛选到对应下标的元素组成的矩阵。")]),t._v(" "),s("p",[t._v("相当于实现了一个筛选矩阵元素的功能。可以用 "),s("code",[t._v("if")]),t._v(" 改写，但是 MATLAB 中矩阵运算更快，因此能用矩阵运算就不要用 "),s("code",[t._v("if")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nidx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% idx == [1 2 4]")]),t._v("\nv1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% v1 = [1 0 7]")]),t._v("\n")])])]),s("p",[t._v("注意到，除了把下标矩阵 "),s("code",[t._v("idx")]),t._v(" 传给 "),s("code",[t._v("v")]),t._v(" 以外，还可以直接把 "),s("code",[t._v("v>=0")]),t._v(" 传给矩阵，省去了一个 "),s("code",[t._v("find")]),t._v(" 的过程。")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% v2 = [1 0 7]")]),t._v("\n")])])]),s("h2",{attrs:{id:"好用的函数收集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好用的函数收集"}},[t._v("#")]),t._v(" 好用的函数收集")]),t._v(" "),s("p",[t._v("（从 xls/xlsx csv txt）读写表格："),s("code",[t._v("xlsread")]),t._v("，"),s("code",[t._v("readmatrix")]),t._v("（MATLAB R2019a 起）。")]),t._v(" "),s("p",[t._v("注意 "),s("code",[t._v("readmatrix")]),t._v(" 如不指定 "),s("code",[t._v("NumHeaderLines")]),t._v(" 参数时，会自动识别并去掉行表头。写代码的时候小心。")]),t._v(" "),s("p",[t._v("映射、map："),s("a",{attrs:{href:"https://ww2.mathworks.cn/help/matlab/matlab_prog/creating-a-map-object.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("containers.Map")]),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("分段函数："),s("code",[t._v("piecewise")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"最优化、规划问题相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最优化、规划问题相关"}},[t._v("#")]),t._v(" 最优化、规划问题相关")]),t._v(" "),s("p",[t._v("求函数最小值，有一堆工具箱函数"),s("s",[t._v("不知道有什么区别，可能使用的算法不同")]),t._v("：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("功能")]),t._v(" "),s("th",[t._v("函数名")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("单变量优化")]),t._v(" "),s("td",[s("code",[t._v("fminbnd()")])]),t._v(" "),s("td",[t._v("求一元函数最小值")])]),t._v(" "),s("tr",[s("td",[t._v("无约束优化")]),t._v(" "),s("td",[s("code",[t._v("fminsearch()")])]),t._v(" "),s("td",[t._v("使用无导数法计算最小值")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[s("code",[t._v("fminunc()")])]),t._v(" "),s("td",[t._v("计算无约束的多变量函数的最小值")])]),t._v(" "),s("tr",[s("td",[t._v("有约束优化")]),t._v(" "),s("td",[s("code",[t._v("fmincon()")])]),t._v(" "),s("td",[t._v("在有线性约束下计算最小值")])]),t._v(" "),s("tr",[s("td",[t._v("线性规划")]),t._v(" "),s("td",[s("code",[t._v("linprog()")])]),t._v(" "),s("td",[t._v("解线性规划问题")])]),t._v(" "),s("tr",[s("td",[t._v("整数规划")]),t._v(" "),s("td",[s("code",[t._v("intlinprog()")])]),t._v(" "),s("td",[t._v("解整数线性规划问题")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/notes/matlab/genetic-algorithm.html#在-MATLAB-中调用遗传算法"}},[t._v("遗传算法")])],1),t._v(" "),s("td",[s("code",[t._v("ga()")])]),t._v(" "),s("td",[t._v("包含以上所有功能，不过精度较低")])])])]),t._v(" "),s("h3",{attrs:{id:"基于问题的最优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于问题的最优化"}},[t._v("#")]),t._v(" 基于问题的最优化")]),t._v(" "),s("p",[t._v("最优化相关的基于问题的方法 "),s("code",[t._v("Problem-Based Approach")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimvar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LowerBound'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimvar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LowerBound'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UpperBound'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimproblem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Objective'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncons1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" xb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncons2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" xb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Constraints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cons1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cons1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Constraints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cons2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cons2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Convert the problem object to a problem structure.")]),t._v("\nproblem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prob2struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Set Options")]),t._v("\nproblem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimoptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'intlinprog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Display'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('"off"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Solve the resulting problem structure.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("exitflag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intlinprog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("说白了，就是 "),s("code",[t._v("prob2struct")]),t._v(" 函数能够将 "),s("code",[t._v("4*x(1) + 2*x(2) + xb == 12")]),t._v(" 这样的直白的优化式子和约束条件，换为 "),s("code",[t._v("intlinprog")]),t._v(" 的 "),s("code",[t._v("Aeq")]),t._v(" "),s("code",[t._v("beq")]),t._v("。"),s("br"),t._v("\n如果使用传统的方式，这一步转化需要人工完成。"),s("br"),t._v("\n对于复杂的问题，这样更不容易出错。")]),t._v(" "),s("p",[t._v("跑出来的 "),s("code",[t._v("sol")]),t._v(" 是一个 1*3 向量，那么 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("xb")]),t._v(" 对应哪些变量呢？")]),t._v(" "),s("p",[t._v("可以使用 "),s("code",[t._v("varindex")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("varindex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n\n  包含以下字段的 struct"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n    x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    xb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("就可以看出对应关系了。")]),t._v(" "),s("p",[t._v("更多相关资料可查看 "),s("a",{attrs:{href:"https://www.mathworks.com/help/optim/problem-based-approach.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Problem-Based Optimization Setup - MATLAB & Simulink"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"插值拟合相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值拟合相关"}},[t._v("#")]),t._v(" 插值拟合相关")]),t._v(" "),s("p",[t._v("该部分详解可见"),s("RouterLink",{attrs:{to:"/notes/mcm/self-study/interpolation-and-curve-fit.html"}},[t._v("数模自学笔记——插值和拟合")]),t._v("。")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("功能")]),t._v(" "),s("th",[t._v("函数名")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("一维插值")]),t._v(" "),s("td",[s("code",[t._v("interp1")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("二维插值")]),t._v(" "),s("td",[s("code",[t._v("interp2")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("样条插值")]),t._v(" "),s("td",[s("code",[t._v("csape")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("多项式拟合")]),t._v(" "),s("td",[s("code",[t._v("polyfit")])]),t._v(" "),s("td",[t._v("多项式值计算可使用 "),s("code",[t._v("polyval")])])])])]),t._v(" "),s("h2",{attrs:{id:"概率统计相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概率统计相关"}},[t._v("#")]),t._v(" 概率统计相关")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("功能")]),t._v(" "),s("th",[t._v("函数名")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("正态概率函数")]),t._v(" "),s("td",[s("code",[t._v("normpdf")])]),t._v(" "),s("td",[t._v("pdf: Probability Density Function")])]),t._v(" "),s("tr",[s("td",[t._v("正态分布函数")]),t._v(" "),s("td",[s("code",[t._v("normcdf")])]),t._v(" "),s("td",[t._v("cdf: Cumulative Density Function")])]),t._v(" "),s("tr",[s("td",[t._v("正态下侧分位数")]),t._v(" "),s("td",[s("code",[t._v("norminv(p)")])]),t._v(" "),s("td",[t._v("返回 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("x")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("x")])])])])]),t._v(" 满足 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("Φ")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",[t._v("=")]),s("mi",[t._v("p")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\varPhi(x)=p")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("Φ")])]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("x")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("p")])])])])])],1)]),t._v(" "),s("tr",[s("td",[t._v("按正态分布生成随机数")]),t._v(" "),s("td",[s("code",[t._v("normrnd")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("上述函数的卡方分布版本")]),t._v(" "),s("td",[t._v("将四个函数的 "),s("code",[t._v("norm")]),t._v(" 改为 "),s("code",[t._v("chi2")])]),t._v(" "),s("td",[t._v("很香")])]),t._v(" "),s("tr",[s("td",[t._v("上述函数的均匀分布版本")]),t._v(" "),s("td",[t._v("将四个函数的 "),s("code",[t._v("norm")]),t._v(" 改为 "),s("code",[t._v("unif")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("上述函数的指数分布版本")]),t._v(" "),s("td",[t._v("将四个函数的 "),s("code",[t._v("norm")]),t._v(" 改为 "),s("code",[t._v("exp")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("正态均值检验、参数估计")]),t._v(" "),s("td",[s("code",[t._v("ttest")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("正态方差检验、参数估计")]),t._v(" "),s("td",[s("code",[t._v("vartest")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("总体均值差检验、参数估计")]),t._v(" "),s("td",[s("code",[t._v("ttest2")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mi",[t._v("χ")]),s("mn",[t._v("2")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\chi^2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.008548em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathdefault"},[t._v("χ")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])])])])])]),t._v(" 拟合优度（goodness-of-fit）检验")],1),t._v(" "),s("td",[s("code",[t._v("chi2gof")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("正态分布拟合")]),t._v(" "),s("td",[s("code",[t._v("normfit")])]),t._v(" "),s("td",[t._v("使用 Wald 检验")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("曲线拟合工具箱")]),t._v(" "),s("td",[s("code",[t._v("cftool")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("分布拟合工具箱")]),t._v(" "),s("td",[s("code",[t._v("distributionFitter")])]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"工具箱函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具箱函数"}},[t._v("#")]),t._v(" 工具箱函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("名称")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("cftool")])]),t._v(" "),s("td",[t._v("曲线拟合工具箱")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("distributionFitter")])]),t._v(" "),s("td",[t._v("分布拟合工具箱")])])])]),t._v(" "),s("h2",{attrs:{id:"图论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图论"}},[t._v("#")]),t._v(" 图论")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令名")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("graphallshortestpaths")])]),t._v(" "),s("td",[t._v("求图中所有顶点对之间的最短距离")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphconncomp")])]),t._v(" "),s("td",[t._v("找无向图的连通分支，或有向图的强弱连通分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphisdag")])]),t._v(" "),s("td",[t._v("测试有向图是否含有圈，不含圈返回1，否则返回0")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphisomorphism")])]),t._v(" "),s("td",[t._v("确定两个图是否同构，同构返回1，否则返回0")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphisspantree")])]),t._v(" "),s("td",[t._v("确定一个图是否是生成树，是返回1，否则返回0")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphmaxflow")])]),t._v(" "),s("td",[t._v("计算有向图的最大流")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphminspantree")])]),t._v(" "),s("td",[t._v("在图中找最小生成树")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphpred2path")])]),t._v(" "),s("td",[t._v("把前驱顶点序列变成路径的顶点序列")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphshortestpath")])]),t._v(" "),s("td",[t._v("求图中指定的一对顶点间的最短距离和最短路径")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphtopootder")])]),t._v(" "),s("td",[t._v("执行有向无圈图的拓扑排序")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("graphtraverse")])]),t._v(" "),s("td",[t._v("求从一顶点出发，所能遍历图中的顶点")])])])]),t._v(" "),s("h2",{attrs:{id:"绘图及图片处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绘图及图片处理"}},[t._v("#")]),t._v(" 绘图及图片处理")]),t._v(" "),s("p",[t._v("见"),s("RouterLink",{attrs:{to:"/notes/matlab/matlab-plot.html"}},[t._v("绘图")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"符号编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#符号编程"}},[t._v("#")]),t._v(" 符号编程")]),t._v(" "),s("p",[t._v("见"),s("RouterLink",{attrs:{to:"/notes/matlab/matlab-syms.html"}},[t._v("符号编程")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);