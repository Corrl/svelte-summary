import{S as G,i as F,s as J,C as P,w as K,x as Q,y as U,z as V,A as I,q as W,o as X,B as Y,N as L,e as f,t as g,k as S,c as m,a as _,h as w,d as n,m as j,b as M,g as l,H as r,E as Z}from"./index-26167588.js";import{S as ss}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function as(d){let a,o,c,i,t,p,h,x,v,H,y,u,O=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>writable<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte/store'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,$,b,T,E,k,A=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./store.js'</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        $count <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// count has to be writable store </span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

count: &#123;$count&#125;

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;increase&#125;</span><span class="token punctuation">></span></span>
    count++
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`;return{c(){a=f("p"),o=f("strong"),c=g("Inside a component"),i=g(" you can access the value of a store by prefixing its reference with the "),t=f("code"),p=g("$"),h=g(" character. This causes Svelte to declare the prefixed variable, subscribe to the store at component initialization and unsubscribe when appropriate."),x=S(),v=f("h4"),H=g("store.js"),y=S(),u=f("pre"),$=S(),b=f("h4"),T=g("*.svelte"),E=S(),k=f("pre"),this.h()},l(s){a=m(s,"P",{});var e=_(a);o=m(e,"STRONG",{});var q=_(o);c=w(q,"Inside a component"),q.forEach(n),i=w(e," you can access the value of a store by prefixing its reference with the "),t=m(e,"CODE",{});var z=_(t);p=w(z,"$"),z.forEach(n),h=w(e," character. This causes Svelte to declare the prefixed variable, subscribe to the store at component initialization and unsubscribe when appropriate."),e.forEach(n),x=j(s),v=m(s,"H4",{});var C=_(v);H=w(C,"store.js"),C.forEach(n),y=j(s),u=m(s,"PRE",{class:!0});var B=_(u);B.forEach(n),$=j(s),b=m(s,"H4",{});var R=_(b);T=w(R,"*.svelte"),R.forEach(n),E=j(s),k=m(s,"PRE",{class:!0});var D=_(k);D.forEach(n),this.h()},h(){M(u,"class","language-js"),M(k,"class","language-html")},m(s,e){l(s,a,e),r(a,o),r(o,c),r(a,i),r(a,t),r(t,p),r(a,h),l(s,x,e),l(s,v,e),r(v,H),l(s,y,e),l(s,u,e),u.innerHTML=O,l(s,$,e),l(s,b,e),r(b,T),l(s,E,e),l(s,k,e),k.innerHTML=A},p:Z,d(s){s&&n(a),s&&n(x),s&&n(v),s&&n(y),s&&n(u),s&&n($),s&&n(b),s&&n(E),s&&n(k)}}}function ts(d){let a,o;const c=[d[0],N];let i={$$slots:{default:[as]},$$scope:{ctx:d}};for(let t=0;t<c.length;t+=1)i=P(i,c[t]);return a=new ss({props:i}),{c(){K(a.$$.fragment)},l(t){Q(a.$$.fragment,t)},m(t,p){U(a,t,p),o=!0},p(t,[p]){const h=p&1?V(c,[p&1&&I(t[0]),p&0&&I(N)]):{};p&2&&(h.$$scope={dirty:p,ctx:t}),a.$set(h)},i(t){o||(W(a.$$.fragment,t),o=!0)},o(t){X(a.$$.fragment,t),o=!1},d(t){Y(a,t)}}}const N={layout:"section",id:"scriptStorePrefix",h:"$ store prefix",indent:!0,docs:"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values",tutorials:["https://svelte.dev/tutorial/auto-subscriptions"]};function ns(d,a,o){return d.$$set=c=>{o(0,a=P(P({},a),L(c)))},a=L(a),[a]}class ls extends G{constructor(a){super(),F(this,a,ns,ts,J,{})}}export{ls as default,N as metadata};
