(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(t,e,n){"use strict";var o={computed:{islogin:function(){return this.$store.state.islogin}},methods:{login:function(){this.$store.commit("login")},logout:function(){this.$store.commit("logout")}}},r=n(28),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("section",[n("h1",[t._v("ログイン状態")]),t._v(" "),n("p",[t._v(t._s(t.islogin))]),t._v(" "),n("button",{on:{click:function(e){return t.login()}}},[t._v("ログイン")]),t._v(" "),n("button",{on:{click:function(e){return t.logout()}}},[t._v("ログアウト")])])])}),[],!1,null,"6f48ab47",null);e.a=component.exports},164:function(t,e,n){"use strict";var o=n(28),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nuxt-link",{attrs:{to:"/"}},[t._v("TOP")]),t._v(" "),n("nuxt-link",{attrs:{to:"/page1"}},[t._v("Page1")]),t._v(" "),n("nuxt-link",{attrs:{to:"/page2"}},[t._v("Page2")]),t._v(" "),n("nuxt-link",{attrs:{to:"/page3"}},[t._v("Page3")])],1)}),[],!1,null,null,null);e.a=component.exports},171:function(t,e,n){"use strict";n.r(e);var o=n(163),r={components:{MyHeader:n(164).a,MyLogin:o.a}},c=n(28),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-header"),t._v(" "),t._m(0),t._v(" "),n("my-login")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("セクション1")]),t._v(" "),n("p",[t._v("texttexttexttexttexttexttexttexttexttexttexttext")])])}],!1,null,"1f6a8111",null);e.default=component.exports}}]);