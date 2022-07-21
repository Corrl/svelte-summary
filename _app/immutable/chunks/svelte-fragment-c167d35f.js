import{S as q,i as E,s as T,C as v,w as C,x as b,y as A,z as D,A as w,q as H,o as M,B as O,N as y,e as r,t as m,k as W,c as g,a as d,h as f,d as i,m as N,b as P,g as _,H as k,E as j}from"./index-26167588.js";import{S as z}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function B(u){let a,p,t,c,s,n,o,$=`<code class="language-html"><span class="token comment">&lt;!-- Widget.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>No header was provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Some content between header and footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- App.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Widget</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>fragment</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>All rights reserved.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Copyright (c) 2019 Svelte Industries<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>fragment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Widget</span><span class="token punctuation">></span></span></code>`;return{c(){a=r("p"),p=m("The "),t=r("code"),c=m("<svelte:fragment>"),s=m(" element allows you to place content in a named slot without wrapping it in a container DOM element. This keeps the flow layout of your document intact."),n=W(),o=r("pre"),this.h()},l(e){a=g(e,"P",{});var l=d(a);p=f(l,"The "),t=g(l,"CODE",{});var h=d(t);c=f(h,"<svelte:fragment>"),h.forEach(i),s=f(l," element allows you to place content in a named slot without wrapping it in a container DOM element. This keeps the flow layout of your document intact."),l.forEach(i),n=N(e),o=g(e,"PRE",{class:!0});var S=d(o);S.forEach(i),this.h()},h(){P(o,"class","language-html")},m(e,l){_(e,a,l),k(a,p),k(a,t),k(t,c),k(a,s),_(e,n,l),_(e,o,l),o.innerHTML=$},p:j,d(e){e&&i(a),e&&i(n),e&&i(o)}}}function F(u){let a,p;const t=[u[0],x];let c={$$slots:{default:[B]},$$scope:{ctx:u}};for(let s=0;s<t.length;s+=1)c=v(c,t[s]);return a=new z({props:c}),{c(){C(a.$$.fragment)},l(s){b(a.$$.fragment,s)},m(s,n){A(a,s,n),p=!0},p(s,[n]){const o=n&1?D(t,[n&1&&w(s[0]),n&0&&w(x)]):{};n&2&&(o.$$scope={dirty:n,ctx:s}),a.$set(o)},i(s){p||(H(a.$$.fragment,s),p=!0)},o(s){M(a.$$.fragment,s),p=!1},d(s){O(a,s)}}}const x={layout:"section",id:"svelteFragment",h:"<svelte:fragment>",docs:"https://svelte.dev/docs#template-syntax-svelte-fragment",tutorials:["https://svelte.dev/tutorial/svelte-fragment"]};function I(u,a,p){return u.$$set=t=>{p(0,a=v(v({},a),y(t)))},a=y(a),[a]}class K extends q{constructor(a){super(),E(this,a,I,F,T,{})}}export{K as default,x as metadata};
