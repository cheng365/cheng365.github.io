"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[6697],{76697:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});n(68309);var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 使用 edit "),t("table-column-api-link",{attrs:{prop:"slot"}}),e._v(" 自定义渲染任意 Vue 组件，自定义渲染需要配合 "),t("table-api-link",{attrs:{prop:"updateStatus"}}),e._v(" 方法使用，在对应单元格的值发生改变时调用更新状态"),t("br"),t("span",{staticClass:"red"},[e._v("（注：自定义渲染虽然可以支持任意的 vue 组件，但是并不是所有组件都能直接使用的，所有跨组件之间会存在冲突问题，如果不处理好冲突的情况下是大部分组件是无法使用的； 可以通过 "),t("router-link",{staticClass:"link",attrs:{to:{name:"InterceptorAPI"}}},[e._v("事件拦截器")]),e._v(" 来处理冲突）")],1),t("br"),t("table-column-api-link",{attrs:{prop:"default"}}),e._v("：自定义内容模板（提前格式化（最优） > "),t("table-column-api-link",{attrs:{prop:"formatter"}}),e._v("（值发生变化时） > "),t("table-column-api-link",{attrs:{prop:"slots"}}),e._v("（即时））"),t("br"),t("table-column-api-link",{attrs:{prop:"header"}}),e._v("：自定义表头模板"),t("br"),t("table-column-api-link",{attrs:{prop:"footer"}}),e._v("：自定义表尾模板"),t("br"),t("table-column-api-link",{attrs:{prop:"filter"}}),e._v("：自定义筛选模板（建议使用"),t("router-link",{attrs:{to:{name:"RendererAPI"}}},[e._v("渲染器")]),e._v("，可以更好的复用）"),t("br"),t("table-column-api-link",{attrs:{prop:"edit"}}),e._v("：自定义可编辑模板（建议使用"),t("router-link",{attrs:{to:{name:"RendererAPI"}}},[e._v("渲染器")]),e._v("，可以更好的复用） ")],1),t("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell",icon:"vxe-icon-edit"}},on:{"checkbox-change":e.checkboxChangeEvent,"checkbox-all":e.checkboxChangeEvent}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"role",title:"Role","edit-render":{autofocus:".vxe-input--inner"}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"text"},on:{input:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.role,callback:function(t){e.$set(n.row,"role",t)},expression:"scope.row.role"}})]}}])}),t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{autofocus:".custom-input"}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-pulldown",{ref:"xPulldown1",attrs:{transfer:""},scopedSlots:e._u([{key:"default",fn:function(){return[t("vxe-input",{attrs:{placeholder:"下拉容器"},on:{click:e.clickDownEvent},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})]},proxy:!0},{key:"dropdown",fn:function(){return[t("ul",{staticClass:"my-downpanel1"},e._l(e.downList,(function(n){return t("li",{key:n.value,on:{click:function(t){return e.changeNameEvent(n,a)}}},[t("i",{staticClass:"vxe-icon-user-fill"}),t("span",[e._v(e._s(n.label))])])})),0)]},proxy:!0}],null,!0)})]}}])}),t("vxe-colgroup",{attrs:{title:"分组"}},[t("vxe-column",{attrs:{field:"age",title:"Age","edit-render":{autofocus:".vxe-input--inner"}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"number"},on:{input:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.age,callback:function(t){e.$set(n.row,"age",t)},expression:"scope.row.age"}})]}}])}),t("vxe-column",{attrs:{field:"num",title:"Money","edit-render":{autofocus:".vxe-input--inner"}},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("vxe-input",{attrs:{type:"number"},on:{input:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.num,callback:function(t){e.$set(n.row,"num",t)},expression:"scope.row.num"}})]}},{key:"default",fn:function(t){var n=t.row;return[e._v("￥"+e._s(n.num))]}}])})],1),t("vxe-column",{attrs:{field:"attr1",title:"不同行渲染","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){return[0===n.rowIndex?[t("vxe-input",{attrs:{type:"date",placeholder:"请选择日期",transfer:""},on:{input:function(t){return e.$refs.xTable.updateStatus(n)}},model:{value:n.row.attr1,callback:function(t){e.$set(n.row,"attr1",t)},expression:"scope.row.attr1"}})]:1===n.rowIndex?[t("vxe-select",{attrs:{placeholder:"请选择下拉",transfer:""},model:{value:n.row.attr1,callback:function(t){e.$set(n.row,"attr1",t)},expression:"scope.row.attr1"}},[t("vxe-option",{attrs:{value:"选项1",label:"选项1"}}),t("vxe-option",{attrs:{value:"选项2",label:"选项2"}}),t("vxe-option",{attrs:{value:"选项3",label:"选项3"}})],1)]:2===n.rowIndex?[t("vxe-input",{attrs:{type:"number",placeholder:"请输入数值"},model:{value:n.row.attr1,callback:function(t){e.$set(n.row,"attr1",t)},expression:"scope.row.attr1"}})]:[t("vxe-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:n.row.attr1,callback:function(t){e.$set(n.row,"attr1",t)},expression:"scope.row.attr1"}})]]}}])})],1),t("vxe-pager",{attrs:{perfect:"","current-page":e.tablePage.currentPage,"page-size":e.tablePage.pageSize,total:e.tablePage.total,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},on:{"update:currentPage":function(t){return e.$set(e.tablePage,"currentPage",t)},"update:current-page":function(t){return e.$set(e.tablePage,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.tablePage,"pageSize",t)},"update:page-size":function(t){return e.$set(e.tablePage,"pageSize",t)}},scopedSlots:e._u([{key:"left",fn:function(){return[t("span",{staticClass:"page-left"},[t("vxe-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.changeAllEvent},model:{value:e.isAllChecked,callback:function(t){e.isAllChecked=t},expression:"isAllChecked"}}),t("span",{staticClass:"select-count"},[e._v("自定义模板 "+e._s(e.selectRecords.length)+" 条")]),t("vxe-button",[e._v("修改")]),t("vxe-button",[e._v("管理")]),t("vxe-button",[e._v("删除")]),t("vxe-button",{attrs:{size:"small"},scopedSlots:e._u([{key:"default",fn:function(){return[e._v("更多操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[t("vxe-button",{attrs:{type:"text"}},[e._v("批量修改")]),t("vxe-button",{attrs:{type:"text"}},[e._v("批量管理")]),t("vxe-button",{attrs:{type:"text"}},[e._v("批量删除")])]},proxy:!0}])})],1)]},proxy:!0},{key:"right",fn:function(){return[t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}}),t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}}),t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}})]},proxy:!0}])}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},l=[],o={data:function(){return{isAllChecked:!1,isIndeterminate:!1,selectRecords:[],tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}],downList:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3},{label:"选项4",value:4},{label:"选项5",value:5}],tablePage:{total:0,currentPage:1,pageSize:10},demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', icon: \'vxe-icon-edit\'}"\n          @checkbox-change="checkboxChangeEvent"\n          @checkbox-all="checkboxChangeEvent">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="role" title="Role" :edit-render="{autofocus: \'.vxe-input--inner\'}">\n            <template #edit="{ row }">\n              <vxe-input type="text" v-model="row.role"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.custom-input\'}">\n            <template #edit="{ row }">\n              <vxe-pulldown ref="xPulldown1" transfer>\n                <template #default>\n                  <vxe-input v-model="row.name" placeholder="下拉容器" @click="clickDownEvent"></vxe-input>\n                </template>\n                <template #dropdown>\n                  <ul class="my-downpanel1">\n                    <li v-for="item in downList" :key="item.value" @click="changeNameEvent(item, row)">\n                      <i class="vxe-icon-user-fill"></i>\n                      <span>{{ item.label }}</span>\n                    </li>\n                  </ul>\n                </template>\n              </vxe-pulldown>\n            </template>\n          </vxe-column>\n          <vxe-colgroup title="分组">\n            <vxe-column field="age" title="Age" :edit-render="{autofocus: \'.vxe-input--inner\'}">\n              <template #edit="{ row }">\n                <vxe-input type="number" v-model="row.age"></vxe-input>\n              </template>\n            </vxe-column>\n            <vxe-column field="num" title="Money" :edit-render="{autofocus: \'.vxe-input--inner\'}">\n              <template #edit="{ row }">\n                <vxe-input type="number" v-model="row.num"></vxe-input>\n              </template>\n              <template #default="{ row }">￥{{ row.num }}</template>\n            </vxe-column>\n          </vxe-colgroup>\n          <vxe-column field="attr1" title="不同行渲染" :edit-render="{}">\n            <template #edit="scope">\n              <template v-if="scope.rowIndex === 0">\n                <vxe-input type="date" v-model="scope.row.attr1" placeholder="请选择日期" @input="$refs.xTable.updateStatus(scope)" transfer></vxe-input>\n              </template>\n              <template v-else-if="scope.rowIndex === 1">\n                <vxe-select v-model="scope.row.attr1" placeholder="请选择下拉" transfer>\n                  <vxe-option value="选项1" label="选项1"></vxe-option>\n                  <vxe-option value="选项2" label="选项2"></vxe-option>\n                  <vxe-option value="选项3" label="选项3"></vxe-option>\n                </vxe-select>\n              </template>\n              <template v-else-if="scope.rowIndex === 2">\n                <vxe-input type="number" v-model="scope.row.attr1" placeholder="请输入数值"></vxe-input>\n              </template>\n              <template v-else>\n                <vxe-input type="text" v-model="scope.row.attr1" placeholder="请输入内容"></vxe-input>\n              </template>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        \n        <vxe-pager\n          perfect\n          :current-page.sync="tablePage.currentPage"\n          :page-size.sync="tablePage.pageSize"\n          :total="tablePage.total"\n          :layouts="[\'PrevJump\', \'PrevPage\', \'Number\', \'NextPage\', \'NextJump\', \'Sizes\', \'FullJump\', \'Total\']">\n          <template #left>\n            <span class="page-left">\n              <vxe-checkbox v-model="isAllChecked" :indeterminate="isIndeterminate" @change="changeAllEvent"></vxe-checkbox>\n              <span class="select-count">自定义模板 {{ selectRecords.length }} 条</span>\n              <vxe-button>修改</vxe-button>\n              <vxe-button>管理</vxe-button>\n              <vxe-button>删除</vxe-button>\n              <vxe-button size="small">\n                <template #default>更多操作</template>\n                <template #dropdowns>\n                  <vxe-button type="text">批量修改</vxe-button>\n                  <vxe-button type="text">批量管理</vxe-button>\n                  <vxe-button type="text">批量删除</vxe-button>\n                </template>\n              </vxe-button>\n            </span>\n          </template>\n          <template #right>\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n          </template>\n        </vxe-pager>\n        ',"\n        export default {\n          data () {\n            return {\n              isAllChecked: false,\n              isIndeterminate: false,\n              selectRecords: [],\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ],\n              downList: [\n                { label: '选项1', value: 1 },\n                { label: '选项2', value: 2 },\n                { label: '选项3', value: 3 },\n                { label: '选项4', value: 4 },\n                { label: '选项5', value: 5 }\n              ],\n              tablePage: {\n                total: 0,\n                currentPage: 1,\n                pageSize: 10\n              }\n            }\n          },\n          methods: {\n            checkboxChangeEvent () {\n              const $table = this.$refs.xTable\n              this.isAllChecked = $table.isAllCheckboxChecked()\n              this.isIndeterminate = $table.isAllCheckboxIndeterminate()\n              this.selectRecords = $table.getCheckboxRecords()\n            },\n            changeAllEvent () {\n              const $table = this.$refs.xTable\n              $table.setAllCheckboxRow(this.isAllChecked)\n              this.selectRecords = $table.getCheckboxRecords()\n            },\n            clickDownEvent () {\n              const $pulldown = this.$refs.xPulldown1\n              if ($pulldown) {\n                $pulldown.showPanel()\n              }\n            },\n            changeNameEvent (item, row) {\n              const $pulldown = this.$refs.xPulldown1\n              row.name = item.label\n              if ($pulldown) {\n                $pulldown.hidePanel()\n              }\n            }\n          }\n        }\n        ","\n        .my-downpanel1 {\n          background-color: #fff;\n          border: 1px solid #e8eaec;\n        }\n        .page-left {\n          position: absolute;\n          left: 10px;\n          top: 50%;\n          transform: translateY(-50%);\n          z-index: 10;\n        }\n        "]}},methods:{checkboxChangeEvent:function(){var e=this.$refs.xTable;this.isAllChecked=e.isAllCheckboxChecked(),this.isIndeterminate=e.isAllCheckboxIndeterminate(),this.selectRecords=e.getCheckboxRecords()},changeAllEvent:function(){var e=this.$refs.xTable;e.setAllCheckboxRow(this.isAllChecked),this.selectRecords=e.getCheckboxRecords()},clickDownEvent:function(){var e=this.$refs.xPulldown1;e&&e.showPanel()},changeNameEvent:function(e,t){var n=this.$refs.xPulldown1;t.name=e.label,n&&n.hidePanel()}}},r=o,s=n(1001),i=(0,s.Z)(r,a,l,!1,null,"5026f094",null),c=i.exports}}]);