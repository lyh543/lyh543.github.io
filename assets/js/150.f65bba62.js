(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{504:function(t,e,r){"use strict";r.r(e);var a=r(3),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("最近学 PyQt5，走了不少弯路，放几个教程和博客链接供需要的人参考。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("PyQt Examples（PyQt各种测试和例子） PyQt4 PyQt5，非常详尽：https://github.com/PyQt5/PyQt")])]),t._v(" "),r("li",[r("p",[t._v("PyQt5 入门：https://www.cnblogs.com/linyfeng/category/1546338.html")])]),t._v(" "),r("li",[r("p",[t._v("PyQt Designer 设计居中可缩放的窗口：https://my.oschina.net/shadai/blog/699004")])]),t._v(" "),r("li",[r("p",[t._v("Python 多线程访问数据库导致访问冲突的解决方法：https://www.eertime.com/archives/288.html")])]),t._v(" "),r("li",[r("p",[t._v("PyQt5 + matplotlib 实现画图：https://whuhan2013.github.io/blog/2017/03/28/pyqt-matplotlib-learn/")]),t._v(" "),r("ul",[r("li",[t._v("也可以用 Qchart 实现画统计图，或用 Qpainter 实现画图")]),t._v(" "),r("li",[t._v("PyQt5 + Qchart 实现定时更新、自动改变画布大小的的柱状图：https://github.com/lyh543/Some-Codes/blob/master/2020/NetworkMonitor/archive/plot_dynamic_bars.py\n"),r("ul",[r("li",[t._v("参考项目 1：https://github.com/PyQt5/PyQt/blob/master/QtChart/HorizontalBarChart.py")]),t._v(" "),r("li",[t._v("参考项目 2：https://github.com/PyQt5/PyQt/blob/master/QtChart/SplineChart.py")])])])])])]),t._v(" "),r("h2",{attrs:{id:"常见错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[t._v("#")]),t._v(" 常见错误")]),t._v(" "),r("h3",{attrs:{id:"qobject-starttimer-timers-cannot-be-started-from-another-thread-错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qobject-starttimer-timers-cannot-be-started-from-another-thread-错误"}},[t._v("#")]),t._v(" QObject::startTimer: Timers cannot be started from another thread 错误")]),t._v(" "),r("p",[t._v("在使用 QThread 建立多线程后，最好不要调用别的线程创建的实例的方法（该对象如果引入了 Timer 之类的，就会报此类错误）。")]),t._v(" "),r("p",[t._v("正确的“调用”方法应该是使用触发器，具体方法可见 https://www.cnblogs.com/linyfeng/p/12239856.html。")])])}),[],!1,null,null,null);e.default=o.exports}}]);