(function(){"use strict";var n={1027:function(n,r,e){var t=e(9242),o=e(3396);function u(n,r,e,t,u,i){const a=(0,o.up)("Navbar"),c=(0,o.up)("router-view"),l=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,{logo:u.logo_src,alt:u.app_name},null,8,["logo","alt"]),(0,o.Wm)(c),(0,o.Wm)(l)],64)}const i={id:"nav"},a=["src","alt"],c=(0,o.Uk)("Home"),l=(0,o.Uk)("Pedidos");function f(n,r,e,t,u,f){const d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(d,{to:"/",id:"logo-url"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.logo,alt:e.alt,id:"logo"},null,8,a)])),_:1}),(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[c])),_:1}),(0,o.Wm)(d,{to:"/Pedidos"},{default:(0,o.w5)((()=>[l])),_:1})])}var d={name:"Navbar",props:["logo","alt"]},s=e(89);const p=(0,s.Z)(d,[["render",f],["__scopeId","data-v-45d0cc52"]]);var v=p;const m=n=>((0,o.dD)("data-v-5f1f4a39"),n=n(),(0,o.Cn)(),n),g={id:"footer"},b=m((()=>(0,o._)("p",null,"Your Burger © 2022",-1))),h=[b];function y(n,r,e,t,u,i){return(0,o.wg)(),(0,o.iD)("footer",g,h)}var _={name:"Footer"};const w=(0,s.Z)(_,[["render",y],["__scopeId","data-v-5f1f4a39"]]);var k=w,O={components:{Navbar:v,Footer:k},data(){return{logo_src:"/img/logo.png",app_name:"Your Burger"}}};const j=(0,s.Z)(O,[["render",u]]);var P=j,B=e(678);const C=(0,o._)("div",{class:"main-container"},[(0,o._)("h1",null,"build your burger"),(0,o._)("p",null,"Formulario")],-1);function T(n,r,e,t,u,i){const a=(0,o.up)("Banner");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a),C])}function W(n,r,e,t,u,i){return(0,o.wg)(),(0,o.iD)("p",null,"Burger banner")}var D={name:"Banner"};const E=(0,s.Z)(D,[["render",W]]);var F=E,N={name:"Home",components:{Banner:F}};const S=(0,s.Z)(N,[["render",T]]);var Z=S;const x=[{path:"/",name:"home",component:Z},{path:"/Pedidos",name:"Pedidos",component:()=>e.e(550).then(e.bind(e,7161))}],A=(0,B.p7)({history:(0,B.PO)("/"),routes:x});var H=A;(0,t.ri)(P).use(H).mount("#app")}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var u=r[t]={exports:{}};return n[t](u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(r,t,o,u){if(!t){var i=1/0;for(f=0;f<n.length;f++){t=n[f][0],o=n[f][1],u=n[f][2];for(var a=!0,c=0;c<t.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](t[c])}))?t.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(f--,1);var l=o();void 0!==l&&(r=l)}}return r}u=u||0;for(var f=n.length;f>0&&n[f-1][2]>u;f--)n[f]=n[f-1];n[f]=[t,o,u]}}(),function(){e.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(r,{a:r}),r}}(),function(){e.d=function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(r,t){return e.f[t](n,r),r}),[]))}}(),function(){e.u=function(n){return"js/pedidos.7d5038bc.js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={},r="your-burger:";e.l=function(t,o,u,i){if(n[t])n[t].push(o);else{var a,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+u){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",r+u),a.src=t),n[t]=[o];var s=function(r,e){a.onerror=a.onload=null,clearTimeout(p);var o=n[t];if(delete n[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(e)})),r)return r(e)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(r,t){var o=e.o(n,r)?n[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(e,t){o=n[r]=[e,t]}));t.push(o[2]=u);var i=e.p+e.u(r),a=new Error,c=function(t){if(e.o(n,r)&&(o=n[r],0!==o&&(n[r]=void 0),o)){var u=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};e.l(i,c,"chunk-"+r,r)}},e.O.j=function(r){return 0===n[r]};var r=function(r,t){var o,u,i=t[0],a=t[1],c=t[2],l=0;if(i.some((function(r){return 0!==n[r]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var f=c(e)}for(r&&r(t);l<i.length;l++)u=i[l],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(f)},t=self["webpackChunkyour_burger"]=self["webpackChunkyour_burger"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(1027)}));t=e.O(t)})();
//# sourceMappingURL=app.1170aebe.js.map