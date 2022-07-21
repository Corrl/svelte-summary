import{S as R,i as T,s as Y,C,w as j,x as z,y as B,z as D,A as w,q as G,o as L,B as M,N as P,e as _,t as f,k as A,c as k,a as v,h,d as r,m as H,b as F,g,H as i,E as I}from"./index-26167588.js";import{S as J}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function K(m){let s,o,p,n,t=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
  <span class="token attr-name"><span class="token namespace">bind:</span>value</span>
  <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;0&#125;</span>
  <span class="token attr-name">--rail-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span>
  <span class="token attr-name">--track-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgb(0, 0, 255)<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,e,l,u,y,d,S,$,E;return{c(){s=_("p"),o=f("You can also pass styles as props to components for the purposes of theming, using CSS custom properties."),p=A(),n=_("pre"),e=A(),l=_("p"),u=_("strong"),y=f("An extra "),d=_("code"),S=f("<div>"),$=f(" wrapper element is added"),E=f(" - be mindful of that."),this.h()},l(a){s=k(a,"P",{});var c=v(s);o=h(c,"You can also pass styles as props to components for the purposes of theming, using CSS custom properties."),c.forEach(r),p=H(a),n=k(a,"PRE",{class:!0});var O=v(n);O.forEach(r),e=H(a),l=k(a,"P",{});var b=v(l);u=k(b,"STRONG",{});var x=v(u);y=h(x,"An extra "),d=k(x,"CODE",{});var q=v(d);S=h(q,"<div>"),q.forEach(r),$=h(x," wrapper element is added"),x.forEach(r),E=h(b," - be mindful of that."),b.forEach(r),this.h()},h(){F(n,"class","language-html")},m(a,c){g(a,s,c),i(s,o),g(a,p,c),g(a,n,c),n.innerHTML=t,g(a,e,c),g(a,l,c),i(l,u),i(u,y),i(u,d),i(d,S),i(u,$),i(l,E)},p:I,d(a){a&&r(s),a&&r(p),a&&r(n),a&&r(e),a&&r(l)}}}function Q(m){let s,o;const p=[m[0],N];let n={$$slots:{default:[K]},$$scope:{ctx:m}};for(let t=0;t<p.length;t+=1)n=C(n,p[t]);return s=new J({props:n}),{c(){j(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,e){B(s,t,e),o=!0},p(t,[e]){const l=e&1?D(p,[e&1&&w(t[0]),e&0&&w(N)]):{};e&2&&(l.$$scope={dirty:e,ctx:t}),s.$set(l)},i(t){o||(G(s.$$.fragment,t),o=!0)},o(t){L(s.$$.fragment,t),o=!1},d(t){M(s,t)}}}const N={layout:"section",id:"compStyleProps",indent:!0,h:"--style-props",docs:"https://svelte.dev/docs#template-syntax-component-directives---style-props"};function U(m,s,o){return m.$$set=p=>{o(0,s=C(C({},s),P(p)))},s=P(s),[s]}class ss extends R{constructor(s){super(),T(this,s,U,Q,Y,{})}}export{ss as default,N as metadata};