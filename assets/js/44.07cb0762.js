(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{366:function(e,t,v){"use strict";v.r(t);var a=v(3),_=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-面试题"}},[e._v("vue 面试题")]),e._v(" "),t("h2",{attrs:{id:"什么是-mvvm"}},[e._v("什么是 MVVM")]),e._v(" "),t("img",{staticClass:"zoom-imgs",attrs:{src:"https://github.com/scott8013/readme-images/blob/main/WX20210324-203950@2x.png?raw=true",alt:"mvvm"}}),e._v("\n1.MVC 是一种软件架构模式, 传统的 MVC 指的是,用户操作会请求服务端路由，路由会调用对应的控制器来处理,控制器会获取数据。将结果返回给前端,页面重新渲染\n"),t("p",[e._v("2.MVVM :传统的前端会将数据手动渲染到页面上, MVVM 模式不需要用户收到操作 dom 元素,将数据绑 定到 viewModel 层上，会自动将数据渲染到页面中，视图变化会通知 viewModel 层 更新数据。ViewModel\n就是我们 MVVM 模式中的桥梁.")]),e._v(" "),t("h2",{attrs:{id:"什么是-mvvm-2"}},[e._v("什么是 MVVM")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离 把Model和View关联起来的就是ViewModel。\nViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model\nView 和 Model 之间的同步工作完全是自动的，无需人为干涉（由viewModel完成，在这里指VUE）\n因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("传统的 MVC 指的是,用户操作会请求服务端路由，路由会调用对应的控制器来处理,控制器会获取数 据。将结果返回给前端,页面重新渲染\nMVVM :传统的前端会将数据手动渲染到页面上, MVVM 模式不需要用户收到操作 dom 元素,将数据绑 定到 viewModel 层上，会自动将数据渲染到页面中，视图变化会通知 viewModel层 更新数据。\nViewModel 就是我们 MVVM 模式中的桥梁.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"vue-和-react-区别"}},[e._v("vue 和 react 区别")]),e._v(" "),t("h3",{attrs:{id:"相同点"}},[e._v("相同点")]),e._v(" "),t("ul",[t("li",[e._v("01.都支持组建化开发 和 Virtual DOM")]),e._v(" "),t("li",[e._v("02.都支持props进行父子组建间数据通讯")]),e._v(" "),t("li",[e._v("03.都支持数据驱动试图 不直接操作真实DOM 更新状态数据界面会自动更新.")]),e._v(" "),t("li",[e._v("04.都支持服务端渲染")]),e._v(" "),t("li",[e._v("05.都有支持native的方案, React使用React Native, Vue使用Week")])]),e._v(" "),t("h3",{attrs:{id:"不同点"}},[e._v("不同点")]),e._v(" "),t("ul",[t("li",[e._v("01.数据绑定: vue实现了数据的双向绑定, react数据流动是单向的")]),e._v(" "),t("li",[e._v("02.组建写法不一样, React推荐语法JSX, 也就是HTML和CSS全都写进JavaScript里, 即 All In js. Vue推荐的做法是(webpack + vue-loader)的单文件组建的格式, 即 html css js 写在同一个文件.")]),e._v(" "),t("li",[e._v("03.state对象在react应用中不可改变, 需用使用setState方法更新状态, 在vue中, state对象不是必须的, 数据由data熟悉在vue对象中管理")]),e._v(" "),t("li",[e._v("04.virtual Dom不一样, vue会跟踪每一个组建的依赖关系, 不需要重新渲染组建树. 而对于React而言, 每个应用的状态被改变时, 全部组建都会重新渲染. 所以react中会需要shouldComponentUpdate这个声明周期函数方法来进行控制.")]),e._v(" "),t("li",[e._v("05.React严格上只针对MVC的view层. Vue则是MVVM模式")])]),e._v(" "),t("h2",{attrs:{id:"webpack-中-loader-和-plugin-的区别是什么"}},[e._v("webpack 中 loader 和 plugin 的区别是什么")]),e._v(" "),t("p",[e._v("loader：loader 是一个转换器，将 A 文件进行编译成 B 文件，属于单纯的文件转换过程")]),e._v(" "),t("p",[e._v("plugin：plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。")]),e._v(" "),t("h2",{attrs:{id:"vue-封装通用组件"}},[e._v("vue 封装通用组件")]),e._v(" "),t("p",[e._v("通用组件必须具备高性能、低耦合的特性")]),e._v(" "),t("p",[t("strong",[e._v("1、数据从父组件传入")])]),e._v(" "),t("ul",[t("li",[e._v("a.为了解耦，子组件本身就不能生成数据。即使生成了，也只能在组件内部运作，不能传递出去。")]),e._v(" "),t("li",[e._v("b.但是通用组件的的应用场景比较复杂，对 props 传递的参数应该添加一些验证规则")]),e._v(" "),t("li",[e._v("c.props 中数据不要更改。")])]),e._v(" "),t("p",[t("strong",[e._v("2.在父组件处理事件")])]),e._v(" "),t("ul",[t("li",[e._v("a.在通用组件中，通常会需要有各种事件， 比如复选框的 change 事件，或者组件中某个按钮的 click 事件 这些事件的处理方法应当尽量放到父组件中，通用组件本身只作为一个中转,\n这样既降低了耦合性，也保证了通用组件中的数据不被污染")]),e._v(" "),t("li",[e._v("b. 不过，并不是所有的事件都放到父组件处理 比如组件内部的一些交互行为，或者处理的数据只在组件内部传递，这时候就不需要用 $emit 了")])]),e._v(" "),t("p",[t("strong",[e._v("3. 合理使用 slot")]),e._v("\n一般在不同场景显示不同组件。")]),e._v(" "),t("p",[t("strong",[e._v("4.尽量不要依赖 vuex")])]),e._v(" "),t("p",[e._v("Vue 没有直接子对子传参的方法，建议将需要传递数据的子组件，都合并为一个组件。如果一定需要子对子传参，可以先从传到父组件，再传到子组件。 或者使用 pubSub.js 实现子组件之间互相传参数。")]),e._v(" "),t("p",[t("strong",[e._v("5.动态组件")]),e._v("\nVue 还可以将多个子组件，都挂载在同一个位置，通过变量来切换组件，实现 tab 菜单这样的效果")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("component v"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("bind"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("is"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'tabView'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("component"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("6.递归组件")]),e._v("\n当组件拥有 name 属性的时候，就可以在它的模板内递归的调用自己，这在开发树形组件的时候十分有效")]),e._v(" "),t("h2",{attrs:{id:"vue-数据双向绑定原理"}},[e._v("vue 数据双向绑定原理")]),e._v(" "),t("p",[e._v("双向绑定是指数据模型（Module）和 视图（View）之间的双向绑定。 其原理是采用数据劫持结合发布订阅者模式实现。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("1). 创建 vue 实例的过程中， 会先遍历 data 选项中所有的属性（发布者）， 用 Object.defineProperty 劫持这些属性将其转换为 getter/setter。读取数据时候会触发 getter， 修改数据会触发 setter。")]),e._v(" "),t("p",[e._v("代码：")]),e._v(" "),t("ul",[t("li",[e._v("1).initData 初始化用户传入的数据")]),e._v(" "),t("li",[e._v("2). new Observer 将数据进行观测。")]),e._v(" "),t("li",[e._v("3). this.walk 进行对象的处理。")]),e._v(" "),t("li",[e._v("4). defineReactive 循环对象属性定义响应式变化。")]),e._v(" "),t("li",[e._v("5). Object.defineProperty 使用 Object.defineProperty 重新定义数据。 拦截属性的获取--进行依赖收集。 拦截属性的更新操作， 对相关依赖进行通知。")])])]),e._v(" "),t("li",[t("p",[e._v("2). 然后给每个对象属性对应的 new Dep(), Dep 专门收集依赖、删除依赖、向依赖发送消息。 dep 实际就是一个普通对象， 里边只有两个属性 id,subs。 subs 存放 watcher 数组。\n先把每个依赖设置在 Dep.target 上。 在 Dep 中创建一个依赖数组， 先判断 Dep.target 是否已经在依赖数组中存在， 如果不存在就添加到依赖数组中完成依赖收集。 随后 Dep.target 置为 null。")])]),e._v(" "),t("li",[t("p",[e._v("3). 组件在挂载过程中都会 new 一个 Watcher 实例。 这个实例就是依赖（订阅者）。 Watcher 的第二个参数是一个函数， 此函数的作用是更新渲染节点。 在首次渲染过程， 会自动调用 Dep 方法收集依赖，\n收集完成后组件中每个数据都绑定上依赖。 当数据变化时就会在 setter 中调用 dep.notify 通知对应的依赖进行更新。 在更新过程中要读取数据， 就会触发 Watcher 的第二个函数参数。 一触发就再次自动调用 Dep 方法收集依赖，\n同时在此函数中运行 patch（diff 运算）来更新对应的 DOM 节点， 完成了数据的双向绑定。")])])]),e._v(" "),t("h2",{attrs:{id:"mixin-合并规则"}},[e._v("mixin 合并规则")]),e._v(" "),t("h3",{attrs:{id:"选项合并规则"}},[e._v("选项合并规则")]),e._v(" "),t("p",[e._v("1.数据对象（data）在内部会进行递归合并，并在发生冲突时以组件数据优先")]),e._v(" "),t("p",[e._v("2.同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用")]),e._v(" "),t("p",[e._v("3.值为对象的选项，例如 methods、components、watch 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。Vue.extend() 也使用同样的策略进行合并")]),e._v(" "),t("h2",{attrs:{id:"elementui-按需加载原理"}},[e._v("elementUI 按需加载原理")]),e._v(" "),t("p",[e._v("。。。")]),e._v(" "),t("h2",{attrs:{id:"图片懒加载原理"}},[e._v("图片懒加载原理")]),e._v(" "),t("p",[e._v("图片懒加载考虑哪些问题，实现的大概逻辑")]),e._v(" "),t("h2",{attrs:{id:"统计页面停留时长"}},[e._v("统计页面停留时长")]),e._v(" "),t("p",[e._v("统计用户访问时长，如何优雅地发送统计数据到服务端（提示： 提出在路由钩子实现， 提到节流和防抖， 回答节流和防抖的原理）")]),e._v(" "),t("h2",{attrs:{id:"keep-alive-原理"}},[e._v("keep alive 原理")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1605603",target:"_blank",rel:"noopener noreferrer"}},[e._v("keep alive 原理"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/answershuto/learnVue/blob/master/docs/%E8%81%8A%E8%81%8Akeep-alive%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E5%8F%8A%E5%85%B6%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.MarkDown",target:"_blank",rel:"noopener noreferrer"}},[e._v(" keep alive 原理"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"vue-template-模板到解析层真实-dom-的过程"}},[e._v("vue template 模板到解析层真实 DOM 的过程")]),e._v(" "),t("h2",{attrs:{id:"v-model-手动实现"}},[e._v("v-model 手动实现")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000012264050",target:"_blank",rel:"noopener noreferrer"}},[e._v("v-model 手动实现"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"nexttick-原理"}},[e._v("$nextTick 原理")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/v2/reactive/next-tick.html#js-%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[e._v("nextTick 原理 黄奕"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://bbs.huaweicloud.com/blogs/235688",target:"_blank",rel:"noopener noreferrer"}},[e._v("nextTick 原理 华为云"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"vuex-原理"}},[e._v("vuex 原理")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000018251844",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuex 原理"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"vue-router-原理"}},[e._v("vue router 原理")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903612930326541",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"v-if-和-v-show-区别"}},[e._v("v-if 和 v-show 区别")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("相同点 两者都是在判断 DOM 节点是否要显示。")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("不同点\n1、实现方式")]),e._v(" "),t("p",[e._v("v-if 是根据后面数据的真假值判断直接从 Dom 树上删除或重建元素节点")]),e._v(" "),t("p",[e._v("v-show 只是在修改元素的 css 样式，也就是 display 的属性值，元素始终在 Dom 树上。")]),e._v(" "),t("p",[e._v("2、编译过程")]),e._v(" "),t("p",[e._v("v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件")]),e._v(" "),t("p",[e._v("v-show 只是简单的基于 css 切换")]),e._v(" "),t("p",[e._v("3、编译条件")]),e._v(" "),t("p",[e._v("v-if 是惰性的，如果初始条件为假，则什么也不做只有在条件第一次变为真时才开始局部编译")]),e._v(" "),t("p",[e._v("v-show 是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且 DOM 元素始终被保留")]),e._v(" "),t("p",[e._v("4、性能消耗")]),e._v(" "),t("p",[e._v("v-if 有更高的切换消耗，不适合做频繁的切换")]),e._v(" "),t("p",[e._v("v-show 有更高的初始渲染消耗，适合做频繁的额切换")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("v-if vs v-show v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建")]),e._v(" "),t("p",[e._v("也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),e._v(" "),t("p",[e._v("v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。 所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景 v-show\n则适用于需要非常频繁切换条件的场景")])]),e._v(" "),t("h2",{attrs:{id:"vue-开发插件流程"}},[e._v("vue 开发插件流程")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000010813937",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 自定义插件"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"computed-与-watch-区别"}},[e._v("computed 与 watch 区别")]),e._v(" "),t("p",[e._v("watch 和 computed 区别:")]),e._v(" "),t("p",[e._v("1.computed 是监听属性 依赖属性值发生变化的时候 数据才会变化. watch 是监听数据变化 执行相应的操作.\n2.computed 有缓存 当依赖的属性没有发生变化的时候 则取缓存中的数据. watch 监听值是否发生变化, 都会调用回调函数.\n3.computed 必须有 return watch 不需要\n4.computed 不能有异步 watch 可以")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("功能上：computed 是计算属性，也就是依赖其它的属性计算所得出最后的值。watch 是去监听一个值的变化，然后执行相对应的函数")]),e._v(" "),t("p",[e._v("使用上：computed 中的函数必须要用 return 返回 watch 的回调里面会传入监听属性的新旧值，通过这两个值可以做一些特定的操作，不是必须要用 return")]),e._v(" "),t("p",[e._v("性能上：computed 中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而 watch 在每次监听的值发生变化的时候都会执行回调")]),e._v(" "),t("p",[e._v("场景上：computed：当一个属性受多个属性影响的时候，例子：购物车商品结算 watch：当一条数据影响多条数据的时候，例子：搜索框")])]),e._v(" "),t("h2",{attrs:{id:"vue-router-相关问题待补充"}},[e._v("vue router 相关问题待补充")]),e._v(" "),t("h2",{attrs:{id:"分片下载与上传文件-如何实现"}},[e._v("分片下载与上传文件 如何实现")]),e._v(" "),t("h2",{attrs:{id:"vue-diff-算法"}},[e._v("vue diff 算法")]),e._v(" "),t("h2",{attrs:{id:"vue-模板编译过程"}},[e._v("vue 模板编译过程")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000012922342",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 模板编译过程"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"vue-组建-name-属性的作用"}},[e._v("vue 组建 name 属性的作用")]),e._v(" "),t("p",[e._v("项目使用 keep-alive 时，可以搭配组件的 name 属性进行过滤\nDOM 做递归组件时需要调用自身 name\nvue-devtools 调试工具里显示的组见名称是由 vue 中组件 name 决定的")]),e._v(" "),t("h2",{attrs:{id:"keep-alive-原理-loader-loader-是一个转换器-将-a-文件进行编译成-b-文件-属于单纯的文件转换过程"}},[e._v("keep-alive 原理 loader：loader 是一个转换器，将 A 文件进行编译成 B 文件，属于单纯的文件转换过程；")]),e._v(" "),t("p",[e._v("plugin：plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。\nkeep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染\n一般结合路由和动态组件一起使用，用于缓存组件\n提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高\n对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated")]),e._v(" "),t("h2",{attrs:{id:"vue-父子组建传递参数-8-种方式"}},[e._v("vue 父子组建传递参数 8 种方式")]),e._v(" "),t("blockquote",[t("p",[e._v("参考地址： https://juejin.cn/post/6844904080540712967")])]),e._v(" "),t("h2",{attrs:{id:"组建化-和-mvvm"}},[e._v("组建化 和 MVVM")]),e._v(" "),t("blockquote",[t("p",[e._v("1.1 组件：把重复的代码提取出来合并成为一个个组件，组件最重要的就是重用（复用），位于框架最底层，其他功能都依赖于组件，可供不同功能使用，独立性强。")])]),e._v(" "),t("blockquote",[t("p",[e._v("1.2 模块：分属同一功能/业务的代码进行隔离（分装）成独立的模块，可以独立运行，以页面、功能或其他不同粒度划分程度不同的模块，位于业务框架层，模块间通过接口调用，目的是降低模块间的耦合，由之前的主应用与模块耦合，变为主应用与接口耦合，接口与模块耦合。")])]),e._v(" "),t("h3",{attrs:{id:"eg"}},[e._v("eg:")]),e._v(" "),t("blockquote",[t("p",[e._v("2.1 组件：就像一个个小的单位，多个组件可以组合成组件库，方便调用和复用，组件间也可以嵌套，小组件组合成大组件。\n2.2 模块：就像是独立的功能和项目（如淘宝：注册、登录、购物、直播...），可以调用组件来组成模块，多个模块可以组合成业务框架。")])]),e._v(" "),t("h2",{attrs:{id:"响应式原理"}},[e._v("响应式原理")]),e._v(" "),t("h2",{attrs:{id:"vdom-和-diff"}},[e._v("vdom 和 diff")]),e._v(" "),t("h2",{attrs:{id:"模板编译"}},[e._v("模板编译")]),e._v(" "),t("h2",{attrs:{id:"组建渲染过程"}},[e._v("组建渲染过程")]),e._v(" "),t("h2",{attrs:{id:"前端路由"}},[e._v("前端路由")]),e._v(" "),t("h2",{attrs:{id:"object-defineproperty-和-proxy-对比的缺点"}},[e._v("Object.defineProperty 和 Proxy 对比的缺点")]),e._v(" "),t("p",[e._v(":::tips 01.深度监听需要递归 02.无法监听新增属性与删除属性(Vue.$set Vue.$delete) 03.无法原生监听数组 需要特殊处理\n:::")]),e._v(" "),t("blockquote",[t("p",[e._v("Proxy 基本应用")])]),e._v(" "),t("p",[e._v(":::tips")]),e._v(" "),t("p",[e._v(":::")]),e._v(" "),t("blockquote",[t("p",[e._v("Reflect")])])])}),[],!1,null,null,null);t.default=_.exports}}]);