(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{532:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"settimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout"}},[t._v("#")]),t._v(" setTimeout")]),t._v(" "),a("blockquote",[a("p",[t._v("浏览器如何实现setTimeout？")])]),t._v(" "),a("p",[t._v("要了解定时器的工作原理，就得先来回顾下之前讲的事件循环系统，我们知道渲染进程中所有运行在主线程上的任务都需要先添加到消息队列，然后事件循环系统再按照顺序执行消息队列中的任务。下面我们来看看那些典型的事件：")]),t._v(" "),a("ul",[a("li",[t._v("当接收到 HTML 文档数据，渲染引擎就会将“解析 DOM”事件添加到消息队列中")]),t._v(" "),a("li",[t._v("当用户改变了 Web 页面的窗口大小，渲染引擎就会将“重新布局”的事件添加到消息队列中")]),t._v(" "),a("li",[t._v("当触发了 JavaScript 引擎垃圾回收机制，渲染引擎会将“垃圾回收”任务添加到消息队列中")]),t._v(" "),a("li",[t._v("同样，如果要执行一段异步 JavaScript 代码，也是需要将执行任务添加到消息队列中")])]),t._v(" "),a("p",[t._v("以上列举的只是一小部分事件，这些事件被添加到消息队列之后，事件循环系统就会按照消息队列中的顺序来执行事件")]),t._v(" "),a("p",[t._v("所以说要执行一段异步任务，需要先将任务添加到消息队列中。但是定时器不同，定时器设置的回调函数有一定的时间间隔，但任务队列里的都是按顺序执行的，所以不能将回调函数添加到这个队列中。")]),t._v(" "),a("p",[t._v("那么在chrome中除了上文提到的这个正常的消息队列，他还提供了一个延迟队列（这里说是队列是为了好理解，他其实是一个hashMap结构）。当你创建一个定时器时，渲染进程会自动将这个定时器的回调任务添加到这个**【延迟队列】** 这个回调任务包含 "),a("strong",[t._v("回调函数名、当前发起时间、延迟执行时间")]),t._v(" ，创建好回调任务之后，再将该任务添加到延迟执行队列中。")]),t._v(" "),a("p",[t._v("现在通过定时器发起的任务就被保存到延迟队列中了，那接下来我们再来看看消息循环系统是怎么触发延迟队列的。")]),t._v(" "),a("p",[t._v("消息循环执行顺序如  执行消息队列中的任务 -> 执行延迟队列中的任务，从这个顺序上我们可以看出，只有当处理完一个正常消息队列后才会执行延迟队列中的任务。等到期的任务执行完成之后，再继续下一个循环过程。通过这样的方式，一个完整的定时器就实现了。它像一个圆圈一直循环上面的顺序。")]),t._v(" "),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当同步任务执行时间太久 势必会影响定时器任务，因为同步任务执行完才会根据ProcessDelayTask函数计算"),a("strong",[t._v("到期")]),t._v(" 任务，然后依次执行这些到期任务，执行完后就进入下一个循环。")])]),t._v(" "),a("li",[a("p",[t._v("时间间隔：如果 setTimeout 存在嵌套调用，那么系统会设置最短时间间隔为 4 毫秒")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在 Chrome 中，定时器被嵌套调用 5 次以上，系统会判断该函数方法被"),a("strong",[t._v("阻塞")]),t._v("了，如果定时器的调用时间间隔小于 4 毫秒，那么浏览器会将每次调用的时间间隔设置为 4 毫秒。")])]),t._v(" "),a("li",[a("p",[t._v("未激活的页面，setTimeout 执行最小间隔是 1000 毫秒；如果标签不是当前的激活标签，那么定时器最小的时间间隔是 1000 毫秒，目的是为了优化后台页面的加载损耗以及降低耗电量。这一点你在使用定时器的时候要注意。")]),t._v(" "),a("blockquote",[a("p",[t._v("比如打开一个页面后，不等加载完成，马上点击另一个标签页，那么之前的页面里的定时器不一定会按预想的执行。比如你设置了500毫秒，也会按1秒来执行。因为没有焦点的标签，也没有用户交互，可以牺牲实际的体验。")])])]),t._v(" "),a("li",[a("p",[t._v("延时执行时间有最大值：")]),t._v(" "),a("p",[t._v("Chrome、Safari、Firefox 都是以 32 个 bit 来存储延时值的，32bit 最大只能存放的数字是 2147483647 毫秒，这就意味着，如果 setTimeout 设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，那么相当于延时值被设置为 0 了，这导致定时器会被立即执行。")])]),t._v(" "),a("li",[a("p",[t._v("使用 setTimeout 的回调函数中的 this ，应该使用箭头函数或者bind方法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MyObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("setiomeout 不稳定，但如果要使用 JavaScript 来实现动画效果，函数 requestAnimationFrame 就是个很好的选择。分析出 requestAnimationFrame 实现的动画效果比 setTimeout 好的原因。")]),t._v(" "),a("blockquote",[a("p",[t._v("使用 requestAnimationFrame 不需要设置具体的时间，由系统来决定回调函数的执行时间，requestAnimationFrame 里面的回调函数是在页面刷新之前执行，它跟着屏幕的刷新频率走，保证每个刷新间隔只执行一次，内如果页面未激活的话，requestAnimationFrame 也会停止渲染，这样既可以保证页面的流畅性，又能节省主线程执行函数的开销")])])])}),[],!1,null,null,null);s.default=e.exports}}]);