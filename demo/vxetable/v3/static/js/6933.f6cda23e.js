"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[6933],{46933:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(68309);var n=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.$t("app.aside.nav.renderer")))]),e._m(0),t("h2",[e._v("API")]),t("vxe-table",{attrs:{resizable:"","row-config":{isHover:!0},data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),t("vxe-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),t("vxe-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),t("vxe-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),t("vxe-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}})],1),t("h2",[e._v("原生渲染器")]),t("vxe-table",{attrs:{resizable:"","row-config":{isHover:!0},data:e.nativeRenderList}},[t("vxe-column",{attrs:{field:"name",title:"渲染器名称","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("a",{staticClass:"link",attrs:{href:n.url,target:"_blank"}},[e._v(e._s(n.name))])]}}])}),t("vxe-column",{attrs:{field:"desc",title:"说明","min-width":"280"}})],1),t("h2",[e._v("内置渲染器")]),t("vxe-table",{attrs:{resizable:"","row-config":{isHover:!0},data:e.xRenderList}},[t("vxe-column",{attrs:{field:"name",title:"渲染器名称","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:n.compName}}}},[e._v(e._s(n.name))])]}}])}),t("vxe-column",{attrs:{field:"desc",title:"说明","min-width":"280"}})],1)],1)},s=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v(" 通过渲染器你可以轻松实现筛选、单元格的复用，可以根据不同业务实现不一样的渲染器，这个功能将非常实用；比如这些插件 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"}},[e._v("vxe-table-plugin-element")]),t("br"),t("span",{staticClass:"orange"},[e._v("渲染器：抽象一切可复用的功能（类似组件的概念），实现非常简单的可配置化；")]),t("br"),t("span",{staticClass:"orange"},[e._v("插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；")]),t("br"),t("span",{staticClass:"red"},[e._v("支持通过 JSX 自定义渲染，返回数组格式的 JSX")]),t("br"),t("span",{staticClass:"green"},[e._v("实际开发中应该将业务封装成一个组件，不要把复杂的渲染逻辑写在渲染器中，渲染器只负责表格与自定义组件之间的对接关系")]),t("br"),t("span",{staticClass:"red"},[e._v("（注：高级功能难度极高，不适合非前端和初级前端使用，一旦封装出错，将会全局影响功能）")])])}],i={data:function(){return{nativeRenderList:[{name:"input",url:"https://www.w3school.com.cn/tags/tag_input.asp",desc:"原生-输入框"},{name:"textarea",url:"https://www.w3school.com.cn/tags/tag_textarea.asp",desc:"原生-文本域"},{name:"select",url:"https://www.w3school.com.cn/tags/tag_select.asp",desc:"原生-下拉框"}],xRenderList:[{name:"$button",compName:"button",desc:"功能模块-按钮"},{name:"$buttons",compName:"button",desc:"功能模块-按钮列表"},{name:"$input",compName:"input",desc:"功能模块-输入框"},{name:"$select",compName:"select",desc:"功能模块-下拉框"},{name:"$radio",compName:"radio",desc:"功能模块-复选框列表"},{name:"$checkbox",compName:"checkbox",desc:"功能模块-复选框列表"},{name:"$switch",compName:"switch",desc:"功能模块-开关"}],tableData:[{name:"add(name, options)",desc:"添加一个",version:"",type:"",enum:"",defVal:"name, options",list:[]},{name:"mixin(map)",desc:"添加多个",version:"",type:"",enum:"",defVal:"map",list:[]},{name:"delete(name)",desc:"删除",version:"",type:"",enum:"",defVal:"name",list:[]}]}}},l=i,r=a(1001),c=(0,r.Z)(l,n,s,!1,null,null,null),m=c.exports}}]);