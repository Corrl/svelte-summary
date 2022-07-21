import{S as P,i as j,s as z,C as k,w as A,x as B,y as I,z as L,A as D,q as M,o as N,B as R,N as O,e as h,t as f,k as F,c as v,a as g,h as _,d as r,m as G,b as J,g as b,H as i,E as K}from"./index-26167588.js";import{S as Q}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function U(p){let e,n,o,c,t,a,u,E,m,$,y,x,d,q=`<code class="language-html">&#123;#if condition&#125;
	...
&#123;:else if otherCondition&#125;
	...
&#123;:else&#125;
	...
&#123;/if&#125;</code>`;return{c(){e=h("p"),n=f("To conditionally render content wrap it in an "),o=h("code"),c=f("{#if}"),t=f(" block. "),a=h("code"),u=f("{:else if}"),E=f(" and "),m=h("code"),$=f("{:else}"),y=f(" are optional."),x=F(),d=h("pre"),this.h()},l(l){e=v(l,"P",{});var s=g(e);n=_(s,"To conditionally render content wrap it in an "),o=v(s,"CODE",{});var C=g(o);c=_(C,"{#if}"),C.forEach(r),t=_(s," block. "),a=v(s,"CODE",{});var w=g(a);u=_(w,"{:else if}"),w.forEach(r),E=_(s," and "),m=v(s,"CODE",{});var S=g(m);$=_(S,"{:else}"),S.forEach(r),y=_(s," are optional."),s.forEach(r),x=G(l),d=v(l,"PRE",{class:!0});var H=g(d);H.forEach(r),this.h()},h(){J(d,"class","language-html")},m(l,s){b(l,e,s),i(e,n),i(e,o),i(o,c),i(e,t),i(e,a),i(a,u),i(e,E),i(e,m),i(m,$),i(e,y),b(l,x,s),b(l,d,s),d.innerHTML=q},p:K,d(l){l&&r(e),l&&r(x),l&&r(d)}}}function V(p){let e,n;const o=[p[0],T];let c={$$slots:{default:[U]},$$scope:{ctx:p}};for(let t=0;t<o.length;t+=1)c=k(c,o[t]);return e=new Q({props:c}),{c(){A(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){I(e,t,a),n=!0},p(t,[a]){const u=a&1?L(o,[a&1&&D(t[0]),a&0&&D(T)]):{};a&2&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}const T={layout:"section",id:"if",h:"{#if ...}",docs:"https://svelte.dev/docs#template-syntax-if",tutorials:["https://svelte.dev/tutorial/if-blocks","https://svelte.dev/tutorial/else-blocks","https://svelte.dev/tutorial/else-if-blocks"]};function W(p,e,n){return p.$$set=o=>{n(0,e=k(k({},e),O(o)))},e=O(e),[e]}class te extends P{constructor(e){super(),j(this,e,W,V,z,{})}}export{te as default,T as metadata};
