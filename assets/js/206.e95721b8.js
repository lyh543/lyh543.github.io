(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{563:function(e,t,r){"use strict";r.r(t);var s=r(3),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("由于 https 的广泛使用，现在需要抓包的时候，就不得不考虑解密 https 流量。抓包软件解密 https 流量的原理很简单，运用了非常经典的攻击方法——中间人攻击。")]),e._v(" "),t("blockquote",[t("p",[e._v("中间人攻击的原理是，攻击者在客户端和服务器之间建立一个代理，代理会将客户端的请求转发给服务器，同时将服务器的响应转发给客户端。这样，客户端和服务器之间的通信就变成了客户端和代理之间的通信，代理和服务器之间的通信。这样，攻击者就可以在代理和服务器之间截获流量，从而解密 https 流量。 -- 由 GitHub Copilot 补全")])]),e._v(" "),t("p",[e._v("https 中间人攻击的前提是，客户端需要信任代理（抓包软件）的 tls 证书，只有这样，代理才可以假装是服务器，和客户端建立 https 连接。在没有安装别的证书的前提下，可以相信 https 是很安全的协议，不需要担心因为使用公共 Wifi 而泄露密码等问题。")]),e._v(" "),t("p",[e._v("然而，安卓 7 开始区分了系统证书和用户证书，系统证书是由系统自带的，用户安装的证书属于用户证书。应用程序默认不会信任用户证书，一般只在调试应用程序时，会信任用户证书 ("),t("a",{attrs:{href:"https://developer.android.com/training/articles/security-config#CustomTrust",target:"_blank",rel:"noopener noreferrer"}},[e._v("ref"),t("OutboundLink")],1),e._v(")。")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/6690c92cc89d832857fbaf069b49514a1545f1909285334676e5be07f96da915.png",alt:"系统证书和用户证书"}})]),e._v(" "),t("p",[t("s",[e._v("所以移动端抓包一般推荐使用 iOS 设备，就没这么多事情了")])]),e._v(" "),t("p",[e._v("以我手上的安卓 13 为例（安卓 12 应该也是如此），系统证书和用户证书分别存储在 "),t("code",[e._v("/system/etc/security/cacerts")]),e._v(" 和 "),t("code",[e._v("/data/misc/user/0/cacerts-added/")]),e._v("，两个文件夹下的证书格式是差不多的。有没有可能，在取得 Root 权限后，把我们的证书复制到系统证书，应用程序就会信任我们的证书了呢？")]),e._v(" "),t("p",[e._v("我曾经尝试将证书复制到 "),t("code",[e._v("/system/etc/security/cacerts")]),e._v(" 时，意外发现 "),t("code",[e._v("/system")]),e._v(" 是只读的。原来，在通过 Magisk 获取 Root 权限后，Magisk 会以只读的权限挂载分区，就没法像以前的 Root 简单粗暴地修改系统分区了。"),t("a",{attrs:{href:"https://forum.xda-developers.com/t/script-android-10-universal-mount-systemrw-superrw-featuring-makerw-read-write.4247311/",target:"_blank",rel:"noopener noreferrer"}},[e._v("XDA"),t("OutboundLink")],1),e._v(" 上倒是有一个脚本，能把系统分区变为可写，但是限制很多、很麻烦、也有翻车的风险，于是那个时候就此止步。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("最近突然又想到，虽然 "),t("code",[e._v("/system")]),e._v(" 是只读的，我们不能直接操作，但是也许可以通过 Magisk 模块来实现这一点。经过搜索后，发现了 "),t("a",{attrs:{href:"https://github.com/Magisk-Modules-Repo/movecert/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Magisk-Modules-Repo/movecert"),t("OutboundLink")],1),e._v("，会在每次开机时将 "),t("code",[e._v("/data/misc/user/0/cacerts-added/")]),e._v(" 复制到 "),t("code",[e._v("/system/etc/security/cacerts")]),e._v("，并在复制后修改了文件的 owner，以此实现了目的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/2c845dc2465d208f2469869d2671e865228a60cec3bd739762628d782453982d.png",alt:"核心代码"}})]),e._v(" "),t("p",[e._v("不过，仓库代码目前有安装上的问题，"),t("a",{attrs:{href:"https://github.com/Magisk-Modules-Repo/movecert/issues/12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue#12"),t("OutboundLink")],1),e._v(" 里有大佬给出了解决方案和 PR，以及一个可以直接使用的 "),t("a",{attrs:{href:"https://github.com/Magisk-Modules-Repo/movecert/files/8473364/movecert-1.9.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("zip"),t("OutboundLink")],1),e._v(" 模块，可在官方接受 PR 前使用。")]),e._v(" "),t("p",[e._v("安装完模块，并且在手机上安装完 Fiddler 的证书后，重启即可看到 Fiddler 的证书出现在了系统证书列表中，就可以愉快地抓包了。")])])}),[],!1,null,null,null);t.default=o.exports}}]);