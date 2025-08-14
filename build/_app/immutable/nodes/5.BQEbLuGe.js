import{s as Be,a as h,e as z,b as ke,t as Ue,c as $,h as Qe,d as W,f as i,r as ve,u as Ae,g as de,i as v,j as d,k as ie,v as Ge,l as Ee,m as Ve,n as Re,o as Ne,p as Se,q as ye}from"../chunks/scheduler.hQjuAmpE.js";import{S as Oe,i as je,c as E,a as R,m as S,t as _,b as m,d as ue,e as C,g as me}from"../chunks/index.DOtjTu5O.js";import{s as Ze,Q as Y,a as Ke,r as Ce,t as Te}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B3stQ-lp.js";import{w as Xe}from"../chunks/entry.DF7Xd9vu.js";import{h as J,p as Ye}from"../chunks/setTrackProxy.LUR8PBUg.js";import{I as xe,C as ze}from"../chunks/CopyIcon.C_cNzsxJ.js";import{p as We}from"../chunks/stores.iW5FyqFN.js";import{G as De,L as Pe,A as He,a as Je,Q as be,B as fe}from"../chunks/LineChart.C5mcbZFV.js";function eo(n){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ye,p:ye,d:ye}}function qe(n){let t,r;return t=new be({props:{queryID:"pool_current",queryResult:n[1]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,p){S(t,o,p),r=!0},p(o,p){const a={};p[0]&2&&(a.queryResult=o[1]),t.$set(a)},i(o){r||(_(t.$$.fragment,o),r=!0)},o(o){m(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function Ie(n){let t,r;return t=new be({props:{queryID:"pool_data",queryResult:n[2]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,p){S(t,o,p),r=!0},p(o,p){const a={};p[0]&4&&(a.queryResult=o[2]),t.$set(a)},i(o){r||(_(t.$$.fragment,o),r=!0)},o(o){m(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function Le(n){let t,r;return t=new be({props:{queryID:"pool_holdings",queryResult:n[3]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,p){S(t,o,p),r=!0},p(o,p){const a={};p[0]&8&&(a.queryResult=o[3]),t.$set(a)},i(o){r||(_(t.$$.fragment,o),r=!0)},o(o){m(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function Me(n){let t,r;return t=new be({props:{queryID:"pool_rewards",queryResult:n[4]}}),{c(){E(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,p){S(t,o,p),r=!0},p(o,p){const a={};p[0]&16&&(a.queryResult=o[4]),t.$set(a)},i(o){r||(_(t.$$.fragment,o),r=!0)},o(o){m(t.$$.fragment,o),r=!1},d(o){C(t,o)}}}function oo(n){let t,r,o,p;return t=new fe({props:{data:n[1],value:"cumu_invested",title:"Invested",fmt:"usd0"}}),o=new fe({props:{data:n[1],value:"cumu_withdrawn",title:"Withdrawn",fmt:"usd0"}}),{c(){E(t.$$.fragment),r=h(),E(o.$$.fragment)},l(a){R(t.$$.fragment,a),r=$(a),R(o.$$.fragment,a)},m(a,s){S(t,a,s),d(a,r,s),S(o,a,s),p=!0},p(a,s){const g={};s[0]&2&&(g.data=a[1]),t.$set(g);const k={};s[0]&2&&(k.data=a[1]),o.$set(k)},i(a){p||(_(t.$$.fragment,a),_(o.$$.fragment,a),p=!0)},o(a){m(t.$$.fragment,a),m(o.$$.fragment,a),p=!1},d(a){a&&i(r),C(t,a),C(o,a)}}}function to(n){let t,r,o,p;return t=new fe({props:{data:n[1],value:"pnl",title:"Profit & Loss",fmt:"usd0"}}),o=new fe({props:{data:n[1],value:"apr",title:"APR",fmt:"pct1"}}),{c(){E(t.$$.fragment),r=h(),E(o.$$.fragment)},l(a){R(t.$$.fragment,a),r=$(a),R(o.$$.fragment,a)},m(a,s){S(t,a,s),d(a,r,s),S(o,a,s),p=!0},p(a,s){const g={};s[0]&2&&(g.data=a[1]),t.$set(g);const k={};s[0]&2&&(k.data=a[1]),o.$set(k)},i(a){p||(_(t.$$.fragment,a),_(o.$$.fragment,a),p=!0)},o(a){m(t.$$.fragment,a),m(o.$$.fragment,a),p=!1},d(a){a&&i(r),C(t,a),C(o,a)}}}function ao(n){let t,r,o,p,a,s,g,k,A,B,F,U=n[0].closed_pool+"",x,ee,c,G,T,V,D,te='<a href="#profit--loss">Profit &amp; Loss</a>',N,P,O,H,ae='<a href="#pool-holdings">Pool Holdings</a>',j,q,Z,I,le='<a href="#apr">APR</a>',K,L,X,M,re='<a href="#rewards">Rewards</a>',u,Q,_e,oe,ne;function Fe(e,l){return eo}let se=Fe()(n),f=n[1]&&qe(n),b=n[2]&&Ie(n),y=n[3]&&Le(n),w=n[4]&&Me(n);return c=new De({props:{cols:"2",$$slots:{default:[oo]},$$scope:{ctx:n}}}),T=new De({props:{cols:"2",$$slots:{default:[to]},$$scope:{ctx:n}}}),P=new Pe({props:{data:n[2],x:"block_day",y:"pnl",chartAreaHeight:"400",yFmt:"usd0",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),q=new He({props:{data:n[3],x:"block_day",y:"balance",series:"type",chartAreaHeight:"400",legend:"false",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),L=new Pe({props:{data:n[2],x:"block_day",y:"apr",chartAreaHeight:"400",yFmt:"pct1",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),Q=new He({props:{data:n[4],x:"block_day",y:"balance_usd",series:"symbol",chartAreaHeight:"400",legend:"false",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),oe=new Je({props:{prefix:"Data last updated"}}),{c(){t=h(),se.c(),r=z("meta"),o=z("meta"),p=ke(),a=h(),f&&f.c(),s=h(),b&&b.c(),g=h(),y&&y.c(),k=h(),w&&w.c(),A=h(),B=z("h1"),F=z("a"),x=Ue(U),ee=h(),E(c.$$.fragment),G=h(),E(T.$$.fragment),V=h(),D=z("h2"),D.innerHTML=te,N=h(),E(P.$$.fragment),O=h(),H=z("h2"),H.innerHTML=ae,j=h(),E(q.$$.fragment),Z=h(),I=z("h2"),I.innerHTML=le,K=h(),E(L.$$.fragment),X=h(),M=z("h2"),M.innerHTML=re,u=h(),E(Q.$$.fragment),_e=h(),E(oe.$$.fragment),this.h()},l(e){t=$(e);const l=Qe("svelte-1j2izld",document.head);se.l(l),r=W(l,"META",{name:!0,content:!0}),o=W(l,"META",{name:!0,content:!0}),p=ke(),l.forEach(i),a=$(e),f&&f.l(e),s=$(e),b&&b.l(e),g=$(e),y&&y.l(e),k=$(e),w&&w.l(e),A=$(e),B=W(e,"H1",{class:!0,id:!0});var ce=ve(B);F=W(ce,"A",{href:!0});var pe=ve(F);x=Ae(pe,U),pe.forEach(i),ce.forEach(i),ee=$(e),R(c.$$.fragment,e),G=$(e),R(T.$$.fragment,e),V=$(e),D=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(D)!=="svelte-19jg67"&&(D.innerHTML=te),N=$(e),R(P.$$.fragment,e),O=$(e),H=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(H)!=="svelte-kjwryo"&&(H.innerHTML=ae),j=$(e),R(q.$$.fragment,e),Z=$(e),I=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(I)!=="svelte-1wuh0ln"&&(I.innerHTML=le),K=$(e),R(L.$$.fragment,e),X=$(e),M=W(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(M)!=="svelte-xb1rjo"&&(M.innerHTML=re),u=$(e),R(Q.$$.fragment,e),_e=$(e),R(oe.$$.fragment,e),this.h()},h(){v(r,"name","twitter:card"),v(r,"content","summary"),v(o,"name","twitter:site"),v(o,"content","@evidence_dev"),v(F,"href","#paramsclosed_pool"),v(B,"class","markdown"),v(B,"id","paramsclosed_pool"),v(D,"class","markdown"),v(D,"id","profit--loss"),v(H,"class","markdown"),v(H,"id","pool-holdings"),v(I,"class","markdown"),v(I,"id","apr"),v(M,"class","markdown"),v(M,"id","rewards")},m(e,l){d(e,t,l),se.m(document.head,null),ie(document.head,r),ie(document.head,o),ie(document.head,p),d(e,a,l),f&&f.m(e,l),d(e,s,l),b&&b.m(e,l),d(e,g,l),y&&y.m(e,l),d(e,k,l),w&&w.m(e,l),d(e,A,l),d(e,B,l),ie(B,F),ie(F,x),d(e,ee,l),S(c,e,l),d(e,G,l),S(T,e,l),d(e,V,l),d(e,D,l),d(e,N,l),S(P,e,l),d(e,O,l),d(e,H,l),d(e,j,l),S(q,e,l),d(e,Z,l),d(e,I,l),d(e,K,l),S(L,e,l),d(e,X,l),d(e,M,l),d(e,u,l),S(Q,e,l),d(e,_e,l),S(oe,e,l),ne=!0},p(e,l){se.p(e,l),e[1]?f?(f.p(e,l),l[0]&2&&_(f,1)):(f=qe(e),f.c(),_(f,1),f.m(s.parentNode,s)):f&&(me(),m(f,1,1,()=>{f=null}),ue()),e[2]?b?(b.p(e,l),l[0]&4&&_(b,1)):(b=Ie(e),b.c(),_(b,1),b.m(g.parentNode,g)):b&&(me(),m(b,1,1,()=>{b=null}),ue()),e[3]?y?(y.p(e,l),l[0]&8&&_(y,1)):(y=Le(e),y.c(),_(y,1),y.m(k.parentNode,k)):y&&(me(),m(y,1,1,()=>{y=null}),ue()),e[4]?w?(w.p(e,l),l[0]&16&&_(w,1)):(w=Me(e),w.c(),_(w,1),w.m(A.parentNode,A)):w&&(me(),m(w,1,1,()=>{w=null}),ue()),(!ne||l[0]&1)&&U!==(U=e[0].closed_pool+"")&&Ge(x,U);const ce={};l[0]&2|l[1]&16&&(ce.$$scope={dirty:l,ctx:e}),c.$set(ce);const pe={};l[0]&2|l[1]&16&&(pe.$$scope={dirty:l,ctx:e}),T.$set(pe);const we={};l[0]&4&&(we.data=e[2]),P.$set(we);const he={};l[0]&8&&(he.data=e[3]),q.$set(he);const $e={};l[0]&4&&($e.data=e[2]),L.$set($e);const ge={};l[0]&16&&(ge.data=e[4]),Q.$set(ge)},i(e){ne||(_(f),_(b),_(y),_(w),_(c.$$.fragment,e),_(T.$$.fragment,e),_(P.$$.fragment,e),_(q.$$.fragment,e),_(L.$$.fragment,e),_(Q.$$.fragment,e),_(oe.$$.fragment,e),ne=!0)},o(e){m(f),m(b),m(y),m(w),m(c.$$.fragment,e),m(T.$$.fragment,e),m(P.$$.fragment,e),m(q.$$.fragment,e),m(L.$$.fragment,e),m(Q.$$.fragment,e),m(oe.$$.fragment,e),ne=!1},d(e){e&&(i(t),i(a),i(s),i(g),i(k),i(A),i(B),i(ee),i(G),i(V),i(D),i(N),i(O),i(H),i(j),i(Z),i(I),i(K),i(X),i(M),i(u),i(_e)),se.d(e),i(r),i(o),i(p),f&&f.d(e),b&&b.d(e),y&&y.d(e),w&&w.d(e),C(c,e),C(T,e),C(P,e),C(q,e),C(L,e),C(Q,e),C(oe,e)}}}function lo(n,t,r){let o,p;Ee(n,We,u=>r(15,o=u)),Ee(n,Ce,u=>r(25,p=u));let{data:a}=t,{data:s={},customFormattingSettings:g,__db:k,inputs:A}=a;Ve(Ce,p="5d3d6f3bacad4c7c1e9c24dc1618ebc1",p);let B=Xe(A);Re(xe,B),Ne(B.subscribe(u=>A=u)),Re(ze,{getCustomFormats:()=>g.customFormats||[]});const F=(u,Q)=>Ye(k.query,u,{query_name:Q});Ze(F);let U;const x=()=>{U||(U=setTimeout(()=>{Te.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},ee=()=>{U?(clearTimeout(U),U=null):Te.dismiss("LoadingToast")};Se(()=>(Y.addEventListener("inFlightQueryStart",x),Y.addEventListener("inFlightQueryEnd",ee),Y.QueriesLoading&&x(),()=>{Y.removeEventListener("inFlightQueryStart",x),Y.removeEventListener("inFlightQueryEnd",ee)}));let c=o.params;Se(()=>!0);let G={initialData:void 0,initialError:void 0},T=J`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'`,V=`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'`;s.pool_current&&(s.pool_current instanceof Error?G.initialError=s.pool_current:G.initialData=s.pool_current,s.pool_current__DESCRIBE&&(G.knownColumns=s.pool_current__DESCRIBE));let D;const te=Y.createReactive({callback:u=>{r(1,D=u)},execFn:F},{id:"pool_current",...G});te(V,{noResolve:T}),globalThis[Symbol.for("pool_current")]={get value(){return D}};let N={initialData:void 0,initialError:void 0},P=J`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day`,O=`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day`;s.pool_data&&(s.pool_data instanceof Error?N.initialError=s.pool_data:N.initialData=s.pool_data,s.pool_data__DESCRIBE&&(N.knownColumns=s.pool_data__DESCRIBE));let H;const ae=Y.createReactive({callback:u=>{r(2,H=u)},execFn:F},{id:"pool_data",...N});ae(O,{noResolve:P}),globalThis[Symbol.for("pool_data")]={get value(){return H}};let j={initialData:void 0,initialError:void 0},q=J`select 
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
where protocol || ' ' || pool = '${c.closed_pool}'
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
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day)
order by block_day, type`,Z=`select 
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
where protocol || ' ' || pool = '${c.closed_pool}'
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
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day)
order by block_day, type`;s.pool_holdings&&(s.pool_holdings instanceof Error?j.initialError=s.pool_holdings:j.initialData=s.pool_holdings,s.pool_holdings__DESCRIBE&&(j.knownColumns=s.pool_holdings__DESCRIBE));let I;const le=Y.createReactive({callback:u=>{r(3,I=u)},execFn:F},{id:"pool_holdings",...j});le(Z,{noResolve:q}),globalThis[Symbol.for("pool_holdings")]={get value(){return I}};let K={initialData:void 0,initialError:void 0},L=J`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${c.closed_pool}'
  and block_day < (select block_day from (select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'))`,X=`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${c.closed_pool}'
  and block_day < (select block_day from (select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'))`;s.pool_rewards&&(s.pool_rewards instanceof Error?K.initialError=s.pool_rewards:K.initialData=s.pool_rewards,s.pool_rewards__DESCRIBE&&(K.knownColumns=s.pool_rewards__DESCRIBE));let M;const re=Y.createReactive({callback:u=>{r(4,M=u)},execFn:F},{id:"pool_rewards",...K});return re(X,{noResolve:L}),globalThis[Symbol.for("pool_rewards")]={get value(){return M}},n.$$set=u=>{"data"in u&&r(5,a=u.data)},n.$$.update=()=>{n.$$.dirty[0]&32&&r(6,{data:s={},customFormattingSettings:g,__db:k}=a,s),n.$$.dirty[0]&64&&Ke.set(Object.keys(s).length>0),n.$$.dirty[0]&32768&&r(0,c=o.params),n.$$.dirty[0]&1&&r(7,T=J`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'`),n.$$.dirty[0]&1&&r(8,V=`select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'`),n.$$.dirty[0]&384&&te(V,{noResolve:T}),n.$$.dirty[0]&1&&r(9,P=J`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day`),n.$$.dirty[0]&1&&r(10,O=`select 
  block_day
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , apr
  , pnl
from tokenlogic_data.pool_returns
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day`),n.$$.dirty[0]&1536&&ae(O,{noResolve:P}),n.$$.dirty[0]&1&&r(11,q=J`select 
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
where protocol || ' ' || pool = '${c.closed_pool}'
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
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day)
order by block_day, type`),n.$$.dirty[0]&1&&r(12,Z=`select 
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
where protocol || ' ' || pool = '${c.closed_pool}'
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
where protocol || ' ' || pool = '${c.closed_pool}'
order by block_day)
order by block_day, type`),n.$$.dirty[0]&6144&&le(Z,{noResolve:q}),n.$$.dirty[0]&1&&r(13,L=J`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${c.closed_pool}'
  and block_day < (select block_day from (select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'))`),n.$$.dirty[0]&1&&r(14,X=`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Rewards'
  and protocol || ' ' || pool = '${c.closed_pool}'
  and block_day < (select block_day from (select 
  block_day
  , protocol || ' ' || pool as protocol_pool
  , pool_balance
  , rewards
  , balance
  , cumu_invested
  , cumu_withdrawn
  , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
  	else apr end as apr
  , pnl
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0
  and protocol || ' ' || pool = '${c.closed_pool}'))`),n.$$.dirty[0]&24576&&re(X,{noResolve:L})},[c,D,H,I,M,a,s,T,V,P,O,q,Z,L,X,o]}class fo extends Oe{constructor(t){super(),je(this,t,lo,ao,Be,{data:5},null,[-1,-1])}}export{fo as component};
