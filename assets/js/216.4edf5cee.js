(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{619:function(t,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"下载梯子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载梯子"}},[t._v("#")]),t._v(" 下载梯子")]),t._v(" "),a("p",[t._v("为了更好的使用 Chocolatey，最好能够有梯子。此处略。")]),t._v(" "),a("p",[t._v("以及记得配置 "),a("code",[t._v("HTTP_PROXY")]),t._v(" 和 "),a("code",[t._v("HTTPS_PROXY")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"下载-chocolatey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-chocolatey"}},[t._v("#")]),t._v(" 下载 Chocolatey")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://chocolatey.org/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chocolatey Software | Installing Chocolatey"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在管理员权限下 Powershell 执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" Bypass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Process")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Net.ServicePointManager]")]),t._v("::SecurityProtocol = "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Net.ServicePointManager]")]),t._v("::SecurityProtocol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-bor")]),t._v(" 3072"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://community.chocolatey.org/install.ps1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("测试是否安装成功：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("?\n")])])]),a("h2",{attrs:{id:"为-chocolatey-配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-chocolatey-配置代理"}},[t._v("#")]),t._v(" 为 Chocolatey 配置代理")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:17296/"')]),t._v("\n")])])]),a("h2",{attrs:{id:"安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[t._v("#")]),t._v(" 安装软件")]),t._v(" "),a("h3",{attrs:{id:"搜索-chocolatey-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索-chocolatey-库"}},[t._v("#")]),t._v(" 搜索 Chocolatey 库")]),t._v(" "),a("p",[a("code",[t._v("choco info")]),t._v(" 实在是太慢了，不如直接去"),a("a",{attrs:{href:"https://community.chocolatey.org/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("搜索。")]),t._v(" "),a("h3",{attrs:{id:"安装-chocolatey-gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-chocolatey-gui"}},[t._v("#")]),t._v(" 安装 Chocolatey GUI")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y chocolateygui\n")])])]),a("h3",{attrs:{id:"安装常用软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装常用软件"}},[t._v("#")]),t._v(" 安装常用软件")]),t._v(" "),a("p",[t._v("按需安装：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y `\n    tim `\n    wechat `\n    netease"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cloudmusic `\n    potplayer `\n    obs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("studio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install `\n    googlechrome `\n    bandizip `\n    internet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("download"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("manager `\n    steam"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client `\n    glasswire `\n    fiddler `\n    carnac `\n    teamviewer `\n    synctrayzor `\n    zerotier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("one\n")])])]),a("p",[t._v("如果部分失败了，可以重新执行一遍，Choco 会跳过已经安装的。")]),t._v(" "),a("h3",{attrs:{id:"安装命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装命令行工具"}},[t._v("#")]),t._v(" 安装命令行工具")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y `\n    tldr `\n    ffmpeg `\n    sudo `\n    tcping `\n    adb `\n    bfg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cleaner `\n    mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cli")]),t._v(" `\n    iperf3\n")])])]),a("h3",{attrs:{id:"安装开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装开发工具"}},[t._v("#")]),t._v(" 安装开发工具")]),t._v(" "),a("p",[t._v("配置开发环境：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y `\n    jetbrainstoolbox `\n    microsoft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("windows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("terminal wsl wsl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ubuntu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2004 `\n    docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop git python openjdk llvm nodejs golang powershell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("core texlive `\n    visualstudio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("installer texstudio vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install\n")])])]),a("p",[t._v("WSL 还得手动去设置添加功能：打开 WSL，然后安装 https://aka.ms/wsl2kernel")]),t._v(" "),a("p",[t._v("配置 "),a("code",[t._v("pip")]),t._v("、"),a("code",[t._v("npm")]),t._v(" 和 "),a("code",[t._v("maven")]),t._v(" 的镜像源（在 Powershell 7 下执行）：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("pip3 config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("url http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doubanio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("simple\npip3 config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trusted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("host pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doubanio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" registry https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注册模块镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" disturl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-gyp 编译依赖的 node 源码镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" sass_binary_site https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-sass 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" electron_mirror https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("electron"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# electron 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" puppeteer_download_host https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# puppeteer 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" chromedriver_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chromedriver "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chromedriver 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" operadriver_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("operadriver "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# operadriver 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" phantomjs_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("phantomjs "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# phantomjs 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" selenium_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("selenium "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# selenium 二进制包镜像")]),t._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" node_inspector_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inspector "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-inspector 二进制包镜像")]),t._v("\nnpm cache clean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空缓存")]),t._v("\n\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g yarn pnpm\n\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" registry https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注册模块镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" disturl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-gyp 编译依赖的 node 源码镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" sass_binary_site https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-sass 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" electron_mirror https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("electron"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# electron 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" puppeteer_download_host https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# puppeteer 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" chromedriver_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chromedriver "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chromedriver 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" operadriver_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("operadriver "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# operadriver 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" phantomjs_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("phantomjs "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# phantomjs 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" selenium_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("selenium "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# selenium 二进制包镜像")]),t._v("\nyarn config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" node_inspector_cdnurl https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inspector "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-inspector 二进制")]),t._v("\nyarn cache clean "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空缓存")]),t._v("\n\nmkdir ~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iwr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("O ~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lyh543"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml\n")])])]),a("h3",{attrs:{id:"配置个人-ssh-密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置个人-ssh-密钥"}},[t._v("#")]),t._v(" 配置个人 SSH 密钥")]),t._v(" "),a("p",[t._v("略。")]),t._v(" "),a("p",[t._v("以及配置 SSH 走代理："),a("a",{attrs:{href:"https://www.zhihu.com/question/27159393/answer/809693236",target:"_blank",rel:"noopener noreferrer"}},[t._v("git clone一个github上的仓库，太慢，经常连接失败，但是github官网流畅访问，为什么？ - 知乎"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"允许执行其他-powershell-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许执行其他-powershell-脚本"}},[t._v("#")]),t._v(" 允许执行其他 Powershell 脚本")]),t._v(" "),a("p",[t._v("在 Powershell 7 下执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy Unrestricted\n")])])]),a("h3",{attrs:{id:"个人用-开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人用-开发工具"}},[t._v("#")]),t._v(" （个人用）开发工具")]),t._v(" "),a("p",[t._v("在 Powershell 7 下执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("mkdir C:\\Tools\\git\ncd C:\\Tools\\git\ngit clone git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com:lyh543"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加环境变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import-Module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(':ChocolateyInstall\\helpers\\chocolateyInstaller.psm1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Install-ChocolateyPath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Tools\\git\\dev-tools"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);