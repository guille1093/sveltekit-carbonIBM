import{s as M,r as d,u as h,v as m,h as _,d as o,j as p,w as g,i as z,x as L,y as c,z as v,A as b,l as E,m as A,n as C}from"./scheduler.8d709755.js";import{g as x}from"./Button.734935ca.js";import{S as B,i as R}from"./index.eb84c1c6.js";function w(a){let e,l;return{c(){e=h("title"),l=E(a[1])},l(t){e=m(t,"title",{});var r=_(e);l=A(r,a[1]),r.forEach(o)},m(t,r){z(t,e,r),L(e,l)},p(t,r){r&2&&C(l,t[1])},d(t){t&&o(e)}}}function k(a){let e,l,t=a[1]&&w(a),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:a[0]},{height:a[0]},a[2],a[3]],n={};for(let i=0;i<r.length;i+=1)n=d(n,r[i]);return{c(){e=h("svg"),t&&t.c(),l=h("path"),this.h()},l(i){e=m(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var s=_(e);t&&t.l(s),l=m(s,"path",{d:!0}),_(l).forEach(o),s.forEach(o),this.h()},h(){p(l,"d","M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z"),g(e,n)},m(i,s){z(i,e,s),t&&t.m(e,null),L(e,l)},p(i,[s]){i[1]?t?t.p(i,s):(t=w(i),t.c(),t.m(e,l)):t&&(t.d(1),t=null),g(e,n=x(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:i[0]},s&1&&{height:i[0]},s&4&&i[2],s&8&&i[3]]))},i:c,o:c,d(i){i&&o(e),t&&t.d()}}}function O(a,e,l){let t,r;const n=["size","title"];let i=v(e,n),{size:s=16}=e,{title:u=void 0}=e;return a.$$set=f=>{l(5,e=d(d({},e),b(f))),l(3,i=v(e,n)),"size"in f&&l(0,s=f.size),"title"in f&&l(1,u=f.title)},a.$$.update=()=>{l(4,t=e["aria-label"]||e["aria-labelledby"]||u),l(2,r={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=b(e),[s,u,r,i,t]}class S extends B{constructor(e){super(),R(this,e,O,k,M,{size:0,title:1})}}const H=S;export{H as E};