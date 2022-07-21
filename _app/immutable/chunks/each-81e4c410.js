import{S as Se,i as Te,s as Re,C as ne,w as Oe,x as $e,y as Ne,z as Pe,A as fe,q as je,o as Ge,B as Ce,N as me,e as o,t as r,k as w,c,a as p,h as i,d as a,m as x,b as B,g as u,H as s,E as De}from"./index-26167588.js";import{S as He}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function Le(S){let t,f,d,g,l,h,T,F,H,y,ve=`<code class="language-html">&#123;#each arr as a&#125;
  &#123;a&#125;
&#123;/each&#125;

&#123;#each arr as a, index&#125;
  &#123;index+1&#125; - &#123;a&#125;
&#123;/each&#125;</code>`,L,m,J,O,$,K,Q,N,V,W,M,k,ge=`<code class="language-html">&#123;#each arr as a (a.id)&#125;
  &#123;index+1&#125; - &#123;a&#125;
&#123;/each&#125;

&#123;#each arr as a, index (a.id)&#125;
  &#123;index+1&#125; - &#123;a&#125;
&#123;/each&#125;</code>`,A,_,P,X,Y,j,Z,ee,q,E,ye=`<code class="language-html">&#123;#each items as &#123;id, foo, bar&#125; &#125; ... &#123;/each&#125;

&#123;#each items as &#123;id, ...rest&#125;, index (id)&#125; ... &#123;/each&#125;

&#123;#each arr as [key, value]&#125; ... &#123;/each&#125;</code>`,I,v,ae,G,C,te,se,U,b,ke=`<code class="language-html">&#123;#each todos as todo&#125;
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>&#123;todo.text&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
&#123;:else&#125;
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>No tasks today!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
&#123;/each&#125;</code>`;return{c(){t=o("p"),f=r("Iterating over any "),d=o("strong"),g=r("array or array-like value"),l=r(" (any object with a length property) can be done with an "),h=o("code"),T=r("{#each}"),F=r(`
block.`),H=w(),y=o("pre"),L=w(),m=o("p"),J=r("Use a "),O=o("strong"),$=o("code"),K=r("key"),Q=r(` if you want Svelte to diff the list when data changes, rather than adding or removing items at the end.
The key can be any object, but `),N=o("strong"),V=r("strings and numbers are recommended"),W=r(` since they allow identity to persist when the
objects
themselves change.`),M=w(),k=o("pre"),A=w(),_=o("p"),P=o("strong"),X=r("Destructuring"),Y=r(" and "),j=o("strong"),Z=r("rest patterns"),ee=r(" are possible."),q=w(),E=o("pre"),I=w(),v=o("p"),ae=r("An each block can also have an "),G=o("strong"),C=o("code"),te=r("{:else}"),se=r(" clause, which is rendered if the list is empty."),U=w(),b=o("pre"),this.h()},l(e){t=c(e,"P",{});var n=p(t);f=i(n,"Iterating over any "),d=c(n,"STRONG",{});var le=p(d);g=i(le,"array or array-like value"),le.forEach(a),l=i(n," (any object with a length property) can be done with an "),h=c(n,"CODE",{});var oe=p(h);T=i(oe,"{#each}"),oe.forEach(a),F=i(n,`
block.`),n.forEach(a),H=x(e),y=c(e,"PRE",{class:!0});var Ee=p(y);Ee.forEach(a),L=x(e),m=c(e,"P",{});var R=p(m);J=i(R,"Use a "),O=c(R,"STRONG",{});var re=p(O);$=c(re,"CODE",{});var ce=p($);K=i(ce,"key"),ce.forEach(a),re.forEach(a),Q=i(R,` if you want Svelte to diff the list when data changes, rather than adding or removing items at the end.
The key can be any object, but `),N=c(R,"STRONG",{});var pe=p(N);V=i(pe,"strings and numbers are recommended"),pe.forEach(a),W=i(R,` since they allow identity to persist when the
objects
themselves change.`),R.forEach(a),M=x(e),k=c(e,"PRE",{class:!0});var be=p(k);be.forEach(a),A=x(e),_=c(e,"P",{});var D=p(_);P=c(D,"STRONG",{});var ie=p(P);X=i(ie,"Destructuring"),ie.forEach(a),Y=i(D," and "),j=c(D,"STRONG",{});var ue=p(j);Z=i(ue,"rest patterns"),ue.forEach(a),ee=i(D," are possible."),D.forEach(a),q=x(e),E=c(e,"PRE",{class:!0});var we=p(E);we.forEach(a),I=x(e),v=c(e,"P",{});var z=p(v);ae=i(z,"An each block can also have an "),G=c(z,"STRONG",{});var he=p(G);C=c(he,"CODE",{});var de=p(C);te=i(de,"{:else}"),de.forEach(a),he.forEach(a),se=i(z," clause, which is rendered if the list is empty."),z.forEach(a),U=x(e),b=c(e,"PRE",{class:!0});var xe=p(b);xe.forEach(a),this.h()},h(){B(y,"class","language-html"),B(k,"class","language-html"),B(E,"class","language-html"),B(b,"class","language-html")},m(e,n){u(e,t,n),s(t,f),s(t,d),s(d,g),s(t,l),s(t,h),s(h,T),s(t,F),u(e,H,n),u(e,y,n),y.innerHTML=ve,u(e,L,n),u(e,m,n),s(m,J),s(m,O),s(O,$),s($,K),s(m,Q),s(m,N),s(N,V),s(m,W),u(e,M,n),u(e,k,n),k.innerHTML=ge,u(e,A,n),u(e,_,n),s(_,P),s(P,X),s(_,Y),s(_,j),s(j,Z),s(_,ee),u(e,q,n),u(e,E,n),E.innerHTML=ye,u(e,I,n),u(e,v,n),s(v,ae),s(v,G),s(G,C),s(C,te),s(v,se),u(e,U,n),u(e,b,n),b.innerHTML=ke},p:De,d(e){e&&a(t),e&&a(H),e&&a(y),e&&a(L),e&&a(m),e&&a(M),e&&a(k),e&&a(A),e&&a(_),e&&a(q),e&&a(E),e&&a(I),e&&a(v),e&&a(U),e&&a(b)}}}function Me(S){let t,f;const d=[S[0],_e];let g={$$slots:{default:[Le]},$$scope:{ctx:S}};for(let l=0;l<d.length;l+=1)g=ne(g,d[l]);return t=new He({props:g}),{c(){Oe(t.$$.fragment)},l(l){$e(t.$$.fragment,l)},m(l,h){Ne(t,l,h),f=!0},p(l,[h]){const T=h&1?Pe(d,[h&1&&fe(l[0]),h&0&&fe(_e)]):{};h&2&&(T.$$scope={dirty:h,ctx:l}),t.$set(T)},i(l){f||(je(t.$$.fragment,l),f=!0)},o(l){Ge(t.$$.fragment,l),f=!1},d(l){Ce(t,l)}}}const _e={layout:"section",id:"each",h:"{#each ...}",docs:"https://svelte.dev/docs#template-syntax-each",tutorials:["https://svelte.dev/tutorial/each-blocks","https://svelte.dev/tutorial/keyed-each-blocks"]};function Ae(S,t,f){return S.$$set=d=>{f(0,t=ne(ne({},t),me(d)))},t=me(t),[t]}class Be extends Se{constructor(t){super(),Te(this,t,Ae,Me,Re,{})}}export{Be as default,_e as metadata};
