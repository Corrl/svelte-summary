import{S as y,i as $,s as S,C as m,w,x as E,y as C,z as b,A as d,f as O,t as T,B as j,N as f,l as v,r as c,m as h,n as g,u as p,h as _,b as q,H as i,E as z}from"./index-37ae0623.js";import{S as A}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function B(r){let e,a,o,l,t;return{c(){e=v("p"),a=c("The "),o=v("code"),l=c("<svelte:options>"),t=c(" element allows you to specify compiler options.")},l(s){e=h(s,"P",{});var n=g(e);a=p(n,"The "),o=h(n,"CODE",{});var u=g(o);l=p(u,"<svelte:options>"),u.forEach(_),t=p(n," element allows you to specify compiler options."),n.forEach(_)},m(s,n){q(s,e,n),i(e,a),i(e,o),i(o,l),i(e,t)},p:z,d(s){s&&_(e)}}}function D(r){let e,a;const o=[r[0],x];let l={$$slots:{default:[B]},$$scope:{ctx:r}};for(let t=0;t<o.length;t+=1)l=m(l,o[t]);return e=new A({props:l}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n=s&1?b(o,[s&1&&d(t[0]),s&0&&d(x)]):{};s&2&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}const x={layout:"section",id:"svelteOptions",h:"<svelte:options>",docs:"https://svelte.dev/docs#template-syntax-svelte-options",tutorials:["https://svelte.dev/tutorial/svelte-options"]};function H(r,e,a){return r.$$set=o=>{a(0,e=m(m({},e),f(o)))},e=f(e),[e]}class G extends y{constructor(e){super(),$(this,e,H,D,S,{})}}export{G as default,x as metadata};