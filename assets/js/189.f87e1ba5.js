(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{544:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"下载梯子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载梯子"}},[t._v("#")]),t._v(" 下载梯子")]),t._v(" "),a("p",[t._v("为了更好的使用 Chocolatey，最好能够有梯子。此处略。")]),t._v(" "),a("p",[t._v("以及记得配置 "),a("code",[t._v("HTTP_PROXY")]),t._v(" 和 "),a("code",[t._v("HTTPS_PROXY")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"下载-chocolatey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-chocolatey"}},[t._v("#")]),t._v(" 下载 Chocolatey")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://chocolatey.org/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chocolatey Software | Installing Chocolatey"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在管理员权限下 Powershell 执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" Bypass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Process")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Net.ServicePointManager]")]),t._v("::SecurityProtocol = "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Net.ServicePointManager]")]),t._v("::SecurityProtocol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-bor")]),t._v(" 3072"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://community.chocolatey.org/install.ps1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("测试是否安装成功：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("?\n")])])]),a("h2",{attrs:{id:"为-chocolatey-配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-chocolatey-配置代理"}},[t._v("#")]),t._v(" 为 Chocolatey 配置代理")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:17296/"')]),t._v("\n")])])]),a("h2",{attrs:{id:"安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[t._v("#")]),t._v(" 安装软件")]),t._v(" "),a("h3",{attrs:{id:"搜索-chocolatey-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索-chocolatey-库"}},[t._v("#")]),t._v(" 搜索 Chocolatey 库")]),t._v(" "),a("p",[a("code",[t._v("choco info")]),t._v(" 实在是太慢了，不如直接去"),a("a",{attrs:{href:"https://community.chocolatey.org/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("搜索。")]),t._v(" "),a("h3",{attrs:{id:"安装-chocolatey-gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-chocolatey-gui"}},[t._v("#")]),t._v(" 安装 Chocolatey GUI")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y chocolateygui\n")])])]),a("h3",{attrs:{id:"安装常用软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装常用软件"}},[t._v("#")]),t._v(" 安装常用软件")]),t._v(" "),a("p",[t._v("按需安装：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y `\n    tim `\n    wechat `\n    netease"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cloudmusic `\n    potplayer `\n    obs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("studio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install `\n    photogimp `\n    googlechrome `\n    bandizip `\n    internet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("download"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("manager `\n    steam"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client `\n    powertoys `\n    glasswire `\n    fiddler `\n    spacesniffer `\n    carnac `\n    teamviewer `\n    synctrayzor `\n    zerotier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("one `\n    geforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("experience "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for Nvidia GPU only")]),t._v("\n")])])]),a("p",[t._v("如果部分失败了，可以重新执行一遍，Choco 会跳过已经安装的。")]),t._v(" "),a("h3",{attrs:{id:"安装命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装命令行工具"}},[t._v("#")]),t._v(" 安装命令行工具")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y `\n    oh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("posh `\n    tldr `\n    ffmpeg `\n    sudo `\n    tcping `\n    adb `\n    bfg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cleaner `\n    mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cli")]),t._v(" `\n    iperf3\n")])])]),a("h3",{attrs:{id:"安装开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装开发工具"}},[t._v("#")]),t._v(" 安装开发工具")]),t._v(" "),a("p",[t._v("配置开发环境：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("choco install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y `\n    jetbrainstoolbox `\n    microsoft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("windows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("terminal wsl wsl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ubuntu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2004 `\n    docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop git python openjdk llvm nodejs golang powershell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("core protoc flutter `\n    visualstudio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("installer vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install\n")])])]),a("p",[t._v("WSL 还得手动去设置添加功能：打开 WSL，然后安装 https://aka.ms/wsl2kernel")]),t._v(" "),a("p",[t._v("配置 "),a("code",[t._v("pip")]),t._v("、"),a("code",[t._v("npm")]),t._v(" 和 "),a("code",[t._v("maven")]),t._v(" 的镜像源（在管理员权限下的 Powershell 7 下执行）：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("pip3 config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("url http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doubanio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("simple\npip3 config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trusted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("host pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doubanio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g yarn pnpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry=https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置镜像源：https://www.npmjs.com/package/mirror-config-china")]),t._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g mirror"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("china "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry=https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n\nmkdir ~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Invoke-WebRequest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("O ~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lyh543"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml\n")])])]),a("h2",{attrs:{id:"配置-oh-my-posh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-oh-my-posh"}},[t._v("#")]),t._v(" 配置 oh-my-posh")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ohmyposh.dev/docs/windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install On Windows | Oh My Posh"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("PowerShell 7 中执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Install-Module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope CurrentUser `\n    posh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DockerCompletion \n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v("并安装这一堆字体（只安装需要的那两个应该也可以）。修改 Windows Termial 字体为  "),a("code",[t._v("MesloLGM Nerd Font")]),t._v("（某些主题用带 Mono 的字体好一点，有些用不带的好一点，修改主题以后需要自己尝试）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/d33b7ac9d9b357e5fe6522621e1c10eefe274caf514d6c43d7ce90420275c360.png",alt:"修改 Windows Termial 字体"}})]),t._v(" "),a("p",[t._v("记得还要修改 VSCode terminal 和 JetBrains IDE 的字体。")]),t._v(" "),a("p",[a("code",[t._v("code $PROFILE")]),t._v("，写入以下内容并保存：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git, docker, choco 的补全模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import-Module")]),t._v("  posh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DockerCompletion\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import-Module")]),t._v(" “"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(":ChocolateyInstall\\helpers\\chocolateyProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("psm1” "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更多主题：https://ohmyposh.dev/docs/themes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我觉得还不错的主题：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cloud-native-azure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# M365Princess")]),t._v("\noh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("posh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe init  pwsh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("config "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(':POSH_THEMES_PATH/jandedobbeleer.omp.json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Invoke-Expression")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-PSReadLineOption")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PredictionSource History "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置预测文本来源为历史记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set-PSReadlineKeyHandler -Key Tab -Function Complete # 设置 Tab 为补全")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-PSReadlineKeyHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Key Tab "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" MenuComplete "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Tab 为菜单补全和 Intellisense")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Set-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete # 设置 Ctrl+d 为菜单补全和 Intellisense')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-PSReadLineKeyHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Key "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ctrl+z"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" Undo "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Ctrl+z 为撤销")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-PSReadlineOption")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("BellStyle None "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止补全时的 Beep 声")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置向上键为后向搜索历史记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-PSReadLineKeyHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Key UpArrow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ScriptBlock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Microsoft.PowerShell.PSConsoleReadLine]")]),t._v("::HistorySearchBackward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Microsoft.PowerShell.PSConsoleReadLine]")]),t._v("::EndOfLine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置向下键为前向搜索历史纪录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-PSReadLineKeyHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Key DownArrow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ScriptBlock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Microsoft.PowerShell.PSConsoleReadLine]")]),t._v("::HistorySearchForward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Microsoft.PowerShell.PSConsoleReadLine]")]),t._v("::EndOfLine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("新开的 PowerShell 窗口应该就能看到效果了（第一次需要下载可执行文件，会慢一点）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/59313fe3632197c3af24dfb093590ef1e4569281c66488af58de0a0d3406b0d5.png",alt:"新开的 PowerShell 窗口"}})]),t._v(" "),a("h2",{attrs:{id:"开发相关的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发相关的配置"}},[t._v("#")]),t._v(" 开发相关的配置")]),t._v(" "),a("h3",{attrs:{id:"配置个人-ssh-密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置个人-ssh-密钥"}},[t._v("#")]),t._v(" 配置个人 SSH 密钥")]),t._v(" "),a("p",[t._v("略。")]),t._v(" "),a("p",[t._v("以及配置 SSH 走代理："),a("a",{attrs:{href:"https://www.zhihu.com/question/27159393/answer/809693236",target:"_blank",rel:"noopener noreferrer"}},[t._v("git clone一个github上的仓库，太慢，经常连接失败，但是github官网流畅访问，为什么？ - 知乎"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"允许执行其他-powershell-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许执行其他-powershell-脚本"}},[t._v("#")]),t._v(" 允许执行其他 Powershell 脚本")]),t._v(" "),a("p",[t._v("tldr：在管理员权限的 Powershell 7 下执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy RemoteSigned\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/notes/microsoft/powershell/powershell-learning-notes.html#执行策略"}},[t._v("Powershell 执行策略")])],1),t._v(" "),a("h3",{attrs:{id:"个人用-开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人用-开发工具"}},[t._v("#")]),t._v(" （个人用）开发工具")]),t._v(" "),a("p",[t._v("在 Powershell 7 下执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("mkdir ~\\git && cd ~\\git\nmkdir github && cd github\ngit clone git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com:lyh543"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git && cd dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tools\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加环境变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import-Module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(':ChocolateyInstall\\helpers\\chocolateyInstaller.psm1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Install-ChocolateyPath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PWD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path\n")])])]),a("h3",{attrs:{id:"更改-hyper-v-端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改-hyper-v-端口"}},[t._v("#")]),t._v(" 更改 Hyper-V 端口")]),t._v(" "),a("p",[t._v("tldr：就是推荐让 Hyper-V 只从 40000-49999 的端口范围内选择一部分占用，能避免大部分冲突。管理员权限下 cmd / Powershell 下执行：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("netsh int ipv4 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" dynamicport tcp "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v("=40000 num=10000\n")])])]),a("p",[t._v("事情的前因后果可以看"),a("RouterLink",{attrs:{to:"/posts/2022-01-04-solution-to-windows-port-occupied.html"}},[t._v("这篇文章")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);