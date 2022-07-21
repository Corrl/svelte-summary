import{S as E,i as C,s as S,C as x,w as T,x as j,y as q,z as H,A as v,q as P,o as z,B as A,N as b,e as _,t as d,k as B,c as m,a as f,h,d as i,m as D,b as L,g,H as u,E as M}from"./index-26167588.js";import{S as N}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function O(r){let a,o,e,p,t,s,c,y=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">let</span> boxes<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

&#123;#each boxes as box&#125;
	&#123;@const area = box.width * box.height&#125;
	&#123;box.width&#125; * &#123;box.height&#125; = &#123;area&#125;
&#123;/each&#125;</code>`;return{c(){a=_("p"),o=d("The "),e=_("code"),p=d("{@const ...}"),t=d(" tag defines a local constant."),s=B(),c=_("pre"),this.h()},l(n){a=m(n,"P",{});var l=f(a);o=h(l,"The "),e=m(l,"CODE",{});var k=f(e);p=h(k,"{@const ...}"),k.forEach(i),t=h(l," tag defines a local constant."),l.forEach(i),s=D(n),c=m(n,"PRE",{class:!0});var w=f(c);w.forEach(i),this.h()},h(){L(c,"class","language-html")},m(n,l){g(n,a,l),u(a,o),u(a,e),u(e,p),u(a,t),g(n,s,l),g(n,c,l),c.innerHTML=y},p:M,d(n){n&&i(a),n&&i(s),n&&i(c)}}}function R(r){let a,o;const e=[r[0],$];let p={$$slots:{default:[O]},$$scope:{ctx:r}};for(let t=0;t<e.length;t+=1)p=x(p,e[t]);return a=new N({props:p}),{c(){T(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,s){q(a,t,s),o=!0},p(t,[s]){const c=s&1?H(e,[s&1&&v(t[0]),s&0&&v($)]):{};s&2&&(c.$$scope={dirty:s,ctx:t}),a.$set(c)},i(t){o||(P(a.$$.fragment,t),o=!0)},o(t){z(a.$$.fragment,t),o=!1},d(t){A(a,t)}}}const $={layout:"section",id:"const",h:"{@const ...}",docs:"https://svelte.dev/docs#template-syntax-const"};function F(r,a,o){return r.$$set=e=>{o(0,a=x(x({},a),b(e)))},a=b(a),[a]}class Q extends E{constructor(a){super(),C(this,a,F,R,S,{})}}export{Q as default,$ as metadata};
