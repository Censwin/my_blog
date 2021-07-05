(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{534:function(t,e,s){"use strict";s.r(e);var a=s(6),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"宏任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务"}},[t._v("#")]),t._v(" 宏任务")]),t._v(" "),s("p",[t._v("宏任务可以简单的理解为宿主环境提供的方法，如渲染、交互、setTimeout等等，这些任务都是在主线程上执行；所以为了协调这些任务，渲染进程维护了多个消息队列比如普通队列和延迟队列，主线程通过事件循环不断地取出任务并执行，执行完当前任务再清空延迟队列；我们把这些消息队列中的任务统称为"),s("strong",[t._v("宏任务")]),t._v(" 。")]),t._v(" "),s("p",[t._v("settimeout的任务放在延迟队列中，执行完一个任务看一次延迟队列，因此如果中间的任务执行时间过长，则相邻的settimeout方法可能执行时间就比较久。所以说宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，微任务的产生重要是解决了宏任务无法兼顾的实时性的问题，因为宏任务无法控制将任务加入消息队列的时间。")]),t._v(" "),s("h2",{attrs:{id:"微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),s("p",[t._v("微任务就是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前；我们知道当 JavaScript 执行一段脚本的时候，V8 会为其创建一个全局执行上下文，在创建全局执行上下文的同时，V8 引擎也会在内部创建一个微任务队列。顾名思义，这个微任务队列就是用来存放微任务的，因为在当前宏任务执行的过程中，有时候会产生多个微任务，这时候就需要使用这个微任务队列来保存这些微任务了。【除了promise 还有 DOM操作也是微任务 如removeChild】")]),t._v(" "),s("p",[t._v("流程：创建上下文->执行当前宏任务->执行结束准备退出全局上下文->看一下全局上下文里的微任务队列->哦 有两个任务->取出来放到当前宏任务里执行->清空队列->退出全局上下文")]),t._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("ol",[s("li",[t._v("微任务和宏任务是绑定的，每个宏任务在执行时，会创建自己的微任务队列。")]),t._v(" "),s("li",[t._v("微任务的执行时长会影响到当前宏任务的时长。如果微任务过多或者微任务执行时长过长势必会影响后续宏任务执行,因为微任务在不停插队")]),t._v(" "),s("li",[t._v("在一个宏任务中，分别创建一个用于回调的宏任务和微任务，无论什么情况下，微任务都早于宏任务执行。这里的意思是当你再宏任务里创建一个宏任务和一个微任务，宏任务那肯定会被添加到普通队列或者延迟队列的最尾部，而微任务则被添加在当前微任务队列，所以微任务早于宏任务。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);