"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[5916],{85916:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(68309);var r=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 通过调用 "),t("table-api-link",{attrs:{prop:"validate"}}),e._v(" 函数校验数据，"),t("table-api-link",{attrs:{prop:"edit-rules"}}),e._v(" 校验规则配置，如果第一个参数为 true 则全量校验"),t("br"),t("span",{staticClass:"red"},[e._v("（如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）")])],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.insertEvent}},[e._v("新增")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),t("vxe-button",{on:{click:e.validEvent}},[e._v("快速校验")]),t("vxe-button",{on:{click:e.fullValidEvent}},[e._v("完整快速校验")]),t("vxe-button",{on:{click:e.validAllEvent}},[e._v("全量数据校验")]),t("vxe-button",{on:{click:e.selectValidEvent}},[e._v("选中行校验")]),t("vxe-button",{on:{click:e.getSelectEvent}},[e._v("获取选中")]),t("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),t("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),t("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"","keep-source":"",height:"500",data:e.tableData,"edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"cell",showStatus:!0}}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-colgroup",{attrs:{title:"分组1"}},[t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"text"},on:{change:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.name,callback:function(t){e.$set(n.row,"name",t)},expression:"scope.row.name"}})]}}])}),t("vxe-column",{attrs:{field:"role",title:"Role","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"text"},on:{change:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.role,callback:function(t){e.$set(n.row,"role",t)},expression:"scope.row.role"}})]}}])})],1),t("vxe-colgroup",{attrs:{title:"分组2"}},[t("vxe-colgroup",{attrs:{title:"分组21"}},[t("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"text"},on:{change:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.sex,callback:function(t){e.$set(n.row,"sex",t)},expression:"scope.row.sex"}})]}}])}),t("vxe-column",{attrs:{field:"age",title:"Age","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"integer"},on:{change:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.age,callback:function(t){e.$set(n.row,"age",t)},expression:"scope.row.age"}})]}}])}),t("vxe-column",{attrs:{field:"date",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"date",transfer:""},on:{change:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.date,callback:function(t){e.$set(n.row,"date",t)},expression:"scope.row.date"}})]}}])})],1)],1)],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},a=[],o=n(50124),s=n(48534),l=(n(41539),n(21703),n(26699),n(54747),n(26833),n(57658),n(92222),n(21249),n(69851)),c=n.n(l),i={data:function(){var e=function(e){var t=e.cellValue;return new Promise((function(e,n){setTimeout((function(){t&&(t.length<3||t.length>50)?n(new Error("名称长度在 3 到 50 个字符之间")):e()}),100)}))},t=function(e){var t=e.cellValue;if(t&&!["Develop","Test","Designer","PM"].includes(t))return new Error("角色输入不正确")};return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],validRules:{name:[{required:!0,message:"app.body.valid.rName"},{validator:e}],role:[{validator:t}],sex:[{required:!0,message:"性别必须填写"},{pattern:/^[0,1]{1}$/,message:"格式不正确"}],age:[{pattern:"^[0-9]{0,3}$",message:"格式不正确"}]},demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="validEvent">快速校验</vxe-button>\n            <vxe-button @click="fullValidEvent">完整快速校验</vxe-button>\n            <vxe-button @click="validAllEvent">全量数据校验</vxe-button>\n            <vxe-button @click="selectValidEvent">选中行校验</vxe-button>\n            <vxe-button @click="getSelectEvent">获取选中</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          keep-source\n          height="500"\n          ref="xTable"\n          :data="tableData"\n          :edit-rules="validRules"\n          :edit-config="{trigger: \'click\', mode: \'cell\', showStatus: true}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-colgroup title="分组1">\n            <vxe-column field="name" title="Name" :edit-render="{}">\n              <template #edit="scope">\n                <vxe-input v-model="scope.row.name" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>\n              </template>\n            </vxe-column>\n            <vxe-column field="role" title="Role" :edit-render="{}">\n              <template #edit="scope">\n                <vxe-input v-model="scope.row.role" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>\n              </template>\n            </vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="分组2">\n            <vxe-colgroup title="分组21">\n              <vxe-column field="sex" title="Sex" :edit-render="{}">\n                <template #edit="scope">\n                  <vxe-input v-model="scope.row.sex" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>\n                </template>\n              </vxe-column>\n              <vxe-column field="age" title="Age" :edit-render="{}">\n                <template #edit="scope">\n                  <vxe-input v-model="scope.row.age" type="integer" @change="$refs.xTable.updateStatus(scope)"></vxe-input>\n                </template>\n              </vxe-column>\n              <vxe-column field="date" title="Date" :edit-render="{}">\n                <template #edit="scope">\n                  <vxe-input v-model="scope.row.date" type="date" transfer @change="$refs.xTable.updateStatus(scope)"></vxe-input>\n                </template>\n              </vxe-column>\n            </vxe-colgroup>\n          </vxe-colgroup>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            const nameValid = ({ cellValue }) => {\n              // 模拟服务端校验\n              return new Promise((resolve, reject) => {\n                setTimeout(() => {\n                  if (cellValue && (cellValue.length < 3 || cellValue.length > 50)) {\n                    reject(new Error('名称长度在 3 到 50 个字符之间'))\n                  } else {\n                    resolve()\n                  }\n                }, 100)\n              })\n            }\n            const roleValid = ({ cellValue }) => {\n              if (cellValue && !['Develop', 'Test', 'Designer', 'PM'].includes(cellValue)) {\n                return new Error('角色输入不正确')\n              }\n            }\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ],\n              validRules: {\n                name: [\n                  { required: true, message: 'app.body.valid.rName' },\n                  { validator: nameValid }\n                ],\n                role: [\n                  { validator: roleValid }\n                ],\n                sex: [\n                  { required: true, message: '性别必须填写' },\n                  { pattern: /^[0,1]{1}$/, message: '格式不正确' }\n                ],\n                age: [\n                  { pattern: '^[0-9]{0,3}$', message: '格式不正确' }\n                ]\n              }\n            }\n          },\n          methods: {\n            async validEvent () {\n              const $table = this.$refs.xTable\n              const errMap = await $table.validate().catch(errMap => errMap)\n              if (errMap) {\n                VXETable.modal.message({ status: 'error', content: '校验不通过！' })\n              } else {\n                VXETable.modal.message({ status: 'success', content: '校验成功！' })\n              }\n            },\n            async fullValidEvent () {\n              const $table = this.$refs.xTable\n              const errMap = await $table.fullValidate().catch(errMap => errMap)\n              if (errMap) {\n                const msgList = []\n                Object.values(errMap).forEach(errList => {\n                  errList.forEach(params => {\n                    const { rowIndex, column, rules } = params\n                    rules.forEach(rule => {\n                      msgList.push(`第 ${rowIndex + 1} 行 ${column.title} 校验错误：${rule.message}`)\n                    })\n                  })\n                })\n                VXETable.modal.message({\n                  status: 'error',\n                  slots: {\n                    default () {\n                      return [\n                        <div class=\"red\" style=\"max-height: 400px;overflow: auto;\">\n                          {\n                            msgList.map(msg => <div>{ msg }</div>)\n                          }\n                        </div>\n                      ]\n                    }\n                  }\n                })\n              } else {\n                VXETable.modal.message({ status: 'success', content: '校验成功！' })\n              }\n            },\n            async validAllEvent () {\n              const $table = this.$refs.xTable\n              const errMap = await $table.validate(true).catch(errMap => errMap)\n              if (errMap) {\n                VXETable.modal.message({ status: 'error', content: '校验不通过！' })\n              } else {\n                VXETable.modal.message({ status: 'success', content: '校验成功！' })\n              }\n            },\n            async selectValidEvent () {\n              const $table = this.$refs.xTable\n              const selectRecords = $table.getCheckboxRecords()\n              if (selectRecords.length > 0) {\n                const errMap = await $table.validate(selectRecords).catch(errMap => errMap)\n                if (errMap) {\n                  VXETable.modal.message({ status: 'error', content: '校验不通过！' })\n                } else {\n                  VXETable.modal.message({ status: 'success', content: '校验成功！' })\n                }\n              } else {\n                VXETable.modal.message({ status: 'warning', content: '未选中数据！' })\n              }\n            },\n            async insertEvent () {\n              const $table = this.$refs.xTable\n              const { row: newRow } = await $table.insert()\n              // 插入一条数据并触发校验\n              const errMap = await $table.validate(newRow).catch(errMap => errMap)\n              if (errMap) {\n                // 校验不通过\n              }\n            },\n            getSelectEvent () {\n              const $table = this.$refs.xTable\n              const selectRecords = $table.getCheckboxRecords()\n              VXETable.modal.alert(selectRecords.length)\n            },\n            getInsertEvent () {\n              const $table = this.$refs.xTable\n              const insertRecords = $table.getInsertRecords()\n              VXETable.modal.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              const $table = this.$refs.xTable\n              const removeRecords = $table.getRemoveRecords()\n              VXETable.modal.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              const $table = this.$refs.xTable\n              const updateRecords = $table.getUpdateRecords()\n              VXETable.modal.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},methods:{validEvent:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){var n,r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.xTable,t.next=3,n.validate().catch((function(e){return e}));case 3:r=t.sent,r?c().modal.message({status:"error",content:"校验不通过！"}):c().modal.message({status:"success",content:"校验成功！"});case 5:case"end":return t.stop()}}),t)})))()},fullValidEvent:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){var n,r,a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$createElement,n=e.$refs.xTable,t.next=4,n.fullValidate().catch((function(e){return e}));case 4:r=t.sent,r?(a=[],Object.values(r).forEach((function(e){e.forEach((function(e){var t=e.rowIndex,n=e.column,r=e.rules;r.forEach((function(e){a.push("第 ".concat(t+1," 行 ").concat(n.title," 校验错误：").concat(e.message))}))}))})),c().modal.message({status:"error",slots:{default:function(){var e=this.$createElement;return[e("div",{class:"red",style:"max-height: 400px;overflow: auto;"},[a.map((function(t){return e("div",[t])}))])]}}})):c().modal.message({status:"success",content:"校验成功！"});case 6:case"end":return t.stop()}}),t)})))()},validAllEvent:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){var n,r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.xTable,t.next=3,n.validate(!0).catch((function(e){return e}));case 3:r=t.sent,r?c().modal.message({status:"error",content:"校验不通过！"}):c().modal.message({status:"success",content:"校验成功！"});case 5:case"end":return t.stop()}}),t)})))()},selectValidEvent:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){var n,r,a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$refs.xTable,r=n.getCheckboxRecords(),!(r.length>0)){t.next=9;break}return t.next=5,n.validate(r).catch((function(e){return e}));case 5:a=t.sent,a?c().modal.message({status:"error",content:"校验不通过！"}):c().modal.message({status:"success",content:"校验成功！"}),t.next=10;break;case 9:c().modal.message({status:"warning",content:"未选中数据！"});case 10:case"end":return t.stop()}}),t)})))()},insertEvent:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){var n,r,a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.xTable,t.next=3,n.insert();case 3:return r=t.sent,a=r.row,t.next=7,n.validate(a).catch((function(e){return e}));case 7:t.sent;case 9:case"end":return t.stop()}}),t)})))()},getSelectEvent:function(){var e=this.$refs.xTable,t=e.getCheckboxRecords();c().modal.alert(t.length)},getInsertEvent:function(){var e=this.$refs.xTable,t=e.getInsertRecords();c().modal.alert(t.length)},getRemoveEvent:function(){var e=this.$refs.xTable,t=e.getRemoveRecords();c().modal.alert(t.length)},getUpdateEvent:function(){var e=this.$refs.xTable,t=e.getUpdateRecords();c().modal.alert(t.length)}}},u=i,d=n(1001),v=(0,d.Z)(u,r,a,!1,null,null,null),f=v.exports},44699:function(e,t,n){var r=n(19781),a=n(47293),o=n(1702),s=n(79518),l=n(81956),c=n(45656),i=n(55296).f,u=o(i),d=o([].push),v=r&&a((function(){var e=Object.create(null);return e[2]=2,!u(e,2)})),f=function(e){return function(t){var n,a=c(t),o=l(a),i=v&&null===s(a),f=o.length,p=0,h=[];while(f>p)n=o[p++],r&&!(i?n in a:u(a,n))||d(h,e?[n,a[n]]:a[n]);return h}};e.exports={entries:f(!0),values:f(!1)}},73706:function(e,t,n){var r=n(17854),a=n(58003);a(r.JSON,"JSON",!0)},10408:function(e,t,n){var r=n(58003);r(Math,"Math",!0)},30489:function(e,t,n){var r=n(82109),a=n(47293),o=n(47908),s=n(79518),l=n(49920),c=a((function(){s(1)}));r({target:"Object",stat:!0,forced:c,sham:!l},{getPrototypeOf:function(e){return s(o(e))}})},26833:function(e,t,n){var r=n(82109),a=n(44699).values;r({target:"Object",stat:!0},{values:function(e){return a(e)}})},72443:function(e,t,n){var r=n(26800);r("asyncIterator")},39341:function(e,t,n){var r=n(35005),a=n(26800),o=n(58003);a("toStringTag"),o(r("Symbol"),"Symbol")},48534:function(e,t,n){n.d(t,{Z:function(){return a}});n(41539);function r(e,t,n,r,a,o,s){try{var l=e[o](s),c=l.value}catch(i){return void n(i)}l.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function l(e){r(s,a,o,l,c,"next",e)}function c(e){r(s,a,o,l,c,"throw",e)}l(void 0)}))}}},50124:function(e,t,n){n.d(t,{Z:function(){return a}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(72443),n(39341),n(73706),n(10408),n(30489),n(21703),n(57658),n(54747),n(68309),n(47042);var r=n(3336);function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return t};var e,t={},n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",i=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function v(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),l=new O(r||[]);return s(o,"_invoke",{value:R(e,n,l)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=v;var p="suspendedStart",h="suspendedYield",m="executing",x="completed",g={};function b(){}function w(){}function y(){}var E={};d(E,c,(function(){return this}));var T=Object.getPrototypeOf,$=T&&T(T(j([])));$&&$!==n&&o.call($,c)&&(E=$);var k=y.prototype=b.prototype=Object.create(E);function _(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(a,s,l,c){var i=f(e[a],e,s);if("throw"!==i.type){var u=i.arg,d=u.value;return d&&"object"==(0,r.Z)(d)&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,c)}))}c(i.arg)}var a;s(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}})}function R(t,n,r){var a=p;return function(o,s){if(a===m)throw new Error("Generator is already running");if(a===x){if("throw"===o)throw s;return{value:e,done:!0}}for(r.method=o,r.arg=s;;){var l=r.delegate;if(l){var c=V(l,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var i=f(t,n,r);if("normal"===i.type){if(a=r.done?x:h,i.arg===g)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(a=x,r.method="throw",r.arg=i.arg)}}}function V(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator["return"]&&(n.method="return",n.arg=e,V(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=f(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function n(){for(;++a<t.length;)if(o.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return w.prototype=y,s(k,"constructor",{value:y,configurable:!0}),s(y,"constructor",{value:w,configurable:!0}),w.displayName=d(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,d(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},_(S.prototype),d(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var s=new S(v(e,n,r,a),o);return t.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(k),d(k,u,"Generator"),d(k,c,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],l=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),i=o.call(s,"finallyLoc");if(c&&i){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}}}]);