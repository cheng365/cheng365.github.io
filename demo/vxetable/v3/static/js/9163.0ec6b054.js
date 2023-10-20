"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[9163],{29163:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(68309);var i=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("树表格、工具栏")]),t("vxe-grid",e._b({scopedSlots:e._u([{key:"name_edit",fn:function(n){var i=n.row;return[t("vxe-input",{model:{value:i.name,callback:function(t){e.$set(i,"name",t)},expression:"row.name"}})]}},{key:"size_edit",fn:function(n){var i=n.row;return[t("vxe-input",{model:{value:i.size,callback:function(t){e.$set(i,"size",t)},expression:"row.size"}})]}},{key:"createtime_edit",fn:function(n){var i=n.row;return[t("vxe-input",{attrs:{type:"date",labelFormat:"yyyy-MM-dd HH:mm:ss",transfer:""},model:{value:i.createTime,callback:function(t){e.$set(i,"createTime",t)},expression:"row.createTime"}})]}},{key:"updatetime_edit",fn:function(n){var i=n.row;return[t("vxe-input",{attrs:{type:"date",labelFormat:"yyyy-MM-dd HH:mm:ss",transfer:""},model:{value:i.updateTime,callback:function(t){e.$set(i,"updateTime",t)},expression:"row.updateTime"}})]}}])},"vxe-grid",e.gridOptions,!1)),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},a=[],d=(n(41539),n(92222),{data:function(){return{gridOptions:{showOverflow:!0,keepSource:!0,rowId:"id",rowConfig:{isHover:!0},columnConfig:{resizable:!0},treeConfig:{transform:!0,rowField:"id",parentField:"parentId"},exportConfig:{},toolbarConfig:{buttons:[{code:"reload",name:"Refresh"},{code:"mark_cancel",name:"MarkCancel"},{code:"save",name:"Save"}],export:!0,zoom:!0,custom:!0},checkboxConfig:{labelField:"id"},editConfig:{trigger:"click",mode:"row",showStatus:!0},proxyConfig:{props:{message:"msg"},ajax:{query:function(){return new Promise((function(e){setTimeout((function(){var t=[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}];e(t)}),500)}))},save:function(e){var t=e.body,n=t.updateRecords,i=t.pendingRecords;return new Promise((function(e){setTimeout((function(){e({msg:"保存成功，修改 ".concat(n.length," 条，标记删除 ").concat(i.length," 条")})}),500)}))}}},columns:[{type:"checkbox",title:"全选",width:120},{field:"name",title:"名称",width:220,treeNode:!0,editRender:{},slots:{edit:"name_edit"}},{field:"size",title:"大小",editRender:{},slots:{edit:"size_edit"}},{field:"createTime",title:"CreateTime",editRender:{},slots:{edit:"createtime_edit"}},{field:"updateTime",title:"UpdateTime",editRender:{},slots:{edit:"updatetime_edit"}}]},demoCodes:['\n        <vxe-grid v-bind="gridOptions">\n          <template #name_edit="{ row }">\n            <vxe-input v-model="row.name"></vxe-input>\n          </template>\n          <template #size_edit="{ row }">\n            <vxe-input v-model="row.size"></vxe-input>\n          </template>\n          <template #createtime_edit="{ row }">\n            <vxe-input v-model="row.createTime" type="date" labelFormat="yyyy-MM-dd HH:mm:ss" transfer></vxe-input>\n          </template>\n          <template #updatetime_edit="{ row }">\n            <vxe-input v-model="row.updateTime" type="date" labelFormat="yyyy-MM-dd HH:mm:ss" transfer></vxe-input>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                showOverflow: true,\n                keepSource: true,\n                rowId: 'id',\n                rowConfig: {\n                  isHover: true\n                },\n                columnConfig: {\n                  resizable: true\n                },\n                treeConfig: {\n                  transform: true,\n                  rowField: 'id',\n                  parentField: 'parentId'\n                },\n                exportConfig: {},\n                toolbarConfig: {\n                  buttons: [\n                    { code: 'reload', name: 'Refresh' },\n                    { code: 'mark_cancel', name: 'MarkCancel' },\n                    { code: 'save', name: 'Save' }\n                  ],\n                  export: true,\n                  zoom: true,\n                  custom: true\n                },\n                checkboxConfig: {\n                  labelField: 'id'\n                },\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row',\n                  showStatus: true\n                },\n                proxyConfig: {\n                  props: {\n                    message: 'msg' // 设置保存成功后提示消息字段\n                  },\n                  ajax: {\n                    query: () => {\n                      // 模拟后台接口\n                      return new Promise(resolve => {\n                        setTimeout(() => {\n                          const list = [\n                            { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                            { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                            { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                            { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                            { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                            { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                            { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                            { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                            { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                            { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                            { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n                          ]\n                          resolve(list)\n                        }, 500)\n                      })\n                    },\n                    save: ({ body }) => {\n                      const { updateRecords, pendingRecords } = body\n                      // 模拟后台接口\n                      return new Promise(resolve => {\n                        setTimeout(() => {\n                          resolve({\n                            msg: `保存成功，修改 ${updateRecords.length} 条，标记删除 ${pendingRecords.length} 条`\n                          })\n                        }, 500)\n                      })\n                    }\n                  }\n                },\n                columns: [\n                  { type: 'checkbox', title: '全选', width: 120 },\n                  { field: 'name', title: '名称', width: 220, treeNode: true, editRender: {}, slots: { edit: 'name_edit' } },\n                  { field: 'size', title: '大小', editRender: {}, slots: { edit: 'size_edit' } },\n                  { field: 'createTime', title: 'CreateTime', editRender: {}, slots: { edit: 'createtime_edit' } },\n                  { field: 'updateTime', title: 'UpdateTime', editRender: {}, slots: { edit: 'updatetime_edit' } }\n                ]\n              }\n            }\n          }\n        }\n        "]}}}),s=d,r=n(1001),o=(0,r.Z)(s,i,a,!1,null,null,null),p=o.exports}}]);