"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"1.14.1.post1"},u=void 0,l={unversionedId:"release-notes/1.14.1.post1",id:"release-notes/1.14.1.post1",title:"1.14.1.post1",description:"Rucio",source:"@site/../docs/release-notes/1.14.1.post1.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.1.post1",permalink:"/documentation/release-notes/1.14.1.post1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.1.post1.md",tags:[],version:"current",frontMatter:{title:"1.14.1.post1"}},c={},p=[{value:"Rucio",id:"rucio",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rucio"},"Rucio"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release management: Create a script which automatically compiles release notes based on github milestones ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/213"},"#213"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Infrastructure: Restructure Dockerfile ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/246"},"#246")),(0,i.kt)("li",{parentName:"ul"},"RSE Manager: root: force GSI authentication ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/83"},"#83")),(0,i.kt)("li",{parentName:"ul"},"Release management: Removing duplicate packages in pip-requires ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/214"},"#214")),(0,i.kt)("li",{parentName:"ul"},"Release management: Removed kerberos from requirements to enable buildthedocs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/237"},"#237")),(0,i.kt)("li",{parentName:"ul"},"Testing: Fix pylint tests on travis ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/209"},"#209")),(0,i.kt)("li",{parentName:"ul"},"Testing: remove instant client installation from travis dockerfile ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/258"},"#258"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alarms: check_quota probe does not create quota for new SCRATCHDISKS for old accounts ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/199"},"#199")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: db: fix outer join read lock for PostgreSQL ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/262"},"#262")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: lifetime: circular dependency ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/77"},"#77")),(0,i.kt)("li",{parentName:"ul"},"Release management: Remove import rucio from webui setup.py ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/227"},"#227"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Add eventType and usrDN parameters to CLI up/download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/211"},"#211"))),(0,i.kt)("h3",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Error when adding dataset with lifetime ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/244"},"#244"))))}h.isMDXComponent=!0}}]);