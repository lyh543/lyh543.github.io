(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{419:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("写前后端的时候遇到了这个问题，花了三天时间解决，就还是简单地写一写。写到最后才发现，这里面涉及的知识量也太大了，也请各位读者耐心阅读。")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("CORS 和 CSRF 这两个概念很容易混淆，即使我在这篇博客前也不是很清楚二者的区别，于是就再搜了一下，顺便把另外两个概念也聊一聊。")]),t._v(" "),e("p",[t._v("浏览器、前端和后端的关系大概是：前端 "),e("code",[t._v("<->")]),t._v(" 浏览器 "),e("code",[t._v("<->")]),t._v(" 后端。前端告诉浏览器它需要访问什么，浏览器就向后端发请求，然后把应答给前端。")]),t._v(" "),e("p",[t._v("而同源策略、CORS、CSRF、HttpOnly 和 SameSite 都在围绕一件事情：如何防止"),e("strong",[t._v("恶意前端")]),t._v("误导用户和"),e("strong",[t._v("浏览器")]),t._v("，在用户不知情的情况下以用户的身份恶意访问"),e("strong",[t._v("后端")]),t._v("（删除数据、转账等等）。")]),t._v(" "),e("h2",{attrs:{id:"同源策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的同源策略 - Web 安全| MDN"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("同源：两个 Protocol、Port 和 Host 都相同的 URL 是同源的；\n跨域：两个 Protocol、Port 和 Host 不都相同的 URL 是跨域的；")])]),t._v(" "),e("p",[t._v("MDN 上举了几个同源和跨域的例子，这里不再赘述。")]),t._v(" "),e("p",[t._v("同源策略是一个比较笼统的概念，它是为了限制一个 origin 的文档或者它加载的脚本如何能与另一个源的资源进行交互。就是说，它限制 "),e("code",[t._v("baidu.com")]),t._v(" 的脚本不能访问到 "),e("code",[t._v("taobao.com")]),t._v(" 的资源。")]),t._v(" "),e("p",[t._v("现代浏览器同时采用了两种同源策略：")]),t._v(" "),e("ol",[e("li",[t._v("DOM 同源策略：禁止对不同源页面 DOM 进行操作。这里主要场景是 iframe 跨域的情况，不同域名的 iframe 是限制互相访问的。")]),t._v(" "),e("li",[t._v("XMLHttpRequest 同源策略：禁止使用 XHR 对象向不同源的服务器地址发起 HTTP 请求。")])]),t._v(" "),e("p",[t._v("可见，同源策略就是"),e("strong",[t._v("浏览器")]),t._v("用来防止"),e("strong",[t._v("恶意前端")]),t._v("的策略。")]),t._v(" "),e("p",[t._v("不过请注意，浏览器并不限制 "),e("code",[t._v("<img>")]),t._v(" "),e("code",[t._v("<tag>")]),t._v(" "),e("code",[t._v("<form>")]),t._v(" 等标签等进行跨域访问。")]),t._v(" "),e("h2",{attrs:{id:"cookie-的源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的源"}},[t._v("#")]),t._v(" Cookie 的源")]),t._v(" "),e("p",[t._v("Cookie 也有源的概念，但它的“源”和同源策略的“源”念有所区别。")]),t._v(" "),e("p",[t._v("[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy#%E8%B7%A8%E6%BA%90%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E8%AE%BF%E9%97%AE}")]),t._v(" "),e("blockquote",[e("p",[t._v("Cookie 的 set：一个页面可以为本域和其父域设置 cookie，只要是父域不是公共后缀（public suffix）即可。"),e("br"),t._v("\nCookie 的 get：浏览器都允许给定的域以及其任何子域名 (sub-domains) "),e("strong",[t._v("访问")]),t._v(" cookie。当你设置 cookie 时，你可以使用 "),e("code",[t._v("Domain")]),t._v("、"),e("code",[t._v("Path")]),t._v("、"),e("code",[t._v("Secure")]),t._v("、和 HttpOnly 标记来限定其可"),e("strong",[t._v("访问")]),t._v("性。")])]),t._v(" "),e("p",[t._v("理解起来有点绕，可以用一个例子来解释。假设前端域名为 "),e("code",[t._v("app.example.com")]),t._v("，后端域名为 "),e("code",[t._v("api.example.com")]),t._v("：")]),t._v(" "),e("ol",[e("li",[t._v("如果后端对发来的域名不加以设置，后端的 cookie 的 domain 就是默认的 "),e("code",[t._v("api.example.com")]),t._v("。此时，前端并不能"),e("strong",[t._v("访问")]),t._v("该 cookie，因为前端域名不是后端域名（或其子域名）；")]),t._v(" "),e("li",[t._v("正确的解决办法是，"),e("strong",[t._v("后端把 cookie 的 domain 设置为 "),e("code",[t._v("example.com")])]),t._v("（一个页面可以为父域设置 cookie）然后发给前端，前端也可以"),e("strong",[t._v("访问")]),t._v("到这个 cookie（浏览器都允许 "),e("code",[t._v("example.com")]),t._v(" 的子域名 (sub-domains) "),e("strong",[t._v("访问")]),t._v(" 这个 cookie）")])]),t._v(" "),e("p",[t._v("上面的"),e("strong",[t._v("访问")]),t._v("都进行了加粗，注意到这个访问的含义是：前端使用 "),e("code",[t._v("document.cookie")]),t._v(" 可以看到这个 cookie。在实际操作中，可能你虽然看不到这个 cookie，但是发 XMLHttpRequest 时浏览器会提交这个 cookie，这不叫"),e("strong",[t._v("访问")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"cors-跨域资源共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors-跨域资源共享"}},[t._v("#")]),t._v(" CORS 跨域资源共享")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨源资源共享（CORS）- HTTP | MDN"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("同源策略屏蔽了所有的跨域访问。但是，并不是所有跨域访问都是恶意的，比如 "),e("code",[t._v("tmall.com")]),t._v(" 前端想要向 "),e("code",[t._v("taobao.com")]),t._v(" 后端发起 HTTP 请求这种情况，该怎么处理呢？")]),t._v(" "),e("p",[t._v("所以，CORS（Cross-Origin Resource Sharing，跨域资源共享）出现了。CORS 由一系列 HTTP 头组成，当"),e("strong",[t._v("前端")]),t._v("想要"),e("strong",[t._v("跨域访问后端")]),t._v("时，"),e("strong",[t._v("浏览器")]),t._v("将会利用这些 HTTP 头与"),e("strong",[t._v("后端")]),t._v("交互，让"),e("strong",[t._v("后端")]),t._v("告诉"),e("strong",[t._v("浏览器")]),t._v("决定是否阻止"),e("strong",[t._v("前端")]),t._v("获取跨域请求的响应。")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(" 可以看到，CORS 一共只规定了九个 HTTP 头，除掉 "),e("code",[t._v("Origin")]),t._v(" 以外，其余的全部以 "),e("code",[t._v("Access-Control-")]),t._v(" 打头。")]),t._v(" "),e("p",[t._v("下面是一次跨域请求的示例，前端 "),e("code",[t._v("localhost:8080")]),t._v(" 向后端 "),e("code",[t._v("uestcmsc-webapp.lyh543.cn")]),t._v(" 发出了 HTTP 请求。浏览器使用了两次请求，第一次被称为"),e("strong",[t._v("预请求")]),t._v("，第二次被称为"),e("strong",[t._v("正式请求")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/002a229b9263643bc576ec37992275e9ca2f79f9d63137b018cb5a216a1475cc.png",alt:"浏览器第一次预请求"}})]),t._v(" "),e("p",[e("strong",[t._v("浏览器")]),t._v("首先在预请求中告诉"),e("strong",[t._v("后端")]),t._v("：正式请求中的 HTTP 方法是 "),e("code",[t._v("access-control-request-method: POST")]),t._v(" 以及会用到的报头为 "),e("code",[t._v("access-control-request-headers: content-type")]),t._v("，还有"),e("strong",[t._v("前端")]),t._v("的源是 "),e("code",[t._v("origin: http://localhost:8080")]),t._v("。后端的应答中表明允许的源、报头、HTTP 方法，还有一个允许携带认证信息 "),e("code",[t._v("access-control-allow-credentials: true")]),t._v("（认证信息有三类，包含 Cookie、authorization 头和 TLS 客户端证书）。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/977d9413f8c1915937444167bd92d95b78109093c0da52490ba8c2871e0c0a4f.png",alt:"浏览器第二次正式请求"}})]),t._v(" "),e("p",[t._v("收到后端的报文后，"),e("strong",[t._v("浏览器")]),t._v("立刻向后端发出 CORS 的正式请求。在正式请求中，浏览器使用了 "),e("code",[t._v("POST")]),t._v(" 和 "),e("code",[t._v("content-type")]),t._v("，以及 "),e("code",[t._v("origin: http://localhost:8080")]),t._v("，后端返回 "),e("code",[t._v("access-control-allow-credentials: true")]),t._v(" "),e("code",[t._v("access-control-allow-origin: http://localhost:8080")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("从上面可以看出，如果需要支持 CORS，主要是后端需要进行单独配置。前端没有什么要配置的，但是因为：")]),t._v(" "),e("blockquote",[e("p",[t._v("Credentials必须在前后端都被配置（即the Access-Control-Allow-Credentials header 和 XHR 或Fetch request中都要配置）才能使带credentials的CORS请求成功。-- "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("前端需要配置的只有这一个点。")]),t._v(" "),e("p",[t._v("前端的配置很简单，对于 axios 来说，就是加上一行 "),e("code",[t._v("withCredentials: true")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" service "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://uestcmsc-webapp.lyh543.cn/api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求的超时时间")]),t._v("\n  withCredentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许携带 cookie sessionid 做认证")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("后端 Django 配置就要麻烦一些了，需要安装 "),e("code",[t._v("django-cors-headers")]),t._v("，然后在 "),e("code",[t._v("settings.py")]),t._v(" 里添加：")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[t._v("INSTALLED_APPS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'corsheaders'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nMIDDLEWARE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'corsheaders.middleware.CorsMiddleware'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CORS 中间件，需注意与其他中间件顺序，这里放在最前面即可")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CORS headers")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里的 CORS 策略是允许所有源的前端跨站访问")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也可以根据自己需要设置 CORS 源白名单，然后阻止白名单以外的")]),t._v("\nCORS_ORIGIN_ALLOW_ALL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\nCORS_ALLOW_CREDENTIALS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\nCORS_ALLOW_METHODS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PATCH'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VIEW'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCORS_ALLOW_HEADERS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XMLHttpRequest'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X_FILENAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept-encoding'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dnt'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user-agent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-csrftoken'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-requested-with'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pragma'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("配置好以后就可以了。")]),t._v(" "),e("h2",{attrs:{id:"csrf-跨站伪造请求攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站伪造请求攻击"}},[t._v("#")]),t._v(" CSRF 跨站伪造请求攻击")]),t._v(" "),e("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造，是一种常见的攻击方式。是指 A （前端、后端）网站正常登陆后，cookie 正常保存，恶意"),e("strong",[t._v("前端")]),t._v("网站 B 通过某种方式访问 A 网站的"),e("strong",[t._v("后端")]),t._v("进行操作，而"),e("strong",[t._v("浏览器")]),t._v("向 A "),e("strong",[t._v("后端")]),t._v("请求时会自动带上 Cookie、造成危害的攻击方式。")]),t._v(" "),e("p",[t._v("好，到这里我就懵了，同源策略不就是用来防止 B 前端访问到 A 后端的吗？但请注意以下两点：")]),t._v(" "),e("ol",[e("li",[t._v("同源策略不限制通过 "),e("code",[t._v("<img>")]),t._v(" "),e("code",[t._v("<tag>")]),t._v(" "),e("code",[t._v("<form>")]),t._v(" 加载/上传跨域资源")]),t._v(" "),e("li",[t._v("一个公共的后端 API 应当允许所有人使用，但它应当恶意前端误导用户的情况（如 Google Mail 就曾因为没有配置 CSRF 导致恶意前端诱导用户发送邮件），同源策略 + CORS 显然不能做到这一点")])]),t._v(" "),e("p",[t._v("所以，仅有同源策略 + CORS 是不够的，还需要有 CSRF 防御。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("针对 CSRF 这种攻击行为的防御方式有很多种，其实很常见的要求输入验证码等也能算作一种。Django 采用的"),e("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/ref/csrf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("策略"),e("OutboundLink")],1),t._v("如下所述：")]),t._v(" "),e("ol",[e("li",[t._v("默认对 HTTP GET、HEAD、OPTIONS 或 TRACE 这类"),e("strong",[t._v("安全请求")]),t._v("不要求 CSRF 检查，对其他请求要求 CSRF 检查。可以通过 "),e("code",[t._v("@csrf_exempt")]),t._v(" 和 "),e("code",[t._v("@csrf_protect")]),t._v(" 自定义这个白名单；")]),t._v(" "),e("li",[t._v("在登录成功的应答中，会有 "),e("code",[t._v("Set-Cookie")]),t._v(" 报头，除了给会话的 "),e("code",[t._v("sessionid")]),t._v(" 以外，还会给 "),e("code",[t._v("csrftoken")]),t._v("，如下图所示；")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/3a698b89e8ec02e29f9ea925aec7df27531ee5f97771d5d99a0662d4d53ecc23.png",alt:"登录成功给 csrftoken"}})]),t._v(" "),e("p",[t._v("有了 "),e("code",[t._v("Set-Cookie")]),t._v(" 报头，浏览器会自动把 "),e("code",[t._v("csrftoken")]),t._v("，以及 "),e("code",[t._v("sessionid")]),t._v(" 存为 Cookie，在 Chrome 很容易就能看到，如下图所示。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/99f9ded49439a328d22b93c583821c7f2d67c258f71a14348fd2430b5e90ae60.png",alt:"Chrome 查看 Cookie"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("在需要 CSRF 检查的请求，前端应当做以下几件事情：\n"),e("ol",[e("li",[t._v("在请求报头添加 "),e("code",[t._v("csrftoken")]),t._v(" 的 Cookie；")]),t._v(" "),e("li",[t._v("在请求报头添加 "),e("code",[t._v("X-CSRFToken")]),t._v(" 字段，其内容等同于 "),e("code",[t._v("csrftoken")]),t._v(" Cookie（注：在实际操作中不一定要相等，只需要保证 cookie 和报头都是有效的 CSRF Token 即可）；")]),t._v(" "),e("li",[t._v("对于 HTTPS 请求，还需要包含 "),e("code",[t._v("Referer")]),t._v(" 报头，一般来说都是自带了的，不会出问题。等实际出问题的时候（我怎么这么惨，什么 bug 都能遇见），我们再讨论 "),e("a",{attrs:{href:"#referer-%E5%92%8C-referrer-policy"}},[t._v("Referer 和 Referrer Policy")]),t._v("。")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/1ad0dafffa8c800b9322f597e9f19d0e84f38ed14e1b419519a3a667c6680a62.png",alt:"HTTP 请求通过 CSRF 检查"}})]),t._v(" "),e("p",[t._v("对了对了，为什么 Cookie 还不够，还需要在报文添加 "),e("code",[t._v("X-CSRFToken")]),t._v(" 字段呢？CSRF 开头举的例子说到，浏览器向 A 后端请求时会自动带上 A 的 Cookie，所以光有 "),e("code",[t._v("csrftoken")]),t._v(" Cookie 是没有用的，恶意的 B 前端来请求，也会带上 "),e("code",[t._v("csrftoken")]),t._v(" Cookie。但是，B 前端读不了 A 后端为 A 前端设置的 Cookie（见 "),e("a",{attrs:{href:"#cookie-%E7%9A%84%E6%BA%90"}},[t._v("Cookie 的源")]),t._v("）。没办法读 csrftoken，也就没有办法设置 "),e("code",[t._v("X-CSRFToken")]),t._v(" 为有效值了。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("前端响应地要做如下改变：")]),t._v(" "),e("ol",[e("li",[t._v("设置 Cookie，对于 axios 添加 "),e("code",[t._v("withCredentials: true")]),t._v(" 就可以了，和上面 CORS 是一样的；")]),t._v(" "),e("li",[t._v("在请求报头添加 "),e("code",[t._v("X-CSRFToken")]),t._v(" 字段， axios 也有提供配置，但由于各后端的 Cookie 名和报头名不同，所以自己手动设定一下名字即可；")]),t._v(" "),e("li",[e("code",[t._v("Referer")]),t._v(" 报头一般不需要自己配置，默认即可（实际上，在特殊的情况下会出错，这个放到 "),e("a",{attrs:{href:"#referer-%E5%92%8C-referrer-policy"}},[t._v("Referer 和 Referrer Policy")]),t._v(" 部分讨论）。")])]),t._v(" "),e("p",[t._v("修改的代码如下：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" service "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://uestcmsc-webapp.lyh543.cn/api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求的超时时间")]),t._v("\n  withCredentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许携带 cookie: sessionid & csrftoken 做认证")]),t._v("\n  xsrfCookieName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrftoken'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 CSRF token")]),t._v("\n  xsrfHeaderName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-CSRFToken'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("hr"),t._v(" "),e("p",[t._v("然后是后端的配置。如果没有跨域需求，配置比较简单，只需要把 csrf 加入 "),e("code",[t._v("settings.py")]),t._v(" 就行了，这个其实在 "),e("code",[t._v("django-admin startproject")]),t._v(" 时已经默认生成了：")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[t._v("MIDDLEWARE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.middleware.csrf.CsrfViewMiddleware'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("hr"),t._v(" "),e("p",[t._v("对于有跨域需求的情况，我们还需要将前端域名加入 "),e("code",[t._v("CSRF_TRUSTED_ORIGINS")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# settings.py")]),t._v("\nCSRF_TRUSTED_ORIGINS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.uestc-msc.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("如果前后端的跨域拥有相同的根域名（设为 "),e("code",[t._v(".uestc-msc.com")]),t._v("），那么还可以设置 "),e("code",[t._v("CSRF_COOKIE_DOMAIN")]),t._v("（还可以顺便把 "),e("code",[t._v("SESSION_COOKIE_DOMAIN")]),t._v(" 也设置了）：")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# settings.py")]),t._v("\nCSRF_TRUSTED_ORIGINS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.uestc-msc.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    CSRF_COOKIE_DOMAIN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FRONTEND_TRUSTED_ORIGINS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    SESSION_COOKIE_DOMAIN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FRONTEND_TRUSTED_ORIGINS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("前后端不拥有相同根域名（如 "),e("code",[t._v("a.com")]),t._v(" 和 "),e("code",[t._v("b.com")]),t._v("）的情况，"),e("strong",[t._v("不建议这种情况直接进行跨域访问")]),t._v("，原因见"),e("a",{attrs:{href:"#%E5%90%8E%E8%AE%B0%E4%B8%89%E6%96%B9-cookie-%E7%9A%84%E5%8E%BB%E8%B7%AF"}},[t._v("文末")]),t._v("。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("另外，后端还要把 "),e("code",[t._v("X-CSRFToken")]),t._v(" 放入 "),e("code",[t._v("CORS_ALLOW_HEADERS")]),t._v("。不过，这一点我们在配置 CORS 的时候就顺便做了。")]),t._v(" "),e("h2",{attrs:{id:"samesite-的源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#samesite-的源"}},[t._v("#")]),t._v(" SameSite 的源")]),t._v(" "),e("p",[t._v("上面的一切看上去都是那么完美，对于同源的前后端就只有以上这么一点，但对于非同源的前后端，麻烦事才刚刚开始。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在本地开发环境下非常完美，但是一部署到生产环境就开始出锅，表现在登录成功后，任何 POST/PATCH 操作（修改信息、登出）均显示未登录。")]),t._v(" "),e("p",[t._v("检查一下 Cookie，发现什么都没有！")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/615c1b2369975169d37ea47e0af169d536665dea8ab1b7036020403163e18042.png",alt:"没有 Cookie"}})]),t._v(" "),e("p",[t._v("是 "),e("code",[t._v("Set-Cookie")]),t._v(" 没有成功吗？查一下登录的应答，发现 Chrome 提示：")]),t._v(" "),e("blockquote",[e("p",[t._v('This Set-Cookie was blocked because it had the "SameSite=Lax" ...')])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/d04294d53ad8838922bc67cad78911e61c1ade9706ce517ffec58a0624ca6fc8.png",alt:"Set-Cookie 失败"}})]),t._v(" "),e("p",[t._v("是这个 SameSite 的问题！")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("有关 SameSite 的知识可以参考 "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/103420328",target:"_blank",rel:"noopener noreferrer"}},[t._v("即将到来的Chrome新的Cookie策略 - 知乎"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite",target:"_blank",rel:"noopener noreferrer"}},[t._v("SameSite cookies - MDN - Mozilla"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("所以，SameSite（同站）是和 Same Origin（同源）不同的概念。")]),t._v(" "),e("blockquote",[e("p",[t._v("同源：两个 Protocol、Port 和 Host 都相同的 URL 是同源的；\n跨域：两个 Protocol、Port 和 Host 不都相同的 URL 是跨域的；\n同站：两个 eTLD+1 相同的网站是同站的。同站设置的 Cookie 称为一方 Cookie；\n跨站：两个 eTLD+1 不同的网站是跨站的。跨站设置的 Cookie 称为三方 Cookie。")])]),t._v(" "),e("p",[t._v("eTLD(effective Top Level Domain) 指的是 "),e("code",[t._v(".com")]),t._v(" "),e("code",[t._v(".cn")]),t._v(" "),e("code",[t._v(".xyz")]),t._v(" "),e("code",[t._v(".com.cn")]),t._v(" 这类域名。而 eTLD+1 指的就是 "),e("code",[t._v("baidu.com")]),t._v(" "),e("code",[t._v("pconline.com.cn")]),t._v(" 这类域名。")]),t._v(" "),e("p",[t._v("缕清 SameSite 的概念以后，我们再来说 Set-Cookie 中 SameSite 的作用。")]),t._v(" "),e("p",[t._v("一个 Cookie 的 SameSite 属性决定了是否限制跨站请求携带这个 Cookie。SameSite 有三种取值：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("None")]),t._v("，即不限制，所有跨站请求（前端和后端跨站的请求）都会携带这个 Cookie；")]),t._v(" "),e("li",[e("code",[t._v("Strict")]),t._v("，这种情况下，所有跨站请求都不会携带这个 Cookie，只有同站请求可以携带；")]),t._v(" "),e("li",[e("code",[t._v("Lax")]),t._v("，某些跨站请求（导航到目标网址的 GET 请求，包括链接，预加载请求和 GET 表单）可以携带，其他跨站请求不能携带。")])]),t._v(" "),e("p",[t._v("需要注意一个细节是，如果要设置 "),e("code",[t._v("SameSite=None")]),t._v("，需要同时给 Cookie 加上 Secure 属性，否则 SameSite=None 失效。而 Secure 意味着后端必须启用了 https。")]),t._v(" "),e("p",[t._v("另外，SameSite 也是一个 CSRF 防御的方案。依旧是针对 "),e("a",{attrs:{href:"#csrf"}},[t._v("CSRF")]),t._v(" 开头举的例子，如果 A 的认证 Cookie 设置了 SameSite 为 "),e("code",[t._v("Strict")]),t._v(" 或 "),e("code",[t._v("Lax")]),t._v("，B 前端再向 A 后端发送请求时就不会携带这个 Cookie 了。")]),t._v(" "),e("p",[t._v("具体到代码上，在 Django "),e("code",[t._v("settings.py")]),t._v(" 加上以下代码即可：")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    CSRF_COOKIE_SAMESITE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'None'")]),t._v("\n    CSRF_COOKIE_SECURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    LANGUAGE_COOKIE_SAMESITE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'None'")]),t._v("\n    LANGUAGE_COOKIE_SECURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    SESSION_COOKIE_SAMESITE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'None'")]),t._v("\n    SESSION_COOKIE_SECURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),e("h2",{attrs:{id:"csrf-和跨站-cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf-和跨站-cookie"}},[t._v("#")]),t._v(" CSRF 和跨站 Cookie")]),t._v(" "),e("p",[t._v("如果你以为上面的配置就可以了，那你就大错特错了。")]),t._v(" "),e("p",[t._v("在进行了上面的配置以后，发现 Django 提示 "),e("code",[t._v("CSRF cookie not set.")]),t._v("。读取")]),t._v(" "),e("h2",{attrs:{id:"csrf-和-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf-和-session"}},[t._v("#")]),t._v(" CSRF 和 session")]),t._v(" "),e("p",[t._v("不会给 CSRFtoken")]),t._v(" "),e("h2",{attrs:{id:"referer-和-referrer-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#referer-和-referrer-policy"}},[t._v("#")]),t._v(" Referer 和 Referrer Policy")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token doctype"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),e("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("referrer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("strict-origin-when-cross-origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"后记-三方-cookie-的去路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记-三方-cookie-的去路"}},[t._v("#")]),t._v(" 后记：三方 Cookie 的去路")]),t._v(" "),e("p",[t._v("上面似乎解决了所有问题，但是，还有一个问题，是越来越多的浏览器开始默认禁用第三方 Cookie 了，现在有 Safari、Firefox，以后估计还会有更多。")]),t._v(" "),e("p",[t._v("禁用三方 Cookie，意味着你即使完成了上面所有配置，也不能将跨域后端的 Cookie 存到浏览器中，这套认证方法直接失效。毕竟，各种广告商也是通过三方 Cookie 定位用户然后精准投放广告的。")]),t._v(" "),e("p",[t._v("从长久考虑，可以采用其他方法替代：")]),t._v(" "),e("ol",[e("li",[t._v("使用同一个根域名（如使用 "),e("code",[t._v("app.test.com")]),t._v(" 和 "),e("code",[t._v("api.test.com")]),t._v("）。这样虽然是同源策略下的跨域，但不是 Cookie 概念下的跨域。把后端的 Cookie 域设置为 "),e("code",[t._v("test.com")]),t._v(" 后，前端就可以直接读取、修改了；")]),t._v(" "),e("li",[t._v("如果前端服务器支持反代，可以把后端 api 反向代理到 "),e("code",[t._v("app.test.com/api/")]),t._v(" 下，这样就是完全同源了。后端服务器支持反代的话也是同理；")]),t._v(" "),e("li",[t._v("不使用 Session 认证，因为 Session 是基于 Cookie 的；可以改为 Token（如 JSON Web Token）等认证方案，这样的认证方式就完全不需要 Cookie，可以回避跨域 Cookie 引发的一系列问题。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);