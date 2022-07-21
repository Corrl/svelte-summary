import{S as g,i as v,s as y,C as u,w as b,x,y as $,z as w,A as r,f as E,t as S,B as C,N as m,l as d,r as M,a as j,m as _,n as f,u as q,h as c,c as B,p as D,b as i,H,E as J}from"./index-37ae0623.js";import{S as O}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function P(l){let s,e,o,n,a=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> field<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputField</span> <span class="token attr-name"><span class="token namespace">bind:</span>this</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;field&#125;</span> <span class="token punctuation">/></span></span></code>`;return{c(){s=d("p"),e=M("Just as you can bind to DOM elements, you can bind to component instances themselves."),o=j(),n=d("pre"),this.h()},l(t){s=_(t,"P",{});var p=f(s);e=q(p,"Just as you can bind to DOM elements, you can bind to component instances themselves."),p.forEach(c),o=B(t),n=_(t,"PRE",{class:!0});var k=f(n);k.forEach(c),this.h()},h(){D(n,"class","language-html")},m(t,p){i(t,s,p),H(s,e),i(t,o,p),i(t,n,p),n.innerHTML=a},p:J,d(t){t&&c(s),t&&c(o),t&&c(n)}}}function T(l){let s,e;const o=[l[0],h];let n={$$slots:{default:[P]},$$scope:{ctx:l}};for(let a=0;a<o.length;a+=1)n=u(n,o[a]);return s=new O({props:n}),{c(){b(s.$$.fragment)},l(a){x(s.$$.fragment,a)},m(a,t){$(s,a,t),e=!0},p(a,[t]){const p=t&1?w(o,[t&1&&r(a[0]),t&0&&r(h)]):{};t&2&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){e||(E(s.$$.fragment,a),e=!0)},o(a){S(s.$$.fragment,a),e=!1},d(a){C(s,a)}}}const h={layout:"section",id:"compBindThis",indent:!0,h:"bind:this",docs:"https://svelte.dev/docs#template-syntax-component-directives-bind-this",tutorials:["https://svelte.dev/tutorial/component-this"]};function z(l,s,e){return l.$$set=o=>{e(0,s=u(u({},s),m(o)))},s=m(s),[s]}class N extends g{constructor(s){super(),v(this,s,z,T,y,{})}}export{N as default,h as metadata};