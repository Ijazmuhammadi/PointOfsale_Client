(()=>{"use strict";var e,_={},v={};function r(e){var f=v[e];if(void 0!==f)return f.exports;var t=v[e]={exports:{}};return _[e].call(t.exports,t,t.exports,r),t.exports}r.m=_,e=[],r.O=(f,t,n,i)=>{if(!t){var a=1/0;for(o=0;o<e.length;o++){for(var[t,n,i]=e[o],u=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every(b=>r.O[b](t[l]))?t.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(o--,1);var c=n();void 0!==c&&(f=c)}}return f}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[t,n,i]},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var o={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(u=>o[u]=()=>t[u]);return o.default=()=>t,r.d(i,o),i}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>e+"."+{233:"cb46ab2a48427d52845f",487:"424c201eaf4732145087"}[e]+".js",r.miniCssF=e=>"styles.5dd4cbc87f7e05bed5e3.css",r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="point-of-sale:";r.l=(t,n,i,o)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var s=l[c];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==f+i){a=s;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+i),a.src=r.tu(t)),e[t]=[n];var d=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(y=>y(b)),g)return g(b)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tu=f=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(f))})(),r.p="",(()=>{var e={666:0};r.f.j=(n,i)=>{var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)i.push(o[2]);else if(666!=n){var a=new Promise((s,d)=>o=e[n]=[s,d]);i.push(o[2]=a);var u=r.p+r.u(n),l=new Error;r.l(u,s=>{if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var d=s&&("load"===s.type?"missing":s.type),p=s&&s.target&&s.target.src;l.message="Loading chunk "+n+" failed.\n("+d+": "+p+")",l.name="ChunkLoadError",l.type=d,l.request=p,o[1](l)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,i)=>{var l,c,[o,a,u]=i,s=0;for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(u)var d=u(r);for(n&&n(i);s<o.length;s++)r.o(e,c=o[s])&&e[c]&&e[c][0](),e[o[s]]=0;return r.O(d)},t=self.webpackChunkpoint_of_sale=self.webpackChunkpoint_of_sale||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();