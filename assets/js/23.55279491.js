(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{408:function(a,e,t){"use strict";t.r(e);var s=t(3),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("先放一个"),e("a",{attrs:{href:"https://hexo.io/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Hexo官方文档"),e("OutboundLink")],1),a._v("的链接。")]),a._v(" "),e("h2",{attrs:{id:"初始化-hexo-博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-hexo-博客"}},[a._v("#")]),a._v(" 初始化 hexo 博客")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" hexo-cli -g\nhexo init lyh543.github.io\n")])])]),e("p",[a._v("这步会创建一个 "),e("code",[a._v("lyh543.github.io")]),a._v(" 文件夹，文件夹里是一个基础的博客。接下来安装博客所需的最基础的 "),e("code",[a._v("npm")]),a._v(" 包。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" lyh543.github.io\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),e("p",[a._v("然后接"),e("a",{attrs:{href:"#%E5%B8%B8%E8%A7%84%E4%BA%8C%E8%BF%9E"}},[a._v("常规二连")]),a._v("就可以了")]),a._v(" "),e("h2",{attrs:{id:"常规二连"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规二连"}},[a._v("#")]),a._v(" 常规二连")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hexo clean")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果后面突然报bug，可以试下clean（虽然我也不知道有什么用）")]),a._v("\nhexo g\nhexo d "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#可以替换为git add, commit, push三连")]),a._v("\n")])])]),e("p",[a._v("貌似调用"),e("code",[a._v("hexo")]),a._v("的任何命令的前 20 秒内命令行会没有回显，用"),e("s",[a._v("Windows下的")]),a._v("任务管理器查看是 "),e("code",[a._v("node")]),a._v(" 占用了高 CPU。不知道是不是通病。")]),a._v(" "),e("p",[a._v("甚至可以简写为（以下二选一）：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hexo d -g\nhexo g -d\n")])])]),e("h2",{attrs:{id:"配置-hexo-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-hexo-server"}},[a._v("#")]),a._v(" 配置 hexo-server")]),a._v(" "),e("p",[a._v("Hexo 提供了本地即时预览网页的功能，需要安装 hexo-server:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" hexo-server --save\n")])])]),e("p",[a._v("安装以后，"),e("code",[a._v("hexo s")]),a._v("以后即可在"),e("code",[a._v("http://127.0.0.1:4000/")]),a._v("预览自己的博客了。本地更新文件以后，hexo 会即时更新，刷新网站即可预览更改。")]),a._v(" "),e("h2",{attrs:{id:"配置-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-deploy"}},[a._v("#")]),a._v(" 配置 deploy")]),a._v(" "),e("p",[a._v("配置deploy就不用再到 git 里 push 了。")]),a._v(" "),e("p",[a._v("deploy 之前配置博客根目录下"),e("code",[a._v("_config.yml")]),a._v("最后三行为（冒号后一定要有空格！！！！）")]),a._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" git\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("repo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//github.com/lyh543/lyh543.github.io\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("branch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" master\n")])])]),e("p",[a._v("还要安装"),e("code",[a._v("hexo-deployer-git")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" hexo-deployer-git --save \n")])])]),e("h2",{attrs:{id:"给-hexo-换主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给-hexo-换主题"}},[a._v("#")]),a._v(" 给 hexo 换主题")]),a._v(" "),e("p",[a._v("先区分两个概念："),e("code",[a._v("主题配置文件")]),a._v("和"),e("code",[a._v("站点配置文件")]),a._v("。")]),a._v(" "),e("p",[e("code",[a._v("站点配置文件")]),a._v("用于配置站点，在"),e("code",[a._v("/_config.yml")]),a._v("；"),e("br"),a._v(" "),e("code",[a._v("主题配置文件")]),a._v("用于配置主题，在 "),e("code",[a._v("/theme/<theme name>/_config.yml")]),a._v("。\n二者同名，故用概念区分，下同。")]),a._v(" "),e("p",[a._v("理论上，只要在"),e("code",[a._v("/theme")]),a._v("文件夹下配置好以后，修改站点配置文件的"),e("code",[a._v("theme")]),a._v("一项，即可方便的切换主题。")]),a._v(" "),e("p",[a._v("本文以"),e("a",{attrs:{href:"https://github.com/viosey/hexo-theme-material/",target:"_blank",rel:"noopener noreferrer"}},[a._v("material"),e("OutboundLink")],1),a._v("主题做示范，演示如何下载、配置主题。")]),a._v(" "),e("ol",[e("li",[a._v("在github把上面的库"),e("code",[a._v("clone")]),a._v("到本地；")]),a._v(" "),e("li",[a._v("在 Hexo 博客中的"),e("code",[a._v("/theme/")]),a._v("文件夹下创一个"),e("code",[a._v("material")]),a._v("文件夹；")]),a._v(" "),e("li",[a._v("接下来把刚才"),e("code",[a._v("clone")]),a._v("的整个库复制到"),e("code",[a._v("material")]),a._v("文件夹里；")]),a._v(" "),e("li",[a._v("最后改一下站点配置文件：")])]),a._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("theme")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" material\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("language")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("CN\n")])])]),e("p",[a._v("即可。")]),a._v(" "),e("p",[a._v("Material主题配置具体需要注意的点见另一篇"),e("RouterLink",{attrs:{to:"/notes/blog/hexo-material.html"}},[a._v("博客")]),a._v("。")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);