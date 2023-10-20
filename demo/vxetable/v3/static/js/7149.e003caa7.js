"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[7149],{67149:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.$t("app.aside.nav.interceptor")))]),e._m(0),t("vxe-table",{staticClass:"api-table",attrs:{resizable:"","row-config":{isCurrent:!0,isHover:!0},"column-config":{isCurrent:!0},data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),t("vxe-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),t("vxe-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),t("vxe-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),t("vxe-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}}),t("vxe-column",{attrs:{field:"version",title:e.$t("app.api.title.version"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("span",{directives:[{name:"show",rawName:"v-show",value:i.version,expression:"row.version"}],staticClass:"compatibility"},[e._v("v"+e._s(i.version))])]}}])})],1),t("h2",[e._v("可选值")]),t("vxe-table",{staticClass:"api-table",attrs:{resizable:"","row-config":{isHover:!0},data:e.typeList}},[t("vxe-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),t("vxe-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),t("vxe-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),t("vxe-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),t("vxe-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}}),t("vxe-column",{attrs:{field:"version",title:e.$t("app.api.title.version"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("span",{directives:[{name:"show",rawName:"v-show",value:i.version,expression:"row.version"}],staticClass:"compatibility"},[e._v("v"+e._s(i.version))])]}}])})],1),t("h2",[e._v("示例")]),e._m(1),t("pre",[e._v("    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")],1)],1)},n=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v(" 通过内置事件拦截器可以很容易的处理表格事件行为与第三方组件的兼容性；比如这些插件 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"}},[e._v("vxe-table-plugin-element")]),t("br"),t("span",{staticClass:"red"},[e._v("（注：高级功能难度极高，不适合非前端和初级前端使用，一旦封装出错，将会全局影响功能）")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v(" 例子：比如自定义渲染某个组件后，由于弹出层面板不在单元格之内，按键事件的交互行为存在冲突"),t("br"),e._v(" 当然还有最简单的用法，只需给弹出面板加上 class=vxe-table--ignore-clear 即可 ")])}],s={data:function(){return{tableData:[{name:"add(type, callback)",desc:"添加一个",version:"",type:"",enum:"",defVal:"type: string, callback: (params, event) => any",list:[]},{name:"mixin(options)",desc:"添加多个",version:"",type:"",enum:"",defVal:"options?: { [type: string]: (params, event) => any }",list:[]},{name:"delete(type)",desc:"删除",version:"",type:"",enum:"",defVal:"type: string",list:[]}],typeList:[{name:"event.clearActived",desc:"清除激活单元格之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.clearFilter",desc:"清除筛选面板之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.clearAreas",desc:"如果功能被支持，清除单元格区域之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.keydown",desc:"键盘按下之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.showMenu",desc:"显示右键菜单之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.import",desc:"工具栏中导入之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.export",desc:"工具栏中导出之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]}],demoCodes:["\n        VXETable.interceptor.add('event.clearActived', (params, event) => {\n          // 比如点击了某个组件的弹出层面板之后，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。\n          if (event.target.className.indexOf('other-popper') > -1) {\n            return false\n          }\n        })\n        "]}}},l=s,r=a(1001),o=(0,r.Z)(l,i,n,!1,null,null,null),p=o.exports}}]);