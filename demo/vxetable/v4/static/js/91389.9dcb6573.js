"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[91389],{91389:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});a(34284);var n=a(66252),i=a(3577),s=(0,n.uE)('<p class="tip"> 通过渲染器你可以轻松实现筛选、单元格的复用，可以根据不同业务实现不一样的渲染器，这个功能将非常实用；比如这些插件 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-element" target="_blank">vxe-table-plugin-element</a><br><span class="orange">渲染器：抽象一切可复用的功能（类似组件的概念），实现非常简单的可配置化；</span><br><span class="orange">插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；</span><br><span class="green">支持通过 JSX 自定义渲染，返回数组格式的 JSX</span><br><span class="green">实际开发中应该将业务封装成一个组件，不要把复杂的渲染逻辑写在渲染器中，渲染器只负责表格与自定义组件之间的对接关系</span><br><span class="red">（注：高级功能难度极高，不适合初级使用，出错将会全局影响功能）</span></p><h2>API</h2>',2),l=(0,n._)("h2",null,"原生渲染器",-1),m=["href"],c=(0,n._)("h2",null,"内置渲染器",-1);function r(e,t,a,r,o,p){var d=(0,n.up)("vxe-column"),u=(0,n.up)("vxe-table"),w=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",null,(0,i.zw)(e.$t("app.aside.nav.renderer")),1),s,(0,n.Wm)(u,{"row-config":{isHover:!0},"column-config":{resizable:!0},data:e.tableData},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}),(0,n.Wm)(d,{field:"desc",title:"app.api.title.desc","min-width":"200"}),(0,n.Wm)(d,{field:"type",title:"app.api.title.type","min-width":"140"}),(0,n.Wm)(d,{field:"enum",title:"app.api.title.enum","min-width":"150"}),(0,n.Wm)(d,{field:"defVal",title:"app.api.title.defVal","min-width":"160"})]})),_:1},8,["data"]),l,(0,n.Wm)(u,{"row-config":{isHover:!0},"column-config":{resizable:!0},data:e.nativeRenderList},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{field:"name",title:"渲染器名称","min-width":"100"},{default:(0,n.w5)((function(e){var t=e.row;return[(0,n._)("a",{class:"link",href:t.url,target:"_blank"},(0,i.zw)(t.name),9,m)]})),_:1}),(0,n.Wm)(d,{field:"desc",title:"说明","min-width":"280"})]})),_:1},8,["data"]),c,(0,n.Wm)(u,{"row-config":{isHover:!0},"column-config":{resizable:!0},data:e.xRenderList},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{field:"name",title:"渲染器名称","min-width":"100"},{default:(0,n.w5)((function(e){var t=e.row;return[(0,n.Wm)(w,{class:"link",to:{name:"VXEAPI",params:{name:t.compName}}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,i.zw)(t.name),1)]})),_:2},1032,["to"])]})),_:1}),(0,n.Wm)(d,{field:"desc",title:"说明","min-width":"280"})]})),_:1},8,["data"])])}var o=(0,n.aZ)({setup:function(){return{nativeRenderList:[{name:"input",url:"https://www.w3school.com.cn/tags/tag_input.asp",desc:"原生-输入框"},{name:"textarea",url:"https://www.w3school.com.cn/tags/tag_textarea.asp",desc:"原生-文本域"},{name:"select",url:"https://www.w3school.com.cn/tags/tag_select.asp",desc:"原生-下拉框"}],xRenderList:[{name:"$button",compName:"button",desc:"功能模块-按钮"},{name:"$buttons",compName:"button",desc:"功能模块-按钮列表"},{name:"$input",compName:"input",desc:"功能模块-输入框"},{name:"$select",compName:"select",desc:"功能模块-下拉框"},{name:"$radio",compName:"radio",desc:"功能模块-复选框列表"},{name:"$checkbox",compName:"checkbox",desc:"功能模块-复选框列表"},{name:"$switch",compName:"switch",desc:"功能模块-开关"}],tableData:[{name:"add(name, options)",desc:"添加一个",version:"",type:"",enum:"",defVal:"name, options",list:[]},{name:"mixin(options)",desc:"添加多个",version:"",type:"",enum:"",defVal:"options",list:[]},{name:"delete(name)",desc:"删除",version:"",type:"",enum:"",defVal:"name",list:[]}]}}}),p=a(83744);const d=(0,p.Z)(o,[["render",r]]);var u=d}}]);