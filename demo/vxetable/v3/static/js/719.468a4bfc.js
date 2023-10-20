"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[719],{80719:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var l=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("右键菜单，支持表头菜单、内容菜单、表尾菜单，通过 "),n("table-api-link",{attrs:{prop:"visibleMethod"}}),e._v(" 和 "),n("table-api-link",{attrs:{prop:"visible"}}),e._v(" | "),n("table-api-link",{attrs:{prop:"disabled"}}),e._v(" 属性来控制菜单选项的操作权限")],1),n("vxe-table",{ref:"xTable",attrs:{border:"","show-footer":"",height:"400","row-config":{isCurrent:!0},"column-config":{isCurrent:!0},"footer-method":e.footerMethod,data:e.tableData,"menu-config":e.tableMenu},on:{"header-cell-menu":e.headerCellContextMenuEvent,"cell-menu":e.cellContextMenuEvent,"menu-click":e.contextMenuClickEvent}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),n("vxe-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}}),n("vxe-column",{attrs:{field:"time",title:"Time"}})],1),n("pre",[e._v("    "),n("pre-code",[e._v("\n      | Arrow Up ↑ | 移动到上一个菜单选项 |\n      | Arrow Down ↓ | 移动到下一个菜单选项 |\n      | Arrow Left ← | 关闭二级菜单 |\n      | Arrow Right → | 打开二级菜单 |\n      | Esc | 关闭菜单选项 |\n      | Enter | 选中当前菜单选项 |\n      | Spacebar | 选中当前菜单选项 |\n    ")]),e._v("\n  ")],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[],i=(t(41539),t(54747),t(26699),t(68309),t(9653),t(21249),t(1026)),a=t(69851),s=t.n(a),r={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:36,address:"Guangzhou"}],tableMenu:{header:{options:[[{code:"exportAll",name:"导出所有.csv",visible:!0,disabled:!1}]]},body:{options:[[{code:"details",name:"查看详情",prefixIcon:"vxe-icon-link",visible:!0,disabled:!1}],[{code:"copy",name:"app.body.label.copy",prefixIcon:"vxe-icon-copy",visible:!0,disabled:!1},{code:"clear",name:"清除内容",prefixIcon:"vxe-icon-copy",visible:!0,disabled:!1}],[{code:"remove",name:"删除",visible:!0,disabled:!1},{code:"filter",name:"app.body.label.filter",visible:!0,disabled:!1,children:[{code:"clearFilter",name:"清除筛选",visible:!0,disabled:!1},{code:"filterSelect",name:"按所选单元格的值筛选",visible:!0,disabled:!1}]},{code:"sort",name:"app.body.label.sort",visible:!0,disabled:!1,children:[{code:"clearSort",name:"清除排序",visible:!0,disabled:!1},{code:"sortAsc",name:"升序",visible:!0,disabled:!1},{code:"sortDesc",name:"倒序",visible:!0,disabled:!1}]},{code:"print",name:"打印",disabled:!0}]]},footer:{options:[[{code:"clearAll",name:"清空数据",visible:!0,disabled:!1}]]},visibleMethod:this.visibleMethod},demoCodes:['\n        <vxe-table\n          border\n          show-footer\n          ref="xTable"\n          height="400"\n          :row-config="{isCurrent: true}"\n          :column-config="{isCurrent: true}"\n          :footer-method="footerMethod"\n          :data="tableData"\n          :menu-config="tableMenu"\n          @header-cell-menu="headerCellContextMenuEvent"\n          @cell-menu="cellContextMenuEvent"\n          @menu-click="contextMenuClickEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="time" title="Time"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEClipboard from 'xe-clipboard'\n        import VXETable from 'vxe-table'\n\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' }\n              ],\n              tableMenu: {\n                header: {\n                  options: [\n                    [\n                      { code: 'exportAll', name: '导出所有.csv', visible: true, disabled: false }\n                    ]\n                  ]\n                },\n                body: {\n                  options: [\n                    [\n                      { code: 'details', name: '查看详情', prefixIcon: 'vxe-icon-link', visible: true, disabled: false }\n                    ],\n                    [\n                      { code: 'copy', name: 'app.body.label.copy', prefixIcon: 'vxe-icon-copy', visible: true, disabled: false },\n                      { code: 'clear', name: '清除内容', prefixIcon: 'vxe-icon-copy', visible: true, disabled: false }\n                    ],\n                    [\n                      { code: 'remove', name: '删除', visible: true, disabled: false },\n                      {\n                        code: 'filter',\n                        name: 'app.body.label.filter',\n                        visible: true,\n                        disabled: false,\n                        children: [\n                          { code: 'clearFilter', name: '清除筛选', visible: true, disabled: false },\n                          { code: 'filterSelect', name: '按所选单元格的值筛选', visible: true, disabled: false }\n                        ]\n                      },\n                      {\n                        code: 'sort',\n                        name: 'app.body.label.sort',\n                        visible: true,\n                        disabled: false,\n                        children: [\n                          { code: 'clearSort', name: '清除排序', visible: true, disabled: false },\n                          { code: 'sortAsc', name: '升序', visible: true, disabled: false },\n                          { code: 'sortDesc', name: '倒序', visible: true, disabled: false }\n                        ]\n                      },\n                      { code: 'print', name: '打印', disabled: true }\n                    ]\n                  ]\n                },\n                footer: {\n                  options: [\n                    [\n                      { code: 'clearAll', name: '清空数据', visible: true, disabled: false }\n                    ]\n                  ]\n                },\n                visibleMethod: this.visibleMethod\n              }\n            }\n          },\n          methods: {\n            headerCellContextMenuEvent ({ column }) {\n              this.$refs.xTable.setCurrentColumn(column)\n            },\n            cellContextMenuEvent ({ row }) {\n              this.$refs.xTable.setCurrentRow(row)\n            },\n            visibleMethod ({ options, column }) {\n              // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示\n              // 显示之前处理按钮的操作权限\n              const isDisabled = !column || column.property !== 'name'\n              const isVisible = column && column.property === 'age'\n              options.forEach(list => {\n                list.forEach(item => {\n                  if (column) {\n                    item.disabled = false\n                    if (['copy', 'remove'].includes(item.code)) {\n                      item.disabled = isDisabled\n                    }\n                    if (['details'].includes(item.code)) {\n                      item.visible = column.property === 'name'\n                    } else if (['clear', 'filter'].includes(item.code)) {\n                      item.visible = isVisible\n                    }\n                  } else {\n                    item.disabled = true\n                  }\n                  if (item.children) {\n                    item.children.forEach(childItem => {\n                      childItem.disabled = item.disabled\n                    })\n                  }\n                })\n              })\n              return true\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              switch (menu.code) {\n                case 'copy':\n                  // 示例\n                  if (row && column) {\n                    if (XEClipboard.copy(row[column.property])) {\n                      VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })\n                    }\n                  }\n                  break\n                default:\n                  VXETable.modal.message({ content: `点击了 \"${menu.name}\"`, status: 'info' })\n              }\n            },\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return parseInt(this.meanNum(data, column.property))\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        "]}},methods:{headerCellContextMenuEvent:function(e){var n=e.column;this.$refs.xTable.setCurrentColumn(n)},cellContextMenuEvent:function(e){var n=e.row;this.$refs.xTable.setCurrentRow(n)},visibleMethod:function(e){var n=e.options,t=e.column,l=!t||"name"!==t.property,o=t&&"age"===t.property;return n.forEach((function(e){e.forEach((function(e){t?(e.disabled=!1,["copy","remove"].includes(e.code)&&(e.disabled=l),["details"].includes(e.code)?e.visible="name"===t.property:["clear","filter"].includes(e.code)&&(e.visible=o)):e.disabled=!0,e.children&&e.children.forEach((function(n){n.disabled=e.disabled}))}))})),!0},contextMenuClickEvent:function(e){var n=e.menu,t=e.row,l=e.column;switch(n.code){case"copy":t&&l&&i.Z.copy(t[l.property])&&s().modal.message({content:"已复制到剪贴板！",status:"success"});break;default:s().modal.message({content:'点击了 "'.concat(n.name,'"'),status:"info"})}},meanNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},footerMethod:function(e){var n=this,t=e.columns,l=e.data;return[t.map((function(e,t){return 0===t?"平均":["age","rate"].includes(e.property)?parseInt(n.meanNum(l,e.property)):null}))]}}},d=r,c=t(1001),u=(0,c.Z)(d,l,o,!1,null,null,null),m=u.exports}}]);