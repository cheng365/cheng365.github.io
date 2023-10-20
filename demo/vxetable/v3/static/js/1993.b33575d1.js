"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[1993],{21993:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("实现横向树列表"),n("br"),n("span",{staticClass:"red"},[e._v("（注："),n("table-api-link",{attrs:{prop:"span-method"}}),e._v(" ，不能用于树形结构、展开行、固定列，合并的逻辑都是自行实现的，该示例仅供参考）")],1)]),n("vxe-table",{attrs:{border:"",height:"600","scroll-y":{enabled:!1},"span-method":e.rowspanMethod,data:e.tableData}},[n("vxe-column",{attrs:{field:"name1",title:"功能模块"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("vxe-checkbox",{on:{change:function(n){return e.check1ChangeEvent(a,a.check1)}},model:{value:a.check1,callback:function(n){e.$set(a,"check1",n)},expression:"row.check1"}},[e._v(e._s(a.name1))])]}}])}),n("vxe-column",{attrs:{field:"name2",title:"详细功能"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("vxe-checkbox",{on:{change:function(n){return e.check2ChangeEvent(a,a.check2)}},model:{value:a.check2,callback:function(n){e.$set(a,"check2",n)},expression:"row.check2"}},[e._v(e._s(a.name2))])]}}])}),n("vxe-column",{attrs:{field:"name3",title:"权限类型"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("vxe-checkbox",{on:{change:function(n){return e.check3ChangeEvent(a,a.check3)}},model:{value:a.check3,callback:function(n){e.$set(a,"check3",n)},expression:"row.check3"}},[e._v(e._s(a.name3))])]}}])}),n("vxe-column",{attrs:{field:"name4",title:"权限列表"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("vxe-checkbox",{on:{change:function(n){return e.check4ChangeEvent(a,a.check4)}},model:{value:a.check4,callback:function(n){e.$set(a,"check4",n)},expression:"row.check4"}},[e._v(e._s(a.name4))])]}}])})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[],c=(t(57327),t(41539),t(54747),t(33948),t(92222),t(68309),t(57658),t(26699),t(38478)),r=t.n(c),d={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          border\n          height="600"\n          :scroll-y="{enabled: false}"\n          :span-method="rowspanMethod"\n          :data="tableData">\n          <vxe-column field="name1" title="功能模块">\n            <template #default="{ row }">\n              <vxe-checkbox v-model="row.check1" @change="check1ChangeEvent(row, row.check1)">{{ row.name1 }}</vxe-checkbox>\n            </template>\n          </vxe-column>\n          <vxe-column field="name2" title="详细功能">\n            <template #default="{ row }">\n              <vxe-checkbox v-model="row.check2" @change="check2ChangeEvent(row, row.check2)">{{ row.name2 }}</vxe-checkbox>\n            </template>\n          </vxe-column>\n          <vxe-column field="name3" title="权限类型">\n            <template #default="{ row }">\n              <vxe-checkbox v-model="row.check3" @change="check3ChangeEvent(row, row.check3)">{{ row.name3 }}</vxe-checkbox>\n            </template>\n          </vxe-column>\n          <vxe-column field="name4" title="权限列表">\n            <template #default="{ row }">\n              <vxe-checkbox v-model="row.check4" @change="check4ChangeEvent(row, row.check4)">{{ row.name4 }}</vxe-checkbox>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            const treeData = XEUtils.toArrayTree(this.getList())\n            this.toColTreeData(treeData)\n          },\n          methods: {\n            check1ChangeEvent (row, checked) {\n              const { tableData } = this\n              let childList = tableData.filter(item => item.name1 === row.name1)\n              childList.forEach(item => {\n                item.check1 = checked\n              })\n              childList = this.tableData.filter(item => item.id1 === row.id1)\n              childList.forEach(item => {\n                this.check2ChangeEvent(item, checked)\n              })\n            },\n            check2ChangeEvent (row, checked) {\n              const { tableData } = this\n              let childList = tableData.filter(item => item.id1 === row.id1 && item.name2 === row.name2)\n              childList.forEach(item => {\n                item.check2 = checked\n              })\n              childList = this.tableData.filter(item => item.id2 === row.id2)\n              childList.forEach(item => {\n                this.check3ChangeEvent(item, checked)\n              })\n            },\n            check3ChangeEvent (row, checked) {\n              const { tableData } = this\n              let childList = tableData.filter(item => item.id2 === row.id2 && item.name3 === row.name3)\n              childList.forEach(item => {\n                item.check3 = checked\n              })\n              childList = tableData.filter(item => item.id3 === row.id3)\n              childList.forEach(item => {\n                this.check4ChangeEvent(item, checked)\n              })\n            },\n            check4ChangeEvent (row, checked) {\n              const { tableData } = this\n              let childList = tableData.filter(item => item.id3 === row.id3 && item.name4 === row.name4)\n              childList.forEach(item => {\n                item.check4 = checked\n              })\n              childList = tableData.filter(item => item.id3 === row.id3)\n              const isChecked3 = childList.every(item => item.check4)\n              childList.forEach(item => {\n                item.check3 = isChecked3\n              })\n              childList = tableData.filter(item => item.id2 === row.id2)\n              const isChecked2 = childList.every(item => item.check3)\n              childList.forEach(item => {\n                item.check2 = isChecked2\n              })\n              childList = tableData.filter(item => item.id1 === row.id1)\n              const isChecked1 = childList.every(item => item.check2)\n              childList.forEach(item => {\n                item.check1 = isChecked1\n              })\n            },\n            getList () {\n              const list = [\n                { id: '10000', parentId: null, name: '账号管理' },\n                { id: '11000', parentId: '10000', name: '用户管理' },\n                { id: '11100', parentId: '11000', name: '查看' },\n                { id: '11110', parentId: '11100', name: '用户列表' },\n                { id: '11200', parentId: '11000', name: '编辑' },\n                { id: '11210', parentId: '11200', name: '用户列表' },\n                { id: '11220', parentId: '11200', name: '新增用户' },\n                { id: '11300', parentId: '11000', name: '操作' },\n                { id: '11310', parentId: '11300', name: '新增' },\n                { id: '11320', parentId: '11300', name: '删除' },\n                { id: '11330', parentId: '11300', name: '修改' },\n                { id: '12000', parentId: '10000', name: '角色管理' },\n                { id: '12100', parentId: '12000', name: '查看' },\n                { id: '12110', parentId: '12100', name: '角色列表' },\n                { id: '12200', parentId: '12000', name: '编辑' },\n                { id: '122100', parentId: '12200', name: '角色列表' },\n                { id: '12220', parentId: '12200', name: '新增角色' },\n                { id: '12300', parentId: '12000', name: '操作' },\n                { id: '12310', parentId: '12300', name: '新增' },\n                { id: '12320', parentId: '12300', name: '删除' },\n                { id: '12330', parentId: '12300', name: '修改' },\n                { id: '20000', parentId: null, name: '个人中心' },\n                { id: '21000', parentId: '20000', name: '个性化设置' },\n                { id: '21100', parentId: '21000', name: '查看' },\n                { id: '21110', parentId: '21100', name: '信息列表' },\n                { id: '21200', parentId: '21000', name: '操作' },\n                { id: '21210', parentId: '21200', name: '重置信息' },\n                { id: '22000', parentId: '20000', name: '账户管理' },\n                { id: '22100', parentId: '22000', name: '查看' },\n                { id: '22110', parentId: '22100', name: '账户余额' },\n                { id: '22120', parentId: '22100', name: '帐变记录' }\n              ]\n              return list\n            },\n            // 将普通树结构转换为横向树列表\n            toColTreeData (treeData) {\n              const options = { children: 'children' }\n              const list = []\n              const keyMap = {}\n              XEUtils.eachTree(treeData, (item, index, result, paths, parent) => {\n                keyMap[item.id] = item\n                item.keys = parent ? parent.keys.concat([item.id]) : [item.id]\n                if (!item.children || !item.children.length) {\n                  const row = { }\n                  item.keys.forEach((key, index) => {\n                    const level = index + 1\n                    const obj = keyMap[key]\n                    row[`check${level}`] = false\n                    row[`id${level}`] = obj.id\n                    row[`name${level}`] = obj.name\n                  })\n                  list.push(row)\n                }\n              }, options)\n              this.keyMap = keyMap\n              this.tableData = list\n            },\n            // 通用行合并函数（将相同多列数据合并为一行）\n            rowspanMethod ({ row, _rowIndex, column, visibleData }) {\n              const fields = ['name1', 'name2', 'name3']\n              const cellValue = row[column.property]\n              if (cellValue && fields.includes(column.property)) {\n                const prevRow = visibleData[_rowIndex - 1]\n                let nextRow = visibleData[_rowIndex + 1]\n                if (prevRow && prevRow[column.property] === cellValue) {\n                  return { rowspan: 0, colspan: 0 }\n                } else {\n                  let countRowspan = 1\n                  while (nextRow && nextRow[column.property] === cellValue) {\n                    nextRow = visibleData[++countRowspan + _rowIndex]\n                  }\n                  if (countRowspan > 1) {\n                    return { rowspan: countRowspan, colspan: 1 }\n                  }\n                }\n              }\n            }\n          }\n        }\n        "]}},created:function(){var e=r().toArrayTree(this.getList());this.toColTreeData(e)},methods:{check1ChangeEvent:function(e,n){var t=this,a=this.tableData,i=a.filter((function(n){return n.name1===e.name1}));i.forEach((function(e){e.check1=n})),i=this.tableData.filter((function(n){return n.id1===e.id1})),i.forEach((function(e){t.check2ChangeEvent(e,n)}))},check2ChangeEvent:function(e,n){var t=this,a=this.tableData,i=a.filter((function(n){return n.id1===e.id1&&n.name2===e.name2}));i.forEach((function(e){e.check2=n})),i=this.tableData.filter((function(n){return n.id2===e.id2})),i.forEach((function(e){t.check3ChangeEvent(e,n)}))},check3ChangeEvent:function(e,n){var t=this,a=this.tableData,i=a.filter((function(n){return n.id2===e.id2&&n.name3===e.name3}));i.forEach((function(e){e.check3=n})),i=a.filter((function(n){return n.id3===e.id3})),i.forEach((function(e){t.check4ChangeEvent(e,n)}))},check4ChangeEvent:function(e,n){var t=this.tableData,a=t.filter((function(n){return n.id3===e.id3&&n.name4===e.name4}));a.forEach((function(e){e.check4=n})),a=t.filter((function(n){return n.id3===e.id3}));var i=a.every((function(e){return e.check4}));a.forEach((function(e){e.check3=i})),a=t.filter((function(n){return n.id2===e.id2}));var c=a.every((function(e){return e.check3}));a.forEach((function(e){e.check2=c})),a=t.filter((function(n){return n.id1===e.id1}));var r=a.every((function(e){return e.check2}));a.forEach((function(e){e.check1=r}))},getList:function(){var e=[{id:"10000",parentId:null,name:"账号管理"},{id:"11000",parentId:"10000",name:"用户管理"},{id:"11100",parentId:"11000",name:"查看"},{id:"11110",parentId:"11100",name:"用户列表"},{id:"11200",parentId:"11000",name:"编辑"},{id:"11210",parentId:"11200",name:"用户列表"},{id:"11220",parentId:"11200",name:"新增用户"},{id:"11300",parentId:"11000",name:"操作"},{id:"11310",parentId:"11300",name:"新增"},{id:"11320",parentId:"11300",name:"删除"},{id:"11330",parentId:"11300",name:"修改"},{id:"12000",parentId:"10000",name:"角色管理"},{id:"12100",parentId:"12000",name:"查看"},{id:"12110",parentId:"12100",name:"角色列表"},{id:"12200",parentId:"12000",name:"编辑"},{id:"122100",parentId:"12200",name:"角色列表"},{id:"12220",parentId:"12200",name:"新增角色"},{id:"12300",parentId:"12000",name:"操作"},{id:"12310",parentId:"12300",name:"新增"},{id:"12320",parentId:"12300",name:"删除"},{id:"12330",parentId:"12300",name:"修改"},{id:"20000",parentId:null,name:"个人中心"},{id:"21000",parentId:"20000",name:"个性化设置"},{id:"21100",parentId:"21000",name:"查看"},{id:"21110",parentId:"21100",name:"信息列表"},{id:"21200",parentId:"21000",name:"操作"},{id:"21210",parentId:"21200",name:"重置信息"},{id:"22000",parentId:"20000",name:"账户管理"},{id:"22100",parentId:"22000",name:"查看"},{id:"22110",parentId:"22100",name:"账户余额"},{id:"22120",parentId:"22100",name:"帐变记录"}];return e},toColTreeData:function(e){var n={children:"children"},t=[],a={};r().eachTree(e,(function(e,n,i,c,r){if(a[e.id]=e,e.keys=r?r.keys.concat([e.id]):[e.id],!e.children||!e.children.length){var d={};e.keys.forEach((function(e,n){var t=n+1,i=a[e];d["check".concat(t)]=!1,d["id".concat(t)]=i.id,d["name".concat(t)]=i.name})),t.push(d)}}),n),this.keyMap=a,this.tableData=t},rowspanMethod:function(e){var n=e.row,t=e._rowIndex,a=e.column,i=e.visibleData,c=["name1","name2","name3"],r=n[a.property];if(r&&c.includes(a.property)){var d=i[t-1],o=i[t+1];if(d&&d[a.property]===r)return{rowspan:0,colspan:0};var l=1;while(o&&o[a.property]===r)o=i[++l+t];if(l>1)return{rowspan:l,colspan:1}}}}},o=d,l=t(1001),h=(0,l.Z)(o,a,i,!1,null,null,null),m=h.exports}}]);