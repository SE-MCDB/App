(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-edit-need-edit-need"],{"03d8":function(e,t,n){var i=n("739b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5115cfda",i,!0,{sourceMap:!1,shadowMode:!1})},"1e1d":function(e,t,n){"use strict";n.r(t);var i=n("3a25"),a=n("7e8d");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("1e75");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"34a1cb39",null,!1,i["a"],o);t["default"]=s.exports},"1e75":function(e,t,n){"use strict";var i=n("03d8"),a=n.n(i);a.a},"20ce":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.createContact=t.getNeedDetail=void 0,n("96cf");var a=i(n("1da1")),r=i(n("4622")),o=(i(n("46ee")),n("13b4")),u=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("id is"+t),console.log("getNeedDetail"),n={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=5,r.default.get("need/"+t,{},n);case 5:if(i=e.sent,i&&i.order&&i.order.length)for(a=0;a<i.order.length;a++)i.order[a].expert_icon=o.picUrl+i.order[a].expert_icon;return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.getNeedDetail=u;var s=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=3,r.default.post("need/contact",t,n);case 3:return i=e.sent,console.log(i.error_msg),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.createContact=s},"3a25":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniCard:n("be13").default,uniSection:n("455d").default,uniEasyinput:n("ad2f").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"tui-status-bar"},[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-text",{staticClass:"uni-h6"},[e._v("修改需求")])],1)],1),n("v-uni-view",{staticClass:"need-form"},[n("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.update.apply(void 0,arguments)},reset:function(t){arguments[0]=t=e.$handleEvent(t),e.reset.apply(void 0,arguments)}}},[n("uni-section",{attrs:{title:"需求标题",subTitle:"修改您的需求标题",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{focus:!0,placeholder:"请输入内容"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputTitle.apply(void 0,arguments)}},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("uni-section",{attrs:{title:"需求描述",subTitle:"修改您的需求描述",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{type:"textarea",placeholder:"请输入内容"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputDescription.apply(void 0,arguments)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),n("uni-section",{attrs:{title:"需求经费",subTitle:"修改您的需求价格 ( 单位: 万元 ) ",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{type:"digit",placeholder:"单位:万元"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputMoney.apply(void 0,arguments)}},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1),n("uni-section",{attrs:{title:"关键词",subTitle:"请将关键词控制在3个以内",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{placeholder:"请输入一些关键词,以英文分号分开"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputKeyword.apply(void 0,arguments)}},model:{value:e.key_word,callback:function(t){e.key_word=t},expression:"key_word"}})],1),n("uni-section",{attrs:{title:"领域",subTitle:"修改您的需求范畴",type:"line",padding:!0}},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("当前选择")]),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-picker",{attrs:{value:e.index,range:e.field_items},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.inputField.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.field_items[e.index]))])],1)],1)],1)],1)],1),n("uni-section",{attrs:{title:"地址",subTitle:"修改您的需求地址",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{placeholder:"请输入需求地址"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputAddress.apply(void 0,arguments)}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),n("uni-section",{attrs:{title:"紧急程度",subTitle:"修改您的紧急程度",type:"line",padding:!0}}),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.emergencyItems,(function(t,i){return n("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-radio",{attrs:{value:t.value,checked:i===e.emergency}})],1),n("v-uni-view",[e._v(e._s(t.name))])],1)})),1)],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary","form-type":"submit"}},[e._v("更新")])],1)],1)],1)],1)},r=[]},5388:function(e,t,n){"use strict";var i=n("4ea4");n("a4d3"),n("e01a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("5530")),o=n("26cb"),u=n("7b25"),s=n("20ce"),d=i(n("bf22")),c=i(n("11fc")),l=i(n("455d")),p=i(n("3ee5")),f={components:{uniCard:d.default,uniEasyinput:c.default,uniSection:l.default,uniDatetimePicker:p.default},data:function(){return{need_id:"",company_id:"",title:"",description:"",money:"",start_time:"",end_time:"",key_word:"",field:0,address:"",state:0,emergency:"",predict:0,real:0,index:0,field_items:["信息技术","装备制造","新材料","新能源","节能环保","生物医药","科学创意","检验检测","其他"],emergencyItems:[{value:"0",name:"低"},{value:"1",name:"中"},{value:"2",name:"高"}]}},mounted:function(){var e=this;setTimeout((function(){e.datetimesingle=Date.now()-1728e5,e.single="2021-2-12",e.datetimerange=["2021-07-08 0:01:10","2021-08-08 23:59:59"]}),3e3)},computed:(0,r.default)({},(0,o.mapState)(["userInfo"])),onLoad:function(e){this.initData(e.id)},methods:{initData:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,s.getNeedDetail)(e);case 2:i=n.sent,t.company_id=t.userInfo.id,t.need_id=e,t.title=i.title,t.description=i.description,t.money=i.money,t.start_time=i.start_time,t.end_time=i.end_time,t.key_word=i.key_word,t.field=i.field,t.address=i.address,t.emergency=i.emergency,t.index=t.field;case 15:case"end":return n.stop()}}),n)})))()},back:function(){uni.navigateBack()},inputTitle:function(e){this.title=e.detail},inputDescription:function(e){this.description=e.detail},inputMoney:function(e){this.money=e.detail},show:function(e){this.$refs.start_time.show()},changeLogStart:function(e){console.log("----changeStartTime事件:",e)},changeLogEnd:function(e){console.log("----changeEndTime事件:",e)},inputKeyword:function(e){this.key_word=e.detail},inputField:function(e){this.index=e.detail.value,console.log(this.index),this.field=this.index},inputAddress:function(e){this.address=e.detail},inputPredict:function(e){this.predict=e.detail},radioChange:function(e){for(var t=0;t<this.emergencyItems.length;t++)if(this.emergencyItems[t].value===e.detail.value){this.emergency=t;break}},validate:function(e){var t=!0;return""===e.title?(this.$http.toast("请输入需求标题！"),t=!1):""===e.description?(this.$http.toast("请对需求输入具体描述！"),t=!1):""===e.money?(this.$http.toast("请输入资金！"),t=!1):""===e.start_time||""===e.end_time||e.start_time>=e.end_time?(this.$http.toast("请输入正确的时间！"),t=!1):""===e.address?(this.$http.toast("请输入正确的地址！"),t=!1):""===e.emergency&&(this.$http.toast("请评定紧急程度！"),t=!1),t},isKeyword:function(e){var t=/^([\u4e00-\u9fa5])+(\s[\u4e00-\u9fa5])*/;return t.test(e)},update:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,i,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={title:e.title,description:e.description,money:e.money,start_time:e.start_time,end_time:e.end_time,key_word:e.key_word,field:e.field,address:e.address,state:e.state,emergency:e.emergency},i=e.company_id,a=e.need_id,r=e.validate(n),!r){t.next=9;break}return t.next=7,(0,u.editneed)(i,a,n);case 7:o=t.sent,o&&o.code?e.$http.toast("需求更新失败！"):(e.$http.toast("需求更新成功！"),e.back());case 9:case"end":return t.stop()}}),t)})))()}}};t.default=f},"739b":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-34a1cb39]{min-height:%?1000?%}.container .tui-page-title[data-v-34a1cb39]{width:100%;font-size:%?48?%;font-weight:700;color:#333;line-height:%?42?%;padding:%?110?% %?40?% %?40?% %?40?%;box-sizing:border-box}.container .tui-header[data-v-34a1cb39]{width:100%;padding:%?40?%;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.container .tui-form[data-v-34a1cb39]{padding-top:%?50?%}.container .tui-form .thorui-input-title[data-v-34a1cb39]{padding-right:%?10?%;font-size:%?35?%}.container .tui-form .tui-view-input[data-v-34a1cb39]{width:100%;box-sizing:border-box;padding:0 %?40?%}.container .tui-form .tui-view-input .tui-cell-input[data-v-34a1cb39]{width:100%;display:flex;align-items:center;padding-top:%?48?%;padding-bottom:%?16?%}.container .tui-form .tui-view-input .tui-cell-input uni-input[data-v-34a1cb39]{flex:1;padding-left:%?20?%}.container .tui-form .tui-view-input .tui-cell-input .tui-icon-close[data-v-34a1cb39]{margin-left:auto}.container .tui-form .tui-view-input .tui-cell-input .tui-btn-send[data-v-34a1cb39]{width:%?156?%;text-align:right;flex-shrink:0;font-size:%?28?%;color:#5677fc}.container .tui-form .tui-view-input .tui-cell-input .tui-gray[data-v-34a1cb39]{color:#bfbfbf}.container .tui-form .tui-cell-text[data-v-34a1cb39]{width:100%;padding:%?40?% %?30?%;box-sizing:border-box;font-size:%?24?%;color:#999;display:flex;align-items:center}.container .tui-form .tui-cell-text .tui-color-primary[data-v-34a1cb39]{color:#5677fc;padding-left:10px}.container .tui-form .tui-btn-box[data-v-34a1cb39]{width:100%;padding:0 %?30?%;box-sizing:border-box;margin-top:%?80?%}.date-set[data-v-34a1cb39]{background-color:#fff;padding:10px}.emergency-evaluate[data-v-34a1cb39]{margin:%?5?%}uni-button[data-v-34a1cb39]{margin:%?20?%;height:%?70?%;font-size:small}',""]),e.exports=t},"7b25":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.editneed=void 0,n("96cf");var a=i(n("1da1")),r=i(n("4622")),o=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t,n,i){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("company_id is:"+t),console.log("need_id is:"+n),a={Authorization:"Bearer "+uni.getStorageSync("token")},e.next=5,r.default.post("user/"+t+"/need/"+n+"/edit",i,a);case 5:return o=e.sent,console.log("edit result:"+o.code+" "+o),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}();t.editneed=o},"7e8d":function(e,t,n){"use strict";n.r(t);var i=n("5388"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}}]);