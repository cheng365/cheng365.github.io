"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[94051],{94051:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});t(25728),t(60228),t(34284);var a=t(66252),u=t(49963),l=t(3577),r=t(2262),o=["onUpdate:modelValue"],i=(0,a.aZ)({__name:"Demo1",setup:function(e){var n=(0,r.iH)([{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"}]),t=(0,r.iH)([{label:"第一分组",options:[{value:"0",label:"女"}]},{label:"第二分组",options:[{value:"1",label:"男"}]},{label:"其他",options:[{value:"2",label:"无"}]}]),i=function(e){var n="";return t.value.find((function(t){return t.options.find((function(t){return t.value===e&&(n=t.label,!0)}))})),n};return function(e,r){var d=(0,a.up)("vxe-column"),s=(0,a.up)("vxe-select"),m=(0,a.up)("vxe-colgroup"),c=(0,a.up)("vxe-input"),p=(0,a.up)("vxe-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(p,{border:"","show-overflow":"","column-config":{resizable:!0},data:n.value,"edit-config":{trigger:"click",mode:"cell"}},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{type:"seq",width:"60"}),(0,a.Wm)(m,{title:"分组1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{field:"name",title:"Name","edit-render":{autofocus:".my-input",autoselect:!0}},{edit:(0,a.w5)((function(e){var n=e.row;return[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":function(e){return n.name=e},type:"text",class:"my-input"},null,8,o),[[u.nr,n.name]])]})),_:1},8,["edit-render"]),(0,a.Wm)(d,{field:"sex",title:"Sex","edit-render":{}},{default:(0,a.w5)((function(e){var n=e.row;return[(0,a._)("span",null,(0,l.zw)(i(n.sex)),1)]})),edit:(0,a.w5)((function(e){var n=e.row;return[(0,a.Wm)(s,{modelValue:n.sex,"onUpdate:modelValue":function(e){return n.sex=e},type:"text",optionGroups:t.value,transfer:""},null,8,["modelValue","onUpdate:modelValue","optionGroups"])]})),_:1})]})),_:1}),(0,a.Wm)(m,{title:"分组1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{field:"date13",title:"Date","edit-render":{autofocus:".my-input .vxe-input--inner",autoselect:!0}},{edit:(0,a.w5)((function(e){var n=e.row;return[(0,a.Wm)(c,{modelValue:n.date13,"onUpdate:modelValue":function(e){return n.date13=e},type:"date",class:"my-input",transfer:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1},8,["edit-render"])]})),_:1})]})),_:1},8,["data"])])}}});const d=i;var s=d}}]);