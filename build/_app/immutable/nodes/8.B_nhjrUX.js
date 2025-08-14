import{s as Me,a as g,e as J,b as he,t as Pe,c as k,h as Be,d as W,f as _,r as ve,u as Ne,g as de,i as v,j as d,k as _e,v as Oe,l as Ee,m as Ue,n as Re,o as je,p as Te,q as ye}from"../chunks/scheduler.hQjuAmpE.js";import{S as Ge,i as Ze,c as E,a as R,m as T,t as c,b as f,d as ue,e as C,g as fe}from"../chunks/index.DOtjTu5O.js";import{s as Ve,Q as Y,a as Ke,r as Ce,t as He}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B4GrMC1n.js";import{w as Xe}from"../chunks/entry.D-Ucynhx.js";import{h as x,p as Ye}from"../chunks/setTrackProxy.LUR8PBUg.js";import{I as ze,C as Je}from"../chunks/CopyIcon.B_cNfzMz.js";import{p as We}from"../chunks/stores.5YocGSMo.js";import{G as Se,L as qe,A as Ie,a as xe,Q as be,B as me}from"../chunks/LineChart.CvI1jE_k.js";function eo(n){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ye,p:ye,d:ye}}function De(n){let t,r;return t=new be({props:{queryID:"pool_current",queryResult:n[1]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,i){T(t,o,i),r=!0},p(o,i){const a={};i[0]&2&&(a.queryResult=o[1]),t.$set(a)},i(o){r||(c(t.$$.fragment,o),r=!0)},o(o){f(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function Le(n){let t,r;return t=new be({props:{queryID:"pool_data",queryResult:n[2]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,i){T(t,o,i),r=!0},p(o,i){const a={};i[0]&4&&(a.queryResult=o[2]),t.$set(a)},i(o){r||(c(t.$$.fragment,o),r=!0)},o(o){f(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function Fe(n){let t,r;return t=new be({props:{queryID:"pool_holdings",queryResult:n[3]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,i){T(t,o,i),r=!0},p(o,i){const a={};i[0]&8&&(a.queryResult=o[3]),t.$set(a)},i(o){r||(c(t.$$.fragment,o),r=!0)},o(o){f(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function Qe(n){let t,r;return t=new be({props:{queryID:"pool_rewards",queryResult:n[4]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,i){T(t,o,i),r=!0},p(o,i){const a={};i[0]&16&&(a.queryResult=o[4]),t.$set(a)},i(o){r||(c(t.$$.fragment,o),r=!0)},o(o){f(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function oo(n){let t,r,o,i;return t=new me({props:{data:n[1],value:"cumu_invested",title:"Total Invested",fmt:"usd0"}}),o=new me({props:{data:n[1],value:"balance",title:"Current Holdings",fmt:"usd0"}}),{c(){E(t.$$.fragment),r=g(),E(o.$$.fragment)},l(a){R(t.$$.fragment,a),r=k(a),R(o.$$.fragment,a)},m(a,s){T(t,a,s),d(a,r,s),T(o,a,s),i=!0},p(a,s){const w={};s[0]&2&&(w.data=a[1]),t.$set(w);const h={};s[0]&2&&(h.data=a[1]),o.$set(h)},i(a){i||(c(t.$$.fragment,a),c(o.$$.fragment,a),i=!0)},o(a){f(t.$$.fragment,a),f(o.$$.fragment,a),i=!1},d(a){a&&_(r),C(t,a),C(o,a)}}}function to(n){let t,r,o,i;return t=new me({props:{data:n[1],value:"pnl",title:"Profit & Loss",fmt:"usd0"}}),o=new me({props:{data:n[1],value:"apr",title:"APR",fmt:"pct1"}}),{c(){E(t.$$.fragment),r=g(),E(o.$$.fragment)},l(a){R(t.$$.fragment,a),r=k(a),R(o.$$.fragment,a)},m(a,s){T(t,a,s),d(a,r,s),T(o,a,s),i=!0},p(a,s){const w={};s[0]&2&&(w.data=a[1]),t.$set(w);const h={};s[0]&2&&(h.data=a[1]),o.$set(h)},i(a){i||(c(t.$$.fragment,a),c(o.$$.fragment,a),i=!0)},o(a){f(t.$$.fragment,a),f(o.$$.fragment,a),i=!1},d(a){a&&_(r),C(t,a),C(o,a)}}}function ao(n){let t,r,o,i,a,s,w,h,N,M,A,P=n[0].open_pool+"",z,ee,p,O,H,U,S,te='<a href="#profit--loss">Profit &amp; Loss</a>',j,q,G,I,ae='<a href="#pool-holdings">Pool Holdings</a>',Z,D,V,L,le='<a href="#apr">APR</a>',K,F,X,Q,re='<a href="#rewards">Rewards</a>',u,B,ce,oe,ne;function Ae(e,l){return eo}let se=Ae()(n),m=n[1]&&De(n),b=n[2]&&Le(n),y=n[3]&&Fe(n),$=n[4]&&Qe(n);return p=new Se({props:{cols:"2",$$slots:{default:[oo]},$$scope:{ctx:n}}}),H=new Se({props:{cols:"2",$$slots:{default:[to]},$$scope:{ctx:n}}}),q=new qe({props:{data:n[2],x:"block_day",y:"pnl",chartAreaHeight:"400",yFmt:"usd0",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),D=new Ie({props:{data:n[3],x:"block_day",y:"balance",series:"type",chartAreaHeight:"400",legend:"false",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),F=new qe({props:{data:n[2],x:"block_day",y:"apr",chartAreaHeight:"400",title:"APR",yFmt:"pct1",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),B=new Ie({props:{data:n[4],x:"block_day",y:"balance_usd",series:"symbol",chartAreaHeight:"400",title:"Unclaimed Rewards",legend:"false",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),oe=new xe({props:{prefix:"Data last updated"}}),{c(){t=g(),se.c(),r=J("meta"),o=J("meta"),i=he(),a=g(),m&&m.c(),s=g(),b&&b.c(),w=g(),y&&y.c(),h=g(),$&&$.c(),N=g(),M=J("h1"),A=J("a"),z=Pe(P),ee=g(),E(p.$$.fragment),O=g(),E(H.$$.fragment),U=g(),S=J("h2"),S.innerHTML=te,j=g(),E(q.$$.fragment),G=g(),I=J("h2"),I.innerHTML=ae,Z=g(),E(D.$$.fragment),V=g(),L=J("h2"),L.innerHTML=le,K=g(),E(F.$$.fragment),X=g(),Q=J("h2"),Q.innerHTML=re,u=g(),E(B.$$.fragment),ce=g(),E(oe.$$.fragment),this.h()},l(e){t=k(e);const l=Be("svelte-1j2izld",document.head);se.l(l),r=W(l,"META",{name:!0,content:!0}),o=W(l,"META",{name:!0,content:!0}),i=he(),l.forEach(_),a=k(e),m&&m.l(e),s=k(e),b&&b.l(e),w=k(e),y&&y.l(e),h=k(e),$&&$.l(e),N=k(e),M=W(e,"H1",{class:!0,id:!0});var ie=ve(M);A=W(ie,"A",{href:!0});var pe=ve(A);z=Ne(pe,P),pe.forEach(_),ie.forEach(_),ee=k(e),R(p.$$.fragment,e),O=k(e),R(H.$$.fragment,e),U=k(e),S=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(S)!=="svelte-19jg67"&&(S.innerHTML=te),j=k(e),R(q.$$.fragment,e),G=k(e),I=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(I)!=="svelte-kjwryo"&&(I.innerHTML=ae),Z=k(e),R(D.$$.fragment,e),V=k(e),L=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(L)!=="svelte-1wuh0ln"&&(L.innerHTML=le),K=k(e),R(F.$$.fragment,e),X=k(e),Q=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(Q)!=="svelte-xb1rjo"&&(Q.innerHTML=re),u=k(e),R(B.$$.fragment,e),ce=k(e),R(oe.$$.fragment,e),this.h()},h(){v(r,"name","twitter:card"),v(r,"content","summary"),v(o,"name","twitter:site"),v(o,"content","@evidence_dev"),v(A,"href","#paramsopen_pool"),v(M,"class","markdown"),v(M,"id","paramsopen_pool"),v(S,"class","markdown"),v(S,"id","profit--loss"),v(I,"class","markdown"),v(I,"id","pool-holdings"),v(L,"class","markdown"),v(L,"id","apr"),v(Q,"class","markdown"),v(Q,"id","rewards")},m(e,l){d(e,t,l),se.m(document.head,null),_e(document.head,r),_e(document.head,o),_e(document.head,i),d(e,a,l),m&&m.m(e,l),d(e,s,l),b&&b.m(e,l),d(e,w,l),y&&y.m(e,l),d(e,h,l),$&&$.m(e,l),d(e,N,l),d(e,M,l),_e(M,A),_e(A,z),d(e,ee,l),T(p,e,l),d(e,O,l),T(H,e,l),d(e,U,l),d(e,S,l),d(e,j,l),T(q,e,l),d(e,G,l),d(e,I,l),d(e,Z,l),T(D,e,l),d(e,V,l),d(e,L,l),d(e,K,l),T(F,e,l),d(e,X,l),d(e,Q,l),d(e,u,l),T(B,e,l),d(e,ce,l),T(oe,e,l),ne=!0},p(e,l){se.p(e,l),e[1]?m?(m.p(e,l),l[0]&2&&c(m,1)):(m=De(e),m.c(),c(m,1),m.m(s.parentNode,s)):m&&(fe(),f(m,1,1,()=>{m=null}),ue()),e[2]?b?(b.p(e,l),l[0]&4&&c(b,1)):(b=Le(e),b.c(),c(b,1),b.m(w.parentNode,w)):b&&(fe(),f(b,1,1,()=>{b=null}),ue()),e[3]?y?(y.p(e,l),l[0]&8&&c(y,1)):(y=Fe(e),y.c(),c(y,1),y.m(h.parentNode,h)):y&&(fe(),f(y,1,1,()=>{y=null}),ue()),e[4]?$?($.p(e,l),l[0]&16&&c($,1)):($=Qe(e),$.c(),c($,1),$.m(N.parentNode,N)):$&&(fe(),f($,1,1,()=>{$=null}),ue()),(!ne||l[0]&1)&&P!==(P=e[0].open_pool+"")&&Oe(z,P);const ie={};l[0]&2|l[1]&16&&(ie.$$scope={dirty:l,ctx:e}),p.$set(ie);const pe={};l[0]&2|l[1]&16&&(pe.$$scope={dirty:l,ctx:e}),H.$set(pe);const $e={};l[0]&4&&($e.data=e[2]),q.$set($e);const ge={};l[0]&8&&(ge.data=e[3]),D.$set(ge);const ke={};l[0]&4&&(ke.data=e[2]),F.$set(ke);const we={};l[0]&16&&(we.data=e[4]),B.$set(we)},i(e){ne||(c(m),c(b),c(y),c($),c(p.$$.fragment,e),c(H.$$.fragment,e),c(q.$$.fragment,e),c(D.$$.fragment,e),c(F.$$.fragment,e),c(B.$$.fragment,e),c(oe.$$.fragment,e),ne=!0)},o(e){f(m),f(b),f(y),f($),f(p.$$.fragment,e),f(H.$$.fragment,e),f(q.$$.fragment,e),f(D.$$.fragment,e),f(F.$$.fragment,e),f(B.$$.fragment,e),f(oe.$$.fragment,e),ne=!1},d(e){e&&(_(t),_(a),_(s),_(w),_(h),_(N),_(M),_(ee),_(O),_(U),_(S),_(j),_(G),_(I),_(Z),_(V),_(L),_(K),_(X),_(Q),_(u),_(ce)),se.d(e),_(r),_(o),_(i),m&&m.d(e),b&&b.d(e),y&&y.d(e),$&&$.d(e),C(p,e),C(H,e),C(q,e),C(D,e),C(F,e),C(B,e),C(oe,e)}}}function lo(n,t,r){let o,i;Ee(n,We,u=>r(15,o=u)),Ee(n,Ce,u=>r(25,i=u));let{data:a}=t,{data:s={},customFormattingSettings:w,__db:h,inputs:N}=a;Ue(Ce,i="68b3f0d225a365eb2bf84e71a368e500",i);let M=Xe(N);Re(ze,M),je(M.subscribe(u=>N=u)),Re(Je,{getCustomFormats:()=>w.customFormats||[]});const A=(u,B)=>Ye(h.query,u,{query_name:B});Ve(A);let P;const z=()=>{P||(P=setTimeout(()=>{He.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},ee=()=>{P?(clearTimeout(P),P=null):He.dismiss("LoadingToast")};Te(()=>(Y.addEventListener("inFlightQueryStart",z),Y.addEventListener("inFlightQueryEnd",ee),Y.QueriesLoading&&z(),()=>{Y.removeEventListener("inFlightQueryStart",z),Y.removeEventListener("inFlightQueryEnd",ee)}));let p=o.params;Te(()=>!0);let O={initialData:void 0,initialError:void 0},H=x`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)
  and protocol || ' ' || pool = '${p.open_pool}'`,U=`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)
  and protocol || ' ' || pool = '${p.open_pool}'`;s.pool_current&&(s.pool_current instanceof Error?O.initialError=s.pool_current:O.initialData=s.pool_current,s.pool_current__DESCRIBE&&(O.knownColumns=s.pool_current__DESCRIBE));let S;const te=Y.createReactive({callback:u=>{r(1,S=u)},execFn:A},{id:"pool_current",...O});te(U,{noResolve:H}),globalThis[Symbol.for("pool_current")]={get value(){return S}};let j={initialData:void 0,initialError:void 0},q=x`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day`,G=`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day`;s.pool_data&&(s.pool_data instanceof Error?j.initialError=s.pool_data:j.initialData=s.pool_data,s.pool_data__DESCRIBE&&(j.knownColumns=s.pool_data__DESCRIBE));let I;const ae=Y.createReactive({callback:u=>{r(2,I=u)},execFn:A},{id:"pool_data",...j});ae(G,{noResolve:q}),globalThis[Symbol.for("pool_data")]={get value(){return I}};let Z={initialData:void 0,initialError:void 0},D=x`select 
  block_day
  , 'Pool' as type
  , pool_balance as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
union all 
select 
  block_day
  , 'Rewards' as type
  , rewards as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
order by block_day, type`,V=`select 
  block_day
  , 'Pool' as type
  , pool_balance as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
union all 
select 
  block_day
  , 'Rewards' as type
  , rewards as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
order by block_day, type`;s.pool_holdings&&(s.pool_holdings instanceof Error?Z.initialError=s.pool_holdings:Z.initialData=s.pool_holdings,s.pool_holdings__DESCRIBE&&(Z.knownColumns=s.pool_holdings__DESCRIBE));let L;const le=Y.createReactive({callback:u=>{r(3,L=u)},execFn:A},{id:"pool_holdings",...Z});le(V,{noResolve:D}),globalThis[Symbol.for("pool_holdings")]={get value(){return L}};let K={initialData:void 0,initialError:void 0},F=x`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${p.open_pool}'`,X=`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${p.open_pool}'`;s.pool_rewards&&(s.pool_rewards instanceof Error?K.initialError=s.pool_rewards:K.initialData=s.pool_rewards,s.pool_rewards__DESCRIBE&&(K.knownColumns=s.pool_rewards__DESCRIBE));let Q;const re=Y.createReactive({callback:u=>{r(4,Q=u)},execFn:A},{id:"pool_rewards",...K});return re(X,{noResolve:F}),globalThis[Symbol.for("pool_rewards")]={get value(){return Q}},n.$$set=u=>{"data"in u&&r(5,a=u.data)},n.$$.update=()=>{n.$$.dirty[0]&32&&r(6,{data:s={},customFormattingSettings:w,__db:h}=a,s),n.$$.dirty[0]&64&&Ke.set(Object.keys(s).length>0),n.$$.dirty[0]&32768&&r(0,p=o.params),n.$$.dirty[0]&1&&r(7,H=x`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)
  and protocol || ' ' || pool = '${p.open_pool}'`),n.$$.dirty[0]&1&&r(8,U=`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)
  and protocol || ' ' || pool = '${p.open_pool}'`),n.$$.dirty[0]&384&&te(U,{noResolve:H}),n.$$.dirty[0]&1&&r(9,q=x`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day`),n.$$.dirty[0]&1&&r(10,G=`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day`),n.$$.dirty[0]&1536&&ae(G,{noResolve:q}),n.$$.dirty[0]&1&&r(11,D=x`select 
  block_day
  , 'Pool' as type
  , pool_balance as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
union all 
select 
  block_day
  , 'Rewards' as type
  , rewards as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
order by block_day, type`),n.$$.dirty[0]&1&&r(12,V=`select 
  block_day
  , 'Pool' as type
  , pool_balance as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
union all 
select 
  block_day
  , 'Rewards' as type
  , rewards as balance
from (select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${p.open_pool}'
order by block_day)
order by block_day, type`),n.$$.dirty[0]&6144&&le(V,{noResolve:D}),n.$$.dirty[0]&1&&r(13,F=x`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${p.open_pool}'`),n.$$.dirty[0]&1&&r(14,X=`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${p.open_pool}'`),n.$$.dirty[0]&24576&&re(X,{noResolve:F})},[p,S,I,L,Q,a,s,H,U,q,G,D,V,F,X,o]}class mo extends Ge{constructor(t){super(),Ze(this,t,lo,ao,Me,{data:5},null,[-1,-1])}}export{mo as component};
