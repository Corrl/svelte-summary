import{S as P,i as q,s as B,C as x,w as H,x as I,y as R,z as j,A as y,q as k,o as z,B as A,N as E,e as _,t as f,k as D,c as h,a as v,h as g,d as m,m as L,b as M,g as w,H as u,E as N}from"./index-26167588.js";import{S as O}from"./Section-6b147be5.js";import"./index-6967b286.js";import"./Tutorial-ee6e922e.js";function T(p){let e,n,a,r,t,s,i,d,l,C='<code class="language-html">component.prop = value</code>';return{c(){e=_("p"),n=f("If a component is compiled with "),a=_("code"),r=f("accessors: true"),t=f(", each instance will have getters and setters corresponding to each of the component\u2019s props."),s=_("br"),i=f(`
Setting a value will cause a synchronous update.`),d=D(),l=_("pre"),this.h()},l(o){e=h(o,"P",{});var c=v(e);n=g(c,"If a component is compiled with "),a=h(c,"CODE",{});var $=v(a);r=g($,"accessors: true"),$.forEach(m),t=g(c,", each instance will have getters and setters corresponding to each of the component\u2019s props."),s=h(c,"BR",{}),i=g(c,`
Setting a value will cause a synchronous update.`),c.forEach(m),d=L(o),l=h(o,"PRE",{class:!0});var b=v(l);b.forEach(m),this.h()},h(){M(l,"class","language-html")},m(o,c){w(o,e,c),u(e,n),u(e,a),u(a,r),u(e,t),u(e,s),u(e,i),w(o,d,c),w(o,l,c),l.innerHTML=C},p:N,d(o){o&&m(e),o&&m(d),o&&m(l)}}}function F(p){let e,n;const a=[p[0],S];let r={$$slots:{default:[T]},$$scope:{ctx:p}};for(let t=0;t<a.length;t+=1)r=x(r,a[t]);return e=new O({props:r}),{c(){H(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){R(e,t,s),n=!0},p(t,[s]){const i=s&1?j(a,[s&1&&y(t[0]),s&0&&y(S)]):{};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}const S={layout:"section",indent:!0,id:"componentProps",h:"Component props",docs:"https://svelte.dev/docs#run-time-client-side-component-api-component-props"};function G(p,e,n){return p.$$set=a=>{n(0,e=x(x({},e),E(a)))},e=E(e),[e]}class V extends P{constructor(e){super(),q(this,e,G,F,B,{})}}export{V as default,S as metadata};
