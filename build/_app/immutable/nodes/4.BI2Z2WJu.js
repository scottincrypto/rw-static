import{s as vt,a as y,e as D,b as xe,c as g,h as Tt,d as L,f as c,g as de,i as $,j as p,k as Ze,l as it,m as Rt,n as _t,o as Et,p as dt,q as he,t as Ht,r as Pt,u as Ct}from"../chunks/scheduler.hQjuAmpE.js";import{S as Dt,i as Lt,c as k,a as h,m as w,t as m,b,d as De,e as v,g as Le}from"../chunks/index.DOtjTu5O.js";import{s as St,Q as W,a as qt,r as ct,t as pt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B3stQ-lp.js";import{w as It}from"../chunks/entry.DF7Xd9vu.js";import{h as G,p as Mt}from"../chunks/setTrackProxy.LUR8PBUg.js";import{I as At,C as Ft}from"../chunks/CopyIcon.C_cNzsxJ.js";import{p as Bt}from"../chunks/stores.iW5FyqFN.js";import{G as Ot,L as Ye,A as ut,a as Ut,Q as Se,B as Ge}from"../chunks/LineChart.C5mcbZFV.js";import{D as Je,C as N}from"../chunks/DataTable.X4XDbeEF.js";function Gt(d){let o,l=C.title+"",t;return{c(){o=D("h1"),t=Ht(l),this.h()},l(s){o=L(s,"H1",{class:!0});var i=Pt(o);t=Ct(i,l),i.forEach(c),this.h()},h(){$(o,"class","title")},m(s,i){p(s,o,i),Ze(o,t)},p:he,d(s){s&&c(o)}}}function Nt(d){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:he,p:he,d:he}}function Qt(d){let o,l,t,s,i;return document.title=o=C.title,{c(){l=y(),t=D("meta"),s=y(),i=D("meta"),this.h()},l(a){l=g(a),t=L(a,"META",{property:!0,content:!0}),s=g(a),i=L(a,"META",{name:!0,content:!0}),this.h()},h(){var a,_;$(t,"property","og:title"),$(t,"content",((a=C.og)==null?void 0:a.title)??C.title),$(i,"name","twitter:title"),$(i,"content",((_=C.og)==null?void 0:_.title)??C.title)},m(a,_){p(a,l,_),p(a,t,_),p(a,s,_),p(a,i,_)},p(a,_){_&0&&o!==(o=C.title)&&(document.title=o)},d(a){a&&(c(l),c(t),c(s),c(i))}}}function Vt(d){var i,a;let o,l,t=(C.description||((i=C.og)==null?void 0:i.description))&&jt(),s=((a=C.og)==null?void 0:a.image)&&zt();return{c(){t&&t.c(),o=y(),s&&s.c(),l=xe()},l(_){t&&t.l(_),o=g(_),s&&s.l(_),l=xe()},m(_,R){t&&t.m(_,R),p(_,o,R),s&&s.m(_,R),p(_,l,R)},p(_,R){var f,T;(C.description||(f=C.og)!=null&&f.description)&&t.p(_,R),(T=C.og)!=null&&T.image&&s.p(_,R)},d(_){_&&(c(o),c(l)),t&&t.d(_),s&&s.d(_)}}}function jt(d){let o,l,t,s,i;return{c(){o=D("meta"),l=y(),t=D("meta"),s=y(),i=D("meta"),this.h()},l(a){o=L(a,"META",{name:!0,content:!0}),l=g(a),t=L(a,"META",{property:!0,content:!0}),s=g(a),i=L(a,"META",{name:!0,content:!0}),this.h()},h(){var a,_,R;$(o,"name","description"),$(o,"content",C.description??((a=C.og)==null?void 0:a.description)),$(t,"property","og:description"),$(t,"content",((_=C.og)==null?void 0:_.description)??C.description),$(i,"name","twitter:description"),$(i,"content",((R=C.og)==null?void 0:R.description)??C.description)},m(a,_){p(a,o,_),p(a,l,_),p(a,t,_),p(a,s,_),p(a,i,_)},p:he,d(a){a&&(c(o),c(l),c(t),c(s),c(i))}}}function zt(d){let o,l,t;return{c(){o=D("meta"),l=y(),t=D("meta"),this.h()},l(s){o=L(s,"META",{property:!0,content:!0}),l=g(s),t=L(s,"META",{name:!0,content:!0}),this.h()},h(){var s,i;$(o,"property","og:image"),$(o,"content",(s=C.og)==null?void 0:s.image),$(t,"name","twitter:image"),$(t,"content",(i=C.og)==null?void 0:i.image)},m(s,i){p(s,o,i),p(s,l,i),p(s,t,i)},p:he,d(s){s&&(c(o),c(l),c(t))}}}function ft(d){let o,l;return o=new Se({props:{queryID:"current_day",queryResult:d[0]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&1&&(i.queryResult=t[0]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function Zt(d){let o,l,t,s,i,a,_,R,f,T,u,H;return o=new Ge({props:{data:d[0],value:"cumu_invested",title:"Total Invested",fmt:"usd0"}}),t=new Ge({props:{data:d[0],value:"cumu_withdrawn",title:"Total Withdrawn",fmt:"usd0"}}),i=new Ge({props:{data:d[0],value:"balance",title:"Treasury Value",fmt:"usd0"}}),_=new Ge({props:{data:d[0],value:"pnl",title:"Profit & Loss",fmt:"usd0"}}),f=new Ge({props:{data:d[0],value:"reward_balance",title:"Rewards to be Claimed",fmt:"usd0"}}),u=new Ge({props:{data:d[0],value:"apr",title:"APR",fmt:"pct1"}}),{c(){k(o.$$.fragment),l=y(),k(t.$$.fragment),s=y(),k(i.$$.fragment),a=y(),k(_.$$.fragment),R=y(),k(f.$$.fragment),T=y(),k(u.$$.fragment)},l(n){h(o.$$.fragment,n),l=g(n),h(t.$$.fragment,n),s=g(n),h(i.$$.fragment,n),a=g(n),h(_.$$.fragment,n),R=g(n),h(f.$$.fragment,n),T=g(n),h(u.$$.fragment,n)},m(n,E){w(o,n,E),p(n,l,E),w(t,n,E),p(n,s,E),w(i,n,E),p(n,a,E),w(_,n,E),p(n,R,E),w(f,n,E),p(n,T,E),w(u,n,E),H=!0},p(n,E){const K={};E[0]&1&&(K.data=n[0]),o.$set(K);const U={};E[0]&1&&(U.data=n[0]),t.$set(U);const ce={};E[0]&1&&(ce.data=n[0]),i.$set(ce);const ae={};E[0]&1&&(ae.data=n[0]),_.$set(ae);const Q={};E[0]&1&&(Q.data=n[0]),f.$set(Q);const X={};E[0]&1&&(X.data=n[0]),u.$set(X)},i(n){H||(m(o.$$.fragment,n),m(t.$$.fragment,n),m(i.$$.fragment,n),m(_.$$.fragment,n),m(f.$$.fragment,n),m(u.$$.fragment,n),H=!0)},o(n){b(o.$$.fragment,n),b(t.$$.fragment,n),b(i.$$.fragment,n),b(_.$$.fragment,n),b(f.$$.fragment,n),b(u.$$.fragment,n),H=!1},d(n){n&&(c(l),c(s),c(a),c(R),c(T)),v(o,n),v(t,n),v(i,n),v(_,n),v(f,n),v(u,n)}}}function mt(d){let o,l;return o=new Se({props:{queryID:"open_positions",queryResult:d[1]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&2&&(i.queryResult=t[1]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function xt(d){let o,l,t,s,i,a,_,R,f,T;return o=new N({props:{id:"open_pool",title:"Pool"}}),t=new N({props:{id:"invested",title:"Invested",fmt:"usd0"}}),i=new N({props:{id:"total_holdings",title:"Total Holdings",fmt:"usd0"}}),_=new N({props:{id:"PnL",title:"PnL",fmt:"usd0"}}),f=new N({props:{id:"APR",title:"APR",fmt:"pct1"}}),{c(){k(o.$$.fragment),l=y(),k(t.$$.fragment),s=y(),k(i.$$.fragment),a=y(),k(_.$$.fragment),R=y(),k(f.$$.fragment)},l(u){h(o.$$.fragment,u),l=g(u),h(t.$$.fragment,u),s=g(u),h(i.$$.fragment,u),a=g(u),h(_.$$.fragment,u),R=g(u),h(f.$$.fragment,u)},m(u,H){w(o,u,H),p(u,l,H),w(t,u,H),p(u,s,H),w(i,u,H),p(u,a,H),w(_,u,H),p(u,R,H),w(f,u,H),T=!0},p:he,i(u){T||(m(o.$$.fragment,u),m(t.$$.fragment,u),m(i.$$.fragment,u),m(_.$$.fragment,u),m(f.$$.fragment,u),T=!0)},o(u){b(o.$$.fragment,u),b(t.$$.fragment,u),b(i.$$.fragment,u),b(_.$$.fragment,u),b(f.$$.fragment,u),T=!1},d(u){u&&(c(l),c(s),c(a),c(R)),v(o,u),v(t,u),v(i,u),v(_,u),v(f,u)}}}function bt(d){let o,l;return o=new Se({props:{queryID:"treasury_charts",queryResult:d[2]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&4&&(i.queryResult=t[2]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function yt(d){let o,l;return o=new Se({props:{queryID:"pool_charts",queryResult:d[3]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&8&&(i.queryResult=t[3]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function gt(d){let o,l;return o=new Se({props:{queryID:"pool_apr",queryResult:d[4]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&16&&(i.queryResult=t[4]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function $t(d){let o,l;return o=new Se({props:{queryID:"token_holdings",queryResult:d[5]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&32&&(i.queryResult=t[5]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function kt(d){let o,l;return o=new Se({props:{queryID:"all_holdings",queryResult:d[6]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&64&&(i.queryResult=t[6]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function Wt(d){let o,l,t,s,i,a,_,R;return o=new N({props:{id:"holding_type",title:"Holding Type"}}),t=new N({props:{id:"holding",title:"Holding"}}),i=new N({props:{id:"symbol",title:"Symbol"}}),_=new N({props:{id:"balance",title:"Balance",fmt:"usd0"}}),{c(){k(o.$$.fragment),l=y(),k(t.$$.fragment),s=y(),k(i.$$.fragment),a=y(),k(_.$$.fragment)},l(f){h(o.$$.fragment,f),l=g(f),h(t.$$.fragment,f),s=g(f),h(i.$$.fragment,f),a=g(f),h(_.$$.fragment,f)},m(f,T){w(o,f,T),p(f,l,T),w(t,f,T),p(f,s,T),w(i,f,T),p(f,a,T),w(_,f,T),R=!0},p:he,i(f){R||(m(o.$$.fragment,f),m(t.$$.fragment,f),m(i.$$.fragment,f),m(_.$$.fragment,f),R=!0)},o(f){b(o.$$.fragment,f),b(t.$$.fragment,f),b(i.$$.fragment,f),b(_.$$.fragment,f),R=!1},d(f){f&&(c(l),c(s),c(a)),v(o,f),v(t,f),v(i,f),v(_,f)}}}function ht(d){let o,l;return o=new Se({props:{queryID:"closed_positions",queryResult:d[7]}}),{c(){k(o.$$.fragment)},l(t){h(o.$$.fragment,t)},m(t,s){w(o,t,s),l=!0},p(t,s){const i={};s[0]&128&&(i.queryResult=t[7]),o.$set(i)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){b(o.$$.fragment,t),l=!1},d(t){v(o,t)}}}function Kt(d){let o,l,t,s,i,a,_,R,f,T,u,H;return o=new N({props:{id:"closed_pool",title:"Pool"}}),t=new N({props:{id:"invested",title:"Invested",fmt:"usd0"}}),i=new N({props:{id:"withdrawn",title:"Withdrawn",fmt:"usd0"}}),_=new N({props:{id:"PnL",title:"PnL",fmt:"usd0"}}),f=new N({props:{id:"APR",title:"APR",fmt:"pct1"}}),u=new N({props:{id:"closed_date",title:"Closed Date",fmt:"yyyy-mm-dd"}}),{c(){k(o.$$.fragment),l=y(),k(t.$$.fragment),s=y(),k(i.$$.fragment),a=y(),k(_.$$.fragment),R=y(),k(f.$$.fragment),T=y(),k(u.$$.fragment)},l(n){h(o.$$.fragment,n),l=g(n),h(t.$$.fragment,n),s=g(n),h(i.$$.fragment,n),a=g(n),h(_.$$.fragment,n),R=g(n),h(f.$$.fragment,n),T=g(n),h(u.$$.fragment,n)},m(n,E){w(o,n,E),p(n,l,E),w(t,n,E),p(n,s,E),w(i,n,E),p(n,a,E),w(_,n,E),p(n,R,E),w(f,n,E),p(n,T,E),w(u,n,E),H=!0},p:he,i(n){H||(m(o.$$.fragment,n),m(t.$$.fragment,n),m(i.$$.fragment,n),m(_.$$.fragment,n),m(f.$$.fragment,n),m(u.$$.fragment,n),H=!0)},o(n){b(o.$$.fragment,n),b(t.$$.fragment,n),b(i.$$.fragment,n),b(_.$$.fragment,n),b(f.$$.fragment,n),b(u.$$.fragment,n),H=!1},d(n){n&&(c(l),c(s),c(a),c(R),c(T)),v(o,n),v(t,n),v(i,n),v(_,n),v(f,n),v(u,n)}}}function Xt(d){let o,l,t,s,i,a,_,R='<a href="#treasury-performance">Treasury Performance</a>',f,T,u,H,n,E='<a href="#open-positions">Open Positions</a>',K,U,ce='<em class="markdown">Click pool to open position details</em>',ae,Q,X,ne,re,pe,Y,qe='<a href="#treasury-value">Treasury Value</a>',ue,j,we,J,Ie='<a href="#treasury-value-by-pool">Treasury Value by Pool</a>',fe,z,ve,ee,Me='<a href="#profit--loss">Profit &amp; Loss</a>',me,Z,Te,te,Ae='<a href="#apr-by-pool">APR by Pool</a>',be,x,Re,oe,Fe='<a href="#token-holdings">Token Holdings</a>',ye,se,le,Be,ie,V,Oe='<a href="#detailed-holdings">Detailed Holdings</a>',Ee,_e,P,He,ge,et='<a href="#closed-positions">Closed Positions</a>',Qe,Pe,tt='<em class="markdown">Click pool to open position details</em>',Ve,Ce,je,Ue,ze,$e=typeof C<"u"&&C.title&&C.hide_title!==!0&&Gt();function wt(e,r){return typeof C<"u"&&C.title?Qt:Nt}let Ne=wt()(d),ke=typeof C=="object"&&Vt(),S=d[0]&&ft(d);T=new Ot({props:{cols:"3",$$slots:{default:[Zt]},$$scope:{ctx:d}}});let q=d[1]&&mt(d);Q=new Je({props:{data:d[1],link:"open_pool_link",$$slots:{default:[xt]},$$scope:{ctx:d}}});let I=d[2]&&bt(d),M=d[3]&&yt(d),A=d[4]&&gt(d);j=new Ye({props:{data:d[2],x:"block_day",y:"balance",chartAreaHeight:"400",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),z=new ut({props:{data:d[3],x:"block_day",y:"balance",series:"pool",chartAreaHeight:"400",legend:"false",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),Z=new Ye({props:{data:d[2],x:"block_day",y:"pnl",chartAreaHeight:"400",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}}),x=new Ye({props:{data:d[4],x:"block_day",y:"apr",series:"pool",chartAreaHeight:"400",legend:"false",yFmt:"pct1",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}});let F=d[5]&&$t(d);le=new ut({props:{data:d[5],x:"block_day",y:"balance_usd",series:"symbol",chartAreaHeight:"400",legend:"false",echartsOptions:{dataZoom:[{start:0,end:100}],grid:{bottom:"50px"}}}});let B=d[6]&&kt(d);_e=new Je({props:{data:d[6],totalRow:"true",rows:"20",$$slots:{default:[Wt]},$$scope:{ctx:d}}});let O=d[7]&&ht(d);return Ce=new Je({props:{data:d[7],link:"closed_pool_link",openInNewTab:"true",$$slots:{default:[Kt]},$$scope:{ctx:d}}}),Ue=new Ut({props:{prefix:"Data last updated"}}),{c(){$e&&$e.c(),o=y(),Ne.c(),l=D("meta"),t=D("meta"),ke&&ke.c(),s=xe(),i=y(),S&&S.c(),a=y(),_=D("h2"),_.innerHTML=R,f=y(),k(T.$$.fragment),u=y(),q&&q.c(),H=y(),n=D("h2"),n.innerHTML=E,K=y(),U=D("p"),U.innerHTML=ce,ae=y(),k(Q.$$.fragment),X=y(),I&&I.c(),ne=y(),M&&M.c(),re=y(),A&&A.c(),pe=y(),Y=D("h2"),Y.innerHTML=qe,ue=y(),k(j.$$.fragment),we=y(),J=D("h2"),J.innerHTML=Ie,fe=y(),k(z.$$.fragment),ve=y(),ee=D("h2"),ee.innerHTML=Me,me=y(),k(Z.$$.fragment),Te=y(),te=D("h2"),te.innerHTML=Ae,be=y(),k(x.$$.fragment),Re=y(),oe=D("h2"),oe.innerHTML=Fe,ye=y(),F&&F.c(),se=y(),k(le.$$.fragment),Be=y(),B&&B.c(),ie=y(),V=D("h2"),V.innerHTML=Oe,Ee=y(),k(_e.$$.fragment),P=y(),O&&O.c(),He=y(),ge=D("h2"),ge.innerHTML=et,Qe=y(),Pe=D("p"),Pe.innerHTML=tt,Ve=y(),k(Ce.$$.fragment),je=y(),k(Ue.$$.fragment),this.h()},l(e){$e&&$e.l(e),o=g(e);const r=Tt("svelte-1j2izld",document.head);Ne.l(r),l=L(r,"META",{name:!0,content:!0}),t=L(r,"META",{name:!0,content:!0}),ke&&ke.l(r),s=xe(),r.forEach(c),i=g(e),S&&S.l(e),a=g(e),_=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(_)!=="svelte-1vj9k7d"&&(_.innerHTML=R),f=g(e),h(T.$$.fragment,e),u=g(e),q&&q.l(e),H=g(e),n=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(n)!=="svelte-122u5e0"&&(n.innerHTML=E),K=g(e),U=L(e,"P",{class:!0,"data-svelte-h":!0}),de(U)!=="svelte-1wooxzf"&&(U.innerHTML=ce),ae=g(e),h(Q.$$.fragment,e),X=g(e),I&&I.l(e),ne=g(e),M&&M.l(e),re=g(e),A&&A.l(e),pe=g(e),Y=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(Y)!=="svelte-leieas"&&(Y.innerHTML=qe),ue=g(e),h(j.$$.fragment,e),we=g(e),J=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(J)!=="svelte-1bambjf"&&(J.innerHTML=Ie),fe=g(e),h(z.$$.fragment,e),ve=g(e),ee=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(ee)!=="svelte-19jg67"&&(ee.innerHTML=Me),me=g(e),h(Z.$$.fragment,e),Te=g(e),te=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(te)!=="svelte-znbzm8"&&(te.innerHTML=Ae),be=g(e),h(x.$$.fragment,e),Re=g(e),oe=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(oe)!=="svelte-eblm0x"&&(oe.innerHTML=Fe),ye=g(e),F&&F.l(e),se=g(e),h(le.$$.fragment,e),Be=g(e),B&&B.l(e),ie=g(e),V=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(V)!=="svelte-39631i"&&(V.innerHTML=Oe),Ee=g(e),h(_e.$$.fragment,e),P=g(e),O&&O.l(e),He=g(e),ge=L(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(ge)!=="svelte-9tdb4g"&&(ge.innerHTML=et),Qe=g(e),Pe=L(e,"P",{class:!0,"data-svelte-h":!0}),de(Pe)!=="svelte-1wooxzf"&&(Pe.innerHTML=tt),Ve=g(e),h(Ce.$$.fragment,e),je=g(e),h(Ue.$$.fragment,e),this.h()},h(){$(l,"name","twitter:card"),$(l,"content","summary"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(_,"class","markdown"),$(_,"id","treasury-performance"),$(n,"class","markdown"),$(n,"id","open-positions"),$(U,"class","markdown"),$(Y,"class","markdown"),$(Y,"id","treasury-value"),$(J,"class","markdown"),$(J,"id","treasury-value-by-pool"),$(ee,"class","markdown"),$(ee,"id","profit--loss"),$(te,"class","markdown"),$(te,"id","apr-by-pool"),$(oe,"class","markdown"),$(oe,"id","token-holdings"),$(V,"class","markdown"),$(V,"id","detailed-holdings"),$(ge,"class","markdown"),$(ge,"id","closed-positions"),$(Pe,"class","markdown")},m(e,r){$e&&$e.m(e,r),p(e,o,r),Ne.m(document.head,null),Ze(document.head,l),Ze(document.head,t),ke&&ke.m(document.head,null),Ze(document.head,s),p(e,i,r),S&&S.m(e,r),p(e,a,r),p(e,_,r),p(e,f,r),w(T,e,r),p(e,u,r),q&&q.m(e,r),p(e,H,r),p(e,n,r),p(e,K,r),p(e,U,r),p(e,ae,r),w(Q,e,r),p(e,X,r),I&&I.m(e,r),p(e,ne,r),M&&M.m(e,r),p(e,re,r),A&&A.m(e,r),p(e,pe,r),p(e,Y,r),p(e,ue,r),w(j,e,r),p(e,we,r),p(e,J,r),p(e,fe,r),w(z,e,r),p(e,ve,r),p(e,ee,r),p(e,me,r),w(Z,e,r),p(e,Te,r),p(e,te,r),p(e,be,r),w(x,e,r),p(e,Re,r),p(e,oe,r),p(e,ye,r),F&&F.m(e,r),p(e,se,r),w(le,e,r),p(e,Be,r),B&&B.m(e,r),p(e,ie,r),p(e,V,r),p(e,Ee,r),w(_e,e,r),p(e,P,r),O&&O.m(e,r),p(e,He,r),p(e,ge,r),p(e,Qe,r),p(e,Pe,r),p(e,Ve,r),w(Ce,e,r),p(e,je,r),w(Ue,e,r),ze=!0},p(e,r){typeof C<"u"&&C.title&&C.hide_title!==!0&&$e.p(e,r),Ne.p(e,r),typeof C=="object"&&ke.p(e,r),e[0]?S?(S.p(e,r),r[0]&1&&m(S,1)):(S=ft(e),S.c(),m(S,1),S.m(a.parentNode,a)):S&&(Le(),b(S,1,1,()=>{S=null}),De());const ot={};r[0]&1|r[1]&16777216&&(ot.$$scope={dirty:r,ctx:e}),T.$set(ot),e[1]?q?(q.p(e,r),r[0]&2&&m(q,1)):(q=mt(e),q.c(),m(q,1),q.m(H.parentNode,H)):q&&(Le(),b(q,1,1,()=>{q=null}),De());const We={};r[0]&2&&(We.data=e[1]),r[1]&16777216&&(We.$$scope={dirty:r,ctx:e}),Q.$set(We),e[2]?I?(I.p(e,r),r[0]&4&&m(I,1)):(I=bt(e),I.c(),m(I,1),I.m(ne.parentNode,ne)):I&&(Le(),b(I,1,1,()=>{I=null}),De()),e[3]?M?(M.p(e,r),r[0]&8&&m(M,1)):(M=yt(e),M.c(),m(M,1),M.m(re.parentNode,re)):M&&(Le(),b(M,1,1,()=>{M=null}),De()),e[4]?A?(A.p(e,r),r[0]&16&&m(A,1)):(A=gt(e),A.c(),m(A,1),A.m(pe.parentNode,pe)):A&&(Le(),b(A,1,1,()=>{A=null}),De());const lt={};r[0]&4&&(lt.data=e[2]),j.$set(lt);const at={};r[0]&8&&(at.data=e[3]),z.$set(at);const nt={};r[0]&4&&(nt.data=e[2]),Z.$set(nt);const rt={};r[0]&16&&(rt.data=e[4]),x.$set(rt),e[5]?F?(F.p(e,r),r[0]&32&&m(F,1)):(F=$t(e),F.c(),m(F,1),F.m(se.parentNode,se)):F&&(Le(),b(F,1,1,()=>{F=null}),De());const st={};r[0]&32&&(st.data=e[5]),le.$set(st),e[6]?B?(B.p(e,r),r[0]&64&&m(B,1)):(B=kt(e),B.c(),m(B,1),B.m(ie.parentNode,ie)):B&&(Le(),b(B,1,1,()=>{B=null}),De());const Ke={};r[0]&64&&(Ke.data=e[6]),r[1]&16777216&&(Ke.$$scope={dirty:r,ctx:e}),_e.$set(Ke),e[7]?O?(O.p(e,r),r[0]&128&&m(O,1)):(O=ht(e),O.c(),m(O,1),O.m(He.parentNode,He)):O&&(Le(),b(O,1,1,()=>{O=null}),De());const Xe={};r[0]&128&&(Xe.data=e[7]),r[1]&16777216&&(Xe.$$scope={dirty:r,ctx:e}),Ce.$set(Xe)},i(e){ze||(m(S),m(T.$$.fragment,e),m(q),m(Q.$$.fragment,e),m(I),m(M),m(A),m(j.$$.fragment,e),m(z.$$.fragment,e),m(Z.$$.fragment,e),m(x.$$.fragment,e),m(F),m(le.$$.fragment,e),m(B),m(_e.$$.fragment,e),m(O),m(Ce.$$.fragment,e),m(Ue.$$.fragment,e),ze=!0)},o(e){b(S),b(T.$$.fragment,e),b(q),b(Q.$$.fragment,e),b(I),b(M),b(A),b(j.$$.fragment,e),b(z.$$.fragment,e),b(Z.$$.fragment,e),b(x.$$.fragment,e),b(F),b(le.$$.fragment,e),b(B),b(_e.$$.fragment,e),b(O),b(Ce.$$.fragment,e),b(Ue.$$.fragment,e),ze=!1},d(e){e&&(c(o),c(i),c(a),c(_),c(f),c(u),c(H),c(n),c(K),c(U),c(ae),c(X),c(ne),c(re),c(pe),c(Y),c(ue),c(we),c(J),c(fe),c(ve),c(ee),c(me),c(Te),c(te),c(be),c(Re),c(oe),c(ye),c(se),c(Be),c(ie),c(V),c(Ee),c(P),c(He),c(ge),c(Qe),c(Pe),c(Ve),c(je)),$e&&$e.d(e),Ne.d(e),c(l),c(t),ke&&ke.d(e),c(s),S&&S.d(e),v(T,e),q&&q.d(e),v(Q,e),I&&I.d(e),M&&M.d(e),A&&A.d(e),v(j,e),v(z,e),v(Z,e),v(x,e),F&&F.d(e),v(le,e),B&&B.d(e),v(_e,e),O&&O.d(e),v(Ce,e),v(Ue,e)}}}const C={title:"Stader Treasury by TokenLogic",fullWidth:!0};function Yt(d,o,l){let t,s;it(d,Bt,P=>l(26,t=P)),it(d,ct,P=>l(41,s=P));let{data:i}=o,{data:a={},customFormattingSettings:_,__db:R,inputs:f}=i;Rt(ct,s="6666cd76f96956469e7be39d750cc7d9",s);let T=It(f);_t(At,T),Et(T.subscribe(P=>f=P)),_t(Ft,{getCustomFormats:()=>_.customFormats||[]});const u=(P,He)=>Mt(R.query,P,{query_name:He});St(u);let H;const n=()=>{H||(H=setTimeout(()=>{pt.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},E=()=>{H?(clearTimeout(H),H=null):pt.dismiss("LoadingToast")};dt(()=>(W.addEventListener("inFlightQueryStart",n),W.addEventListener("inFlightQueryEnd",E),W.QueriesLoading&&n(),()=>{W.removeEventListener("inFlightQueryStart",n),W.removeEventListener("inFlightQueryEnd",E)})),t.params,dt(()=>!0);let K={initialData:void 0,initialError:void 0},U=G`select
  block_day
  , pool_balance
  , reward_balance
  , token_balance
  , balance
  , cumu_invested
  , cumu_withdrawn
  , apr
  , pnl
  , (balance-token_balance)/balance as funds_allocated
from tokenlogic_data.treasury_returns
order by block_day desc limit 1`,ce=`select
  block_day
  , pool_balance
  , reward_balance
  , token_balance
  , balance
  , cumu_invested
  , cumu_withdrawn
  , apr
  , pnl
  , (balance-token_balance)/balance as funds_allocated
from tokenlogic_data.treasury_returns
order by block_day desc limit 1`;a.current_day&&(a.current_day instanceof Error?K.initialError=a.current_day:K.initialData=a.current_day,a.current_day__DESCRIBE&&(K.knownColumns=a.current_day__DESCRIBE));let ae;const Q=W.createReactive({callback:P=>{l(0,ae=P)},execFn:u},{id:"current_day",...K});Q(ce,{noResolve:U}),globalThis[Symbol.for("current_day")]={get value(){return ae}};let X={initialData:void 0,initialError:void 0},ne=G`select distinct 
  protocol || ' ' || pool as open_pool
  , '/open_positions/' || protocol || ' ' || pool as open_pool_link
  , cumu_invested as invested
  , balance as total_holdings
  , pnl as PnL
  , case 
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
from tokenlogic_data.pool_returns
where 1=1
  and balance > 0
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)`,re=`select distinct 
  protocol || ' ' || pool as open_pool
  , '/open_positions/' || protocol || ' ' || pool as open_pool_link
  , cumu_invested as invested
  , balance as total_holdings
  , pnl as PnL
  , case 
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
from tokenlogic_data.pool_returns
where 1=1
  and balance > 0
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)`;a.open_positions&&(a.open_positions instanceof Error?X.initialError=a.open_positions:X.initialData=a.open_positions,a.open_positions__DESCRIBE&&(X.knownColumns=a.open_positions__DESCRIBE));let pe;const Y=W.createReactive({callback:P=>{l(1,pe=P)},execFn:u},{id:"open_positions",...X});Y(re,{noResolve:ne}),globalThis[Symbol.for("open_positions")]={get value(){return pe}};let qe={initialData:void 0,initialError:void 0},ue=G`select 
  block_day
  , balance 
  , pnl
from tokenlogic_data.treasury_returns
order by block_day`,j=`select 
  block_day
  , balance 
  , pnl
from tokenlogic_data.treasury_returns
order by block_day`;a.treasury_charts&&(a.treasury_charts instanceof Error?qe.initialError=a.treasury_charts:qe.initialData=a.treasury_charts,a.treasury_charts__DESCRIBE&&(qe.knownColumns=a.treasury_charts__DESCRIBE));let we;const J=W.createReactive({callback:P=>{l(2,we=P)},execFn:u},{id:"treasury_charts",...qe});J(j,{noResolve:ue}),globalThis[Symbol.for("treasury_charts")]={get value(){return we}};let Ie={initialData:void 0,initialError:void 0},fe=G`select 
  block_day
  , protocol || ' ' || pool as pool 
  , balance
  , apr 
  , pnl 
from tokenlogic_data.pool_returns
where balance > 0
union all 
select 
  block_day
  , 'Token Holdings' as pool
  , token_balance as balance
  , 0 as apr 
  , 0 as pnl
from tokenlogic_data.treasury_returns`,z=`select 
  block_day
  , protocol || ' ' || pool as pool 
  , balance
  , apr 
  , pnl 
from tokenlogic_data.pool_returns
where balance > 0
union all 
select 
  block_day
  , 'Token Holdings' as pool
  , token_balance as balance
  , 0 as apr 
  , 0 as pnl
from tokenlogic_data.treasury_returns`;a.pool_charts&&(a.pool_charts instanceof Error?Ie.initialError=a.pool_charts:Ie.initialData=a.pool_charts,a.pool_charts__DESCRIBE&&(Ie.knownColumns=a.pool_charts__DESCRIBE));let ve;const ee=W.createReactive({callback:P=>{l(3,ve=P)},execFn:u},{id:"pool_charts",...Ie});ee(z,{noResolve:fe}),globalThis[Symbol.for("pool_charts")]={get value(){return ve}};let Me={initialData:void 0,initialError:void 0},me=G`select 
  block_day
  , protocol || ' ' || pool as pool 
  , apr 
from tokenlogic_data.pool_returns
where balance > 0 and apr > -0.5
union all 
select 
  block_day
  , 'Treasury' as pool 
  , apr 
from tokenlogic_data.treasury_returns
order by block_day, pool`,Z=`select 
  block_day
  , protocol || ' ' || pool as pool 
  , apr 
from tokenlogic_data.pool_returns
where balance > 0 and apr > -0.5
union all 
select 
  block_day
  , 'Treasury' as pool 
  , apr 
from tokenlogic_data.treasury_returns
order by block_day, pool`;a.pool_apr&&(a.pool_apr instanceof Error?Me.initialError=a.pool_apr:Me.initialData=a.pool_apr,a.pool_apr__DESCRIBE&&(Me.knownColumns=a.pool_apr__DESCRIBE));let Te;const te=W.createReactive({callback:P=>{l(4,Te=P)},execFn:u},{id:"pool_apr",...Me});te(Z,{noResolve:me}),globalThis[Symbol.for("pool_apr")]={get value(){return Te}};let Ae={initialData:void 0,initialError:void 0},be=G`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Token Holdings'
order by block_day`,x=`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Token Holdings'
order by block_day`;a.token_holdings&&(a.token_holdings instanceof Error?Ae.initialError=a.token_holdings:Ae.initialData=a.token_holdings,a.token_holdings__DESCRIBE&&(Ae.knownColumns=a.token_holdings__DESCRIBE));let Re;const oe=W.createReactive({callback:P=>{l(5,Re=P)},execFn:u},{id:"token_holdings",...Ae});oe(x,{noResolve:be}),globalThis[Symbol.for("token_holdings")]={get value(){return Re}};let Fe={initialData:void 0,initialError:void 0},ye=G`select 
  protocol || ' ' || pool as holding
  , holding_type
  , null as symbol
  , sum(balance_usd) as balance
  , 1 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and (balance_usd > 1 or balance_usd < -1)
 and holding_type = 'Pool Deposit'
group by protocol, pool, holding_type, sort_order
union all 
select 
  protocol || ' ' || pool as holding
  , 'Unclaimed Rewards' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 2 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Rewards'
 group by protocol, pool, holding_type, symbol, sort_order
 union all 
select 
  'Token' as holding
  , 'Token Holdings' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 3 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Token Holdings'
 group by holding, symbol, holding_type, sort_order
order by sort_order, balance desc`,se=`select 
  protocol || ' ' || pool as holding
  , holding_type
  , null as symbol
  , sum(balance_usd) as balance
  , 1 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and (balance_usd > 1 or balance_usd < -1)
 and holding_type = 'Pool Deposit'
group by protocol, pool, holding_type, sort_order
union all 
select 
  protocol || ' ' || pool as holding
  , 'Unclaimed Rewards' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 2 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Rewards'
 group by protocol, pool, holding_type, symbol, sort_order
 union all 
select 
  'Token' as holding
  , 'Token Holdings' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 3 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Token Holdings'
 group by holding, symbol, holding_type, sort_order
order by sort_order, balance desc`;a.all_holdings&&(a.all_holdings instanceof Error?Fe.initialError=a.all_holdings:Fe.initialData=a.all_holdings,a.all_holdings__DESCRIBE&&(Fe.knownColumns=a.all_holdings__DESCRIBE));let le;const Be=W.createReactive({callback:P=>{l(6,le=P)},execFn:u},{id:"all_holdings",...Fe});Be(se,{noResolve:ye}),globalThis[Symbol.for("all_holdings")]={get value(){return le}};let ie={initialData:void 0,initialError:void 0},V=G`select distinct 
  protocol || ' ' || pool as closed_pool
  , '/closed_positions/' || protocol || ' ' || pool as closed_pool_link
  , cumu_invested as invested
  , cumu_withdrawn as withdrawn
  , pnl as PnL
    , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
  , block_day as closed_date
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0`,Oe=`select distinct 
  protocol || ' ' || pool as closed_pool
  , '/closed_positions/' || protocol || ' ' || pool as closed_pool_link
  , cumu_invested as invested
  , cumu_withdrawn as withdrawn
  , pnl as PnL
    , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
  , block_day as closed_date
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0`;a.closed_positions&&(a.closed_positions instanceof Error?ie.initialError=a.closed_positions:ie.initialData=a.closed_positions,a.closed_positions__DESCRIBE&&(ie.knownColumns=a.closed_positions__DESCRIBE));let Ee;const _e=W.createReactive({callback:P=>{l(7,Ee=P)},execFn:u},{id:"closed_positions",...ie});return _e(Oe,{noResolve:V}),globalThis[Symbol.for("closed_positions")]={get value(){return Ee}},d.$$set=P=>{"data"in P&&l(8,i=P.data)},d.$$.update=()=>{d.$$.dirty[0]&256&&l(9,{data:a={},customFormattingSettings:_,__db:R}=i,a),d.$$.dirty[0]&512&&qt.set(Object.keys(a).length>0),d.$$.dirty[0]&67108864&&t.params,d.$$.dirty[0]&3072&&Q(ce,{noResolve:U}),d.$$.dirty[0]&12288&&Y(re,{noResolve:ne}),d.$$.dirty[0]&49152&&J(j,{noResolve:ue}),d.$$.dirty[0]&196608&&ee(z,{noResolve:fe}),d.$$.dirty[0]&786432&&te(Z,{noResolve:me}),d.$$.dirty[0]&3145728&&oe(x,{noResolve:be}),d.$$.dirty[0]&12582912&&Be(se,{noResolve:ye}),d.$$.dirty[0]&50331648&&_e(Oe,{noResolve:V})},l(10,U=G`select
  block_day
  , pool_balance
  , reward_balance
  , token_balance
  , balance
  , cumu_invested
  , cumu_withdrawn
  , apr
  , pnl
  , (balance-token_balance)/balance as funds_allocated
from tokenlogic_data.treasury_returns
order by block_day desc limit 1`),l(11,ce=`select
  block_day
  , pool_balance
  , reward_balance
  , token_balance
  , balance
  , cumu_invested
  , cumu_withdrawn
  , apr
  , pnl
  , (balance-token_balance)/balance as funds_allocated
from tokenlogic_data.treasury_returns
order by block_day desc limit 1`),l(12,ne=G`select distinct 
  protocol || ' ' || pool as open_pool
  , '/open_positions/' || protocol || ' ' || pool as open_pool_link
  , cumu_invested as invested
  , balance as total_holdings
  , pnl as PnL
  , case 
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
from tokenlogic_data.pool_returns
where 1=1
  and balance > 0
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)`),l(13,re=`select distinct 
  protocol || ' ' || pool as open_pool
  , '/open_positions/' || protocol || ' ' || pool as open_pool_link
  , cumu_invested as invested
  , balance as total_holdings
  , pnl as PnL
  , case 
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
from tokenlogic_data.pool_returns
where 1=1
  and balance > 0
  and block_day = (select max(block_day) from tokenlogic_data.pool_returns)`),l(14,ue=G`select 
  block_day
  , balance 
  , pnl
from tokenlogic_data.treasury_returns
order by block_day`),l(15,j=`select 
  block_day
  , balance 
  , pnl
from tokenlogic_data.treasury_returns
order by block_day`),l(16,fe=G`select 
  block_day
  , protocol || ' ' || pool as pool 
  , balance
  , apr 
  , pnl 
from tokenlogic_data.pool_returns
where balance > 0
union all 
select 
  block_day
  , 'Token Holdings' as pool
  , token_balance as balance
  , 0 as apr 
  , 0 as pnl
from tokenlogic_data.treasury_returns`),l(17,z=`select 
  block_day
  , protocol || ' ' || pool as pool 
  , balance
  , apr 
  , pnl 
from tokenlogic_data.pool_returns
where balance > 0
union all 
select 
  block_day
  , 'Token Holdings' as pool
  , token_balance as balance
  , 0 as apr 
  , 0 as pnl
from tokenlogic_data.treasury_returns`),l(18,me=G`select 
  block_day
  , protocol || ' ' || pool as pool 
  , apr 
from tokenlogic_data.pool_returns
where balance > 0 and apr > -0.5
union all 
select 
  block_day
  , 'Treasury' as pool 
  , apr 
from tokenlogic_data.treasury_returns
order by block_day, pool`),l(19,Z=`select 
  block_day
  , protocol || ' ' || pool as pool 
  , apr 
from tokenlogic_data.pool_returns
where balance > 0 and apr > -0.5
union all 
select 
  block_day
  , 'Treasury' as pool 
  , apr 
from tokenlogic_data.treasury_returns
order by block_day, pool`),l(20,be=G`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Token Holdings'
order by block_day`),l(21,x=`select 
  block_day
  , symbol
  , balance_usd
from tokenlogic_data.treasury_base
where holding_type = 'Token Holdings'
order by block_day`),l(22,ye=G`select 
  protocol || ' ' || pool as holding
  , holding_type
  , null as symbol
  , sum(balance_usd) as balance
  , 1 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and (balance_usd > 1 or balance_usd < -1)
 and holding_type = 'Pool Deposit'
group by protocol, pool, holding_type, sort_order
union all 
select 
  protocol || ' ' || pool as holding
  , 'Unclaimed Rewards' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 2 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Rewards'
 group by protocol, pool, holding_type, symbol, sort_order
 union all 
select 
  'Token' as holding
  , 'Token Holdings' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 3 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Token Holdings'
 group by holding, symbol, holding_type, sort_order
order by sort_order, balance desc`),l(23,se=`select 
  protocol || ' ' || pool as holding
  , holding_type
  , null as symbol
  , sum(balance_usd) as balance
  , 1 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and (balance_usd > 1 or balance_usd < -1)
 and holding_type = 'Pool Deposit'
group by protocol, pool, holding_type, sort_order
union all 
select 
  protocol || ' ' || pool as holding
  , 'Unclaimed Rewards' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 2 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Rewards'
 group by protocol, pool, holding_type, symbol, sort_order
 union all 
select 
  'Token' as holding
  , 'Token Holdings' as holding_type
  , symbol
  , sum(balance_usd) as balance
  , 3 as sort_order
from tokenlogic_data.treasury_base
where 1=1
 and block_day = (select max(block_day) from tokenlogic_data.treasury_base)
 and balance_usd > 1
 and holding_type = 'Token Holdings'
 group by holding, symbol, holding_type, sort_order
order by sort_order, balance desc`),l(24,V=G`select distinct 
  protocol || ' ' || pool as closed_pool
  , '/closed_positions/' || protocol || ' ' || pool as closed_pool_link
  , cumu_invested as invested
  , cumu_withdrawn as withdrawn
  , pnl as PnL
    , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
  , block_day as closed_date
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0`),l(25,Oe=`select distinct 
  protocol || ' ' || pool as closed_pool
  , '/closed_positions/' || protocol || ' ' || pool as closed_pool_link
  , cumu_invested as invested
  , cumu_withdrawn as withdrawn
  , pnl as PnL
    , case 
    when protocol || ' ' || pool = 'Maverick Boosted Position 4' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Gearbox USDC V2 Pool' then pnl/cumu_invested/years_invested
    when protocol || ' ' || pool = 'Pendle fGHO 2025-07-31' then pnl/cumu_invested/years_invested
  	else apr end as APR
  , block_day as closed_date
from tokenlogic_data.pool_returns
where 1=1
  and balance = 0`),[ae,pe,we,ve,Te,Re,le,Ee,i,a,U,ce,ne,re,ue,j,fe,z,me,Z,be,x,ye,se,V,Oe,t]}class _o extends Dt{constructor(o){super(),Lt(this,o,Yt,Xt,vt,{data:8},null,[-1,-1])}}export{_o as component};
