import{g as n}from"./user-Njj-t5nO.js";import{T as i}from"./index-C0Pf-jpU.js";import{d as m,R as c,r as p,o as g,c as x,b as e,u,a as f,w as t,e as l,P as _,p as v,g as F,_ as V}from"./index-Cbh8lrhq.js";const q=d=>(v("data-v-b2b5dc6d"),d=d(),F(),d),C={class:"content-box"},T={class:"descriptions-box card"},N=q(()=>f("span",{class:"text"}," 树形筛选器 🍓🍇🍈🍉",-1)),S=m({name:"treeFilter"}),w=m({...S,setup(d){const o=c({departmentId:"1"}),b=s=>{_.success(`你选择了 id 为 ${s} 的数据🤔`),o.departmentId=s},r=c({departmentId:["11"]}),h=s=>{_.success(`你选择了 id 为 ${JSON.stringify(s)} 的数据🤔`),r.departmentId=s};return(s,B)=>{const a=p("el-descriptions-item"),I=p("el-descriptions");return g(),x("div",C,[e(i,{label:"name",title:"部门列表(单选)","request-api":u(n),"default-value":o.departmentId,onChange:b},null,8,["request-api","default-value"]),e(i,{title:"部门列表(多选)",multiple:"",label:"name","request-api":u(n),"default-value":r.departmentId,onChange:h},null,8,["request-api","default-value"]),f("div",T,[N,e(I,{title:"配置项 📚",column:1,border:""},{default:t(()=>[e(a,{label:"requestApi"},{default:t(()=>[l(" 请求分类数据的 api ")]),_:1}),e(a,{label:"data"},{default:t(()=>[l(" 分类数据，如果有分类数据，则不会执行 api 请求 ")]),_:1}),e(a,{label:"title"},{default:t(()=>[l(" treeFilter 标题 ")]),_:1}),e(a,{label:"id"},{default:t(()=>[l(" 选择的id，默认为 “id” ")]),_:1}),e(a,{label:"label"},{default:t(()=>[l(" 显示的label，默认为 “label” ")]),_:1}),e(a,{label:"multiple"},{default:t(()=>[l(" 是否为多选，默认为 false ")]),_:1}),e(a,{label:"defaultValue"},{default:t(()=>[l(" 默认选中的值 ")]),_:1})]),_:1})])])}}}),y=V(w,[["__scopeId","data-v-b2b5dc6d"]]);export{y as default};