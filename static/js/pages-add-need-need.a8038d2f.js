(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add-need-need"],{"1dfd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container .tui-page-title[data-v-1a80f5bc]{width:100%;font-size:%?48?%;font-weight:700;color:#333;line-height:%?42?%;padding:%?110?% %?40?% %?40?% %?40?%;box-sizing:border-box}.container .tui-header[data-v-1a80f5bc]{width:100%;padding:%?40?%;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.container .tui-form[data-v-1a80f5bc]{padding-top:%?50?%}.container .tui-form .thorui-input-title[data-v-1a80f5bc]{padding-right:%?10?%;font-size:%?35?%}.container .tui-form .tui-view-input[data-v-1a80f5bc]{width:100%;box-sizing:border-box;padding:0 %?40?%}.container .tui-form .tui-view-input .tui-cell-input[data-v-1a80f5bc]{width:100%;display:flex;align-items:center;padding-top:%?48?%;padding-bottom:%?16?%}.container .tui-form .tui-view-input .tui-cell-input uni-input[data-v-1a80f5bc]{flex:1;padding-left:%?20?%}.container .tui-form .tui-view-input .tui-cell-input .tui-icon-close[data-v-1a80f5bc]{margin-left:auto}.container .tui-form .tui-view-input .tui-cell-input .tui-btn-send[data-v-1a80f5bc]{width:%?156?%;text-align:right;flex-shrink:0;font-size:%?28?%;color:#5677fc}.container .tui-form .tui-view-input .tui-cell-input .tui-gray[data-v-1a80f5bc]{color:#bfbfbf}.container .tui-form .tui-cell-text[data-v-1a80f5bc]{width:100%;padding:%?40?% %?30?%;box-sizing:border-box;font-size:%?24?%;color:#999;display:flex;align-items:center}.container .tui-form .tui-cell-text .tui-color-primary[data-v-1a80f5bc]{color:#5677fc;padding-left:10px}.container .tui-form .tui-btn-box[data-v-1a80f5bc]{width:100%;padding:0 %?30?%;box-sizing:border-box;margin-top:%?80?%}.date-set[data-v-1a80f5bc]{background-color:#fff;padding:10px}.emergency-evaluate[data-v-1a80f5bc]{margin:%?5?%}uni-button[data-v-1a80f5bc]{margin:%?20?%;height:%?70?%;font-size:small}',""]),t.exports=e},"1f23":function(t,e,n){var i=n("1dfd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6ea011df",i,!0,{sourceMap:!1,shadowMode:!1})},"4c5c":function(t,e,n){"use strict";n.r(e);var i=n("7179"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"570f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniCard:n("be13").default,uniSection:n("455d").default,uniEasyinput:n("ad2f").default,uniDatetimePicker:n("a815").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"tui-status-bar"},[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("需求描述")])],1)],1),n("v-uni-view",{staticClass:"need-form"},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[n("uni-section",{attrs:{title:"需求标题",subTitle:"为您的需求总结一个标题",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{focus:!0,placeholder:"请输入内容"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputTitle.apply(void 0,arguments)}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("uni-section",{attrs:{title:"需求描述",subTitle:"详细描述您的需求",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{type:"textarea",placeholder:"请输入内容"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputDescription.apply(void 0,arguments)}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),n("uni-section",{attrs:{title:"经费",subTitle:"为您的需求标上价格 ( 单位: 万元 ) ",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{type:"digit",placeholder:"单位:万元"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputMoney.apply(void 0,arguments)}},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),n("uni-section",{attrs:{title:"开始日期",subTitle:"请选择需求开始日期",type:"line",padding:!0}},[n("v-uni-view",{staticClass:"date-set"},[n("uni-datetime-picker",{attrs:{type:"datetime"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLogStart.apply(void 0,arguments)}},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}})],1)],1),n("uni-section",{attrs:{title:"结束日期",subTitle:"请选择需求结束日期",type:"line",padding:!0}},[n("v-uni-view",{staticClass:"date-set"},[n("uni-datetime-picker",{attrs:{type:"datetime"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLogEnd.apply(void 0,arguments)}},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1)],1),n("uni-section",{attrs:{title:"关键词",subTitle:"请为您的需求添加几个关键词, 以英文分号分开",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{placeholder:"请输入一些关键词, 以英文分号分开"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputKeyword.apply(void 0,arguments)}},model:{value:t.key_word,callback:function(e){t.key_word=e},expression:"key_word"}})],1),n("uni-section",{attrs:{title:"领域",subTitle:"请为您的需求确定一个领域方向",type:"line",padding:!0}},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-picker",{attrs:{value:t.index,range:t.field_items},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.inputField.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.field_items[t.index]))])],1)],1)],1)],1)],1),n("uni-section",{attrs:{title:"地址",subTitle:"请为您的需求添加地址",type:"line",padding:!0}},[n("uni-easyinput",{attrs:{placeholder:"请输入需求地址"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputAddress.apply(void 0,arguments)}},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),n("uni-section",{attrs:{title:"紧急程度",subTitle:"请为您的需求进行紧急估量",type:"line",padding:!0}}),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.emergencyItems,(function(e,i){return n("v-uni-label",{key:e.value,staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"emergency-evaluate"},[n("v-uni-radio",{attrs:{value:e.value,checked:i===t.emergency}})],1),n("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary","form-type":"submit"}},[t._v("直接发布")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveNeed.apply(void 0,arguments)}}},[t._v("保存")]),n("v-uni-button",{attrs:{type:"default","form-type":"reset"}},[t._v("清除")])],1)],1)],1)],1)},r=[]},7179:function(t,e,n){"use strict";var i=n("4ea4");n("a4d3"),n("e01a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("5530")),s=n("26cb"),o=n("dc0c"),u=i(n("bf22")),d=i(n("11fc")),c=i(n("455d")),l=i(n("3ee5")),p={components:{uniCard:u.default,uniEasyinput:d.default,uniSection:c.default,uniDatetimePicker:l.default},data:function(){return{company_id:"",title:"",description:"",money:"",start_time:"",end_time:"",key_word:"",field:0,address:"",state:0,emergency:"",predict:0,real:0,index:0,field_items:["信息技术","装备制造","新材料","新能源","节能环保","生物医药","科学创意","检验检测","其他"],emergencyItems:[{value:"0",name:"低"},{value:"1",name:"中"},{value:"2",name:"高"}]}},watch:{datetimesingle:function(t){console.log("单选:",this.datetimesingle)},range:function(t){console.log("范围选:",this.range)},datetimerange:function(t){console.log("范围选:",this.datetimerange)}},mounted:function(){var t=this;setTimeout((function(){t.datetimesingle=Date.now()-1728e5,t.single="2021-2-12",t.datetimerange=["2021-07-08 0:01:10","2021-08-08 23:59:59"]}),3e3)},computed:(0,r.default)({},(0,s.mapState)(["userInfo"])),onLoad:function(t){this.company_id=this.userInfo.id,console.log("onLoad in certification "+this.userID)},methods:{back:function(){uni.navigateBack()},inputTitle:function(t){this.title=t.detail},inputDescription:function(t){this.description=t.detail},inputMoney:function(t){this.money=t.detail},show:function(t){this.$refs.start_time.show()},changeLogStart:function(t){console.log("----changeStartTime事件:",t)},changeLogEnd:function(t){console.log("----changeEndTime事件:",t)},inputKeyword:function(t){this.key_word=t.detail},inputField:function(t){this.index=t.detail.value,console.log(this.index),this.field=this.index},inputRegisterCapital:function(t){this.register_capital=t.detail},inputAddress:function(t){this.address=t.detail},inputPredict:function(t){this.predict=t.detail},radioChange:function(t){for(var e=0;e<this.emergencyItems.length;e++)if(this.emergencyItems[e].value===t.detail.value){this.emergency=e;break}},validate:function(t){var e=!0;return""===t.title?(this.$http.toast("请输入需求标题！"),e=!1):""===t.description?(this.$http.toast("请对需求输入具体描述！"),e=!1):""===t.money?(this.$http.toast("请输入资金！"),e=!1):""===t.start_time||""===t.end_time||t.start_time>=t.end_time?(this.$http.toast("请输入正确的时间！"),e=!1):""===t.address?(this.$http.toast("请输入正确的地址！"),e=!1):""===t.emergency&&(this.$http.toast("请评定紧急程度！"),e=!1),e},isKeyword:function(t){var e=/^([\u4e00-\u9fa5])+(\s[\u4e00-\u9fa5])*/;return e.test(t)},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={company_id:t.company_id,title:t.title,description:t.description,money:t.money,start_time:t.start_time,end_time:t.end_time,key_word:t.key_word,field:t.field,address:t.address,state:t.state,emergency:t.emergency,predict:t.predict,real:t.real},i=t.validate(n),!i){e.next=7;break}return e.next=5,(0,o.addneed)(n);case 5:a=e.sent,a&&a.code?t.$http.toast("需求创建失败！"):(t.$http.toast("需求创建成功！"),t.back());case 7:case"end":return e.stop()}}),e)})))()},reset:function(t){this.title="",this.description="",this.money="",this.start_time="",this.end_time="",this.key_word="",this.field=0,this.address="",this.state=0,this.emergency="",this.predict="",this.real=0,this.index=0},saveNeed:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={company_id:t.company_id,title:t.title,description:t.description,money:t.money,start_time:t.start_time,end_time:t.end_time,key_word:t.key_word,field:t.field,address:t.address,state:2,emergency:t.emergency,predict:t.predict,real:t.real},i=t.validate(n),!i){e.next=7;break}return e.next=5,(0,o.saveneed)(n);case 5:a=e.sent,a&&a.code?t.$http.toast("需求保存失败！"):(t.$http.toast("需求保存成功！"),t.back());case 7:case"end":return e.stop()}}),e)})))()}}};e.default=p},9781:function(t,e,n){"use strict";var i=n("1f23"),a=n.n(i);a.a},d207:function(t,e,n){"use strict";n.r(e);var i=n("570f"),a=n("4c5c");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("9781");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1a80f5bc",null,!1,i["a"],s);e["default"]=u.exports},dc0c:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.saveneed=e.addneed=void 0,n("96cf");var a=i(n("1da1")),r=i(n("4622")),s=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={Authorization:"Bearer "+uni.getStorageSync("token")},t.next=3,r.default.post("need",e,n);case 3:return i=t.sent,i&&i.code&&console.log(i.error_msg),t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.addneed=s;var o=function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=s(e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.saveneed=o}}]);