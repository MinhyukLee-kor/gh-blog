(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{305:function(t,e,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("1d13946d",content,!0,{sourceMap:!1})},325:function(t,e,r){"use strict";r(305)},326:function(t,e,r){var o=r(41)((function(i){return i[1]}));o.push([t.i,"h1[data-v-30f88918]{color:#4d4d4d;text-align:center}article[data-v-30f88918]{border-radius:15px;overflow:hidden;transition:box-shadow .3s ease}article[data-v-30f88918]:hover{box-shadow:0 8px 16px rgba(0,0,0,.1)}.line-clamp-3[data-v-30f88918]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}button[data-v-30f88918]{cursor:pointer}",""]),o.locals={},t.exports=o},351:function(t,e,r){"use strict";r.r(e);r(33),r(70);var o=r(10),n=(r(51),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("blog").fetch();case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{toggleDarkMode:function(){this.$colorMode.preference="dark"===this.$colorMode.value?"light":"dark"}}}),l=(r(325),r(26)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto py-8 dark:bg-gray-800"},[t._m(0),t._v(" "),t._l(t.posts,(function(r){return e("div",{key:r.slug,staticClass:"mb-10"},[e("hr",{staticClass:"py-2 mt-8 border-t-2 w-20 mx-auto"}),t._v(" "),e("article",{staticClass:"flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"},[e("div",{staticClass:"hidden sm:block sm:basis-56"},[e("img",{staticClass:"aspect-auto h-full w-full object-cover",attrs:{src:r.image,alt:r.alt}})]),t._v(" "),e("div",{staticClass:"flex flex-1 flex-col justify-between"},[e("div",{staticClass:"border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"},[e("NuxtLink",{attrs:{to:"/blog/".concat(r.slug)}},[e("h3",{staticClass:"text-2xl font-bold text-gray-900 dark:text-white"},[t._v("\n              "+t._s(r.title)+"\n            ")])]),t._v(" "),e("time",{staticClass:"text-xs font-bold uppercase text-gray-900 dark:text-white",attrs:{datetime:r.date}},[t._v("\n            "+t._s(r.date)+"\n          ")]),t._v(" "),e("p",{staticClass:"mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"},[t._v("\n            "+t._s(r.description)+"\n          ")])],1),t._v(" "),e("div",{staticClass:"sm:flex sm:items-end sm:justify-end"},[e("NuxtLink",{staticClass:"block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500",attrs:{to:"/blog/".concat(r.slug)}},[t._v("\n            Read Blog\n          ")])],1)])])])}))],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center mb-6"},[t("h1",{staticClass:"text-4xl font-bold text-gray-900 dark:text-white ml-5"},[this._v("Posts")])])}],!1,null,"30f88918",null);e.default=component.exports}}]);