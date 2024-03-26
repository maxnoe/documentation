"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5203],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},74842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(58168),i=r(98587),a=(r(96540),r(15680)),o=["components"],s={title:"1.28.3"},l=void 0,u={unversionedId:"release-notes/1.28.3",id:"release-notes/1.28.3",title:"1.28.3",description:"General",source:"@site/../docs/release-notes/1.28.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.3",permalink:"/documentation/release-notes/1.28.3",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.3.md",tags:[],version:"current",frontMatter:{title:"1.28.3"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},g="wrapper";function f(e){var t=e.components,r=(0,i.A)(e,o);return(0,a.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deletion: re-evaluate the greedy = 1TB constant ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5358"},"#5358")),(0,a.yg)("li",{parentName:"ul"},"Monitoring & Logging: reduce gfal2 log verbosity  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5492"},"#5492")),(0,a.yg)("li",{parentName:"ul"},"Policies: Belle II: Modify permission for add_rules ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4293"},"#4293")),(0,a.yg)("li",{parentName:"ul"},"Policies: Update permission module for ESCAPE ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5513"},"#5513")),(0,a.yg)("li",{parentName:"ul"},"Recovery: Changing log messages in suspicious_replica_recoverer, fixing sleep_time issue and adding passive mode ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5300"},"#5300"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: get_pfn_to_rse() doesn\u2019t properly handle protocols with different ports ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5180"},"#5180")),(0,a.yg)("li",{parentName:"ul"},"Release management: Deprecation message in Paramiko ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5500"},"#5500")),(0,a.yg)("li",{parentName:"ul"},"Testing: Intermittent integration test failure of test_list_did_meta (TestDidMetaMongo) ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5472"},"#5472")),(0,a.yg)("li",{parentName:"ul"},"Transfers: impossibility to assign a transfertool crashes the submitter ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5458"},"#5458"))))}f.isMDXComponent=!0}}]);