"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2403],{82403:function(e,n,a){a.r(n),a.d(n,{default:function(){return v}});a(68309);var t=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v(" 改变图标，通过设置 "),n("table-api-link",{attrs:{prop:"expand-config"}}),e._v("={"),n("table-api-link",{attrs:{prop:"iconOpen"}}),e._v(", "),n("table-api-link",{attrs:{prop:"iconClose"}}),e._v("} 局部替换默认的图标"),n("br"),e._v(" 也可以通过 "),n("table-column-api-link",{attrs:{prop:"slot"}}),e._v(" 自定义内容模板，还可以使用 "),n("router-link",{staticClass:"link",attrs:{to:{name:"RendererExpand"}}},[e._v("渲染器")]),e._v(" 创建可复用的展开行内容模板 ")],1),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:function(n){return e.$refs.xTable.toggleRowExpand(e.tableData[1])}}},[e._v("切换第二行展开")]),n("vxe-button",{on:{click:function(n){return e.$refs.xTable.setRowExpand([e.tableData[2],e.tableData[3]],!0)}}},[e._v("设置第三、四行展开")]),n("vxe-button",{on:{click:function(n){return e.$refs.xTable.setAllRowExpand(!0)}}},[e._v("设置所有行展开")]),n("vxe-button",{on:{click:function(n){return e.$refs.xTable.clearRowExpand()}}},[e._v("关闭所有行展开")])]},proxy:!0}])}),n("vxe-table",{ref:"xTable",attrs:{border:"","expand-config":{iconOpen:"vxe-icon-square-minus",iconClose:"vxe-icon-square-plus"},data:e.tableData}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{type:"expand",title:"Name"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.name))])]}},{key:"content",fn:function(a){var t=a.row,s=a.rowIndex;return[1===s?n("div",{staticClass:"expand-wrapper"},[n("vxe-table",{attrs:{border:"",data:e.tableData}},[n("vxe-column",{attrs:{field:"role",title:"Role"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1)],1):n("div",{staticClass:"expand-wrapper"},[n("ul",[n("li",[n("span",[e._v("ID：")]),n("span",[e._v(e._s(t.id))])]),n("li",[n("span",[e._v("Name：")]),n("span",[e._v(e._s(t.name))])]),n("li",[n("span",[e._v("UpdateTime：")]),n("span",[e._v(e._s(t.updateTime))])]),n("li",[n("span",[e._v("CreateTime：")]),n("span",[e._v(e._s(t.createTime))])])])])]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1),n("p",{staticClass:"tip"},[e._v("还可以通过 "),n("table-api-link",{attrs:{prop:"expand-config"}}),e._v("={"),n("table-api-link",{attrs:{prop:"toggleMethod"}}),e._v("} 方法实现展开与关闭的细节处理，返回值用来决定是否允许继续执行")],1),n("vxe-table",{attrs:{border:"","expand-config":{toggleMethod:e.toggleExpandMethod},data:e.tableData}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{type:"expand",title:"Name"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.name))])]}},{key:"content",fn:function(a){var t=a.row,s=a.rowIndex;return[1===s?n("div",{staticClass:"expand-wrapper"},[n("vxe-table",{attrs:{border:"",data:e.tableData}},[n("vxe-column",{attrs:{field:"role",title:"Role"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1)],1):n("div",{staticClass:"expand-wrapper"},[n("ul",[n("li",[n("span",[e._v("ID：")]),n("span",[e._v(e._s(t.id))])]),n("li",[n("span",[e._v("Name：")]),n("span",[e._v(e._s(t.name))])]),n("li",[n("span",[e._v("UpdateTime：")]),n("span",[e._v(e._s(t.updateTime))])]),n("li",[n("span",[e._v("CreateTime：")]),n("span",[e._v(e._s(t.createTime))])])])])]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1),n("p",{staticClass:"tip"},[e._v("还可以通过 "),n("table-api-link",{attrs:{prop:"expand-config"}}),e._v("={"),n("table-api-link",{attrs:{prop:"visibleMethod"}}),e._v("} 方法实现权限控制，返回值用来决定是否显示展开按钮")],1),n("vxe-table",{attrs:{border:"","expand-config":{visibleMethod:e.expandVisibleMethod},data:e.tableData}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{type:"expand",title:"Name"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.name))])]}},{key:"content",fn:function(a){var t=a.row,s=a.rowIndex;return[1===s?n("div",{staticClass:"expand-wrapper"},[n("vxe-table",{attrs:{border:"",data:e.tableData}},[n("vxe-column",{attrs:{field:"role",title:"Role"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1)],1):n("div",{staticClass:"expand-wrapper"},[n("ul",[n("li",[n("span",[e._v("ID：")]),n("span",[e._v(e._s(t.id))])]),n("li",[n("span",[e._v("Name：")]),n("span",[e._v(e._s(t.name))])]),n("li",[n("span",[e._v("UpdateTime：")]),n("span",[e._v(e._s(t.updateTime))])]),n("li",[n("span",[e._v("CreateTime：")]),n("span",[e._v(e._s(t.createTime))])])])])]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[6]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[7]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[8]))]),e._v("\n  ")],1)],1)},s=[],l=a(69851),r=a.n(l),o={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],demoCodes:['\n        <vxe-table\n          ref="xTable"\n          border\n          :expand-config="{iconOpen: \'vxe-icon-square-minus\', iconClose: \'vxe-icon-square-plus\'}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column type="expand" title="Name">\n            <template #default="{ row, rowIndex }">\n              <span>{{ row.name }}</span>\n            </template>\n            <template #content="{ row, rowIndex }">\n              <div v-if="rowIndex === 1" class="expand-wrapper">\n                <vxe-table\n                  border\n                  :data="tableData">\n                  <vxe-column field="role" title="Role"></vxe-column>\n                  <vxe-column field="age" title="Age"></vxe-column>\n                </vxe-table>\n              </div>\n              <div v-else class="expand-wrapper">\n                <ul>\n                  <li>\n                    <span>ID：</span>\n                    <span>{{ row.id }}</span>\n                  </li>\n                  <li>\n                    <span>Name：</span>\n                    <span>{{ row.name }}</span>\n                  </li>\n                  <li>\n                    <span>UpdateTime：</span>\n                    <span>{{ row.updateTime }}</span>\n                  </li>\n                  <li>\n                    <span>CreateTime：</span>\n                    <span>{{ row.createTime }}</span>\n                  </li>\n                </ul>\n              </div>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        ","\n        .expand-wrapper {\n          padding: 20px;\n        }\n        ",'\n        <vxe-table\n          border\n          :expand-config="{toggleMethod: toggleExpandMethod}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column type="expand" title="Name">\n            <template #default="{ row, rowIndex }">\n              <span>{{ row.name }}</span>\n            </template>\n            <template #content="{ row, rowIndex }">\n              <div v-if="rowIndex === 1" class="expand-wrapper">\n                <vxe-table\n                  border\n                  :data="tableData">\n                  <vxe-column field="role" title="Role"></vxe-column>\n                  <vxe-column field="age" title="Age"></vxe-column>\n                </vxe-table>\n              </div>\n              <div v-else class="expand-wrapper">\n                <ul>\n                  <li>\n                    <span>ID：</span>\n                    <span>{{ row.id }}</span>\n                  </li>\n                  <li>\n                    <span>Name：</span>\n                    <span>{{ row.name }}</span>\n                  </li>\n                  <li>\n                    <span>UpdateTime：</span>\n                    <span>{{ row.updateTime }}</span>\n                  </li>\n                  <li>\n                    <span>CreateTime：</span>\n                    <span>{{ row.createTime }}</span>\n                  </li>\n                </ul>\n              </div>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            toggleExpandMethod ({ expanded, row }) {\n              if (expanded) {\n                if (row.sex === '1') {\n                  VXETable.modal.message({ id: 'openErr', content: '不允许展开', status: 'error' })\n                  return false\n                }\n              } else {\n                if (row.sex === '0') {\n                  VXETable.modal.message({ id: 'closeErr', content: '不允许关闭', status: 'error' })\n                  return false\n                }\n              }\n              return true\n            }\n          }\n        }\n        ","\n        .expand-wrapper {\n          padding: 20px;\n        }\n        ",'\n        <vxe-table\n          border\n          :expand-config="{visibleMethod: expandVisibleMethod}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column type="expand" title="Name">\n            <template #default="{ row, rowIndex }">\n              <span>{{ row.name }}</span>\n            </template>\n            <template #content="{ row, rowIndex }">\n              <div v-if="rowIndex === 1" class="expand-wrapper">\n                <vxe-table\n                  border\n                  :data="tableData">\n                  <vxe-column field="role" title="Role"></vxe-column>\n                  <vxe-column field="age" title="Age"></vxe-column>\n                </vxe-table>\n              </div>\n              <div v-else class="expand-wrapper">\n                <ul>\n                  <li>\n                    <span>ID：</span>\n                    <span>{{ row.id }}</span>\n                  </li>\n                  <li>\n                    <span>Name：</span>\n                    <span>{{ row.name }}</span>\n                  </li>\n                  <li>\n                    <span>UpdateTime：</span>\n                    <span>{{ row.updateTime }}</span>\n                  </li>\n                  <li>\n                    <span>CreateTime：</span>\n                    <span>{{ row.createTime }}</span>\n                  </li>\n                </ul>\n              </div>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            expandVisibleMethod ({ row }) {\n              if (row.sex === '1') {\n                return false\n              }\n              return true\n            }\n          }\n        }\n        ","\n        .expand-wrapper {\n          padding: 20px;\n        }\n        "]}},methods:{toggleExpandMethod:function(e){var n=e.expanded,a=e.row;if(n){if("1"===a.sex)return r().modal.message({id:"openErr",content:"不允许展开",status:"error"}),!1}else if("0"===a.sex)return r().modal.message({id:"closeErr",content:"不允许关闭",status:"error"}),!1;return!0},expandVisibleMethod:function(e){var n=e.row;return"1"!==n.sex}}},d=o,i=a(1001),p=(0,i.Z)(d,t,s,!1,null,"28057870",null),v=p.exports}}]);