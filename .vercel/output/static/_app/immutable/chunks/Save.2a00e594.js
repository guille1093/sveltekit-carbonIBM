import{s as p,r as f,u as d,v as m,h as _,d as u,j as z,w as g,i as A,x as V,y as v,z as c,A as b,l as H,m as M,n as S}from"./scheduler.8d709755.js";import{g as Z}from"./Button.734935ca.js";import{S as x,i as B}from"./index.eb84c1c6.js";function w(s){let e,a;return{c(){e=d("title"),a=H(s[1])},l(t){e=m(t,"title",{});var r=_(e);a=M(r,s[1]),r.forEach(u)},m(t,r){A(t,e,r),V(e,a)},p(t,r){r&2&&S(a,t[1])},d(t){t&&u(e)}}}function C(s){let e,a,t=s[1]&&w(s),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:s[0]},{height:s[0]},s[2],s[3]],n={};for(let i=0;i<r.length;i+=1)n=f(n,r[i]);return{c(){e=d("svg"),t&&t.c(),a=d("path"),this.h()},l(i){e=m(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var l=_(e);t&&t.l(l),a=m(l,"path",{d:!0}),_(a).forEach(u),l.forEach(u),this.h()},h(){z(a,"d","M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"),g(e,n)},m(i,l){A(i,e,l),t&&t.m(e,null),V(e,a)},p(i,[l]){i[1]?t?t.p(i,l):(t=w(i),t.c(),t.m(e,a)):t&&(t.d(1),t=null),g(e,n=Z(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},l&1&&{width:i[0]},l&1&&{height:i[0]},l&4&&i[2],l&8&&i[3]]))},i:v,o:v,d(i){i&&u(e),t&&t.d()}}}function E(s,e,a){let t,r;const n=["size","title"];let i=c(e,n),{size:l=16}=e,{title:h=void 0}=e;return s.$$set=o=>{a(5,e=f(f({},e),b(o))),a(3,i=c(e,n)),"size"in o&&a(0,l=o.size),"title"in o&&a(1,h=o.title)},s.$$.update=()=>{a(4,t=e["aria-label"]||e["aria-labelledby"]||h),a(2,r={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=b(e),[l,h,r,i,t]}class j extends x{constructor(e){super(),B(this,e,E,C,p,{size:0,title:1})}}export{j as S};