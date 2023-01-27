"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],u={title:"1.18.0"},s=void 0,o={unversionedId:"release-notes/1.18.0",id:"release-notes/1.18.0",title:"1.18.0",description:"Upgrade instructions",source:"@site/../docs/release-notes/1.18.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.0",permalink:"/documentation/release-notes/1.18.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.0.md",tags:[],version:"current",frontMatter:{title:"1.18.0"}},c={},p=[{value:"Upgrade instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Features",id:"features-1",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrade-instructions"},"Upgrade instructions"),(0,i.kt)("p",null,"This feature release requires a database schema update. Please consult the documentation about updating your database schema."),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Generic metadata support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1195"},"#1195")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Extend the bad_replicas table with bytes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1370"},"#1370")),(0,i.kt)("li",{parentName:"ul"},"Rules: add_rule on a constituent should make rule on archive ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1376"},"#1376"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release management: Change urllib3 version to ",">","=1.23 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1523"},"#1523")),(0,i.kt)("li",{parentName:"ul"},"Release management: Change flask version to ",">","=0.12.3 due to CVE-2018-1000656 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1524"},"#1524"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release management: pip install rucio fails with newer versions of pip ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1463"},"#1463"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: removing download() method from downloadclient ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1378"},"#1378")),(0,i.kt)("li",{parentName:"ul"},"Clients: Human friendly limit setting ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1529"},"#1529"))),(0,i.kt)("h3",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Using summary file in upload API will crash ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1532"},"#1532"))),(0,i.kt)("h2",{id:"webui"},"WebUI"),(0,i.kt)("h3",{id:"features-1"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WebUI: Rucio UI RSE admin view ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/80"},"#80"))))}d.isMDXComponent=!0}}]);