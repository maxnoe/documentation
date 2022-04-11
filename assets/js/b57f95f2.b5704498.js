(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{282:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(388)),o=["components"],c={title:"1.18.7",sidebar_label:"1.18.7"},s={unversionedId:"release-notes/1.18.7",id:"release-notes/1.18.7",isDocsHomePage:!1,title:"1.18.7",description:"General",source:"@site/../docs/release-notes/1.18.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.7",permalink:"/documentation/release-notes/1.18.7",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.7.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1649688477,formattedLastUpdatedAt:"4/11/2022",sidebar_label:"1.18.7",frontMatter:{title:"1.18.7",sidebar_label:"1.18.7"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: list_replicas needs to return dataset information for client_extract mode ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1677"},"#1677")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Minor repository cleanup ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1841"},"#1841")),Object(i.b)("li",{parentName:"ul"},"Documentation: Typos and other small fixes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1853"},"#1853")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: Voms collector must change the emails according to the email defined in ldap  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1656"},"#1656")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: Probe to automatically recover suspicious files that have multiple replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1871"},"#1871")),Object(i.b)("li",{parentName:"ul"},"Rebalancing: Several small BB8 optimisiations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/425"},"#425"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: import of builtins not Python 2.6 compatible in downloadclient ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1845"},"#1845")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: \u2018expired\u2019 and \u2018obsolete\u2019 counters are not correctly updated ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1849"},"#1849")),Object(i.b)("li",{parentName:"ul"},"Traces: Suspicious file reporting broken in Kronos ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1870"},"#1870")),Object(i.b)("li",{parentName:"ul"},"Traces: Protection against bad traces ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1882"},"#1882")),Object(i.b)("li",{parentName:"ul"},"Transfers: Wrongly handled exception makes the poller crash ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1788"},"#1788")),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor submitter fts error message wrong ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1835"},"#1835"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Improve output of get-metadata, list-rse-attributes and stat  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1842"},"#1842")),Object(i.b)("li",{parentName:"ul"},"Clients: Last python3 fixes for clients ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1888"},"#1888")),Object(i.b)("li",{parentName:"ul"},"Clients: Client migration to Python3 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/819"},"#819"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Add the possibility to remove suspicious files from the bad files summary plots ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1864"},"#1864"))))}b.isMDXComponent=!0},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(h,c(c({ref:t},l),{},{components:r})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);