"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"1.24.5"},s=void 0,u={unversionedId:"release-notes/1.24.5",id:"release-notes/1.24.5",title:"1.24.5",description:"General",source:"@site/../docs/release-notes/1.24.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.5",permalink:"/documentation/release-notes/1.24.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.5.md",tags:[],version:"current",frontMatter:{title:"1.24.5"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Policies: Xenon LFN2PFN function ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4336"},"#4336")),(0,i.kt)("li",{parentName:"ul"},"Testing: Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"links")," in docker-compose ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4316"},"#4316"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deletion: Reaper2 __check_rse_usage issues ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4341"},"#4341")),(0,i.kt)("li",{parentName:"ul"},"Deletion: list_and_mark_unlocked_replicas needs to handle BEING_DELETED replicas ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4342"},"#4342")),(0,i.kt)("li",{parentName:"ul"},"Deletion: reaper2 jumps out if deletion loop if an RSE has no delete protocol ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4345"},"#4345")),(0,i.kt)("li",{parentName:"ul"},"REST & API: Flask endpoints return error with wrong Content-Type where webpy endpoints don't ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4314"},"#4314")),(0,i.kt)("li",{parentName:"ul"},"Rules: core/rule.py reencodes meta over and over again ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4337"},"#4337"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Documentation: "rucio download --no-subdir" behavior is different from its documentation ',(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4323"},"#4323"))))}d.isMDXComponent=!0}}]);