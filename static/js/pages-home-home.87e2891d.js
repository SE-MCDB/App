(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0477":function(t,e,n){var i=n("3271");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3714ab51",i,!0,{sourceMap:!1,shadowMode:!1})},"0590":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getUserProfile=void 0,n("96cf");var a=i(n("1da1")),o=i(n("4622")),r=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={Authorization:"Bearer "+uni.getStorageSync("token")},t.next=3,o.default.get("user/profile",{},e);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.getUserProfile=r},"0aaa":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"home-info u-f-ac animated fadeIn fast"},[n("v-uni-image",{attrs:{src:t.homeinfo.userpic,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",{staticClass:"u-f1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToSpace.apply(void 0,arguments)}}},[n("v-uni-view",[t._v(t._s(t.homeinfo.username))]),"4"==t.homeinfo.type?[n("v-uni-view",[t._v("专家用户")])]:"5"==t.homeinfo.type?[n("v-uni-view",[t._v("企业用户")])]:"1"==t.homeinfo.type?[n("v-uni-view",[t._v("专家身份认证中")])]:"2"==t.homeinfo.type?[n("v-uni-view",[t._v("企业身份认证中")])]:"3"==t.homeinfo.type?[n("v-uni-view",[t._v("封禁中")])]:[n("v-uni-view",[t._v("普通用户")])],n("v-uni-view",[t._v(t._s(t.homeinfo.email))])],2),n("v-uni-view",{staticClass:"icon iconfont icon-jinru"}),"5"==t.homeinfo.type?[n("v-uni-view",{staticClass:"home-info u-f-ac animated fadeIn fast",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openEnterpriseCertificate.apply(void 0,arguments)}}},[t._v("企业详情编辑"),n("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1)]:"4"==t.homeinfo.type?[n("v-uni-view",{staticClass:"home-info u-f-ac animated fadeIn fast",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openExpertCertificate.apply(void 0,arguments)}}},[t._v("专家详情编辑"),n("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1)]:t._e()],2)},o=[]},"0f19":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{item:Object,index:Number,userInfo:Object},methods:{clickevent:function(){switch(this.item.clicktype){case"navigateTo":this.item.url&&uni.navigateTo({url:this.item.url});break;case"switchTab":this.item.url&&uni.switchTab({url:this.item.url});break;case"showImage":uni.previewImage({urls:["../../static/images/shit/dashangimg.jpg"],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}}});break;case"contactme":uni.previewImage({urls:["../../static/images/shit/contactme.jpg"],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}}});break;case"clear":uni.showModal({title:"提示",content:"是否要清除缓存？",confirmText:"立刻清除",success:function(t){t.confirm&&(uni.clearStorage(),uni.showToast({title:"清除缓存成功！"}))}});break}}}};e.default=i},"233c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"other-login u-f-ac"},[t._l(t.providerList,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"u-f-ajc u-f1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tologin(e)}}},[n("v-uni-view",{staticClass:"icon iconfont u-f-ajc",class:["icon-"+e.icon]})],1)]}))],2)},o=[]},"25f6c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"home-list-item u-f-ac u-f-jsb animated fadeIn fast",attrs:{"hover-class":"home-list-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-f-ac"},[t.item.icon?n("v-uni-view",{staticClass:"icon iconfont",class:["icon-"+t.item.icon]}):t._e(),t._v(t._s(t.item.name))],1),n("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1)},o=[]},2923:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-popup-share"},[n("v-uni-view",{staticClass:"uni-share-title"},[n("v-uni-text",{staticClass:"uni-share-title-text"},[t._v(t._s(t.shareTitleText))])],1),n("v-uni-view",{staticClass:"uni-share-content"},[n("v-uni-view",{staticClass:"uni-share-content-box"},t._l(t.bottomData,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-share-content-item",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.select(e,i)}}},[n("v-uni-image",{staticClass:"uni-share-image",attrs:{src:e.icon,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"uni-share-text"},[t._v(t._s(e.text))])],1)})),1)],1),n("v-uni-view",{staticClass:"uni-share-button-box"},[n("v-uni-button",{staticClass:"uni-share-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))])],1)],1)},o=[]},"2dfe":function(t,e,n){"use strict";n.r(e);var i=n("c929"),a=n("685d");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("575b");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"6fe79af6",null,!1,i["a"],r);e["default"]=u.exports},"2ff6":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d077")),o=i(n("d38c")),r=i(n("dbbc")),c={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};e.default=c},"30fe":function(t,e,n){"use strict";n.r(e);var i=n("785d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},3271:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup-share[data-v-161ced10]{background-color:#fff;border-top-left-radius:11px;border-top-right-radius:11px}.uni-share-title[data-v-161ced10]{display:flex;flex-direction:row;align-items:center;justify-content:center;height:40px}.uni-share-title-text[data-v-161ced10]{font-size:14px;color:#666}.uni-share-content[data-v-161ced10]{display:flex;flex-direction:row;justify-content:center;padding-top:10px}.uni-share-content-box[data-v-161ced10]{display:flex;flex-direction:row;flex-wrap:wrap;width:360px}.uni-share-content-item[data-v-161ced10]{width:90px;display:flex;flex-direction:column;justify-content:center;padding:10px 0;align-items:center}.uni-share-content-item[data-v-161ced10]:active{background-color:#f5f5f5}.uni-share-image[data-v-161ced10]{width:30px;height:30px}.uni-share-text[data-v-161ced10]{margin-top:10px;font-size:14px;color:#3b4144}.uni-share-button-box[data-v-161ced10]{display:flex;flex-direction:row;padding:10px 15px}.uni-share-button[data-v-161ced10]{flex:1;border-radius:50px;color:#666;font-size:16px}.uni-share-button[data-v-161ced10]::after{border-radius:50px}',""]),t.exports=e},"387a":function(t,e,n){"use strict";n.r(e);var i=n("407f"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3a92":function(t,e,n){"use strict";var i=n("5832"),a=n.n(i);a.a},"407f":function(t,e,n){"use strict";var i=n("4ea4");n("4de4"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("5530")),r=n("26cb"),c={data:function(){return{providerList:[]}},created:function(){this.getLoginAuth()},onReady:function(){},methods:(0,o.default)((0,o.default)({},(0,r.mapMutations)(["setUserInfo"])),{},{getLoginAuth:function(){var t=this;uni.getProvider({service:"oauth",success:function(e){t.providerList=e.provider.map((function(t){var e="",n="";switch(t){case"weixin":e="微信登录",n="weixin";break;case"qq":e="QQ登录",n="QQ";break;case"sinaweibo":e="新浪微博登录",n="xinlangweibo";break}return{name:e,icon:n,id:t}})),t.providerList=t.providerList.filter((function(t,e){return""!=t.icon}))},fail:function(t){console.log("获取登录通道失败",t)}})},tologin:function(t){var e=this;console.log(t.id),uni.login({provider:t.id,success:function(n){uni.getUserInfo({provider:t.id,success:function(){var n=(0,a.default)(regeneratorRuntime.mark((function n(i){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={},"qq"==t.id&&(a={userName:i.userInfo.nickName,openId:i.userInfo.openId,gender:"男"==i.userInfo.gender?0:1,authorUrl:i.userInfo.figureurl_qq_2}),"weixin"==t.id&&(a={userName:i.userInfo.nickName,openId:i.userInfo.openId,gender:1==i.userInfo.gender?0:1,authorUrl:i.userInfo.avatarUrl}),"sinaweibo"==t.id&&(a={userName:i.userInfo.nickName,openId:i.userInfo.id,gender:"m"==i.userInfo.gender?0:1,authorUrl:i.userInfo.cover_image_phone}),n.next=6,e.$http.post("user/auth/login",a);case 6:o=n.sent,o.status>=400&&uni.showToast({title:o.massage,icon:"none"});try{e.setUserInfo(o.data.userInfo),uni.setStorageSync("userInfo",JSON.stringify(o.data.userInfo)),uni.setStorageSync("token",o.data.token),e.$emit("goToToHome")}catch(r){}case 9:case"end":return n.stop()}}),n)})));function i(t){return n.apply(this,arguments)}return i}()}),console.log("登录成功，保存到本地存储，修改当前用户登录状态")},fail:function(t){uni.showToast({title:"三方登录失败!",icon:"none"}),console.log("login fail:",t)}})}})};e.default=c},"494c":function(t,e,n){"use strict";var i=n("0477"),a=n.n(i);a.a},"4c2b":function(t,e,n){"use strict";n.r(e);var i=n("0f19"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},5194:function(t,e,n){"use strict";var i=n("a5e2"),a=n.n(i);a.a},"54fb":function(t,e,n){"use strict";n.r(e);var i=n("c5cc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"575b":function(t,e,n){"use strict";var i=n("ef04"),a=n.n(i);a.a},5832:function(t,e,n){var i=n("943f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("05b9e560",i,!0,{sourceMap:!1,shadowMode:!1})},"5bc1":function(t,e,n){"use strict";n.r(e);var i=n("25f6c"),a=n("4c2b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b01b");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0410be5d",null,!1,i["a"],r);e["default"]=u.exports},"685d":function(t,e,n){"use strict";n.r(e);var i=n("f42e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6af7":function(t,e,n){var i=n("e209");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("029edc48",i,!0,{sourceMap:!1,shadowMode:!1})},"6b6d":function(t,e,n){var i=n("8fb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("af7469d6",i,!0,{sourceMap:!1,shadowMode:!1})},7596:function(t,e,n){var i=n("9e01");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7cdf17c2",i,!0,{sourceMap:!1,shadowMode:!1})},"785d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{homedata:Array},methods:{goToInfo:function(t){this.$emit("goToSpace",t)}}};e.default=i},8370:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 公共按钮 */.user-set-btn[data-v-6fe79af6]{width:100%;margin:%?20?% 0;background:#ffe933!important;border:0!important;color:#333!important}.user-set-btn-disable[data-v-6fe79af6]{background:#f4f4f4!important;border:%?1?% solid #eee!important;color:#909090!important}.body[data-v-6fe79af6]{padding:0 %?20?%!important}.common-input[data-v-6fe79af6]{font-size:%?30?%;border-bottom:%?1?% solid #f4f4f4}.yanse[data-v-6fe79af6]{color:red}.home-list[data-v-6fe79af6]{padding:%?20?%}.home-adv[data-v-6fe79af6]{padding:%?20?%}.home-adv > uni-image[data-v-6fe79af6]{border-radius:%?20?%;height:%?150?%}.guanggao[data-v-6fe79af6]{width:100%}',""]),t.exports=e},"86ba":function(t,e,n){"use strict";n.r(e);var i=n("233c"),a=n("387a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3a92");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"41c9abe6",null,!1,i["a"],r);e["default"]=u.exports},"8fb6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".home-info[data-v-4eff5ab5]{padding:%?20?% %?40?%}.home-info>uni-image[data-v-4eff5ab5]{flex-shrink:0;width:%?100?%!important;height:%?100?%!important;border-radius:100%;margin-right:%?15?%}.home-info>uni-view:first-of-type>uni-view[data-v-4eff5ab5]:first-child{font-size:%?32?%}.home-info>uni-view:first-of-type>uni-view[data-v-4eff5ab5]:nth-of-type(2){font-size:%?26?%;color:#0a98d5}.home-info>uni-view:first-of-type>uni-view[data-v-4eff5ab5]:last-child{color:#bbb}.home-info>uni-view[data-v-4eff5ab5]:last-of-type{height:100%}",""]),t.exports=e},9257:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.homedata?n("v-uni-view",{staticClass:"home-data u-f-ac animated fadeIn fast"},[t._l(t.homedata,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"u-f1 u-f-ajc u-f-column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToInfo(i)}}},[n("v-uni-view",[t._v(t._s(e.num))]),t._v(t._s(e.name))],1)]}))],2):n("v-uni-view",{staticClass:"home-data u-f-ac animated fadeIn fast"},[[n("v-uni-view",{staticClass:"u-f1 u-f-ajc u-f-column"},[n("v-uni-view",[t._v("暂无用户交流信息")])],1)]],2)},o=[]},"943f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".other-login[data-v-41c9abe6]{padding:%?20?% %?80?%}.other-login>uni-view>uni-view[data-v-41c9abe6]{width:%?100?%;height:%?100?%;border-radius:100%;font-size:%?55?%;color:#fff}.other-login .icon-QQ[data-v-41c9abe6]{background:#2caefc}.other-login .icon-weixin[data-v-41c9abe6]{background:#2bd19b}.other-login .icon-xinlangweibo[data-v-41c9abe6]{background:#fc7729}",""]),t.exports=e},"94bd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},"95c9":function(t,e,n){"use strict";n.r(e);var i=n("99bd"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"99bd":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("eb32")),o=n("37dc"),r=i(n("2ff6")),c=(0,o.initVueI18n)(r.default),u=c.t,s={name:"UniPopupShare",mixins:[a.default],emits:["select"],props:{title:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:function(){return{bottomData:[{text:"微信",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c2b17470-50be-11eb-b680-7980c8a877b8.png",name:"wx"},{text:"支付宝",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/d684ae40-50be-11eb-8ff1-d5dcf8779628.png",name:"wx"},{text:"QQ",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/e7a79520-50be-11eb-b997-9918a5dda011.png",name:"qq"},{text:"新浪",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/0dacdbe0-50bf-11eb-8ff1-d5dcf8779628.png",name:"sina"}]}},created:function(){},computed:{cancelText:function(){return u("uni-popup.cancel")},shareTitleText:function(){return this.title||u("uni-popup.shareTitle")}},methods:{select:function(t,e){uni.showToast({title:"分享成功！",duration:500}),this.close()},close:function(){this.beforeClose||this.popup.close()}}};e.default=s},"9e01":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".home-data[data-v-5c441b76]{padding:%?20?% %?40?%}.home-data>uni-view[data-v-5c441b76]{color:#989898}.home-data>uni-view>uni-view[data-v-5c441b76]{font-size:%?32?%;color:#333}",""]),t.exports=e},a5e2:function(t,e,n){var i=n("acf7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("711faa56",i,!0,{sourceMap:!1,shadowMode:!1})},acf7:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.tui-btn-primary[data-v-4c99c476]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-4c99c476]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-4c99c476]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-4c99c476]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-4c99c476]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-4c99c476]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-4c99c476]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-4c99c476]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-4c99c476]{background:#f7f7f9!important}.tui-black-hover[data-v-4c99c476]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-4c99c476]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-4c99c476]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-4c99c476]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-4c99c476]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-4c99c476]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-4c99c476]{opacity:.5!important}.tui-gray-disabled[data-v-4c99c476]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-4c99c476]{opacity:.5}.tui-primary-hover[data-v-4c99c476]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-4c99c476]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-4c99c476]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-4c99c476]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-4c99c476]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-4c99c476]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-4c99c476]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-4c99c476]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-4c99c476]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-4c99c476]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-4c99c476]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-4c99c476]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-4c99c476]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-4c99c476]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-4c99c476]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-4c99c476]{background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-4c99c476]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-4c99c476]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-4c99c476]{background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-4c99c476]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-4c99c476]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-4c99c476]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-4c99c476]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-4c99c476]::after{border:1px solid #fff!important}.tui-black-outline[data-v-4c99c476]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-4c99c476]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-4c99c476]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-4c99c476]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-4c99c476]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-4c99c476]::after{border-radius:0}.tui-outline-rightAngle[data-v-4c99c476]::after{border-radius:0}',""]),t.exports=e},b01b:function(t,e,n){"use strict";var i=n("6af7"),a=n.n(i);a.a},b0a6:function(t,e,n){"use strict";var i=n("7596"),a=n.n(i);a.a},bd4c:function(t,e,n){"use strict";var i=n("6b6d"),a=n.n(i);a.a},bff5:function(t,e,n){"use strict";n.r(e);var i=n("94bd"),a=n("d3a2");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5194");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4c99c476",null,!1,i["a"],r);e["default"]=u.exports},c3dc:function(t,e,n){"use strict";n.r(e);var i=n("2923"),a=n("95c9");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("494c");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"161ced10",null,!1,i["a"],r);e["default"]=u.exports},c5cc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{homeinfo:Object},methods:{goToSpace:function(){uni.navigateTo({url:"../user-set-userinfo/user-set-userinfo"})},openEnterpriseCertificate:function(){uni.navigateTo({url:"../certificate-enterprise/certificate-enterprise"})},openExpertCertificate:function(){uni.navigateTo({url:"../certificate-expert/certificate-expert"})}}};e.default=i},c929:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={tuiButton:n("bff5").default,tuiIcon:n("3e6d").default,uniSection:n("455d").default,uniList:n("e3e9").default,uniListItem:n("0b5b").default,uniPopup:n("d071").default,uniPopupShare:n("c3dc").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.userInfo&&!t.userInfo.id?[n("v-uni-view",{staticClass:"u-f-ajc"},[t._v("登陆PaperDaily，体验更多功能")]),n("v-uni-view",{staticClass:"u-f-ajc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openLogin.apply(void 0,arguments)}}},[t._v("账号密码登陆"),n("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1)]:["0"==t.userInfo.type?[n("v-uni-view",{staticClass:"u-f-ajc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openLogin.apply(void 0,arguments)}}},[t._v("您目前是普通用户，认证后可体验更多功能")]),n("tui-button",{attrs:{size:30,height:"70rpx",plain:!0,type:"blue"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openExpertCertificate.apply(void 0,arguments)}}},[t._v("专家认证"),n("tui-icon",{attrs:{name:"arrowright",size:30,bold:!0}})],1),n("tui-button",{attrs:{size:30,height:"70rpx",plain:!0,type:"green"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openEnterpriseCertificate.apply(void 0,arguments)}}},[t._v("企业认证"),n("tui-icon",{attrs:{name:"arrowright",size:30,bold:!0}})],1)]:t._e(),n("home-info",{attrs:{homeinfo:t.homeinfo}}),n("home-data",{attrs:{homedata:t.homedata},on:{goToSpace:function(e){arguments[0]=e=t.$handleEvent(e),t.goToSpace.apply(void 0,arguments)}}}),n("uni-section",{attrs:{title:"探索",type:"circle"}},[n("uni-list",{attrs:{border:!1}},[4==t.userInfo.type?n("uni-list-item",{attrs:{border:!1,"show-extra-icon":!0,clickable:!0,"extra-icon":t.rateIcon,title:"最近收到的评价",link:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRate.apply(void 0,arguments)}}}):5==t.userInfo.type?n("uni-list-item",{attrs:{border:!1,"show-extra-icon":!0,clickable:!0,"extra-icon":t.rateIcon,title:"最近评价",link:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRate.apply(void 0,arguments)}}}):t._e(),n("uni-list-item",{attrs:{border:!1,"show-extra-icon":!0,clickable:!0,link:!0,"extra-icon":t.inviteIcon,title:"邀请好友享福利",rightText:"立享首单补贴"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLink.apply(void 0,arguments)}}}),n("uni-list-item",{attrs:{border:!1,"show-extra-icon":!0,clickable:!0,"extra-icon":t.feedbackIcon,title:"帮助与反馈",link:!0,to:"/pages/feedback/feedback"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}}),n("uni-list-item",{attrs:{border:!1,"show-extra-icon":!0,clickable:!0,"extra-icon":t.aboutIcon,title:"关于",link:!0,to:"/pages/aboutus/aboutus"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)],1),n("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"user-set-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showActive.apply(void 0,arguments)}}},[t._v("退出登陆")]),n("uni-popup",{ref:"shareLink",attrs:{type:"share"}},[n("uni-popup-share",{attrs:{title:"分享到"},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.select.apply(void 0,arguments)}}})],1)]],2)},o=[]},d077:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},d38c:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},d3a2:function(t,e,n){"use strict";n.r(e);var i=n("ec49"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},dbbc:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},dd98:function(t,e,n){"use strict";n.r(e);var i=n("0aaa"),a=n("54fb");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("bd4c");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4eff5ab5",null,!1,i["a"],r);e["default"]=u.exports},e209:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".home-list-item[data-v-0410be5d]{padding:%?20?%;border-top:%?1?% solid #f4f4f4;border-bottom:%?1?% solid #f4f4f4}.home-list-item>uni-view[data-v-0410be5d]:first-child{color:#333}.home-list-item>uni-view:first-child>uni-view[data-v-0410be5d]{margin-right:%?10?%}.home-list-item>uni-view[data-v-0410be5d]:last-child{color:#ccc}.home-list-hover[data-v-0410be5d]{background:#f4f4f4}",""]),t.exports=e},eb32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i},ec49:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},getShadowClass:function(t,e,n){var i="";return e&&"white"!=t&&!n&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,e,n){var i="";if(t&&"white"!=e){var a=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=n?"tui-dark-disabled-outline":a}return i},getShapeClass:function(t,e){var n="";return"circle"==t?n=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(n=e?"tui-outline-rightAngle":"tui-rightAngle"),n},getHoverClass:function(t,e,n){var i="";return t||(i=n?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),i}}};e.default=i},ef04:function(t,e,n){var i=n("8370");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("c8fabc38",i,!0,{sourceMap:!1,shadowMode:!1})},f42e:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("5530")),r=i(n("5bc1")),c=i(n("dd98")),u=i(n("86ba")),s=i(n("fbf9")),f=n("0590"),d=(n("13b4"),n("b325"),n("26cb")),l={components:{homeListItem:r.default,homeInfo:c.default,otherLogin:u.default,homeData:s.default},computed:(0,o.default)({},(0,d.mapState)(["userInfo"])),onShow:function(){console.log(this.userInfo.email),this.userInfo.id?(this.homeinfo.userpic=this.userInfo.userpic,this.homeinfo.username=this.userInfo.username,this.homeinfo.email=this.userInfo.email,this.homeinfo.type=this.userInfo.type,this.islogin||this.initDat()):(this.homedata[0].num=0,this.homedata[1].num=0,this.homedata[2].num=0,this.islogin=!1)},onLoad:function(){},onReady:function(){this.initDat()},created:function(){},mounted:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initDat(),t.userInfo.id?(t.homeinfo.userpic=t.userInfo.userpic,t.homeinfo.username=t.userInfo.username,t.homeinfo.email=t.userInfo.email,t.homeinfo.type=t.userInfo.type,t.islogin||t.initDat()):(t.homedata[0].num=0,t.homedata[1].num=0,t.homedata[2].num=0,t.islogin=!1);case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{rateUrl:"",islogin:!1,homeinfo:{userpic:this.userInfo?this.userInfo.userpic:"",username:this.userInfo?this.userInfo.username:"",totalnum:0,todaynum:0,type:0},homedata:[{name:"主页",num:0},{name:"评论",num:0},{name:"收藏",num:0}],inviteIcon:{color:"#ffb204",size:"22",type:"gift-filled"},feedbackIcon:{color:"#ffb204",size:"22",type:"help-filled"},aboutIcon:{color:"#ffb204",size:"22",type:"gear"},rateIcon:{color:"#ffb204",size:"22",type:"chat"}}},onPullDownRefresh:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initDat();case 2:uni.stopPullDownRefresh();case 3:case"end":return e.stop()}}),e)})))()},onNavigationBarButtonTap:function(t){this.userInfo.id?0===t.index&&uni.navigateTo({url:"../user-set/user-set"}):uni.navigateTo({url:"../login/login"})},methods:(0,o.default)((0,o.default)({},(0,d.mapMutations)(["setUserInfo"])),{},{openLogin:function(){uni.navigateTo({url:"../login/login"})},openEnterpriseCertificate:function(){uni.navigateTo({url:"../certificate-enterprise/certificate-enterprise?uid="+this.userInfo.id})},openExpertCertificate:function(){uni.navigateTo({url:"../certificate-expert/certificate-expert?uid="+this.userInfo.id})},initDat:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.userInfo||!t.userInfo.id){e.next=17;break}return e.next=3,(0,f.getUserProfile)();case 3:n=e.sent,i=t.userInfo,i.type=n.type,t.setUserInfo(i),t.homeinfo.total_like=n.total_like,t.homeinfo.total_post=n.total_post,t.homeinfo.total_collect=n.total_mycollect,t.homeinfo.email=n.email,t.homeinfo.type=n.type,t.homedata[0].num=n.total_post,t.homedata[1].num=n.total_comment,t.homedata[2].num=n.total_mycollect,t.islogin=!0,t.rateUrl="/pages/my-evaluations/my-evaluations?id="+t.userInfo.id;case 17:case"end":return e.stop()}}),e)})))()},print:function(){console.log(this.userInfo.id)},goToSpace:function(t){switch(t){case 0:this.$http.href("../../pages/user-space/user-space?uid="+this.userInfo.id);break;case 1:this.$http.href("../../pages/user-comment/user-comment?uid="+this.userInfo.id);break;case 2:this.$http.href("../../pages/user-collect/user-collect?uid="+this.userInfo.id);break}},onClick:function(){},clickLink:function(){this.$refs.shareLink.open("center")},clickRate:function(){uni.navigateTo({url:this.rateUrl})}})};e.default=l},fbf9:function(t,e,n){"use strict";n.r(e);var i=n("9257"),a=n("30fe");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b0a6");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"5c441b76",null,!1,i["a"],r);e["default"]=u.exports}}]);