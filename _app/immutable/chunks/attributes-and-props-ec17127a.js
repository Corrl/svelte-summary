import{S as it,i as ut,s as dt,C as Oa,w as kt,x as mt,y as ft,z as ht,A as Za,q as vt,o as _t,B as gt,N as at,e,t as p,k as m,c as n,a as l,h as r,d as s,m as f,b as oa,g as u,H as t,E as Et}from"./index-26167588.js";import{S as bt}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function yt(C){let o,d,_,y,i,h,q,k,O,pa,ra,I,ca,ia,R,ua,da,B,ka,ma,Q,w,st=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;false&#125;</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>This input field is not required<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;null&#125;</span><span class="token punctuation">></span></span>This div has no title attribute<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,V,v,fa,N,ha,va,D,_a,ga,X,x,et=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;disabled&#125;</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">&#123;disabled&#125;</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;value&#125;/</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token attr-name">&#123;value&#125;</span><span class="token punctuation">/></span></span></code>`,Y,$,G,Ea,ba,Z,M,ya,aa,T,nt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child.svelte'</span>

    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">42</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">&#123;...props&#125;</span><span class="token punctuation">/></span></span></code>`,ta,P,wa,sa,L,lt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">let</span> name
    <span class="token keyword">export</span> <span class="token keyword">let</span> age
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,ea,E,b,j,J,xa,$a,U,Ta,La,Sa,S,W,z,Ca,qa,H,Ma,F,Pa;return{c(){o=e("ul"),d=e("li"),_=p("By default, attributes work exactly like their HTML counterparts. As in HTML, values may be unquoted."),y=m(),i=e("li"),h=p("Attribute values can contain JavaScript expressions."),q=m(),k=e("li"),O=e("em"),pa=p("Boolean attributes"),ra=p(` are included on the element if
their value is `),I=e("em"),ca=p("truthy"),ia=p(" and excluded if it\u2019s "),R=e("em"),ua=p("falsy"),da=p(". All other attributes are included unless their value is "),B=e("em"),ka=p(`nullish (null
or undefined)`),ma=p("."),Q=m(),w=e("pre"),V=m(),v=e("p"),fa=p("When the attribute or property name and its value match "),N=e("code"),ha=p("name={name}"),va=p(", the shorthand "),D=e("code"),_a=p("{name}"),ga=p(" can be used. These are equivalent:"),X=m(),x=e("pre"),Y=m(),$=e("p"),G=e("strong"),Ea=p("Spread attributes"),ba=p(" allow many attributes or properties to be passed to an element or component at once."),Z=m(),M=e("h4"),ya=p("Parent.svelte"),aa=m(),T=e("pre"),ta=m(),P=e("h4"),wa=p("Child.svelte"),sa=m(),L=e("pre"),ea=m(),E=e("ul"),b=e("li"),j=e("strong"),J=e("code"),xa=p("$$props"),$a=p(" references all props that are passed to a component, including ones that are not declared with export. "),U=e("strong"),Ta=p(`It is not
generally recommended, as it is difficult for Svelte to optimise.`),La=p(` But it can be useful in rare cases \u2013 for example, when
you don\u2019t know at compile time what props might be passed to a component.`),Sa=m(),S=e("li"),W=e("strong"),z=e("code"),Ca=p("$$restProps"),qa=p(" contains only the props which are not declared with export. "),H=e("strong"),Ma=p("It shares the same optimisation problems as "),F=e("code"),Pa=p("$$props"),this.h()},l(a){o=n(a,"UL",{});var c=l(o);d=n(c,"LI",{});var Ia=l(d);_=r(Ia,"By default, attributes work exactly like their HTML counterparts. As in HTML, values may be unquoted."),Ia.forEach(s),y=f(c),i=n(c,"LI",{});var Ra=l(i);h=r(Ra,"Attribute values can contain JavaScript expressions."),Ra.forEach(s),q=f(c),k=n(c,"LI",{});var g=l(k);O=n(g,"EM",{});var Ba=l(O);pa=r(Ba,"Boolean attributes"),Ba.forEach(s),ra=r(g,` are included on the element if
their value is `),I=n(g,"EM",{});var Na=l(I);ca=r(Na,"truthy"),Na.forEach(s),ia=r(g," and excluded if it\u2019s "),R=n(g,"EM",{});var Da=l(R);ua=r(Da,"falsy"),Da.forEach(s),da=r(g,". All other attributes are included unless their value is "),B=n(g,"EM",{});var Ga=l(B);ka=r(Ga,`nullish (null
or undefined)`),Ga.forEach(s),ma=r(g,"."),g.forEach(s),c.forEach(s),Q=f(a),w=n(a,"PRE",{class:!0});var ot=l(w);ot.forEach(s),V=f(a),v=n(a,"P",{});var A=l(v);fa=r(A,"When the attribute or property name and its value match "),N=n(A,"CODE",{});var ja=l(N);ha=r(ja,"name={name}"),ja.forEach(s),va=r(A,", the shorthand "),D=n(A,"CODE",{});var Ja=l(D);_a=r(Ja,"{name}"),Ja.forEach(s),ga=r(A," can be used. These are equivalent:"),A.forEach(s),X=f(a),x=n(a,"PRE",{class:!0});var pt=l(x);pt.forEach(s),Y=f(a),$=n(a,"P",{});var Ha=l($);G=n(Ha,"STRONG",{});var Ua=l(G);Ea=r(Ua,"Spread attributes"),Ua.forEach(s),ba=r(Ha," allow many attributes or properties to be passed to an element or component at once."),Ha.forEach(s),Z=f(a),M=n(a,"H4",{});var Wa=l(M);ya=r(Wa,"Parent.svelte"),Wa.forEach(s),aa=f(a),T=n(a,"PRE",{class:!0});var rt=l(T);rt.forEach(s),ta=f(a),P=n(a,"H4",{});var za=l(P);wa=r(za,"Child.svelte"),za.forEach(s),sa=f(a),L=n(a,"PRE",{class:!0});var ct=l(L);ct.forEach(s),ea=f(a),E=n(a,"UL",{});var na=l(E);b=n(na,"LI",{});var K=l(b);j=n(K,"STRONG",{});var Fa=l(j);J=n(Fa,"CODE",{});var Ka=l(J);xa=r(Ka,"$$props"),Ka.forEach(s),Fa.forEach(s),$a=r(K," references all props that are passed to a component, including ones that are not declared with export. "),U=n(K,"STRONG",{});var Qa=l(U);Ta=r(Qa,`It is not
generally recommended, as it is difficult for Svelte to optimise.`),Qa.forEach(s),La=r(K,` But it can be useful in rare cases \u2013 for example, when
you don\u2019t know at compile time what props might be passed to a component.`),K.forEach(s),Sa=f(na),S=n(na,"LI",{});var la=l(S);W=n(la,"STRONG",{});var Va=l(W);z=n(Va,"CODE",{});var Xa=l(z);Ca=r(Xa,"$$restProps"),Xa.forEach(s),Va.forEach(s),qa=r(la," contains only the props which are not declared with export. "),H=n(la,"STRONG",{});var Aa=l(H);Ma=r(Aa,"It shares the same optimisation problems as "),F=n(Aa,"CODE",{});var Ya=l(F);Pa=r(Ya,"$$props"),Ya.forEach(s),Aa.forEach(s),la.forEach(s),na.forEach(s),this.h()},h(){oa(w,"class","language-html"),oa(x,"class","language-html"),oa(T,"class","language-html"),oa(L,"class","language-html")},m(a,c){u(a,o,c),t(o,d),t(d,_),t(o,y),t(o,i),t(i,h),t(o,q),t(o,k),t(k,O),t(O,pa),t(k,ra),t(k,I),t(I,ca),t(k,ia),t(k,R),t(R,ua),t(k,da),t(k,B),t(B,ka),t(k,ma),u(a,Q,c),u(a,w,c),w.innerHTML=st,u(a,V,c),u(a,v,c),t(v,fa),t(v,N),t(N,ha),t(v,va),t(v,D),t(D,_a),t(v,ga),u(a,X,c),u(a,x,c),x.innerHTML=et,u(a,Y,c),u(a,$,c),t($,G),t(G,Ea),t($,ba),u(a,Z,c),u(a,M,c),t(M,ya),u(a,aa,c),u(a,T,c),T.innerHTML=nt,u(a,ta,c),u(a,P,c),t(P,wa),u(a,sa,c),u(a,L,c),L.innerHTML=lt,u(a,ea,c),u(a,E,c),t(E,b),t(b,j),t(j,J),t(J,xa),t(b,$a),t(b,U),t(U,Ta),t(b,La),t(E,Sa),t(E,S),t(S,W),t(W,z),t(z,Ca),t(S,qa),t(S,H),t(H,Ma),t(H,F),t(F,Pa)},p:Et,d(a){a&&s(o),a&&s(Q),a&&s(w),a&&s(V),a&&s(v),a&&s(X),a&&s(x),a&&s(Y),a&&s($),a&&s(Z),a&&s(M),a&&s(aa),a&&s(T),a&&s(ta),a&&s(P),a&&s(sa),a&&s(L),a&&s(ea),a&&s(E)}}}function wt(C){let o,d;const _=[C[0],tt];let y={$$slots:{default:[yt]},$$scope:{ctx:C}};for(let i=0;i<_.length;i+=1)y=Oa(y,_[i]);return o=new bt({props:y}),{c(){kt(o.$$.fragment)},l(i){mt(o.$$.fragment,i)},m(i,h){ft(o,i,h),d=!0},p(i,[h]){const q=h&1?ht(_,[h&1&&Za(i[0]),h&0&&Za(tt)]):{};h&2&&(q.$$scope={dirty:h,ctx:i}),o.$set(q)},i(i){d||(vt(o.$$.fragment,i),d=!0)},o(i){_t(o.$$.fragment,i),d=!1},d(i){gt(o,i)}}}const tt={layout:"section",id:"attributesAndProps",h:"Attributes & Props",docs:"https://svelte.dev/docs#template-syntax-attributes-and-props",tutorials:["https://svelte.dev/tutorial/spread-props"]};function xt(C,o,d){return C.$$set=_=>{d(0,o=Oa(Oa({},o),at(_)))},o=at(o),[o]}class Ct extends it{constructor(o){super(),ut(this,o,xt,wt,dt,{})}}export{Ct as default,tt as metadata};
