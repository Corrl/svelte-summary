import{S as g,i as k,s as x,C as i,w as $,x as y,y as w,z as E,A as m,f as C,t as D,B as M,N as u,l as _,r as O,a as S,m as f,n as d,u as b,h as c,c as L,p as q,b as p,H,E as P}from"./index-37ae0623.js";import{S as j}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function z(r){let e,s,o,a,n='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SomeComponent</span> <span class="token attr-name"><span class="token namespace">on:</span>whatever</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;handler&#125;/</span><span class="token punctuation">></span></span></code>';return{c(){e=_("p"),s=O("Components can emit events using createEventDispatcher, or by forwarding DOM events. Listening for component events looks the same as listening for DOM events:"),o=S(),a=_("pre"),this.h()},l(t){e=f(t,"P",{});var l=d(e);s=b(l,"Components can emit events using createEventDispatcher, or by forwarding DOM events. Listening for component events looks the same as listening for DOM events:"),l.forEach(c),o=L(t),a=f(t,"PRE",{class:!0});var h=d(a);h.forEach(c),this.h()},h(){q(a,"class","language-html")},m(t,l){p(t,e,l),H(e,s),p(t,o,l),p(t,a,l),a.innerHTML=n},p:P,d(t){t&&c(e),t&&c(o),t&&c(a)}}}function A(r){let e,s;const o=[r[0],v];let a={$$slots:{default:[z]},$$scope:{ctx:r}};for(let n=0;n<o.length;n+=1)a=i(a,o[n]);return e=new j({props:a}),{c(){$(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,t){w(e,n,t),s=!0},p(n,[t]){const l=t&1?E(o,[t&1&&m(n[0]),t&0&&m(v)]):{};t&2&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){s||(C(e.$$.fragment,n),s=!0)},o(n){D(e.$$.fragment,n),s=!1},d(n){M(e,n)}}}const v={layout:"section",id:"compOnEventname",indent:!0,h:"on:eventname",docs:"https://svelte.dev/docs#template-syntax-component-directives-on-eventname",tutorials:["https://svelte.dev/tutorial/event-forwarding"]};function B(r,e,s){return r.$$set=o=>{s(0,e=i(i({},e),u(o)))},e=u(e),[e]}class G extends g{constructor(e){super(),k(this,e,B,A,x,{})}}export{G as default,v as metadata};