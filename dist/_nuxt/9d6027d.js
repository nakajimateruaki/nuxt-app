(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(t,n,e){"use strict";var o={computed:{islogin:function(){return this.$store.state.islogin}},methods:{login:function(){this.$store.commit("login")},logout:function(){this.$store.commit("logout")}}},r=e(28),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("section",[e("h1",[t._v("ログイン状態")]),t._v(" "),e("p",[t._v(t._s(t.islogin))]),t._v(" "),e("button",{on:{click:function(n){return t.login()}}},[t._v("ログイン")]),t._v(" "),e("button",{on:{click:function(n){return t.logout()}}},[t._v("ログアウト")])])])}),[],!1,null,"6f48ab47",null);n.a=component.exports},164:function(t,n,e){"use strict";var o=e(28),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("nuxt-link",{attrs:{to:"/"}},[t._v("TOP")]),t._v(" "),e("nuxt-link",{attrs:{to:"/page1"}},[t._v("Page1")]),t._v(" "),e("nuxt-link",{attrs:{to:"/page2"}},[t._v("Page2")]),t._v(" "),e("nuxt-link",{attrs:{to:"/page3"}},[t._v("Page3")])],1)}),[],!1,null,null,null);n.a=component.exports},165:function(t,n,e){var content=e(168);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(85).default)("5d6fe6d0",content,!0,{sourceMap:!1})},167:function(t,n,e){"use strict";e(165)},168:function(t,n,e){var o=e(84)(!1);o.push([t.i,"h1[data-v-1e17271f]{background:#eee}",""]),t.exports=o},172:function(t,n,e){"use strict";e.r(n);var o=e(163),r=e(164),c={components:{MyLogin:o.a,MyHeader:r.a}},l=(e(167),e(28)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("my-header"),t._v(" "),t._m(0),t._v(" "),e("my-login")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h1",[t._v("セクション2")]),t._v(" "),e("p",[t._v("さんぷるてきすと")])])}],!1,null,"1e17271f",null);n.default=component.exports}}]);