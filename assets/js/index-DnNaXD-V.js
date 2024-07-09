import{d as p,D as u,i as S,T as _,a8 as h,X as f,o as x,c as w,a,u as n,Q as I,t as Y,a9 as E,p as D,g as R,_ as C}from"./index-3Sy3gL4y.js";const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII=",A=s=>(D("data-v-273a0900"),s=s(),R(),s),M={class:"dataScreen-container"},k={class:"dataScreen-header"},B={class:"header-lf"},H=A(()=>a("div",{class:"header-ct"},[a("div",{class:"header-ct-title"},[a("span",null,"智慧旅游可视化大数据展示平台"),a("div",{class:"header-ct-warning"},"平台高峰预警信息（2条）")])],-1)),Z={class:"header-ri"},G=A(()=>a("span",{class:"header-download"},"统计报告",-1)),b={class:"header-time"},q=E('<div class="dataScreen-main" data-v-273a0900><div class="dataScreen-lf" data-v-273a0900><div class="dataScreen-top" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>实时游客统计</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div><div class="dataScreen-center" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>男女比例</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div><div class="dataScreen-bottom" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>年龄比例</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div></div><div class="dataScreen-ct" data-v-273a0900><div class="dataScreen-map" data-v-273a0900><div class="dataScreen-map-title" data-v-273a0900>景区实时客流量</div></div><div class="dataScreen-cb" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>未来30天游客量趋势图</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div></div><div class="dataScreen-rg" data-v-273a0900><div class="dataScreen-top" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>热门景区排行</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div><div class="dataScreen-center" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>年度游客量对比</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div><div class="dataScreen-bottom" data-v-273a0900><div class="dataScreen-main-title" data-v-273a0900><span data-v-273a0900>预约渠道数据统计</span><img src="'+e+'" alt="" data-v-273a0900></div><div class="dataScreen-main-chart" data-v-273a0900></div></div></div></div>',1),U=p({name:"dataScreen"}),F=p({...U,setup(s){const g=u(),t=S(null);_(()=>{t.value&&(t.value.style.transform=`scale(${v()}) translate(-50%, -50%)`,t.value.style.width="1920px",t.value.style.height="1080px"),window.addEventListener("resize",c)});const c=()=>{t.value&&(t.value.style.transform=`scale(${v()}) translate(-50%, -50%)`)},v=(o=1920,d=1080)=>{let i=window.innerWidth/o,m=window.innerHeight/d;return i<m?i:m};let r=null,l=S(h().format("YYYY年MM月DD HH:mm:ss"));return r=setInterval(()=>{l.value=h().format("YYYY年MM月DD HH:mm:ss")},1e3),f(()=>{window.removeEventListener("resize",c),clearInterval(r)}),(o,d)=>(x(),w("div",M,[a("div",{class:"dataScreen-content",ref_key:"dataScreenRef",ref:t},[a("div",k,[a("div",B,[a("span",{class:"header-screening",onClick:d[0]||(d[0]=i=>n(g).push(n(I)))},"首页")]),H,a("div",Z,[G,a("span",b,"当前时间："+Y(n(l)),1)])]),q],512)]))}}),y=C(F,[["__scopeId","data-v-273a0900"]]);export{y as default};
