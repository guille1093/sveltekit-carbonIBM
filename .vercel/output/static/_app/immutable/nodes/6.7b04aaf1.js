import{s as Be,p as W,a as N,c as E,i as T,N as Q,d as b,f as D,g as M,T as se,y as ae,e as X,l as G,m as O,h as z,j as A,x as S,D as Le,W as ze,X as Ge,E as Oe,G as he,R as be,n as re}from"../chunks/scheduler.8d709755.js";import{S as Ue,i as He,f as Y,b as I,d as k,m as v,a as h,t as w,e as C,g as ue,c as ie,j as we,k as Ie}from"../chunks/index.eb84c1c6.js";import{e as fe}from"../chunks/each.7fe1bb46.js";import{S as We,M as Xe,T as Je}from"../chunks/SelectSearch.41272c87.js";import{f as ke,s as ve}from"../chunks/index.c1cab4b5.js";import{A as Ke}from"../chunks/Add.8e3ed89f.js";import{e as Qe}from"../chunks/forms.2fc59014.js";import{C as Ye,M as Ze,a as ye}from"../chunks/ModalBody.1e95c8b1.js";import{B as $e}from"../chunks/Button.734935ca.js";import{M as xe,I as et}from"../chunks/InlineLoading.0dd66f30.js";import{G as tt,R as ne,C as le}from"../chunks/Column.b254b044.js";import{T as nt}from"../chunks/ToastNotification.51d8db30.js";import{F as ce}from"../chunks/FormGroup.addbf6ce.js";import{S as rt}from"../chunks/Search.82b14fd5.js";import{D as lt}from"../chunks/Dropdown.b85ababd.js";import{T as ot}from"../chunks/Tile.a37671a5.js";import{T as st}from"../chunks/TextArea.5ef5efe5.js";function pe(s,e,n){const t=s.slice();return t[46]=e[n],t}function me(s,e,n){const t=s.slice();return t[49]=e[n],t}function ft(s){let e,n,t,r,o,l,a,f,c,m,i,_,u,g;return m=new tt({props:{$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){e=D("form"),n=D("input"),t=N(),r=D("input"),o=N(),l=D("input"),a=N(),f=D("input"),c=N(),I(m.$$.fragment),this.h()},l(d){e=M(d,"FORM",{id:!0,method:!0,action:!0});var $=z(e);n=M($,"INPUT",{type:!0,name:!0}),t=E($),r=M($,"INPUT",{type:!0,name:!0}),o=E($),l=M($,"INPUT",{type:!0,name:!0}),a=E($),f=M($,"INPUT",{type:!0,name:!0}),c=E($),k(m.$$.fragment,$),$.forEach(b),this.h()},h(){A(n,"type","hidden"),A(n,"name","paquete"),n.value=s[3],A(r,"type","hidden"),A(r,"name","cant_personas"),r.value=s[16],A(l,"type","hidden"),A(l,"name","cliente"),l.value=s[4],A(f,"type","hidden"),A(f,"name","precio"),f.value=s[15],A(e,"id","modalForm"),A(e,"method","post"),A(e,"action","?/createVenta")},m(d,$){T(d,e,$),S(e,n),S(e,t),S(e,r),S(e,o),S(e,l),S(e,a),S(e,f),S(e,c),v(m,e,null),s[35](e),_=!0,u||(g=[Le(e,"submit",s[34]),ze(i=Qe.call(null,e,s[36]))],u=!0)},p(d,$){(!_||$[0]&8)&&(n.value=d[3]),(!_||$[0]&65536)&&(r.value=d[16]),(!_||$[0]&16)&&(l.value=d[4]),(!_||$[0]&32768)&&(f.value=d[15]);const P={};$[0]&63679|$[1]&2097152&&(P.$$scope={dirty:$,ctx:d}),m.$set(P),i&&Ge(i.update)&&$[0]&131328&&i.update.call(null,d[36])},i(d){_||(h(m.$$.fragment,d),_=!0)},o(d){w(m.$$.fragment,d),_=!1},d(d){d&&b(e),C(m),s[35](null),u=!1,Oe(g)}}}function at(s){let e,n,t,r,o;return n=new nt({props:{lowContrast:!0,kind:"success",title:"Operación exitosa",subtitle:new Date().toLocaleString(),caption:"La venta se ha creado correctamente.",fullWidth:!0}}),n.$on("close",s[22]),{c(){e=D("div"),I(n.$$.fragment)},l(l){e=M(l,"DIV",{});var a=z(e);k(n.$$.fragment,a),a.forEach(b)},m(l,a){T(l,e,a),v(n,e,null),o=!0},p:ae,i(l){o||(h(n.$$.fragment,l),l&&he(()=>{o&&(r&&r.end(1),t=we(e,ke,{y:100}),t.start())}),o=!0)},o(l){w(n.$$.fragment,l),t&&t.invalidate(),l&&(r=Ie(e,ve,{})),o=!1},d(l){l&&b(e),C(n),l&&r&&r.end()}}}function ut(s){let e,n,t,r,o;return n=new et({props:{description:"Guardando venta..."}}),{c(){e=D("div"),I(n.$$.fragment)},l(l){e=M(l,"DIV",{});var a=z(e);k(n.$$.fragment,a),a.forEach(b)},m(l,a){T(l,e,a),v(n,e,null),o=!0},p:ae,i(l){o||(h(n.$$.fragment,l),l&&he(()=>{o&&(r&&r.end(1),t=we(e,ke,{y:100}),t.start())}),o=!0)},o(l){w(n.$$.fragment,l),t&&t.invalidate(),l&&(r=Ie(e,ve,{})),o=!1},d(l){l&&b(e),C(n),l&&r&&r.end()}}}function it(s){let e,n,t,r,o,l,a;function f(u){s[23](u)}let c={size:"sm",placeholder:"Buscar paquete"};s[11]!==void 0&&(c.value=s[11]),e=new rt({props:c}),W.push(()=>Y(e,"value",f)),e.$on("input",s[24]),e.$on("clear",s[25]);function m(u){s[27](u)}function i(u){s[28](u)}let _={itemToString:s[26],items:s[12]};return s[3]!==void 0&&(_.selectedId=s[3]),s[7]!==void 0&&(_.open=s[7]),r=new lt({props:_}),W.push(()=>Y(r,"selectedId",m)),W.push(()=>Y(r,"open",i)),r.$on("select",s[29]),{c(){I(e.$$.fragment),t=N(),I(r.$$.fragment)},l(u){k(e.$$.fragment,u),t=E(u),k(r.$$.fragment,u)},m(u,g){v(e,u,g),T(u,t,g),v(r,u,g),a=!0},p(u,g){const d={};!n&&g[0]&2048&&(n=!0,d.value=u[11],Q(()=>n=!1)),e.$set(d);const $={};g[0]&4096&&($.items=u[12]),!o&&g[0]&8&&(o=!0,$.selectedId=u[3],Q(()=>o=!1)),!l&&g[0]&128&&(l=!0,$.open=u[7],Q(()=>l=!1)),r.$set($)},i(u){a||(h(e.$$.fragment,u),h(r.$$.fragment,u),a=!0)},o(u){w(e.$$.fragment,u),w(r.$$.fragment,u),a=!1},d(u){u&&b(t),C(e,u),C(r,u)}}}function ct(s){let e,n;return e=new ce({props:{legendText:"Paquete",$$slots:{default:[it]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&47246|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function $t(s){let e,n;return e=new le({props:{$$slots:{default:[ct]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&47246|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function pt(s){let e,n,t,r;function o(f){s[30](f)}function l(f){s[31](f)}let a={invalid:s[5],invalidText:jt,legendText:"Titular"};return s[2]!==void 0&&(a.items=s[2]),s[4]!==void 0&&(a.selectedId=s[4]),e=new We({props:a}),W.push(()=>Y(e,"items",o)),W.push(()=>Y(e,"selectedId",l)),{c(){I(e.$$.fragment)},l(f){k(e.$$.fragment,f)},m(f,c){v(e,f,c),r=!0},p(f,c){const m={};c[0]&32&&(m.invalid=f[5]),!n&&c[0]&4&&(n=!0,m.items=f[2],Q(()=>n=!1)),!t&&c[0]&16&&(t=!0,m.selectedId=f[4],Q(()=>t=!1)),e.$set(m)},i(f){r||(h(e.$$.fragment,f),r=!0)},o(f){w(e.$$.fragment,f),r=!1},d(f){C(e,f)}}}function mt(s){let e,n;return e=new le({props:{$$slots:{default:[pt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&52|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function _e(s){let e,n;function t(){return s[33](s[49])}return e=new Je({props:{size:"sm",filter:!0,type:"blue",$$slots:{default:[_t]},$$scope:{ctx:s}}}),e.$on("close",t),{c(){I(e.$$.fragment)},l(r){k(e.$$.fragment,r)},m(r,o){v(e,r,o),n=!0},p(r,o){s=r;const l={};o[0]&1|o[1]&2097152&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){C(e,r)}}}function _t(s){let e=s[49].nombre+"",n,t,r=s[49].apellido+"",o;return{c(){n=G(e),t=N(),o=G(r)},l(l){n=O(l,e),t=E(l),o=O(l,r)},m(l,a){T(l,n,a),T(l,t,a),T(l,o,a)},p(l,a){a[0]&1&&e!==(e=l[49].nombre+"")&&re(n,e),a[0]&1&&r!==(r=l[49].apellido+"")&&re(o,r)},d(l){l&&(b(n),b(t),b(o))}}}function de(s){let e,n,t=s[49].id===s[46]&&_e(s);return{c(){t&&t.c(),e=X()},l(r){t&&t.l(r),e=X()},m(r,o){t&&t.m(r,o),T(r,e,o),n=!0},p(r,o){r[49].id===r[46]?t?(t.p(r,o),o[0]&3&&h(t,1)):(t=_e(r),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(ue(),w(t,1,1,()=>{t=null}),ie())},i(r){n||(h(t),n=!0)},o(r){w(t),n=!1},d(r){r&&b(e),t&&t.d(r)}}}function ge(s){let e,n,t=fe(s[0].clientes),r=[];for(let l=0;l<t.length;l+=1)r[l]=de(me(s,t,l));const o=l=>w(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=X()},l(l){for(let a=0;a<r.length;a+=1)r[a].l(l);e=X()},m(l,a){for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(l,a);T(l,e,a),n=!0},p(l,a){if(a[0]&3){t=fe(l[0].clientes);let f;for(f=0;f<t.length;f+=1){const c=me(l,t,f);r[f]?(r[f].p(c,a),h(r[f],1)):(r[f]=de(c),r[f].c(),h(r[f],1),r[f].m(e.parentNode,e))}for(ue(),f=t.length;f<r.length;f+=1)o(f);ie()}},i(l){if(!n){for(let a=0;a<t.length;a+=1)h(r[a]);n=!0}},o(l){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)w(r[a]);n=!1},d(l){l&&b(e),be(r,l)}}}function dt(s){let e,n,t,r,o,l,a;function f(u){s[32](u)}let c={selectionFeedback:"top-after-reopen",filterable:!0,label:"Seleccione los acompañantes",items:s[14]};s[1]!==void 0&&(c.selectedIds=s[1]),t=new Xe({props:c}),W.push(()=>Y(t,"selectedIds",f));let m=fe(s[1]),i=[];for(let u=0;u<m.length;u+=1)i[u]=ge(pe(s,m,u));const _=u=>w(i[u],1,1,()=>{i[u]=null});return{c(){e=D("input"),n=N(),I(t.$$.fragment),o=N();for(let u=0;u<i.length;u+=1)i[u].c();l=X(),this.h()},l(u){e=M(u,"INPUT",{type:!0,name:!0}),n=E(u),k(t.$$.fragment,u),o=E(u);for(let g=0;g<i.length;g+=1)i[g].l(u);l=X(),this.h()},h(){A(e,"type","hidden"),A(e,"name","pasajeros"),e.value=s[1]},m(u,g){T(u,e,g),T(u,n,g),v(t,u,g),T(u,o,g);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(u,g);T(u,l,g),a=!0},p(u,g){(!a||g[0]&2)&&(e.value=u[1]);const d={};if(g[0]&16384&&(d.items=u[14]),!r&&g[0]&2&&(r=!0,d.selectedIds=u[1],Q(()=>r=!1)),t.$set(d),g[0]&3){m=fe(u[1]);let $;for($=0;$<m.length;$+=1){const P=pe(u,m,$);i[$]?(i[$].p(P,g),h(i[$],1)):(i[$]=ge(P),i[$].c(),h(i[$],1),i[$].m(l.parentNode,l))}for(ue(),$=m.length;$<i.length;$+=1)_($);ie()}},i(u){if(!a){h(t.$$.fragment,u);for(let g=0;g<m.length;g+=1)h(i[g]);a=!0}},o(u){w(t.$$.fragment,u),i=i.filter(Boolean);for(let g=0;g<i.length;g+=1)w(i[g]);a=!1},d(u){u&&(b(e),b(n),b(o),b(l)),C(t,u),be(i,u)}}}function gt(s){let e,n;return e=new ce({props:{legendText:"Acompañantes",$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&16387|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ht(s){let e,n;return e=new le({props:{$$slots:{default:[gt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&16387|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function bt(s){let e,n,t="Cantidad de personas:",r,o,l=s[1].length+1+"",a,f,c,m,i="Precio por persona:",_,u,g,d=Intl.NumberFormat("es-AR").format(s[13])+"",$,P,R,q,x="Total:",U,V,B,L=Intl.NumberFormat("es-AR").format((s[1].length+1)*s[13])+"",J;return{c(){e=D("div"),n=D("p"),n.textContent=t,r=N(),o=D("h5"),a=G(l),f=N(),c=D("div"),m=D("p"),m.textContent=i,_=N(),u=D("h5"),g=G("$"),$=G(d),P=N(),R=D("div"),q=D("p"),q.textContent=x,U=N(),V=D("h5"),B=G("$"),J=G(L),this.h()},l(F){e=M(F,"DIV",{class:!0});var j=z(e);n=M(j,"P",{"data-svelte-h":!0}),se(n)!=="svelte-1v05954"&&(n.textContent=t),r=E(j),o=M(j,"H5",{});var oe=z(o);a=O(oe,l),oe.forEach(b),j.forEach(b),f=E(F),c=M(F,"DIV",{class:!0});var Z=z(c);m=M(Z,"P",{"data-svelte-h":!0}),se(m)!=="svelte-kccwtr"&&(m.textContent=i),_=E(Z),u=M(Z,"H5",{});var ee=z(u);g=O(ee,"$"),$=O(ee,d),ee.forEach(b),Z.forEach(b),P=E(F),R=M(F,"DIV",{class:!0});var y=z(R);q=M(y,"P",{"data-svelte-h":!0}),se(q)!=="svelte-1s87a6c"&&(q.textContent=x),U=E(y),V=M(y,"H5",{});var te=z(V);B=O(te,"$"),J=O(te,L),te.forEach(b),y.forEach(b),this.h()},h(){A(e,"class","flex justify-between p-1"),A(c,"class","flex justify-between p-1"),A(R,"class","flex justify-between p-1 bg-blue-600")},m(F,j){T(F,e,j),S(e,n),S(e,r),S(e,o),S(o,a),T(F,f,j),T(F,c,j),S(c,m),S(c,_),S(c,u),S(u,g),S(u,$),T(F,P,j),T(F,R,j),S(R,q),S(R,U),S(R,V),S(V,B),S(V,J)},p(F,j){j[0]&2&&l!==(l=F[1].length+1+"")&&re(a,l),j[0]&8192&&d!==(d=Intl.NumberFormat("es-AR").format(F[13])+"")&&re($,d),j[0]&8194&&L!==(L=Intl.NumberFormat("es-AR").format((F[1].length+1)*F[13])+"")&&re(J,L)},d(F){F&&(b(e),b(f),b(c),b(P),b(R))}}}function wt(s){let e,n;return e=new ot({props:{light:!0,$$slots:{default:[bt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&8194|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function It(s){let e,n;return e=new ce({props:{legendText:"Valor",$$slots:{default:[wt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&8194|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function kt(s){let e,n;return e=new le({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[0]&8194|r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function vt(s){let e,n;return e=new st({props:{name:"observaciones",placeholder:"Observaciones"}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p:ae,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Ct(s){let e,n;return e=new ce({props:{legendText:"Observaciones",$$slots:{default:[vt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Tt(s){let e,n;return e=new le({props:{$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const o={};r[1]&2097152&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function St(s){let e,n,t,r,o,l,a,f,c,m;return e=new ne({props:{$$slots:{default:[$t]},$$scope:{ctx:s}}}),t=new ne({props:{$$slots:{default:[mt]},$$scope:{ctx:s}}}),o=new ne({props:{$$slots:{default:[ht]},$$scope:{ctx:s}}}),a=new ne({props:{$$slots:{default:[kt]},$$scope:{ctx:s}}}),c=new ne({props:{$$slots:{default:[Tt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),r=N(),I(o.$$.fragment),l=N(),I(a.$$.fragment),f=N(),I(c.$$.fragment)},l(i){k(e.$$.fragment,i),n=E(i),k(t.$$.fragment,i),r=E(i),k(o.$$.fragment,i),l=E(i),k(a.$$.fragment,i),f=E(i),k(c.$$.fragment,i)},m(i,_){v(e,i,_),T(i,n,_),v(t,i,_),T(i,r,_),v(o,i,_),T(i,l,_),v(a,i,_),T(i,f,_),v(c,i,_),m=!0},p(i,_){const u={};_[0]&47246|_[1]&2097152&&(u.$$scope={dirty:_,ctx:i}),e.$set(u);const g={};_[0]&52|_[1]&2097152&&(g.$$scope={dirty:_,ctx:i}),t.$set(g);const d={};_[0]&16387|_[1]&2097152&&(d.$$scope={dirty:_,ctx:i}),o.$set(d);const $={};_[0]&8194|_[1]&2097152&&($.$$scope={dirty:_,ctx:i}),a.$set($);const P={};_[1]&2097152&&(P.$$scope={dirty:_,ctx:i}),c.$set(P)},i(i){m||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(o.$$.fragment,i),h(a.$$.fragment,i),h(c.$$.fragment,i),m=!0)},o(i){w(e.$$.fragment,i),w(t.$$.fragment,i),w(o.$$.fragment,i),w(a.$$.fragment,i),w(c.$$.fragment,i),m=!1},d(i){i&&(b(n),b(r),b(l),b(f)),C(e,i),C(t,i),C(o,i),C(a,i),C(c,i)}}}function Nt(s){let e,n,t,r;const o=[ut,at,ft],l=[];function a(f,c){return f[17]?0:f[8]?1:2}return e=a(s),n=l[e]=o[e](s),{c(){n.c(),t=X()},l(f){n.l(f),t=X()},m(f,c){l[e].m(f,c),T(f,t,c),r=!0},p(f,c){let m=e;e=a(f),e===m?l[e].p(f,c):(ue(),w(l[m],1,1,()=>{l[m]=null}),ie(),n=l[e],n?n.p(f,c):(n=l[e]=o[e](f),n.c()),h(n,1),n.m(t.parentNode,t))},i(f){r||(h(n),r=!0)},o(f){w(n),r=!1},d(f){f&&b(t),l[e].d(f)}}}function Et(s){let e;return{c(){e=G("Cancelar")},l(n){e=O(n,"Cancelar")},m(n,t){T(n,e,t)},d(n){n&&b(e)}}}function Pt(s){let e;return{c(){e=G("Crear")},l(n){e=O(n,"Crear")},m(n,t){T(n,e,t)},d(n){n&&b(e)}}}function Ft(s){let e,n,t,r;return e=new $e({props:{kind:"secondary",size:"lg",$$slots:{default:[Et]},$$scope:{ctx:s}}}),e.$on("click",s[37]),t=new $e({props:{id:"modalSubmitButton",size:"lg",type:"submit",disabled:!s[9]||s[17],$$slots:{default:[Pt]},$$scope:{ctx:s}}}),t.$on("click",s[38]),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment)},l(o){k(e.$$.fragment,o),n=E(o),k(t.$$.fragment,o)},m(o,l){v(e,o,l),T(o,n,l),v(t,o,l),r=!0},p(o,l){const a={};l[1]&2097152&&(a.$$scope={dirty:l,ctx:o}),e.$set(a);const f={};l[0]&131584&&(f.disabled=!o[9]||o[17]),l[1]&2097152&&(f.$$scope={dirty:l,ctx:o}),t.$set(f)},i(o){r||(h(e.$$.fragment,o),h(t.$$.fragment,o),r=!0)},o(o){w(e.$$.fragment,o),w(t.$$.fragment,o),r=!1},d(o){o&&b(n),C(e,o),C(t,o)}}}function qt(s){let e,n,t,r,o,l;return e=new Ze({props:{label:"",title:"Nueva venta"}}),t=new ye({props:{hasForm:!0,hasScrollingContent:!0,$$slots:{default:[Nt]},$$scope:{ctx:s}}}),o=new xe({props:{$$slots:{default:[Ft]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),r=N(),I(o.$$.fragment)},l(a){k(e.$$.fragment,a),n=E(a),k(t.$$.fragment,a),r=E(a),k(o.$$.fragment,a)},m(a,f){v(e,a,f),T(a,n,f),v(t,a,f),T(a,r,f),v(o,a,f),l=!0},p(a,f){const c={};f[0]&262143|f[1]&2097152&&(c.$$scope={dirty:f,ctx:a}),t.$set(c);const m={};f[0]&132672|f[1]&2097152&&(m.$$scope={dirty:f,ctx:a}),o.$set(m)},i(a){l||(h(e.$$.fragment,a),h(t.$$.fragment,a),h(o.$$.fragment,a),l=!0)},o(a){w(e.$$.fragment,a),w(t.$$.fragment,a),w(o.$$.fragment,a),l=!1},d(a){a&&(b(n),b(r)),C(e,a),C(t,a),C(o,a)}}}function Dt(s){let e,n,t,r="Nueva venta",o;return e=new Ke({}),{c(){I(e.$$.fragment),n=N(),t=D("span"),t.textContent=r},l(l){k(e.$$.fragment,l),n=E(l),t=M(l,"SPAN",{"data-svelte-h":!0}),se(t)!=="svelte-8ukayj"&&(t.textContent=r)},m(l,a){v(e,l,a),T(l,n,a),T(l,t,a),o=!0},p:ae,i(l){o||(h(e.$$.fragment,l),o=!0)},o(l){w(e.$$.fragment,l),o=!1},d(l){l&&(b(n),b(t)),C(e,l)}}}function Mt(s){let e,n,t,r,o;function l(f){s[39](f)}let a={$$slots:{default:[qt]},$$scope:{ctx:s}};return s[10]!==void 0&&(a.open=s[10]),e=new Ye({props:a}),W.push(()=>Y(e,"open",l)),e.$on("close",s[40]),r=new $e({props:{kind:"primary",size:"lg",$$slots:{default:[Dt]},$$scope:{ctx:s}}}),r.$on("click",s[41]),{c(){I(e.$$.fragment),t=N(),I(r.$$.fragment)},l(f){k(e.$$.fragment,f),t=E(f),k(r.$$.fragment,f)},m(f,c){v(e,f,c),T(f,t,c),v(r,f,c),o=!0},p(f,c){const m={};c[0]&262143|c[1]&2097152&&(m.$$scope={dirty:c,ctx:f}),!n&&c[0]&1024&&(n=!0,m.open=f[10],Q(()=>n=!1)),e.$set(m);const i={};c[1]&2097152&&(i.$$scope={dirty:c,ctx:f}),r.$set(i)},i(f){o||(h(e.$$.fragment,f),h(r.$$.fragment,f),o=!0)},o(f){w(e.$$.fragment,f),w(r.$$.fragment,f),o=!1},d(f){f&&b(t),C(e,f),C(r,f)}}}let jt="El cliente ya esta en el paquete";function At(s,e,n){let t,r,o,{data:l}=e,a=[];l.clientes.map(p=>({id:p.id,text:`${p.nombre} ${p.apellido}`,dni:p.dni}));let f,c=!1,m=!1,i=!0,_=!0,u=l.paquetes.map(p=>({id:p.id,text:p.nombre,fecha:p.fechasalida,precio:p.precio})),g="",d=[...u],$=l.clientes.map(p=>({id:p.id,text:`${p.nombre} ${p.apellido} - ${p.dni}`})),P=[...$];const R=()=>{n(10,_=!1),n(8,m=!1),window.location.reload()};let q=u[0].id;const x=p=>{let H=0;return u.forEach(K=>{K.id===p&&(H=K.precio)}),H};let U=u[0].precio;const V=p=>{console.log("paquete selecionado",p);let H=[];return l.ventas.forEach(K=>{K.expand.paquete.id===p&&(H.push(K.expand.cliente.id),K.expand.pasajeros&&K.expand.pasajeros.forEach(Ve=>{H.push(Ve.id)}))}),H};let B,L=!1,J=[];const F=()=>n(8,m=!1);function j(p){g=p,n(11,g)}const oe=()=>{n(7,c=!0),n(12,d=u.filter(p=>p.text.toLowerCase().includes(g.toLowerCase()))),d.length||n(12,d=[u[0]]),d&&d.length>0?(n(3,q=d[0].id),n(15,o=a.length>0?a.length*d[0].precio:d[0].precio),n(13,U=d[0].precio)):(u&&u.length>0,n(3,q=u[0].id),n(15,o=a.length>0?a.length*u[0].precio:u[0].precio),n(13,U=u[0].precio))},Z=()=>{n(7,c=!1),n(12,d=[...u])},ee=p=>p.text+" - "+new Date(p.fecha).toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"});function y(p){q=p,n(3,q)}function te(p){c=p,n(7,c)}const Ce=()=>{n(7,c=!1),n(11,g=""),n(12,d=[...u]),n(2,P=[...$]),V(q)};function Te(p){P=p,n(2,P),n(19,$),n(3,q)}function Se(p){B=p,n(4,B)}function Ne(p){a=p,n(1,a)}const Ee=p=>{n(1,a=a.filter(H=>H!==p.id))},Pe=()=>{n(10,_=!0),n(9,i=!1)};function Fe(p){W[p?"unshift":"push"](()=>{f=p,n(6,f)})}const qe=()=>(n(17,t=!0),async({update:p})=>{await p(),n(17,t=!1),n(8,m=!0)}),De=()=>n(10,_=!1),Me=()=>f.requestSubmit();function je(p){_=p,n(10,_)}const Ae=()=>R(),Re=()=>{n(10,_=!0),n(9,i=!1)};return s.$$set=p=>{"data"in p&&n(0,l=p.data)},s.$$.update=()=>{s.$$.dirty[0]&2&&n(16,r=(a.length+1).toString()),s.$$.dirty[0]&10&&n(15,o=(x(q)*(a.length+1)).toString()),s.$$.dirty[0]&8&&x(q).toString(),s.$$.dirty[0]&24&&n(5,L=V(q).includes(B)),s.$$.dirty[0]&8&&n(2,P=$.filter(p=>!V(q).includes(p.id))),s.$$.dirty[0]&20&&n(14,J=P.filter(p=>p.id!==B)),s.$$.dirty[0]&32&&n(9,i=!L)},n(17,t=!1),[l,a,P,q,B,L,f,c,m,i,_,g,d,U,J,o,r,t,u,$,R,V,F,j,oe,Z,ee,y,te,Ce,Te,Se,Ne,Ee,Pe,Fe,qe,De,Me,je,Ae,Re]}class xt extends Ue{constructor(e){super(),He(this,e,At,Mt,Be,{data:0},null,[-1,-1])}}export{xt as component};