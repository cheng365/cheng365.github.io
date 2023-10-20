"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[72024],{72024:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(66252),d=n(3577),i={class:"tip"},s={class:"demo-code"};function p(e,t,n,p,l,r){var m=(0,a.up)("table-api-link"),u=(0,a.up)("vxe-column"),o=(0,a.up)("vxe-table"),y=(0,a.up)("pre-code");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",i,[(0,a.Uk)(" 斑马线条纹，通过设置 "),(0,a.Wm)(m,{prop:"stripe"}),(0,a.Uk)(" 参数 ")]),(0,a.Wm)(o,{stripe:"","tree-config":{transform:!0},data:e.tableData},{default:(0,a.w5)((function(){return[(0,a.Wm)(u,{type:"seq",width:"100"}),(0,a.Wm)(u,{field:"name",title:"Name","tree-node":""}),(0,a.Wm)(u,{field:"size",title:"Size"}),(0,a.Wm)(u,{field:"type",title:"Type"}),(0,a.Wm)(u,{field:"date",title:"Date"})]})),_:1},8,["data"]),(0,a._)("p",s,(0,d.zw)(e.$t("app.body.button.showCode")),1),(0,a._)("pre",null,[(0,a.Uk)("      "),(0,a.Wm)(y,{class:"xml"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,d.zw)(e.demoCodes[0]),1)]})),_:1}),(0,a.Uk)("\n      "),(0,a.Wm)(y,{class:"typescript"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,d.zw)(e.demoCodes[1]),1)]})),_:1}),(0,a.Uk)("\n    ")])])}var l=n(2262),r=(0,a.aZ)({setup:function(){var e=(0,l.iH)([{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}]);return{tableData:e,demoCodes:['\n        <vxe-table\n          stripe\n          :tree-config="{transform: true}"\n          :data="tableData">\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const tableData = ref([\n              { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n              { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n              { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n              { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n              { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n              { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n              { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n              { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n              { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n              { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n              { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n            ])\n            return {\n              tableData\n            }\n          }\n        })\n        "]}}}),m=n(83744);const u=(0,m.Z)(r,[["render",p]]);var o=u}}]);