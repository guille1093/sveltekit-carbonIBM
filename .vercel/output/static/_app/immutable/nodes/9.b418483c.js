import{s as se,r as X,f as $,a as H,g as v,h as y,c as M,d as m,C as w,B as ne,i as b,x as I,D as F,y as ae,E as De,z as le,A as Ce,j as G,e as K,F as j,T as ee,l as re,m as oe,n as ce,W as Se,X as ye,p as Z,N as Y}from"../chunks/scheduler.8d709755.js";import{S as ie,i as fe,b as z,d as O,m as R,a as C,t as N,e as P,g as ze,c as Oe,f as Q}from"../chunks/index.eb84c1c6.js";import{A as Re}from"../chunks/Add.8e3ed89f.js";import{U as Pe}from"../chunks/UserAnalytics.e183adf6.js";import{e as He,i as Me}from"../chunks/forms.2fc59014.js";import{G as Le,R as ue,C as me}from"../chunks/Column.b254b044.js";import{D as Be,P as Ve,T as Ue,a as Je,b as qe,c as Fe}from"../chunks/Pagination.0fd4041d.js";import{e as W,u as _e,d as de}from"../chunks/each.7fe1bb46.js";import{g as Ne,B as je}from"../chunks/Button.734935ca.js";import{S as te}from"../chunks/SkeletonText.a80b19eb.js";import{N as Ge}from"../chunks/NumberInput.bf4cc1f7.js";function be(r,e,n){const t=r.slice();return t[14]=e[n],t}function $e(r,e,n){const t=r.slice();return t[17]=e[n],t}function ve(r,e,n){const t=r.slice();return t[17]=e[n],t}function ke(r){let e,n,t,a;return{c(){e=$("div"),n=$("div"),t=H(),a=$("div"),this.h()},l(l){e=v(l,"DIV",{});var o=y(e);n=v(o,"DIV",{}),y(n).forEach(m),t=M(o),a=v(o,"DIV",{}),y(a).forEach(m),o.forEach(m),this.h()},h(){w(n,"bx--data-table-header__title",!0),w(a,"bx--data-table-header__description",!0),w(e,"bx--data-table-header",!0)},m(l,o){b(l,e,o),I(e,n),I(e,t),I(e,a)},d(l){l&&m(e)}}}function we(r){let e,n,t;return{c(){e=$("section"),n=$("div"),t=$("span"),this.h()},l(a){e=v(a,"SECTION",{"aria-label":!0});var l=y(e);n=v(l,"DIV",{});var o=y(n);t=v(o,"SPAN",{}),y(t).forEach(m),o.forEach(m),l.forEach(m),this.h()},h(){w(t,"bx--skeleton",!0),w(t,"bx--btn",!0),w(t,"bx--btn--sm",!0),w(n,"bx--toolbar-content",!0),G(e,"aria-label","data table toolbar"),w(e,"bx--table-toolbar",!0)},m(a,l){b(a,e,l),I(e,n),I(n,t)},d(a){a&&m(e)}}}function Ze(r){let e,n=(r[6][r[17]]||"")+"",t;return{c(){e=$("th"),t=re(n)},l(a){e=v(a,"TH",{});var l=y(e);t=oe(l,n),l.forEach(m)},m(a,l){b(a,e,l),I(e,t)},p(a,l){l&96&&n!==(n=(a[6][a[17]]||"")+"")&&ce(t,n)},d(a){a&&m(e)}}}function Ke(r){let e;return{c(){e=$("th")},l(n){e=v(n,"TH",{}),y(e).forEach(m)},m(n,t){b(n,e,t)},p:ae,d(n){n&&m(e)}}}function Ee(r,e){let n,t;function a(s,f){return typeof s[6][s[17]]=="object"&&s[6][s[17]].empty===!0?Ke:Ze}let l=a(e),o=l(e);return{key:r,first:null,c(){n=K(),o.c(),t=K(),this.h()},l(s){n=K(),o.l(s),t=K(),this.h()},h(){this.first=n},m(s,f){b(s,n,f),o.m(s,f),b(s,t,f)},p(s,f){e=s,l===(l=a(e))&&o?o.p(e,f):(o.d(1),o=l(e),o&&(o.c(),o.m(t.parentNode,t)))},d(s){s&&(m(n),m(t)),o.d(s)}}}function Te(r,e){let n,t="<span></span>";return{key:r,first:null,c(){n=$("td"),n.innerHTML=t,this.h()},l(a){n=v(a,"TD",{"data-svelte-h":!0}),ee(n)!=="svelte-aicdln"&&(n.innerHTML=t),this.h()},h(){this.first=n},m(a,l){b(a,n,l)},p(a,l){},d(a){a&&m(n)}}}function Ie(r,e){let n,t=[],a=new Map,l,o=W(e[5]);const s=f=>f[17];for(let f=0;f<o.length;f+=1){let u=$e(e,o,f),i=s(u);a.set(i,t[f]=Te(i))}return{key:r,first:null,c(){n=$("tr");for(let f=0;f<t.length;f+=1)t[f].c();l=H(),this.h()},l(f){n=v(f,"TR",{});var u=y(n);for(let i=0;i<t.length;i+=1)t[i].l(u);l=M(u),u.forEach(m),this.h()},h(){this.first=n},m(f,u){b(f,n,u);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(n,null);I(n,l)},p(f,u){e=f,u&32&&(o=W(e[5]),t=_e(t,u,s,1,e,o,a,n,de,Te,l,$e))},d(f){f&&m(n);for(let u=0;u<t.length;u+=1)t[u].d()}}}function We(r){let e,n,t,a,l,o,s=[],f=new Map,u,i,_=[],E=new Map,A,L,k=r[3]&&ke(),g=r[4]&&we(),D=W(r[5]);const c=d=>d[17];for(let d=0;d<D.length;d+=1){let h=ve(r,D,d),S=c(h);f.set(S,s[d]=Ee(S,h))}let B=W(Array.from({length:r[0]},Ae));const J=d=>d[14];for(let d=0;d<B.length;d+=1){let h=be(r,B,d),S=J(h);E.set(S,_[d]=Ie(S,h))}let q=[r[7]],U={};for(let d=0;d<q.length;d+=1)U=X(U,q[d]);return{c(){e=$("div"),k&&k.c(),n=H(),g&&g.c(),t=H(),a=$("table"),l=$("thead"),o=$("tr");for(let d=0;d<s.length;d+=1)s[d].c();u=H(),i=$("tbody");for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){e=v(d,"DIV",{});var h=y(e);k&&k.l(h),n=M(h),g&&g.l(h),t=M(h),a=v(h,"TABLE",{});var S=y(a);l=v(S,"THEAD",{});var x=y(l);o=v(x,"TR",{});var p=y(o);for(let V=0;V<s.length;V+=1)s[V].l(p);p.forEach(m),x.forEach(m),u=M(S),i=v(S,"TBODY",{});var T=y(i);for(let V=0;V<_.length;V+=1)_[V].l(T);T.forEach(m),S.forEach(m),h.forEach(m),this.h()},h(){w(a,"bx--skeleton",!0),w(a,"bx--data-table",!0),w(a,"bx--data-table--compact",r[1]==="compact"),w(a,"bx--data-table--short",r[1]==="short"),w(a,"bx--data-table--tall",r[1]==="tall"),w(a,"bx--data-table--zebra",r[2]),ne(e,U),w(e,"bx--skeleton",!0),w(e,"bx--data-table-container",!0)},m(d,h){b(d,e,h),k&&k.m(e,null),I(e,n),g&&g.m(e,null),I(e,t),I(e,a),I(a,l),I(l,o);for(let S=0;S<s.length;S+=1)s[S]&&s[S].m(o,null);I(a,u),I(a,i);for(let S=0;S<_.length;S+=1)_[S]&&_[S].m(i,null);A||(L=[F(a,"click",r[10]),F(a,"mouseover",r[11]),F(a,"mouseenter",r[12]),F(a,"mouseleave",r[13])],A=!0)},p(d,[h]){d[3]?k||(k=ke(),k.c(),k.m(e,n)):k&&(k.d(1),k=null),d[4]?g||(g=we(),g.c(),g.m(e,t)):g&&(g.d(1),g=null),h&96&&(D=W(d[5]),s=_e(s,h,c,1,d,D,f,o,de,Ee,null,ve)),h&33&&(B=W(Array.from({length:d[0]},Ae)),_=_e(_,h,J,1,d,B,E,i,de,Ie,null,be)),h&2&&w(a,"bx--data-table--compact",d[1]==="compact"),h&2&&w(a,"bx--data-table--short",d[1]==="short"),h&2&&w(a,"bx--data-table--tall",d[1]==="tall"),h&4&&w(a,"bx--data-table--zebra",d[2]),ne(e,U=Ne(q,[h&128&&d[7]])),w(e,"bx--skeleton",!0),w(e,"bx--data-table-container",!0)},i:ae,o:ae,d(d){d&&m(e),k&&k.d(),g&&g.d();for(let h=0;h<s.length;h+=1)s[h].d();for(let h=0;h<_.length;h+=1)_[h].d();A=!1,De(L)}}}const Ae=(r,e)=>e;function Xe(r,e,n){let t,a;const l=["columns","rows","size","zebra","showHeader","headers","showToolbar"];let o=le(e,l),{columns:s=5}=e,{rows:f=5}=e,{size:u=void 0}=e,{zebra:i=!1}=e,{showHeader:_=!0}=e,{headers:E=[]}=e,{showToolbar:A=!0}=e;function L(c){j.call(this,r,c)}function k(c){j.call(this,r,c)}function g(c){j.call(this,r,c)}function D(c){j.call(this,r,c)}return r.$$set=c=>{e=X(X({},e),Ce(c)),n(7,o=le(e,l)),"columns"in c&&n(8,s=c.columns),"rows"in c&&n(0,f=c.rows),"size"in c&&n(1,u=c.size),"zebra"in c&&n(2,i=c.zebra),"showHeader"in c&&n(3,_=c.showHeader),"headers"in c&&n(9,E=c.headers),"showToolbar"in c&&n(4,A=c.showToolbar)},r.$$.update=()=>{r.$$.dirty&512&&n(6,t=E.map(c=>c.value!==void 0?c.value:c)),r.$$.dirty&768&&n(5,a=Array.from({length:E.length>0?E.length:s},(c,B)=>B))},[f,u,i,_,A,a,t,o,s,E,L,k,g,D]}class Ye extends ie{constructor(e){super(),fe(this,e,Xe,We,se,{columns:8,rows:0,size:1,zebra:2,showHeader:3,headers:9,showToolbar:4})}}const Qe=Ye;function xe(r){let e,n,t,a,l,o,s,f,u,i,_,E,A;t=new te({props:{width:"70px"}}),l=new te({props:{width:"35px"}}),s=new te({props:{width:"105px"}}),i=new te({props:{width:"70px"}});let L=[r[0]],k={};for(let g=0;g<L.length;g+=1)k=X(k,L[g]);return{c(){e=$("div"),n=$("div"),z(t.$$.fragment),a=H(),z(l.$$.fragment),o=H(),z(s.$$.fragment),f=H(),u=$("div"),z(i.$$.fragment),this.h()},l(g){e=v(g,"DIV",{});var D=y(e);n=v(D,"DIV",{});var c=y(n);O(t.$$.fragment,c),a=M(c),O(l.$$.fragment,c),o=M(c),O(s.$$.fragment,c),c.forEach(m),f=M(D),u=v(D,"DIV",{});var B=y(u);O(i.$$.fragment,B),B.forEach(m),D.forEach(m),this.h()},h(){w(n,"bx--pagination__left",!0),w(u,"bx--pagination__right",!0),w(u,"bx--pagination--inline",!0),ne(e,k),w(e,"bx--pagination",!0),w(e,"bx--skeleton",!0)},m(g,D){b(g,e,D),I(e,n),R(t,n,null),I(n,a),R(l,n,null),I(n,o),R(s,n,null),I(e,f),I(e,u),R(i,u,null),_=!0,E||(A=[F(e,"click",r[1]),F(e,"mouseover",r[2]),F(e,"mouseenter",r[3]),F(e,"mouseleave",r[4])],E=!0)},p(g,[D]){ne(e,k=Ne(L,[D&1&&g[0]])),w(e,"bx--pagination",!0),w(e,"bx--skeleton",!0)},i(g){_||(C(t.$$.fragment,g),C(l.$$.fragment,g),C(s.$$.fragment,g),C(i.$$.fragment,g),_=!0)},o(g){N(t.$$.fragment,g),N(l.$$.fragment,g),N(s.$$.fragment,g),N(i.$$.fragment,g),_=!1},d(g){g&&m(e),P(t),P(l),P(s),P(i),E=!1,De(A)}}}function et(r,e,n){const t=[];let a=le(e,t);function l(u){j.call(this,r,u)}function o(u){j.call(this,r,u)}function s(u){j.call(this,r,u)}function f(u){j.call(this,r,u)}return r.$$set=u=>{e=X(X({},e),Ce(u)),n(0,a=le(e,t))},[a,l,o,s,f]}class tt extends ie{constructor(e){super(),fe(this,e,et,xe,se,{})}}const nt=tt;function at(r){let e,n="CLIENTES",t,a,l="Aqui puede ver, buscar y filtrar todos los clientes registrados en el sistema.";return{c(){e=$("h1"),e.textContent=n,t=H(),a=$("p"),a.textContent=l},l(o){e=v(o,"H1",{"data-svelte-h":!0}),ee(e)!=="svelte-1difwn"&&(e.textContent=n),t=M(o),a=v(o,"P",{"data-svelte-h":!0}),ee(a)!=="svelte-1uq3z68"&&(a.textContent=l)},m(o,s){b(o,e,s),b(o,t,s),b(o,a,s)},p:ae,d(o){o&&(m(e),m(t),m(a))}}}function lt(r){let e,n;return e=new Pe({}),{c(){z(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){R(e,t,a),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function rt(r){let e,n,t,a;return e=new me({props:{$$slots:{default:[at]},$$scope:{ctx:r}}}),t=new me({props:{class:"flex justify-end",$$slots:{default:[lt]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment),n=H(),z(t.$$.fragment)},l(l){O(e.$$.fragment,l),n=M(l),O(t.$$.fragment,l)},m(l,o){R(e,l,o),b(l,n,o),R(t,l,o),a=!0},p(l,o){const s={};o&32768&&(s.$$scope={dirty:o,ctx:l}),e.$set(s);const f={};o&32768&&(f.$$scope={dirty:o,ctx:l}),t.$set(f)},i(l){a||(C(e.$$.fragment,l),C(t.$$.fragment,l),a=!0)},o(l){N(e.$$.fragment,l),N(t.$$.fragment,l),a=!1},d(l){l&&m(n),P(e,l),P(t,l)}}}function ot(r){let e,n,t,a,l,o;e=new Be({props:{zebra:!0,sortable:!0,sortKey:"created",sortDirection:"descending",headers:[{key:"dni",value:"DNI"},{key:"nombre",value:"NOMBRE"},{key:"apellido",value:"APELLIDO"},{key:"fechanacimiento",value:"NACIMIENTO"},{key:"created",value:"CREADO"},{key:"updated",value:"ACTUALIZADO"},{key:"nacionalidad",value:"NACIONALIDAD"}],rows:r[7],$$slots:{default:[mt]},$$scope:{ctx:r}}});function s(i){r[12](i)}function f(i){r[13](i)}let u={totalItems:r[0].clientes.totalItems,pageSizes:[5,10,25,50,100],forwardText:"Siguiente página",backwardText:"Página anterior",itemsPerPageText:"Items por página",itemRangeText:pt,pageRangeText:bt};return r[2]!==void 0&&(u.pageSize=r[2]),r[3]!==void 0&&(u.page=r[3]),t=new Ve({props:u}),Z.push(()=>Q(t,"pageSize",s)),Z.push(()=>Q(t,"page",f)),t.$on("change",r[14]),{c(){z(e.$$.fragment),n=H(),z(t.$$.fragment)},l(i){O(e.$$.fragment,i),n=M(i),O(t.$$.fragment,i)},m(i,_){R(e,i,_),b(i,n,_),R(t,i,_),o=!0},p(i,_){const E={};_&128&&(E.rows=i[7]),_&32788&&(E.$$scope={dirty:_,ctx:i}),e.$set(E);const A={};_&1&&(A.totalItems=i[0].clientes.totalItems),!a&&_&4&&(a=!0,A.pageSize=i[2],Y(()=>a=!1)),!l&&_&8&&(l=!0,A.page=i[3],Y(()=>l=!1)),t.$set(A)},i(i){o||(C(e.$$.fragment,i),C(t.$$.fragment,i),o=!0)},o(i){N(e.$$.fragment,i),N(t.$$.fragment,i),o=!1},d(i){i&&m(n),P(e,i),P(t,i)}}}function st(r){let e,n,t,a;return e=new Qe({props:{headers:["DNI","NOMBRE","APELLIDO","NACIMIENTO","CREADO","ACTUALIZADO","NACIONALIDAD"],showHeader:!1,rows:r[2]}}),t=new nt({}),{c(){z(e.$$.fragment),n=H(),z(t.$$.fragment)},l(l){O(e.$$.fragment,l),n=M(l),O(t.$$.fragment,l)},m(l,o){R(e,l,o),b(l,n,o),R(t,l,o),a=!0},p(l,o){const s={};o&4&&(s.rows=l[2]),e.$set(s)},i(l){a||(C(e.$$.fragment,l),C(t.$$.fragment,l),a=!0)},o(l){N(e.$$.fragment,l),N(t.$$.fragment,l),a=!1},d(l){l&&m(n),P(e,l),P(t,l)}}}function it(r){let e,n,t;function a(o){r[11](o)}let l={min:1,max:100,label:"Numero de filas por pagina"};return r[2]!==void 0&&(l.value=r[2]),e=new Ge({props:l}),Z.push(()=>Q(e,"value",a)),{c(){z(e.$$.fragment)},l(o){O(e.$$.fragment,o)},m(o,s){R(e,o,s),t=!0},p(o,s){const f={};!n&&s&4&&(n=!0,f.value=o[2],Y(()=>n=!1)),e.$set(f)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){N(e.$$.fragment,o),t=!1},d(o){P(e,o)}}}function ft(r){let e;return{c(){e=re("Registrar cliente")},l(n){e=oe(n,"Registrar cliente")},m(n,t){b(n,e,t)},d(n){n&&m(e)}}}function ut(r){let e,n,t,a,l,o,s;function f(i){r[10](i)}let u={persistent:!0,shouldFilterRows:!0,placeholder:"Buscar..."};return r[4]!==void 0&&(u.filteredRowIds=r[4]),e=new qe({props:u}),Z.push(()=>Q(e,"filteredRowIds",f)),a=new Fe({props:{$$slots:{default:[it]},$$scope:{ctx:r}}}),o=new je({props:{icon:Re,$$slots:{default:[ft]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment),t=H(),z(a.$$.fragment),l=H(),z(o.$$.fragment)},l(i){O(e.$$.fragment,i),t=M(i),O(a.$$.fragment,i),l=M(i),O(o.$$.fragment,i)},m(i,_){R(e,i,_),b(i,t,_),R(a,i,_),b(i,l,_),R(o,i,_),s=!0},p(i,_){const E={};!n&&_&16&&(n=!0,E.filteredRowIds=i[4],Y(()=>n=!1)),e.$set(E);const A={};_&32772&&(A.$$scope={dirty:_,ctx:i}),a.$set(A);const L={};_&32768&&(L.$$scope={dirty:_,ctx:i}),o.$set(L)},i(i){s||(C(e.$$.fragment,i),C(a.$$.fragment,i),C(o.$$.fragment,i),s=!0)},o(i){N(e.$$.fragment,i),N(a.$$.fragment,i),N(o.$$.fragment,i),s=!1},d(i){i&&(m(t),m(l)),P(e,i),P(a,i),P(o,i)}}}function ct(r){let e,n;return e=new Je({props:{$$slots:{default:[ut]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){R(e,t,a),n=!0},p(t,a){const l={};a&32788&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function mt(r){let e,n;return e=new Ue({props:{$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){R(e,t,a),n=!0},p(t,a){const l={};a&32788&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function _t(r){let e,n,t,a;const l=[st,ot],o=[];function s(f,u){return f[5]?0:1}return e=s(r),n=o[e]=l[e](r),{c(){n.c(),t=K()},l(f){n.l(f),t=K()},m(f,u){o[e].m(f,u),b(f,t,u),a=!0},p(f,u){let i=e;e=s(f),e===i?o[e].p(f,u):(ze(),N(o[i],1,1,()=>{o[i]=null}),Oe(),n=o[e],n?n.p(f,u):(n=o[e]=l[e](f),n.c()),C(n,1),n.m(t.parentNode,t))},i(f){a||(C(n),a=!0)},o(f){N(n),a=!1},d(f){f&&m(t),o[e].d(f)}}}function dt(r){let e,n;return e=new me({props:{$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){R(e,t,a),n=!0},p(t,a){const l={};a&33021&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function gt(r){let e,n,t,a,l,o;return e=new ue({props:{$$slots:{default:[rt]},$$scope:{ctx:r}}}),t=new ue({props:{$$slots:{default:[dt]},$$scope:{ctx:r}}}),l=new ue({}),{c(){z(e.$$.fragment),n=H(),z(t.$$.fragment),a=H(),z(l.$$.fragment)},l(s){O(e.$$.fragment,s),n=M(s),O(t.$$.fragment,s),a=M(s),O(l.$$.fragment,s)},m(s,f){R(e,s,f),b(s,n,f),R(t,s,f),b(s,a,f),R(l,s,f),o=!0},p(s,f){const u={};f&32768&&(u.$$scope={dirty:f,ctx:s}),e.$set(u);const i={};f&33021&&(i.$$scope={dirty:f,ctx:s}),t.$set(i)},i(s){o||(C(e.$$.fragment,s),C(t.$$.fragment,s),C(l.$$.fragment,s),o=!0)},o(s){N(e.$$.fragment,s),N(t.$$.fragment,s),N(l.$$.fragment,s),o=!1},d(s){s&&(m(n),m(a)),P(e,s),P(t,s),P(l,s)}}}function ht(r){let e,n,t,a,l,o,s,f,u,i="FORM",_,E,A,L=JSON.stringify(r[1],null,4)+"",k,g,D,c="DATA",B,J,q,U=JSON.stringify(r[0],null,4)+"",d,h,S,x;return s=new Le({props:{$$slots:{default:[gt]},$$scope:{ctx:r}}}),{c(){e=$("form"),n=$("input"),t=H(),a=$("input"),o=H(),z(s.$$.fragment),f=H(),u=$("h1"),u.textContent=i,_=H(),E=$("pre"),A=$("code"),k=re(L),g=H(),D=$("h1"),D.textContent=c,B=H(),J=$("pre"),q=$("code"),d=re(U),this.h()},l(p){e=v(p,"FORM",{method:!0,action:!0});var T=y(e);n=v(T,"INPUT",{type:!0,name:!0}),t=M(T),a=v(T,"INPUT",{type:!0,name:!0}),T.forEach(m),o=M(p),O(s.$$.fragment,p),f=M(p),u=v(p,"H1",{"data-svelte-h":!0}),ee(u)!=="svelte-osti1y"&&(u.textContent=i),_=M(p),E=v(p,"PRE",{});var V=y(E);A=v(V,"CODE",{});var ge=y(A);k=oe(ge,L),ge.forEach(m),V.forEach(m),g=M(p),D=v(p,"H1",{"data-svelte-h":!0}),ee(D)!=="svelte-eb9p7w"&&(D.textContent=c),B=M(p),J=v(p,"PRE",{});var he=y(J);q=v(he,"CODE",{});var pe=y(q);d=oe(pe,U),pe.forEach(m),he.forEach(m),this.h()},h(){G(n,"type","hidden"),G(n,"name","page"),n.value=r[3],G(a,"type","hidden"),G(a,"name","pageSize"),a.value=r[2],e.hidden=!0,G(e,"method","POST"),G(e,"action","?/page")},m(p,T){b(p,e,T),I(e,n),I(e,t),I(e,a),r[8](e),b(p,o,T),R(s,p,T),b(p,f,T),b(p,u,T),b(p,_,T),b(p,E,T),I(E,A),I(A,k),b(p,g,T),b(p,D,T),b(p,B,T),b(p,J,T),I(J,q),I(q,d),h=!0,S||(x=Se(l=He.call(null,e,r[9])),S=!0)},p(p,[T]){(!h||T&8)&&(n.value=p[3]),(!h||T&4)&&(a.value=p[2]),l&&ye(l.update)&&T&34&&l.update.call(null,p[9]);const V={};T&33021&&(V.$$scope={dirty:T,ctx:p}),s.$set(V),(!h||T&2)&&L!==(L=JSON.stringify(p[1],null,4)+"")&&ce(k,L),(!h||T&1)&&U!==(U=JSON.stringify(p[0],null,4)+"")&&ce(d,U)},i(p){h||(C(s.$$.fragment,p),h=!0)},o(p){N(s.$$.fragment,p),h=!1},d(p){p&&(m(e),m(o),m(f),m(u),m(_),m(E),m(g),m(D),m(B),m(J)),r[8](null),P(s,p),S=!1,x()}}}const pt=(r,e,n)=>`${r}–${e} de ${n} item${e===1?"":"s"}`,bt=(r,e)=>`de ${e} página${e===1?"":"s"}`;function $t(r,e,n){let t,{data:a}=e,{form:l}=e,o=5,s=1,f=[],u=!1,i;function _(c){Z[c?"unshift":"push"](()=>{i=c,n(6,i)})}const E=()=>(n(5,u=!0),async({update:c})=>{await c(),n(5,u=!1),Me(),console.log("updatedata",JSON.stringify(l,null,4))});function A(c){f=c,n(4,f)}function L(c){o=c,n(2,o)}function k(c){o=c,n(2,o)}function g(c){s=c,n(3,s)}const D=({detail:c})=>{n(3,s=c.page),i.requestSubmit()};return r.$$set=c=>{"data"in c&&n(0,a=c.data),"form"in c&&n(1,l=c.form)},r.$$.update=()=>{r.$$.dirty&3&&n(7,t=(l==null?void 0:l.items)??a.clientes.items)},[a,l,o,s,f,u,i,t,_,E,A,L,k,g,D]}class vt extends ie{constructor(e){super(),fe(this,e,$t,ht,se,{data:0,form:1})}}function kt(r){let e,n,t,a,l;function o(u){r[2](u)}function s(u){r[3](u)}let f={};return r[1]!==void 0&&(f.data=r[1]),r[0]!==void 0&&(f.form=r[0]),n=new vt({props:f}),Z.push(()=>Q(n,"data",o)),Z.push(()=>Q(n,"form",s)),{c(){e=$("main"),z(n.$$.fragment)},l(u){e=v(u,"MAIN",{});var i=y(e);O(n.$$.fragment,i),i.forEach(m)},m(u,i){b(u,e,i),R(n,e,null),l=!0},p(u,[i]){const _={};!t&&i&2&&(t=!0,_.data=u[1],Y(()=>t=!1)),!a&&i&1&&(a=!0,_.form=u[0],Y(()=>a=!1)),n.$set(_)},i(u){l||(C(n.$$.fragment,u),l=!0)},o(u){N(n.$$.fragment,u),l=!1},d(u){u&&m(e),P(n)}}}function wt(r,e,n){let{data:t}=e,{form:a}=e;function l(s){t=s,n(1,t)}function o(s){a=s,n(0,a)}return r.$$set=s=>{"data"in s&&n(1,t=s.data),"form"in s&&n(0,a=s.form)},r.$$.update=()=>{r.$$.dirty&1&&console.log("form desde +page",a)},[a,t,l,o]}class Rt extends ie{constructor(e){super(),fe(this,e,wt,kt,se,{data:1,form:0})}}export{Rt as component};
