"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5981],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),o=n(98587),a=(n(96540),n(15680)),c=["components"],i={title:"1.22.5"},l=void 0,s={unversionedId:"release-notes/1.22.5",id:"release-notes/1.22.5",title:"1.22.5",description:"Clients",source:"@site/../docs/release-notes/1.22.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.5",permalink:"/documentation/release-notes/1.22.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.5.md",tags:[],version:"current",frontMatter:{title:"1.22.5"}},u={},p=[{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements",level:3}],m={toc:p},f="wrapper";function y(e){var t=e.components,n=(0,o.A)(e,c);return(0,a.yg)(f,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: xrootd protocol as implementation needs a stat method ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2254"},"#2254"))))}y.isMDXComponent=!0}}]);