"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[4057],{54057:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});t(68309);var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("单元格点击编辑，还可以通过 "),n("table-column-api-link",{attrs:{prop:"autoselect"}}),e._v(" 开启默认选中")],1),n("vxe-table",{attrs:{border:"",resizable:"","show-overflow":"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell"}}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-colgroup",{attrs:{title:"分组1"}},[n("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{autofocus:".my-input",autoselect:!0}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"row.name"}],staticClass:"my-input",attrs:{type:"text"},domProps:{value:a.name},on:{input:function(n){n.target.composing||e.$set(a,"name",n.target.value)}}})]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e.formatGroupSex(a.sex)))])]}},{key:"edit",fn:function(t){var a=t.row;return[n("vxe-select",{attrs:{type:"text",optionGroups:e.sexGriupList,transfer:""},model:{value:a.sex,callback:function(n){e.$set(a,"sex",n)},expression:"row.sex"}})]}}])})],1),n("vxe-colgroup",{attrs:{title:"分组1"}},[n("vxe-column",{attrs:{field:"date13",title:"Date","edit-render":{autofocus:".my-input",autoselect:!0}},scopedSlots:e._u([{key:"edit",fn:function(t){var a=t.row;return[n("vxe-input",{staticClass:"my-input",attrs:{type:"date"},model:{value:a.date13,callback:function(n){e.$set(a,"date13",n)},expression:"row.date13"}})]}}])})],1)],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],l=(t(69826),t(41539),{data:function(){return{tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:44,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex2:["1","0"],num1:20,age:30,address:"Shanghai",date12:"2020-09-20",date13:""},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"1",sex2:["0"],num1:10,age:21,address:"Shenzhen",date12:"",date13:""},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"0",sex2:["0"],num1:5,age:29,address:"Shenzhen",date12:"2020-01-02",date13:"2020-09-20"},{id:10008,name:"Test8",nickname:"T8",role:"PM",sex:"1",sex2:["0"],num1:2,age:35,address:"Shenzhen",date12:"",date13:""}],sexGriupList:[{label:"第一分组",options:[{value:"0",label:"女"}]},{label:"第二分组",options:[{value:"1",label:"男"}]},{label:"其他",options:[{value:"2",label:"无"}]}],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-colgroup title="分组1">\n            <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.my-input\', autoselect: true}">\n              <template #edit="{ row }">\n                <input v-model="row.name" type="text" class="my-input">\n              </template>\n            </vxe-column>\n            <vxe-column field="sex" title="Sex" :edit-render="{}">\n              <template #edit="{ row }">\n              <vxe-select v-model="row.sex" type="text" :optionGroups="sexGriupList" transfer></vxe-select>\n            </template>\n            </vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="分组1">\n            <vxe-column field="date13" title="Date" :edit-render="{autofocus: \'.my-input\', autoselect: true}">\n              <template #default="{ row }">\n                <span>{{ formatGroupSex(row.sex2) }}</span>\n              </template>\n              <template #edit="{ row }">\n                <vxe-input v-model="row.date13" type="date" class="my-input"></vxe-input>\n              </template>\n            </vxe-column>\n          </vxe-colgroup>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }\n              ],\n              sexGriupList: [\n                {\n                  label: '第一分组',\n                  options: [\n                    { value: '0', label: '女' }\n                  ]\n                },\n                {\n                  label: '第二分组',\n                  options: [\n                    { value: '1', label: '男' }\n                  ]\n                },\n                {\n                  label: '其他',\n                  options: [\n                    { value: '2', label: '无' }\n                  ]\n                }\n              ]\n            }\n          },\n          methods: {\n            formatGroupSex (value) {\n              let label = ''\n              this.sexGriupList.find(group => {\n                return group.options.find(item => {\n                  if (item.value === value) {\n                    label = item.label\n                    return true\n                  }\n                  return false\n                })\n              })\n              return label\n            }\n          }\n        }\n        "]}},methods:{formatGroupSex:function(e){var n="";return this.sexGriupList.find((function(t){return t.options.find((function(t){return t.value===e&&(n=t.label,!0)}))})),n}}}),o=l,r=t(1001),i=(0,r.Z)(o,a,s,!1,null,null,null),d=i.exports}}]);