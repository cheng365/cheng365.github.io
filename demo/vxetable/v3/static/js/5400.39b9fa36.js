"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[5400],{45400:function(e,x,t){t.r(x),t.d(x,{default:function(){return n}});var o=function(){var e=this,x=e._self._c;return x("div",[x("vxe-table",{attrs:{"show-footer":"","row-config":{isHover:!0},"footer-method":e.footerMethod,data:e.tableData}},[x("vxe-column",{attrs:{type:"seq",width:"60"}}),x("vxe-column",{attrs:{field:"name",title:"名称","show-overflow":"ellipsis"}}),x("vxe-column",{attrs:{field:"role",title:"角色","show-overflow":""}}),x("vxe-column",{attrs:{field:"date",title:"标题溢出，显示为 tooltip xxxxxxxxxx","show-header-overflow":"","show-overflow":"title","show-footer-overflow":""}}),x("vxe-column",{attrs:{field:"rate",title:"Rate","show-header-overflow":"title"},scopedSlots:e._u([{key:"header",fn:function(){return[x("span",[e._v("标题显示原生 title ___________________________")])]},proxy:!0}])}),x("vxe-column",{attrs:{field:"address",title:"不换行不换行不换行不换行不换行不换行不换行不换行不换行",width:"160"}})],1)],1)},r=[],a=(t(21249),t(26699),{data:function(){return{tableData:[{name:"Test1",role:"前端",date:"内容显示原生 title",rate:5,address:"address1"},{name:"内容超出隐藏，不显示提示信息xxxxxxxxxxxxxxxxxxx",role:"后端",date:"2020-02-22",rate:2,address:"address2\ntooltip文本换行\n换行xx"},{name:"Test3",role:"内容超出一行显示为 tooltip xxxxxxxxxxxxxx",date:"2020-01-01",rate:0,address:"address3\ntooltip文本换行\n换行xx"},{name:"Test4",role:"设计师",date:"2020-02-23",rate:1,address:"address4"},{name:"Test5",role:"前端",date:"2020-01-20",rate:3,address:"address5\ntooltip文本换行\n换行xx"}]}},methods:{footerMethod:function(e){var x=e.columns,t=[x.map((function(e,x){return 0===x?"合计":["date"].includes(e.field)?"说明 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx":["rate"].includes(e.field)?"不想换行不想换行不想换行不想换行不想换行不想换行不想换行不想换行":null}))];return t}}}),l=a,s=t(1001),d=(0,s.Z)(l,o,r,!1,null,null,null),n=d.exports}}]);