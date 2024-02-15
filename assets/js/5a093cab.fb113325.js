"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5720],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,y=p["".concat(c,".").concat(g)]||p[g]||m[g]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(45072),a=n(95656),i=(n(11504),n(95788)),o=["components"],l={title:"1.26.5"},c=void 0,s={unversionedId:"release-notes/1.26.5",id:"release-notes/1.26.5",title:"1.26.5",description:"General",source:"@site/../docs/release-notes/1.26.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.5",permalink:"/documentation/release-notes/1.26.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.5.md",tags:[],version:"current",frontMatter:{title:"1.26.5"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,n=(0,a.c)(e,o);return(0,i.yg)(g,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: ATLAS: Do not restrict viewing the global account usage ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4838"},"#4838")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Replica sorting not enabled for JSON ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4105"},"#4105")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Remove ",(0,i.yg)("inlineCode",{parentName:"li"},"retry_other_fts")," option from conveyor ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4812"},"#4812"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Dataset deletion: Bug affecting detach in delete_did ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4848"},"#4848"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Fix spelling mistakes in bin/rucio ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4846"},"#4846")),(0,i.yg)("li",{parentName:"ul"},"Clients: Improve CSV export ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4847"},"#4847"))))}y.isMDXComponent=!0}}]);