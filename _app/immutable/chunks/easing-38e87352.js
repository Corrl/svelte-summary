import{S as y,i as b,s as E,C as p,w as S,x as k,y as A,z as B,A as g,f as C,t as F,B as j,N as v,l as c,r as d,m,n as w,u as f,h,p as x,b as q,H as u,E as z}from"./index-37ae0623.js";import{S as H}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function N(l){let e,s,n,o,t,a;return{c(){e=c("p"),s=d("Easing functions specify the rate of change over time and are useful when working with Svelte\u2019s built-in transitions and animations as well as the tweened and spring utilities."),n=c("br"),o=d(`
Find a complete list in the docs or explore them in the `),t=c("a"),a=d("ease visualiser"),this.h()},l(i){e=m(i,"P",{});var r=w(e);s=f(r,"Easing functions specify the rate of change over time and are useful when working with Svelte\u2019s built-in transitions and animations as well as the tweened and spring utilities."),n=m(r,"BR",{}),o=f(r,`
Find a complete list in the docs or explore them in the `),t=m(r,"A",{href:!0,rel:!0});var _=w(t);a=f(_,"ease visualiser"),_.forEach(h),r.forEach(h),this.h()},h(){x(t,"href","https://svelte.dev/examples/easing"),x(t,"rel","nofollow")},m(i,r){q(i,e,r),u(e,s),u(e,n),u(e,o),u(e,t),u(t,a)},p:z,d(i){i&&h(e)}}}function P(l){let e,s;const n=[l[0],$];let o={$$slots:{default:[N]},$$scope:{ctx:l}};for(let t=0;t<n.length;t+=1)o=p(o,n[t]);return e=new H({props:o}),{c(){S(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){A(e,t,a),s=!0},p(t,[a]){const i=a&1?B(n,[a&1&&g(t[0]),a&0&&g($)]):{};a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){F(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}const $={layout:"section",id:"easing",indent:!0,h:"easing",docs:"https://svelte.dev/docs#run-time-svelte-easing"};function R(l,e,s){return l.$$set=n=>{s(0,e=p(p({},e),v(n)))},e=v(e),[e]}class K extends y{constructor(e){super(),b(this,e,R,P,E,{})}}export{K as default,$ as metadata};