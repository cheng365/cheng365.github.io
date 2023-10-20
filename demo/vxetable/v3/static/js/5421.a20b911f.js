"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[5421],{45421:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(68309);var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("使用 "),t("table-column-api-link",{attrs:{prop:"slot"}}),e._v(" 自定义模板；可以实现自定义任意内容及 html 元素"),t("br"),t("table-column-api-link",{attrs:{prop:"default"}}),e._v("：自定义内容模板（提前格式化（最优） > "),t("table-column-api-link",{attrs:{prop:"formatter"}}),e._v("（field值发生变化时） > "),t("table-column-api-link",{attrs:{prop:"slots"}}),e._v("（即时））"),t("br"),t("table-column-api-link",{attrs:{prop:"header"}}),e._v("：自定义表头模板"),t("br"),t("table-column-api-link",{attrs:{prop:"footer"}}),e._v("：自定义表尾模板"),t("br"),t("table-column-api-link",{attrs:{prop:"filter"}}),e._v("：自定义筛选模板（建议使用"),t("router-link",{attrs:{to:{name:"RendererAPI"}}},[e._v("渲染器")]),e._v("，可以更好的复用）"),t("br"),t("table-column-api-link",{attrs:{prop:"edit"}}),e._v("：自定义可编辑模板（建议使用"),t("router-link",{attrs:{to:{name:"RendererAPI"}}},[e._v("渲染器")]),e._v("，可以更好的复用） ")],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",[e._v(e._s(e.$t("app.body.button.insert")))]),t("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("下拉按钮")]},proxy:!0},{key:"dropdowns",fn:function(){return[t("vxe-button",[e._v("删除")]),t("vxe-button",[e._v("保存")])]},proxy:!0}])})]},proxy:!0},{key:"tools",fn:function(){return[t("vxe-input",{attrs:{placeholder:"搜索"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-footer":"",height:"500","footer-method":e.footerMethod,data:e.tableData},on:{"checkbox-change":e.checkboxChangeEvent,"checkbox-all":e.checkboxChangeEvent}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"160",resizable:!1,"show-overflow":""},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"first-col"},[t("div",{staticClass:"first-col-top"},[e._v("名称")]),t("div",{staticClass:"first-col-bottom"},[e._v("序号")])])]},proxy:!0},{key:"footer",fn:function(n){var a=n.items,o=n._columnIndex;return[t("vxe-button",{attrs:{status:"primary",size:"mini"},on:{click:function(t){return e.clickFooterItem(a,o)}}},[e._v("支持")]),t("vxe-button",{attrs:{size:"mini"},on:{click:function(t){return e.clickFooterItem(a,o)}}},[e._v("test abc")])]}},{key:"default",fn:function(n){var a=n.row;return[t("vxe-button",{on:{click:function(t){return e.showDetailEvent(a)}}},[e._v("弹框"+e._s(a.name))])]}}])}),t("vxe-column",{attrs:{field:"name",title:"app.body.label.name",sortable:""},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[t("a",{attrs:{href:"https://github.com/x-extends/vxe-table",target:"_black"}},[e._v("我是超链接："+e._s(a.name))])]}}])}),t("vxe-column",{attrs:{field:"role",title:"Role"},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{staticStyle:{color:"red"}},[e._v("自定义头部")])]},proxy:!0},{key:"footer",fn:function(n){var a=n.items,o=n._columnIndex;return[t("span",{staticStyle:{color:"red"}},[e._v("累计："+e._s(a[o]))])]}},{key:"filter",fn:function(n){var a=n.$panel,o=n.column;return[e._l(o.filters,(function(n,o){return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.data,expression:"option.data"}],key:o,staticClass:"my-filter",attrs:{type:"type"},domProps:{value:n.data},on:{input:[function(t){t.target.composing||e.$set(n,"data",t.target.value)},function(t){return e.changeFilterEvent(t,n,a)}]}})]}))]}},{key:"default",fn:function(){return[t("vxe-button",{attrs:{type:"text"}},[e._v("自定义按钮")])]},proxy:!0}])}),t("vxe-column",{attrs:{field:"time",title:"Time"},scopedSlots:e._u([{key:"header",fn:function(){return[t("vxe-input",{attrs:{placeholder:"放个输入框",size:"mini"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})]},proxy:!0},{key:"default",fn:function(n){var a=n.row,o=n.rowIndex;return[2===o?[t("vxe-switch",{model:{value:a.flag,callback:function(t){e.$set(a,"flag",t)},expression:"row.flag"}})]:3===o?[t("vxe-switch",{attrs:{"open-label":"开","close-label":"关"},model:{value:a.flag,callback:function(t){e.$set(a,"flag",t)},expression:"row.flag"}})]:[t("span",[e._v(e._s(e.formatDate(a.time)))])]]}}])}),t("vxe-column",{attrs:{field:"sex",title:"Sex","show-overflow":""},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[t("vxe-select",{attrs:{transfer:""},model:{value:a.sex,callback:function(t){e.$set(a,"sex",t)},expression:"row.sex"}},[t("vxe-option",{attrs:{value:"Man",label:"Man"}}),t("vxe-option",{attrs:{value:"Women",label:"Women"}})],1)]}}])}),t("vxe-column",{attrs:{field:"html1",title:"Html片段",width:"200","show-overflow":""},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[t("span",{domProps:{innerHTML:e._s(a.html1)}})]}},{key:"footer",fn:function(){return[t("span",[t("img",{staticStyle:{width:"36px"},attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}}),e._v("自定义模板"),t("img",{staticStyle:{width:"30px"},attrs:{src:"https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif"}})])]},proxy:!0}])}),t("vxe-column",{attrs:{field:"img1",title:"图片路径",width:"120"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[a.img1?t("img",{staticStyle:{width:"100px"},attrs:{src:a.img1}}):t("span",[e._v("无")])]}}])})],1),t("vxe-pager",{attrs:{perfect:"","current-page":e.tablePage.currentPage,"page-size":e.tablePage.pageSize,total:e.tablePage.total,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},on:{"update:currentPage":function(t){return e.$set(e.tablePage,"currentPage",t)},"update:current-page":function(t){return e.$set(e.tablePage,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.tablePage,"pageSize",t)},"update:page-size":function(t){return e.$set(e.tablePage,"pageSize",t)}},scopedSlots:e._u([{key:"left",fn:function(){return[t("span",{staticClass:"page-left"},[t("vxe-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.changeAllEvent},model:{value:e.isAllChecked,callback:function(t){e.isAllChecked=t},expression:"isAllChecked"}}),t("span",{staticClass:"select-count"},[e._v("自定义模板 "+e._s(e.selectRecords.length)+" 条")]),t("vxe-button",[e._v("修改")]),t("vxe-button",[e._v("管理")]),t("vxe-button",[e._v("删除")]),t("vxe-button",{attrs:{size:"small"},scopedSlots:e._u([{key:"default",fn:function(){return[e._v("更多操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[t("vxe-button",{attrs:{type:"text"}},[e._v("批量修改")]),t("vxe-button",{attrs:{type:"text"}},[e._v("批量管理")]),t("vxe-button",{attrs:{type:"text"}},[e._v("批量删除")])]},proxy:!0}])})],1)]},proxy:!0},{key:"right",fn:function(){return[t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}}),t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}}),t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"34"}})]},proxy:!0}])}),t("vxe-modal",{attrs:{title:"查看详情",width:"800",height:"400",resize:""},scopedSlots:e._u([{key:"default",fn:function(){return[e._v(e._s(e.selectRow?e.selectRow.name:""))]},proxy:!0}]),model:{value:e.showDetails,callback:function(t){e.showDetails=t},expression:"showDetails"}}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},o=[],l=(n(41539),n(54747),n(9653),n(21249),n(26699),n(38478)),s=n.n(l),i=n(69851),r=n.n(i),c={data:function(){return{value1:"",value2:"",showDetails:!1,selectRow:null,isAllChecked:!1,isIndeterminate:!1,selectRecords:[],tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc",flag:!1,time:1600261774531,html1:'<span style="color:red">自定义HTML</span>',img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou",flag:!1,time:1600261774531,html1:"",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai",flag:!0,time:1600261774531,html1:'<span style="color:orange">自定义HTML</span>',img1:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc",flag:!1,time:1600261774531,html1:"",img1:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai",flag:!0,time:1600261774531,html1:"",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc",flag:!0,time:1600261774531,html1:'<span style="color:blue">自定义HTML</span>',img1:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc",flag:!1,time:1600261774531,html1:"",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc",flag:!1,time:1600261774531,html1:"",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"}],tablePage:{total:0,currentPage:1,pageSize:10},demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button>{{ $t(\'app.body.button.insert\') }}</vxe-button>\n            <vxe-button>\n              <template #default>下拉按钮</template>\n              <template #dropdowns>\n                <vxe-button>删除</vxe-button>\n                <vxe-button>保存</vxe-button>\n              </template>\n            </vxe-button>\n          </template>\n          <template #tools>\n            <vxe-input v-model="value2" placeholder="搜索"></vxe-input>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          show-footer\n          ref="xTable"\n          height="500"\n          :footer-method="footerMethod"\n          :data="tableData"\n          @checkbox-change="checkboxChangeEvent"\n          @checkbox-all="checkboxChangeEvent">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="160" :resizable="false" show-overflow>\n            <template #header>\n              <div class="first-col">\n                <div class="first-col-top">名称</div>\n                <div class="first-col-bottom">序号</div>\n              </div>\n            </template>\n            <template #footer="{ items, _columnIndex }">\n              <vxe-button status="primary" @click="clickFooterItem(items, _columnIndex)" size="mini">支持</vxe-button>\n              <vxe-button @click="clickFooterItem(items, _columnIndex)" size="mini">test abc</vxe-button>\n            </template>\n            <template #default="{ row }">\n              <vxe-button @click="showDetailEvent(row)">弹框{{ row.name }}</vxe-button>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="app.body.label.name" sortable>\n            <template #default="{ row }">\n              <a href="https://github.com/x-extends/vxe-table" target="_black">我是超链接：{{ row.name }}</a>\n            </template>\n          </vxe-column>\n          <vxe-column field="role" title="Role">\n            <template #header>\n              <span style="color: red;">自定义头部</span>\n            </template>\n            <template #footer="{ items, _columnIndex }">\n              <span style="color: red">累计：{{ items[_columnIndex] }}</span>\n            </template>\n            <template #filter="{ $panel, column }">\n              <template v-for="(option, index) in column.filters">\n                <input class="my-filter" type="type" v-model="option.data" :key="index" @input="changeFilterEvent($event, option, $panel)">\n              </template>\n            </template>\n            <template #default>\n              <vxe-button type="text">自定义按钮</vxe-button>\n            </template>\n          </vxe-column>\n          <vxe-column field="time" title="Time">\n            <template #header>\n              <vxe-input v-model="value1" placeholder="放个输入框" size="mini"></vxe-input>\n            </template>\n            <template #default="{ row, rowIndex }">\n              <template v-if="rowIndex === 2">\n                <vxe-switch v-model="row.flag"></vxe-switch>\n              </template>\n              <template v-else-if="rowIndex === 3">\n                <vxe-switch v-model="row.flag" open-label="开" close-label="关"></vxe-switch>\n              </template>\n              <template v-else>\n                <span>{{ formatDate(row.time) }}</span>\n              </template>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" show-overflow>\n            <template #default="{ row }">\n              <vxe-select v-model="row.sex" transfer>\n                <vxe-option value="Man" label="Man"></vxe-option>\n                <vxe-option value="Women" label="Women"></vxe-option>\n              </vxe-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="html1" title="Html片段" width="200" show-overflow>\n            <template #default="{ row }">\n              <span v-html="row.html1"></span>\n            </template>\n            <template #footer>\n              <span>\n                <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 36px;">自定义模板<img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="width: 30px;">\n              </span>\n            </template>\n          </vxe-column>\n          <vxe-column field="img1" title="图片路径" width="120">\n            <template #default="{ row }">\n              <img v-if="row.img1" :src="row.img1" style="width: 100px;">\n              <span v-else>无</span>\n            </template>\n          </vxe-column>\n        </vxe-table>\n\n        <vxe-pager\n          perfect\n          :current-page.sync="tablePage.currentPage"\n          :page-size.sync="tablePage.pageSize"\n          :total="tablePage.total"\n          :layouts="[\'PrevJump\', \'PrevPage\', \'Number\', \'NextPage\', \'NextJump\', \'Sizes\', \'FullJump\', \'Total\']">\n          <template #left>\n            <span class="page-left">\n              <vxe-checkbox v-model="isAllChecked" :indeterminate="isIndeterminate" @change="changeAllEvent"></vxe-checkbox>\n              <span class="select-count">自定义模板 {{ selectRecords.length }} 条</span>\n              <vxe-button>修改</vxe-button>\n              <vxe-button>管理</vxe-button>\n              <vxe-button>删除</vxe-button>\n              <vxe-button size="small">\n                <template #default>更多操作</template>\n                <template #dropdowns>\n                  <vxe-button type="text">批量修改</vxe-button>\n                  <vxe-button type="text">批量管理</vxe-button>\n                  <vxe-button type="text">批量删除</vxe-button>\n                </template>\n              </vxe-button>\n            </span>\n          </template>\n          <template #right>\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">\n          </template>\n        </vxe-pager>\n\n        <vxe-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>\n          <template #default>{{ selectRow ? selectRow.name : \'\' }}</template>\n        </vxe-modal>\n        ',"\n        import XEUtils from 'xe-utils'\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              value1: '',\n              value2: '',\n              showDetails: false,\n              selectRow: null,\n              isAllChecked: false,\n              isIndeterminate: false,\n              selectRecords: [],\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', flag: false, time: 1600261774531, html1: '<span style=\"color:red\">自定义HTML</span>', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', flag: true, time: 1600261774531, html1: '<span style=\"color:orange\">自定义HTML</span>', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', flag: true, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', flag: true, time: 1600261774531, html1: '<span style=\"color:blue\">自定义HTML</span>', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' }\n              ],\n              tablePage: {\n                total: 0,\n                currentPage: 1,\n                pageSize: 10\n              }\n            }\n          },\n          methods: {\n            formatDate (value) {\n              return XEUtils.toDateString(value, 'yyyy-MM-dd HH:mm:ss.S')\n            },\n            changeFilterEvent (event, option, $panel) {\n              $panel.changeOption(event, !!option.data, option)\n            },\n            showDetailEvent (row) {\n              this.selectRow = row\n              this.showDetails = true\n            },\n            clickFooterItem (items, _columnIndex) {\n              VXETable.modal.alert(`点击了表尾第${_columnIndex}列`)\n            },\n            checkboxChangeEvent () {\n              this.isAllChecked = this.$refs.xTable.isAllCheckboxChecked()\n              this.isIndeterminate = this.$refs.xTable.isAllCheckboxIndeterminate()\n              this.selectRecords = this.$refs.xTable.getCheckboxRecords()\n            },\n            changeAllEvent () {\n              this.$refs.xTable.setAllCheckboxRow(this.isAllChecked)\n              this.selectRecords = this.$refs.xTable.getCheckboxRecords()\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map(column => {\n                  if (['num'].includes(column.property)) {\n                    return this.sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        ",'\n        .first-col {\n          position: relative;\n          height: 20px;\n        }\n        .first-col:before {\n          content: "";\n          position: absolute;\n          left: -15px;\n          top: 10px;\n          width: 170px;\n          height: 1px;\n          transform: rotate(18deg);\n          background-color: #e8eaec;\n        }\n        .first-col .first-col-top {\n          position: absolute;\n          right: 4px;\n          top: -10px;\n        }\n        .first-col .first-col-bottom {\n          position: absolute;\n          left: 4px;\n          bottom: -10px;\n        }\n        .my-filter {\n          margin: 10px;\n        }\n        .page-left {\n          position: absolute;\n          left: 10px;\n          top: 50%;\n          transform: translateY(-50%);\n          z-index: 10;\n        }\n        ']}},methods:{formatDate:function(e){return s().toDateString(e,"yyyy-MM-dd HH:mm:ss.S")},changeFilterEvent:function(e,t,n){n.changeOption(e,!!t.data,t)},showDetailEvent:function(e){this.selectRow=e,this.showDetails=!0},clickFooterItem:function(e,t){r().modal.alert("点击了表尾第".concat(t,"列"))},checkboxChangeEvent:function(){this.isAllChecked=this.$refs.xTable.isAllCheckboxChecked(),this.isIndeterminate=this.$refs.xTable.isAllCheckboxIndeterminate(),this.selectRecords=this.$refs.xTable.getCheckboxRecords()},changeAllEvent:function(){this.$refs.xTable.setAllCheckboxRow(this.isAllChecked),this.selectRecords=this.$refs.xTable.getCheckboxRecords()},sumNum:function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n},footerMethod:function(e){var t=this,n=e.columns,a=e.data;return[n.map((function(e){return["num"].includes(e.property)?t.sumNum(a,e.property):null}))]}}},m=c,u=n(1001),d=(0,u.Z)(m,a,o,!1,null,"9d8a6bba",null),p=d.exports}}]);