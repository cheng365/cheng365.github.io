"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[7523],{47523:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(68309);var r=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 设置 "),t("table-api-link",{attrs:{prop:"keep-source"}}),e._v(" 开启保持原始值状态，通过调用 "),t("table-api-link",{attrs:{prop:"revertData"}}),e._v(" 还原数据"),t("br"),t("span",{staticClass:"red"},[e._v("（注：开启 keep-source 将会影响性能，具体取决于数据量）")])],1),t("vxe-toolbar",{attrs:{perfect:""},scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{attrs:{icon:"vxe-icon-square-plus",status:"perfect"},on:{click:e.insertEvent}},[e._v("新增")]),t("vxe-button",{attrs:{icon:"vxe-icon-delete",status:"perfect"},on:{click:e.removeEvent}},[e._v("移除")]),t("vxe-button",{attrs:{icon:"vxe-icon-save",status:"perfect"},on:{click:e.saveEvent}},[e._v("保存")]),t("vxe-button",{attrs:{icon:"vxe-icon-undo",status:"perfect"},on:{click:e.revertEvent}},[e._v("还原")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"","keep-source":"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell",showStatus:!0}}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var r=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:r.name,callback:function(t){e.$set(r,"name",t)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var r=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:r.sex,callback:function(t){e.$set(r,"sex",t)},expression:"row.sex"}})]}}])}),t("vxe-column",{attrs:{field:"age",title:"Age","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var r=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:r.age,callback:function(t){e.$set(r,"age",t)},expression:"row.age"}})]}}])}),t("vxe-column",{attrs:{title:"操作"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.row;return[e.$refs.xTable.isInsertByRow(r)?e._e():t("vxe-button",{on:{click:function(t){return e.$refs.xTable.revertData(r)}}},[e._v("还原")])]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[],a=n(50124),i=n(48534),s=(n(92222),n(69851)),c=n.n(s),l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],demoCodes:['\n        <vxe-toolbar perfect>\n          <template #buttons>\n            <vxe-button icon="vxe-icon-square-plus" status="perfect" @click="insertEvent">新增</vxe-button>\n            <vxe-button icon="vxe-icon-delete" status="perfect" @click="removeEvent">移除</vxe-button>\n            <vxe-button icon="vxe-icon-save" status="perfect" @click="saveEvent">保存</vxe-button>\n            <vxe-button icon="vxe-icon-undo" status="perfect" @click="revertEvent">还原</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          ref="xTable"\n          border\n          show-overflow\n          keep-source\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', showStatus: true}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.sex" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="age" title="Age" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.age" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column title="操作">\n            <template #default="{ row }">\n              <vxe-button v-if="!$refs.xTable.isInsertByRow(row)" @click="$refs.xTable.revertData(row)">还原</vxe-button>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            insertEvent () {\n              const $table = this.$refs.xTable\n              const record = {\n                sex: '1'\n              }\n              $table.insert(record).then(({ row }) => {\n                $table.setActiveCell(row, 'sex')\n              })\n            },\n            async removeEvent () {\n              const $table = this.$refs.xTable\n              const selectRecords = $table.getCheckboxRecords()\n              if (selectRecords.length) {\n                const type = await VXETable.modal.confirm('您确定要删除选中的数据吗?')\n                if (type === 'confirm') {\n                  $table.removeCheckboxRow()\n                }\n              } else {\n                VXETable.modal.message({ content: '请至少选择一条数据', status: 'error' })\n              }\n            },\n            async revertEvent () {\n              const type = await VXETable.modal.confirm('您确定要还原数据吗?')\n              const $table = this.$refs.xTable\n              if (type === 'confirm') {\n                $table.revertData()\n              }\n            },\n            saveEvent () {\n              const $table = this.$refs.xTable\n              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()\n              VXETable.modal.alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)\n            }\n          }\n        }\n        "]}},methods:{insertEvent:function(){var e=this.$refs.xTable,t={sex:"1"};e.insert(t).then((function(t){var n=t.row;e.setActiveCell(n,"sex")}))},removeEvent:function(){var e=this;return(0,i.Z)((0,a.Z)().mark((function t(){var n,r,o;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$refs.xTable,r=n.getCheckboxRecords(),!r.length){t.next=9;break}return t.next=5,c().modal.confirm("您确定要删除选中的数据吗?");case 5:o=t.sent,"confirm"===o&&n.removeCheckboxRow(),t.next=10;break;case 9:c().modal.message({content:"请至少选择一条数据",status:"error"});case 10:case"end":return t.stop()}}),t)})))()},revertEvent:function(){var e=this;return(0,i.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c().modal.confirm("您确定要还原数据吗?");case 2:n=t.sent,r=e.$refs.xTable,"confirm"===n&&r.revertData();case 5:case"end":return t.stop()}}),t)})))()},saveEvent:function(){var e=this.$refs.xTable,t=e.getRecordset(),n=t.insertRecords,r=t.removeRecords,o=t.updateRecords;c().modal.alert("insertRecords=".concat(n.length," removeRecords=").concat(r.length," updateRecords=").concat(o.length))}}},u=l,v=n(1001),f=(0,v.Z)(u,r,o,!1,null,null,null),d=f.exports},73706:function(e,t,n){var r=n(17854),o=n(58003);o(r.JSON,"JSON",!0)},10408:function(e,t,n){var r=n(58003);r(Math,"Math",!0)},30489:function(e,t,n){var r=n(82109),o=n(47293),a=n(47908),i=n(79518),s=n(49920),c=o((function(){i(1)}));r({target:"Object",stat:!0,forced:c,sham:!s},{getPrototypeOf:function(e){return i(a(e))}})},72443:function(e,t,n){var r=n(26800);r("asyncIterator")},39341:function(e,t,n){var r=n(35005),o=n(26800),a=n(58003);o("toStringTag"),a(r("Symbol"),"Symbol")},48534:function(e,t,n){n.d(t,{Z:function(){return o}});n(41539);function r(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}},50124:function(e,t,n){n.d(t,{Z:function(){return o}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(72443),n(39341),n(73706),n(10408),n(30489),n(21703),n(57658),n(54747),n(68309),n(47042);var r=n(3336);function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function v(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{v({},"")}catch(e){v=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),s=new D(r||[]);return i(a,"_invoke",{value:R(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",m="executing",x="completed",b={};function g(){}function y(){}function w(){}var k={};v(k,c,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(j([])));E&&E!==n&&a.call(E,c)&&(k=E);var T=w.prototype=g.prototype=Object.create(k);function $(e){["next","throw","return"].forEach((function(t){v(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,s,c){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==(0,r.Z)(v)&&a.call(v,"__await")?t.resolve(v.__await).then((function(e){n("next",e,s,c)}),(function(e){n("throw",e,s,c)})):t.resolve(v).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}})}function R(t,n,r){var o=h;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===x){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var c=S(s,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=d(t,n,r);if("normal"===l.type){if(o=r.done?x:p,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=x,r.method="throw",r.arg=l.arg)}}}function S(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var a=d(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,b;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return y.prototype=w,i(T,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:y,configurable:!0}),y.displayName=v(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,v(e,u,"GeneratorFunction")),e.prototype=Object.create(T),e},t.awrap=function(e){return{__await:e}},$(L.prototype),v(L.prototype,l,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new L(f(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},$(T),v(T,u,"Generator"),v(T,c,(function(){return this})),v(T,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}}}]);