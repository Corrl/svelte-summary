import{S as w,i as S,s as A,C as f,w as C,x as b,y as H,z as M,A as x,q as N,o as P,B as T,N as $,e as m,t as k,k as j,c as d,a as v,h as _,d as i,m as z,b as B,g,H as r,E as D}from"./index-26167588.js";import{S as L}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function O(u){let a,p,t,o,s,n,c,E=`<code class="language-html"><span class="token comment">&lt;!-- These are equivalent --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;active ? <span class="token punctuation">'</span>active<span class="token punctuation">'</span> : <span class="token punctuation">'</span><span class="token punctuation">'</span>&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">class:</span>active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;active&#125;</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Shorthand, for when name and value match --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">class:</span>active</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Multiple class toggles can be included --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">class:</span>active</span> <span class="token attr-name"><span class="token namespace">class:</span>inactive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;!active&#125;</span> <span class="token attr-name"><span class="token namespace">class:</span>isAdmin</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`;return{c(){a=m("p"),p=k("A "),t=m("code"),o=k("class:"),s=k(" directive provides a shorter way of toggling a class on an element."),n=j(),c=m("pre"),this.h()},l(e){a=d(e,"P",{});var l=v(a);p=_(l,"A "),t=d(l,"CODE",{});var h=v(t);o=_(h,"class:"),h.forEach(i),s=_(l," directive provides a shorter way of toggling a class on an element."),l.forEach(i),n=z(e),c=d(e,"PRE",{class:!0});var q=v(c);q.forEach(i),this.h()},h(){B(c,"class","language-html")},m(e,l){g(e,a,l),r(a,p),r(a,t),r(t,o),r(a,s),g(e,n,l),g(e,c,l),c.innerHTML=E},p:D,d(e){e&&i(a),e&&i(n),e&&i(c)}}}function R(u){let a,p;const t=[u[0],y];let o={$$slots:{default:[O]},$$scope:{ctx:u}};for(let s=0;s<t.length;s+=1)o=f(o,t[s]);return a=new L({props:o}),{c(){C(a.$$.fragment)},l(s){b(a.$$.fragment,s)},m(s,n){H(a,s,n),p=!0},p(s,[n]){const c=n&1?M(t,[n&1&&x(s[0]),n&0&&x(y)]):{};n&2&&(c.$$scope={dirty:n,ctx:s}),a.$set(c)},i(s){p||(N(a.$$.fragment,s),p=!0)},o(s){P(a.$$.fragment,s),p=!1},d(s){T(a,s)}}}const y={layout:"section",id:"elemClassName",indent:!0,h:"class:name",docs:"https://svelte.dev/docs#template-syntax-element-directives-class-name",tutorials:["https://svelte.dev/tutorial/classes","https://svelte.dev/tutorial/class-shorthand"]};function F(u,a,p){return u.$$set=t=>{p(0,a=f(f({},a),$(t)))},a=$(a),[a]}class Q extends w{constructor(a){super(),S(this,a,F,R,A,{})}}export{Q as default,y as metadata};
