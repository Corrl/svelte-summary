import{S as b,i as q,s as L,C as v,w,x as C,y as F,z as N,A as x,f as T,t as A,B as H,N as y,l as k,r as m,a as P,m as _,n as d,u as g,h as i,c as j,p as z,b as h,H as r,E as B}from"./index-37ae0623.js";import{S as D}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function K(u){let a,p,n,c,s,t,o,S=`<code class="language-html"><span class="token comment">&lt;!-- FancyList.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
	&#123;#each items as item&#125;
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fancy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;item&#125;</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	&#123;/each&#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- App.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FancyList</span> <span class="token attr-name">&#123;items&#125;</span> <span class="token attr-name"><span class="token namespace">let:</span>prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;thing&#125;</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>&#123;thing.text&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FancyList</span><span class="token punctuation">></span></span></code>`;return{c(){a=k("p"),p=m("Slots can pass values back to the parent using props. The parent exposes the values to the slot template using the "),n=k("code"),c=m("let: directive"),s=m(". Named slots can also expose values."),t=P(),o=k("pre"),this.h()},l(e){a=_(e,"P",{});var l=d(a);p=g(l,"Slots can pass values back to the parent using props. The parent exposes the values to the slot template using the "),n=_(l,"CODE",{});var f=d(n);c=g(f,"let: directive"),f.forEach(i),s=g(l,". Named slots can also expose values."),l.forEach(i),t=j(e),o=_(e,"PRE",{class:!0});var E=d(o);E.forEach(i),this.h()},h(){z(o,"class","language-html")},m(e,l){h(e,a,l),r(a,p),r(a,n),r(n,c),r(a,s),h(e,t,l),h(e,o,l),o.innerHTML=S},p:B,d(e){e&&i(a),e&&i(t),e&&i(o)}}}function M(u){let a,p;const n=[u[0],$];let c={$$slots:{default:[K]},$$scope:{ctx:u}};for(let s=0;s<n.length;s+=1)c=v(c,n[s]);return a=new D({props:c}),{c(){w(a.$$.fragment)},l(s){C(a.$$.fragment,s)},m(s,t){F(a,s,t),p=!0},p(s,[t]){const o=t&1?N(n,[t&1&&x(s[0]),t&0&&x($)]):{};t&2&&(o.$$scope={dirty:t,ctx:s}),a.$set(o)},i(s){p||(T(a.$$.fragment,s),p=!0)},o(s){A(a.$$.fragment,s),p=!1},d(s){H(a,s)}}}const $={layout:"section",id:"slotKey",indent:!0,h:"<slot key={value}>",docs:"https://svelte.dev/docs#template-syntax-slot-slot-key-value",tutorials:["https://svelte.dev/tutorial/slot-props"]};function O(u,a,p){return u.$$set=n=>{p(0,a=v(v({},a),y(n)))},a=y(a),[a]}class Q extends b{constructor(a){super(),q(this,a,O,M,L,{})}}export{Q as default,$ as metadata};