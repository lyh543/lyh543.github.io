(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{536:function(e,o,t){"use strict";t.r(o);var r=t(3),s=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("我在 Windows 的 Docker 上安装了 MySQL 8，随后在 WSL 中用命令行连接数据库失败：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ mysql -u root -h localhost -p\nEnter password:\nERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)\n")])])]),t("p",[e._v("Windows 下的 PyCharm 是能正常连接 MySQL 的，所以肯定不是服务端的问题；我 Google 了也没有找到原因，所以猜测是 WSL 的锅。")]),e._v(" "),t("p",[e._v("但是最近在 GitHub Actions 上复现了这个问题。我在调用 GitHub Actions 为一个 Django Web 应用编写集成测试时在，这个问题再次发生了。")]),e._v(" "),t("p",[e._v("在搜索其他 Django + GitHub Actions + MySQL 相关网页并尝试后，我发现了问题所在：将 "),t("code",[e._v("MYSQL_HOST")]),e._v(" 从 "),t("code",[e._v("localhost")]),e._v(" 改为 "),t("code",[e._v("127.0.0.1")]),e._v(" 即可！")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ mysql -u root -h 127.0.0.1 -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 17\nServer version: 8.0.22 MySQL Community Server - GPL\n\nCopyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")])])]),t("p",[e._v("我猜测原因是："),t("strong",[e._v("使用 "),t("code",[e._v("localhost")]),e._v(" 时，"),t("code",[e._v("mysql")]),e._v(" 客户端并不是访问 "),t("code",[e._v("localhost:3306")]),e._v("，而是直接访问 "),t("code",[e._v("/var/run/mysqld/mysqld.sock")]),e._v("。如果是在本地部署 MySQL，这样当然没有问题；但是如果使用 Docker 部署 MySQL，"),t("code",[e._v("/var/run/mysqld/mysqld.sock")]),e._v(" 根本不存在，必须通过 "),t("code",[e._v("127.0.0.1:3306")]),e._v(" 进行访问。")])]),e._v(" "),t("p",[e._v("而 PyCharm 使用 "),t("code",[e._v("jdbc")]),e._v(" 就不会受到影响。")]),e._v(" "),t("p",[e._v("后来我在 Stack Overflow 的十几个回答中找到"),t("a",{attrs:{href:"https://stackoverflow.com/a/28390193/12208030",target:"_blank",rel:"noopener noreferrer"}},[e._v("一个相关的回答"),t("OutboundLink")],1),e._v("，但也没有提到 Docker，只有回答的回复中才提到了 Docker。")])])}),[],!1,null,null,null);o.default=s.exports}}]);