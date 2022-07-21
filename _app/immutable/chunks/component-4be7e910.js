import{S as U,i as V,s as W,C as H,w as X,x as Y,y as Z,z as tt,A as z,f as st,t as at,B as nt,N as B,l as m,r,a as P,m as _,n as f,u,h as e,c as b,p as D,b as h,H as o,E as et}from"./index-37ae0623.js";import{S as ot}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function lt(v){let t,c,p,g,a,l,y,R,E,A,C,x,k,I=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// logic</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- markup --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* styles */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,$,i,N,S,G,O,T,d,J='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span><span class="token punctuation">/></span></span></code>';return{c(){t=m("p"),c=r("There are three sections: "),p=m("strong"),g=r("script"),a=r(", "),l=m("strong"),y=r("markup"),R=r(" and "),E=m("strong"),A=r("styles"),C=r(". All are optional."),x=P(),k=m("pre"),$=P(),i=m("p"),N=r("A Svelte component has to start with a "),S=m("strong"),G=r("capital letter"),O=r("."),T=P(),d=m("pre"),this.h()},l(s){t=_(s,"P",{});var n=f(t);c=u(n,"There are three sections: "),p=_(n,"STRONG",{});var j=f(p);g=u(j,"script"),j.forEach(e),a=u(n,", "),l=_(n,"STRONG",{});var L=f(l);y=u(L,"markup"),L.forEach(e),R=u(n," and "),E=_(n,"STRONG",{});var M=f(E);A=u(M,"styles"),M.forEach(e),C=u(n,". All are optional."),n.forEach(e),x=b(s),k=_(s,"PRE",{class:!0});var K=f(k);K.forEach(e),$=b(s),i=_(s,"P",{});var w=f(i);N=u(w,"A Svelte component has to start with a "),S=_(w,"STRONG",{});var q=f(S);G=u(q,"capital letter"),q.forEach(e),O=u(w,"."),w.forEach(e),T=b(s),d=_(s,"PRE",{class:!0});var Q=f(d);Q.forEach(e),this.h()},h(){D(k,"class","language-html"),D(d,"class","language-html")},m(s,n){h(s,t,n),o(t,c),o(t,p),o(p,g),o(t,a),o(t,l),o(l,y),o(t,R),o(t,E),o(E,A),o(t,C),h(s,x,n),h(s,k,n),k.innerHTML=I,h(s,$,n),h(s,i,n),o(i,N),o(i,S),o(S,G),o(i,O),h(s,T,n),h(s,d,n),d.innerHTML=J},p:et,d(s){s&&e(t),s&&e(x),s&&e(k),s&&e($),s&&e(i),s&&e(T),s&&e(d)}}}function pt(v){let t,c;const p=[v[0],F];let g={$$slots:{default:[lt]},$$scope:{ctx:v}};for(let a=0;a<p.length;a+=1)g=H(g,p[a]);return t=new ot({props:g}),{c(){X(t.$$.fragment)},l(a){Y(t.$$.fragment,a)},m(a,l){Z(t,a,l),c=!0},p(a,[l]){const y=l&1?tt(p,[l&1&&z(a[0]),l&0&&z(F)]):{};l&2&&(y.$$scope={dirty:l,ctx:a}),t.$set(y)},i(a){c||(st(t.$$.fragment,a),c=!0)},o(a){at(t.$$.fragment,a),c=!1},d(a){nt(t,a)}}}const F={layout:"section",id:"component",h:"Component",docs:"https://svelte.dev/docs#component-format",tutorials:["https://svelte.dev/tutorial/basics"]};function ct(v,t,c){return v.$$set=p=>{c(0,t=H(H({},t),B(p)))},t=B(t),[t]}class _t extends U{constructor(t){super(),V(this,t,ct,pt,W,{})}}export{_t as default,F as metadata};