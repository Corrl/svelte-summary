import{S as b,i as S,s as w,C as v,w as C,x as L,y as M,z as T,A as k,q,o as P,B as W,N as $,e as u,t as d,k as j,c as _,a as f,h,d as i,m as z,b as A,g,H as m,E as B}from"./index-26167588.js";import{S as D}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function N(r){let t,o,s,p,e,a,l,E='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>&#123;@html string&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>';return{c(){t=u("p"),o=d("With "),s=u("code"),p=d("{@html ...}"),e=d(" HTML can be directly rendered into a component."),a=j(),l=u("pre"),this.h()},l(n){t=_(n,"P",{});var c=f(t);o=h(c,"With "),s=_(c,"CODE",{});var x=f(s);p=h(x,"{@html ...}"),x.forEach(i),e=h(c," HTML can be directly rendered into a component."),c.forEach(i),a=z(n),l=_(n,"PRE",{class:!0});var H=f(l);H.forEach(i),this.h()},h(){A(l,"class","language-html")},m(n,c){g(n,t,c),m(t,o),m(t,s),m(s,p),m(t,e),g(n,a,c),g(n,l,c),l.innerHTML=E},p:B,d(n){n&&i(t),n&&i(a),n&&i(l)}}}function O(r){let t,o;const s=[r[0],y];let p={$$slots:{default:[N]},$$scope:{ctx:r}};for(let e=0;e<s.length;e+=1)p=v(p,s[e]);return t=new D({props:p}),{c(){C(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,a){M(t,e,a),o=!0},p(e,[a]){const l=a&1?T(s,[a&1&&k(e[0]),a&0&&k(y)]):{};a&2&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){o||(q(t.$$.fragment,e),o=!0)},o(e){P(t.$$.fragment,e),o=!1},d(e){W(t,e)}}}const y={layout:"section",id:"html",h:"{@html ...}",docs:"https://svelte.dev/docs#template-syntax-html",tutorials:["https://svelte.dev/tutorial/html-tags"]};function R(r,t,o){return r.$$set=s=>{o(0,t=v(v({},t),$(s)))},t=$(t),[t]}class K extends b{constructor(t){super(),S(this,t,R,O,w,{})}}export{K as default,y as metadata};