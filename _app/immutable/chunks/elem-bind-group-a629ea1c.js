import{S as $,i as w,s as E,C as v,w as S,x as C,y as P,z as B,A as f,q as j,o as G,B as H,N as h,e as k,t as q,k as I,c as r,a as m,h as b,d as u,m as R,b as z,g as d,H as g,E as A}from"./index-26167588.js";import{S as D}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function L(c){let a,e,t,o,s,n,i=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> tortilla <span class="token operator">=</span> <span class="token string">'Plain'</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> fillings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- grouped radio inputs are mutually exclusive --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;tortilla&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Plain<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;tortilla&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Whole wheat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;tortilla&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Spinach<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- grouped checkbox inputs populate an array --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;fillings&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Rice<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;fillings&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Beans<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;fillings&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cheese<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;fillings&#125;</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Guac (extra)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>`;return{c(){a=k("p"),e=q("Inputs that work together can use "),t=k("code"),o=q("bind:group"),s=I(),n=k("pre"),this.h()},l(p){a=r(p,"P",{});var l=m(a);e=b(l,"Inputs that work together can use "),t=r(l,"CODE",{});var _=m(t);o=b(_,"bind:group"),_.forEach(u),l.forEach(u),s=R(p),n=r(p,"PRE",{class:!0});var y=m(n);y.forEach(u),this.h()},h(){z(n,"class","language-html")},m(p,l){d(p,a,l),g(a,e),g(a,t),g(t,o),d(p,s,l),d(p,n,l),n.innerHTML=i},p:A,d(p){p&&u(a),p&&u(s),p&&u(n)}}}function M(c){let a,e;const t=[c[0],x];let o={$$slots:{default:[L]},$$scope:{ctx:c}};for(let s=0;s<t.length;s+=1)o=v(o,t[s]);return a=new D({props:o}),{c(){S(a.$$.fragment)},l(s){C(a.$$.fragment,s)},m(s,n){P(a,s,n),e=!0},p(s,[n]){const i=n&1?B(t,[n&1&&f(s[0]),n&0&&f(x)]):{};n&2&&(i.$$scope={dirty:n,ctx:s}),a.$set(i)},i(s){e||(j(a.$$.fragment,s),e=!0)},o(s){G(a.$$.fragment,s),e=!1},d(s){H(a,s)}}}const x={layout:"section",id:"elemBindGroup",indent:!0,h:"bind:group",docs:"https://svelte.dev/docs#template-syntax-element-directives-bind-group",tutorials:["https://svelte.dev/tutorial/group-inputs"]};function N(c,a,e){return c.$$set=t=>{e(0,a=v(v({},a),h(t)))},a=h(a),[a]}class J extends ${constructor(a){super(),w(this,a,N,M,E,{})}}export{J as default,x as metadata};
