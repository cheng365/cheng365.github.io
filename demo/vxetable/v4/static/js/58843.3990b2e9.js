"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[58843],{58843:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});n(60228),n(34284);var a=n(66252),i=n(2262),l=(0,a.aZ)({__name:"Demo1",setup:function(e){var t=(0,i.iH)(),n=(0,i.iH)([{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:0,date:"2021-04-01",hasChild:!0},{id:23666,parentId:null,name:"Test23",type:"mp4",size:0,date:"2021-01-02",hasChild:!0},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}]),l=function(e){return new Promise((function(t){setTimeout((function(){var n=[{id:e.id+1e6,parentId:e.id,name:e.name+"Test111111111111",type:"mp4",size:0,date:"2021-10-03",hasChild:!0},{id:e.id+15e5,parentId:e.id,name:e.name+"Test222222222222",type:"mp3",size:0,date:"2021-07-09",hasChild:!1}];t(n)}),500)}))},d=(0,i.qj)({transform:!0,rowField:"id",parentField:"parentId",lazy:!0,hasChild:"hasChild",loadMethod:function(e){var t=e.row;return l(t)}}),r=function(){var e=t.value;e&&e.toggleTreeExpand(n.value[1])},u=function(){var e=t.value;e&&e.setTreeExpand([n.value[1],n.value[3]],!0)},o=function(){var e=t.value;e&&e.setAllTreeExpand(!0)},f=function(){var e=t.value;e&&e.clearTreeExpand()};return function(e,i){var l=(0,a.up)("vxe-button"),c=(0,a.up)("vxe-column"),p=(0,a.up)("vxe-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[(0,a.Wm)(l,{onClick:r},{default:(0,a.w5)((function(){return[(0,a.Uk)("切换第二行展开")]})),_:1}),(0,a.Wm)(l,{onClick:u},{default:(0,a.w5)((function(){return[(0,a.Uk)("设置第二、四行展开")]})),_:1}),(0,a.Wm)(l,{onClick:o},{default:(0,a.w5)((function(){return[(0,a.Uk)("展开所有")]})),_:1}),(0,a.Wm)(l,{onClick:f},{default:(0,a.w5)((function(){return[(0,a.Uk)("关闭所有")]})),_:1})]),(0,a.Wm)(p,{border:"",ref_key:"tableRef",ref:t,"row-config":{keyField:"id"},"column-config":{resizable:!0},"tree-config":d,data:n.value},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{type:"seq",width:"60"}),(0,a.Wm)(c,{field:"name",title:"Name",width:"400","tree-node":""}),(0,a.Wm)(c,{field:"size",title:"Size"}),(0,a.Wm)(c,{field:"type",title:"Type"}),(0,a.Wm)(c,{field:"date",title:"Date"})]})),_:1},8,["tree-config","data"])])}}});const d=l;var r=d}}]);