"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"1.16.1"},s=void 0,u={unversionedId:"release-notes/1.16.1",id:"release-notes/1.16.1",title:"1.16.1",description:"General",source:"@site/../docs/release-notes/1.16.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.1",permalink:"/documentation/release-notes/1.16.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.1.md",tags:[],version:"current",frontMatter:{title:"1.16.1"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Authz: Signed URL support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1054"},"#1054")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: core: exception handler truncates some error messages ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1116"},"#1116")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: schema: add root and webdav functional test for atlas ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1117"},"#1117")),(0,i.kt)("li",{parentName:"ul"},"Messaging: Create a new RULE_OK notification for all rules ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1115"},"#1115"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: core.account_limit.get_rse_account_usage should liste accounts who have usage, but no quota ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1045"},"#1045")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: regex for dids in cms schema not matching '-'  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1128"},"#1128")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Transfers : Bug with verify checksum ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1118"},"#1118"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: list-rules CLI should give a warning if it does not find a rule but looks on content of a container/DS ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1077"},"#1077")),(0,i.kt)("li",{parentName:"ul"},"Testing: Extend the client validation with test_bin_rucio.py on Travis ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1036"},"#1036"))),(0,i.kt)("h3",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Fix in rucio/bin, empty md5 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1104"},"#1104"))),(0,i.kt)("h2",{id:"webui"},"WebUI"),(0,i.kt)("h3",{id:"enhancements-2"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WebUI: lifetime field for rule creation should be pre-filled with 180 days ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1127"},"#1127"))))}h.isMDXComponent=!0}}]);