"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2656],{62656:function(e,n,o){o.r(n),o.d(n,{default:function(){return u}});var t=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("右键菜单，支持表头菜单、内容菜单、表尾菜单，自定义样式，配置项 "),n("table-api-link",{attrs:{prop:"menu-config"}}),e._v("={header,body,footer}")],1),n("vxe-table",{ref:"xTable",attrs:{border:"","show-footer":"","row-config":{isCurrent:!0},"column-config":{isCurrent:!0},"footer-method":e.footerMethod,data:e.tableData,"menu-config":e.tableMenu},on:{"menu-click":e.contextMenuClickEvent}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),n("vxe-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}}),n("vxe-column",{attrs:{field:"time",title:"Time"}})],1),n("pre",[e._v("    "),n("pre-code",[e._v("\n      | Arrow Up ↑ | 移动到上一个菜单选项 |\n      | Arrow Down ↓ | 移动到下一个菜单选项 |\n      | Arrow Left ← | 关闭二级菜单 |\n      | Arrow Right → | 打开二级菜单 |\n      | Esc | 关闭菜单选项 |\n      | Enter | 选中当前菜单选项 |\n      | Spacebar | 选中当前菜单选项 |\n    ")]),e._v("\n  ")],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},a=[],r=(o(68309),o(41539),o(54747),o(9653),o(21249),o(26699),o(1026)),s=o(69851),c=o.n(s),l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:36,address:"Guangzhou"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:24,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Man",age:34,address:"test abc"}],tableMenu:{className:"my-menus",header:{options:[[{code:"exportAll",name:"导出所有.csv"}]]},body:{options:[[{code:"copy",name:"app.body.label.copy",prefixIcon:"vxe-icon-copy",className:"my-copy-item"}],[{code:"remove",name:"删除",prefixIcon:"vxe-icon-delete color-red"},{name:"筛选",children:[{code:"clearFilter",name:"清除筛选"},{code:"filterSelect",name:"按所选单元格的值筛选"}]},{code:"sort",name:"排序",children:[{code:"clearSort",name:"清除排序"},{code:"sortAsc",name:"升序",prefixIcon:"vxe-icon-sort-alpha-asc"},{code:"sortDesc",name:"倒序",prefixIcon:"vxe-icon-sort-alpha-desc"}]},{code:"print",name:"打印",disabled:!0}]]},footer:{options:[[{code:"clearAll",name:"清空数据"}]]}},demoCodes:['\n        <vxe-table\n          border\n          show-footer\n          ref="xTable"\n          :row-config="{isCurrent: true}"\n          :column-config="{isCurrent: true}"\n          :footer-method="footerMethod"\n          :data="tableData"\n          :menu-config="tableMenu"\n          @menu-click="contextMenuClickEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="time" title="Time"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEClipboard from 'xe-clipboard'\n        import VXETable from 'vxe-table'\n\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' }\n              ],\n              tableMenu: {\n                className: 'my-menus',\n                header: {\n                  options: [\n                    [\n                      { code: 'exportAll', name: '导出所有.csv' }\n                    ]\n                  ]\n                },\n                body: {\n                  options: [\n                    [\n                      { code: 'copy', name: 'app.body.label.copy', prefixIcon: 'vxe-icon-copy', className: 'my-copy-item' }\n                    ],\n                    [\n                      { code: 'remove', name: '删除', prefixIcon: 'vxe-icon-delete color-red' },\n                      {\n                        name: '筛选',\n                        children: [\n                          { code: 'clearFilter', name: '清除筛选' },\n                          { code: 'filterSelect', name: '按所选单元格的值筛选' }\n                        ]\n                      },\n                      {\n                        code: 'sort',\n                        name: '排序',\n                        children: [\n                          { code: 'clearSort', name: '清除排序' },\n                          { code: 'sortAsc', name: '升序', prefixIcon: 'vxe-icon-sort-alpha-asc' },\n                          { code: 'sortDesc', name: '倒序', prefixIcon: 'vxe-icon-sort-alpha-desc' }\n                        ]\n                      },\n                      { code: 'print', name: '打印', disabled: true }\n                    ]\n                  ]\n                },\n                footer: {\n                  options: [\n                    [\n                      { code: 'clearAll', name: '清空数据' }\n                    ]\n                  ]\n                }\n              }\n            }\n          },\n          methods: {\n            contextMenuClickEvent ({ menu, row, column }) {\n              switch (menu.code) {\n                case 'copy':\n                  // 示例\n                  if (row && column) {\n                    if (XEClipboard.copy(row[column.property])) {\n                      VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })\n                    }\n                  }\n                  break\n                default:\n                  VXETable.modal.message(`点击了 ${menu.name} 选项`)\n              }\n            },\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return parseInt(this.meanNum(data, column.property))\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        ","\n        .my-menus {\n          background-color: #F8F8F9;\n        }\n        .my-menus .vxe-ctxmenu--link {\n          width: 200px;\n        }\n        .my-copy-item {\n          font-weight: 700;\n          font-style: oblique;\n        }\n        .color-red {\n          color: red;\n        }\n        .color-blue {\n          color: blue;\n        }\n        .color-orange {\n          color: orange;\n        }\n        "]}},methods:{contextMenuClickEvent:function(e){var n=e.menu,o=e.row,t=e.column;switch(n.code){case"copy":o&&t&&r.Z.copy(o[t.property])&&c().modal.message({content:"已复制到剪贴板！",status:"success"});break;default:c().modal.message("点击了 ".concat(n.name," 选项"))}},meanNum:function(e,n){var o=0;return e.forEach((function(e){o+=Number(e[n])})),o/e.length},footerMethod:function(e){var n=this,o=e.columns,t=e.data;return[o.map((function(e,o){return 0===o?"平均":["age","rate"].includes(e.property)?parseInt(n.meanNum(t,e.property)):null}))]}}},d=l,m=o(1001),i=(0,m.Z)(d,t,a,!1,null,null,null),u=i.exports}}]);