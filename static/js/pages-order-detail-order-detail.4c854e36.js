(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail-order-detail"],{"0166":function(t,e,a){var r=a("d95b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("15c8717b",r,!0,{sourceMap:!1,shadowMode:!1})},"0198":function(t,e,a){"use strict";a.r(e);var r=a("d0ee"),n=a("bc52");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("7231");var o,u=a("f0c5"),d=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"2ad02da5",null,!1,r["a"],o);e["default"]=d.exports},"0b5b":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=r},"0e86":function(t,e,a){"use strict";a.r(e);var r=a("2866"),n=a("7a97");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("3f4a");var o,u=a("f0c5"),d=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"4c99c476",null,!1,r["a"],o);e["default"]=d.exports},"128b":function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},"1bd6":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},getShadowClass:function(t,e,a){var r="";return e&&"white"!=t&&!a&&(r="tui-shadow-"+t),r},getDisabledClass:function(t,e,a){var r="";if(t&&"white"!=e){var n=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";r=a?"tui-dark-disabled-outline":n}return r},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var r="";return t||(r=a?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),r}}};e.default=r},2866:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},"31fa":function(t,e,a){"use strict";var r=a("0166"),n=a.n(r);n.a},"3c28":function(t,e,a){"use strict";(function(t){var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.createContact=e.getNeedDetail=void 0,a("96cf");var n=r(a("1da1")),i=r(a("9150")),o=(r(a("7b1b")),a("2a83")),u=function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(a){var r,n,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","id is"+a," at api/need-detail.js:9"),t("log","getNeedDetail"," at api/need-detail.js:10"),r={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=5,i.default.get("need/"+a,{},r);case 5:if(n=e.sent,n&&n.order&&n.order.length)for(u=0;u<n.order.length;u++)n.order[u].expert_icon=o.picUrl+n.order[u].expert_icon;return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.getNeedDetail=u;var d=function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=3,i.default.post("need/contact",a,r);case 3:return n=e.sent,t("log",n.error_msg," at api/need-detail.js:39"),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.createContact=d}).call(this,a("0de9")["log"])},"3f4a":function(t,e,a){"use strict";var r=a("a958"),n=a.n(r);n.a},5420:function(t,e,a){var r=a("f114");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("7df99cdc",r,!0,{sourceMap:!1,shadowMode:!1})},7231:function(t,e,a){"use strict";var r=a("5420"),n=a.n(r);n.a},7837:function(t,e,a){"use strict";a.r(e);var r=a("128b"),n=a("9b40");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("31fa");var o,u=a("f0c5"),d=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"54473b38",null,!1,r["a"],o);e["default"]=d.exports},"7a97":function(t,e,a){"use strict";a.r(e);var r=a("1bd6"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},8957:function(t,e,a){"use strict";(function(t){var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=r(a("1da1")),i=r(a("5530")),o=a("26cb"),u=a("c589"),d=a("3c28"),c={components:{},data:function(){return{item:{need:{}}}},onLoad:function(e){t("log","data should be:"+e+" and id should be:"+e.id," at pages/order-detail/order-detail.vue:71");try{this.initData(e.id)}catch(a){}},onShow:function(t){try{this.initData(t.id)}catch(e){}},onNavigationBarButtonTap:function(t){},onPullDownRefresh:function(){this.initData(this.item.order_id)},computed:(0,i.default)({},(0,o.mapState)(["userInfo"])),methods:{initData:function(e){var a=this;return(0,n.default)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t("log",e," at pages/order-detail/order-detail.vue:96"),!e){r.next=23;break}return uni.setNavigationBarTitle({title:"订单详情"}),r.next=5,(0,u.getOrderDetail)(e);case 5:n=r.sent,a.item=n,r.t0=n.state,r.next=0===r.t0?10:1===r.t0?12:2===r.t0?14:3===r.t0?16:18;break;case 10:return a.item.state="待接受",r.abrupt("break",20);case 12:return a.item.state="正在合作中",r.abrupt("break",20);case 14:return a.item.state="已拒绝",r.abrupt("break",20);case 16:return a.item.state="已结束",r.abrupt("break",20);case 18:return a.item.state="未知状态",r.abrupt("break",20);case 20:n.end_time||(a.item.end_time="未结束"),r.next=24;break;case 23:t("log",e," at pages/order-detail/order-detail.vue:125");case 24:uni.stopPullDownRefresh();case 25:case"end":return r.stop()}}),r)})))()},goToSpace:function(e){t("log","jumpspace"+e," at pages/order-detail/order-detail.vue:130"),uni.navigateTo({url:"../user-space/user-space?uid="+e})},goToNeed:function(e){t("log","jumpneed"+e," at pages/order-detail/order-detail.vue:134"),uni.navigateTo({url:"../need-detail/detail?id="+e})},contact:function(t){var e={expert_id:this.item.expert_id,enterprise_id:this.item.need.enterprise_id,need_id:this.item.need.need_id};(0,d.createContact)(e),uni.navigateTo({url:"../user-chat/user-chat?fid="+t})}}};e.default=c}).call(this,a("0de9")["log"])},"9b40":function(t,e,a){"use strict";a.r(e);var r=a("0b5b"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},a958:function(t,e,a){var r=a("cada");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("486409af",r,!0,{sourceMap:!1,shadowMode:!1})},bc52:function(t,e,a){"use strict";a.r(e);var r=a("8957"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},c589:function(t,e,a){"use strict";(function(t){var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.needToOrderlist=e.getOrderDetail=void 0,a("96cf");var n=r(a("1da1")),i=r(a("9150")),o=(r(a("7b1b")),a("2a83"),function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","getOrderDetail"," at api/order-detail.js:9"),r={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=4,i.default.get("order/"+a,{},r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());e.getOrderDetail=o;var u=function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","needToOrderlist"," at api/order-detail.js:20"),r={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=4,i.default.get("need/"+a+"/order",{},r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.needToOrderlist=u}).call(this,a("0de9")["log"])},cada:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'.tui-btn-primary[data-v-4c99c476]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-4c99c476]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-4c99c476]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-4c99c476]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-4c99c476]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-4c99c476]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-4c99c476]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-4c99c476]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-4c99c476]{background:#f7f7f9!important}.tui-black-hover[data-v-4c99c476]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-4c99c476]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-4c99c476]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-4c99c476]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-4c99c476]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-4c99c476]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-4c99c476]{opacity:.5!important}.tui-gray-disabled[data-v-4c99c476]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-4c99c476]{opacity:.5}.tui-primary-hover[data-v-4c99c476]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-4c99c476]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-4c99c476]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-4c99c476]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-4c99c476]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-4c99c476]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-4c99c476]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-4c99c476]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-4c99c476]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-4c99c476]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-4c99c476]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-4c99c476]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-4c99c476]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-4c99c476]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-4c99c476]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-4c99c476]{background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-4c99c476]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-4c99c476]{background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-4c99c476]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-4c99c476]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-4c99c476]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-4c99c476]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-4c99c476]::after{border:1px solid #fff!important}.tui-black-outline[data-v-4c99c476]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-4c99c476]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-4c99c476]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-4c99c476]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-4c99c476]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-4c99c476]::after{border-radius:0}.tui-outline-rightAngle[data-v-4c99c476]::after{border-radius:0}',""]),t.exports=e},d0ee:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var r={tuiListCell:a("7837").default,tuiIcon:a("01c2").default,tuiButton:a("0e86").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("tui-list-cell",{attrs:{size:40,hover:!1}},[a("tui-icon",{attrs:{name:"notice",size:40,unit:"rpx",margin:"60",color:"#ff5500"}}),t._v("订单状态：")],1),a("tui-list-cell",{staticClass:"cell",attrs:{size:30,hover:!1,backgroundColor:"#d3d3d3"}},[t._v(t._s(t.item.state))]),a("tui-list-cell",{attrs:{size:40,hover:!1}},[a("tui-icon",{attrs:{name:"alarm",size:40,unit:"rpx",margin:"60"}}),t._v("订单创建时间：")],1),a("tui-list-cell",{staticClass:"cell",attrs:{size:30,hover:!1,backgroundColor:"#d3d3d3"}},[t._v(t._s(t.item.create_time))]),a("tui-list-cell",{attrs:{size:40,hover:!1}},[a("tui-icon",{attrs:{name:"alarm-fill",size:40,unit:"rpx",margin:"60"}}),t._v("订单结束时间：")],1),a("tui-list-cell",{staticClass:"cell",attrs:{size:30,hover:!1,backgroundColor:"#d3d3d3"}},[t._v(t._s(t.item.end_time))]),a("tui-list-cell",{attrs:{size:40,hover:!0,arrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToSpace(t.item.expert_id)}}},[a("tui-icon",{attrs:{name:"people",size:40,unit:"rpx",margin:"60",color:"#aa00ff"}}),t._v("专家名称："+t._s(t.item.expert_name))],1),a("tui-list-cell",{attrs:{size:40,hover:!0,arrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToSpace(t.item.need.enterprise_id)}}},[a("tui-icon",{attrs:{name:"people",size:40,unit:"rpx",margin:"60",color:"#ff0000"}}),t._v("企业名称："+t._s(t.item.need.enterprise_name))],1),a("tui-list-cell",{attrs:{size:40,hover:!0,arrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToNeed(t.item.need.need_id)}}},[a("tui-icon",{attrs:{name:"nodata",size:40,unit:"rpx",margin:"60",color:"#65bdff"}}),t._v("需求详情："+t._s(t.item.need.title))],1),a("tui-button",{directives:[{name:"show",rawName:"v-show",value:4==t.userInfo.type,expression:"userInfo.type==4"}],attrs:{type:"green"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contact(t.item.need.enterprise_id)}}},[t._v("联系企业")]),a("tui-button",{directives:[{name:"show",rawName:"v-show",value:5==t.userInfo.type,expression:"userInfo.type==5"}],attrs:{type:"green"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contact(t.item.expert_id)}}},[t._v("联系专家")])],1)},i=[]},d95b:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'.tui-list-cell[data-v-54473b38]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-54473b38]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-54473b38]{background-color:#f1f1f1!important}.tui-list-cell[data-v-54473b38]::after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-54473b38]::after{left:%?30?%!important}.tui-line-right[data-v-54473b38]::after{right:%?30?%!important}.tui-cell-unlined[data-v-54473b38]::after{border-bottom:0!important}.tui-cell-arrow[data-v-54473b38]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-54473b38]::before{right:0!important}.tui-arrow-gray[data-v-54473b38]::before{border-color:#666!important}.tui-arrow-white[data-v-54473b38]::before{border-color:#fff!important}.tui-arrow-warning[data-v-54473b38]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-54473b38]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-54473b38]::before{border-color:#eb0909!important}',""]),t.exports=e},f114:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-2ad02da5]{margin:0 auto}',""]),t.exports=e}}]);