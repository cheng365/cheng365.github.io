"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[99874],{99874:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(50124),o=r(48534),a=r(66252),i=(r(64043),r(7409),r(21057),r(60228),r(47522),r(86466),r(70560),r(34338),r(50886),r(34284),r(2262)),u=r(72896),c=(0,a.aZ)({__name:"Demo1",setup:function(e){var t=(0,i.iH)(),r=(0,i.iH)([{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}]),c=(0,i.iH)({name:[{validator:function(e){var t=e.cellValue;if(t&&!/^\w+$/.test(t))return new Error("名称格式不正确，必须字母或数字")}}],sex:[{required:!0,message:"性别必须填写"}],age:[{type:"number",min:10,max:1e5,message:"输入 10 ~ 100000 范围"}],date:[{required:!0,message:"日期必须填写"}]}),s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,o;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.value,!r){e.next=6;break}return e.next=4,r.validate();case 4:o=e.sent,o?u.s7.modal.message({status:"error",message:"校验不通过！"}):u.s7.modal.message({status:"success",message:"校验成功！"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,o,i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.value,!r){e.next=6;break}return e.next=4,r.fullValidate();case 4:o=e.sent,o?(i=[],Object.values(o).forEach((function(e){e.forEach((function(e){var t=e.rowIndex,r=e.column,n=e.rules;n.forEach((function(e){i.push("第 ".concat(t+1," 行 ").concat(r.title," 校验错误：").concat(e.message))}))}))})),u.s7.modal.message({status:"error",slots:{default:function(){return(0,a.Wm)("div",{class:"red",style:"max-height: 400px;overflow: auto;"},[i.map((function(e){return(0,a.Wm)("div",null,[e])}))])}}})):u.s7.modal.message({status:"success",message:"校验成功！"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,o;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.value,!r){e.next=6;break}return e.next=4,r.validate(!0);case 4:o=e.sent,o?u.s7.modal.message({status:"error",message:"校验不通过！"}):u.s7.modal.message({status:"success",message:"校验成功！"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var r=t.value;r&&r.updateStatus(e)},d=function(){var e=t.value;e&&e.removeCheckboxRow()},v=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,o,a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.value,!r){e.next=11;break}if(o=r.getCheckboxRecords(),!(o.length>0)){e.next=10;break}return e.next=6,r.validate(o);case 6:a=e.sent,a?u.s7.modal.message({status:"error",message:"校验不通过！"}):u.s7.modal.message({status:"success",message:"校验成功！"}),e.next=11;break;case 10:u.s7.modal.message({status:"warning",message:"未选中数据！"});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,o,a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.value,!r){e.next=10;break}return e.next=4,r.insert({});case 4:return o=e.sent,a=o.row,e.next=8,r.validate(a);case 8:e.sent;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=t.value;if(e){var r=e.getCheckboxRecords();u.s7.modal.alert(r.length)}},g=function(){var e=t.value;if(e){var r=e.getInsertRecords();u.s7.modal.alert(r.length)}},w=function(){var e=t.value;if(e){var r=e.getRemoveRecords();u.s7.modal.alert(r.length)}},y=function(){var e=t.value;if(e){var r=e.getUpdateRecords();u.s7.modal.alert(r.length)}};return function(e,n){var o=(0,a.up)("vxe-button"),i=(0,a.up)("vxe-toolbar"),u=(0,a.up)("vxe-column"),x=(0,a.up)("vxe-input"),b=(0,a.up)("vxe-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,null,{buttons:(0,a.w5)((function(){return[(0,a.Wm)(o,{onClick:m},{default:(0,a.w5)((function(){return[(0,a.Uk)("新增")]})),_:1}),(0,a.Wm)(o,{onClick:n[0]||(n[0]=function(e){return d()})},{default:(0,a.w5)((function(){return[(0,a.Uk)("删除选中")]})),_:1}),(0,a.Wm)(o,{onClick:s},{default:(0,a.w5)((function(){return[(0,a.Uk)("快速校验")]})),_:1}),(0,a.Wm)(o,{onClick:l},{default:(0,a.w5)((function(){return[(0,a.Uk)("完整快速校验")]})),_:1}),(0,a.Wm)(o,{onClick:f},{default:(0,a.w5)((function(){return[(0,a.Uk)("全量数据校验")]})),_:1}),(0,a.Wm)(o,{onClick:v},{default:(0,a.w5)((function(){return[(0,a.Uk)("选中行校验")]})),_:1}),(0,a.Wm)(o,{onClick:p},{default:(0,a.w5)((function(){return[(0,a.Uk)("获取选中")]})),_:1}),(0,a.Wm)(o,{onClick:g},{default:(0,a.w5)((function(){return[(0,a.Uk)("获取新增")]})),_:1}),(0,a.Wm)(o,{onClick:w},{default:(0,a.w5)((function(){return[(0,a.Uk)("获取删除")]})),_:1}),(0,a.Wm)(o,{onClick:y},{default:(0,a.w5)((function(){return[(0,a.Uk)("获取修改")]})),_:1})]})),_:1}),(0,a.Wm)(b,{border:"","show-overflow":"","keep-source":"",ref_key:"tableRef",ref:t,data:r.value,"edit-rules":c.value,"edit-config":{trigger:"click",mode:"row",showStatus:!0}},{default:(0,a.w5)((function(){return[(0,a.Wm)(u,{type:"checkbox",width:"80"}),(0,a.Wm)(u,{type:"seq",width:"80"}),(0,a.Wm)(u,{field:"name",title:"Name",width:"400","edit-render":{}},{edit:(0,a.w5)((function(e){return[(0,a.Wm)(x,{modelValue:e.row.name,"onUpdate:modelValue":function(t){return e.row.name=t},type:"text",onChange:function(t){return h(e)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),(0,a.Wm)(u,{field:"age",title:"Age",width:"200","edit-render":{}},{edit:(0,a.w5)((function(e){return[(0,a.Wm)(x,{modelValue:e.row.age,"onUpdate:modelValue":function(t){return e.row.age=t},type:"text",onChange:function(t){return h(e)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),(0,a.Wm)(u,{field:"sex",title:"Sex",width:"200","edit-render":{}},{edit:(0,a.w5)((function(e){return[(0,a.Wm)(x,{modelValue:e.row.sex,"onUpdate:modelValue":function(t){return e.row.sex=t},type:"text",onChange:function(t){return h(e)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),(0,a.Wm)(u,{field:"date",title:"Date",width:"300",fixed:"right","edit-render":{}},{edit:(0,a.w5)((function(e){return[(0,a.Wm)(x,{modelValue:e.row.date,"onUpdate:modelValue":function(t){return e.row.date=t},type:"date",transfer:"",onChange:function(t){return h(e)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]})),_:1})]})),_:1},8,["data","edit-rules"])])}}});const s=c;var l=s},49419:function(e,t,r){var n=r(67697),o=r(3689),a=r(68844),i=r(61868),u=r(20300),c=r(65290),s=r(49556).f,l=a(s),f=a([].push),h=n&&o((function(){var e=Object.create(null);return e[2]=2,!l(e,2)})),d=function(e){return function(t){var r,o=c(t),a=u(o),s=h&&null===i(o),d=a.length,v=0,m=[];while(d>v)r=a[v++],n&&!(s?r in o:l(o,r))||f(m,e?[r,o[r]]:o[r]);return m}};e.exports={entries:d(!0),values:d(!1)}},7629:function(e,t,r){var n=r(19037),o=r(55997);o(n.JSON,"JSON",!0)},77509:function(e,t,r){var n=r(55997);n(Math,"Math",!0)},88052:function(e,t,r){var n=r(79989),o=r(3689),a=r(90690),i=r(61868),u=r(81748),c=o((function(){i(1)}));n({target:"Object",stat:!0,forced:c,sham:!u},{getPrototypeOf:function(e){return i(a(e))}})},86466:function(e,t,r){var n=r(79989),o=r(49419).values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},58373:function(e,t,r){var n=r(35405);n("asyncIterator")},66793:function(e,t,r){var n=r(76058),o=r(35405),a=r(55997);o("toStringTag"),a(n("Symbol"),"Symbol")},48534:function(e,t,r){r.d(t,{Z:function(){return o}});r(60228);function n(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,c,"next",e)}function c(e){n(i,o,a,u,c,"throw",e)}u(void 0)}))}}},50124:function(e,t,r){r.d(t,{Z:function(){return o}});r(59749),r(86544),r(60228),r(84254),r(21694),r(76265),r(58373),r(66793),r(7629),r(77509),r(88052),r(21057),r(70560),r(47522),r(34284),r(89730);var n=r(3336);function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),u=new j(n||[]);return i(a,"_invoke",{value:O(e,r,u)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=h;var v="suspendedStart",m="suspendedYield",p="executing",g="completed",w={};function y(){}function x(){}function b(){}var k={};f(k,c,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(S([])));L&&L!==r&&a.call(L,c)&&(k=L);var E=b.prototype=y.prototype=Object.create(k);function W(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(o,i,u,c){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return r("throw",e,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function O(t,r,n){var o=v;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=Z(u,n);if(c){if(c===w)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=d(t,r,n);if("normal"===s.type){if(o=n.done?g:m,s.arg===w)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function Z(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator["return"]&&(r.method="return",r.arg=e,Z(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,w;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,w):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function U(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function V(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(U,this),this.reset(!0)}function S(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError((0,n.Z)(t)+" is not iterable")}return x.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},W(C.prototype),f(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new C(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},W(E),f(E,l,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),V(r),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;V(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),w}},t}}}]);