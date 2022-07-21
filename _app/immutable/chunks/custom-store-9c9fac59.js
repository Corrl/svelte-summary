import{S as h,i as v,s as g,C as r,w as y,x,y as $,z as w,A as i,q as S,o as C,B as j,N as k,e as m,t as E,k as A,c as f,a as _,h as q,d as u,m as H,b as P,g as l,H as z,E as B}from"./index-26167588.js";import{S as L}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function M(c){let s,e,o,t,a=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">createCustomStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span>subscribe<span class="token punctuation">,</span> set<span class="token punctuation">,</span> update<span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        subscribe<span class="token punctuation">,</span>
        <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> customStore <span class="token operator">=</span> <span class="token function">createCustomStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>`;return{c(){s=m("p"),e=E("As long as an object correctly implements the subscribe method, it\u2019s a store."),o=A(),t=m("pre"),this.h()},l(n){s=f(n,"P",{});var p=_(s);e=q(p,"As long as an object correctly implements the subscribe method, it\u2019s a store."),p.forEach(u),o=H(n),t=f(n,"PRE",{class:!0});var b=_(t);b.forEach(u),this.h()},h(){P(t,"class","language-js")},m(n,p){l(n,s,p),z(s,e),l(n,o,p),l(n,t,p),t.innerHTML=a},p:B,d(n){n&&u(s),n&&u(o),n&&u(t)}}}function N(c){let s,e;const o=[c[0],d];let t={$$slots:{default:[M]},$$scope:{ctx:c}};for(let a=0;a<o.length;a+=1)t=r(t,o[a]);return s=new L({props:t}),{c(){y(s.$$.fragment)},l(a){x(s.$$.fragment,a)},m(a,n){$(s,a,n),e=!0},p(a,[n]){const p=n&1?w(o,[n&1&&i(a[0]),n&0&&i(d)]):{};n&2&&(p.$$scope={dirty:n,ctx:a}),s.$set(p)},i(a){e||(S(s.$$.fragment,a),e=!0)},o(a){C(s.$$.fragment,a),e=!1},d(a){j(s,a)}}}const d={layout:"section",id:"customStores",indent:!0,h:"Custom stores",tutorials:["https://svelte.dev/tutorial/custom-stores"]};function R(c,s,e){return c.$$set=o=>{e(0,s=r(r({},s),k(o)))},s=k(s),[s]}class I extends h{constructor(s){super(),v(this,s,R,N,g,{})}}export{I as default,d as metadata};
