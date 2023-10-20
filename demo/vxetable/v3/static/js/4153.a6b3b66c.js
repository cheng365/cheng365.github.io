"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[4153],{74153:function(n,t,o){o.r(t),o.d(t,{default:function(){return d}});var e=function(){var n=this,t=n._self._c;return t("div",[t("p",{staticClass:"tip"},[n._v(" 虚拟滚动渲染"),t("br"),n._v(" 大数据不建议使用双向绑定的 "),t("table-api-link",{attrs:{name:"data"}}),n._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),t("table-api-link",{attrs:{prop:"loadData"}}),n._v("/"),t("table-api-link",{attrs:{prop:"loadColumn"}}),n._v(" 函数"),t("br"),t("span",{staticClass:"green"},[n._v("（性能优化：横向虚拟滚动由列宽决定性能，每一列的列宽越大就越流畅；纵向虚拟滚动由行高决定性能，每一行的高度越高就越流畅）")])],1),t("vxe-grid",{ref:"xGrid",attrs:{border:"",resizable:"","show-overflow":"","show-header-overflow":"",height:"500",loading:n.loading,"toolbar-config":{slots:{buttons:"toolbar_buttons"}},"checkbox-config":{checkField:"checked"},"scroll-x":{enabled:!0,gt:0},"scroll-y":{enabled:!0,gt:0}},scopedSlots:n._u([{key:"toolbar_buttons",fn:function(){return[t("vxe-button",{on:{click:function(t){return n.loadColumnAndData(1e3,20)}}},[n._v("1k列20条")]),t("vxe-button",{on:{click:function(t){return n.loadColumnAndData(1e3,100)}}},[n._v("1k列100条")]),t("vxe-button",{on:{click:function(t){return n.loadColumnAndData(5e3,500)}}},[n._v("5k列500条")]),t("vxe-button",{on:{click:function(t){return n.loadColumnAndData(5e3,1e4)}}},[n._v("5k列1w条")]),t("vxe-button",{on:{click:function(t){return n.loadColumnAndData(1e4,5e4)}}},[n._v("1w列5w条")]),t("vxe-button",{on:{click:function(t){return n.loadColumnAndData(1e4,1e5)}}},[n._v("1w列10w条")])]},proxy:!0}])}),t("p",{staticClass:"demo-code"},[n._v(n._s(n.$t("app.body.button.showCode")))]),t("pre",[n._v("    "),t("pre-code",{staticClass:"xml"},[n._v(n._s(n.demoCodes[0]))]),n._v("\n    "),t("pre-code",{staticClass:"javascript"},[n._v(n._s(n.demoCodes[1]))]),n._v("\n  ")],1)],1)},l=[],a=(o(41539),o(78783),o(33948),o(21249),o(29253),o(92222),o(57658),o(69851)),i=o.n(a),r={data:function(){return{loading:!1,demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          show-overflow\n          show-header-overflow\n          ref="xGrid"\n          height="500"\n          :loading="loading"\n          :toolbar-config="{slots: {buttons: \'toolbar_buttons\'}}"\n          :checkbox-config="{checkField: \'checked\'}"\n          :scroll-x="{enabled: true, gt: 0}"\n          :scroll-y="{enabled: true, gt: 0}">\n          <template #toolbar_buttons>\n            <vxe-button @click="loadColumnAndData(1000, 20)">1k列20条</vxe-button>\n            <vxe-button @click="loadColumnAndData(1000, 100)">1k列100条</vxe-button>\n            <vxe-button @click="loadColumnAndData(5000, 500)">5k列500条</vxe-button>\n            <vxe-button @click="loadColumnAndData(5000, 10000)">5k列1w条</vxe-button>\n            <vxe-button @click="loadColumnAndData(10000, 50000)">1w列5w条</vxe-button>\n            <vxe-button @click="loadColumnAndData(10000, 100000)">1w列10w条</vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              loading: false\n            }\n          },\n          created () {\n            this.loadColumnAndData(600, 10)\n          },\n          methods: {\n            loadColumnAndData (colSize, rowSize) {\n              this.loading = true\n              Promise.all([\n                this.mockColumns(colSize),\n                this.mockList(rowSize)\n              ]).then(rest => {\n                const columns = rest[0]\n                const data = rest[1]\n                const startTime = Date.now()\n                const xGrid = this.$refs.xGrid\n                // 使用函数式加载，阻断 vue 对大数组的双向绑定\n                if (xGrid) {\n                  Promise.all([\n                    xGrid.reloadColumn(columns),\n                    xGrid.reloadData(data)\n                  ]).then(() => {\n                    VXETable.modal.message({ content: `渲染 ${colSize} 列 ${rowSize} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })\n                    this.loading = false\n                  })\n                }\n              })\n            },\n            mockColumns (size) {\n              return new Promise(resolve => {\n                const cols = []\n                for (let index = 0; index < size; index++) {\n                  if (index === 0) {\n                    cols.push({\n                      type: 'checkbox',\n                      width: 80\n                    })\n                  } else {\n                    cols.push({\n                      title: `Col_${index}`,\n                      field: `col${index}`,\n                      width: 160\n                    })\n                  }\n                }\n                resolve(cols)\n              })\n            },\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    checked: false,\n                    col1: '0',\n                    col2: 123,\n                    col3: 18,\n                    col4: 234,\n                    col5: 3,\n                    col6: 'shenzhen'\n                  })\n                }\n                resolve(list)\n              })\n            }\n          }\n        }\n        "]}},created:function(){this.loadColumnAndData(600,10)},methods:{loadColumnAndData:function(n,t){var o=this;this.loading=!0,Promise.all([this.mockColumns(n),this.mockList(t)]).then((function(e){var l=e[0],a=e[1],r=Date.now(),c=o.$refs.xGrid;c&&Promise.all([c.reloadColumn(l.map((function(n){return n.fixed=null,n}))),c.reloadData(a)]).then((function(){i().modal.message({content:"渲染 ".concat(n," 列 ").concat(t," 行，用时 ").concat(Date.now()-r,"毫秒"),status:"info"}),o.loading=!1}))}))},mockColumns:function(n){return new Promise((function(t){for(var o=[],e=0;e<n;e++)0===e?o.push({type:"checkbox",width:80}):o.push({title:"Col_".concat(e),field:"col".concat(e),width:160});t(o)}))},mockList:function(n){return new Promise((function(t){for(var o=[],e=0;e<n;e++)o.push({name:"名称".concat(e),checked:!1,col1:"0",col2:123,col3:18,col4:234,col5:3,col6:"shenzhen"});t(o)}))}}},c=r,s=o(1001),u=(0,s.Z)(c,e,l,!1,null,null,null),d=u.exports},14230:function(n,t,o){var e=o(1702),l=o(84488),a=o(41340),i=/"/g,r=e("".replace);n.exports=function(n,t,o,e){var c=a(l(n)),s="<"+t;return""!==o&&(s+=" "+o+'="'+r(a(e),i,"&quot;")+'"'),s+">"+c+"</"+t+">"}},43429:function(n,t,o){var e=o(47293);n.exports=function(n){return e((function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},29253:function(n,t,o){var e=o(82109),l=o(14230),a=o(43429);e({target:"String",proto:!0,forced:a("fixed")},{fixed:function(){return l(this,"tt","","")}})}}]);