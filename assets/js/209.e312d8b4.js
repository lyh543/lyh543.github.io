(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{597:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("最近又有个手游停服了，是一款日本音游，叫 HoneyWorks Premium Live。为了能在停服后继续玩这款游戏（搓屏幕），我们尝试搭建游戏的私服。在我们搭建到一半的时候，被 HoneyWorks 国内代理制止，只好就此作罢（毕竟是实名上网的人，不太想在国内搞事情）。不过在这个过程中学到了不少东西，也证明了私服的可行性，故写一篇博客作作记录。")]),t._v(" "),s("p",[t._v("音游和其他游戏（如 LOL、绝地求生等）不同的一点是，LOL 这类多人竞技游戏需要较复杂的协议和技术来保证多人游戏时能同时和服务器进行交互，同时保持低时延等特性。音游的核心玩法是跟着音乐点击屏幕，这个过程其实是不需要联网的，只有在进入游戏时加载一些玩家状态等需要和服务器进行交互。所以音游的服务器更偏向传统的 REST API 后端服务，这也为我们搭建私服提供了可能性。")]),t._v(" "),s("h2",{attrs:{id:"对手机-app-进行抓包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对手机-app-进行抓包"}},[t._v("#")]),t._v(" 对手机 app 进行抓包")]),t._v(" "),s("p",[t._v("搭建手游私服的第一步，是通过对手游 app 的进行抓包，分析 app 到服务端是如何交互的。常用的抓包工具如 Fiddler、Charles、mitmproxy 都可以用。")]),t._v(" "),s("p",[t._v("不过，抓包有一个难点在解密 HTTPS。在没有信任自定义 CA 的前提下，HTTPS 可以说是非常安全，现阶段可以认为是不可破解的（要是能破解 HTTPS，可以去计算机密码学顶会发论文了，谁还来搭建私服啊）。上面说的三款抓包工具都能生成自己的 CA 证书，我们将证书安装到手机，并让 app 信任证书。")]),t._v(" "),s("p",[t._v("由于安卓 7+ 系统对 CA 管得比较严，app 默认不接受用户安装的证书，实践后总结有下面三种方案可以实现抓包：")]),t._v(" "),s("ol",[s("li",[t._v("使用 iOS 设备抓包")]),t._v(" "),s("li",[t._v("root 安卓设备后安装 Magisk 模块，参考"),s("a",{attrs:{href:"/posts/2022-10-13-capture-android-traffic"}},[t._v("博客")])]),t._v(" "),s("li",[t._v("对安卓 apk 拆包后修改 "),s("code",[t._v("AndroidManifest.xml")]),t._v(" 使其接受用户 CA，然后再封装为 apk（封装前可以顺便修改一下包名，避免和原 app 冲突），参考"),s("a",{attrs:{href:"https://gist.github.com/luciopaiva/aa9cb30863804fb2ac3ed1ccd11c95c7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android APK HTTPS user certificates how-to"),s("OutboundLink")],1),t._v("，后面实操的时候会细说")])]),t._v(" "),s("p",[t._v("在开发阶段，由于我没有 iOS 设备，而且我有 Magisk，因此在选择了方案二。在发布私服时，为了让非 root 安卓用户也能玩上私服，也需要按照方案三做一个接受用户证书的 apk。")]),t._v(" "),s("h2",{attrs:{id:"简单分析-api-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单分析-api-格式"}},[t._v("#")]),t._v(" 简单分析 API 格式")]),t._v(" "),s("p",[t._v("用 Fiddler（或另外两款工具）抓一下包就能看到，HoneyWorks Premium Live 客户端主要和两个后端进行交互。一个是 "),s("code",[t._v("production.arisa-project.net")]),t._v(" 提供业务数据，request URL 和 response body 都符合 REST API 规范，可读性非常高（在此夸下日本程序员！）。另一个是 "),s("code",[t._v("d1fsdx0i2ajtn2.cloudfront.net")]),t._v(" 是静态资源服务器，提供游戏所需的美术音乐素材。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2e6f6a9ed92bd5509c48dd52d4caf41b8792cc5b1eb233b61e538b274bbee15a.png",alt:"picture 1"}})]),t._v(" "),s("p",[t._v("对应地，私服的后端需要做两件事情：一是对于每个客户端可能发出的请求，服务端能给出合法的 response body。response body 可以是静态的，但一定要是合法的，只要客户端接受到以后能正常解析、不报错就行。二是提供静态资源，这些静态资源需要预先下载到私服上，然后用 nginx 起一个静态资源服务器就行。")]),t._v(" "),s("h2",{attrs:{id:"搭建提供重定向服务的代理服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建提供重定向服务的代理服务器"}},[t._v("#")]),t._v(" 搭建提供重定向服务的代理服务器")]),t._v(" "),s("p",[t._v("在真正开始搭建私服之前，还有一件事情：如何让客户端去访问私服，这就是所谓中间人攻击（Man-in-the-middle attack）。有三个方向：")]),t._v(" "),s("ol",[s("li",[t._v("修改游戏本身：如果能直接修改游戏访问的服务器 URL，直接改了就行，能少很多事情；不过据说这个游戏安装包有加密，不太方便。")]),t._v(" "),s("li",[t._v("DNS 污染：搭建一个 DNS 服务器，将官服域名解析为私服的 IP，再配置手机使用这个 DNS 服务器。TLS 解密由私服来实现。")]),t._v(" "),s("li",[t._v("代理：搭建一个代理服务器，将所有访问官服的流量“重定向”到私服。TLS 解密由代理服务器实现。")])]),t._v(" "),s("p",[t._v("由于代理的现成解决方案很多，我们选择的是代理方案。不过实际使用中，发现所有流量都会从代理中转一次，这个影响还挺大的。各位如果想搭建私服，可以尝试一下 DNS 污染的方案。")]),t._v(" "),s("p",[t._v("我们采用的是 "),s("a",{attrs:{href:"https://mitmproxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mitmproxy"),s("OutboundLink")],1),t._v("，它除了抓包和解密 TLS 以外，还能用 Python 编写插件，十几行代码就能实现把官方的域名重定向到我们的服务器上。重定向的代码如下：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logging\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mitmproxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HTTPFlow\n\nREDIRECT_HOSTS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production.arisa-project.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PRIVATE_SERVER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d1fsdx0i2ajtn2.cloudfront.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PRIVATE_ASSETS_SERVER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HTTPFlow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    origin_host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pretty_host\n    replaced_host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" REDIRECT_HOSTS "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" origin_host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" origin_host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" origin_host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" replaced_host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Redirect connection to ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("origin_host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" with ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("replaced_host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" replaced_host\n")])])]),s("h2",{attrs:{id:"搭建私服服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建私服服务器"}},[t._v("#")]),t._v(" 搭建私服服务器")]),t._v(" "),s("p",[t._v("私服服务器就是一个常规 REST API 后端，可以用任何 REST API 框架实现（Java/Spring、Python/Flask、TypeScript/express、……），然后在前面用 nginx 处理 HTTPS 然后反向代理即可。顺便说一句，既然是 REST API，也需要注意 HTTP 方法（GET、POST），抓包时游戏客户端请求是什么方法，私服就应该对什么方法进行监听。")]),t._v(" "),s("p",[t._v("对于某些不重要的 API，可以直接把前面抓包的结果 hardcode 到代码里，只要游戏客户端不报错就行。对于某些影响到游戏运行的 API（比如当前用户体力、抽卡等），可以动态实现一下。")]),t._v(" "),s("p",[t._v("如果部分动态 API 需要从数据库拿数据（比如抽卡，服务端需要从数据库拿到这个卡池有哪些卡，然后抽一张），还需要对官服进行爬虫，这就是另一个话题了。")]),t._v(" "),s("p",[t._v("如果还想在动态 API 中针对不同用户返回不同结果，一方面需要研究客户端如何把认证信息发送给服务器（常见的实现如放在 HTTP Request Headers 里的 "),s("code",[t._v("token")]),t._v("、"),s("code",[t._v("session")]),t._v("、"),s("code",[t._v("cookies")]),t._v(" 字段），另一方面也需要把不同用户的数据落到一个数据库里，这个方向会把私服做的比较重，甚至可以搭建一个完整的私服。如果只希望私服能跑，静态 API 其实是搭建起来最快的。")]),t._v(" "),s("p",[t._v("调试静态服务器的过程，需要客户端和代理服务器配合，所以记得先搭建这两个东西。")]),t._v(" "),s("h2",{attrs:{id:"搭建静态资源服务器-由代理服务器提供静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建静态资源服务器-由代理服务器提供静态资源"}},[t._v("#")]),t._v(" 搭建静态资源服务器 / 由代理服务器提供静态资源")]),t._v(" "),s("p",[t._v("搭建静态资源服务器比较简单，根据抓包记录，写个脚本用把所有静态资源下载到私服上，然后起一个 nginx 就行。它的调试同样需要客户端和代理服务器。")]),t._v(" "),s("p",[t._v("不过，在私服跑起来以后，我们发现在 app 通过代理向资源服务器请求较大的资源（10~100MB）时，代理还没下载完，app 就主动关闭了连接。这可能是 app 或者 mitmproxy 的实现有问题。")]),t._v(" "),s("p",[t._v("因此，我们将静态资源服务器改为集成到代理服务器中，由代理服务器直接从本地读静态资源。也是写一个小二十行的 mitmproxy 插件：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mitmproxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HTTPFlow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Response\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" OFFICIAL_ASSETS_DOMAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ASSETS_DIR\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HTTPFlow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pretty_host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" OFFICIAL_ASSETS_DOMAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        file_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        file_fullpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ASSETS_DIR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" file_path\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_fullpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'reading ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("file_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_fullpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                content_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" file_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endswith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'binary/octet-stream'")]),t._v("\n                flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("make"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (optional) status code")]),t._v("\n                    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (optional) content")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (optional) headers")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("file_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" not found, return 404'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("make"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"拆包-apk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆包-apk"}},[t._v("#")]),t._v(" 拆包 apk")]),t._v(" "),s("p",[t._v("在 Magisk 信任证书 + 代理服务器 + 私服服务器链路框架完成后，我们回过头来，考虑最后一步，拆包 apk 信任用户证书，然后就可以把修改后的 apk 分发给用户了。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/luciopaiva/809f198e8c96781ad1db63c01732e985",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android APK hacking how-to"),s("OutboundLink")],1),t._v(" 讲解了如何拆包、重新打包、对齐、生成个人的签名 key、实施签名。在这个过程中你需要安装 Android SDK 和 apktool。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/luciopaiva/aa9cb30863804fb2ac3ed1ccd11c95c7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android APK HTTPS user certificates how-to"),s("OutboundLink")],1),t._v(" 讲解了如何在拆包后如何修改 "),s("code",[t._v("AndroidManifest.xml")]),t._v(" 来让 app 接受用户证书。")]),t._v(" "),s("p",[t._v("由于我们使用了自己的 key 对 apk 进行签名，这个 apk 不能直接覆盖掉原来官服的 apk，只能卸掉重装。为此，我使用 "),s("a",{attrs:{href:"https://github.com/githubXiaowangzi/NP-Manager",target:"_blank",rel:"noopener noreferrer"}},[t._v("NP 管理器"),s("OutboundLink")],1),t._v("修改了 apk 的包名（也可以使用其它工具修改包名），修改包名后两个包就能共存了。")]),t._v(" "),s("h2",{attrs:{id:"后记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),s("p",[t._v("搭建私服的整个过程可以说是“麻雀虽小，五脏俱全”，从抓包、代理、后端实现、解包都有。")]),t._v(" "),s("p",[t._v("不过被国内代理制止了，我也打算摆烂了，一方面是不想实名搞事，另一方面开始工作了，平时只有周末有比较多的时间，周末还想摸鱼、看番、Steam、出去逛逛 hhhhh。所以最后水一篇博客记录一下这个过程，也希望能帮助读到这里的各位。")])])}),[],!1,null,null,null);s.default=e.exports}}]);