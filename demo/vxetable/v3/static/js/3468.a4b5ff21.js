"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[3468],{3468:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("最大高度，通过设置 "),t("table-api-link",{attrs:{prop:"max-height"}}),e._v(" 启用，当数据少时自适应")],1),t("vxe-table",{attrs:{border:"",resizable:"","show-footer":"","show-overflow":"","max-height":"400",loading:e.loading,data:e.tableData1,"footer-method":e.footerMethod}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"100"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200"}}),t("vxe-column",{attrs:{field:"age",title:"Age",width:"120"}}),t("vxe-column",{attrs:{field:"rate",title:"Rate",width:"120"}}),t("vxe-column",{attrs:{field:"region",title:"Region",width:"200"}}),t("vxe-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}}),t("vxe-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),t("vxe-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("当数据超过最大高度时自动显示滚动条")]),t("vxe-table",{attrs:{border:"",resizable:"","show-footer":"","show-overflow":"","max-height":"400",loading:e.loading,data:e.tableData2,"footer-method":e.footerMethod}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"100"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200"}}),t("vxe-column",{attrs:{field:"age",title:"Age",width:"120"}}),t("vxe-column",{attrs:{field:"rate",title:"Rate",width:"120"}}),t("vxe-column",{attrs:{field:"time",title:"Time",width:"200"}}),t("vxe-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),t("vxe-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1)],1)},o=[],l=(n(41539),n(54747),n(9653),n(21249),n(26699),n(56977),{data:function(){return{loading:!1,tableData1:[],tableData2:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          show-footer\n          show-overflow\n          max-height="400"\n          :loading="loading"\n          :data="tableData"\n          :footer-method="footerMethod">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" sortable width="200"></vxe-column>\n          <vxe-column field="age" title="Age" width="120"></vxe-column>\n          <vxe-column field="rate" title="Rate" width="120"></vxe-column>\n          <vxe-column field="region" title="Region" width="200"></vxe-column>\n          <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>\n          <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>\n          <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' }\n              ]\n              this.loading = false\n            }, 300)\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.meanNum(data, column.property).toFixed(2)\n                  }\n                  return null\n                }),\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          resizable\n          show-footer\n          show-overflow\n          max-height="400"\n          :loading="loading"\n          :data="tableData"\n          :footer-method="footerMethod">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" sortable width="200"></vxe-column>\n          <vxe-column field="age" title="Age" width="120"></vxe-column>\n          <vxe-column field="rate" title="Rate" width="120"></vxe-column>\n          <vxe-column field="time" title="Time" width="200"></vxe-column>\n          <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>\n          <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },\n                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },\n                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }\n              ]\n              this.loading = false\n            }, 300)\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.meanNum(data, column.property).toFixed(2)\n                  }\n                  return null\n                }),\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData1=[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"}],e.tableData2=[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"},{id:10009,name:"Test9",role:"Test",sex:"1",age:26,amount:2e3,address:"test abc"},{id:100010,name:"Test10",role:"Develop",sex:"1",age:21,amount:666,address:"test abc"}],e.loading=!1}),300)},methods:{meanNum:function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n/e.length},sumNum:function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n},footerMethod:function(e){var t=this,n=e.columns,a=e.data,o=[n.map((function(e,n){return 0===n?"平均":["age","rate"].includes(e.property)?t.meanNum(a,e.property).toFixed(2):null})),n.map((function(e,n){return 0===n?"和值":["age","rate"].includes(e.property)?t.sumNum(a,e.property):null}))];return o}}}),s=l,i=n(1001),d=(0,i.Z)(s,a,o,!1,null,null,null),r=d.exports}}]);