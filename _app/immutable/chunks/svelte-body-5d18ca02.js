import{S as q,i as M,s as T,C as g,w as A,x as B,y as D,z as H,A as $,f as O,t as P,B as j,N as E,l as v,r as i,a as z,m as h,n as y,u as _,h as r,c as L,p as N,b,H as u,E as R}from"./index-37ae0623.js";import{S as F}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function G(d){let e,o,s,c,t,a,m,k,f,p,C=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>body</span>
	<span class="token attr-name"><span class="token namespace">on:</span>mouseenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;handleMouseenter&#125;</span>
	<span class="token attr-name"><span class="token namespace">on:</span>mouseleave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;handleMouseleave&#125;</span>
	<span class="token attr-name"><span class="token namespace">use:</span>someAction</span>
<span class="token punctuation">/></span></span></code>`;return{c(){e=v("p"),o=i("This element allows you to add listeners to events on "),s=v("code"),c=i("document.body"),t=i(" which don\u2019t fire on window. It also lets you use actions on the "),a=v("code"),m=i("<body>"),k=i(" element. It may only appear at the top level of your component and must never be inside a block or element."),f=z(),p=v("pre"),this.h()},l(n){e=h(n,"P",{});var l=y(e);o=_(l,"This element allows you to add listeners to events on "),s=h(l,"CODE",{});var w=y(s);c=_(w,"document.body"),w.forEach(r),t=_(l," which don\u2019t fire on window. It also lets you use actions on the "),a=h(l,"CODE",{});var x=y(a);m=_(x,"<body>"),x.forEach(r),k=_(l," element. It may only appear at the top level of your component and must never be inside a block or element."),l.forEach(r),f=L(n),p=h(n,"PRE",{class:!0});var I=y(p);I.forEach(r),this.h()},h(){N(p,"class","language-html")},m(n,l){b(n,e,l),u(e,o),u(e,s),u(s,c),u(e,t),u(e,a),u(a,m),u(e,k),b(n,f,l),b(n,p,l),p.innerHTML=C},p:R,d(n){n&&r(e),n&&r(f),n&&r(p)}}}function J(d){let e,o;const s=[d[0],S];let c={$$slots:{default:[G]},$$scope:{ctx:d}};for(let t=0;t<s.length;t+=1)c=g(c,s[t]);return e=new F({props:c}),{c(){A(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){D(e,t,a),o=!0},p(t,[a]){const m=a&1?H(s,[a&1&&$(t[0]),a&0&&$(S)]):{};a&2&&(m.$$scope={dirty:a,ctx:t}),e.$set(m)},i(t){o||(O(e.$$.fragment,t),o=!0)},o(t){P(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}const S={layout:"section",id:"svelteBody",h:"<svelte:body>",docs:"https://svelte.dev/docs#template-syntax-svelte-body",tutorials:["https://svelte.dev/tutorial/svelte-body"]};function K(d,e,o){return d.$$set=s=>{o(0,e=g(g({},e),E(s)))},e=E(e),[e]}class X extends q{constructor(e){super(),M(this,e,K,J,T,{})}}export{X as default,S as metadata};