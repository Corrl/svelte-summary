import{S as w,i as C,s as S,C as v,w as D,x as q,y as I,z as O,A as y,q as T,o as j,B as z,N as $,e as m,t as i,c as g,a as h,h as f,d as _,g as A,H as c,E as B}from"./index-26167588.js";import{S as H}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function N(r){let e,s,o,l,t,a,d,p;return{c(){e=m("p"),s=i("The "),o=m("code"),l=i("{@debug ...}"),t=i(" tag offers an alternative to "),a=m("code"),d=i("console.log(...)"),p=i(". It logs the values of specific variables whenever they change, and pauses code execution if you have devtools open.")},l(u){e=g(u,"P",{});var n=h(e);s=f(n,"The "),o=g(n,"CODE",{});var x=h(o);l=f(x,"{@debug ...}"),x.forEach(_),t=f(n," tag offers an alternative to "),a=g(n,"CODE",{});var b=h(a);d=f(b,"console.log(...)"),b.forEach(_),p=f(n,". It logs the values of specific variables whenever they change, and pauses code execution if you have devtools open."),n.forEach(_)},m(u,n){A(u,e,n),c(e,s),c(e,o),c(o,l),c(e,t),c(e,a),c(a,d),c(e,p)},p:B,d(u){u&&_(e)}}}function P(r){let e,s;const o=[r[0],E];let l={$$slots:{default:[N]},$$scope:{ctx:r}};for(let t=0;t<o.length;t+=1)l=v(l,o[t]);return e=new H({props:l}),{c(){D(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){I(e,t,a),s=!0},p(t,[a]){const d=a&1?O(o,[a&1&&y(t[0]),a&0&&y(E)]):{};a&2&&(d.$$scope={dirty:a,ctx:t}),e.$set(d)},i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}const E={layout:"section",id:"debug",h:"{@debug ...}",docs:"https://svelte.dev/docs#template-syntax-debug",tutorials:["https://svelte.dev/tutorial/debug"]};function k(r,e,s){return r.$$set=o=>{s(0,e=v(v({},e),$(o)))},e=$(e),[e]}class L extends w{constructor(e){super(),C(this,e,k,P,S,{})}}export{L as default,E as metadata};