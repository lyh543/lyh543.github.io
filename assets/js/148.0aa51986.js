(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{539:function(e,a,t){"use strict";t.r(a);var n=t(3),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"添加到-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加到-path"}},[e._v("#")]),e._v(" 添加到 PATH")]),e._v(" "),a("p",[e._v("添加到 PATH 后，在 cmd 或者 VS Code 敲 "),a("code",[e._v("wt")]),e._v(" 就能打开 Windows Terminal。")]),e._v(" "),a("p",[e._v("添加的方法就不多说了，看图。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/99bcc7d64c256955b7a1d6309892856ec4eee534ff62b8babc6c1fb751eeaf23.png",alt:"添加到 PATH"}})]),e._v(" "),a("h2",{attrs:{id:"右键菜单-windows-terminal-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#右键菜单-windows-terminal-here"}},[e._v("#")]),e._v(" 右键菜单“Windows Terminal Here”")]),e._v(" "),a("p",[e._v("最近的新版本 Windows Terminal 也有一个 "),a("code",[e._v("Open in Windows Terminal")]),e._v("，但不是很好用：使用 "),a("code",[e._v("Open in Windows Terminal")]),e._v(" 的窗口是在自己的路径的，但在这个窗口新起的标签页就又变成了 "),a("code",[e._v("C:\\Windows\\System32")]),e._v("。希望之后能修复这个 bug，目前可以用下面这个方法解决。")]),e._v(" "),a("p",[e._v("将以下文本粘贴到一个空 txt 后，改为 reg 格式。然后双击导入注册表即可。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Windows Registry Editor Version 5.00\n\n; 添加 Windows Terminal Here\n[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\wt]\n@="Windows Terminal Here"\n\n[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\wt\\command]\n@="wt.exe"\n\n; 删除自带的 Open in Terminal\n[-HKEY_CLASSES_ROOT\\PackagedCom\\ClassIndex\\{9f156763-7844-4dc4-b2b1-901f640f5155}]\n')])])]),a("blockquote",[a("p",[e._v("注：还需要配置启动目录为 "),a("code",[e._v("null")]),e._v("，见"),a("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"}},[e._v("配置文件")]),e._v("。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/a82d5baa7043165402c914f2d5a921cfba1c0b50cb9a02b6a588a995e51ee6cf.png",alt:"效果"}})]),e._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[e._v("#")]),e._v(" 配置文件")]),e._v(" "),a("p",[e._v("我的 Windows Terminal (v1.8.1521) 配置文件因为太长，故以"),a("a",{attrs:{href:"settings.json"}},[e._v("文件")]),e._v("形式放出。")])])}),[],!1,null,null,null);a.default=s.exports}}]);