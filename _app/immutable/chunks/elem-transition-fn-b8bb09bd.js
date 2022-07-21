import{S as D,i as F,s as G,C as L,w as z,x as B,y as I,z as J,A as P,q as K,o as Q,B as U,N as R,e as _,t as v,k as S,c as g,a as k,h as y,d as n,m as T,b as q,g as d,H as f,E as V}from"./index-26167588.js";import{S as W}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function X(m){let t,p,l,r,s,e,i,H=`<code class="language-html">&#123;#if visible&#125;
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">transition:</span>fly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;&#123; y: 200, duration: 2000 &#125;&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		Flies in and out
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
&#123;/if&#125;</code>`,x,c,h,w,E,b,u,N=`<code class="language-html">&#123;#if x&#125;
	&#123;#if y&#125;
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">transition:</span>fade</span><span class="token punctuation">></span></span>
			fades in and out when x or y change
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">transition:</span>fade|local</span><span class="token punctuation">></span></span>
			fades in and out only when y changes
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	&#123;/if&#125;
&#123;/if&#125;</code>`;return{c(){t=_("p"),p=v("A transition is triggered by an "),l=_("strong"),r=v("element entering or leaving the DOM"),s=v(" as a result of a state change."),e=S(),i=_("pre"),x=S(),c=_("p"),h=_("strong"),w=v("Local"),E=v(" transitions only play when the block they belong to is created or destroyed, not when parent blocks are created or destroyed."),b=S(),u=_("pre"),this.h()},l(a){t=g(a,"P",{});var o=k(t);p=y(o,"A transition is triggered by an "),l=g(o,"STRONG",{});var M=k(l);r=y(M,"element entering or leaving the DOM"),M.forEach(n),s=y(o," as a result of a state change."),o.forEach(n),e=T(a),i=g(a,"PRE",{class:!0});var j=k(i);j.forEach(n),x=T(a),c=g(a,"P",{});var $=k(c);h=g($,"STRONG",{});var O=k(h);w=y(O,"Local"),O.forEach(n),E=y($," transitions only play when the block they belong to is created or destroyed, not when parent blocks are created or destroyed."),$.forEach(n),b=T(a),u=g(a,"PRE",{class:!0});var C=k(u);C.forEach(n),this.h()},h(){q(i,"class","language-html"),q(u,"class","language-html")},m(a,o){d(a,t,o),f(t,p),f(t,l),f(l,r),f(t,s),d(a,e,o),d(a,i,o),i.innerHTML=H,d(a,x,o),d(a,c,o),f(c,h),f(h,w),f(c,E),d(a,b,o),d(a,u,o),u.innerHTML=N},p:V,d(a){a&&n(t),a&&n(e),a&&n(i),a&&n(x),a&&n(c),a&&n(b),a&&n(u)}}}function Y(m){let t,p;const l=[m[0],A];let r={$$slots:{default:[X]},$$scope:{ctx:m}};for(let s=0;s<l.length;s+=1)r=L(r,l[s]);return t=new W({props:r}),{c(){z(t.$$.fragment)},l(s){B(t.$$.fragment,s)},m(s,e){I(t,s,e),p=!0},p(s,[e]){const i=e&1?J(l,[e&1&&P(s[0]),e&0&&P(A)]):{};e&2&&(i.$$scope={dirty:e,ctx:s}),t.$set(i)},i(s){p||(K(t.$$.fragment,s),p=!0)},o(s){Q(t.$$.fragment,s),p=!1},d(s){U(t,s)}}}const A={layout:"section",id:"elemTransitionFn",indent:!0,h:"transition:fn",docs:"https://svelte.dev/docs#template-syntax-element-directives-transition-fn",tutorials:["https://svelte.dev/tutorial/transition","https://svelte.dev/tutorial/adding-parameters-to-transitions","https://svelte.dev/tutorial/custom-css-transitions","https://svelte.dev/tutorial/custom-js-transitions","https://svelte.dev/tutorial/transition-events","https://svelte.dev/tutorial/local-transitions"]};function Z(m,t,p){return m.$$set=l=>{p(0,t=L(L({},t),R(l)))},t=R(t),[t]}class et extends D{constructor(t){super(),F(this,t,Z,Y,G,{})}}export{et as default,A as metadata};