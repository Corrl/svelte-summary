import{S as b,i as w,s as S,C as h,w as C,x as H,y as P,z as T,A as g,f as j,t as q,B as z,N as k,l as p,r as x,a as A,m as u,n as _,u as $,h as c,c as B,p as D,b as d,H as f,E as L}from"./index-37ae0623.js";import{S as M}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function N(i){let e,s,o,r,t,a,m=`<code class="language-html">import &#123; tick &#125; from 'svelte';

await tick();</code>`;return{c(){e=p("p"),s=p("code"),o=x("tick"),r=x(" returns a promise that resolves once any pending state changes have been applied, or in the next microtask if there are none."),t=A(),a=p("pre"),this.h()},l(n){e=u(n,"P",{});var l=_(e);s=u(l,"CODE",{});var v=_(s);o=$(v,"tick"),v.forEach(c),r=$(l," returns a promise that resolves once any pending state changes have been applied, or in the next microtask if there are none."),l.forEach(c),t=B(n),a=u(n,"PRE",{class:!0});var E=_(a);E.forEach(c),this.h()},h(){D(a,"class","language-html")},m(n,l){d(n,e,l),f(e,s),f(s,o),f(e,r),d(n,t,l),d(n,a,l),a.innerHTML=m},p:L,d(n){n&&c(e),n&&c(t),n&&c(a)}}}function O(i){let e,s;const o=[i[0],y];let r={$$slots:{default:[N]},$$scope:{ctx:i}};for(let t=0;t<o.length;t+=1)r=h(r,o[t]);return e=new M({props:r}),{c(){C(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,[a]){const m=a&1?T(o,[a&1&&g(t[0]),a&0&&g(y)]):{};a&2&&(m.$$scope={dirty:a,ctx:t}),e.$set(m)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}const y={layout:"section",id:"tick",indent:!0,h:"tick",docs:"https://svelte.dev/docs#run-time-svelte-tick",tutorials:["https://svelte.dev/tutorial/tick"]};function R(i,e,s){return i.$$set=o=>{s(0,e=h(h({},e),k(o)))},e=k(e),[e]}class K extends b{constructor(e){super(),w(this,e,R,O,S,{})}}export{K as default,y as metadata};
