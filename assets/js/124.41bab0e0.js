(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{539:function(s,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本篇作为 "),a("a",{attrs:{href:"/others/sql-server"}},[s._v("SQL Server")]),s._v(" 的补充。SQL Server 有不少很不错的功能。")]),s._v(" "),a("h2",{attrs:{id:"mysql-8-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8-特性"}},[s._v("#")]),s._v(" MySQL 8 特性")]),s._v(" "),a("p",[s._v("在 MySQL 8 中写表的名字最好把数据库带上，如 "),a("code",[s._v("test_tb.table1")]),s._v("。否则可能会报错。")]),s._v(" "),a("h2",{attrs:{id:"表操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表操作"}},[s._v("#")]),s._v(" 表操作")]),s._v(" "),a("h3",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[s._v("#")]),s._v(" 创建表")]),s._v(" "),a("h4",{attrs:{id:"设置主键自增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置主键自增"}},[s._v("#")]),s._v(" 设置主键自增")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n       userid       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       username     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       userpassword "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("主键自增是为了防止 "),a("code",[s._v("id")]),s._v(" 重复，如果存 "),a("code",[s._v("NULL")]),s._v("，他就会设置为目前最大的 "),a("code",[s._v("id + 1")]),s._v("；")]),s._v(" "),a("li",[s._v("主键自增只有主键可以设置；")])]),s._v(" "),a("h3",{attrs:{id:"修改表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改表"}},[s._v("#")]),s._v(" 修改表")]),s._v(" "),a("h4",{attrs:{id:"表改名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表改名"}},[s._v("#")]),s._v(" 表改名")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("login "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("login_backup\n")])])]),a("h4",{attrs:{id:"更改表的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改表的定义"}},[s._v("#")]),s._v(" 更改表的定义")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/alter-table.html#alter-table-redefine-column",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("用下面这种方式可以修改属性名或属性定义。原表中该属性的分量也会自动转换类型。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("top100_count\nCHANGE id id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"数据操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据操作"}},[s._v("#")]),s._v(" 数据操作")]),s._v(" "),a("h3",{attrs:{id:"内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[s._v("#")]),s._v(" 内置函数")]),s._v(" "),a("h4",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[s._v("#")]),s._v(" 类型转换")]),s._v(" "),a("p",[s._v("在需要类型转换的时候（如将 A 表的 SELECT 的 "),a("code",[s._v("TEXT")]),s._v(" 数据 INSERT 进 B 表的 "),a("code",[s._v("INTEGER")]),s._v(" 属性），MySQL 会自动完成类型转换（如 "),a("code",[s._v("TEXT")]),s._v(" 转为 "),a("code",[s._v("VARCHAR(10)")]),s._v(" 或 "),a("code",[s._v("INTEGER")]),s._v("）。")]),s._v(" "),a("p",[s._v("但是，如果查询的 "),a("code",[s._v("WHERE")]),s._v(" 条件中发生了隐式转换，可能会导致不能正确走索引，如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" col1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" col_varchar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"字符串替换、拼接、截取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串替换、拼接、截取"}},[s._v("#")]),s._v(" 字符串替换、拼接、截取")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("字符串的替换")]),s._v("使用 "),a("code",[s._v("replace(date, '.', '')")]),s._v("，会将 "),a("code",[s._v("date")]),s._v(" 中的 "),a("code",[s._v(".")]),s._v(" 删去；")]),s._v(" "),a("li",[a("strong",[s._v("字符串的拼接")]),s._v("使用 "),a("code",[s._v("concat(date, time)")]),s._v("，会将两个字符串进行拼接；")]),s._v(" "),a("li",[a("code",[s._v("date + time")]),s._v(" 会尝试将两个字符串"),a("strong",[s._v("转为数字以后相加")]),s._v("。如果无法转为数字则报错；")]),s._v(" "),a("li",[a("code",[s._v("left(date, 3)")]),s._v(" 和 "),a("code",[s._v("right(date, 3)")]),s._v(" 分别取 "),a("code",[s._v("date")]),s._v(" 的"),a("strong",[s._v("左三个字符")]),s._v("和"),a("strong",[s._v("右三个字符")]),s._v("；")])]),s._v(" "),a("p",[s._v("示例代码：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IGNORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("online_count_2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("online_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("对于 "),a("code",[s._v("online_count")]),s._v(" 中记录为 "),a("code",[s._v("(07.01, 12:30, 12345)")]),s._v(" 的行，导入 "),a("code",[s._v("online_count_2")]),s._v(" 的内容是 "),a("code",[s._v("(7011230, 123450)")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[s._v("#")]),s._v(" INSERT")]),s._v(" "),a("h4",{attrs:{id:"插入子查询的结果时忽略部分错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入子查询的结果时忽略部分错误"}},[s._v("#")]),s._v(" 插入子查询的结果时忽略部分错误")]),s._v(" "),a("p",[s._v("我们想要将 A 表的数据插入 B 表，但是直接插入的话部分行会是无法插入的（如 A 的部分行插入 B 会使得 B 的主键重复）。这会导致插入操作被终止，所有行都没有被插入 B 表。")]),s._v(" "),a("p",[s._v("如果我们想要在插入的时候忽略掉掉错误行，把其他正确行插入，可以使用 "),a("code",[s._v("IGNORE")]),s._v(" 关键字：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IGNORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VALUE1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" VALUE2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" B\n")])])]),s._v(" "),a("h2",{attrs:{id:"explain-调试法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain-调试法"}},[s._v("#")]),s._v(" explain 调试法")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("原 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("warnings")]),s._v(" \\G\n")])])]),a("h2",{attrs:{id:"执行-sql-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行-sql-代码"}},[s._v("#")]),s._v(" 执行 .sql 代码")]),s._v(" "),a("p",[s._v("如执行 "),a("code",[s._v("~/run.sql")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);