import{S as f,i as m,s as _,C as l,w as h,x as g,y as v,z as $,A as u,f as b,t as x,B as y,N as p,l as U,m as w,n as k,h as i,p as S,b as E,E as M}from"./index-37ae0623.js";import{S as A}from"./Section-6b20cdf8.js";import"./index-05d60d5f.js";import"./Tutorial-0c4825ec.js";function B(r){let e,s=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>	
	import &#123; beforeUpdate, afterUpdate &#125; from 'svelte';
    
	beforeUpdate(() => &#123;
		// runs immediately before the DOM is updated		
	&#125;);

	afterUpdate(() => &#123;
		// runs once the DOM is in sync with new data
	&#125;);</code>`;return{c(){e=U("pre"),this.h()},l(a){e=w(a,"PRE",{class:!0});var n=k(e);n.forEach(i),this.h()},h(){S(e,"class","language-html")},m(a,n){E(a,e,n),e.innerHTML=s},p:M,d(a){a&&i(e)}}}function C(r){let e,s;const a=[r[0],d];let n={$$slots:{default:[B]},$$scope:{ctx:r}};for(let t=0;t<a.length;t+=1)n=l(n,a[t]);return e=new A({props:n}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,o){v(e,t,o),s=!0},p(t,[o]){const c=o&1?$(a,[o&1&&u(t[0]),o&0&&u(d)]):{};o&2&&(c.$$scope={dirty:o,ctx:t}),e.$set(c)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}const d={layout:"section",id:"beforeAfterUpdate",indent:!0,h:"before/afterUpdate",docs:"https://svelte.dev/docs#run-time-svelte-beforeupdate",tutorials:["https://svelte.dev/tutorial/update"]};function D(r,e,s){return r.$$set=a=>{s(0,e=l(l({},e),p(a)))},e=p(e),[e]}class H extends f{constructor(e){super(),m(this,e,D,C,_,{})}}export{H as default,d as metadata};
