"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2048],{52048:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(68309);var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 可编辑树表格的懒加载 ")]),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",resizable:"","keep-source":"","row-config":{keyField:"id"},"edit-config":{trigger:"click",mode:"row",showStatus:!0},"tree-config":{transform:!0,lazy:!0,hasChild:"hasChild",loadMethod:e.loadChildrenMethod},data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"Name",width:"260","tree-node":"","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"size",title:"Size","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.size,callback:function(t){e.$set(a,"size",t)},expression:"row.size"}})]}}])}),t("vxe-column",{attrs:{field:"type",title:"Type","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.type,callback:function(t){e.$set(a,"type",t)},expression:"row.type"}})]}}])}),t("vxe-column",{attrs:{field:"date",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"date",transfer:""},model:{value:a.date,callback:function(t){e.$set(a,"date",t)},expression:"row.date"}})]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},d=[],l=(n(41539),n(69851)),r=n.n(l),i={data:function(){return{tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01",hasChild:!0},{id:23666,parentId:null,name:"Test23",type:"mp4",size:null,date:"2021-01-02",hasChild:!0},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          resizable\n          keep-source\n          ref="xTree"\n          row-id="id"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :tree-config="{transform: true, lazy: true, hasChild: \'hasChild\', loadMethod: loadChildrenMethod}"\n          :data="tableData">\n          <vxe-column field="name" title="Name" width="260" tree-node :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.size" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="type" title="Type" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.type" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date" type="date" transfer></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true },\n                { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: null, date: '2021-01-02', hasChild: true },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }\n              ]\n            }\n          },\n          methods: {\n            loadChildrenMethod ({ row }) {\n              // 异步加载子节点\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const childs = [\n                    { id: row.id + 100000, parentId: row.id, name: row.name + 'Test45', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },\n                    { id: row.id + 150000, parentId: row.id, name: row.name + 'Test56', type: 'mp3', size: null, date: '2021-07-09', hasChild: false }\n                  ]\n                  resolve(childs)\n                }, 500)\n              })\n            },\n            getUpdateEvent () {\n              const updateRecords = this.$refs.xTable.getUpdateRecords()\n              VXETable.modal.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},methods:{loadChildrenMethod:function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var n=[{id:t.id+1e5,parentId:t.id,name:t.name+"Test45",type:"mp4",size:null,date:"2021-10-03",hasChild:!0},{id:t.id+15e4,parentId:t.id,name:t.name+"Test56",type:"mp3",size:null,date:"2021-07-09",hasChild:!1}];e(n)}),500)}))},getUpdateEvent:function(){var e=this.$refs.xTable.getUpdateRecords();r().modal.alert(e.length)}}},o=i,s=n(1001),p=(0,s.Z)(o,a,d,!1,null,null,null),u=p.exports}}]);