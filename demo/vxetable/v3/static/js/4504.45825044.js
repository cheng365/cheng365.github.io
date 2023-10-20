"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[4504],{14504:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var l=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("局部递增数据")]),t("vxe-toolbar",{attrs:{loading:e.loading},scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(t){return e.loadList(20)}}},[e._v("+20条")]),t("vxe-button",{on:{click:function(t){return e.loadList(100)}}},[e._v("+100条")]),t("vxe-button",{on:{click:function(t){return e.loadList(500)}}},[e._v("+500条")]),t("vxe-button",{on:{click:function(t){return e.loadList(1e3)}}},[e._v("+1000条")]),t("vxe-button",{on:{click:function(t){return e.loadList(2e3)}}},[e._v("+2000条")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.scrollTo(null,4e3)}}},[e._v("y=4000")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.clearScroll()}}},[e._v("清除滚动状态")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"500","row-config":{keyField:"id"},loading:e.loading,"scroll-y":{enabled:!0}}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"100"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-column",{attrs:{field:"role",title:"Role"}}),t("vxe-column",{attrs:{field:"age",title:"Age"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}}),t("vxe-column",{attrs:{field:"address",title:"Address"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[],a=(n(92222),n(41539),n(57658),{data:function(){return{loading:!1,demoCodes:['\n        <vxe-toolbar :loading="loading">\n          <template #buttons>\n            <vxe-button @click="loadList(20)">+20条</vxe-button>\n            <vxe-button @click="loadList(100)">+100条</vxe-button>\n            <vxe-button @click="loadList(500)">+500条</vxe-button>\n            <vxe-button @click="loadList(1000)">+1000条</vxe-button>\n            <vxe-button @click="loadList(2000)">+2000条</vxe-button>\n            <vxe-button @click="$refs.xTable.scrollTo(null, 4000)">y=4000</vxe-button>\n            <vxe-button @click="$refs.xTable.clearScroll()">清除滚动状态</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          ref="xTable"\n          border\n          resizable\n          show-overflow\n          height="500"\n          row-id="id"\n          :loading="loading"\n          :scroll-y="{enabled: true}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="role" title="Role"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n          <vxe-column field="address" title="Address"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false\n            }\n          },\n          created () {\n            // 动态定义，阻断 vue 对大数据双向绑定，提升加载速度\n            this.allData = []\n            this.loadList(600)\n          },\n          methods: {\n            loadList (size) {\n              this.loading = true\n              this.findList(size).then(data => {\n                this.allData = this.allData.concat(data)// 局部追加并保存所有数据\n                const xTable = this.$refs.xTable\n                if (xTable) {\n                  xTable.loadData(this.allData)\n                }\n                this.loading = false\n              })\n            },\n            findList (size) {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  var list = []\n                  for (var index = 0; index < size; index++) {\n                    list.push({\n                      id: 100000 + index,\n                      name: 'test' + index,\n                      role: 'developer',\n                      age: 10,\n                      date: '2019-05-01',\n                      address: 'address abc' + index\n                    })\n                  }\n                  resolve(list)\n                }, 250)\n              })\n            }\n          }\n        }\n        "]}},created:function(){this.allData=[],this.loadList(600)},methods:{loadList:function(e){var t=this;this.loading=!0,this.findList(e).then((function(e){t.allData=t.allData.concat(e);var n=t.$refs.xTable;n&&n.loadData(t.allData),t.loading=!1}))},findList:function(e){return new Promise((function(t){setTimeout((function(){for(var n=[],l=0;l<e;l++)n.push({id:1e5+l,name:"test"+l,role:"developer",age:10,date:"2019-05-01",address:"address abc"+l});t(n)}),250)}))}}}),i=a,s=n(1001),d=(0,s.Z)(i,l,o,!1,null,null,null),r=d.exports}}]);