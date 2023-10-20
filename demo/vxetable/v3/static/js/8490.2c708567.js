"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8490],{8490:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(68309);var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("表单数据代理，可以通过设置 "),n("grid-api-link",{attrs:{prop:"form-config"}}),e._v("={"),n("grid-api-link",{attrs:{prop:"items"}}),e._v("} 渲染表单")],1),n("vxe-grid",e._b({scopedSlots:e._u([{key:"name_item",fn:function(t){var a=t.data;return[n("vxe-input",{attrs:{type:"text",placeholder:"请输入名称"},model:{value:a.name,callback:function(n){e.$set(a,"name",n)},expression:"data.name"}})]}},{key:"sex_item",fn:function(t){var a=t.data;return[n("vxe-select",{attrs:{transfer:""},model:{value:a.sex,callback:function(n){e.$set(a,"sex",n)},expression:"data.sex"}},e._l(e.sexList1,(function(e){return n("vxe-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)]}},{key:"submit_item",fn:function(){return[n("vxe-button",{attrs:{type:"submit",status:"primary",content:"查询"}})]},proxy:!0},{key:"reset_item",fn:function(){return[n("vxe-button",{attrs:{type:"reset",content:"重置"}})]},proxy:!0}])},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],i=(t(41539),{data:function(){return{gridOptions:{resizable:!0,border:!0,showOverflow:!0,height:400,exportConfig:{},pagerConfig:{pageSize:10},formConfig:{items:[{field:"name",title:"名称",itemRender:{},slots:{default:"name_item"}},{field:"sex",title:"性别",itemRender:{},slots:{default:"sex_item"}},{itemRender:{},slots:{default:"submit_item"}},{itemRender:{},slots:{default:"reset_item"}}]},toolbarConfig:{export:!0,custom:!0},proxyConfig:{form:!0,ajax:{query:function(e){var n=e.page,t=e.form;return new Promise((function(e){setTimeout((function(){var a=[{id:10001,name:"Test1"+t.name,nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2"+t.name,nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3"+t.name,nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4"+t.name,nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5"+t.name,nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"},{id:10006,name:"Test6"+t.name,nickname:"T6",role:"Develop",sex:"0",age:27,address:"Shanghai"},{id:10007,name:"Test7"+t.name,nickname:"T7",role:"Develop",sex:"1",age:29,address:"Shenzhen"},{id:10008,name:"Test8"+t.name,nickname:"T8",role:"Develop",sex:"0",age:32,address:"Shanghai"},{id:10009,name:"Test9"+t.name,nickname:"T9",role:"Develop",sex:"1",age:30,address:"Shenzhen"},{id:10010,name:"Test10"+t.name,nickname:"T10",role:"Develop",sex:"0",age:34,address:"Shanghai"}];e({result:a,page:{totle:20*n.pageSize}})}),500)}))}}},columns:[{type:"seq",width:60},{type:"checkbox",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"describe",title:"Describe",showOverflow:!0}]},sexList1:[{value:"1",label:"男"},{value:"0",label:"女"}],demoCodes:['\n        <vxe-grid v-bind="gridOptions">\n          <template #name_item="{ data }">\n            <vxe-input v-model="data.name" type="text" placeholder="请输入名称"></vxe-input>\n          </template>\n          <template #sex_item="{ data }">\n            <vxe-select v-model="data.sex" transfer>\n              <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n            </vxe-select>\n          </template>\n          <template #submit_item>\n            <vxe-button type="submit" status="primary" content="查询"></vxe-button>\n          </template>\n          <template #reset_item>\n            <vxe-button type="reset" content="重置"></vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                resizable: true,\n                border: true,\n                showOverflow: true,\n                height: 400,\n                exportConfig: {},\n                pagerConfig: {\n                  pageSize: 10\n                },\n                formConfig: {\n                  items: [\n                    { field: 'name', title: '名称', itemRender: {}, slots: { default: 'name_item' } },\n                    { field: 'sex', title: '性别', itemRender: {}, slots: { default: 'sex_item' } },\n                    { itemRender: {}, slots: { default: 'submit_item' } },\n                    { itemRender: {}, slots: { default: 'reset_item' } }\n                  ]\n                },\n                toolbarConfig: {\n                  export: true,\n                  custom: true\n                },\n                proxyConfig: {\n                  form: true, // 启用表单代理\n                  ajax: {\n                    // 接收 Promise API\n                    query: ({ page, form }) => {\n                      return new Promise(resolve => {\n                        setTimeout(() => {\n                          const list = [\n                            { id: 10001, name: 'Test1' + form.name, nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },\n                            { id: 10002, name: 'Test2' + form.name, nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },\n                            { id: 10003, name: 'Test3' + form.name, nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },\n                            { id: 10004, name: 'Test4' + form.name, nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },\n                            { id: 10005, name: 'Test5' + form.name, nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },\n                            { id: 10006, name: 'Test6' + form.name, nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },\n                            { id: 10007, name: 'Test7' + form.name, nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },\n                            { id: 10008, name: 'Test8' + form.name, nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },\n                            { id: 10009, name: 'Test9' + form.name, nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },\n                            { id: 10010, name: 'Test10' + form.name, nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }\n                          ]\n                          resolve({\n                            result: list,\n                            page: {\n                              totle: page.pageSize * 20\n                            }\n                          })\n                        }, 500)\n                      })\n                    }\n                  }\n                },\n                columns: [\n                  { type: 'seq', width: 60 },\n                  { type: 'checkbox', width: 60 },\n                  { field: 'name', title: 'Name' },\n                  { field: 'nickname', title: 'Nickname' },\n                  { field: 'age', title: 'Age' },\n                  { field: 'sex', title: 'Sex' },\n                  { field: 'describe', title: 'Describe', showOverflow: true }\n                ]\n              },\n              sexList1: [\n                { value: '1', label: '男' },\n                { value: '0', label: '女' }\n              ]\n            }\n          }\n        }\n        "]}}}),r=i,o=t(1001),l=(0,o.Z)(r,a,s,!1,null,null,null),m=l.exports}}]);