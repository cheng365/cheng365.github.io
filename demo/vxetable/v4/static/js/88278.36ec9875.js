"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[88278],{88278:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});r(65137),r(60228),r(47522),r(76265),r(6203),r(34338),r(79288),r(34284);var n=r(66252),i=r(2262),o=r(38478),l=r.n(o),a=(0,n._)("span",{style:{color:"red"}},[(0,n._)("img",{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}),(0,n._)("p",null,"没有更多数据了！")],-1),u="https://api.vxetable.cn/demo",f=(0,n.aZ)({__name:"Demo1",setup:function(e){var t=(0,i.iH)(),r=(0,i.qj)({name:""}),o=(0,i.qj)({showOverflow:!0,border:"inner",height:548,rowConfig:{keyField:"id"},columnConfig:{resizable:!0},printConfig:{columns:[{field:"name"},{field:"email"},{field:"nickname"},{field:"age"},{field:"amount"}]},sortConfig:{trigger:"cell",remote:!0,defaultSort:{field:"name",order:"desc"}},filterConfig:{remote:!0},pagerConfig:{enabled:!0,pageSize:15,pageSizes:[5,15,20,50,100,200,500,1e3]},exportConfig:{type:"xlsx",types:["xlsx","csv","html","xml","txt"],modes:["current","all"]},radioConfig:{labelField:"id",reserve:!0,highlight:!0},proxyConfig:{seq:!0,sort:!0,filter:!0,props:{result:"result",total:"page.total"},ajax:{query:function(e){var t=e.page,n=e.sorts,i=e.filters,o=Object.assign({},r),a=n[0];return a&&(o.sort=a.field,o.order=a.order),i.forEach((function(e){var t=e.field,r=e.values;o[t]=r.join(",")})),fetch("".concat(u,"/api/pub/page/list/").concat(t.pageSize,"/").concat(t.currentPage,"?").concat(l().serialize(o))).then((function(e){return e.json()}))},queryAll:function(){return fetch("".concat(u,"/api/pub/all")).then((function(e){return e.json()}))}}},toolbarConfig:{export:!0,print:!0,custom:!0,slots:{buttons:"toolbar_buttons",tools:"toolbar_tools"}},columns:[{type:"seq",width:60,fixed:"left"},{type:"radio",title:"ID",width:120,fixed:"left"},{field:"name",title:"Name",minWidth:160,sortable:!0},{field:"email",title:"Email",minWidth:160},{field:"nickname",title:"Nickname",sortable:!0,minWidth:160},{field:"age",title:"Age",visible:!1,sortable:!0,width:100},{field:"role",title:"Role",sortable:!0,minWidth:160,filters:[{label:"前端开发",value:"前端",checked:!0},{label:"后端开发",value:"后端"},{label:"测试",value:"测试"},{label:"程序员鼓励师",value:"程序员鼓励师"}],filterMultiple:!1},{field:"amount",title:"Amount",width:140,formatter:function(e){var t=e.cellValue;return t?"￥".concat(l().commafy(Number(t),{digits:2})):""}},{field:"updateDate",title:"Update Date",visible:!1,width:160,sortable:!0,formatter:function(e){var t=e.cellValue;return l().toDateString(t,"yyyy-MM-dd HH:ss:mm")}},{field:"createDate",title:"Create Date",visible:!1,width:160,sortable:!0,formatter:function(e){var t=e.cellValue;return l().toDateString(t,"yyyy-MM-dd")}}]}),f=function(e){var r=t.value;r&&r.commitProxy(e)},c=function(){var e=t.value;e&&e.commitProxy("query")},s=function(){var e=t.value;e&&e.commitProxy("reload")};return function(e,i){var l=(0,n.up)("vxe-button"),u=(0,n.up)("vxe-input"),d=(0,n.up)("vxe-form-item"),m=(0,n.up)("vxe-form"),v=(0,n.up)("vxe-grid");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(v,(0,n.dG)({ref_key:"xGrid",ref:t},o),{toolbar_buttons:(0,n.w5)((function(){return[(0,n.Wm)(l,{onClick:i[0]||(i[0]=function(e){return f("query")})},{default:(0,n.w5)((function(){return[(0,n.Uk)("刷新当前")]})),_:1}),(0,n.Wm)(l,{onClick:i[1]||(i[1]=function(e){return f("reload")})},{default:(0,n.w5)((function(){return[(0,n.Uk)("重置条件并重载")]})),_:1}),(0,n.Wm)(l,{onClick:i[2]||(i[2]=function(e){return f("mark_cancel")})},{default:(0,n.w5)((function(){return[(0,n.Uk)("删除/取消")]})),_:1})]})),toolbar_tools:(0,n.w5)((function(){return[(0,n.Wm)(m,{data:r,onSubmit:c,onReset:s},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{field:"name"},{default:(0,n.w5)((function(){return[(0,n.Wm)(u,{modelValue:r.name,"onUpdate:modelValue":i[3]||(i[3]=function(e){return r.name=e}),type:"text",placeholder:"请输入名称"},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{type:"submit",status:"primary",content:"查询"}),(0,n.Wm)(l,{type:"reset",content:"重置"})]})),_:1})]})),_:1},8,["data"])]})),empty:(0,n.w5)((function(){return[a]})),_:1},16)])}}});const c=f;var s=c},50382:function(e,t,r){var n=r(9015),i=Math.floor,o=function(e,t){var r=e.length,u=i(r/2);return r<8?l(e,t):a(e,o(n(e,0,u),t),o(n(e,u),t),t)},l=function(e,t){var r,n,i=e.length,o=1;while(o<i){n=o,r=e[o];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==o++&&(e[n]=r)}return e},a=function(e,t,r,n){var i=t.length,o=r.length,l=0,a=0;while(l<i||a<o)e[l+a]=l<i&&a<o?n(t[l],r[a])<=0?t[l++]:r[a++]:l<i?t[l++]:r[a++];return e};e.exports=o},97365:function(e,t,r){var n=r(30071),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},37298:function(e,t,r){var n=r(30071);e.exports=/MSIE|Trident/.test(n)},27922:function(e,t,r){var n=r(30071),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},65137:function(e,t,r){var n=r(79989),i=r(68844),o=r(10509),l=r(90690),a=r(6310),u=r(98494),f=r(34327),c=r(3689),s=r(50382),d=r(16834),m=r(97365),v=r(37298),p=r(3615),h=r(27922),g=[],b=i(g.sort),x=i(g.push),y=c((function(){g.sort(void 0)})),w=c((function(){g.sort(null)})),_=d("sort"),k=!c((function(){if(p)return p<70;if(!(m&&m>3)){if(v)return!0;if(h)return h<603;var e,t,r,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)g.push({k:t+n,v:r})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),C=y||!w||!_||!k,W=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:f(t)>f(r)?1:-1}};n({target:"Array",proto:!0,forced:C},{sort:function(e){void 0!==e&&o(e);var t=l(this);if(k)return void 0===e?b(t):b(t,e);var r,n,i=[],f=a(t);for(n=0;n<f;n++)n in t&&x(i,t[n]);s(i,W(e)),r=a(i),n=0;while(n<r)t[n]=i[n++];while(n<f)u(t,n++);return t}})}}]);