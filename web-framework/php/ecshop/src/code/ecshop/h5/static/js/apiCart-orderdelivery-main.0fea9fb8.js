(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiCart-orderdelivery-main"],{"10fd":function(e,t,i){"use strict";i.r(t);var a=i("674b"),n=i("304a");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("8ce2");var r,d=i("f0c5"),o=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"03fc2126",null,!1,a["a"],r);t["default"]=o.exports},"304a":function(e,t,i){"use strict";i.r(t);var a=i("895d"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"674b":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[e._v("配送方式")])],2),i("div",{staticClass:"container"},[i("div",{staticClass:"pay-list"},[i("div",{staticClass:"h"},[e._v("请选择配送方式")]),i("div",{staticClass:"b"},e._l(e.dt,(function(t,a){return i("div",{key:a,staticClass:"item",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tagVal(a,t.delivery_id,e.isShow,t.type)}}},[i("div",{class:[a===e.dtchecked?"checked checkbox":"checkbox"]}),i("div",{staticClass:"name"},[e._v(e._s(t.delivery_name)),t.delivery_id==e.d_id&&1!=e.dtype?i("span",[e._v("----("+e._s(e.delivery_name)+")")]):e._e(),1==e.dtype?i("span",["1"==t.type?i("span",[e._v("----("+e._s(e.delivery_name)+")")]):e._e()]):e._e()])])})),0)]),i("div",{staticClass:"pay-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.startOrder.apply(void 0,arguments)}}},[e._v("确定")])]),i("v-uni-view",{staticClass:"cu-modal",class:"RadioModal"==e.modalName?"show":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-radio-group",{staticClass:"block",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.RadioChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-list menu text-left"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"cu-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.name(t.delivery_name)}}},[i("v-uni-label",{staticClass:"flex justify-between align-center flex-sub",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.clickId(t.delivery_id,t.type,t.k_status,t.delivery_name,t.parent_id,t.type)}}},[i("v-uni-view",{staticClass:"flex-sub"},[e._v(e._s(t.delivery_name))]),i("v-uni-radio",{staticClass:"round",class:e.radio=="radio"+a?"checked":"",attrs:{checked:e.radio=="radio"+a,value:"radio"+a}})],1)],1)})),1)],1)],1)],1)],1)},s=[]},"6aa9":function(e,t,i){var a=i("f9be");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0b4dffe4",a,!0,{sourceMap:!1,shadowMode:!1})},"895d":function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("4160"),i("07ac"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),s=i("8502"),r=i("8a19"),d={onShow:function(){(0,r.toLogin)(),this.addressId=uni.getStorageSync("addressId"),this.goods_status=uni.getStorageSync("goods_status"),this.getDeliverylist()},data:function(){return{addressId:"",dtchecked:0,dt:[],modalName:null,dtype:!1,radio:"",shipping:[],list:[],delivery_name:" ",d_id:" ",type:0,isShow:!0}},mounted:function(){return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{clickId:function(e,t,i,a,n,s){uni.setStorageSync("shipping_id",e),uni.setStorageSync("p_type",t),void 0==t&&uni.setStorageSync("p_type",!0),uni.setStorageSync("k_status",i),this.delivery_name=a,this.d_id=n,this.modalName=" ",this.dtype=!1,void 0==s&&(this.dtype=!0)},onLoad:function(e){this.ral=e.ral,this.superpack=e.superpack},startOrder:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===uni.getStorageSync("shipping")&&uni.setStorageSync("shipping_id",e.list[0].delivery_id),uni.setStorageSync("k_status",""),e.shipping={id:e.dt[e.dtchecked].shipping_id,dt_name:e.dt[e.dtchecked].shipping_name,has_cod:e.dt[e.dtchecked].support_cod,is_protect:"N"},uni.setStorageSync("shipping",e.shipping),0!=e.p_status){t.next=7;break}return uni.showToast({title:"该配送方式没有配送地点，请选择其他配送方式",duration:2e3,icon:"none",mask:!0}),t.abrupt("return",!1);case 7:if(0!=e.goods_status){t.next=11;break}if("1"!=e.type){t.next=11;break}return uni.showToast({title:"订单中存在不支持PC配送方式的商品，请选择移动端配送方式",duration:2e3,icon:"none",mask:!0}),t.abrupt("return",!1);case 11:if(" "!=e.delivery_name){t.next=14;break}return uni.showToast({title:"请选择配送地点",duration:2e3,icon:"none",mask:!0}),t.abrupt("return",!1);case 14:uni.setStorageSync("delivery_name",e.delivery_name),e.ral?uni.navigateBack({url:"/apiCart/order/main?ral=true"}):e.superpack?uni.navigateBack({url:"/apiCart/order/main?super=true"}):uni.navigateBack({url:"/apiCart/order/main"});case 16:case"end":return t.stop()}}),t)})))()},showModal:function(e){this.modalName=e},hideModal:function(e){this.modalName="RadioModal"},RadioChange:function(e){this.radio=e.detail.value},name:function(e){this.delivery_name=e},tagVal:function(e,t){var i=arguments,a=this;return(0,n.default)(regeneratorRuntime.mark((function n(){var r,d,o,c,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=!(i.length>2&&void 0!==i[2])||i[2],d=i.length>3?i[3]:void 0,o=a.dtchecked==e,a.dtchecked=e,n.next=6,(0,s.shippingListBottomApi)({delivery_name:a.delivery_name,delivery_id:t});case 6:if(c=n.sent,a.type=d,uni.setStorageSync("delivery_id",t),a.list=c.data,"0"==a.type&&(r&&(a.modalName="RadioModal"),o?0==a.list&&(a.modalName=null,a.p_status=!1):a.list?(uni.setStorageSync("p_type",a.list[0].type),uni.setStorageSync("k_status",a.list[0].k_status),a.p_status="true"):(a.modalName=null,a.p_status=!1),uni.setStorageSync("shipping_type","b")),void 0==a.type&&" "==a.delivery_name&&(a.delivery_name=a.list[0].delivery_name,a.d_id=a.list[0].parent_id,a.radio="radio0"),"1"!=a.type){n.next=28;break}return n.next=15,(0,s.shippingListTopApi)({address_id:a.addressId});case 15:if(l=n.sent,a.modalName="RadioModal",a.list=l.data.info,0!==a.list.length){n.next=22;break}return a.modalName="",uni.showToast({title:"该配送方式没有下级请选择别的方式配送",icon:"none",duration:1500}),n.abrupt("return",!1);case 22:a.delivery_name=a.list[0].delivery_name,a.d_id=a.list[0].delivery_id,a.p_status="true",a.dtype=!0,a.radio="radio0",uni.setStorageSync("shipping_type","a");case 28:case"end":return n.stop()}}),n)})))()},getDeliverylist:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,s.shippingListApi)({address_id:t.addressId});case 2:a=i.sent,a&&(t.dt=a.data.info,t.type=a.data.info[0]["type"],e.log("123123"+t.type)),t.tagVal(0,t.dt[0].delivery_id,!1),uni.getStorageSync("shipping")&&(t.shipping=uni.getStorageSync("shipping"),Object.values(t.dt).forEach((function(e,t){})));case 6:case"end":return i.stop()}}),i)})))()}}};t.default=d}).call(this,i("5a52")["default"])},"8ce2":function(e,t,i){"use strict";var a=i("6aa9"),n=i.n(a);n.a},f9be:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-03fc2126]{min-height:100vh;width:100%;background:#f4f4f4}.container[data-v-03fc2126]{padding-top:%?20?%}.pay-list[data-v-03fc2126]{margin-top:%?30?%;height:auto;width:100%;overflow:hidden}.pay-list .h[data-v-03fc2126]{width:100%;height:%?50?%;line-height:%?50?%;margin-left:%?31.25?%;margin-bottom:%?31.25?%}.pay-list .item[data-v-03fc2126]{height:%?108?%;padding-left:%?31.25?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:.01rem solid #f4f4f4}.pay-list .checkbox[data-v-03fc2126]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/checkbox-sed.png) 0 %?-448?% no-repeat;background-size:%?38?% %?486?%;width:%?40?%;height:%?40?%;display:inline-block;vertical-align:middle;margin-right:%?30?%}.pay-list .checkbox.checked[data-v-03fc2126]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/checkbox-sed.png) 0 %?-192?% no-repeat;background-size:%?38?% %?486?%}.pay-list .icon[data-v-03fc2126]{display:inline-block;vertical-align:middle;margin-right:%?10.5?%;width:%?56.25?%;height:%?56.25?%}.pay-list .name[data-v-03fc2126]{display:inline-block;vertical-align:middle;height:%?56.25?%;line-height:%?56.25?%}.pay-btn[data-v-03fc2126]{position:fixed;left:0;bottom:0;height:%?100?%;width:100%;text-align:center;line-height:%?100?%;background:#b4282d;color:#fff;font-size:%?30?%}.tips[data-v-03fc2126]{height:%?40?%;width:92%;font-size:%?24?%;color:#999;line-height:%?40?%;padding-left:%?30?%;padding-right:%?30?%}body.?%PAGE?%[data-v-03fc2126]{background:#f4f4f4}',""]),e.exports=t}}]);