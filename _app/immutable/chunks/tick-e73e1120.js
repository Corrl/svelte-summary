import{S as b,i as w,s as S,C as h,w as C,x as q,y as H,z as P,A as g,q as T,o as j,B as z,N as k,e as p,t as x,k as A,c as u,a as _,h as $,d as c,m as B,b as D,g as d,H as f,E as L}from"./index-26167588.js";import{S as M}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function N(l){let e,s,o,r,t,a,m=`<code class="language-html">import &#123; tick &#125; from 'svelte';

await tick();</code>`;return{c(){e=p("p"),s=p("code"),o=x("tick"),r=x(" returns a promise that resolves once any pending state changes have been applied, or in the next microtask if there are none."),t=A(),a=p("pre"),this.h()},l(n){e=u(n,"P",{});var i=_(e);s=u(i,"CODE",{});var v=_(s);o=$(v,"tick"),v.forEach(c),r=$(i," returns a promise that resolves once any pending state changes have been applied, or in the next microtask if there are none."),i.forEach(c),t=B(n),a=u(n,"PRE",{class:!0});var E=_(a);E.forEach(c),this.h()},h(){D(a,"class","language-html")},m(n,i){d(n,e,i),f(e,s),f(s,o),f(e,r),d(n,t,i),d(n,a,i),a.innerHTML=m},p:L,d(n){n&&c(e),n&&c(t),n&&c(a)}}}function O(l){let e,s;const o=[l[0],y];let r={$$slots:{default:[N]},$$scope:{ctx:l}};for(let t=0;t<o.length;t+=1)r=h(r,o[t]);return e=new M({props:r}),{c(){C(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){H(e,t,a),s=!0},p(t,[a]){const m=a&1?P(o,[a&1&&g(t[0]),a&0&&g(y)]):{};a&2&&(m.$$scope={dirty:a,ctx:t}),e.$set(m)},i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}const y={layout:"section",id:"tick",indent:!0,h:"tick",docs:"https://svelte.dev/docs#run-time-svelte-tick",tutorials:["https://svelte.dev/tutorial/tick"]};function R(l,e,s){return l.$$set=o=>{s(0,e=h(h({},e),k(o)))},e=k(e),[e]}class K extends b{constructor(e){super(),w(this,e,R,O,S,{})}}export{K as default,y as metadata};