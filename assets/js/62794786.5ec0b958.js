"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"1.23.7"},s=void 0,u={unversionedId:"release-notes/1.23.7",id:"release-notes/1.23.7",title:"1.23.7",description:"General",source:"@site/../docs/release-notes/1.23.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.7",permalink:"/documentation/release-notes/1.23.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.7.md",tags:[],version:"current",frontMatter:{title:"1.23.7"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Add functional Flask endpoints ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1817"},"#1817"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Provide a better error description for list_dataset_replicas_bulk client API ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3981"},"#3981")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Protection for negative ranking needed in multihop resolve algorithm ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3997"},"#3997"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Incomplete XML returned when calling list_replicas with metalink option ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2029"},"#2029")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Problem handling unicode characters ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2915"},"#2915")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Caching collisions with rse_attributes and rse_info ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3998"},"#3998")),(0,i.kt)("li",{parentName:"ul"},"Deletion: Integrity error when deleting last replica ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3965"},"#3965")),(0,i.kt)("li",{parentName:"ul"},"Release management: Using the new pip resolver ends in an endless-loop ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4006"},"#4006")),(0,i.kt)("li",{parentName:"ul"},"Transfers: source replica expression ignored for multi-hop transfers ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4029"},"#4029"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: xrootd: stat broken on py3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4004"},"#4004"))))}f.isMDXComponent=!0}}]);