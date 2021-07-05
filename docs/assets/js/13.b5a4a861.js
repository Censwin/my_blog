(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{525:function(t,e,r){"use strict";r.r(e);var a=r(6),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("前面已经讲了"),r("code",[t._v("TCP")]),t._v(" 那现在可以开始说一下"),r("code",[t._v("HTTP")]),t._v("了，本篇主要讲一下我们按下回车后整个"),r("code",[t._v("HTTP")]),t._v("请求流程是怎么样的。"),r("br"),t._v("\nhttp: http是建立在TCP链接基础之上，这种协议允许浏览器向服务器获取资源；")]),t._v(" "),r("h2",{attrs:{id:"发送请求阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发送请求阶段"}},[t._v("#")]),t._v(" 发送请求阶段")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("【构建】首先浏览器会构建请求行信息，如：GET /index.html HTTP1.1 ；分别表示 【使用get方法】【请求什么资源】【http版本】；")])]),t._v(" "),r("li",[r("p",[t._v("【查找缓存】此时浏览器先从浏览器中查询有没有已经过期的文件需要重新请求。（注：建立在第二次请求相同站点的基础上）；当发现浏览器中已存在副本会拦截请求返回资源副本；")])]),t._v(" "),r("li",[r("p",[t._v("【域名解析】此时会将域名交给域名系统（DNS），由DNS解析后返回IP；"),r("strong",[t._v("浏览器同时提供了DNS数据缓存服务")]),t._v("，如果某个域名已经解析过了，那么浏览器会缓存解析的结果，以供下次查询时直接使用，这样也会减少一次网络请求。")])]),t._v(" "),r("li",[r("p",[t._v("【建立TCP连接】需要注意的是chrome只支持【相同域名】最多6个tcp链接，如果当下6个都被占满将会进入排队等待过程，少于6个则直接进入TCP连接阶段。连接过程参考上一篇。")])]),t._v(" "),r("li",[r("p",[t._v("【发送HTTP】该阶段在3次握手后进行；")]),t._v(" "),r("ol",[r("li",[t._v("首先浏览器先向服务端发送第一步中构建好的【请求行】；")]),t._v(" "),r("li",[t._v("然后发送【请求头】，请求头包含很多基础信息，包括操作系统、keep-alive、浏览器版本等等；")]),t._v(" "),r("li",[t._v("最后如果发送的是POST请求的话还会发送一个【请求体】，比如form表单信息或二进制文件等\n"),r("img",{attrs:{src:t.$withBase("/brower/httpreq.png")}})])])])]),t._v(" "),r("h2",{attrs:{id:"接收请求阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接收请求阶段"}},[t._v("#")]),t._v(" 接收请求阶段")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("首先服务器会返回【响应行】，包括协议版本和状态码。")])]),t._v(" "),r("li",[r("p",[t._v("随后，正如浏览器会随同请求发送请求头一样，服务器也会随同响应向浏览器发送【响应头】。响应头包含了服务器自身的一些信息，比如服务器生成返回数据的时间、返回的数据类型（JSON、HTML、流媒体等类型），以及服务器要在客户端保存的 Cookie 等信息。")])]),t._v(" "),r("li",[r("p",[t._v("发送完响应头后，服务器就可以继续发送【响应体】的数据，通常，响应体就包含了 HTML 的实际内容。\n试试这段代码:")]),t._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -I geekbang.org\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/brower/httpres.png")}})])]),t._v(" "),r("h2",{attrs:{id:"如何保持登录状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何保持登录状态"}},[t._v("#")]),t._v(" 如何保持登录状态")]),t._v(" "),r("p",[t._v("在响应头中可以看到set-cookie, 当浏览器开始解析响应头时，如果含有set-cookie,就会把这个字段信息保存到本地；当再次访问时会从cookie中取出值，并放到请求头中发送给服务端；")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("HTTP 请求示意图：\n"),r("img",{attrs:{src:t.$withBase("/brower/httppriod.png")}})]),t._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("如果一个页面的网络加载时间过久，你是如何分析卡在哪个阶段的？")]),t._v(" "),r("ol",[r("li",[t._v("首先猜测最可能的出问题的地方，网络传输丢包比较严重，需要不断重传。然后通过ping、curl看看对应的时延高不高。")]),t._v(" "),r("li",[t._v("然后通过wireshake看看具体哪里出了问题。")]),t._v(" "),r("li",[t._v("假如别人访问很快，自己电脑很慢，就要看看自己客户端是否有问题了。")])])]),t._v(" "),r("li",[r("p",[t._v("关闭浏览器时TCP连接由谁断开，当keep-alive时会一直保持连接状态吗？"),r("a",{attrs:{href:"https://blog.csdn.net/cccallen/article/details/8003324",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关文章"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);