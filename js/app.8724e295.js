(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],p=0,f=[];p<c.length;p++)s=c[p],a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Vue-Shopping-Cart/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("shoppingCart")],1)},i=[],s={name:"app"},c=s,o=(n("5c0b"),n("2877")),u=Object(o["a"])(c,a,i,!1,null,null,null),l=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shoppingCart",on:{wheel:function(e){return e.preventDefault(),t.wheel(e)}}},[n("div",{staticClass:"title"},[t._v("DVD Shopping Cart (Vue.js)")]),n("div",{staticClass:"cards",class:{isCartOpen:t.isCartOpen}},t._l(t.movies,function(e,r){return n("div",{key:r,staticClass:"card"},[n("div",{staticClass:"left"},[n("div",{staticClass:"cover",style:t.bgcss(e.cover)})]),n("div",{staticClass:"right"},[n("h2",[t._v(t._s(e.name))]),n("h4",[t._v(t._s(e.type))]),n("p",{domProps:{innerHTML:t._s(e.description)}}),n("div",{staticClass:"price"},[t._v("$"+t._s(e.price))]),n("button",{staticClass:"add",on:{click:function(n){return n.preventDefault(),t.addItem(e,n)}}},[t._v("+ Add to My Cart")])])])}),0),n("div",{staticClass:"fix-control",on:{click:function(e){t.isCartOpen=!t.isCartOpen}}},[n("i",{staticClass:"fas fa-shopping-cart"}),n("span",[t._v(t._s(t.cart.length))])]),n("div",{staticClass:"cartList",class:{isCartOpen:t.isCartOpen}},[n("div",{staticClass:"panel"},[n("div",{staticClass:"closePanel",on:{click:function(e){t.isCartOpen=!t.isCartOpen}}},[n("i",{staticClass:"fas fa-times"})]),n("h2",[t._v("My Shopping Cart List")]),n("ul",[t._l(t.cart,function(e,r){return n("li",{key:r},[n("div",{staticClass:"thumbnail",style:t.bgcss(e.cover)}),n("h3",[t._v("\n            "+t._s(e.name)+"\n            "),n("div",{staticClass:"listRight"},[n("div",{staticClass:"price"},[t._v("$"+t._s(e.price))]),n("div",{staticClass:"remove",on:{click:function(e){return t.cart.splice(r,1)}}},[n("i",{staticClass:"fas fa-trash"})])])])])}),t.cart.length?t._e():n("li",{staticClass:"empty"},[n("h3",[t._v("Your Cart is Empty :(")])])],2),n("div",{staticClass:"totalPrice"},[t._v("\n        Total:\n        "),n("span",[t._v("$"+t._s(t.totalPrice))])])])]),t.currentMovie?n("div",{staticClass:"buybox",style:t.bgcss(t.currentMovie.cover)}):t._e()])},f=[],d=n("bc3a"),v=n.n(d),h=n("109c"),C={data:function(){return{movies:[],cart:[],currentMovie:null,isCartOpen:!1}},created:function(){var t=this;v.a.get("https://awiclass.monoame.com/api/command.php?type=get&name=movies").then(function(e){t.movies=e.data})},methods:{bgcss:function(t){return{"background-image":"url("+t+")","background-position":"center center","background-size":"cover"}},wheel:function(t){h["a"].to(".cards",.8,{left:"+="+2*t.deltaY+"px"})},addItem:function(t,e){var n=this;this.currentMovie=t,this.$nextTick(function(){h["a"].from(".buybox",.8,{left:e.pageX-50,top:e.pageY,opacity:1}),setTimeout(function(){n.cart.push(t)},800)})}},watch:{cart:function(){h["a"].from(".fa-shopping-cart",.3,{scale:.5})}},computed:{totalPrice:function(){return this.cart.map(function(t){return t.price}).reduce(function(t,e){return t+e},0)}}},m=C,b=(n("c219"),Object(o["a"])(m,p,f,!1,null,"5b7ef61e",null)),g=b.exports;r["a"].config.productionTip=!1,r["a"].component("shoppingCart",g),new r["a"]({render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},c219:function(t,e,n){"use strict";var r=n("e393"),a=n.n(r);a.a},e393:function(t,e,n){}});
//# sourceMappingURL=app.8724e295.js.map