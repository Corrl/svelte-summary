import{S as g,i as v,s as x,C as i,w as y,x as M,y as $,z as w,A as r,f as b,t as E,B as S,N as m,l as k,r as O,a as T,m as d,n as _,u as j,h as l,c as C,p as D,b as u,H,E as P}from"./index-37ae0623.js";import{S as q}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function z(c){let n,e,o,t,a=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>

	<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'the component has mounted'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I'll run when the component is destroyed"</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`;return{c(){n=k("p"),e=O("The onMount function schedules a callback to run as soon as the component has been mounted to the DOM."),o=T(),t=k("pre"),this.h()},l(s){n=d(s,"P",{});var p=_(n);e=j(p,"The onMount function schedules a callback to run as soon as the component has been mounted to the DOM."),p.forEach(l),o=C(s),t=d(s,"PRE",{class:!0});var h=_(t);h.forEach(l),this.h()},h(){D(t,"class","language-html")},m(s,p){u(s,n,p),H(n,e),u(s,o,p),u(s,t,p),t.innerHTML=a},p:P,d(s){s&&l(n),s&&l(o),s&&l(t)}}}function A(c){let n,e;const o=[c[0],f];let t={$$slots:{default:[z]},$$scope:{ctx:c}};for(let a=0;a<o.length;a+=1)t=i(t,o[a]);return n=new q({props:t}),{c(){y(n.$$.fragment)},l(a){M(n.$$.fragment,a)},m(a,s){$(n,a,s),e=!0},p(a,[s]){const p=s&1?w(o,[s&1&&r(a[0]),s&0&&r(f)]):{};s&2&&(p.$$scope={dirty:s,ctx:a}),n.$set(p)},i(a){e||(b(n.$$.fragment,a),e=!0)},o(a){E(n.$$.fragment,a),e=!1},d(a){S(n,a)}}}const f={layout:"section",id:"onMount",indent:!0,h:"onMount",docs:"https://svelte.dev/docs#run-time-svelte-onmount",tutorials:["https://svelte.dev/tutorial/onmount"]};function B(c,n,e){return c.$$set=o=>{e(0,n=i(i({},n),m(o)))},n=m(n),[n]}class F extends g{constructor(n){super(),v(this,n,B,A,x,{})}}export{F as default,f as metadata};