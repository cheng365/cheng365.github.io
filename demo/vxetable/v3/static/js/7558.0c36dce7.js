"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[7558],{27558:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"tip"},[t._v(" 虚拟滚动渲染，左右固定列"),e("br"),t._v(" 大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),e("table-api-link",{attrs:{prop:"loadData"}}),t._v("/"),e("table-api-link",{attrs:{prop:"reloadData"}}),t._v(" 函数"),e("br"),t._v(" 对于多选 type="),e("table-column-api-link",{attrs:{prop:"checkbox"}}),t._v(" 当数据量海量时应该绑定 "),e("table-api-link",{attrs:{prop:"checkField"}}),t._v(" 属性渲染速度更快"),e("br"),e("span",{staticClass:"red"},[t._v("（注：启用纵向虚拟滚启动后不支持动态行高；如果需要支持，将虚拟滚动关闭即可）")]),e("br"),e("span",{staticClass:"green"},[t._v("（性能优化：横向虚拟滚动由列宽决定性能，每一列的列宽越大就越流畅；纵向虚拟滚动由行高决定性能，每一行的高度越高就越流畅）")])],1),e("vxe-toolbar",{scopedSlots:t._u([{key:"buttons",fn:function(){return[e("vxe-button",{on:{click:function(e){return t.loadList(1e4)}}},[t._v("1w条")]),e("vxe-button",{on:{click:function(e){return t.loadList(5e4)}}},[t._v("5w条")]),e("vxe-button",{on:{click:function(e){return t.loadList(1e5)}}},[t._v("10w条")]),e("vxe-button",{on:{click:function(e){return t.loadList(2e5)}}},[t._v("20w条")]),e("vxe-button",{on:{click:function(e){return t.$refs.xTable.setAllCheckboxRow(!0)}}},[t._v("所有选中")]),e("vxe-button",{on:{click:function(e){return t.$refs.xTable.clearCheckboxRow()}}},[t._v("清除选中")]),e("vxe-button",{on:{click:t.getSelectEvent}},[t._v("获取选中")])]},proxy:!0}])}),e("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","row-key":"","show-header-overflow":"",height:"600","row-config":{isCurrent:!0,isHover:!0},"export-config":{},loading:t.loading,"checkbox-config":{checkField:"checked"},"scroll-y":{enabled:!0}}},[e("vxe-column",{attrs:{type:"checkbox",width:"60",fixed:"left"}}),e("vxe-column",{attrs:{type:"seq",width:"100",fixed:"left"}}),e("vxe-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200"}}),e("vxe-column",{attrs:{field:"sex",title:"Sex",width:"200"}}),e("vxe-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),e("vxe-column",{attrs:{field:"region",title:"Region",width:"200"}}),e("vxe-column",{attrs:{field:"time",title:"Time",width:"200"}}),e("vxe-column",{attrs:{field:"address",title:"Address",width:"300"}}),e("vxe-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),e("vxe-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}}),e("vxe-column",{attrs:{field:"attr1",title:"Attr1",width:"200"}}),e("vxe-column",{attrs:{field:"attr2",title:"Attr2",width:"200"}}),e("vxe-column",{attrs:{field:"attr3",title:"Attr3",width:"200"}}),e("vxe-column",{attrs:{field:"attr4",title:"Attr4",width:"200"}}),e("vxe-column",{attrs:{field:"attr5",title:"Attr5",width:"200"}}),e("vxe-column",{attrs:{field:"attr6",title:"Attr6",width:"200"}}),e("vxe-column",{attrs:{field:"attr7",title:"Attr7",width:"200"}}),e("vxe-column",{attrs:{field:"attr8",title:"Attr8",width:"200"}}),e("vxe-column",{attrs:{field:"attr9",title:"Attr9",width:"200"}}),e("vxe-column",{attrs:{field:"attr10",title:"Attr10",width:"200"}}),e("vxe-column",{attrs:{field:"age",title:"Age",width:"200",fixed:"right"}})],1),e("pre",[t._v("    "),e("pre-code",[t._v("\n      | Arrow Up ↑ | 匀速向上滚动数据 |\n      | Arrow Down ↓ | 匀速向下滚动数据 |\n      | Arrow Left ← | 匀速向左滚动数据 |\n      | Arrow Right → | 匀速向右滚动数据 |\n      | Page Up | 向上翻页滚动 |\n      | Page Down | 向下翻页滚动 |\n      | Spacebar | 翻页滚动 |\n      | Home | 滚动到顶部 |\n      | End | 滚动到底部 |\n    ")]),t._v("\n  ")],1),e("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),e("pre",[t._v("    "),e("pre-code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),e("pre-code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n  ")],1)],1)},i=[],o=(n(92222),n(41539),n(57658),n(69851)),a=n.n(o),r={data:function(){return{loading:!1,demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="loadList(10000)">1w条</vxe-button>\n            <vxe-button @click="loadList(50000)">5w条</vxe-button>\n            <vxe-button @click="loadList(100000)">10w条</vxe-button>\n            <vxe-button @click="loadList(200000)">20w条</vxe-button>\n            <vxe-button @click="$refs.xTable.setAllCheckboxRow(true)">所有选中</vxe-button>\n            <vxe-button @click="$refs.xTable.clearCheckboxRow()">清除选中</vxe-button>\n            <vxe-button @click="getSelectEvent">获取选中</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          row-key\n          show-header-overflow\n          ref="xTable"\n          height="600"\n          :row-config="{isCurrent: true, isHover: true}"\n          :export-config="{}"\n          :loading="loading"\n          :checkbox-config="{checkField: \'checked\'}"\n          :scroll-y="{enabled: true}">\n          <vxe-column type="checkbox" width="60" fixed="left"></vxe-column>\n          <vxe-column type="seq" width="100" fixed="left"></vxe-column>\n          <vxe-column field="name" title="Name" sortable width="200"></vxe-column>\n          <vxe-column field="sex" title="Sex" width="200"></vxe-column>\n          <vxe-column field="rate" title="Rate" width="200"></vxe-column>\n          <vxe-column field="region" title="Region" width="200"></vxe-column>\n          <vxe-column field="time" title="Time" width="200"></vxe-column>\n          <vxe-column field="address" title="Address" width="300"></vxe-column>\n          <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>\n          <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>\n          <vxe-column field="attr1" title="Attr1" width="200"></vxe-column>\n          <vxe-column field="attr2" title="Attr2" width="200"></vxe-column>\n          <vxe-column field="attr3" title="Attr3" width="200"></vxe-column>\n          <vxe-column field="attr4" title="Attr4" width="200"></vxe-column>\n          <vxe-column field="attr5" title="Attr5" width="200"></vxe-column>\n          <vxe-column field="attr6" title="Attr6" width="200"></vxe-column>\n          <vxe-column field="attr7" title="Attr7" width="200"></vxe-column>\n          <vxe-column field="attr8" title="Attr8" width="200"></vxe-column>\n          <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>\n          <vxe-column field="attr10" title="Attr10" width="200"></vxe-column>\n          <vxe-column field="age" title="Age" width="200" fixed="right"></vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              loading: false\n            }\n          },\n          created () {\n            this.loadList(600)\n          },\n          methods: {\n            loadList (size) {\n              this.loading = true\n              this.mockList(size).then(data => {\n                // 使用函数式加载，阻断 vue 对大数据的监听\n                const xTable = this.$refs.xTable\n                const startTime = Date.now()\n                if (xTable) {\n                  this.$refs.xTable.reloadData(data).then(() => {\n                    VXETable.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })\n                    this.loading = false\n                  })\n                }\n              })\n            },\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    checked: false,\n                    sex: '0',\n                    num: 123,\n                    age: 18,\n                    num2: 234,\n                    rate: 3,\n                    address: 'shenzhen'\n                  })\n                }\n                resolve(list)\n              })\n            },\n            getSelectEvent () {\n              let selectRecords = this.$refs.xTable.getCheckboxRecords()\n              VXETable.modal.alert(selectRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.loadList(600)},methods:{loadList:function(t){var e=this;this.loading=!0,this.mockList(t).then((function(n){var l=e.$refs.xTable,i=Date.now();l&&e.$refs.xTable.reloadData(n).then((function(){a().modal.message({content:"渲染 ".concat(t," 行，用时 ").concat(Date.now()-i,"毫秒"),status:"info"}),e.loading=!1}))}))},mockList:function(t){return new Promise((function(e){for(var n=[],l=0;l<t;l++)n.push({name:"名称".concat(l),checked:!1,sex:"0",num:123,age:18,num2:234,rate:3,address:"shenzhen"});e(n)}))},getSelectEvent:function(){var t=this.$refs.xTable.getCheckboxRecords();a().modal.alert(t.length)}}},c=r,d=n(1001),s=(0,d.Z)(c,l,i,!1,null,null,null),u=s.exports}}]);