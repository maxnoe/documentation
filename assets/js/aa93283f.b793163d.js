"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7252],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>m});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,m=u["".concat(i,".").concat(y)]||u[y]||f[y]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},71492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(45072),o=r(95656),a=(r(11504),r(95788)),c=["components"],l={title:"1.19.4.post1"},i=void 0,s={unversionedId:"release-notes/1.19.4.post1",id:"release-notes/1.19.4.post1",title:"1.19.4.post1",description:"General",source:"@site/../docs/release-notes/1.19.4.post1.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.4.post1",permalink:"/documentation/release-notes/1.19.4.post1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.4.post1.md",tags:[],version:"current",frontMatter:{title:"1.19.4.post1"}},p={},u=[{value:"General",id:"general",level:2},{value:"Bugs",id:"bugs",level:3}],f={toc:u},y="wrapper";function m(e){var t=e.components,r=(0,o.c)(e,c);return(0,a.yg)(y,(0,n.c)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Sorting of replicas in legacy RSE field corrupted ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2363"},"#2363"))))}m.isMDXComponent=!0}}]);