"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[9070],{79070:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});var t=function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"tip"},[e._v(" 分页"),a("br"),e._v(" 响应结果默认必须是数组，非数组情况下可以通过 "),a("grid-api-link",{attrs:{prop:"props"}}),e._v(" 修改 ")],1),a("vxe-grid",{attrs:{border:"",resizable:"",height:"530",loading:e.loading,"seq-config":{startIndex:(e.tablePage.currentPage-1)*e.tablePage.pageSize},columns:e.tableColumn,data:e.tableData},scopedSlots:e._u([{key:"pager",fn:function(){return[a("vxe-pager",{attrs:{layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],"current-page":e.tablePage.currentPage,"page-size":e.tablePage.pageSize,total:e.tablePage.total},on:{"update:currentPage":function(a){return e.$set(e.tablePage,"currentPage",a)},"update:current-page":function(a){return e.$set(e.tablePage,"currentPage",a)},"update:pageSize":function(a){return e.$set(e.tablePage,"pageSize",a)},"update:page-size":function(a){return e.$set(e.tablePage,"pageSize",a)},"page-change":e.handlePageChange}})]},proxy:!0}])}),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],i={data:function(){return{loading:!1,tablePage:{total:0,currentPage:1,pageSize:10},tableColumn:[{type:"seq",width:60},{type:"checkbox",width:50},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"role",title:"Role"},{field:"address",title:"Address",showOverflow:!0}],tableData:[],demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          height="530"\n          :loading="loading"\n          :seq-config="{startIndex: (tablePage.currentPage - 1) * tablePage.pageSize}"\n          :columns="tableColumn"\n          :data="tableData">\n          <template #pager>\n            <vxe-pager\n              :layouts="[\'Sizes\', \'PrevJump\', \'PrevPage\', \'Number\', \'NextPage\', \'NextJump\', \'FullJump\', \'Total\']"\n              :current-page.sync="tablePage.currentPage"\n              :page-size.sync="tablePage.pageSize"\n              :total="tablePage.total"\n              @page-change="handlePageChange">\n            </vxe-pager>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tablePage: {\n                total: 0,\n                currentPage: 1,\n                pageSize: 10\n              },\n              tableColumn: [\n                { type: 'seq', width: 60 },\n                { type: 'checkbox', width: 50 },\n                { field: 'name', title: 'Name' },\n                { field: 'nickname', title: 'Nickname' },\n                { field: 'role', title: 'Role' },\n                { field: 'address', title: 'Address', showOverflow: true }\n              ],\n              tableData: []\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              setTimeout(() => {\n                this.loading = false\n                this.tablePage.total = 10\n                this.tableData = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },\n                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },\n                  { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }\n                ]\n              }, 300)\n            },\n            searchEvent () {\n              this.tablePage.currentPage = 1\n              this.findList()\n            },\n            handlePageChange ({ currentPage, pageSize }) {\n              this.tablePage.currentPage = currentPage\n              this.tablePage.pageSize = pageSize\n              this.findList()\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.tablePage.total=10,e.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Develop",sex:"0",age:27,address:"Shanghai"},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"1",age:29,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"0",age:32,address:"Shanghai"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"1",age:30,address:"Shenzhen"},{id:10010,name:"Test10",nickname:"T10",role:"Develop",sex:"0",age:34,address:"Shanghai"}]}),300)},searchEvent:function(){this.tablePage.currentPage=1,this.findList()},handlePageChange:function(e){var a=e.currentPage,n=e.pageSize;this.tablePage.currentPage=a,this.tablePage.pageSize=n,this.findList()}}},r=i,l=n(1001),d=(0,l.Z)(r,t,s,!1,null,null,null),g=d.exports}}]);