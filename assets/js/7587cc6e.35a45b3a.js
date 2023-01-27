"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"1.20.8"},s=void 0,u={unversionedId:"release-notes/1.20.8",id:"release-notes/1.20.8",title:"1.20.8",description:"General",source:"@site/../docs/release-notes/1.20.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.8",permalink:"/documentation/release-notes/1.20.8",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.8.md",tags:[],version:"current",frontMatter:{title:"1.20.8"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Core & Internals: Datatype to store a DID ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3013"},"#3013")),(0,o.kt)("li",{parentName:"ul"},"Documentation: Add demons --run-once examples to docker documentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2996"},"#2996"))),(0,o.kt)("h3",{id:"bugs"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Core & Internals: alembic: move schema back to callable for interactive use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3039"},"#3039")),(0,o.kt)("li",{parentName:"ul"},'Messaging: Hermes triggers SSL "truncation attack" errors on the message brokers ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2861"},"#2861")),(0,o.kt)("li",{parentName:"ul"},"Recovery: minos-expiration doesn't handle properly ReplicaNotFound ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3028"},"#3028"))),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clients: Remove DownloadClient.download_file_from_archive and rsemanager.download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2021"},"#2021")),(0,o.kt)("li",{parentName:"ul"},"Clients: checksum after download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2399"},"#2399")),(0,o.kt)("li",{parentName:"ul"},"Clients: rucio download should return a clear message if a DID doesn't exist ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2661"},"#2661")),(0,o.kt)("li",{parentName:"ul"},"Clients: Add rse update support in rucio-admin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3022"},"#3022"))),(0,o.kt)("h3",{id:"bugs-1"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clients: ConfigNotFound exception not handled in rucio-admin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3019"},"#3019"))))}d.isMDXComponent=!0}}]);